/** Hub→Crystal Terraces REST POSTS on empty ground BETWEEN spawn and Mira.
 * Violet MeshPhysical posts + violet crystal discs — not den rim posts
 * (posts.ts), not rest benches (rest.ts), not terrace steps, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growTerracePosts(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function darkViolet() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x161022,
    roughness: 0.26,
    metalness: 0.36,
    emissive: 0x322456,
    emissiveIntensity: 0.14,
    iridescence: 0.48,
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
    roughness: 0.16,
    metalness: 0.4,
    emissive: 0x9b70ff,
    emissiveIntensity: 0.2,
    iridescence: 0.54,
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

/** Hub land — save.ts / engine.ts pz=78. Hub is not a DISTRICTS den. */
const HUB_X = 0;
const HUB_Z = 78;
const HUB_R = 90;
/** Shorter than breathposts 3.1 — a BETWEEN rest mark, not Mira's den rim. */
const POST_H = 2.62;
const POST_R = 0.1;
const DISC_R = 0.32;
const Y_POST = POST_H * 0.5;
const Y_DISC = POST_H + 0.04;
/**
 * Off trails.ts plates, world.ts path half-width 8, joinlamps SIDE=9.4,
 * gateposts SIDE=10.4. Empty verge of Hub→Terraces, not the step floor.
 */
const SIDE = 9.6;
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

export const TERRACE_POST_SIZES = {
  h: POST_H,
  r: POST_R,
  discR: DISC_R,
  yPost: Y_POST,
  yDisc: Y_DISC,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, posts: 0, discs: 0, want, h: POST_H, r: POST_R, discR: DISC_R, side: SIDE };
}

/**
 * Violet rest posts on empty ground BETWEEN Hub land (0, 78) and
 * DISTRICTS kind==="terrace" (48, 660). 4 CylinderGeometry posts h=2.62 r=0.10
 * + violet CircleGeometry discs (coarse 3). MeshPhysical violet crystal —
 * never chrome, never den rim posts (posts.ts). Offset SIDE=9.6.
 * Mira wards rest so labor can return. Parent stays on the horizon.
 */
export function growTerracePosts(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "terraceposts";
  group.add(root);

  const want = nPosts(coarse);
  const counts = emptyCounts(want);
  root.userData.terracePostCounts = counts;
  root.userData.terracePostCount = 0;
  root.userData.sizes = {
    h: POST_H,
    r: POST_R,
    discR: DISC_R,
    yPost: Y_POST,
    yDisc: Y_DISC,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const terrace = den("terrace");
  if (!terrace) return;
  if (Math.hypot(terrace.x, terrace.z) < HUB_R) return;

  const dx0 = terrace.x - HUB_X;
  const dz0 = terrace.z - HUB_Z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, HUB_R / dist0);
  const tb = Math.min(0.28, (terrace.radius * PAD_LEAVE) / dist0);
  const ax = HUB_X + dx0 * ta;
  const az = HUB_Z + dz0 * ta;
  const bx = terrace.x - dx0 * tb;
  const bz = terrace.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const posts: Pose[] = [];
  const discs: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    posts.push({ x, y: Y_POST, z, rx: 0, ry: yaw });
    discs.push({ x, y: Y_DISC, z, rx: Math.PI / 2, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.CylinderGeometry(POST_R, POST_R, POST_H, segs), darkViolet(), posts, root);
  stamp(new THREE.CircleGeometry(DISC_R, segs), violetCrystal(), discs, root);

  counts.n = posts.length;
  counts.posts = posts.length;
  counts.discs = discs.length;
  root.userData.terracePostCount = posts.length;
}
