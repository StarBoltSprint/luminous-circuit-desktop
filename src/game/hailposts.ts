/** Hub→High Beacon HAIL POSTS on empty ground BETWEEN spawn and Lumen.
 * Violet MeshPhysical posts + cyan cone hail — not the beacon bowl (hail.ts),
 * not the High Beacon column (beam.ts), not gateposts, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growHailPosts(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function darkViolet() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x181022,
    roughness: 0.26,
    metalness: 0.38,
    emissive: 0x3a2460,
    emissiveIntensity: 0.15,
    iridescence: 0.46,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [80, 380],
    clearcoat: 0.36,
    clearcoatRoughness: 0.3,
    transparent: false,
  });
}

function cyanHail() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x163844,
    roughness: 0.16,
    metalness: 0.4,
    emissive: 0x7ef0ff,
    emissiveIntensity: 0.22,
    iridescence: 0.54,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [70, 320],
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
/** Taller than gateposts 2.88 — a BETWEEN hail mark, not Lumen's bowl. */
const POST_H = 3.05;
const POST_R = 0.09;
const CONE_R = 0.2;
const CONE_H = 0.42;
const Y_POST = POST_H * 0.5;
const Y_CONE = POST_H + CONE_H * 0.42;
/**
 * Off gateposts SIDE=10.4 (similar NE heading). Empty verge of Hub→Beacon,
 * wider than Kael's threshold so the two paths do not share a post.
 */
const SIDE = 16.8;
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

export const HAIL_POST_SIZES = {
  h: POST_H,
  r: POST_R,
  coneR: CONE_R,
  coneH: CONE_H,
  yPost: Y_POST,
  yCone: Y_CONE,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, posts: 0, cones: 0, want, h: POST_H, r: POST_R, coneR: CONE_R, side: SIDE };
}

/**
 * Violet/cyan hail posts on empty ground BETWEEN Hub land (0, 78) and
 * DISTRICTS kind==="beacon" (780, 620). 4 CylinderGeometry posts h=3.05 r=0.09
 * + cyan ConeGeometry hail (coarse 3). MeshPhysical violet posts + cyan
 * crystal — never chrome, never hail.ts bowl, never beam.ts column.
 * Offset SIDE=16.8. Lumen hails those still landing. Parent stays.
 */
export function growHailPosts(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "hailposts";
  group.add(root);

  const want = nPosts(coarse);
  const counts = emptyCounts(want);
  root.userData.hailPostCounts = counts;
  root.userData.hailPostCount = 0;
  root.userData.sizes = {
    h: POST_H,
    r: POST_R,
    coneR: CONE_R,
    coneH: CONE_H,
    yPost: Y_POST,
    yCone: Y_CONE,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const beacon = den("beacon");
  if (!beacon) return;
  if (Math.hypot(beacon.x, beacon.z) < HUB_R) return;

  const dx0 = beacon.x - HUB_X;
  const dz0 = beacon.z - HUB_Z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, HUB_R / dist0);
  const tb = Math.min(0.28, (beacon.radius * PAD_LEAVE) / dist0);
  const ax = HUB_X + dx0 * ta;
  const az = HUB_Z + dz0 * ta;
  const bx = beacon.x - dx0 * tb;
  const bz = beacon.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const posts: Pose[] = [];
  const cones: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    posts.push({ x, y: Y_POST, z, ry: yaw });
    cones.push({ x, y: Y_CONE, z, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.CylinderGeometry(POST_R, POST_R, POST_H, segs), darkViolet(), posts, root);
  stamp(new THREE.ConeGeometry(CONE_R, CONE_H, segs), cyanHail(), cones, root);

  counts.n = posts.length;
  counts.posts = posts.length;
  counts.cones = cones.length;
  root.userData.hailPostCount = posts.length;
}
