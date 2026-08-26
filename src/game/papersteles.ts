/** Hub→Join PAPER STELES on empty ground BETWEEN spawn and Voss.
 * Thin gold MeshPhysical tablets + gold octa fills — not join lamps
 * (Canal→Join), not stall gold, not ledger, not coin, not chrome.
 * $BOLT witnesses Howl only. Parent hooks with:
 *   laterOn(() => { try { growPaperSteles(group, coarse); } catch { } });
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
    roughness: 0.28,
    metalness: 0.32,
    emissive: 0x5a4020,
    emissiveIntensity: 0.12,
    iridescence: 0.4,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.34,
    clearcoatRoughness: 0.32,
    transparent: false,
  });
}

function goldFill() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x3a2a12,
    roughness: 0.16,
    metalness: 0.44,
    emissive: 0xe8c56a,
    emissiveIntensity: 0.2,
    iridescence: 0.5,
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

/** Hub land — save.ts / engine.ts pz=78. Hub is not a DISTRICTS den. */
const HUB_X = 0;
const HUB_Z = 78;
const HUB_R = 90;
/** Thin paper tablet — not namestones slabs, not joinlamps 3.6 posts. */
const TAB_W = 0.07;
const TAB_H = 1.48;
const TAB_D = 0.38;
const FILL_R = 0.16;
const Y_TAB = TAB_H * 0.5;
const Y_FILL = TAB_H + FILL_R * 0.45;
/**
 * Off joinlamps SIDE=9.4 (canal→join) and terraceposts SIDE=9.6.
 * Empty verge of Hub→Join. Paper fill. $BOLT witness only.
 */
const SIDE = 8.8;
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

export const PAPER_STELE_SIZES = {
  w: TAB_W,
  h: TAB_H,
  d: TAB_D,
  fillR: FILL_R,
  yTab: Y_TAB,
  yFill: Y_FILL,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, tabs: 0, fills: 0, want, h: TAB_H, fillR: FILL_R, side: SIDE };
}

/**
 * Paper steles on empty ground BETWEEN Hub land (0, 78) and DISTRICTS
 * kind==="market" (−300, −340). 4 BoxGeometry tablets + gold
 * OctahedronGeometry fills (coarse 3). MeshPhysical gold crystal — never
 * chrome, never coin, never joinlamps. Offset SIDE=8.8.
 * Voss keeps the meeting honest. $BOLT witnesses Howl only. Parent stays.
 */
export function growPaperSteles(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "papersteles";
  group.add(root);

  const want = nSteles(coarse);
  const counts = emptyCounts(want);
  root.userData.paperSteleCounts = counts;
  root.userData.paperSteleCount = 0;
  root.userData.sizes = {
    w: TAB_W,
    h: TAB_H,
    d: TAB_D,
    fillR: FILL_R,
    yTab: Y_TAB,
    yFill: Y_FILL,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const join = den("market");
  if (!join) return;
  if (Math.hypot(join.x - HUB_X, join.z - HUB_Z) < HUB_R) return;

  const dx0 = join.x - HUB_X;
  const dz0 = join.z - HUB_Z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, HUB_R / dist0);
  const tb = Math.min(0.28, (join.radius * PAD_LEAVE) / dist0);
  const ax = HUB_X + dx0 * ta;
  const az = HUB_Z + dz0 * ta;
  const bx = join.x - dx0 * tb;
  const bz = join.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const tabs: Pose[] = [];
  const fills: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    tabs.push({ x, y: Y_TAB, z, ry: yaw });
    fills.push({ x, y: Y_FILL, z, ry: yaw + 0.5 });
  }

  stamp(new THREE.BoxGeometry(TAB_W, TAB_H, TAB_D), darkGold(), tabs, root);
  stamp(new THREE.OctahedronGeometry(FILL_R, 0), goldFill(), fills, root);

  counts.n = tabs.length;
  counts.tabs = tabs.length;
  counts.fills = fills.length;
  root.userData.paperSteleCount = tabs.length;
}
