/** Wild→Orchard VEIN-BOUGH MARKS on empty ground BETWEEN Kesh and Syl.
 * Gold MeshPhysical tapered trunks + gold octa fruit — not vein stones
 * (Hub→Kesh), not orchard posts (Hub→Syl), not fruitkiln, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growVeinBough(group, coarse); } catch { } });
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

function goldFruit() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x3a2a12,
    roughness: 0.17,
    metalness: 0.44,
    emissive: 0xe8c56a,
    emissiveIntensity: 0.2,
    iridescence: 0.52,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [80, 340],
    clearcoat: 0.46,
    clearcoatRoughness: 0.22,
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
/** Tapered trunk — not orchardposts uniform cylinder, not veinstones icosa. */
const TRUNK_H = 2.08;
const TRUNK_R0 = 0.16;
const TRUNK_R1 = 0.05;
const FRUIT_R = 0.22;
const Y_TRUNK = TRUNK_H * 0.5;
const Y_FRUIT = TRUNK_H + FRUIT_R * 0.45;
const SIDE = 26.8;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nMarks(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

export const VEIN_BOUGH_SIZES = {
  trunkH: TRUNK_H,
  trunkR0: TRUNK_R0,
  trunkR1: TRUNK_R1,
  fruitR: FRUIT_R,
  yTrunk: Y_TRUNK,
  yFruit: Y_FRUIT,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, trunks: 0, fruit: 0, want, trunkH: TRUNK_H, fruitR: FRUIT_R, side: SIDE };
}

/**
 * Gold vein-boughs on empty ground BETWEEN DISTRICTS kind==="wild"
 * (860, −640) and kind==="grove" (320, −980). 4 tapered CylinderGeometry
 * trunks + gold OctahedronGeometry fruit (coarse 3). MeshPhysical gold
 * crystal — never chrome, never veinstones, never orchardposts.
 * Offset SIDE=26.8. Charge still choosing may want shade. Parent stays.
 */
export function growVeinBough(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "veinbough";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.veinBoughCounts = counts;
  root.userData.veinBoughCount = 0;
  root.userData.sizes = {
    trunkH: TRUNK_H,
    trunkR0: TRUNK_R0,
    trunkR1: TRUNK_R1,
    fruitR: FRUIT_R,
    yTrunk: Y_TRUNK,
    yFruit: Y_FRUIT,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const wild = den("wild");
  const grove = den("grove");
  if (!wild || !grove) return;
  if (Math.hypot(wild.x - HUB_X, wild.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(grove.x - HUB_X, grove.z - HUB_Z) < HUB_R) return;

  const dx0 = grove.x - wild.x;
  const dz0 = grove.z - wild.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (wild.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (grove.radius * PAD_LEAVE) / dist0);
  const ax = wild.x + dx0 * ta;
  const az = wild.z + dz0 * ta;
  const bx = grove.x - dx0 * tb;
  const bz = grove.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const trunks: Pose[] = [];
  const fruit: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    trunks.push({ x, y: Y_TRUNK, z, ry: yaw });
    fruit.push({ x, y: Y_FRUIT, z, ry: yaw + 0.5 });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.CylinderGeometry(TRUNK_R1, TRUNK_R0, TRUNK_H, segs), darkGold(), trunks, root);
  stamp(new THREE.OctahedronGeometry(FRUIT_R, 0), goldFruit(), fruit, root);

  counts.n = trunks.length;
  counts.trunks = trunks.length;
  counts.fruit = fruit.length;
  root.userData.veinBoughCount = trunks.length;
}
