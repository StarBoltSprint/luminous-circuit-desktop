/** Hub→Foundry PATH LAMPS on empty ground BETWEEN spawn and the kiln.
 * Gold MeshPhysical posts + cyan MeshPhysical crystal bulbs — not street
 * lamps (lamps.ts), not Join cyan (joinlamps.ts), not cairn, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growFoundryLamps(group, coarse); } catch { } });
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
    metalness: 0.42,
    emissive: 0x5a4020,
    emissiveIntensity: 0.12,
    iridescence: 0.4,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.36,
    clearcoatRoughness: 0.3,
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

/** Hub land — save.ts / engine.ts pz=78. Hub is not a DISTRICTS den. */
const HUB_X = 0;
const HUB_Z = 78;
const HUB_R = 90;
/** Shorter than lamps.ts POST_H=4.2 — a BETWEEN mark, not a street lamp. */
const POST_H = 3.4;
const POST_R = 0.1;
const BULB_R = 0.18;
const Y_POST = POST_H * 0.5;
const Y_BULB = POST_H + BULB_R * 0.55;
/**
 * Off trails.ts plates, the 16-wide world.ts path (half-width 8),
 * and cairn.ts SIDE=22. Empty verge of Hub→Foundry, not the kiln floor.
 */
const SIDE = 12.6;
/** Start past den pads (world.ts pad r≈88–98), truly BETWEEN Hub and kiln. */
const PAD_LEAVE = 0.82;
const N_FINE = 4;
const N_COARSE = 3;

function nLamps(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

export const FOUNDRY_LAMP_SIZES = {
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
 * Gold/cyan path lamps on empty ground BETWEEN Hub land (0, 78) and
 * DISTRICTS kind==="foundry" (70, −680). 4 CylinderGeometry posts h=3.4 r=0.1
 * + cyan OctahedronGeometry bulbs r=0.18 (coarse 3). MeshPhysical gold posts
 * + cyan crystal — never chrome, never gold street lamps (lamps.ts), never
 * Join cyan (joinlamps.ts). Offset SIDE=12.6, Hub skip, den-pad leave.
 * Not Hub plaza lamps. Not cairn. Not kiln hearth.
 */
export function growFoundryLamps(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "foundrylamps";
  group.add(root);

  const want = nLamps(coarse);
  const counts = emptyCounts(want);
  root.userData.foundryLampCounts = counts;
  root.userData.foundryLampCount = 0;
  root.userData.sizes = {
    h: POST_H,
    r: POST_R,
    bulbR: BULB_R,
    yPost: Y_POST,
    yBulb: Y_BULB,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const foundry = den("foundry");
  if (!foundry) return;
  if (Math.hypot(foundry.x, foundry.z) < HUB_R) return;

  const dx0 = foundry.x - HUB_X;
  const dz0 = foundry.z - HUB_Z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, HUB_R / dist0);
  const tb = Math.min(0.28, (foundry.radius * PAD_LEAVE) / dist0);
  const ax = HUB_X + dx0 * ta;
  const az = HUB_Z + dz0 * ta;
  const bx = foundry.x - dx0 * tb;
  const bz = foundry.z - dz0 * tb;
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
  stamp(new THREE.CylinderGeometry(POST_R, POST_R, POST_H, segs), darkGold(), posts, root);
  stamp(new THREE.OctahedronGeometry(BULB_R, 0), cyanCrystal(), bulbs, root);

  counts.n = posts.length;
  counts.posts = posts.length;
  counts.bulbs = bulbs.length;
  root.userData.foundryLampCount = posts.length;
}
