import { agentById } from "./agents";
import type { BuildPiece } from "./build-spec";
import { clampLedger, clampPouch, defaultLedger, CITY_CAP, MAX_AWAY_BEATS, type Ledger, type Pouch } from "./society";
import type { KinSeed } from "./living";

const KEY = "lc-android-save-v1";
const HIDDEN_KEY = "lc-android-hidden";
const SAVE_VERSION = 4;

export type SeasonLine = {
  at: number;
  agent: string;
  text: string;
};

export type LastAway = {
  summary: string;
  beats: number;
  at: number;
};

export type SaveData = {
  version: number;
  resonance: number;
  howls: number;
  visited: string[];
  talked: string[];
  builds: string[];
  structures: BuildPiece[];
  lastCode: string;
  crafted: Record<string, number>;
  log: SeasonLine[];
  px: number;
  pz: number;
  yaw: number;
  ledger: Ledger;
  pouches: Record<string, Pouch>;
  kin: KinSeed[];
  lastAway?: LastAway;
};

const EMPTY_AWAY: LastAway = { summary: "", beats: 0, at: 0 };

const DEFAULT: SaveData = {
  version: SAVE_VERSION,
  resonance: 12,
  howls: 0,
  visited: [],
  talked: [],
  builds: [],
  structures: [],
  lastCode: "",
  crafted: {},
  log: [],
  px: 0,
  pz: 78,
  yaw: 0,
  ledger: defaultLedger(0),
  pouches: {},
  kin: [],
  lastAway: { ...EMPTY_AWAY },
};

let hiddenArmed = false;

function stampHidden() {
  try {
    localStorage.setItem(HIDDEN_KEY, String(Date.now()));
  } catch {
    /* private mode */
  }
}

/** First loadSave in the browser: stamp pagehide / visibility hidden. */
function armHiddenStamp() {
  if (hiddenArmed) return;
  if (typeof window === "undefined" || typeof document === "undefined") return;
  hiddenArmed = true;
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") stampHidden();
  });
  window.addEventListener("pagehide", stampHidden);
}

function readHiddenStamp(): number {
  try {
    const n = Number(localStorage.getItem(HIDDEN_KEY));
    return Number.isFinite(n) && n > 0 ? n : 0;
  } catch {
    return 0;
  }
}

export function loadSave(): SaveData {
  armHiddenStamp();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptySave();
    const parsed = JSON.parse(raw) as Partial<SaveData>;
    const now = Date.now();
    const ledger = clampLedger(parsed.ledger, now);
    const hidden = readHiddenStamp();
    if (hidden) {
      // Stamp proves we hid. lastTick stays last simulation — never the hide time.
      const tick = Number(parsed.ledger?.lastTick);
      if (Number.isFinite(tick) && tick > 1_000_000) ledger.lastTick = tick;
    }
    return {
      ...DEFAULT,
      ...parsed,
      version: SAVE_VERSION,
      visited: Array.isArray(parsed.visited) ? parsed.visited.slice(-48) : [],
      talked: Array.isArray(parsed.talked) ? parsed.talked.slice(-48) : [],
      builds: Array.isArray(parsed.builds) ? parsed.builds : [],
      structures: Array.isArray(parsed.structures) ? parsed.structures.slice(-CITY_CAP) : [],
      lastCode: typeof parsed.lastCode === "string" ? parsed.lastCode : "",
      crafted:
        parsed.crafted && typeof parsed.crafted === "object" && !Array.isArray(parsed.crafted)
          ? parsed.crafted
          : {},
      log: Array.isArray(parsed.log) ? parsed.log.slice(-36) : [],
      resonance: clamp(Number(parsed.resonance) || DEFAULT.resonance, 0, 100),
      ledger,
      pouches:
        parsed.pouches && typeof parsed.pouches === "object" && !Array.isArray(parsed.pouches)
          ? Object.fromEntries(
              Object.entries(parsed.pouches as Record<string, Pouch>).map(([id, p]) => [id, clampPouch(p)]),
            )
          : {},
      kin: Array.isArray(parsed.kin)
        ? (parsed.kin as KinSeed[]).filter((k) => k && typeof k.id === "string" && typeof k.crew === "string").slice(0, 24)
        : [],
      lastAway: clampLastAway(parsed.lastAway, ledger, parsed.log),
    };
  } catch {
    return emptySave();
  }
}

