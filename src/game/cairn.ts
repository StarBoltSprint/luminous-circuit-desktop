/** Hub→Foundry WAY-CAIRN — one stacked crystal mark on empty ground BETWEEN.
 * Hub land (0, 78) to Outer Foundry (70, -680). Not street plates (trails.ts).
 * Not Hub mosaic (mosaic.ts). Not foundry hearth (hearth.ts). Not path arches.
 * Parent hooks with:
 *   laterOn(() => { try { growCairn(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function darkGold() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x2c2212,
    roughness: 0.24,
    metalness: 0.48,
    emissive: 0x5a4020,
    emissiveIntensity: 0.14,
    iridescence: 0.44,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.42,
    clearcoatRoughness: 0.26,
    transparent: false,
  });
}

function darkViolet() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x141022,
    roughness: 0.2,
    metalness: 0.38,
    emissive: 0x322456,
    emissiveIntensity: 0.16,
    iridescence: 0.52,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [80, 340],
    clearcoat: 0.46,
    clearcoatRoughness: 0.24,
    transparent: false,
  });
}

/** Hub land — save.ts / engine.ts pz=78. Hub is not a DISTRICTS den. */
const HUB_X = 0;
const HUB_Z = 78;
const HUB_R = 90;
/** Off the Hub→Foundry chord and the 16-wide world.ts path (half-width 8). */
const SIDE = 22;
/** Start past den pads (world.ts pad r≈88–98), truly BETWEEN Hub and kiln. */
const PAD_LEAVE = 0.82;
const N_FINE = 3;
const N_COARSE = 2;

/** World from cairn-local X/Z after yaw (THREE rotation.y). */
function at(cx: number, cz: number, lx: number, lz: number, yaw: number) {
  const c = Math.cos(yaw);
  const s = Math.sin(yaw);
  return { x: cx + lx * c + lz * s, z: cz - lx * s + lz * c };
}

function leaveHubT(dx: number, dz: number): number {
  const a = dx * dx + dz * dz;
  const b = 2 * (HUB_X * dx + HUB_Z * dz);
  const c0 = HUB_X * HUB_X + HUB_Z * HUB_Z - HUB_R * HUB_R;
  const disc = b * b - 4 * a * c0;
  if (a < 1e-8 || disc < 0) return 0;
  const s = Math.sqrt(disc);
  const t1 = (-b - s) / (2 * a);
  const t2 = (-b + s) / (2 * a);
  const t = t1 > 1e-6 ? t1 : t2;
  return Math.max(0, Math.min(1, t));
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x, z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

type Stone = {
  sx: number;
  sy: number;
  sz: number;
  y: number;
  ox: number;
  oz: number;
  rx: number;
  ry: number;
  gold: boolean;
};

/** Three stacked living-crystal cobbles. Cap skipped on coarse. Never chrome. */
const STONES: Stone[] = [
  { sx: 1.08, sy: 0.46, sz: 0.94, y: 0.4, ox: 0.05, oz: -0.04, rx: 0.12, ry: 0.18, gold: true },
  { sx: 0.76, sy: 0.36, sz: 0.68, y: 1.02, ox: -0.07, oz: 0.05, rx: -0.08, ry: -0.46, gold: false },
  { sx: 0.48, sy: 0.28, sz: 0.44, y: 1.52, ox: 0.03, oz: 0.02, rx: 0.16, ry: 0.72, gold: true },
];

export const CAIRN_SIZES = {
  nFine: N_FINE,
  nCoarse: N_COARSE,
  side: SIDE,
  hubX: HUB_X,
  hubZ: HUB_Z,
  hubR: HUB_R,
  padLeave: PAD_LEAVE,
};

const emptySizes = {
  nFine: N_FINE,
  nCoarse: N_COARSE,
  side: SIDE,
  hubX: HUB_X,
  hubZ: HUB_Z,
  n: 0,
  want: 0,
  x: 0,
  y: 0,
  z: 0,
  yaw: 0,
  cairnCount: 0,
  stoneCount: 0,
};

/**
 * One Hub→Foundry way-cairn on empty ground BETWEEN spawn (0, 78) and
 * DISTRICTS kind==="foundry" (70, -680). 3 IcosahedronGeometry stones
 * (coarse 2) MeshPhysical dark gold/violet — never chrome. Offset SIDE=22
 * off the chord onto the west verge, Hub skip (r<90), foundry pad leave.
 * Not trails. Not mosaic. Not hearth.
 */
export function growCairn(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "cairn";
  group.add(root);

  const want = coarse ? N_COARSE : N_FINE;
  const sizes = { ...emptySizes, want };
  root.userData.sizes = sizes;
  root.userData.cairnCount = 0;
  root.userData.stoneCount = 0;

  const foundry = den("foundry");
  if (!foundry) return;
  if (Math.hypot(foundry.x, foundry.z) < HUB_R) return;

  const dx0 = foundry.x - HUB_X;
  const dz0 = foundry.z - HUB_Z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const tHub = leaveHubT(dx0, dz0);
  const tPad = 1 - Math.min(0.28, (foundry.radius * PAD_LEAVE) / dist0);
  if (tPad <= tHub) return;

  const t = tHub + (tPad - tHub) * 0.5;
  const mx = HUB_X + dx0 * t;
  const mz = HUB_Z + dz0 * t;
  const ux = dx0 / dist0;
  const uz = dz0 / dist0;
  const px = -uz;
  const pz = ux;
  const s1 = Math.hypot(mx + px * SIDE, mz + pz * SIDE);
  const s2 = Math.hypot(mx - px * SIDE, mz - pz * SIDE);
  /** Nearer Hub — empty west verge, not the densify halls on the east. */
  const side = s1 <= s2 ? 1 : -1;
  const x = mx + px * SIDE * side;
  const z = mz + pz * SIDE * side;
  if (occupied(x, z)) return;

  const yaw = Math.atan2(dx0, dz0);
  const n = Math.min(want, STONES.length);
  const gold = darkGold();
  const violet = darkViolet();
  const geo = new THREE.IcosahedronGeometry(1, 0);

  for (let i = 0; i < n; i++) {
    const st = STONES[i]!;
    const p = at(x, z, st.ox, st.oz, yaw);
    const mesh = new THREE.Mesh(geo, st.gold ? gold : violet);
    mesh.position.set(p.x, st.y, p.z);
    mesh.rotation.set(st.rx, yaw + st.ry, 0);
    mesh.scale.set(st.sx, st.sy, st.sz);
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    mesh.frustumCulled = true;
    mesh.renderOrder = 2;
    root.add(mesh);
  }

  sizes.n = n;
  sizes.x = x;
  sizes.y = STONES[0]!.y;
  sizes.z = z;
  sizes.yaw = yaw;
  sizes.cairnCount = 1;
  sizes.stoneCount = n;
  root.userData.cairnCount = 1;
  root.userData.stoneCount = n;
}
