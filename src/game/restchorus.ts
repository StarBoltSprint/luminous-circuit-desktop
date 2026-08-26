/** Terraces→Ring REST-CHORUS MARKS on empty ground BETWEEN Mira and Rhoa.
 * Violet MeshPhysical benches + violet icosa hearts — not terrace posts
 * (Hub→Mira), not rest steles (Terraces→Gates), not chorus staves, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growRestChorus(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function darkViolet() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x161022,
    roughness: 0.26,
    metalness: 0.34,
    emissive: 0x322456,
    emissiveIntensity: 0.14,
    iridescence: 0.48,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [80, 360],
    clearcoat: 0.34,
    clearcoatRoughness: 0.3,
    transparent: false,
  });
}

function violetCrystal() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x1c142c,
    roughness: 0.16,
    metalness: 0.38,
    emissive: 0x9b70ff,
    emissiveIntensity: 0.2,
    iridescence: 0.54,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [80, 340],
    clearcoat: 0.46,
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
/** Low rest bench — not reststeles 2.28 tall, not terraceposts discs. */
const BENCH_W = 0.72;
const BENCH_H = 0.42;
const BENCH_D = 0.28;
const HEART_R = 0.2;
const Y_BENCH = BENCH_H * 0.5;
const Y_HEART = BENCH_H + HEART_R * 0.7;
/**
 * Off terraceposts SIDE=9.6, reststeles SIDE=18.6, breathposts SIDE=10.8.
 * Empty verge of Terraces→Ring: tired sit, chorus still holds.
 */
const SIDE = 14.8;
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

export const REST_CHORUS_SIZES = {
  benchW: BENCH_W,
  benchH: BENCH_H,
  benchD: BENCH_D,
  heartR: HEART_R,
  yBench: Y_BENCH,
  yHeart: Y_HEART,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, benches: 0, hearts: 0, want, benchH: BENCH_H, heartR: HEART_R, side: SIDE };
}

/**
 * Violet rest-chorus benches on empty ground BETWEEN DISTRICTS
 * kind==="terrace" (48, 660) and kind==="ring" (40, 920). 4 BoxGeometry
 * benches + violet IcosahedronGeometry hearts (coarse 3). MeshPhysical
 * crystal — never chrome, never terraceposts, never reststeles, never staves.
 * Offset SIDE=14.8. Mira's tired sit; Rhoa's chorus still holds. Parent stays.
 */
export function growRestChorus(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "restchorus";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.restChorusCounts = counts;
  root.userData.restChorusCount = 0;
  root.userData.sizes = {
    benchW: BENCH_W,
    benchH: BENCH_H,
    benchD: BENCH_D,
    heartR: HEART_R,
    yBench: Y_BENCH,
    yHeart: Y_HEART,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const terrace = den("terrace");
  const ring = den("ring");
  if (!terrace || !ring) return;
  if (Math.hypot(terrace.x - HUB_X, terrace.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(ring.x - HUB_X, ring.z - HUB_Z) < HUB_R) return;

  const dx0 = ring.x - terrace.x;
  const dz0 = ring.z - terrace.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (terrace.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (ring.radius * PAD_LEAVE) / dist0);
  const ax = terrace.x + dx0 * ta;
  const az = terrace.z + dz0 * ta;
  const bx = ring.x - dx0 * tb;
  const bz = ring.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const benches: Pose[] = [];
  const hearts: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    benches.push({ x, y: Y_BENCH, z, ry: yaw });
    hearts.push({ x, y: Y_HEART, z, ry: yaw + 0.35 });
  }

  stamp(new THREE.BoxGeometry(BENCH_W, BENCH_H, BENCH_D), darkViolet(), benches, root);
  stamp(new THREE.IcosahedronGeometry(HEART_R, 0), violetCrystal(), hearts, root);

  counts.n = benches.length;
  counts.benches = benches.length;
  counts.hearts = hearts.length;
  root.userData.restChorusCount = benches.length;
}