export function writeSave(data: SaveData) {
  try {
    localStorage.setItem(
      KEY,
      JSON.stringify({
        ...data,
        version: SAVE_VERSION,
        log: data.log.slice(-36),
        structures: data.structures.slice(-CITY_CAP),
        lastAway: clampLastAway(data.lastAway, data.ledger, data.log),
      }),
    );
  } catch {
    /* private mode */
  }
}

export function resetSave(): SaveData {
  const fresh = emptySave();
  writeSave(fresh);
  return fresh;
}

function emptySave(): SaveData {
  return {
    ...DEFAULT,
    visited: [],
    talked: [],
    builds: [],
    structures: [],
    crafted: {},
    log: [],
    ledger: defaultLedger(),
    pouches: {},
    kin: [],
    lastAway: { ...EMPTY_AWAY },
  };
}

function clampLastAway(raw: Partial<LastAway> | undefined, ledger?: Ledger, log?: SeasonLine[]): LastAway {
  if (!raw || typeof raw !== "object") return { ...EMPTY_AWAY };
  const beats = Number(raw.beats);
  const at = Number(raw.at);
  let n = Number.isFinite(beats) ? clamp(Math.floor(beats), 0, MAX_AWAY_BEATS) : 0;
  const summary = civicAwaySummary(raw.summary, n, ledger, log);
  if (summary && n === 0) n = 1;
  return {
    summary,
    beats: n,
    at: Number.isFinite(at) && at > 0 ? at : 0,
  };
}

/** Most recent keepers on the season log — who labored while away. */
function laborWho(log: unknown): string {
  if (!Array.isArray(log)) return "";
  const names: string[] = [];
  const seen = new Set<string>();
  for (let i = log.length - 1; i >= 0 && names.length < 3; i--) {
    const id = String((log[i] as SeasonLine | undefined)?.agent ?? "")
      .trim()
      .toLowerCase();
    if (!id || seen.has(id)) continue;
    const a = agentById(id);
    if (!a) continue;
    seen.add(id);
    names.push(a.name.split(" ")[0] || id.charAt(0).toUpperCase() + id.slice(1));
  }
  names.reverse();
  if (names.length <= 1) return names[0] ?? "";
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names[0]}, ${names[1]}, and ${names[2]}`;
}

/** Away-card: Charge / crystal / scripture. Names who labored. Never coin. */
function civicAwaySummary(raw: unknown, beats: number, ledger?: Ledger, log?: SeasonLine[]): string {
  let s = typeof raw === "string" ? raw.replace(/\s+/g, " ").trim() : "";
  s = s
    .replace(/\$\s*\d+(?:\.\d+)?/g, "")
    .replace(/\b((?:no|never|not|without)\s+)?coins?\b/gi, (m, keep: string | undefined) => (keep ? m : "Charge"))
    .replace(/\s{2,}/g, " ")
    .trim();
  if (beats > 0 && !/charge|crystal|scripture/i.test(s)) {
    const charge = clamp(Math.round(Number(ledger?.charge) || 0), 0, 99);
    const crystal = clamp(Math.round(Number(ledger?.crystal) || 0), 0, 99);
    const scripture = clamp(Math.round(Number(ledger?.scripture) || 0), 0, 99);
    const stock = `Charge ${charge} · crystal ${crystal}${scripture >= 1 ? ` · scripture ${scripture}` : ""}`;
    s = s ? `${s} · ${stock}` : `While you were gone — ${beats} beat${beats === 1 ? "" : "s"}. ${stock}. No coin.`;
  }
  const who = beats > 0 ? laborWho(log) : "";
  if (who && !/labored/i.test(s)) {
    s = s.replace(/\s*No coin\.?\s*$/i, "").replace(/\s*[.]*\s*$/, "");
    const extra = `. ${who} labored. No coin.`;
    const body = s || "While you were gone";
    s = `${body.slice(0, Math.max(0, 180 - extra.length)).trimEnd()}${extra}`;
  }
  const scripture = clamp(Math.round(Number(ledger?.scripture) || 0), 0, 99);
  if (beats > 0 && scripture >= 1 && !/iri|leftover light/i.test(s)) {
    const iri = " Iri named leftover light.";
    s = `${s.slice(0, Math.max(0, 180 - iri.length)).trimEnd()}${iri}`;
  }
  const crystalN = clamp(Math.round(Number(ledger?.crystal) || 0), 0, 99);
  if (beats > 0 && crystalN >= 1 && !/orren|kiln body/i.test(s)) {
    const orren = " Orren grew kiln body.";
    s = `${s.slice(0, Math.max(0, 180 - orren.length)).trimEnd()}${orren}`;
  }
  return s.slice(0, 180);
}

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}
