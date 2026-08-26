/** Foundry→Overlook KILN-AIM SIGHTS on empty ground BETWEEN Orren and Aure.
 * Gold MeshPhysical lathe sights + cyan iris-rings — not foundry lamps
 * (Hub→Orren), not aim posts (Hub→Aure), not leftover posts, not a gold
 * icosa Core, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growFoundAim(group, coarse); } catch { } });
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
/** Kiln sight — wide foot, aim lip. Not leftoverposts taper-to-point, not a Core. */
const SIGHT_H = 1.58;
const IRIS_R = 0.26;
const IRIS_T = 0.04;
const Y_SIGHT = 0;
const Y_IRIS = SIGHT_H + IRIS_T * 0.2;
const SIDE = 29.4;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nSights(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

function latheSight(segs: number) {
  const pts = [
    new THREE.Vector2(0.28, 0),
    new THREE.Vector2(0.18, SIGHT_H * 0.28),
    new THREE.Vector2(0.1, SIGHT_H * 0.7),
    new THREE.Vector2(0.22, SIGHT_H),
  ];
  return new THREE.LatheGeometry(pts, segs);
}

export const FOUND_AIM_SIZES = {
  sightH: SIGHT_H,
  irisR: IRIS_R,
  irisT: IRIS_T,
  ySight: Y_SIGHT,
  yIris: Y_IRIS,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, sights: 0, irises: 0, want, sightH: SIGHT_H, irisR: IRIS_R, side: SIDE };
}

/**
 * Gold kiln-aim sights on empty ground BETWEEN DISTRICTS kind==="foundry"
 * (70, −680) and kind==="overlook" (−880, 220). 4 LatheGeometry sights + cyan
 * TorusGeometry iris-kisses (coarse 3). MeshPhysical crystal — never chrome,
 * never foundrylamps, never aimposts, never leftoverposts, never a gold icosa Core.
 * Offset SIDE=29.4. Orren's body still looks up; Aure does not move the parent.
 */
export function growFoundAim(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "foundaim";
  group.add(root);

  const want = nSights(coarse);
  const counts = emptyCounts(want);
  root.userData.foundAimCounts = counts;
  root.userData.foundAimCount = 0;
  root.userData.sizes = {
    sightH: SIGHT_H,
    irisR: IRIS_R,
    irisT: IRIS_T,
    ySight: Y_SIGHT,
    yIris: Y_IRIS,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const foundry = den("foundry");
  const overlook = den("overlook");
  if (!foundry || !overlook) return;
  if (Math.hypot(foundry.x - HUB_X, foundry.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(overlook.x - HUB_X, overlook.z - HUB_Z) < HUB_R) return;

  const dx0 = overlook.x - foundry.x;
  const dz0 = overlook.z - foundry.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (foundry.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (overlook.radius * PAD_LEAVE) / dist0);
  const ax = foundry.x + dx0 * ta;
  const az = foundry.z + dz0 * ta;
  const bx = overlook.x - dx0 * tb;
  const bz = overlook.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const sights: Pose[] = [];
  const irises: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    sights.push({ x, y: Y_SIGHT, z, rx: 0, ry: yaw });
    irises.push({ x, y: Y_IRIS, z, rx: Math.PI / 2, ry: yaw });
  }

  const segs = coarse ? 8 : 12;
  const ringSeg = coarse ? 14 : 22;
  stamp(latheSight(segs), goldCrystal(), sights, root);
  stamp(new THREE.TorusGeometry(IRIS_R, IRIS_T, 6, ringSeg), cyanKiss(), irises, root);

  counts.n = sights.length;
  counts.sights = sights.length;
  counts.irises = irises.length;
  root.userData.foundAimCount = sights.length;
}
