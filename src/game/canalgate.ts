/** Canal→Gates CHARGE-GATE JAMBS on empty ground BETWEEN Seln and Kael.
 * Cyan MeshPhysical lathe jambs + violet sphere kisses — not canal posts
 * (Hub→Seln), not gateposts (Hub→Kael), not hailgates, not sluice, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growCanalGate(group, coarse); } catch { } });
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

function violetKiss() {
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
/** Charge jamb — not leftoverposts taper, not wardhail flare, not sluice lips. */
const JAMB_H = 1.68;
const KISS_R = 0.15;
const Y_JAMB = 0;
const Y_KISS = JAMB_H + KISS_R * 0.35;
const SIDE = 13.6;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nJambs(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

function latheJamb(segs: number) {
  const pts = [
    new THREE.Vector2(0.12, 0),
    new THREE.Vector2(0.2, JAMB_H * 0.16),
    new THREE.Vector2(0.13, JAMB_H * 0.58),
    new THREE.Vector2(0.16, JAMB_H * 0.88),
    new THREE.Vector2(0.26, JAMB_H),
  ];
  return new THREE.LatheGeometry(pts, segs);
}

export const CANAL_GATE_SIZES = {
  jambH: JAMB_H,
  kissR: KISS_R,
  yJamb: Y_JAMB,
  yKiss: Y_KISS,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, jambs: 0, kisses: 0, want, jambH: JAMB_H, kissR: KISS_R, side: SIDE };
}

/**
 * Cyan charge-gate jambs on empty ground BETWEEN DISTRICTS kind==="canal"
 * (−620, 96) and kind==="gate" (520, 480). 4 LatheGeometry jambs + violet
 * SphereGeometry kisses (coarse 3). MeshPhysical crystal — never chrome,
 * never canalposts, never gateposts, never hailgates, never sluice.
 * Offset SIDE=13.6. Seln tends; Kael leaves uncounted. Charge is not scored.
 */
export function growCanalGate(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "canalgate";
  group.add(root);

  const want = nJambs(coarse);
  const counts = emptyCounts(want);
  root.userData.canalGateCounts = counts;
  root.userData.canalGateCount = 0;
  root.userData.sizes = {
    jambH: JAMB_H,
    kissR: KISS_R,
    yJamb: Y_JAMB,
    yKiss: Y_KISS,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const canal = den("canal");
  const gate = den("gate");
  if (!canal || !gate) return;
  if (Math.hypot(canal.x - HUB_X, canal.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(gate.x - HUB_X, gate.z - HUB_Z) < HUB_R) return;

  const dx0 = gate.x - canal.x;
  const dz0 = gate.z - canal.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (canal.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (gate.radius * PAD_LEAVE) / dist0);
  const ax = canal.x + dx0 * ta;
  const az = canal.z + dz0 * ta;
  const bx = gate.x - dx0 * tb;
  const bz = gate.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const jambs: Pose[] = [];
  const kisses: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    jambs.push({ x, y: Y_JAMB, z, ry: yaw });
    kisses.push({ x, y: Y_KISS, z, ry: yaw });
  }

  const segs = coarse ? 8 : 12;
  stamp(latheJamb(segs), cyanCrystal(), jambs, root);
  stamp(new THREE.SphereGeometry(KISS_R, segs, segs), violetKiss(), kisses, root);

  counts.n = jambs.length;
  counts.jambs = jambs.length;
  counts.kisses = kisses.length;
  root.userData.canalGateCount = jambs.length;
}
