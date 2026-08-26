/** Canal→Foundry CHARGE-KILN URNS on empty ground BETWEEN Seln and Orren.
 * Cyan MeshPhysical lathe urns + gold lip-rings — not canal posts
 * (Hub→Seln), not foundry lamps (Hub→Orren), not kilnmarks (Join→Foundry),
 * not canalaim cups, not chrome, not a Core.
 * Parent hooks with:
 *   laterOn(() => { try { growCanalFound(group, coarse); } catch { } });
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
/** Belly urn — not canalaim flare-cups, not leftoverposts taper. Ring is a lip-kiss, not Star Core. */
const URN_H = 1.36;
const RING_INNER = 0.14;
const RING_OUTER = 0.24;
const Y_URN = 0;
const Y_RING = URN_H + 0.02;
const SIDE = 20.6;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nUrns(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

function latheUrn(segs: number) {
  const pts = [
    new THREE.Vector2(0.1, 0),
    new THREE.Vector2(0.22, URN_H * 0.12),
    new THREE.Vector2(0.36, URN_H * 0.42),
    new THREE.Vector2(0.16, URN_H * 0.78),
    new THREE.Vector2(0.22, URN_H),
  ];
  return new THREE.LatheGeometry(pts, segs);
}

export const CANAL_FOUND_SIZES = {
  urnH: URN_H,
  ringInner: RING_INNER,
  ringOuter: RING_OUTER,
  yUrn: Y_URN,
  yRing: Y_RING,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, urns: 0, rings: 0, want, urnH: URN_H, ringOuter: RING_OUTER, side: SIDE };
}

/**
 * Cyan charge-kiln urns on empty ground BETWEEN DISTRICTS kind==="canal"
 * (−620, 96) and kind==="foundry" (70, −680). 4 LatheGeometry urns + gold
 * RingGeometry lip-kisses (coarse 3). MeshPhysical crystal — never chrome,
 * never canalposts, never foundrylamps, never kilnmarks, never a gold icosa Core.
 * Offset SIDE=20.6. Seln tends; Orren grows body. Charge is not bottled.
 */
export function growCanalFound(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "canalfound";
  group.add(root);

  const want = nUrns(coarse);
  const counts = emptyCounts(want);
  root.userData.canalFoundCounts = counts;
  root.userData.canalFoundCount = 0;
  root.userData.sizes = {
    urnH: URN_H,
    ringInner: RING_INNER,
    ringOuter: RING_OUTER,
    yUrn: Y_URN,
    yRing: Y_RING,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const canal = den("canal");
  const foundry = den("foundry");
  if (!canal || !foundry) return;
  if (Math.hypot(canal.x - HUB_X, canal.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(foundry.x - HUB_X, foundry.z - HUB_Z) < HUB_R) return;

  const dx0 = foundry.x - canal.x;
  const dz0 = foundry.z - canal.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (canal.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (foundry.radius * PAD_LEAVE) / dist0);
  const ax = canal.x + dx0 * ta;
  const az = canal.z + dz0 * ta;
  const bx = foundry.x - dx0 * tb;
  const bz = foundry.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const urns: Pose[] = [];
  const rings: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    urns.push({ x, y: Y_URN, z, rx: 0, ry: yaw });
    rings.push({ x, y: Y_RING, z, rx: -Math.PI / 2, ry: yaw });
  }

  const segs = coarse ? 8 : 12;
  const ringSeg = coarse ? 14 : 22;
  stamp(latheUrn(segs), cyanCrystal(), urns, root);
  stamp(new THREE.RingGeometry(RING_INNER, RING_OUTER, ringSeg), goldKiss(), rings, root);

  counts.n = urns.length;
  counts.urns = urns.length;
  counts.rings = rings.length;
  root.userData.canalFoundCount = urns.length;
}
