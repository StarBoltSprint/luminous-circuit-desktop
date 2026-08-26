/** Grove→Foundry FRUIT-KILN MARKS on empty ground BETWEEN Syl and Orren.
 * Gold MeshPhysical dodeca fruit + gold cone kisses — not orchard posts
 * (Hub→Syl), not foundry lamps, not hanging fruit (fruit.ts), not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growFruitKiln(group, coarse); } catch { } });
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
/** Quiet fruit the kiln cannot sit in — not orchardposts 2.74, not kilnmarks capsules. */
const STEM_H = 1.55;
const STEM_R = 0.1;
const FRUIT_R = 0.28;
const CONE_R = 0.12;
const CONE_H = 0.34;
const Y_STEM = STEM_H * 0.5;
const Y_FRUIT = STEM_H + FRUIT_R * 0.35;
const Y_CONE = Y_FRUIT + FRUIT_R * 0.55 + CONE_H * 0.35;
/**
 * Off orchardposts SIDE=15.2 (Hub→Grove) and foundrylamps SIDE=12.6 (Hub→kiln).
 * Empty verge of Grove→Foundry: fruit, not fire. Hurry is chrome.
 */
const SIDE = 24.6;
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

export const FRUIT_KILN_SIZES = {
  stemH: STEM_H,
  stemR: STEM_R,
  fruitR: FRUIT_R,
  coneR: CONE_R,
  coneH: CONE_H,
  yStem: Y_STEM,
  yFruit: Y_FRUIT,
  yCone: Y_CONE,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, stems: 0, fruit: 0, cones: 0, want, stemH: STEM_H, fruitR: FRUIT_R, side: SIDE };
}

/**
 * Gold fruit-kiln marks on empty ground BETWEEN DISTRICTS kind==="grove"
 * (320, −980) and kind==="foundry" (70, −680). 4 CylinderGeometry stems +
 * DodecahedronGeometry fruit + small ConeGeometry kisses (coarse 3).
 * MeshPhysical gold crystal — never chrome, never orchardposts, never kiln body.
 * Offset SIDE=24.6. Syl grows quiet crystal; Orren does not sit in it. Parent stays.
 */
export function growFruitKiln(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "fruitkiln";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.fruitKilnCounts = counts;
  root.userData.fruitKilnCount = 0;
  root.userData.sizes = {
    stemH: STEM_H,
    stemR: STEM_R,
    fruitR: FRUIT_R,
    coneR: CONE_R,
    coneH: CONE_H,
    yStem: Y_STEM,
    yFruit: Y_FRUIT,
    yCone: Y_CONE,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const grove = den("grove");
  const foundry = den("foundry");
  if (!grove || !foundry) return;
  if (Math.hypot(grove.x - HUB_X, grove.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(foundry.x - HUB_X, foundry.z - HUB_Z) < HUB_R) return;

  const dx0 = foundry.x - grove.x;
  const dz0 = foundry.z - grove.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (grove.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (foundry.radius * PAD_LEAVE) / dist0);
  const ax = grove.x + dx0 * ta;
  const az = grove.z + dz0 * ta;
  const bx = foundry.x - dx0 * tb;
  const bz = foundry.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const stems: Pose[] = [];
  const fruit: Pose[] = [];
  const cones: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    stems.push({ x, y: Y_STEM, z, ry: yaw });
    fruit.push({ x, y: Y_FRUIT, z, ry: yaw + 0.4 });
    cones.push({ x, y: Y_CONE, z, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.CylinderGeometry(STEM_R, STEM_R, STEM_H, segs), darkGold(), stems, root);
  stamp(new THREE.DodecahedronGeometry(FRUIT_R, 0), goldFruit(), fruit, root);
  stamp(new THREE.ConeGeometry(CONE_R, CONE_H, segs), darkGold(), cones, root);

  counts.n = stems.length;
  counts.stems = stems.length;
  counts.fruit = fruit.length;
  counts.cones = cones.length;
  root.userData.fruitKilnCount = stems.length;
}
