/** Join→Foundry KILN MARKS on empty ground BETWEEN Voss and Orren.
 * Capsule MeshPhysical stems + gold icosa hearts — not foundry lamps, not
 * cairn (Hub→Foundry), not join lamps (Canal→Join), not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growKilnMarks(group, coarse); } catch { } });
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
    metalness: 0.38,
    emissive: 0x1a5a66,
    emissiveIntensity: 0.14,
    iridescence: 0.42,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.36,
    clearcoatRoughness: 0.3,
    transparent: false,
  });
}

function goldCrystal() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x3a2c14,
    roughness: 0.18,
    metalness: 0.46,
    emissive: 0xc8a050,
    emissiveIntensity: 0.2,
    iridescence: 0.5,
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

const HUB_X = 0;
const HUB_Z = 78;
const HUB_R = 90;
/** Capsule total h = length + 2r. Shorter than foundrylamps 3.4 — BETWEEN kiss, not kiln posts. */
const CAP_R = 0.11;
const CAP_LEN = 2.18;
const POST_H = CAP_LEN + CAP_R * 2;
const HEART_R = 0.24;
const Y_POST = POST_H * 0.5;
const Y_HEART = POST_H + HEART_R * 0.5;
/**
 * Off joinlamps SIDE=9.4 (canal→join) and foundrylamps SIDE=12.6 (Hub→kiln).
 * Empty verge of Join→Foundry, Charge arriving as body.
 */
const SIDE = 17.4;
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

export const KILN_MARK_SIZES = {
  h: POST_H,
  capR: CAP_R,
  capLen: CAP_LEN,
  heartR: HEART_R,
  yPost: Y_POST,
  yHeart: Y_HEART,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, stems: 0, hearts: 0, want, h: POST_H, heartR: HEART_R, side: SIDE };
}

/**
 * Cyan capsule stems + gold icosa hearts on empty ground BETWEEN
 * DISTRICTS kind==="market" (−300, −340) and kind==="foundry" (70, −680).
 * 4 CapsuleGeometry stems + gold IcosahedronGeometry hearts (coarse 3).
 * MeshPhysical crystal — never chrome, never foundrylamps, never cairn.
 * Offset SIDE=17.4. Voss joins; Orren grows body. Parent stays.
 */
export function growKilnMarks(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "kilnmarks";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.kilnMarkCounts = counts;
  root.userData.kilnMarkCount = 0;
  root.userData.sizes = {
    h: POST_H,
    capR: CAP_R,
    capLen: CAP_LEN,
    heartR: HEART_R,
    yPost: Y_POST,
    yHeart: Y_HEART,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const join = den("market");
  const foundry = den("foundry");
  if (!join || !foundry) return;
  if (Math.hypot(join.x - HUB_X, join.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(foundry.x - HUB_X, foundry.z - HUB_Z) < HUB_R) return;

  const dx0 = foundry.x - join.x;
  const dz0 = foundry.z - join.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (join.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (foundry.radius * PAD_LEAVE) / dist0);
  const ax = join.x + dx0 * ta;
  const az = join.z + dz0 * ta;
  const bx = foundry.x - dx0 * tb;
  const bz = foundry.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const stems: Pose[] = [];
  const hearts: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    stems.push({ x, y: Y_POST, z, ry: yaw });
    hearts.push({ x, y: Y_HEART, z, ry: yaw + 0.45 });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.CapsuleGeometry(CAP_R, CAP_LEN, 4, segs), darkCyan(), stems, root);
  stamp(new THREE.IcosahedronGeometry(HEART_R, 0), goldCrystal(), hearts, root);

  counts.n = stems.length;
  counts.stems = stems.length;
  counts.hearts = hearts.length;
  root.userData.kilnMarkCount = stems.length;
}
