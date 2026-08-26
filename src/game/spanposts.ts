/** Hub→Light-Bridge SPAN POSTS on empty ground BETWEEN spawn and Tal.
 * Cyan MeshPhysical posts + cyan torus rings — not den pylons (pylons.ts),
 * not span decks (spans.ts), not path arches, not street lamps, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growSpanPosts(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function darkCyan() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x10242c,
    roughness: 0.24,
    metalness: 0.4,
    emissive: 0x1a5a66,
    emissiveIntensity: 0.14,
    iridescence: 0.44,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.38,
    clearcoatRoughness: 0.28,
    transparent: false,
  });
}

function cyanCrystal() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x163844,
    roughness: 0.15,
    metalness: 0.42,
    emissive: 0x2ee6ff,
    emissiveIntensity: 0.24,
    iridescence: 0.56,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [70, 320],
    clearcoat: 0.5,
    clearcoatRoughness: 0.2,
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

/** Hub land — save.ts / engine.ts pz=78. Hub is not a DISTRICTS den. */
const HUB_X = 0;
const HUB_Z = 78;
const HUB_R = 90;
/** Taller than canalposts 3.15 — a BETWEEN span mark, not Tal's den pylons. */
const POST_H = 3.55;
const POST_R = 0.09;
const RING_R = 0.28;
const RING_T = 0.035;
const Y_POST = POST_H * 0.5;
const Y_RING = POST_H + RING_T;
/**
 * Off trails.ts plates, world.ts path half-width 8, gateposts SIDE=10.4,
 * foundrylamps SIDE=12.6. Empty verge of Hub→Light-Bridge.
 */
const SIDE = 13.6;
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

export const SPAN_POST_SIZES = {
  h: POST_H,
  r: POST_R,
  ringR: RING_R,
  ringT: RING_T,
  yPost: Y_POST,
  yRing: Y_RING,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, posts: 0, rings: 0, want, h: POST_H, r: POST_R, ringR: RING_R, side: SIDE };
}

/**
 * Cyan span posts on empty ground BETWEEN Hub land (0, 78) and
 * DISTRICTS kind==="bridge" (640, 90). 4 CylinderGeometry posts h=3.55 r=0.09
 * + cyan TorusGeometry rings (coarse 3). MeshPhysical cyan crystal —
 * never chrome, never den pylons (pylons.ts). Offset SIDE=13.6.
 * Tal's civic promise starts on this verge. Parent stays on the horizon.
 */
export function growSpanPosts(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "spanposts";
  group.add(root);

  const want = nPosts(coarse);
  const counts = emptyCounts(want);
  root.userData.spanPostCounts = counts;
  root.userData.spanPostCount = 0;
  root.userData.sizes = {
    h: POST_H,
    r: POST_R,
    ringR: RING_R,
    ringT: RING_T,
    yPost: Y_POST,
    yRing: Y_RING,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const bridge = den("bridge");
  if (!bridge) return;
  if (Math.hypot(bridge.x, bridge.z) < HUB_R) return;

  const dx0 = bridge.x - HUB_X;
  const dz0 = bridge.z - HUB_Z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, HUB_R / dist0);
  const tb = Math.min(0.28, (bridge.radius * PAD_LEAVE) / dist0);
  const ax = HUB_X + dx0 * ta;
  const az = HUB_Z + dz0 * ta;
  const bx = bridge.x - dx0 * tb;
  const bz = bridge.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const posts: Pose[] = [];
  const rings: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    posts.push({ x, y: Y_POST, z, rx: 0, ry: yaw });
    rings.push({ x, y: Y_RING, z, rx: Math.PI / 2, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  const ringSeg = coarse ? 14 : 22;
  stamp(new THREE.CylinderGeometry(POST_R, POST_R, POST_H, segs), darkCyan(), posts, root);
  stamp(new THREE.TorusGeometry(RING_R, RING_T, 6, ringSeg), cyanCrystal(), rings, root);

  counts.n = posts.length;
  counts.posts = posts.length;
  counts.rings = rings.length;
  root.userData.spanPostCount = posts.length;
}
