/** Canal→Join PATH LAMPS on empty ground BETWEEN Charge Canals and the market.
 * Cyan MeshPhysical crystal posts — not gold street lamps (lamps.ts), not
 * chrome. Not Hub plaza lamps. Not stall gold bulbs.
 * Parent hooks with:
 *   laterOn(() => { try { growJoinLamps(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function darkCyan() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x071e28,
    roughness: 0.22,
    metalness: 0.36,
    emissive: 0x1a6578,
    emissiveIntensity: 0.16,
    iridescence: 0.36,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [90, 340],
    clearcoat: 0.32,
    clearcoatRoughness: 0.34,
    transparent: false,
  });
}

function cyanCrystal() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x163844,
    roughness: 0.16,
    metalness: 0.44,
    emissive: 0x2ee6ff,
    emissiveIntensity: 0.22,
    iridescence: 0.52,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [80, 340],
    clearcoat: 0.48,
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

/** Shorter than lamps.ts POST_H=4.2 — a BETWEEN mark, not a street lamp. */
const POST_H = 3.6;
const POST_R = 0.1;
const BULB_R = 0.2;
const Y_POST = POST_H * 0.5;
const Y_BULB = POST_H + BULB_R * 0.55;
/**
 * Off trails.ts plates (4–6 wide) and lamps.ts SIDE=3.6 gold posts.
 * Empty verge of the canal→join chord, not the street.
 */
const SIDE = 9.4;
const HUB_R = 90;
/** Start past den pads (world.ts pad r≈88–98), truly BETWEEN dens. */
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nLamps(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x, z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

export const JOIN_LAMP_SIZES = {
  h: POST_H,
  r: POST_R,
  bulbR: BULB_R,
  yPost: Y_POST,
  yBulb: Y_BULB,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return { n: 0, posts: 0, bulbs: 0, want, h: POST_H, r: POST_R, bulbR: BULB_R, side: SIDE };
}

/**
 * Cyan path lamps on empty ground BETWEEN DISTRICTS kind==="canal" (−620, 96)
 * and kind==="market" Join. 4 CylinderGeometry posts h=3.6 r=0.1 + cyan
 * OctahedronGeometry bulbs r=0.2 (coarse 3). MeshPhysical cyan — never chrome,
 * never gold street lamps (lamps.ts). Offset SIDE=9.4, Hub skip (r<90),
 * den-pad leave. Not Hub plaza lamps. Not stall bulbs.
 */
export function growJoinLamps(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "joinlamps";
  group.add(root);

  const want = nLamps(coarse);
  const counts = emptyCounts(want);
  root.userData.joinLampCounts = counts;
  root.userData.joinLampCount = 0;
  root.userData.sizes = {
    h: POST_H,
    r: POST_R,
    bulbR: BULB_R,
    yPost: Y_POST,
    yBulb: Y_BULB,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const canal = den("canal");
  const join = den("market");
  if (!canal || !join) return;
  if (Math.hypot(canal.x, canal.z) < HUB_R || Math.hypot(join.x, join.z) < HUB_R) return;

  const dx0 = join.x - canal.x;
  const dz0 = join.z - canal.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (canal.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (join.radius * PAD_LEAVE) / dist0);
  const ax = canal.x + dx0 * ta;
  const az = canal.z + dz0 * ta;
  const bx = join.x - dx0 * tb;
  const bz = join.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const posts: Pose[] = [];
  const bulbs: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    posts.push({ x, y: Y_POST, z, ry: yaw });
    bulbs.push({ x, y: Y_BULB, z, ry: yaw });
  }

  const segs = coarse ? 6 : 8;
  stamp(new THREE.CylinderGeometry(POST_R, POST_R, POST_H, segs), darkCyan(), posts, root);
  stamp(new THREE.OctahedronGeometry(BULB_R, 0), cyanCrystal(), bulbs, root);

  counts.n = posts.length;
  counts.posts = posts.length;
  counts.bulbs = bulbs.length;
  root.userData.joinLampCount = posts.length;
}
