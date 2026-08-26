/** Desktop frame budget. Keep bloom, dens, Star Core, MeshPhysical city. */

export const POWER_PREF = "high-performance" as const;

export const DPR_FLOOR = 1;
export const DPR_CEIL = 1.25;
export const FPS_DROP = 42;
export const FPS_RAISE = 55;
export const SETTLE_SEC = 0.65;
/** UnrealBloomPass composer fraction. Bloom stays on; smaller buffer is cheaper. */
export const BLOOM_RES = 0.36;

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
    x: Math.max(1, Math.round(width * BLOOM_RES)),
    y: Math.max(1, Math.round(height * BLOOM_RES)),
  };
}

export function bloomStrength(coarsePointer: boolean, resonance: number): number {
  const r = Math.max(0, Math.min(100, Number(resonance) || 0));
  return (coarsePointer ? 0.26 : 0.32) + r / 100 * 0.06;
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

/** Keep UnrealBloomPass at BLOOM_RES composer size across resize / DPR changes. */
export function wrapBloomHalfRes(pass: {
  setSize: (width: number, height: number) => void;
}): void {
  const native = pass.setSize.bind(pass);
  pass.setSize = (width: number, height: number) => {
    native(Math.max(1, width * BLOOM_RES), Math.max(1, height * BLOOM_RES));
  };
}

/** Bloom stays on. Radius tightens when fps sags so UnrealBloom costs less. */
export const BLOOM_RADIUS = 0.4;
export const BLOOM_RADIUS_LOW = 0.3;
export const FPS_BLOOM_SOFT = 38;
/** Higher threshold = fewer bright pixels enter the bloom kernel. Bloom stays. */
export const BLOOM_THRESHOLD = 0.7;
export const BLOOM_THRESHOLD_LOW = 0.82;

export function bloomRadius(fps: number): number {
  if (fps < 28) return BLOOM_RADIUS_LOW;
  if (fps < FPS_BLOOM_SOFT) return 0.34;
  return BLOOM_RADIUS;
}

export function applyBloomRadius(
  pass: { radius: number } | null | undefined,
  fps: number,
): void {
  if (!pass) return;
  const next = bloomRadius(fps);
  if (Math.abs(pass.radius - next) < 0.008) return;
  pass.radius = next;
}

export function bloomThreshold(fps: number): number {
  if (fps < 28) return BLOOM_THRESHOLD_LOW;
  if (fps < FPS_BLOOM_SOFT) return 0.76;
  return BLOOM_THRESHOLD;
}

export function applyBloomThreshold(
  pass: { threshold: number } | null | undefined,
  fps: number,
): void {
  if (!pass) return;
  const next = bloomThreshold(fps);
  if (Math.abs(pass.threshold - next) < 0.01) return;
  pass.threshold = next;
}

export type SoftShadowState = {
  soft: boolean;
  lowSec: number;
  highSec: number;
};

export function createSoftShadowState(coarsePointer: boolean): SoftShadowState {
  return { soft: !coarsePointer, lowSec: 0, highSec: 0 };
}

/** PCF when frames drop; PCFSoft when they recover. Shadows stay on. */
export function stepSoftShadows(
  state: SoftShadowState,
  fps: number,
  dt: number,
  coarsePointer: boolean,
): boolean {
  if (coarsePointer) {
    state.soft = false;
    state.lowSec = 0;
    state.highSec = 0;
    return false;
  }
  const t = Math.max(0, dt);
  if (fps < FPS_DROP) {
    state.lowSec += t;
    state.highSec = 0;
    if (state.lowSec >= SETTLE_SEC) {
      state.soft = false;
      state.lowSec = 0;
    }
  } else if (fps > FPS_RAISE) {
    state.highSec += t;
    state.lowSec = 0;
    if (state.highSec >= SETTLE_SEC) {
      state.soft = true;
      state.highSec = 0;
    }
  } else {
    state.lowSec = 0;
    state.highSec = 0;
  }
  return state.soft;
}

export function quietRenderer(renderer: {
  debug?: { checkShaderErrors?: boolean };
  info?: { autoReset?: boolean };
}): void {
  if (renderer.debug) renderer.debug.checkShaderErrors = false;
  if (renderer.info) renderer.info.autoReset = true;
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

/** Shadow map stays on. Smaller atlas when fps sags — dens, bloom, core, fly stay. */
export const SHADOW_MAP = 1024;
export const SHADOW_MAP_LOW = 512;
export const FPS_SHADOW_SOFT = 38;

export function shadowMapSize(fps: number): number {
  if (fps < FPS_SHADOW_SOFT) return SHADOW_MAP_LOW;
  return SHADOW_MAP;
}

export type ShadowMapSizeHandle = {
  set: (w: number, h: number) => void;
  x?: number;
};

export function applyShadowMapSize(
  mapSize: ShadowMapSizeHandle | null | undefined,
  fps: number,
): boolean {
  if (!mapSize) return false;
  const next = shadowMapSize(fps);
  if (Math.abs((mapSize.x ?? 0) - next) < 1) return false;
  mapSize.set(next, next);
  return true;
}

/** Skip a compositor frame when fps is very low. Sim + fly still run. Bloom stays on drawn frames. */
export const FPS_DRAW_SKIP = 26;

export function shouldSkipCompositor(fps: number, frame: number, mode: string): boolean {
  if (mode !== "play") return false;
  if (fps >= FPS_DRAW_SKIP) return false;
  return (frame & 1) === 1;
}

/** Reinhard is cheaper than ACES. Bloom / dens / core stay. Does not brighten the halo. */
export const TONE_ACES = 4;
export const TONE_REINHARD = 2;
export const FPS_TONE_SOFT = 38;

export function toneMapping(fps: number): number {
  if (fps < FPS_TONE_SOFT) return TONE_REINHARD;
  return TONE_ACES;
}

export type ToneHandle = {
  toneMapping: number;
};

export function applyToneMapping(renderer: ToneHandle | null | undefined, fps: number): void {
  if (!renderer) return;
  const next = toneMapping(fps);
  if (renderer.toneMapping === next) return;
  renderer.toneMapping = next;
}

/** City far clip when not aiming the parent. Star Core keeps 9000 when looking west or flying west. */
export const CAMERA_FAR = 9000;
export const CAMERA_FAR_CITY = 5600;
export const CAMERA_FAR_LOW = 3600;

export function cameraFar(lookingCore: boolean, fps: number): number {
  if (lookingCore) return CAMERA_FAR;
  if (fps < FPS_TONE_SOFT) return CAMERA_FAR_LOW;
  return CAMERA_FAR_CITY;
}

export type FarCamera = {
  far: number;
  updateProjectionMatrix: () => void;
};

export function applyCameraFar(
  camera: FarCamera | null | undefined,
  lookingCore: boolean,
  fps: number,
): void {
  if (!camera) return;
  const next = cameraFar(lookingCore, fps);
  if (Math.abs(camera.far - next) < 1) return;
  camera.far = next;
  camera.updateProjectionMatrix();
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
