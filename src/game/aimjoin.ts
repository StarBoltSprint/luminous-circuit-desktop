/** Overlook→Join AIM-PAPER LENSES on empty ground BETWEEN Aure and Voss.
 * Gold MeshPhysical lathe lenses + cyan cone kisses — not aim posts
 * (Hub→Aure), not paper steles (Hub→Join), not leftover posts, not coin,
 * not a tiny disc Core, not chrome.
 * $BOLT witnesses Howl only. Parent hooks with:
 *   laterOn(() => { try { growAimJoin(group, coarse); } catch { } });
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
/** Shallow watch-lens — not leftoverposts stems, not papersteles tablets, not a Core disc. */
const LENS_H = 0.28;
const CONE_R = 0.1;
const CONE_H = 0.32;
const Y_LENS = 0;
const Y_CONE = LENS_H + CONE_H * 0.42;
const SIDE = 17.8;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nLenses(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

function latheLens(segs: number) {
  const pts = [
    new THREE.Vector2(0.06, 0),
    new THREE.Vector2(0.4, LENS_H * 0.18),
    new THREE.Vector2(0.46, LENS_H * 0.55),
    new THREE.Vector2(0.2, LENS_H),
  ];
  return new THREE.LatheGeometry(pts, segs);
}

export const AIM_JOIN_SIZES = {
  lensH: LENS_H,
  coneR: CONE_R,
  coneH: CONE_H,
  yLens: Y_LENS,
  yCone: Y_CONE,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, lenses: 0, cones: 0, want, lensH: LENS_H, coneR: CONE_R, side: SIDE };
}

/**
 * Gold aim-paper lenses on empty ground BETWEEN DISTRICTS kind==="overlook"
 * (−880, 220) and kind==="market" (−300, −340). 4 LatheGeometry lenses + cyan
 * ConeGeometry parent-kisses (coarse 3). MeshPhysical crystal — never chrome,
 * never coin, never aimposts, never papersteles, never a tiny disc Core.
 * Offset SIDE=17.8. Aure aims; Voss papers. $BOLT witnesses Howl only.
 */
export function growAimJoin(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "aimjoin";
  group.add(root);

  const want = nLenses(coarse);
  const counts = emptyCounts(want);
  root.userData.aimJoinCounts = counts;
  root.userData.aimJoinCount = 0;
  root.userData.sizes = {
    lensH: LENS_H,
    coneR: CONE_R,
    coneH: CONE_H,
    yLens: Y_LENS,
    yCone: Y_CONE,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const overlook = den("overlook");
  const join = den("market");
  if (!overlook || !join) return;
  if (Math.hypot(overlook.x - HUB_X, overlook.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(join.x - HUB_X, join.z - HUB_Z) < HUB_R) return;

  const dx0 = join.x - overlook.x;
  const dz0 = join.z - overlook.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (overlook.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (join.radius * PAD_LEAVE) / dist0);
  const ax = overlook.x + dx0 * ta;
  const az = overlook.z + dz0 * ta;
  const bx = join.x - dx0 * tb;
  const bz = join.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const lenses: Pose[] = [];
  const cones: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    lenses.push({ x, y: Y_LENS, z, ry: yaw });
    cones.push({ x, y: Y_CONE, z, ry: yaw });
  }

  const segs = coarse ? 8 : 12;
  stamp(latheLens(segs), goldCrystal(), lenses, root);
  stamp(new THREE.ConeGeometry(CONE_R, CONE_H, segs), cyanKiss(), cones, root);

  counts.n = lenses.length;
  counts.lenses = lenses.length;
  counts.cones = cones.length;
  root.userData.aimJoinCount = lenses.length;
}
