/** Archive→Overlook LEFTOVER POSTS on empty ground BETWEEN Iri and Aure.
 * Gold lathe dens + cyan parent-kiss — not name stones (Hub→Iri), not aim
 * posts (Hub→Aure), not tablets, not a gold icosa Core, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growLeftoverPosts(group, coarse); } catch { } });
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
/** Lathe y 0..STEM_H (not centered). Kiss sits on the lip. Not Star Core. */
const STEM_H = 1.72;
const KISS_R = 0.16;
const Y_LATHE = 0;
const Y_KISS = STEM_H + KISS_R * 0.4;
/**
 * Off namestones SIDE=11.4 (Hub→Archive) and aimposts SIDE=10.2 (Hub→Overlook).
 * Empty verge of Archive→Overlook: leftover light names the parent, never moves it.
 */
const SIDE = 21.2;
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

function latheStem(segs: number) {
  const pts = [
    new THREE.Vector2(0.26, 0),
    new THREE.Vector2(0.22, STEM_H * 0.28),
    new THREE.Vector2(0.14, STEM_H * 0.62),
    new THREE.Vector2(0.05, STEM_H),
  ];
  return new THREE.LatheGeometry(pts, segs);
}

export const LEFTOVER_POST_SIZES = {
  stemH: STEM_H,
  kissR: KISS_R,
  yLathe: Y_LATHE,
  yKiss: Y_KISS,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, lathes: 0, kisses: 0, want, stemH: STEM_H, kissR: KISS_R, side: SIDE };
}

/**
 * Gold leftover lathes on empty ground BETWEEN DISTRICTS kind==="archive"
 * (−540, −460) and kind==="overlook" (−880, 220). 4 LatheGeometry dens +
 * cyan SphereGeometry parent-kiss (coarse 3). MeshPhysical crystal — never
 * chrome, never namestones, never aimposts, never a gold icosa Core.
 * Offset SIDE=21.2. Iri names; Aure aims. Parent stays on the horizon.
 */
export function growLeftoverPosts(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "leftoverposts";
  group.add(root);

  const want = nPosts(coarse);
  const counts = emptyCounts(want);
  root.userData.leftoverPostCounts = counts;
  root.userData.leftoverPostCount = 0;
  root.userData.sizes = {
    stemH: STEM_H,
    kissR: KISS_R,
    yLathe: Y_LATHE,
    yKiss: Y_KISS,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const archive = den("archive");
  const overlook = den("overlook");
  if (!archive || !overlook) return;
  if (Math.hypot(archive.x - HUB_X, archive.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(overlook.x - HUB_X, overlook.z - HUB_Z) < HUB_R) return;

  const dx0 = overlook.x - archive.x;
  const dz0 = overlook.z - archive.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (archive.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (overlook.radius * PAD_LEAVE) / dist0);
  const ax = archive.x + dx0 * ta;
  const az = archive.z + dz0 * ta;
  const bx = overlook.x - dx0 * tb;
  const bz = overlook.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const lathes: Pose[] = [];
  const kisses: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    lathes.push({ x, y: Y_LATHE, z, ry: yaw });
    kisses.push({ x, y: Y_KISS, z, ry: yaw });
  }

  const segs = coarse ? 8 : 12;
  stamp(latheStem(segs), goldCrystal(), lathes, root);
  stamp(new THREE.SphereGeometry(KISS_R, segs, segs), cyanKiss(), kisses, root);

  counts.n = lathes.length;
  counts.lathes = lathes.length;
  counts.kisses = kisses.length;
  root.userData.leftoverPostCount = lathes.length;
}
