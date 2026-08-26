/** Canal→Wild CHARGE-VEIN FORKS on empty ground BETWEEN Seln and Kesh.
 * Cyan MeshPhysical Y-forks + gold icosa hubs + top-facing lift rims —
 * not canal posts (Hub→Seln), not vein stones (Hub→Kesh), not wildfound
 * bulbs, not veinbough trunks, not joinhail paper, not aimshards spears,
 * not chrome. Wide rings and forks so F-lift reads the chord from leftover
 * air. $BOLT witnesses Howl only. Parent hooks with:
 *   laterOn(() => { try { growCanalVein(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function cyanFork() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x163844,
    roughness: 0.16,
    metalness: 0.32,
    emissive: 0x7ef0ff,
    emissiveIntensity: 0.28,
    iridescence: 0.62,
    iridescenceIOR: 1.33,
    iridescenceThicknessRange: [50, 280],
    clearcoat: 0.52,
    clearcoatRoughness: 0.18,
    transparent: false,
  });
}

function goldHub() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x2c2212,
    roughness: 0.24,
    metalness: 0.38,
    emissive: 0xc8a050,
    emissiveIntensity: 0.2,
    iridescence: 0.48,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.4,
    clearcoatRoughness: 0.26,
    transparent: false,
  });
}

function liftRim() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x1a4030,
    roughness: 0.12,
    metalness: 0.28,
    emissive: 0x7ef0ff,
    emissiveIntensity: 0.42,
    iridescence: 0.7,
    iridescenceIOR: 1.34,
    iridescenceThicknessRange: [40, 240],
    clearcoat: 0.62,
    clearcoatRoughness: 0.14,
    sheen: 0.55,
    sheenColor: new THREE.Color(0xe8c46a),
    transparent: false,
  });
}

type Pose = {
  x: number;
  y: number;
  z: number;
  rx: number;
  ry: number;
  rz: number;
  sx: number;
  sy: number;
  sz: number;
};

function stamp(geo: THREE.BufferGeometry, material: THREE.Material, poses: Pose[], group: THREE.Group) {
  if (!poses.length) return;
  const mesh = new THREE.InstancedMesh(geo, material, poses.length);
  const dummy = new THREE.Object3D();
  dummy.rotation.order = "YXZ";
  poses.forEach((p, i) => {
    dummy.position.set(p.x, p.y, p.z);
    dummy.rotation.set(p.rx, p.ry, p.rz);
    dummy.scale.set(p.sx, p.sy, p.sz);
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
/** Y-fork arm — not canalposts cylinder, not veinstones icosa stem. */
const ARM_L = 3.8;
const ARM_H = 0.16;
const ARM_W = 0.46;
const HUB_R_GEO = 0.34;
const NEEDLE_H = 3.7;
const NEEDLE_R = 0.09;
const RIM_INNER = 1.22;
const RIM_OUTER = 1.92;
const Y_ARM = ARM_H * 0.5;
const Y_HUB = 0.46;
const Y_NEEDLE = NEEDLE_H * 0.5;
const Y_RIM = 0.07;
/** Off wildfound SIDE=33.4, joinhail SIDE=34.6, namefound SIDE=34.8. */
const SIDE = 36.2;
const PAD_LEAVE = 0.82;
const N_FINE = 5;
const N_COARSE = 3;
const UNIT: Pick<Pose, "sx" | "sy" | "sz"> = { sx: 1, sy: 1, sz: 1 };

function nMarks(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

export const CANAL_VEIN_SIZES = {
  armL: ARM_L,
  armH: ARM_H,
  armW: ARM_W,
  hubR: HUB_R_GEO,
  needleH: NEEDLE_H,
  rimInner: RIM_INNER,
  rimOuter: RIM_OUTER,
  yArm: Y_ARM,
  yHub: Y_HUB,
  yNeedle: Y_NEEDLE,
  yRim: Y_RIM,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return {
    n: 0,
    forks: 0,
    hubs: 0,
    needles: 0,
    rims: 0,
    want,
    armL: ARM_L,
    hubR: HUB_R_GEO,
    needleH: NEEDLE_H,
    side: SIDE,
  };
}

/**
 * Charge-vein forks on empty ground BETWEEN DISTRICTS kind==="canal"
 * (−620, 96) and kind==="wild" (860, −640). 5 Y-fork BoxGeometry arms +
 * gold IcosahedronGeometry hubs + cyan CylinderGeometry needles +
 * top-facing RingGeometry lift rims (coarse 3). MeshPhysical crystal —
 * never chrome, never canalposts, never veinstones, never joinhail,
 * never aimshards. Offset SIDE=36.2. Seln tends; Kesh lets Charge choose
 * a street. F-lift reads the rims and forks from leftover air.
 * $BOLT witnesses Howl only.
 */
export function growCanalVein(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "canalvein";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.canalVeinCounts = counts;
  root.userData.canalVeinCount = 0;
  root.userData.sizes = {
    armL: ARM_L,
    armH: ARM_H,
    armW: ARM_W,
    hubR: HUB_R_GEO,
    needleH: NEEDLE_H,
    rimInner: RIM_INNER,
    rimOuter: RIM_OUTER,
    yArm: Y_ARM,
    yHub: Y_HUB,
    yNeedle: Y_NEEDLE,
    yRim: Y_RIM,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const canal = den("canal");
  const wild = den("wild");
  if (!canal || !wild) return;
  if (Math.hypot(canal.x - HUB_X, canal.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(wild.x - HUB_X, wild.z - HUB_Z) < HUB_R) return;

  const dx0 = wild.x - canal.x;
  const dz0 = wild.z - canal.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (canal.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (wild.radius * PAD_LEAVE) / dist0);
  const ax = canal.x + dx0 * ta;
  const az = canal.z + dz0 * ta;
  const bx = wild.x - dx0 * tb;
  const bz = wild.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const forks: Pose[] = [];
  const hubs: Pose[] = [];
  const needles: Pose[] = [];
  const rims: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    forks.push({ x, y: Y_ARM, z, rx: 0, ry: yaw, rz: 0, ...UNIT });
    forks.push({ x, y: Y_ARM, z, rx: 0, ry: yaw + 0.58, rz: 0, ...UNIT });
    forks.push({ x, y: Y_ARM, z, rx: 0, ry: yaw - 0.58, rz: 0, ...UNIT });
    hubs.push({ x, y: Y_HUB, z, rx: 0.22, ry: yaw + 0.4, rz: 0.18, ...UNIT });
    needles.push({ x, y: Y_NEEDLE, z, rx: 0, ry: yaw, rz: 0, ...UNIT });
    rims.push({ x, y: Y_RIM, z, rx: Math.PI / 2, ry: yaw, rz: 0, ...UNIT });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.BoxGeometry(ARM_L, ARM_H, ARM_W), cyanFork(), forks, root);
  stamp(new THREE.IcosahedronGeometry(HUB_R_GEO, 0), goldHub(), hubs, root);
  stamp(new THREE.CylinderGeometry(NEEDLE_R, NEEDLE_R * 0.45, NEEDLE_H, segs), cyanFork(), needles, root);
  stamp(new THREE.RingGeometry(RIM_INNER, RIM_OUTER, coarse ? 12 : 18), liftRim(), rims, root);

  counts.n = hubs.length;
  counts.forks = forks.length;
  counts.hubs = hubs.length;
  counts.needles = needles.length;
  counts.rims = rims.length;
  root.userData.canalVeinCount = hubs.length;
}
