/** Hub→Wild Veins WAY-STONES on empty ground BETWEEN spawn and Kesh.
 * Gold MeshPhysical stems + gold icosa hearts — not wild landings (veins.ts),
 * not cairn (Hub→Foundry), not name stones, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growVeinStones(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function darkGold() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x2a2010,
    roughness: 0.28,
    metalness: 0.4,
    emissive: 0x5a4020,
    emissiveIntensity: 0.12,
    iridescence: 0.38,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.34,
    clearcoatRoughness: 0.32,
    transparent: false,
  });
}

function goldCrystal() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x3a2c14,
    roughness: 0.18,
    metalness: 0.46,
    emissive: 0xc8a050,
    emissiveIntensity: 0.2,
    iridescence: 0.5,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [80, 340],
    clearcoat: 0.44,
    clearcoatRoughness: 0.24,
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
/** Short leftover-light marks — Charge still choosing, not street lamps. */
const STEM_H = 1.35;
const STEM_R = 0.12;
const HEART_R = 0.26;
const Y_STEM = STEM_H * 0.5;
const Y_HEART = STEM_H + HEART_R * 0.55;
/**
 * Off trails.ts plates, foundrylamps SIDE=12.6, spanposts SIDE=13.6.
 * Empty verge of Hub→Wild Veins, not the becoming-ground floor.
 */
const SIDE = 14.2;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nStones(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

export const VEIN_STONE_SIZES = {
  stemH: STEM_H,
  stemR: STEM_R,
  heartR: HEART_R,
  yStem: Y_STEM,
  yHeart: Y_HEART,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, stems: 0, hearts: 0, want, stemH: STEM_H, heartR: HEART_R, side: SIDE };
}

/**
 * Gold way-stones on empty ground BETWEEN Hub land (0, 78) and
 * DISTRICTS kind==="wild" (860, −640). 4 CylinderGeometry stems h=1.35 r=0.12
 * + gold IcosahedronGeometry hearts r=0.26 (coarse 3). MeshPhysical gold
 * crystal — never chrome, never cairn, never veins.ts landings.
 * Offset SIDE=14.2. Kesh grows landings Tal can trust. Parent stays.
 */
export function growVeinStones(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "veinstones";
  group.add(root);

  const want = nStones(coarse);
  const counts = emptyCounts(want);
  root.userData.veinStoneCounts = counts;
  root.userData.veinStoneCount = 0;
  root.userData.sizes = {
    stemH: STEM_H,
    stemR: STEM_R,
    heartR: HEART_R,
    yStem: Y_STEM,
    yHeart: Y_HEART,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const wild = den("wild");
  if (!wild) return;
  if (Math.hypot(wild.x, wild.z) < HUB_R) return;

  const dx0 = wild.x - HUB_X;
  const dz0 = wild.z - HUB_Z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, HUB_R / dist0);
  const tb = Math.min(0.28, (wild.radius * PAD_LEAVE) / dist0);
  const ax = HUB_X + dx0 * ta;
  const az = HUB_Z + dz0 * ta;
  const bx = wild.x - dx0 * tb;
  const bz = wild.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const stems: Pose[] = [];
  const hearts: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    stems.push({ x, y: Y_STEM, z, ry: yaw });
    hearts.push({ x, y: Y_HEART, z, ry: yaw + 0.4 });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.CylinderGeometry(STEM_R, STEM_R, STEM_H, segs), darkGold(), stems, root);
  stamp(new THREE.IcosahedronGeometry(HEART_R, 0), goldCrystal(), hearts, root);

  counts.n = stems.length;
  counts.stems = stems.length;
  counts.hearts = hearts.length;
  root.userData.veinStoneCount = stems.length;
}
