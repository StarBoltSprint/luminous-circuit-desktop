/** Star Core CORONA RAYS at the parent Star Core — charge is seen, not stored.
 * Not atmos.ts discs. Not Lumen beacon (beam.ts). Not plaza lens (lens.ts).
 * Parent hooks with:
 *   laterOn(() => { try { corona = growCorona(group, coarse); } catch { } });
 *   // in world.tick(t): try { corona?.tick(t); } catch { }
 * Dispose is world group.clear(). No vibrate. No photos.
 */
import * as THREE from "three";
import { STAR_CORE, GLOBE_R, GLOBE_R_COARSE } from "./atmos";

/** atmos lookAt uses CORE_Y * 0.35 = 189; task pins 190. */
const LOOK_Y = 190;

const RAY_N = 10;
const RAY_N_COARSE = 4;
const RAY_OP = 0.1;
const RAY_HEX = 0x7ef0ff;
const RAY_SPIN = 0.03;
const RAY_ORDER = -6;

const INNER_OP = 0.2;
const INNER_OP_MIN = 0.12;
const INNER_OP_MAX = 0.28;
const INNER_HEX = 0xe8fff8;
const INNER_PULSE = 0.7;
const INNER_ORDER = -5;

function globeR(coarse: boolean) {
  return coarse ? GLOBE_R_COARSE : GLOBE_R;
}

const SIZES = {
  x: STAR_CORE.x,
  y: STAR_CORE.y,
  z: STAR_CORE.z,
  lookY: LOOK_Y,
  globeR: GLOBE_R,
  rayN: RAY_N,
  rayNCoarse: RAY_N_COARSE,
  rayOp: RAY_OP,
  raySpin: RAY_SPIN,
  innerOp: INNER_OP,
  innerOpMin: INNER_OP_MIN,
  innerOpMax: INNER_OP_MAX,
  pulse: INNER_PULSE,
};

function addRay(hex: number, opacity: number, map: THREE.Texture | null) {
  return new THREE.MeshBasicMaterial({
    color: hex,
    map: map ?? undefined,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: true,
    fog: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
}

function coronaRayTexture() {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 256;
  const g = c.getContext("2d");
  if (!g) return null;
  const img = g.createImageData(64, 256);
  for (let y = 0; y < 256; y++) {
    const v = y / 255;
    const fromC = Math.abs(v - 0.5) * 2;
    const peak = 0.76;
    const d = fromC - peak;
    const band = Math.exp(-(d * d) / 0.028);
    const tipFade = fromC > 0.92 ? 1 - (fromC - 0.92) / 0.08 : 1;
    for (let x = 0; x < 64; x++) {
      const u = (x / 63 - 0.5) * 2;
      const hf = Math.exp(-u * u * 4.2);
      const a = Math.max(0, Math.min(1, band * hf * tipFade));
      const i = (y * 64 + x) * 4;
      img.data[i] = 126;
      img.data[i + 1] = 240;
      img.data[i + 2] = 255;
      img.data[i + 3] = Math.round(a * 255);
    }
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.needsUpdate = true;
  return t;
}

/**
 * Star Core corona rays at STAR_CORE (-4050, 540, 195). Group lookAt(0, 190, 0).
 * Cyan planes scaled to globeR ~980 (coarse 640). Inner spark sphere at 0.24 globeR.
 * tick: rays 0.03 rad/s + inner opacity breath. coarse: skip tick, still plant rays.
 */
export function growCorona(
  group: THREE.Group,
  coarse: boolean,
): { tick: (t: number) => void } {
  const root = new THREE.Group();
  root.name = "corona";
  group.add(root);

  const r = globeR(coarse);
  const n = coarse ? RAY_N_COARSE : RAY_N;
  const innerR = r * 0.24;
  const rayW = r * 0.044;
  const rayH = r * 2.85;
  const segs = coarse ? 8 : 12;
  const rings = coarse ? 6 : 10;

  const core = new THREE.Group();
  core.name = "corona-core";
  core.position.set(STAR_CORE.x, STAR_CORE.y, STAR_CORE.z);
  core.lookAt(0, LOOK_Y, 0);
  core.frustumCulled = false;
  core.castShadow = false;
  core.receiveShadow = false;

  const rays = new THREE.Group();
  rays.name = "corona-rays";
  rays.frustumCulled = false;
  const rayGeo = new THREE.PlaneGeometry(rayW, rayH);
  const rayMap = coronaRayTexture();
  const rayMat = addRay(RAY_HEX, RAY_OP, rayMap);
  for (let i = 0; i < n; i++) {
    const mesh = new THREE.Mesh(rayGeo, rayMat);
    mesh.rotation.z = (i / n) * Math.PI;
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    mesh.frustumCulled = false;
    mesh.renderOrder = RAY_ORDER;
    rays.add(mesh);
  }
  core.add(rays);

  const innerMat = addRay(INNER_HEX, INNER_OP, null);
  const inner = new THREE.Mesh(new THREE.SphereGeometry(innerR, segs, rings), innerMat);
  inner.castShadow = false;
  inner.receiveShadow = false;
  inner.frustumCulled = false;
  inner.renderOrder = INNER_ORDER;
  core.add(inner);

  root.add(core);

  root.userData.rayCount = n;
  root.userData.innerCount = 1;
  root.userData.breathing = !coarse;
  root.userData.sizes = {
    x: STAR_CORE.x,
    y: STAR_CORE.y,
    z: STAR_CORE.z,
    lookY: LOOK_Y,
    globeR: r,
    rayW,
    rayH,
    rayN: n,
    rayOp: RAY_OP,
    raySpin: coarse ? 0 : RAY_SPIN,
    innerR,
    innerOp: INNER_OP,
    innerOpMin: coarse ? INNER_OP : INNER_OP_MIN,
    innerOpMax: coarse ? INNER_OP : INNER_OP_MAX,
    pulse: coarse ? 0 : INNER_PULSE,
    segs,
    rings,
  };

  if (coarse) return { tick() {} };

  const span = INNER_OP_MAX - INNER_OP_MIN;
  return {
    tick(t: number) {
      rays.rotation.z = t * RAY_SPIN;
      const u = (Math.sin(t * INNER_PULSE) + 1) * 0.5;
      innerMat.opacity = INNER_OP_MIN + u * span;
    },
  };
}

export { SIZES as CORONA_SIZES };
