/** Archive→Terraces LEFTOVER-NAME REST PLATES on empty ground BETWEEN Iri and Mira.
 * Gold MeshPhysical hex extrude plates (top-facing so F-lift reads leftover
 * names from leftover air) + cyan octa rest-kisses — not namestones
 * (Hub→Iri), not terrace posts (Hub→Mira), not leftoverposts, not reststeles,
 * not canalvein Y-forks, not joinhail paper, not aimshards spears, not chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growNameRest(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function den(kind: (typeof DISTRICTS)[number]["kind"]) {
  return DISTRICTS.find((d) => d.kind === kind) ?? null;
}

function leftoverPlate() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x2c2212,
    roughness: 0.22,
    metalness: 0.3,
    emissive: 0xc8a050,
    emissiveIntensity: 0.22,
    iridescence: 0.56,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [70, 320],
    clearcoat: 0.48,
    clearcoatRoughness: 0.2,
    sheen: 0.42,
    sheenColor: new THREE.Color(0xe8c46a),
    side: THREE.DoubleSide,
    transparent: false,
  });
}

function cyanRest() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x163844,
    roughness: 0.15,
    metalness: 0.26,
    emissive: 0x7ef0ff,
    emissiveIntensity: 0.3,
    iridescence: 0.64,
    iridescenceIOR: 1.33,
    iridescenceThicknessRange: [50, 260],
    clearcoat: 0.56,
    clearcoatRoughness: 0.16,
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
/** Hex leftover plate — not canalvein RingGeometry rims, not terrace CircleGeometry discs. */
const HEX_R = 1.86;
const HEX_D = 0.09;
const OCT_R = 0.3;
const Y_PLATE = HEX_D * 0.5;
const Y_OCT = HEX_D + OCT_R * 0.72;
/** Off canalvein SIDE=36.2, joinhail SIDE=34.6, namefound SIDE=34.8. */
const SIDE = 37.8;
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

function hexPlate(radius: number, depth: number) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i + Math.PI / 6;
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

export const NAME_REST_SIZES = {
  hexR: HEX_R,
  hexD: HEX_D,
  octR: OCT_R,
  yPlate: Y_PLATE,
  yOct: Y_OCT,
  side: SIDE,
  padLeave: PAD_LEAVE,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function emptyCounts(want: number) {
  return {
    n: 0,
    plates: 0,
    kisses: 0,
    want,
    hexR: HEX_R,
    octR: OCT_R,
    side: SIDE,
  };
}

/**
 * Leftover-name rest plates on empty ground BETWEEN DISTRICTS kind==="archive"
 * (−540, −460) and kind==="terrace" (48, 660). 5 ExtrudeGeometry hex plates
 * facing leftover air + cyan OctahedronGeometry rest kisses (coarse 3).
 * MeshPhysical crystal — never chrome, never namestones, never terraceposts,
 * never canalvein, never joinhail, never aimshards. Offset SIDE=37.8.
 * Iri names leftover light; Mira keeps rest a post. F-lift reads the hexes
 * from leftover air. $BOLT witnesses Howl only.
 */
export function growNameRest(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "namerest";
  group.add(root);

  const want = nMarks(coarse);
  const counts = emptyCounts(want);
  root.userData.nameRestCounts = counts;
  root.userData.nameRestCount = 0;
  root.userData.sizes = {
    hexR: HEX_R,
    hexD: HEX_D,
    octR: OCT_R,
    yPlate: Y_PLATE,
    yOct: Y_OCT,
    side: SIDE,
    padLeave: PAD_LEAVE,
  };

  const archive = den("archive");
  const terrace = den("terrace");
  if (!archive || !terrace) return;
  if (Math.hypot(archive.x - HUB_X, archive.z - HUB_Z) < HUB_R) return;
  if (Math.hypot(terrace.x - HUB_X, terrace.z - HUB_Z) < HUB_R) return;

  const dx0 = terrace.x - archive.x;
  const dz0 = terrace.z - archive.z;
  const dist0 = Math.hypot(dx0, dz0) || 1;
  const ta = Math.min(0.28, (archive.radius * PAD_LEAVE) / dist0);
  const tb = Math.min(0.28, (terrace.radius * PAD_LEAVE) / dist0);
  const ax = archive.x + dx0 * ta;
  const az = archive.z + dz0 * ta;
  const bx = terrace.x - dx0 * tb;
  const bz = terrace.z - dz0 * tb;
  const dx = bx - ax;
  const dz = bz - az;
  const dist = Math.hypot(dx, dz) || 1;
  const px = -dz / dist;
  const pz = dx / dist;
  const yaw = Math.atan2(dx, dz);

  const plates: Pose[] = [];
  const kisses: Pose[] = [];

  for (let i = 0; i < want; i++) {
    const t = (i + 0.5) / want;
    const side = i % 2 === 0 ? 1 : -1;
    const x = ax + dx * t + px * SIDE * side;
    const z = az + dz * t + pz * SIDE * side;
    if (occupied(x, z)) continue;
    plates.push({ x, y: Y_PLATE, z, rx: 0, ry: yaw, rz: 0 });
    kisses.push({ x, y: Y_OCT, z, rx: 0.31, ry: yaw + 0.22, rz: 0.14 });
  }

  stamp(hexPlate(HEX_R, HEX_D), leftoverPlate(), plates, root);
  stamp(new THREE.OctahedronGeometry(OCT_R, 0), cyanRest(), kisses, root);

  counts.n = plates.length;
  counts.plates = plates.length;
  counts.kisses = kisses.length;
  root.userData.nameRestCount = plates.length;
}
