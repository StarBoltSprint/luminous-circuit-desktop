/** Grove→Join FRUIT-JOIN MARKS on empty ground BETWEEN Syl and Voss.
 * Gold MeshPhysical paper rings + gold octa fruit — not orchard posts,
 * not paper steles (Hub→Join), not join lamps, not coin, not chrome.
 * $BOLT witnesses Howl only. Parent hooks with:
 *   laterOn(() => { try { growFruitJoin(group, coarse); } catch { } });
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
    roughness: 0.28,
    metalness: 0.3,
    emissive: 0x5a4020,
    emissiveIntensity: 0.12,
    iridescence: 0.4,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.34,
    clearcoatRoughness: 0.32,
    transparent: false,
  });
}

function goldFruit() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x3a2a12,
    roughness: 0.16,
    metalness: 0.44,
    emissive: 0xe8c56a,
    emissiveIntensity: 0.2,
    iridescence: 0.5,
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
  rx: number;
  ry: number;
};

function stamp(geo: THREE.BufferGeometry, material: THREE.Material, poses: Pose[], group: THREE.Group) {
  if (!poses.length) return;
  const mesh = new THREE.InstancedMesh(geo, material, poses.length);
  const dummy = new THREE.Object3D();
  dummy.rotation.order = "YXZ";
  poses.forEach((p, i) => {
    dummy.position.set(p.x, p.y, p.z);
    dummy.rotation.set(p.rx, p.ry, 0);
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
/** Flat paper ring on the verge — not a coin, not joinlamps bulbs. */
const RING_INNER = 0.22;
const RING_OUTER = 0.38;
const FRUIT_R = 0.18;
const Y_RING = 0.04;
const Y_FRUIT = 0.62;
/**
 * Off orchardposts SIDE=15.2 and papersteles SIDE=8.8.
 * Empty verge of Grove→Join. Fruit joins when ready. $BOLT witness only.
 */
const SIDE = 16.4;
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

export const FRUIT_JOIN_SIZES = {
  ringInner: RING_INNER,
  ringOuter: RING_OUTER,
  fruitR: FRUIT_R,
  yRing: Y_RING,
  yFruit: Y_FRUIT,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, rings: 0, fruit: 0, want, fruitR: FRUIT_R, side: SIDE };
}

/**
 * Paper fruit-join marks on empty ground BETWEEN DISTRICTS kind==="grove"
 * (320, −980) and kind==="market" (−300, −340). 4 RingGeometry paper rings
 * + gold OctahedronGeometry fruit (coarse 3). MeshPhysical gold crystal —
 * never chrome, never coin, never orchardposts, never papersteles.
 * Offset SIDE=16.4. Voss joins fruit when it is ready. Parent stays.
 */
export function growFruitJoin(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "fruitjoin";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.fruitJoinCounts = counts;
  root.userData.fruitJoinCount = 0;
  root.userData.sizes = {
    ringInner: RING_INNER,
    ringOuter: RING_OUTER,
    fruitR: FRUIT_R,
    yRing: Y_RING,
    yFruit: Y_FRUIT,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const grove = den("grove");
  const join = den("market");
  if (!grove || !join) return;
  if (Math.hypot(grove.x - HUB_X, grove.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(join.x - HUB_X, join.z - HUB_Z) < HUB_R) return;

  const dx0 = join.x - grove.x;
  const dz0 = join.z - grove.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (grove.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (join.radius * PAD_LEAVE) / dist0);
  const ax = grove.x + dx0 * ta;
  const az = grove.z + dz0 * ta;
  const bx = join.x - dx0 * tb;
  const bz = join.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const rings: Pose[] = [];
  const fruit: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    rings.push({ x, y: Y_RING, z, rx: Math.PI / 2, ry: yaw });
    fruit.push({ x, y: Y_FRUIT, z, rx: 0, ry: yaw + 0.55 });
  }

  const segs = coarse ? 10 : 16;
  stamp(new THREE.RingGeometry(RING_INNER, RING_OUTER, segs), darkGold(), rings, root);
  stamp(new THREE.OctahedronGeometry(FRUIT_R, 0), goldFruit(), fruit, root);

  counts.n = rings.length;
  counts.rings = rings.length;
  counts.fruit = fruit.length;
  root.userData.fruitJoinCount = rings.length;
}
