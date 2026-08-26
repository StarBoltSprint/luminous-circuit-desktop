/** Canal→Terraces CHARGE-REST BASINS on empty ground BETWEEN Seln and Mira.
 * Cyan MeshPhysical lathe basins + gold rest-capsules — not canal posts
 * (Hub→Seln), not terrace posts (Hub→Mira), not canalaim cups, not
 * canalfound urns, not restchorus benches, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growCanalRest(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function cyanCrystal() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x10242c,
    roughness: 0.18,
    metalness: 0.36,
    emissive: 0x1a5a66,
    emissiveIntensity: 0.16,
    iridescence: 0.5,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [80, 340],
    clearcoat: 0.44,
    clearcoatRoughness: 0.24,
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
/** Wide rest basin — not canalaim cups, not canalfound belly-urns. Capsule is a sit-kiss, not kilnmarks. */
const BASIN_H = 0.52;
const CAP_R = 0.08;
const CAP_LEN = 0.42;
const Y_BASIN = 0;
const Y_CAP = BASIN_H * 0.72;
const SIDE = 31.2;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nBasins(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

function latheBasin(segs: number) {
  const pts = [
    new THREE.Vector2(0.08, 0),
    new THREE.Vector2(0.38, BASIN_H * 0.22),
    new THREE.Vector2(0.5, BASIN_H * 0.62),
    new THREE.Vector2(0.42, BASIN_H),
  ];
  return new THREE.LatheGeometry(pts, segs);
}

export const CANAL_REST_SIZES = {
  basinH: BASIN_H,
  capR: CAP_R,
  capLen: CAP_LEN,
  yBasin: Y_BASIN,
  yCap: Y_CAP,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, basins: 0, caps: 0, want, basinH: BASIN_H, capR: CAP_R, side: SIDE };
}

/**
 * Cyan charge-rest basins on empty ground BETWEEN DISTRICTS kind==="canal"
 * (−620, 96) and kind==="terrace" (48, 660). 4 LatheGeometry basins + gold
 * CapsuleGeometry sit-kisses (coarse 3). MeshPhysical crystal — never chrome,
 * never canalposts, never terraceposts, never canalaim, never canalfound.
 * Offset SIDE=31.2. Seln tends; Mira wards the sit. Charge is not bottled.
 */
export function growCanalRest(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "canalrest";
  group.add(root);

  const want = nBasins(coarse);
  const counts = emptyCounts(want);
  root.userData.canalRestCounts = counts;
  root.userData.canalRestCount = 0;
  root.userData.sizes = {
    basinH: BASIN_H,
    capR: CAP_R,
    capLen: CAP_LEN,
    yBasin: Y_BASIN,
    yCap: Y_CAP,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const canal = den("canal");
  const terrace = den("terrace");
  if (!canal || !terrace) return;
  if (Math.hypot(canal.x - HUB_X, canal.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(terrace.x - HUB_X, terrace.z - HUB_Z) < HUB_R) return;

  const dx0 = terrace.x - canal.x;
  const dz0 = terrace.z - canal.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (canal.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (terrace.radius * PAD_LEAVE) / dist0);
  const ax = canal.x + dx0 * ta;
  const az = canal.z + dz0 * ta;
  const bx = terrace.x - dx0 * tb;
  const bz = terrace.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const basins: Pose[] = [];
  const caps: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    basins.push({ x, y: Y_BASIN, z, rx: 0, ry: yaw });
    caps.push({ x, y: Y_CAP, z, rx: Math.PI / 2, ry: yaw });
  }

  const segs = coarse ? 8 : 12;
  stamp(latheBasin(segs), cyanCrystal(), basins, root);
  stamp(new THREE.CapsuleGeometry(CAP_R, CAP_LEN, 4, segs), goldKiss(), caps, root);

  counts.n = basins.length;
  counts.basins = basins.length;
  counts.caps = caps.length;
  root.userData.canalRestCount = basins.length;
}
