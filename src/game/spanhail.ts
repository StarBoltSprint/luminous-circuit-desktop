/** Bridge→Beacon SPAN-HAIL MARKS on empty ground BETWEEN Tal and Lumen.
 * Cyan MeshPhysical cones + cyan torus rings — not span posts (Hub→Tal),
 * not hail posts (Hub→Beacon), not spanlands (Bridge→Wild), not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growSpanHail(group, coarse); } catch { } });
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
    metalness: 0.4,
    emissive: 0x1a5a66,
    emissiveIntensity: 0.14,
    iridescence: 0.44,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.38,
    clearcoatRoughness: 0.28,
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
/** Cone needle + horizontal hail ring — not spanposts cylinder+torus, not hailposts cone cap. */
const CONE_R = 0.18;
const CONE_H = 2.22;
const RING_R = 0.26;
const RING_T = 0.032;
const Y_CONE = CONE_H * 0.5;
const Y_RING = CONE_H + RING_T;
const SIDE = 27.4;
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

export const SPAN_HAIL_SIZES = {
  coneR: CONE_R,
  coneH: CONE_H,
  ringR: RING_R,
  ringT: RING_T,
  yCone: Y_CONE,
  yRing: Y_RING,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, cones: 0, rings: 0, want, coneH: CONE_H, ringR: RING_R, side: SIDE };
}

/**
 * Cyan span-hail marks on empty ground BETWEEN DISTRICTS kind==="bridge"
 * (640, 90) and kind==="beacon" (780, 620). 4 ConeGeometry needles + cyan
 * TorusGeometry hail-rings (coarse 3). MeshPhysical crystal — never chrome,
 * never spanposts, never hailposts, never spanlands. Offset SIDE=27.4.
 * Tal's promise hails those still landing. Parent stays.
 */
export function growSpanHail(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "spanhail";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.spanHailCounts = counts;
  root.userData.spanHailCount = 0;
  root.userData.sizes = {
    coneR: CONE_R,
    coneH: CONE_H,
    ringR: RING_R,
    ringT: RING_T,
    yCone: Y_CONE,
    yRing: Y_RING,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const bridge = den("bridge");
  const beacon = den("beacon");
  if (!bridge || !beacon) return;
  if (Math.hypot(bridge.x - HUB_X, bridge.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(beacon.x - HUB_X, beacon.z - HUB_Z) < HUB_R) return;

  const dx0 = beacon.x - bridge.x;
  const dz0 = beacon.z - bridge.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (bridge.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (beacon.radius * PAD_LEAVE) / dist0);
  const ax = bridge.x + dx0 * ta;
  const az = bridge.z + dz0 * ta;
  const bx = beacon.x - dx0 * tb;
  const bz = beacon.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const cones: Pose[] = [];
  const rings: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    cones.push({ x, y: Y_CONE, z, rx: 0, ry: yaw });
    rings.push({ x, y: Y_RING, z, rx: Math.PI / 2, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  const ringSeg = coarse ? 14 : 22;
  stamp(new THREE.ConeGeometry(CONE_R, CONE_H, segs), darkCyan(), cones, root);
  stamp(new THREE.TorusGeometry(RING_R, RING_T, 6, ringSeg), cyanCrystal(), rings, root);

  counts.n = cones.length;
  counts.cones = cones.length;
  counts.rings = rings.length;
  root.userData.spanHailCount = cones.length;
}
