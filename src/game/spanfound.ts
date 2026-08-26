/** Bridge→Foundry SPAN-KILN MARKS on empty ground BETWEEN Tal and Orren.
 * Gold MeshPhysical tapered pylons + cyan parent-kiss rings — not span posts
 * (Hub→Tal), not foundry lamps (Hub→Orren), not spanlands, not kilnmarks,
 * not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growSpanFound(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function darkGold() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x2c2212,
    roughness: 0.24,
    metalness: 0.4,
    emissive: 0x5a4020,
    emissiveIntensity: 0.14,
    iridescence: 0.42,
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
/** Kiln-span taper — not veinbough trunks, not spanposts cylinders, not foundrylamps. */
const PYLON_H = 2.12;
const PYLON_R0 = 0.22;
const PYLON_R1 = 0.07;
const RING_R = 0.3;
const RING_T = 0.036;
const Y_PYLON = PYLON_H * 0.5;
const Y_RING = PYLON_H + RING_T;
const SIDE = 28.6;
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

export const SPAN_FOUND_SIZES = {
  pylonH: PYLON_H,
  pylonR0: PYLON_R0,
  pylonR1: PYLON_R1,
  ringR: RING_R,
  ringT: RING_T,
  yPylon: Y_PYLON,
  yRing: Y_RING,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, pylons: 0, rings: 0, want, pylonH: PYLON_H, ringR: RING_R, side: SIDE };
}

/**
 * Gold span-kiln marks on empty ground BETWEEN DISTRICTS kind==="bridge"
 * (640, 90) and kind==="foundry" (70, −680). 4 tapered CylinderGeometry pylons
 * + cyan TorusGeometry parent-kisses (coarse 3). MeshPhysical crystal — never
 * chrome, never spanposts, never foundrylamps, never kilnmarks, never spanlands.
 * Offset SIDE=28.6. Tal's promise lands kiln streets. Parent stays.
 */
export function growSpanFound(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "spanfound";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.spanFoundCounts = counts;
  root.userData.spanFoundCount = 0;
  root.userData.sizes = {
    pylonH: PYLON_H,
    pylonR0: PYLON_R0,
    pylonR1: PYLON_R1,
    ringR: RING_R,
    ringT: RING_T,
    yPylon: Y_PYLON,
    yRing: Y_RING,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const bridge = den("bridge");
  const foundry = den("foundry");
  if (!bridge || !foundry) return;
  if (Math.hypot(bridge.x - HUB_X, bridge.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(foundry.x - HUB_X, foundry.z - HUB_Z) < HUB_R) return;

  const dx0 = foundry.x - bridge.x;
  const dz0 = foundry.z - bridge.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (bridge.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (foundry.radius * PAD_LEAVE) / dist0);
  const ax = bridge.x + dx0 * ta;
  const az = bridge.z + dz0 * ta;
  const bx = foundry.x - dx0 * tb;
  const bz = foundry.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const pylons: Pose[] = [];
  const rings: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    pylons.push({ x, y: Y_PYLON, z, rx: 0, ry: yaw });
    rings.push({ x, y: Y_RING, z, rx: Math.PI / 2, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  const ringSeg = coarse ? 14 : 22;
  stamp(new THREE.CylinderGeometry(PYLON_R1, PYLON_R0, PYLON_H, segs), darkGold(), pylons, root);
  stamp(new THREE.TorusGeometry(RING_R, RING_T, 6, ringSeg), cyanKiss(), rings, root);

  counts.n = pylons.length;
  counts.pylons = pylons.length;
  counts.rings = rings.length;
  root.userData.spanFoundCount = pylons.length;
}
