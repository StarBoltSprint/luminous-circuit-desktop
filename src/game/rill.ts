/** Seln→Iri CHARGE RILL — leftover-light path BETWEEN canal and archive dens.
 * Thin dark-gold plates on empty ground. Not street plates (trails.ts). Not
 * canal water sheets (water.ts). Not light-bridge arcs (spans.ts). Not
 * Howl-fall (cascade.ts). Charge is tended, never bottled.
 * Parent hooks with:
 *   laterOn(() => { try { growRill(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function hash(i: number, s: number) {
  const n = Math.sin(i * 127.1 + s * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function leftoverGold() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x2c2212,
    roughness: 0.24,
    metalness: 0.48,
    emissive: 0x5a4020,
    emissiveIntensity: 0.14,
    iridescence: 0.44,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.42,
    clearcoatRoughness: 0.26,
    transparent: false,
  });
}

type Pose = {
  x: number;
  y: number;
  z: number;
  sx: number;
  sy: number;
  sz: number;
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

/** Ground rill — thinner than trails.ts plates (4–6 wide, y=0.08). */
const Y = 0.05;
const TALL = 0.07;
const W_MIN = 1.5;
const W_SPAN = 0.6;
const STEP = 18;
/** Off the canal–archive chord, empty west ground, not a street. */
const SIDE = 22;
/** Gentle meander so leftover light is a rill, not a ruler. */
const BULGE = 16;
const HUB_R = 90;
/** Start past den pads (world.ts pad r≈88–98), truly BETWEEN dens. */
const PAD_LEAVE = 0.82;

export const RILL_SIZES = {
  y: Y,
  h: TALL,
  wMin: W_MIN,
  wSpan: W_SPAN,
  step: STEP,
  side: SIDE,
  bulge: BULGE,
};

/**
 * Leftover-light Charge rill from DISTRICTS kind==="canal" to kind==="archive".
 * Instanced BoxGeometry plates ~1.5–2.1 wide, 0.07 tall, y=0.05. MeshPhysical
 * dark gold — not chrome. Offset SIDE=22 off the chord, Hub skip (r<90).
 * coarse: skip every other plate. Not trails. Not canal water. Not spans.
 */
export function growRill(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "rill";
  group.add(root);

  const counts = { n: 0, want: 0, canalArchive: 0 };
  root.userData.segmentCounts = counts;
  root.userData.sizes = {
    y: Y,
    h: TALL,
    side: SIDE,
    bulge: BULGE,
    step: STEP,
  };

  const canal = den("canal");
  const archive = den("archive");
  if (!canal || !archive) return;
  if (Math.hypot(canal.x, canal.z) < HUB_R || Math.hypot(archive.x, archive.z) < HUB_R) return;

  const dx0 = archive.x - canal.x;
  const dz0 = archive.z - canal.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (canal.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (archive.radius * PAD_LEAVE) / dist0);
  const ax0 = canal.x + dx0 * ta;
  const az0 = canal.z + dz0 * ta;
  const bx0 = archive.x - dx0 * tb;
  const bz0 = archive.z - dz0 * tb;
  const mx = (ax0 + bx0) * 0.5;
  const mz = (az0 + bz0) * 0.5;
  const ux = dx0 / dist0;
  const uz = dz0 / dist0;
  const px = -uz;
  const pz = ux;
  const s1 = Math.hypot(mx + px * SIDE, mz + pz * SIDE);
  const s2 = Math.hypot(mx - px * SIDE, mz - pz * SIDE);
  const side = s1 >= s2 ? 1 : -1;
  const ox = px * SIDE * side;
  const oz = pz * SIDE * side;
  const ax = ax0 + ox;
  const az = az0 + oz;
  const bx = bx0 + ox;
  const bz = bz0 + oz;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const steps = Math.max(2, Math.round(dist / STEP));
  const along = dist / steps;
  counts.want = steps;

  const plates: Pose[] = [];
  for (let i = 0; i < steps; i++) {
    if (coarse && i % 2 === 1) continue;
    const t = (i + 0.5) / steps;
    const wiggle = Math.sin(t * Math.PI) * BULGE;
    const x = ax + dx * t + px * side * wiggle;
    const z = az + dz * t + pz * side * wiggle;
    if (Math.hypot(x, z) < HUB_R) continue;
    const dt = 0.02;
    const t0 = Math.max(0, t - dt);
    const t1 = Math.min(1, t + dt);
    const w0 = Math.sin(t0 * Math.PI) * BULGE;
    const w1 = Math.sin(t1 * Math.PI) * BULGE;
    const x0 = ax + dx * t0 + px * side * w0;
    const z0 = az + dz * t0 + pz * side * w0;
    const x1 = ax + dx * t1 + px * side * w1;
    const z1 = az + dz * t1 + pz * side * w1;
    const yaw = Math.atan2(x1 - x0, z1 - z0);
    const w = W_MIN + hash(i, 5) * W_SPAN;
    plates.push({
      x,
      y: Y,
      z,
      sx: w,
      sy: TALL,
      sz: along * 0.94,
      ry: yaw,
    });
  }

  const geo = new THREE.BoxGeometry(1, 1, 1);
  stamp(geo, leftoverGold(), plates, root);
  counts.n = plates.length;
  counts.canalArchive = plates.length;
}
