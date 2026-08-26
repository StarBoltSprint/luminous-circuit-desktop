/** Join→Ring PAPER-HOWL PLATES on empty ground BETWEEN Voss and Rhoa.
 * Gold MeshPhysical pentagon extrude plates (top-facing so F-lift reads
 * leftover paper answering chorus from leftover air) + cyan cone howl-cups —
 * not papersteles (Hub→Join), not restchorus benches (Terraces→Ring), not
 * hailring hoops, not gatehowl stems, not joinhail dodeca, not namerest hexes,
 * not aimgate diamonds, not canalvein Y-forks, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growJoinHowl(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function goldPaper() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x2c2212,
    roughness: 0.24,
    metalness: 0.28,
    emissive: 0xc8a050,
    emissiveIntensity: 0.18,
    iridescence: 0.5,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [80, 340],
    clearcoat: 0.42,
    clearcoatRoughness: 0.24,
    sheen: 0.36,
    sheenColor: new THREE.Color(0xe8c46a),
    side: THREE.DoubleSide,
    transparent: false,
  });
}

function cyanCup() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x163844,
    roughness: 0.17,
    metalness: 0.26,
    emissive: 0x7ef0ff,
    emissiveIntensity: 0.24,
    iridescence: 0.6,
    iridescenceIOR: 1.33,
    iridescenceThicknessRange: [50, 260],
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
  rz: number;
};

function stamp(geo: THREE.BufferGeometry, material: THREE.Material, poses: Pose[], group: THREE.Group) {
  if (!poses.length) return;
  const mesh = new THREE.InstancedMesh(geo, material, poses.length);
  const dummy = new THREE.Object3D();
  dummy.rotation.order = "YXZ";
  poses.forEach((p, i) => {
    dummy.position.set(p.x, p.y, p.z);
    dummy.rotation.set(p.rx, p.ry, p.rz);
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
/** Pentagon leftover-paper plate — not namerest hex, not aimgate diamond. */
const PENTA_R = 2.42;
const PENTA_D = 0.11;
const CUP_R = 0.56;
const CUP_H = 0.64;
const Y_PLATE = PENTA_D * 0.5;
const Y_CUP = PENTA_D + CUP_H * 0.5;
/** Off aimgate SIDE=39.4, namerest SIDE=37.8, canalvein SIDE=36.2, joinhail SIDE=34.6. */
const SIDE = 41.2;
const PAD_LEAVE = 0.82;
const N_FINE = 5;
const N_COARSE = 3;

function nMarks(coarse: boolean): number {
  return coarse ? N_COARSE : N_FINE;
}

function occupied(x: number, z: number): boolean {
  if (Math.hypot(x - HUB_X, z - HUB_Z) < HUB_R) return true;
  return DISTRICTS.some((d) => Math.hypot(x - d.x, z - d.z) < d.radius * 0.78);
}

function pentaPlate(radius: number, depth: number) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 5; i++) {
    const a = (Math.PI * 2 / 5) * i - Math.PI / 2;
    const x = Math.cos(a) * radius;
    const y = Math.sin(a) * radius;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: false,
    steps: 1,
    curveSegments: 1,
  });
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, depth * 0.5, 0);
  return geo;
}

export const JOIN_HOWL_SIZES = {
  pentaR: PENTA_R,
  pentaD: PENTA_D,
  cupR: CUP_R,
  cupH: CUP_H,
  yPlate: Y_PLATE,
  yCup: Y_CUP,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return {
    n: 0,
    plates: 0,
    cups: 0,
    want,
    pentaR: PENTA_R,
    cupR: CUP_R,
    side: SIDE,
  };
}

/**
 * Paper-howl plates on empty ground BETWEEN DISTRICTS kind==="market"
 * (−300, −340) and kind==="ring" (40, 920). 5 ExtrudeGeometry pentagon plates
 * facing leftover air + cyan ConeGeometry howl-cups (coarse 3). MeshPhysical
 * crystal — never chrome, never joinhail, never restchorus, never hailring,
 * never namerest, never aimgate. Offset SIDE=41.2. Voss's paper answers
 * Rhoa's chorus that does not close. F-lift reads the pentagons from leftover
 * air. $BOLT witnesses Howl only.
 */
export function growJoinHowl(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "joinhowl";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.joinHowlCounts = counts;
  root.userData.joinHowlCount = 0;
  root.userData.sizes = {
    pentaR: PENTA_R,
    pentaD: PENTA_D,
    cupR: CUP_R,
    cupH: CUP_H,
    yPlate: Y_PLATE,
    yCup: Y_CUP,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const market = den("market");
  const ring = den("ring");
  if (!market || !ring) return;
  if (Math.hypot(market.x - HUB_X, market.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(ring.x - HUB_X, ring.z - HUB_Z) < HUB_R) return;

  const dx0 = ring.x - market.x;
  const dz0 = ring.z - market.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (market.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (ring.radius * PAD_LEAVE) / dist0);
  const ax = market.x + dx0 * ta;
  const az = market.z + dz0 * ta;
  const bx = ring.x - dx0 * tb;
  const bz = ring.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const plates: Pose[] = [];
  const cups: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    plates.push({ x, y: Y_PLATE, z, rx: 0, ry: yaw, rz: 0 });
    cups.push({ x, y: Y_CUP, z, rx: 0, ry: yaw + 0.18, rz: 0 });
  }

  const segs = coarse ? 5 : 8;
  stamp(pentaPlate(PENTA_R, PENTA_D), goldPaper(), plates, root);
  stamp(new THREE.ConeGeometry(CUP_R, CUP_H, segs), cyanCup(), cups, root);

  counts.n = plates.length;
  counts.plates = plates.length;
  counts.cups = cups.length;
  root.userData.joinHowlCount = plates.length;
}
