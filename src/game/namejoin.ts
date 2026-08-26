/** Archive→Join NAME-JOIN MARKS on empty ground BETWEEN Iri and Voss.
 * Gold MeshPhysical octa diamonds + cyan parent-kiss — not name stones
 * (Hub→Iri), not paper steles (Hub→Join), not leftover posts, not coin, not chrome.
 * $BOLT witnesses Howl only. Parent hooks with:
 *   laterOn(() => { try { growNameJoin(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function goldCrystal() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x3a2c14,
    roughness: 0.18,
    metalness: 0.42,
    emissive: 0xc8a050,
    emissiveIntensity: 0.18,
    iridescence: 0.5,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [80, 340],
    clearcoat: 0.44,
    clearcoatRoughness: 0.24,
    transparent: false,
  });
}

function cyanKiss() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x163844,
    roughness: 0.12,
    metalness: 0.26,
    emissive: 0x7ef0ff,
    emissiveIntensity: 0.24,
    iridescence: 0.6,
    iridescenceIOR: 1.33,
    iridescenceThicknessRange: [60, 300],
    clearcoat: 0.54,
    clearcoatRoughness: 0.18,
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
/** Standing leftover diamond — not namestones slabs, not papersteles tablets. */
const DIA_R = 0.3;
const KISS_R = 0.13;
const Y_DIA = DIA_R * 0.95;
const Y_KISS = DIA_R * 1.85 + KISS_R * 0.35;
const SIDE = 19.8;
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

export const NAME_JOIN_SIZES = {
  diaR: DIA_R,
  kissR: KISS_R,
  yDia: Y_DIA,
  yKiss: Y_KISS,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, dias: 0, kisses: 0, want, diaR: DIA_R, kissR: KISS_R, side: SIDE };
}

/**
 * Gold name-join diamonds on empty ground BETWEEN DISTRICTS kind==="archive"
 * (−540, −460) and kind==="market" (−300, −340). 4 OctahedronGeometry diamonds
 * + cyan SphereGeometry parent-kiss (coarse 3). MeshPhysical crystal — never
 * chrome, never coin, never namestones, never papersteles. Offset SIDE=19.8.
 * Iri names the paper fill. $BOLT witnesses Howl only. Parent stays.
 */
export function growNameJoin(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "namejoin";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.nameJoinCounts = counts;
  root.userData.nameJoinCount = 0;
  root.userData.sizes = {
    diaR: DIA_R,
    kissR: KISS_R,
    yDia: Y_DIA,
    yKiss: Y_KISS,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const archive = den("archive");
  const join = den("market");
  if (!archive || !join) return;
  if (Math.hypot(archive.x - HUB_X, archive.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(join.x - HUB_X, join.z - HUB_Z) < HUB_R) return;

  const dx0 = join.x - archive.x;
  const dz0 = join.z - archive.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (archive.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (join.radius * PAD_LEAVE) / dist0);
  const ax = archive.x + dx0 * ta;
  const az = archive.z + dz0 * ta;
  const bx = join.x - dx0 * tb;
  const bz = join.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const dias: Pose[] = [];
  const kisses: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    dias.push({ x, y: Y_DIA, z, ry: yaw + 0.4 });
    kisses.push({ x, y: Y_KISS, z, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.OctahedronGeometry(DIA_R, 0), goldCrystal(), dias, root);
  stamp(new THREE.SphereGeometry(KISS_R, segs, segs), cyanKiss(), kisses, root);

  counts.n = dias.length;
  counts.dias = dias.length;
  counts.kisses = kisses.length;
  root.userData.nameJoinCount = dias.length;
}
