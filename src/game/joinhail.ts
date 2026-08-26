/** Join→Beacon PAPER-HAIL MARKS on empty ground BETWEEN Voss and Lumen.
 * Gold MeshPhysical dodeca paper-kisses + cyan tetra hail — not hail posts
 * (Hub→Beacon), not paper steles (Hub→Join), not join lamps (Canal→Join),
 * not fruitjoin rings, not spanhail cones, not coin, not chrome.
 * $BOLT witnesses Howl only. Parent hooks with:
 *   laterOn(() => { try { growJoinHail(group, coarse); } catch { } });
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
    roughness: 0.26,
    metalness: 0.34,
    emissive: 0x5a4020,
    emissiveIntensity: 0.14,
    iridescence: 0.44,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.36,
    clearcoatRoughness: 0.28,
    transparent: false,
  });
}

function cyanHail() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x163844,
    roughness: 0.14,
    metalness: 0.3,
    emissive: 0x7ef0ff,
    emissiveIntensity: 0.24,
    iridescence: 0.58,
    iridescenceIOR: 1.33,
    iridescenceThicknessRange: [60, 300],
    clearcoat: 0.5,
    clearcoatRoughness: 0.2,
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
/** Dodeca paper-kiss + tetra hail spark — not papersteles tablets, not hailposts cones. */
const PAPER_R = 0.24;
const HAIL_R = 0.34;
const Y_PAPER = 0.18;
const Y_HAIL = 0.62;
const SIDE = 34.6;
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nMarks(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

export const JOIN_HAIL_SIZES = {
  paperR: PAPER_R,
  hailR: HAIL_R,
  yPaper: Y_PAPER,
  yHail: Y_HAIL,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, papers: 0, hails: 0, want, paperR: PAPER_R, hailR: HAIL_R, side: SIDE };
}

/**
 * Gold paper-hail marks on empty ground BETWEEN DISTRICTS kind==="market"
 * (−300, −340) and kind==="beacon" (780, 620). 4 DodecahedronGeometry paper
 * kisses + cyan TetrahedronGeometry hail sparks (coarse 3). MeshPhysical
 * crystal — never chrome, never hailposts, never papersteles, never joinlamps,
 * never fruitjoin, never spanhail. Offset SIDE=34.6. Voss joins; Lumen hails.
 * $BOLT witnesses Howl only.
 */
export function growJoinHail(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "joinhail";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.joinHailCounts = counts;
  root.userData.joinHailCount = 0;
  root.userData.sizes = {
    paperR: PAPER_R,
    hailR: HAIL_R,
    yPaper: Y_PAPER,
    yHail: Y_HAIL,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const join = den("market");
  const beacon = den("beacon");
  if (!join || !beacon) return;
  if (Math.hypot(join.x - HUB_X, join.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(beacon.x - HUB_X, beacon.z - HUB_Z) < HUB_R) return;

  const dx0 = beacon.x - join.x;
  const dz0 = beacon.z - join.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (join.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (beacon.radius * PAD_LEAVE) / dist0);
  const ax = join.x + dx0 * ta;
  const az = join.z + dz0 * ta;
  const bx = beacon.x - dx0 * tb;
  const bz = beacon.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const papers: Pose[] = [];
  const hails: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    papers.push({ x, y: Y_PAPER, z, rx: 0.18, ry: yaw });
    hails.push({ x, y: Y_HAIL, z, rx: 0.42, ry: yaw + 0.31 });
  }

  stamp(new THREE.DodecahedronGeometry(PAPER_R, 0), darkGold(), papers, root);
  stamp(new THREE.TetrahedronGeometry(HAIL_R, 0), cyanHail(), hails, root);

  counts.n = papers.length;
  counts.papers = papers.length;
  counts.hails = hails.length;
  root.userData.joinHailCount = papers.length;
}
