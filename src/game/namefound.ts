/** Archive→Foundry NAME-KILN TABLETS on empty ground BETWEEN Iri and Orren.
 * Gold MeshPhysical tablets + cyan octa kisses — not namestones (Hub→Iri),
 * not foundry lamps (Hub→Orren), not papersteles, not leftoverposts, not
 * chrome, not coin.
 * Parent hooks with:
 *   laterOn(() => { try { growNameFound(group, coarse); } catch { } });
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
/** Name-kiln tablet — thicker than papersteles 0.07×1.48×0.38; cyan octa, not gold fill. */
const TAB_W = 0.11;
const TAB_H = 1.62;
const TAB_D = 0.46;
const OCT_R = 0.18;
const Y_TAB = TAB_H * 0.5;
const Y_OCT = TAB_H + OCT_R * 0.42;
const SIDE = 34.8;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nTabs(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

export const NAME_FOUND_SIZES = {
  tabW: TAB_W,
  tabH: TAB_H,
  tabD: TAB_D,
  octR: OCT_R,
  yTab: Y_TAB,
  yOct: Y_OCT,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, tabs: 0, octs: 0, want, tabH: TAB_H, octR: OCT_R, side: SIDE };
}

/**
 * Gold name-kiln tablets on empty ground BETWEEN DISTRICTS kind==="archive"
 * (−540, −460) and kind==="foundry" (70, −680). 4 BoxGeometry tablets + cyan
 * OctahedronGeometry kisses (coarse 3). MeshPhysical crystal — never chrome,
 * never coin, never namestones, never papersteles, never leftoverposts.
 * Offset SIDE=34.8. Iri names kiln body that already stood. Parent stays.
 */
export function growNameFound(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "namefound";
  group.add(root);

  const want = nTabs(coarse);
  const counts = emptyCounts(want);
  root.userData.nameFoundCounts = counts;
  root.userData.nameFoundCount = 0;
  root.userData.sizes = {
    tabW: TAB_W,
    tabH: TAB_H,
    tabD: TAB_D,
    octR: OCT_R,
    yTab: Y_TAB,
    yOct: Y_OCT,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const archive = den("archive");
  const foundry = den("foundry");
  if (!archive || !foundry) return;
  if (Math.hypot(archive.x - HUB_X, archive.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(foundry.x - HUB_X, foundry.z - HUB_Z) < HUB_R) return;

  const dx0 = foundry.x - archive.x;
  const dz0 = foundry.z - archive.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (archive.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (foundry.radius * PAD_LEAVE) / dist0);
  const ax = archive.x + dx0 * ta;
  const az = archive.z + dz0 * ta;
  const bx = foundry.x - dx0 * tb;
  const bz = foundry.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const tabs: Pose[] = [];
  const octs: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    tabs.push({ x, y: Y_TAB, z, ry: yaw });
    octs.push({ x, y: Y_OCT, z, ry: yaw + 0.35 });
  }

  stamp(new THREE.BoxGeometry(TAB_W, TAB_H, TAB_D), darkGold(), tabs, root);
  stamp(new THREE.OctahedronGeometry(OCT_R, 0), cyanKiss(), octs, root);

  counts.n = tabs.length;
  counts.tabs = tabs.length;
  counts.octs = octs.length;
  root.userData.nameFoundCount = tabs.length;
}
