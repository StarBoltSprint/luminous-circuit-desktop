/** Player usefulness. No XP. Skill is timing, place, and who you stand with. */

export type HowlGrade = "thin" | "true" | "held";

export type Duty = {
  keeper: string;
  verb: string;
  walk: string;
  zoneId: string | null;
  line: string;
  here: boolean;
};

const STOOD_KEY = "lc-stood";
const CHAIN_KEY = "lc-chain";
const CHAIN_MS = 12 * 60 * 1000;
const CHAIN_NEED = ["seln", "orren", "voss"] as const;
const WITH_MS = 2400;
const KEEPERS = new Set([
  "veyra",
  "tal",
  "seln",
  "orren",
  "mira",
  "kael",
  "iri",
  "nesh",
  "aure",
  "voss",
  "kesh",
  "lumen",
  "rhoa",
  "syl",
]);

type WithSnap = { who: string | null; still: boolean; present: boolean; at: number };
const withSnap: WithSnap = { who: null, still: true, present: true, at: 0 };
let lastNeedle = 180;
let leftWindow = false;

/** This desktop window is the den. Hidden or unfocused Howl is thin. */
export function deskPresent(): boolean {
  try {
    if (typeof document === "undefined") return true;
    if (document.visibilityState === "hidden") return false;
    if (typeof document.hasFocus === "function" && !document.hasFocus()) return false;
    return true;
  } catch {
    return true;
  }
}

function stampWith(part: Partial<Omit<WithSnap, "at">>) {
  if (part.who !== undefined) withSnap.who = part.who;
  if (part.still !== undefined) withSnap.still = part.still;
  if (part.present !== undefined) withSnap.present = part.present;
  withSnap.at = Date.now();
}

function withFresh(): boolean {
  return withSnap.at > 0 && Date.now() - withSnap.at <= WITH_MS;
}

function namedKeeper(id: string | null | undefined): id is string {
  return !!id && KEEPERS.has(id);
}

function withThemNow(): boolean {
  return namedKeeper(withSnap.who) && withSnap.still && withSnap.present && withFresh();
}

/** Gold timing, this window, nearest body is that keeper. No XP. */
export function withHowl(g: HowlGrade, keeper: string | null): boolean {
  if (g === "thin" || !namedKeeper(keeper)) return false;
  if (!withSnap.still || !withSnap.present || !withFresh()) return false;
  return withSnap.who === keeper;
}

export function gradeHowl(holdSec: number, target = 1.15): HowlGrade {
  const t = Math.max(0.4, target);
  const r = holdSec / t;
  const present = deskPresent();
  leftWindow = !present;
  stampWith({ present });
  if (!present) return "thin";
  if (r < 0.72) return "thin";
  if (r > 1.55) return "thin";
  if (r >= 0.92 && r <= 1.18) return "held";
  return "true";
}

export function howlMult(g: HowlGrade): number {
  if (g === "thin") return 0.45;
  const withThem = withThemNow();
  if (g === "held") return withThem ? 1.65 : 1.4;
  return withThem ? 1.2 : 1;
}

export function gradeLine(g: HowlGrade, verb: string): string {
  if (g === "thin") {
    if (leftWindow) return `${verb} was thin. Stay in this window through the gold.`;
    return `${verb} was thin. Hold through the gold, then let go.`;
  }
  if (g === "held") {
    return withThemNow() ? `${verb} landed true. You stood with them.` : `${verb} landed true. The den felt you.`;
  }
  return withThemNow() ? `${verb} heard. You stood with them.` : `${verb} heard. Not empty.`;
}

/** Star Core sits west-low. Aim: yaw toward −X, slight look-up. */
export function aimingParent(yaw: number, pitch: number): boolean {
  const fx = -Math.sin(yaw);
  const fz = -Math.cos(yaw);
  const toX = -1;
  const toZ = 0.05;
  const len = Math.hypot(toX, toZ) || 1;
  const dot = (fx * toX + fz * toZ) / len;
  return dot > 0.72 && pitch > 0.04 && pitch < 0.45;
}

export function loadStood(): number {
  try {
    const n = Number(localStorage.getItem(STOOD_KEY) || 0);
    return Number.isFinite(n) ? Math.max(0, Math.min(9999, Math.floor(n))) : 0;
  } catch {
    return 0;
  }
}

