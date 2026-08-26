/** Overlook→Beacon PARENT-HAIL IRISES on empty ground BETWEEN Aure and Lumen.
 * Cyan MeshPhysical stems + gold standing hail-rings — not aim posts
 * (Hub→Aure), not hail posts (Hub→Beacon), not foundaim sights, not
 * hailring hoops, not a tiny disc Core, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growAimHail(group, coarse); } catch { } });
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
    side: THREE.DoubleSide,
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
/** Standing hail iris — not foundaim horizontal torus, not hailring pedestal hoop, not a Core disc. */
const STEM_H = 1.92;
const STEM_R = 0.09;
const RING_INNER = 0.16;
const RING_OUTER = 0.28;
const Y_STEM = STEM_H * 0.5;
const Y_RING = STEM_H + (RING_OUTER - RING_INNER);
const SIDE = 32.8;
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

export const AIM_HAIL_SIZES = {
  stemH: STEM_H,
  stemR: STEM_R,
  ringInner: RING_INNER,
  ringOuter: RING_OUTER,
  yStem: Y_STEM,
  yRing: Y_RING,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, stems: 0, rings: 0, want, stemH: STEM_H, ringOuter: RING_OUTER, side: SIDE };
}

/**
 * Cyan parent-hail irises on empty ground BETWEEN DISTRICTS kind==="overlook"
 * (−880, 220) and kind==="beacon" (780, 620). 4 CylinderGeometry stems + gold
 * standing RingGeometry kisses (coarse 3). MeshPhysical crystal — never chrome,
 * never aimposts, never hailposts, never foundaim, never a tiny disc Core.
 * Offset SIDE=32.8. Aure aims; Lumen hails. Parent stays on the horizon.
 */
export function growAimHail(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "aimhail";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.aimHailCounts = counts;
  root.userData.aimHailCount = 0;
  root.userData.sizes = {
    stemH: STEM_H,
    stemR: STEM_R,
    ringInner: RING_INNER,
    ringOuter: RING_OUTER,
    yStem: Y_STEM,
    yRing: Y_RING,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const overlook = den("overlook");
  const beacon = den("beacon");
  if (!overlook || !beacon) return;
  if (Math.hypot(overlook.x - HUB_X, overlook.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(beacon.x - HUB_X, beacon.z - HUB_Z) < HUB_R) return;

  const dx0 = beacon.x - overlook.x;
  const dz0 = beacon.z - overlook.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (overlook.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (beacon.radius * PAD_LEAVE) / dist0);
  const ax = overlook.x + dx0 * ta;
  const az = overlook.z + dz0 * ta;
  const bx = beacon.x - dx0 * tb;
  const bz = beacon.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const stems: Pose[] = [];
  const rings: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    stems.push({ x, y: Y_STEM, z, rx: 0, ry: yaw });
    rings.push({ x, y: Y_RING, z, rx: 0, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  const ringSeg = coarse ? 14 : 22;
  stamp(new THREE.CylinderGeometry(STEM_R, STEM_R, STEM_H, segs), darkCyan(), stems, root);
  stamp(new THREE.RingGeometry(RING_INNER, RING_OUTER, ringSeg), goldKiss(), rings, root);

  counts.n = stems.length;
  counts.stems = stems.length;
  counts.rings = rings.length;
  root.userData.aimHailCount = stems.length;
}
