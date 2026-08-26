/** Wild→Foundry VEIN-KILN BULBS on empty ground BETWEEN Kesh and Orren.
 * Gold MeshPhysical lathe bulbs + cyan tetra kisses — not vein stones
 * (Hub→Kesh), not foundry lamps (Hub→Orren), not veinbough, not fruitkiln,
 * not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growWildFound(group, coarse); } catch { } });
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
    roughness: 0.26,
    metalness: 0.4,
    emissive: 0x5a4020,
    emissiveIntensity: 0.12,
    iridescence: 0.4,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.36,
    clearcoatRoughness: 0.3,
    transparent: false,
  });
}

function cyanKiss() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x163844,
    roughness: 0.12,
    metalness: 0.26,
    emissive: 0x7ef0ff,
    emissiveIntensity: 0.24,
    iridescence: 0.6,
    iridescenceIOR: 1.33,
    iridescenceThicknessRange: [60, 300],
    clearcoat: 0.54,
    clearcoatRoughness: 0.18,
    transparent: false,
  });
}

type Pose = {
  x: number;
  y: number;
  z: number;
  ry: number;
};

function stamp(geo: THREE.BufferGeometry, material: THREE.Material, poses: Pose[], group: THREE.Group) {
  if (!poses.length) return;
  const mesh = new THREE.InstancedMesh(geo, material, poses.length);
  const dummy = new THREE.Object3D();
  dummy.rotation.order = "YXZ";
  poses.forEach((p, i) => {
    dummy.position.set(p.x, p.y, p.z);
    dummy.rotation.set(0, p.ry, 0);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  });
  mesh.instanceMatrix.needsUpdate = true;
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  mesh.frustumCulled = true;
  mesh.renderOrder = 2;
  group.add(mesh);
}

const HUB_X = 0;
const HUB_Z = 78;
const HUB_R = 90;
/** Choosing bulb — not canalfound urns, not leftoverposts taper, not fruitkiln dodeca. */
const BULB_H = 1.24;
const TET_R = 0.17;
const Y_BULB = 0;
const Y_TET = BULB_H + TET_R * 0.32;
const SIDE = 33.4;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nBulbs(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

function latheBulb(segs: number) {
  const pts = [
    new THREE.Vector2(0.08, 0),
    new THREE.Vector2(0.14, BULB_H * 0.16),
    new THREE.Vector2(0.34, BULB_H * 0.48),
    new THREE.Vector2(0.12, BULB_H * 0.82),
    new THREE.Vector2(0.08, BULB_H),
  ];
  return new THREE.LatheGeometry(pts, segs);
}

export const WILD_FOUND_SIZES = {
  bulbH: BULB_H,
  tetR: TET_R,
  yBulb: Y_BULB,
  yTet: Y_TET,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, bulbs: 0, tets: 0, want, bulbH: BULB_H, tetR: TET_R, side: SIDE };
}

/**
 * Gold vein-kiln bulbs on empty ground BETWEEN DISTRICTS kind==="wild"
 * (860, −640) and kind==="foundry" (70, −680). 4 LatheGeometry bulbs + cyan
 * TetrahedronGeometry kisses (coarse 3). MeshPhysical crystal — never chrome,
 * never veinstones, never foundrylamps, never veinbough, never fruitkiln.
 * Offset SIDE=33.4. Charge still choosing may become body. Parent stays.
 */
export function growWildFound(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "wildfound";
  group.add(root);

  const want = nBulbs(coarse);
  const counts = emptyCounts(want);
  root.userData.wildFoundCounts = counts;
  root.userData.wildFoundCount = 0;
  root.userData.sizes = {
    bulbH: BULB_H,
    tetR: TET_R,
    yBulb: Y_BULB,
    yTet: Y_TET,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const wild = den("wild");
  const foundry = den("foundry");
  if (!wild || !foundry) return;
  if (Math.hypot(wild.x - HUB_X, wild.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(foundry.x - HUB_X, foundry.z - HUB_Z) < HUB_R) return;

  const dx0 = foundry.x - wild.x;
  const dz0 = foundry.z - wild.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (wild.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (foundry.radius * PAD_LEAVE) / dist0);
  const ax = wild.x + dx0 * ta;
  const az = wild.z + dz0 * ta;
  const bx = foundry.x - dx0 * tb;
  const bz = foundry.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const bulbs: Pose[] = [];
  const tets: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    bulbs.push({ x, y: Y_BULB, z, ry: yaw });
    tets.push({ x, y: Y_TET, z, ry: yaw + 0.4 });
  }

  const segs = coarse ? 8 : 12;
  stamp(latheBulb(segs), darkGold(), bulbs, root);
  stamp(new THREE.TetrahedronGeometry(TET_R), cyanKiss(), tets, root);

  counts.n = bulbs.length;
  counts.bulbs = bulbs.length;
  counts.tets = tets.length;
  root.userData.wildFoundCount = bulbs.length;
}