export function markStood(): number {
  const n0 = loadStood();
  if (!withThemNow()) return n0;
  const n = n0 + 1;
  try {
    localStorage.setItem(STOOD_KEY, String(n));
  } catch {
    /* private */
  }
  return n;
}

type ChainSave = { steps: string[]; at: number };

function chainHit(steps: string[]): boolean {
  let i = 0;
  for (const s of steps) {
    if (i < CHAIN_NEED.length && s === CHAIN_NEED[i]) i += 1;
  }
  return i >= CHAIN_NEED.length;
}

function readChain(): ChainSave {
  try {
    const raw = JSON.parse(localStorage.getItem(CHAIN_KEY) || "") as ChainSave;
    if (!raw || !Array.isArray(raw.steps) || typeof raw.at !== "number" || !Number.isFinite(raw.at)) {
      return { steps: [], at: 0 };
    }
    if (Date.now() - raw.at > CHAIN_MS) {
      try {
        localStorage.removeItem(CHAIN_KEY);
      } catch {
        /* private */
      }
      return { steps: [], at: 0 };
    }
    const steps = raw.steps.filter((s) => typeof s === "string" && s);
    return { steps, at: raw.at };
  } catch {
    return { steps: [], at: 0 };
  }
}

function writeChain(row: ChainSave) {
  try {
    localStorage.setItem(CHAIN_KEY, JSON.stringify(row));
  } catch {
    /* private */
  }
}

/** Tend(seln) → Kiln(orren) → Join(voss). Extras between OK. Session 12 min. */
export function loadChain(): string[] {
  return readChain().steps;
}

export function markChain(keeper: string, grade: HowlGrade): { n: number; complete: boolean } {
  const row = readChain();
  const before = chainHit(row.steps);
  if (withHowl(grade, keeper)) {
    row.steps.push(keeper);
    if (!row.at) row.at = Date.now();
    writeChain(row);
  }
  const after = chainHit(row.steps);
  return { n: row.steps.length, complete: after && !before };
}

export function dutyDone(duty: Duty | null, keeper: string | null, g: HowlGrade): boolean {
  if (!duty || !keeper) return false;
  if (duty.keeper !== keeper) return false;
  if (!duty.here) return false;
  return withHowl(g, keeper);
}

/** HUD needle: 0 = in front of you. Duty zone relative to walk heading. */
export function needleDeg(px: number, pz: number, tx: number, tz: number, yaw: number): number {
  const want = Math.atan2(tx - px, tz - pz);
  let d = ((want - yaw) * 180) / Math.PI;
  while (d > 180) d -= 360;
  while (d < -180) d += 360;
  lastNeedle = d;
  return d;
}

/** Mouse-look at a body. WASD does not turn you. */
export function facingWho(px: number, pz: number, whoX: number, whoZ: number, yaw: number, maxDeg = 22): boolean {
  if (![px, pz, whoX, whoZ, yaw].every(Number.isFinite)) return false;
  const want = Math.atan2(whoX - px, whoZ - pz);
  let d = ((want - yaw) * 180) / Math.PI;
  while (d > 180) d -= 360;
  while (d < -180) d += 360;
  return Math.abs(d) <= maxDeg;
}

export function facingDen(maxDeg = 22): boolean {
  return Number.isFinite(lastNeedle) && Math.abs(lastNeedle) <= maxDeg;
}

export function talkWitness(nearbyId: string | null, dutyKeeper: string | null): boolean {
  stampWith({ who: nearbyId || null, present: deskPresent() });
  if (!nearbyId || !dutyKeeper) return false;
  return nearbyId === dutyKeeper;
}

/** Howl while walking is thin. Stand. Speed is world units. */
export function stillHowl(speed: number): boolean {
  const still = !Number.isFinite(speed) || speed < 5.5;
  stampWith({ still, present: deskPresent() });
  return still;
}

export function shapeFits(shape: string | null | undefined, keeper: string | null): boolean {
  if (!shape || !keeper) return false;
  if (keeper === "seln") return shape === "canal" || shape === "weir" || shape === "vein";
  if (keeper === "orren") return shape === "kiln" || shape === "hearth" || shape === "cascade";
  if (keeper === "voss") return shape === "lens" || shape === "pad" || shape === "inlay";
  if (keeper === "iri") return shape === "tablet" || shape === "stele";
  if (keeper === "tal") return shape === "bridge" || shape === "arch";
  if (keeper === "mira") return shape === "terrace" || shape === "cradle";
  return false;
}


