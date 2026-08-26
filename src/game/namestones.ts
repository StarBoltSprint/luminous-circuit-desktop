/** Hub→Archive NAME STONES — leftover-light marks on empty ground BETWEEN.
 * Hub land (0, 78) to Residual Archive (−540, −460). Not archive tablets (tablets.ts).
 * Not Hub mosaic. Not aim posts (aimposts.ts). Not cairn (Hub→Foundry).
 * Parent hooks with:
 *   laterOn(() => { try { growNameStones(group, coarse); } catch { } });
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
    roughness: 0.2,
    metalness: 0.44,
    emissive: 0xffd070,
    emissiveIntensity: 0.18,
    iridescence: 0.5,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [80, 340],
    clearcoat: 0.42,
    clearcoatRoughness: 0.26,
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
/** Short leftover-light slabs — not street lamps, not archive shelves. */
const STEM_H = 1.15;
const STEM_R = 0.11;
const SLAB_W = 0.42;
const SLAB_H = 0.72;
const SLAB_T = 0.08;
const Y_STEM = STEM_H * 0.5;
const Y_SLAB = STEM_H + SLAB_H * 0.42;
/** Off trails.ts plates. Empty verge of Hub→Archive chord. */
const SIDE = 11.4;
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

export const NAME_STONE_SIZES = {
  stemH: STEM_H,
  stemR: STEM_R,
  slabW: SLAB_W,
  slabH: SLAB_H,
  slabT: SLAB_T,
  yStem: Y_STEM,
  ySlab: Y_SLAB,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, stems: 0, slabs: 0, want, stemH: STEM_H, slabH: SLAB_H, side: SIDE };
}

/**
 * Leftover-light name stones on empty ground BETWEEN Hub land (0, 78) and
 * DISTRICTS kind==="archive" (−540, −460). 4 CylinderGeometry stems + gold
 * BoxGeometry slabs (coarse 3). MeshPhysical gold — never chrome, never
 * archive tablets (tablets.ts). Offset SIDE=11.4, Hub skip, den-pad leave.
 * Iri names leftover light. Parent stays on the horizon.
 */
export function growNameStones(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "namestones";
  group.add(root);

  const want = nStones(coarse);
  const counts = emptyCounts(want);
  root.userData.nameStoneCounts = counts;
  root.userData.nameStoneCount = 0;
  root.userData.sizes = {
    stemH: STEM_H,
    stemR: STEM_R,
    slabW: SLAB_W,
    slabH: SLAB_H,
    slabT: SLAB_T,
    yStem: Y_STEM,
    ySlab: Y_SLAB,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const archive = den("archive");
  if (!archive) return;
  if (Math.hypot(archive.x, archive.z) < HUB_R) return;

  const dx0 = archive.x - HUB_X;
  const dz0 = archive.z - HUB_Z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, HUB_R / dist0);
  const tb = Math.min(0.28, (archive.radius * PAD_LEAVE) / dist0);
  const ax = HUB_X + dx0 * ta;
  const az = HUB_Z + dz0 * ta;
  const bx = archive.x - dx0 * tb;
  const bz = archive.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const stems: Pose[] = [];
  const slabs: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    stems.push({ x, y: Y_STEM, z, ry: yaw });
    slabs.push({ x, y: Y_SLAB, z, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.CylinderGeometry(STEM_R, STEM_R, STEM_H, segs), darkGold(), stems, root);
  stamp(new THREE.BoxGeometry(SLAB_T, SLAB_H, SLAB_W), goldCrystal(), slabs, root);

  counts.n = stems.length;
  counts.stems = stems.length;
  counts.slabs = slabs.length;
  root.userData.nameStoneCount = stems.length;
}
