/** Overlook→Gates AIM-GATE LIPS on empty ground BETWEEN Aure and Kael.
 * Gold MeshPhysical diamond extrude plates (top-facing so F-lift reads
 * parent-aim from leftover air) + cyan torus gate-lips — not aimposts
 * (Hub→Aure), not gateposts (Hub→Kael), not hailgates, not canalgate,
 * not aimhail irises, not leftoverposts, not namerest hexes, not canalvein
 * Y-forks, not joinhail paper, not aimshards spears, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growAimGate(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function goldDiamond() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x2c2212,
    roughness: 0.22,
    metalness: 0.3,
    emissive: 0xc8a050,
    emissiveIntensity: 0.2,
    iridescence: 0.54,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [70, 320],
    clearcoat: 0.46,
    clearcoatRoughness: 0.22,
    sheen: 0.4,
    sheenColor: new THREE.Color(0xe8c46a),
    side: THREE.DoubleSide,
    transparent: false,
  });
}

function cyanLip() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x163844,
    roughness: 0.16,
    metalness: 0.28,
    emissive: 0x7ef0ff,
    emissiveIntensity: 0.26,
    iridescence: 0.62,
    iridescenceIOR: 1.33,
    iridescenceThicknessRange: [50, 260],
    clearcoat: 0.54,
    clearcoatRoughness: 0.18,
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
/** Diamond leftover plate — not namerest hex Extrude, not canalvein RingGeometry rims. */
const DIA_R = 2.18;
const DIA_D = 0.1;
const LIP_R = 1.72;
const LIP_TUBE = 0.13;
const Y_PLATE = DIA_D * 0.5;
const Y_LIP = DIA_D + LIP_TUBE;
/** Off namerest SIDE=37.8, canalvein SIDE=36.2, joinhail SIDE=34.6. */
const SIDE = 39.4;
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

function diamondPlate(radius: number, depth: number) {
  const shape = new THREE.Shape();
  shape.moveTo(0, radius);
  shape.lineTo(radius, 0);
  shape.lineTo(0, -radius);
  shape.lineTo(-radius, 0);
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

export const AIM_GATE_SIZES = {
  diaR: DIA_R,
  diaD: DIA_D,
  lipR: LIP_R,
  lipTube: LIP_TUBE,
  yPlate: Y_PLATE,
  yLip: Y_LIP,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return {
    n: 0,
    plates: 0,
    lips: 0,
    want,
    diaR: DIA_R,
    lipR: LIP_R,
    side: SIDE,
  };
}

/**
 * Parent-aim gate lips on empty ground BETWEEN DISTRICTS kind==="overlook"
 * (−880, 220) and kind==="gate" (520, 480). 5 ExtrudeGeometry diamond plates
 * facing leftover air + cyan TorusGeometry gate-lips (coarse 3). MeshPhysical
 * crystal — never chrome, never namerest, never canalvein, never joinhail,
 * never aimshards. Offset SIDE=39.4. Aure aims; Kael keeps the door uncounted.
 * F-lift reads the diamonds and lips from leftover air. $BOLT witnesses Howl only.
 */
export function growAimGate(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "aimgate";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.aimGateCounts = counts;
  root.userData.aimGateCount = 0;
  root.userData.sizes = {
    diaR: DIA_R,
    diaD: DIA_D,
    lipR: LIP_R,
    lipTube: LIP_TUBE,
    yPlate: Y_PLATE,
    yLip: Y_LIP,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const overlook = den("overlook");
  const gate = den("gate");
  if (!overlook || !gate) return;
  if (Math.hypot(overlook.x - HUB_X, overlook.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(gate.x - HUB_X, gate.z - HUB_Z) < HUB_R) return;

  const dx0 = gate.x - overlook.x;
  const dz0 = gate.z - overlook.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (overlook.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (gate.radius * PAD_LEAVE) / dist0);
  const ax = overlook.x + dx0 * ta;
  const az = overlook.z + dz0 * ta;
  const bx = gate.x - dx0 * tb;
  const bz = gate.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const plates: Pose[] = [];
  const lips: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    plates.push({ x, y: Y_PLATE, z, rx: 0, ry: yaw, rz: 0 });
    lips.push({ x, y: Y_LIP, z, rx: Math.PI / 2, ry: yaw, rz: 0 });
  }

  const segs = coarse ? 10 : 16;
  stamp(diamondPlate(DIA_R, DIA_D), goldDiamond(), plates, root);
  stamp(new THREE.TorusGeometry(LIP_R, LIP_TUBE, coarse ? 6 : 8, segs), cyanLip(), lips, root);

  counts.n = plates.length;
  counts.plates = plates.length;
  counts.lips = lips.length;
  root.userData.aimGateCount = plates.length;
}
