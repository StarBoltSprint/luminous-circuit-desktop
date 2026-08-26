/** Desktop frame budget. Keep bloom, dens, Star Core, MeshPhysical city. */

export const POWER_PREF = "high-performance" as const;

export const DPR_FLOOR = 1;
export const DPR_CEIL = 1.4;
export const FPS_DROP = 42;
export const FPS_RAISE = 55;
export const SETTLE_SEC = 0.65;

/** world.tick pumps 1–2 laterOn jobs; districts + stamps + grow ≈ 22. */
export const LATER_TICKS_TO_FREEZE = 28;

export type ShadowMapHandle = {
  autoUpdate: boolean;
  needsUpdate: boolean;
};

export type DprRenderer = {
  getPixelRatio: () => number;
  setPixelRatio: (n: number) => void;
};

export type DprComposer = {
  setPixelRatio: (n: number) => void;
} | null | undefined;

export type AdaptiveDpr = {
  dpr: number;
  lowSec: number;
  highSec: number;
};

export function capDpr(devicePixelRatio: number): number {
  const d = Number(devicePixelRatio) || 1;
  return Math.max(DPR_FLOOR, Math.min(d, DPR_CEIL));
}

export function rendererTries(canvas: HTMLCanvasElement) {
  const base = {
    canvas,
    alpha: false,
    powerPreference: POWER_PREF,
    failIfMajorPerformanceCaveat: false as const,
    stencil: false,
    depth: true,
    preserveDrawingBuffer: false,
    premultipliedAlpha: false,
  };
  return [
    { ...base, antialias: true },
    { ...base, antialias: false },
  ];
}

export function bloomSize(width: number, height: number): { x: number; y: number } {
  return {
    x: Math.max(1, Math.round(width * 0.45)),
    y: Math.max(1, Math.round(height * 0.45)),
  };
}

export function bloomStrength(coarsePointer: boolean, resonance: number): number {
  const r = Math.max(0, Math.min(100, Number(resonance) || 0));
  return (coarsePointer ? 0.28 : 0.36) + r / 100 * 0.08;
}

export function applyBloomStrength(
  pass: { strength: number } | null | undefined,
  coarsePointer: boolean,
  resonance: number,
): void {
  if (!pass) return;
  const next = bloomStrength(coarsePointer, resonance);
  if (Math.abs(pass.strength - next) < 0.004) return;
  pass.strength = next;
}

/** Keep UnrealBloomPass at 0.45 composer size across resize / DPR changes. */
export function wrapBloomHalfRes(pass: {
  setSize: (width: number, height: number) => void;
}): void {
  const native = pass.setSize.bind(pass);
  pass.setSize = (width: number, height: number) => {
    native(Math.max(1, width * 0.45), Math.max(1, height * 0.45));
  };
}

export function createAdaptiveDpr(devicePixelRatio: number): AdaptiveDpr {
  return { dpr: capDpr(devicePixelRatio), lowSec: 0, highSec: 0 };
}

export function stepAdaptiveDpr(
  state: AdaptiveDpr,
  fps: number,
  dt: number,
  devicePixelRatio: number,
): number {
  const cap = capDpr(devicePixelRatio);
  const t = Math.max(0, dt);
  if (fps < FPS_DROP) {
    state.lowSec += t;
    state.highSec = 0;
    if (state.lowSec >= SETTLE_SEC) {
      const step = fps < 28 ? 0.35 : 0.25;
      state.dpr = Math.max(DPR_FLOOR, Math.round((state.dpr - step) * 100) / 100);
      state.lowSec = 0;
    }
  } else if (fps > FPS_RAISE) {
    state.highSec += t;
    state.lowSec = 0;
    if (state.highSec >= SETTLE_SEC) {
      state.dpr = Math.min(cap, Math.round((state.dpr + 0.15) * 100) / 100);
      state.highSec = 0;
    }
  } else {
    state.lowSec = 0;
    state.highSec = 0;
  }
  if (state.dpr > cap) state.dpr = cap;
  if (state.dpr < DPR_FLOOR) state.dpr = DPR_FLOOR;
  return state.dpr;
}

export function applyPixelRatio(
  renderer: DprRenderer,
  composer: DprComposer,
  dpr: number,
): void {
  const next = Math.max(DPR_FLOOR, dpr);
  if (Math.abs(renderer.getPixelRatio() - next) < 0.02) return;
  renderer.setPixelRatio(next);
  composer?.setPixelRatio(next);
}

export function shouldSkipDraw(doc: { hidden?: boolean } | null | undefined): boolean {
  return !!doc?.hidden;
}

export function shouldSkipStill(mode: string, alreadyDrawn: boolean): boolean {
  return mode === "pause" && alreadyDrawn;
}

export function freezeShadows(shadowMap: ShadowMapHandle): void {
  shadowMap.autoUpdate = false;
  shadowMap.needsUpdate = true;
}

export function createLaterFreeze(ticksNeeded = LATER_TICKS_TO_FREEZE) {
  let ticks = 0;
  let done = false;
  return {
    get done() {
      return done;
    },
    afterTick(apply: () => void) {
      if (done) return;
      ticks += 1;
      if (ticks >= ticksNeeded) {
        done = true;
        apply();
      }
    },
  };
}
