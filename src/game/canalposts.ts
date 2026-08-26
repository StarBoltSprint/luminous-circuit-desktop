/** Hub→Charge Canals PATH POSTS on empty ground BETWEEN spawn and Seln.
 * Cyan MeshPhysical posts + gold MeshPhysical crystal caps — not street
 * lamps (lamps.ts), not Foundry gold/cyan (foundrylamps.ts), not Join cyan
 * (joinlamps.ts), not breath posts, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growCanalPosts(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function darkCyan() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x12242c,
    roughness: 0.28,
    metalness: 0.4,
    emissive: 0x1a5a66,
    emissiveIntensity: 0.14,
    iridescence: 0.42,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.34,
    clearcoatRoughness: 0.32,
    transparent: false,
  });
}

function goldCrystal() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x3a2a12,
    roughness: 0.18,
    metalness: 0.46,
    emissive: 0xe8c56a,
    emissiveIntensity: 0.2,
    iridescence: 0.5,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [80, 340],
    clearcoat: 0.46,
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
/** Shorter than lamps.ts POST_H=4.2 and foundrylamps 3.4 — a BETWEEN canal mark. */
const POST_H = 3.15;
const POST_R = 0.11;
const CAP_R = 0.16;
const Y_POST = POST_H * 0.5;
const Y_CAP = POST_H + CAP_R * 0.5;
/**
 * Off trails.ts plates, the 16-wide world.ts path (half-width 8),
 * and foundrylamps SIDE=12.6. Empty verge of Hub→Canals, not the river floor.
 */
const SIDE = 11.2;
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

export const CANAL_POST_SIZES = {
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
 * Cyan/gold path posts on empty ground BETWEEN Hub land (0, 78) and
 * DISTRICTS kind==="canal" (−620, 96). 4 CylinderGeometry posts h=3.15 r=0.11
 * + gold OctahedronGeometry caps r=0.16 (coarse 3). MeshPhysical cyan posts
 * + gold crystal — never chrome, never Foundry lamps, never Join cyan.
 * Offset SIDE=11.2, Hub skip, den-pad leave. Seln tends leftover Howl here.
 */
export function growCanalPosts(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "canalposts";
  group.add(root);

  const want = nPosts(coarse);
  const counts = emptyCounts(want);
  root.userData.canalPostCounts = counts;
  root.userData.canalPostCount = 0;
  root.userData.sizes = {
    h: POST_H,
    r: POST_R,
    capR: CAP_R,
    yPost: Y_POST,
    yCap: Y_CAP,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const canal = den("canal");
  if (!canal) return;
  if (Math.hypot(canal.x, canal.z) < HUB_R) return;

  const dx0 = canal.x - HUB_X;
  const dz0 = canal.z - HUB_Z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, HUB_R / dist0);
  const tb = Math.min(0.28, (canal.radius * PAD_LEAVE) / dist0);
  const ax = HUB_X + dx0 * ta;
  const az = HUB_Z + dz0 * ta;
  const bx = canal.x - dx0 * tb;
  const bz = canal.z - dz0 * tb;
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
  stamp(new THREE.CylinderGeometry(POST_R, POST_R, POST_H, segs), darkCyan(), posts, root);
  stamp(new THREE.OctahedronGeometry(CAP_R, 0), goldCrystal(), caps, root);

  counts.n = posts.length;
  counts.posts = posts.length;
  counts.caps = caps.length;
  root.userData.canalPostCount = posts.length;
}
