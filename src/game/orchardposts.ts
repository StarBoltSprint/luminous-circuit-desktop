/** Hub→Gold Orchard BOUGH POSTS on empty ground BETWEEN spawn and Syl.
 * Gold MeshPhysical posts + gold octa fruit-caps — not hanging fruit (fruit.ts),
 * not orchard boughs (boughs.ts), not Foundry lamps, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growOrchardPosts(group, coarse); } catch { } });
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
    metalness: 0.42,
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
    metalness: 0.46,
    emissive: 0xe8c56a,
    emissiveIntensity: 0.22,
    iridescence: 0.52,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [80, 340],
    clearcoat: 0.48,
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

/** Hub land — save.ts / engine.ts pz=78. Hub is not a DISTRICTS den. */
const HUB_X = 0;
const HUB_Z = 78;
const HUB_R = 90;
/** Shorter than foundrylamps 3.4 — a BETWEEN orchard mark, not kiln posts. */
const POST_H = 2.74;
const POST_R = 0.11;
const FRUIT_R = 0.2;
const Y_POST = POST_H * 0.5;
const Y_FRUIT = POST_H + FRUIT_R * 0.55;
/**
 * Off foundrylamps SIDE=12.6 (south kiln chord) and veinstones SIDE=14.2.
 * Empty verge of Hub→Gold Orchard, not the bough floor.
 */
const SIDE = 15.2;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nPosts(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

export const ORCHARD_POST_SIZES = {
  h: POST_H,
  r: POST_R,
  fruitR: FRUIT_R,
  yPost: Y_POST,
  yFruit: Y_FRUIT,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, posts: 0, fruit: 0, want, h: POST_H, r: POST_R, fruitR: FRUIT_R, side: SIDE };
}

/**
 * Gold orchard posts on empty ground BETWEEN Hub land (0, 78) and
 * DISTRICTS kind==="grove" (320, −980). 4 CylinderGeometry posts h=2.74 r=0.11
 * + gold OctahedronGeometry fruit-caps r=0.20 (coarse 3). MeshPhysical gold
 * crystal — never chrome, never hanging fruit (fruit.ts), never kiln lamps.
 * Offset SIDE=15.2. Syl waits until leftover Howl wants a bough. Parent stays.
 */
export function growOrchardPosts(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "orchardposts";
  group.add(root);

  const want = nPosts(coarse);
  const counts = emptyCounts(want);
  root.userData.orchardPostCounts = counts;
  root.userData.orchardPostCount = 0;
  root.userData.sizes = {
    h: POST_H,
    r: POST_R,
    fruitR: FRUIT_R,
    yPost: Y_POST,
    yFruit: Y_FRUIT,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const grove = den("grove");
  if (!grove) return;
  if (Math.hypot(grove.x, grove.z) < HUB_R) return;

  const dx0 = grove.x - HUB_X;
  const dz0 = grove.z - HUB_Z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, HUB_R / dist0);
  const tb = Math.min(0.28, (grove.radius * PAD_LEAVE) / dist0);
  const ax = HUB_X + dx0 * ta;
  const az = HUB_Z + dz0 * ta;
  const bx = grove.x - dx0 * tb;
  const bz = grove.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const posts: Pose[] = [];
  const fruit: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    posts.push({ x, y: Y_POST, z, ry: yaw });
    fruit.push({ x, y: Y_FRUIT, z, ry: yaw + 0.55 });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.CylinderGeometry(POST_R, POST_R, POST_H, segs), darkGold(), posts, root);
  stamp(new THREE.OctahedronGeometry(FRUIT_R, 0), goldFruit(), fruit, root);

  counts.n = posts.length;
  counts.posts = posts.length;
  counts.fruit = fruit.length;
  root.userData.orchardPostCount = posts.length;
}
