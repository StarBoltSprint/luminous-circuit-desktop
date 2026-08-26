/** Terraces→Beacon WARD-HAIL FLARES on empty ground BETWEEN Mira and Lumen.
 * Violet MeshPhysical lathe flares + gold tetra kisses — not terrace posts
 * (Hub→Mira), not hail posts (Hub→Beacon), not restchorus, not hailgates,
 * not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growWardHail(group, coarse); } catch { } });
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
    roughness: 0.22,
    metalness: 0.36,
    emissive: 0x4a2878,
    emissiveIntensity: 0.16,
    iridescence: 0.48,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [80, 380],
    clearcoat: 0.4,
    clearcoatRoughness: 0.28,
    transparent: false,
  });
}

function goldKiss() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x3a2a12,
    roughness: 0.16,
    metalness: 0.44,
    emissive: 0xe8c56a,
    emissiveIntensity: 0.2,
    iridescence: 0.52,
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

const HUB_X = 0;
const HUB_Z = 78;
const HUB_R = 90;
/** Rest-horn flare — not canalaim cups, not hailgates tetra stems, not restchorus benches. */
const FLARE_H = 1.46;
const TET_R = 0.18;
const Y_FLARE = 0;
const Y_TET = FLARE_H + TET_R * 0.28;
const SIDE = 16.2;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nFlares(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

function latheFlare(segs: number) {
  const pts = [
    new THREE.Vector2(0.16, 0),
    new THREE.Vector2(0.14, FLARE_H * 0.28),
    new THREE.Vector2(0.18, FLARE_H * 0.62),
    new THREE.Vector2(0.38, FLARE_H),
  ];
  return new THREE.LatheGeometry(pts, segs);
}

export const WARD_HAIL_SIZES = {
  flareH: FLARE_H,
  tetR: TET_R,
  yFlare: Y_FLARE,
  yTet: Y_TET,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, flares: 0, tets: 0, want, flareH: FLARE_H, tetR: TET_R, side: SIDE };
}

/**
 * Violet ward-hail flares on empty ground BETWEEN DISTRICTS kind==="terrace"
 * (48, 660) and kind==="beacon" (780, 620). 4 LatheGeometry flares + gold
 * TetrahedronGeometry kisses (coarse 3). MeshPhysical crystal — never chrome,
 * never terraceposts, never hailposts, never restchorus, never hailgates.
 * Offset SIDE=16.2. Mira wards rest; Lumen hails after the sit. Parent stays.
 */
export function growWardHail(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "wardhail";
  group.add(root);

  const want = nFlares(coarse);
  const counts = emptyCounts(want);
  root.userData.wardHailCounts = counts;
  root.userData.wardHailCount = 0;
  root.userData.sizes = {
    flareH: FLARE_H,
    tetR: TET_R,
    yFlare: Y_FLARE,
    yTet: Y_TET,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const terrace = den("terrace");
  const beacon = den("beacon");
  if (!terrace || !beacon) return;
  if (Math.hypot(terrace.x - HUB_X, terrace.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(beacon.x - HUB_X, beacon.z - HUB_Z) < HUB_R) return;

  const dx0 = beacon.x - terrace.x;
  const dz0 = beacon.z - terrace.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (terrace.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (beacon.radius * PAD_LEAVE) / dist0);
  const ax = terrace.x + dx0 * ta;
  const az = terrace.z + dz0 * ta;
  const bx = beacon.x - dx0 * tb;
  const bz = beacon.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const flares: Pose[] = [];
  const tets: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    flares.push({ x, y: Y_FLARE, z, ry: yaw });
    tets.push({ x, y: Y_TET, z, ry: yaw + 0.45 });
  }

  const segs = coarse ? 8 : 12;
  stamp(latheFlare(segs), darkViolet(), flares, root);
  stamp(new THREE.TetrahedronGeometry(TET_R), goldKiss(), tets, root);

  counts.n = flares.length;
  counts.flares = flares.length;
  counts.tets = tets.length;
  root.userData.wardHailCount = flares.length;
}
