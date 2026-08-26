/** Terraces→Gates REST STELES on empty ground BETWEEN Mira and Kael.
 * Violet MeshPhysical boxes + gold rest-hoops — not terrace posts (Hub→Mira),
 * not gateposts (Hub→Kael), not rest benches (rest.ts), not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growRestSteles(group, coarse); } catch { } });
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

function goldCrystal() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x3a2a12,
    roughness: 0.17,
    metalness: 0.46,
    emissive: 0xe8c56a,
    emissiveIntensity: 0.18,
    iridescence: 0.52,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [70, 320],
    clearcoat: 0.46,
    clearcoatRoughness: 0.22,
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
/** Shorter than gateposts 2.88 — a BETWEEN rest mark, not Kael's door. */
const STELE_W = 0.22;
const STELE_H = 2.28;
const STELE_D = 0.14;
const RING_R = 0.3;
const RING_T = 0.04;
const Y_STELE = STELE_H * 0.5;
const Y_RING = STELE_H + RING_T;
/**
 * Off terraceposts SIDE=9.6 (Hub→Mira) and gateposts SIDE=10.4 (Hub→Kael).
 * Empty verge of Terraces→Gates so pause stays a post, not a trial.
 */
const SIDE = 18.6;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nSteles(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

export const REST_STELE_SIZES = {
  w: STELE_W,
  h: STELE_H,
  d: STELE_D,
  ringR: RING_R,
  ringT: RING_T,
  yStele: Y_STELE,
  yRing: Y_RING,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, steles: 0, rings: 0, want, h: STELE_H, ringR: RING_R, side: SIDE };
}

/**
 * Violet rest steles on empty ground BETWEEN DISTRICTS kind==="terrace"
 * (48, 660) and kind==="gate" (520, 480). 4 BoxGeometry steles + gold
 * TorusGeometry rest-hoops (coarse 3). MeshPhysical crystal — never chrome,
 * never terraceposts, never gateposts. Offset SIDE=18.6.
 * Mira wards rest so Kael's door is never a trial. Parent stays.
 */
export function growRestSteles(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "reststeles";
  group.add(root);

  const want = nSteles(coarse);
  const counts = emptyCounts(want);
  root.userData.restSteleCounts = counts;
  root.userData.restSteleCount = 0;
  root.userData.sizes = {
    w: STELE_W,
    h: STELE_H,
    d: STELE_D,
    ringR: RING_R,
    ringT: RING_T,
    yStele: Y_STELE,
    yRing: Y_RING,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const terrace = den("terrace");
  const gate = den("gate");
  if (!terrace || !gate) return;
  if (Math.hypot(terrace.x - HUB_X, terrace.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(gate.x - HUB_X, gate.z - HUB_Z) < HUB_R) return;

  const dx0 = gate.x - terrace.x;
  const dz0 = gate.z - terrace.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (terrace.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (gate.radius * PAD_LEAVE) / dist0);
  const ax = terrace.x + dx0 * ta;
  const az = terrace.z + dz0 * ta;
  const bx = gate.x - dx0 * tb;
  const bz = gate.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const steles: Pose[] = [];
  const rings: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    steles.push({ x, y: Y_STELE, z, rx: 0, ry: yaw });
    rings.push({ x, y: Y_RING, z, rx: Math.PI / 2, ry: yaw });
  }

  const ringSeg = coarse ? 14 : 22;
  stamp(new THREE.BoxGeometry(STELE_W, STELE_H, STELE_D), darkViolet(), steles, root);
  stamp(new THREE.TorusGeometry(RING_R, RING_T, 6, ringSeg), goldCrystal(), rings, root);

  counts.n = steles.length;
  counts.steles = steles.length;
  counts.rings = rings.length;
  root.userData.restSteleCount = steles.length;
}
