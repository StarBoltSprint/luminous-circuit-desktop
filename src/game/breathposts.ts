/** Hub→Howl Ring BREATH POSTS — violet crystal marks on empty ground BETWEEN.
 * Hub land (0, 78) to Outer Howl (40, 920). Not Hub veil (hubveil.ts).
 * Not chorus stones (chorus.ts). Not aim posts. Not name stones.
 * Parent hooks with:
 *   laterOn(() => { try { growBreathPosts(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function darkViolet() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x141022,
    roughness: 0.26,
    metalness: 0.38,
    emissive: 0x322456,
    emissiveIntensity: 0.14,
    iridescence: 0.46,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [80, 360],
    clearcoat: 0.34,
    clearcoatRoughness: 0.3,
    transparent: false,
  });
}

function violetCrystal() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x1c142c,
    roughness: 0.18,
    metalness: 0.42,
    emissive: 0x8a6cff,
    emissiveIntensity: 0.2,
    iridescence: 0.56,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [80, 340],
    clearcoat: 0.44,
    clearcoatRoughness: 0.24,
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
/** Shorter than lamps.ts POST_H=4.2 — a BETWEEN mark, not a street lamp. */
const POST_H = 3.1;
const POST_R = 0.09;
const CAP_R = 0.15;
const Y_POST = POST_H * 0.5;
const Y_CAP = POST_H + CAP_R * 0.45;
const SIDE = 10.8;
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

export const BREATH_POST_SIZES = {
  h: POST_H,
  r: POST_R,
  capR: CAP_R,
  yPost: Y_POST,
  yCap: Y_CAP,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, posts: 0, caps: 0, want, h: POST_H, r: POST_R, capR: CAP_R, side: SIDE };
}

/**
 * Violet breath posts on empty ground BETWEEN Hub land (0, 78) and DISTRICTS
 * kind==="ring" Outer Howl (40, 920). 4 CylinderGeometry posts h=3.1 r=0.09
 * + violet OctahedronGeometry caps r=0.15 (coarse 3). MeshPhysical violet —
 * never chrome, never Hub veil, never chorus stones. Offset SIDE=10.8.
 * Veyra keeps Hub breath. Rhoa's ring answers. Parent stays on the horizon.
 */
export function growBreathPosts(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "breathposts";
  group.add(root);

  const want = nPosts(coarse);
  const counts = emptyCounts(want);
  root.userData.breathPostCounts = counts;
  root.userData.breathPostCount = 0;
  root.userData.sizes = {
    h: POST_H,
    r: POST_R,
    capR: CAP_R,
    yPost: Y_POST,
    yCap: Y_CAP,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const ring = den("ring");
  if (!ring) return;
  if (Math.hypot(ring.x, ring.z) < HUB_R) return;

  const dx0 = ring.x - HUB_X;
  const dz0 = ring.z - HUB_Z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, HUB_R / dist0);
  const tb = Math.min(0.28, (ring.radius * PAD_LEAVE) / dist0);
  const ax = HUB_X + dx0 * ta;
  const az = HUB_Z + dz0 * ta;
  const bx = ring.x - dx0 * tb;
  const bz = ring.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const posts: Pose[] = [];
  const caps: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    posts.push({ x, y: Y_POST, z, ry: yaw });
    caps.push({ x, y: Y_CAP, z, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.CylinderGeometry(POST_R, POST_R, POST_H, segs), darkViolet(), posts, root);
  stamp(new THREE.OctahedronGeometry(CAP_R, 0), violetCrystal(), caps, root);

  counts.n = posts.length;
  counts.posts = posts.length;
  counts.caps = caps.length;
  root.userData.breathPostCount = posts.length;
}
