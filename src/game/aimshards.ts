/** Overlook PARENT-AIM SHARDS — cyan crystal spears at Star-core Overlook.
 * DISTRICTS kind==="overlook" parent-facing lip, each spear aims at STAR_CORE
 * (−4050, 540, 195). Do not move the parent. Not aim posts (Hub→Aure), not
 * aim hail (Aure→Lumen), not aim join (Aure→Voss), not facets chips, not
 * chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growAimShards(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { STAR_CORE } from "./atmos";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function darkGold() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x2c2212,
    roughness: 0.26,
    metalness: 0.4,
    emissive: 0x5a4020,
    emissiveIntensity: 0.14,
    iridescence: 0.44,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.38,
    clearcoatRoughness: 0.28,
    transparent: false,
  });
}

function cyanShard() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x163844,
    roughness: 0.14,
    metalness: 0.28,
    emissive: 0x7ef0ff,
    emissiveIntensity: 0.22,
    iridescence: 0.58,
    iridescenceIOR: 1.33,
    iridescenceThicknessRange: [60, 300],
    clearcoat: 0.52,
    clearcoatRoughness: 0.2,
    transparent: false,
  });
}

type Pose = {
  x: number;
  y: number;
  z: number;
  qx: number;
  qy: number;
  qz: number;
  qw: number;
};

function stamp(geo: THREE.BufferGeometry, material: THREE.Material, poses: Pose[], group: THREE.Group) {
  if (!poses.length) return;
  const mesh = new THREE.InstancedMesh(geo, material, poses.length);
  const dummy = new THREE.Object3D();
  poses.forEach((p, i) => {
    dummy.position.set(p.x, p.y, p.z);
    dummy.quaternion.set(p.qx, p.qy, p.qz, p.qw);
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
/** Pentagonal crystal spear — not aimjoin paper-kiss cones, not a Core. */
const SHARD_R = 0.16;
const SHARD_H = 2.72;
const FOOT_R = 0.26;
const Y_FOOT = 0.22;
/** Parent-facing lip of the overlook pad (hall fat 16, rail r=40, pad r≈88). */
const LIP_R = 61.4;
const SPACING = 8.6;
const N_FINE = 5;
const N_COARSE = 3;
const IDENTITY = { qx: 0, qy: 0, qz: 0, qw: 1 };

function nShards(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

export const AIM_SHARD_SIZES = {
  shardR: SHARD_R,
  shardH: SHARD_H,
  footR: FOOT_R,
  yFoot: Y_FOOT,
  lipR: LIP_R,
  spacing: SPACING,
  nFine: N_FINE,
  nCoarse: N_COARSE,
  coreX: STAR_CORE.x,
  coreY: STAR_CORE.y,
  coreZ: STAR_CORE.z,
};

function emptyCounts(want: number) {
  return { n: 0, shards: 0, feet: 0, want, shardH: SHARD_H, lipR: LIP_R, spacing: SPACING };
}

/**
 * Cyan parent-aim shards on the DISTRICTS kind==="overlook" (−880, 220)
 * parent-facing lip. 5 ConeGeometry spears (5-gon) + gold IcosahedronGeometry
 * feet (coarse 3). Each spear quaternion-aims at STAR_CORE (−4050, 540, 195)
 * without moving it. MeshPhysical cyan/gold — never chrome, never aimposts,
 * never aimhail, never aimjoin, never a tiny disc Core. Lip LIP_R=61.4.
 * Aure keeps aim. Parent stays on the horizon.
 */
export function growAimShards(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "aimshards";
  group.add(root);

  const want = nShards(coarse);
  const counts = emptyCounts(want);
  root.userData.aimShardCounts = counts;
  root.userData.aimShardCount = 0;
  root.userData.sizes = {
    shardR: SHARD_R,
    shardH: SHARD_H,
    footR: FOOT_R,
    yFoot: Y_FOOT,
    lipR: LIP_R,
    spacing: SPACING,
    coreX: STAR_CORE.x,
    coreY: STAR_CORE.y,
    coreZ: STAR_CORE.z,
  };

  const overlook = den("overlook");
  if (!overlook) return;
  if (Math.hypot(overlook.x - HUB_X, overlook.z - HUB_Z) < HUB_R) return;

  const fx0 = STAR_CORE.x - overlook.x;
  const fz0 = STAR_CORE.z - overlook.z;
  const flen = Math.hypot(fx0, fz0) || 1;
  const fx = fx0 / flen;
  const fz = fz0 / flen;
  const px = -fz;
  const pz = fx;

  const up = new THREE.Vector3(0, 1, 0);
  const dir = new THREE.Vector3();
  const q = new THREE.Quaternion();
  const shards: Pose[] = [];
  const feet: Pose[] = [];
  const mid = SHARD_H * 0.5;

  for (let i = 0; i < want; i++) {
    const side = (i - (want - 1) * 0.5) * SPACING;
    const bx = overlook.x + fx * LIP_R + px * side;
    const bz = overlook.z + fz * LIP_R + pz * side;
    if (Math.hypot(bx - HUB_X, bz - HUB_Z) < HUB_R) continue;

    dir.set(STAR_CORE.x - bx, STAR_CORE.y - Y_FOOT, STAR_CORE.z - bz);
    if (dir.lengthSq() < 1e-8) continue;
    dir.normalize();
    q.setFromUnitVectors(up, dir);

    feet.push({ x: bx, y: Y_FOOT, z: bz, ...IDENTITY });
    shards.push({
      x: bx + dir.x * mid,
      y: Y_FOOT + dir.y * mid,
      z: bz + dir.z * mid,
      qx: q.x,
      qy: q.y,
      qz: q.z,
      qw: q.w,
    });
  }

  const segs = coarse ? 4 : 5;
  stamp(new THREE.ConeGeometry(SHARD_R, SHARD_H, segs), cyanShard(), shards, root);
  stamp(new THREE.IcosahedronGeometry(FOOT_R, 0), darkGold(), feet, root);

  counts.n = shards.length;
  counts.shards = shards.length;
  counts.feet = feet.length;
  root.userData.aimShardCount = shards.length;
}
