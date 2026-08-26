/** Beacon→Ring HAIL HOOPS on empty ground BETWEEN Lumen and Rhoa.
 * Violet MeshPhysical pedestals + cyan standing chorus-hoops — not hail
 * posts (Hub→Beacon), not breath posts (Hub→Ring), not hail.ts bowl, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growHailRing(group, coarse); } catch { } });
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
    metalness: 0.36,
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

function cyanCrystal() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x163844,
    roughness: 0.15,
    metalness: 0.4,
    emissive: 0x2ee6ff,
    emissiveIntensity: 0.22,
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

const HUB_X = 0;
const HUB_Z = 78;
const HUB_R = 90;
/** Short pedestal — standing hoop is the hail, not Lumen's bowl or Rhoa's den staves. */
const PED_H = 1.08;
const PED_R = 0.14;
const HOOP_R = 0.42;
const HOOP_T = 0.045;
const Y_PED = PED_H * 0.5;
const Y_HOOP = PED_H + HOOP_R * 0.15;
/**
 * Off hailposts SIDE=16.8 (Hub→Beacon) and breathposts SIDE=10.8 (Hub→Ring).
 * Empty verge of Beacon→Ring so hail still answers chorus.
 */
const SIDE = 23.4;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nHoops(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

export const HAIL_RING_SIZES = {
  pedH: PED_H,
  pedR: PED_R,
  hoopR: HOOP_R,
  hoopT: HOOP_T,
  yPed: Y_PED,
  yHoop: Y_HOOP,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, peds: 0, hoops: 0, want, pedH: PED_H, hoopR: HOOP_R, side: SIDE };
}

/**
 * Violet pedestals + cyan standing hoops on empty ground BETWEEN DISTRICTS
 * kind==="beacon" (780, 620) and kind==="ring" (40, 920). 4 CylinderGeometry
 * pedestals + vertical TorusGeometry hoops (coarse 3). MeshPhysical crystal —
 * never chrome, never hailposts, never breathposts. Offset SIDE=23.4.
 * Lumen hails; Rhoa's ring answers. Parent stays.
 */
export function growHailRing(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "hailring";
  group.add(root);

  const want = nHoops(coarse);
  const counts = emptyCounts(want);
  root.userData.hailRingCounts = counts;
  root.userData.hailRingCount = 0;
  root.userData.sizes = {
    pedH: PED_H,
    pedR: PED_R,
    hoopR: HOOP_R,
    hoopT: HOOP_T,
    yPed: Y_PED,
    yHoop: Y_HOOP,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const beacon = den("beacon");
  const ring = den("ring");
  if (!beacon || !ring) return;
  if (Math.hypot(beacon.x - HUB_X, beacon.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(ring.x - HUB_X, ring.z - HUB_Z) < HUB_R) return;

  const dx0 = ring.x - beacon.x;
  const dz0 = ring.z - beacon.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (beacon.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (ring.radius * PAD_LEAVE) / dist0);
  const ax = beacon.x + dx0 * ta;
  const az = beacon.z + dz0 * ta;
  const bx = ring.x - dx0 * tb;
  const bz = ring.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const peds: Pose[] = [];
  const hoops: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    peds.push({ x, y: Y_PED, z, rx: 0, ry: yaw });
    hoops.push({ x, y: Y_HOOP, z, rx: 0, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  const hoopSeg = coarse ? 14 : 22;
  stamp(new THREE.CylinderGeometry(PED_R, PED_R, PED_H, segs), darkViolet(), peds, root);
  stamp(new THREE.TorusGeometry(HOOP_R, HOOP_T, 6, hoopSeg), cyanCrystal(), hoops, root);

  counts.n = peds.length;
  counts.peds = peds.length;
  counts.hoops = hoops.length;
  root.userData.hailRingCount = peds.length;
}
