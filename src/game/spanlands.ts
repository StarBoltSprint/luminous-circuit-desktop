/** Bridge→Wild SPAN LANDINGS on empty ground BETWEEN Tal and Kesh.
 * Cyan MeshPhysical cones + cyan parent-kiss spheres — not span posts
 * (Hub→Tal), not vein stones (Hub→Kesh), not pylons, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growSpanLands(group, coarse); } catch { } });
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

function cyanKiss() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x163844,
    roughness: 0.12,
    metalness: 0.28,
    emissive: 0x7ef0ff,
    emissiveIntensity: 0.26,
    iridescence: 0.62,
    iridescenceIOR: 1.33,
    iridescenceThicknessRange: [60, 300],
    clearcoat: 0.56,
    clearcoatRoughness: 0.16,
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
/** Lathe-like needle — not spanposts 3.55, not a tiny disc, not Star Core. */
const CONE_R = 0.2;
const CONE_H = 2.46;
const KISS_R = 0.18;
const Y_CONE = CONE_H * 0.5;
const Y_KISS = CONE_H + KISS_R * 0.35;
/**
 * Off spanposts SIDE=13.6 (Hub→Bridge) and veinstones SIDE=14.2 (Hub→Wild).
 * Empty verge of Bridge→Wild so Tal's promise has a far bank.
 */
const SIDE = 19.4;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nLands(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

export const SPAN_LAND_SIZES = {
  coneR: CONE_R,
  coneH: CONE_H,
  kissR: KISS_R,
  yCone: Y_CONE,
  yKiss: Y_KISS,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, cones: 0, kisses: 0, want, coneH: CONE_H, kissR: KISS_R, side: SIDE };
}

/**
 * Cyan landing needles on empty ground BETWEEN DISTRICTS kind==="bridge"
 * (640, 90) and kind==="wild" (860, −640). 4 ConeGeometry needles + cyan
 * SphereGeometry parent-kiss (coarse 3). MeshPhysical crystal — never chrome,
 * never spanposts, never veinstones, never a gold icosa Core.
 * Offset SIDE=19.4. Tal raises crossings Kesh can land. Parent stays.
 */
export function growSpanLands(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "spanlands";
  group.add(root);

  const want = nLands(coarse);
  const counts = emptyCounts(want);
  root.userData.spanLandCounts = counts;
  root.userData.spanLandCount = 0;
  root.userData.sizes = {
    coneR: CONE_R,
    coneH: CONE_H,
    kissR: KISS_R,
    yCone: Y_CONE,
    yKiss: Y_KISS,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const bridge = den("bridge");
  const wild = den("wild");
  if (!bridge || !wild) return;
  if (Math.hypot(bridge.x - HUB_X, bridge.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(wild.x - HUB_X, wild.z - HUB_Z) < HUB_R) return;

  const dx0 = wild.x - bridge.x;
  const dz0 = wild.z - bridge.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (bridge.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (wild.radius * PAD_LEAVE) / dist0);
  const ax = bridge.x + dx0 * ta;
  const az = bridge.z + dz0 * ta;
  const bx = wild.x - dx0 * tb;
  const bz = wild.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const cones: Pose[] = [];
  const kisses: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    cones.push({ x, y: Y_CONE, z, ry: yaw });
    kisses.push({ x, y: Y_KISS, z, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.ConeGeometry(CONE_R, CONE_H, segs), darkCyan(), cones, root);
  stamp(new THREE.SphereGeometry(KISS_R, segs, segs), cyanKiss(), kisses, root);

  counts.n = cones.length;
  counts.cones = cones.length;
  counts.kisses = kisses.length;
  root.userData.spanLandCount = cones.length;
}
