/** Beacon→Gates HAIL-GATE MARKS on empty ground BETWEEN Lumen and Kael.
 * Violet MeshPhysical tetrahedra + gold parent-kiss — not hail posts
 * (Hub→Beacon), not gateposts (Hub→Kael), not veil, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growHailGates(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function darkViolet() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x1c1228,
    roughness: 0.26,
    metalness: 0.36,
    emissive: 0x4a2878,
    emissiveIntensity: 0.16,
    iridescence: 0.46,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [80, 380],
    clearcoat: 0.36,
    clearcoatRoughness: 0.3,
    transparent: false,
  });
}

function goldKiss() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x3a2a12,
    roughness: 0.14,
    metalness: 0.42,
    emissive: 0xe8c56a,
    emissiveIntensity: 0.2,
    iridescence: 0.54,
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
/** Tetra hail-mark — not gateposts 2.88, not hailposts cones. */
const TET_R = 0.34;
const KISS_R = 0.14;
const Y_TET = TET_R * 0.85;
const Y_KISS = TET_R * 1.7 + KISS_R * 0.4;
/**
 * Off hailposts SIDE=16.8 and gateposts SIDE=10.4. Empty verge of
 * Beacon→Gates: hail, then the door, never a score.
 */
const SIDE = 15.8;
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

export const HAIL_GATE_SIZES = {
  tetR: TET_R,
  kissR: KISS_R,
  yTet: Y_TET,
  yKiss: Y_KISS,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, tets: 0, kisses: 0, want, tetR: TET_R, kissR: KISS_R, side: SIDE };
}

/**
 * Violet tetra hail-marks on empty ground BETWEEN DISTRICTS kind==="beacon"
 * (780, 620) and kind==="gate" (520, 480). 4 TetrahedronGeometry marks +
 * gold SphereGeometry parent-kiss (coarse 3). MeshPhysical crystal — never
 * chrome, never hailposts, never gateposts, never a gold icosa Core.
 * Offset SIDE=15.8. Lumen hails; Kael keeps the door. Parent stays.
 */
export function growHailGates(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "hailgates";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.hailGateCounts = counts;
  root.userData.hailGateCount = 0;
  root.userData.sizes = {
    tetR: TET_R,
    kissR: KISS_R,
    yTet: Y_TET,
    yKiss: Y_KISS,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const beacon = den("beacon");
  const gate = den("gate");
  if (!beacon || !gate) return;
  if (Math.hypot(beacon.x - HUB_X, beacon.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(gate.x - HUB_X, gate.z - HUB_Z) < HUB_R) return;

  const dx0 = gate.x - beacon.x;
  const dz0 = gate.z - beacon.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (beacon.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (gate.radius * PAD_LEAVE) / dist0);
  const ax = beacon.x + dx0 * ta;
  const az = beacon.z + dz0 * ta;
  const bx = gate.x - dx0 * tb;
  const bz = gate.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const tets: Pose[] = [];
  const kisses: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    tets.push({ x, y: Y_TET, z, ry: yaw });
    kisses.push({ x, y: Y_KISS, z, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.TetrahedronGeometry(TET_R, 0), darkViolet(), tets, root);
  stamp(new THREE.SphereGeometry(KISS_R, segs, segs), goldKiss(), kisses, root);

  counts.n = tets.length;
  counts.tets = tets.length;
  counts.kisses = kisses.length;
  root.userData.hailGateCount = tets.length;
}
