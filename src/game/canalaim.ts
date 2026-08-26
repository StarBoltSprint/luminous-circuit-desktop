/** Canal→Overlook CHARGE-AIM CUPS on empty ground BETWEEN Seln and Aure.
 * Cyan MeshPhysical lathe cups + gold orbit kisses — not canal posts
 * (Hub→Seln), not aim posts (Hub→Aure), not leftover posts, not a Core, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growCanalAim(group, coarse); } catch { } });
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
/** Lathe y 0..CUP_H (not centered). Gold orbit is a parent-kiss, not Star Core. */
const CUP_H = 1.28;
const ORBIT_R = 0.34;
const ORBIT_T = 0.035;
const Y_CUP = 0;
const Y_ORBIT = CUP_H * 0.92;
const SIDE = 22.8;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nCups(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

function latheCup(segs: number) {
  const pts = [
    new THREE.Vector2(0.08, 0),
    new THREE.Vector2(0.26, CUP_H * 0.14),
    new THREE.Vector2(0.22, CUP_H * 0.62),
    new THREE.Vector2(0.3, CUP_H * 0.92),
    new THREE.Vector2(0.16, CUP_H),
  ];
  return new THREE.LatheGeometry(pts, segs);
}

export const CANAL_AIM_SIZES = {
  cupH: CUP_H,
  orbitR: ORBIT_R,
  orbitT: ORBIT_T,
  yCup: Y_CUP,
  yOrbit: Y_ORBIT,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, cups: 0, orbits: 0, want, cupH: CUP_H, orbitR: ORBIT_R, side: SIDE };
}

/**
 * Cyan charge-aim cups on empty ground BETWEEN DISTRICTS kind==="canal"
 * (−620, 96) and kind==="overlook" (−880, 220). 4 LatheGeometry cups + gold
 * TorusGeometry parent-kiss orbits (coarse 3). MeshPhysical crystal — never
 * chrome, never canalposts, never aimposts, never a gold icosa Core.
 * Offset SIDE=22.8. Seln tends; Aure aims. Banks do not store a parent.
 */
export function growCanalAim(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "canalaim";
  group.add(root);

  const want = nCups(coarse);
  const counts = emptyCounts(want);
  root.userData.canalAimCounts = counts;
  root.userData.canalAimCount = 0;
  root.userData.sizes = {
    cupH: CUP_H,
    orbitR: ORBIT_R,
    orbitT: ORBIT_T,
    yCup: Y_CUP,
    yOrbit: Y_ORBIT,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const canal = den("canal");
  const overlook = den("overlook");
  if (!canal || !overlook) return;
  if (Math.hypot(canal.x - HUB_X, canal.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(overlook.x - HUB_X, overlook.z - HUB_Z) < HUB_R) return;

  const dx0 = overlook.x - canal.x;
  const dz0 = overlook.z - canal.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (canal.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (overlook.radius * PAD_LEAVE) / dist0);
  const ax = canal.x + dx0 * ta;
  const az = canal.z + dz0 * ta;
  const bx = overlook.x - dx0 * tb;
  const bz = overlook.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const cups: Pose[] = [];
  const orbits: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    cups.push({ x, y: Y_CUP, z, rx: 0, ry: yaw });
    orbits.push({ x, y: Y_ORBIT, z, rx: Math.PI / 2, ry: yaw });
  }

  const segs = coarse ? 8 : 12;
  const ringSeg = coarse ? 14 : 22;
  stamp(latheCup(segs), cyanCrystal(), cups, root);
  stamp(new THREE.TorusGeometry(ORBIT_R, ORBIT_T, 6, ringSeg), goldKiss(), orbits, root);

  counts.n = cups.length;
  counts.cups = cups.length;
  counts.orbits = orbits.length;
  root.userData.canalAimCount = cups.length;
}
