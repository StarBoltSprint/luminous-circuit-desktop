/** Gates→Ring GATE-HOWL MARKS on empty ground BETWEEN Kael and Rhoa.
 * Violet MeshPhysical capsules + gold cone kisses — not gateposts (Hub→Kael),
 * not hailring (Beacon→Ring), not restchorus, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growGateHowl(group, coarse); } catch { } });
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
    roughness: 0.26,
    metalness: 0.36,
    emissive: 0x4a2878,
    emissiveIntensity: 0.16,
    iridescence: 0.46,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [80, 380],
    clearcoat: 0.36,
    clearcoatRoughness: 0.3,
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
/** Capsule total h = length + 2r. Not kilnmarks cyan capsules, not gateposts 2.88. */
const CAP_R = 0.1;
const CAP_LEN = 1.84;
const POST_H = CAP_LEN + CAP_R * 2;
const CONE_R = 0.16;
const CONE_H = 0.36;
const Y_POST = POST_H * 0.5;
const Y_CONE = POST_H + CONE_H * 0.42;
const SIDE = 25.2;
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

export const GATE_HOWL_SIZES = {
  h: POST_H,
  capR: CAP_R,
  capLen: CAP_LEN,
  coneR: CONE_R,
  coneH: CONE_H,
  yPost: Y_POST,
  yCone: Y_CONE,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, stems: 0, cones: 0, want, h: POST_H, coneR: CONE_R, side: SIDE };
}

/**
 * Violet gate-howl marks on empty ground BETWEEN DISTRICTS kind==="gate"
 * (520, 480) and kind==="ring" (40, 920). 4 CapsuleGeometry stems + gold
 * ConeGeometry kisses (coarse 3). MeshPhysical crystal — never chrome,
 * never gateposts, never hailring. Offset SIDE=25.2.
 * Kael's door stays uncounted; Rhoa's gather does not close. Parent stays.
 */
export function growGateHowl(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "gatehowl";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.gateHowlCounts = counts;
  root.userData.gateHowlCount = 0;
  root.userData.sizes = {
    h: POST_H,
    capR: CAP_R,
    capLen: CAP_LEN,
    coneR: CONE_R,
    coneH: CONE_H,
    yPost: Y_POST,
    yCone: Y_CONE,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const gate = den("gate");
  const ring = den("ring");
  if (!gate || !ring) return;
  if (Math.hypot(gate.x - HUB_X, gate.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(ring.x - HUB_X, ring.z - HUB_Z) < HUB_R) return;

  const dx0 = ring.x - gate.x;
  const dz0 = ring.z - gate.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (gate.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (ring.radius * PAD_LEAVE) / dist0);
  const ax = gate.x + dx0 * ta;
  const az = gate.z + dz0 * ta;
  const bx = ring.x - dx0 * tb;
  const bz = ring.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const stems: Pose[] = [];
  const cones: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    stems.push({ x, y: Y_POST, z, ry: yaw });
    cones.push({ x, y: Y_CONE, z, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.CapsuleGeometry(CAP_R, CAP_LEN, 4, segs), darkViolet(), stems, root);
  stamp(new THREE.ConeGeometry(CONE_R, CONE_H, segs), goldKiss(), cones, root);

  counts.n = stems.length;
  counts.stems = stems.length;
  counts.cones = cones.length;
  root.userData.gateHowlCount = stems.length;
}
