/** Veyra HUB LAND VEIL — soft violet/cyan cloth at Hub spawn (0, 78).
 * Not Kael gate veil (veil.ts). Not civic banners (banners.ts). Not mist.
 * Parent hooks with:
 *   laterOn(() => { try { growHubVeil(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";

function darkPost() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x1a140c,
    roughness: 0.42,
    metalness: 0.34,
    emissive: 0x3a2c16,
    emissiveIntensity: 0.08,
    iridescence: 0.22,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [90, 360],
    clearcoat: 0.18,
    clearcoatRoughness: 0.48,
    transparent: false,
  });
}

function violetCloth(opacity: number) {
  return new THREE.MeshPhysicalMaterial({
    color: 0x141022,
    roughness: 0.28,
    metalness: 0.28,
    emissive: 0x322456,
    emissiveIntensity: 0.16,
    iridescence: 0.62,
    iridescenceIOR: 1.31,
    iridescenceThicknessRange: [80, 380],
    clearcoat: 0.22,
    clearcoatRoughness: 0.44,
    transparent: true,
    opacity,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
}

function cyanCloth(opacity: number) {
  return new THREE.MeshPhysicalMaterial({
    color: 0x0c3340,
    roughness: 0.26,
    metalness: 0.24,
    emissive: 0x1a6578,
    emissiveIntensity: 0.14,
    iridescence: 0.58,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [80, 340],
    clearcoat: 0.2,
    clearcoatRoughness: 0.46,
    transparent: true,
    opacity,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
}

/** Hub land — save.ts / engine.ts pz=78. Hub is not a DISTRICTS den. */
const HUB_X = 0;
const HUB_Z = 78;
/**
 * East of the spawn walk so land is not a lock. Nesh lens/prism sit west-north
 * (~apron 82 toward Nesh). plazaHeart top r=46.
 */
const SIDE = 7;
/** Thickness, hang, face — BoxGeometry 0.08×4.2×2.8. Face the north–south walk. */
const VEIL_T = 0.08;
const VEIL_H = 4.2;
const VEIL_W = 2.8;
const POST_H = 5.8;
const POST_R = 0.09;
const ARM_T = 0.08;
const ARM_D = 0.12;
const HANG_Y = POST_H - ARM_T;
const VEIL_Y = HANG_Y - VEIL_H * 0.5;
const VIOLET_OP = 0.46;
const CYAN_OP = 0.32;
/** Cyan lining sits toward the walk, slightly smaller — extra, not a second veil. */
const LINING_OX = -0.05;
const LINING_SCALE_H = 0.92;
const LINING_SCALE_W = 0.9;
const N_FINE = 1;
const N_COARSE = 1;

const SIZES = {
  t: VEIL_T,
  h: VEIL_H,
  w: VEIL_W,
  postH: POST_H,
  postR: POST_R,
  hangY: HANG_Y,
  veilY: VEIL_Y,
  hubX: HUB_X,
  hubZ: HUB_Z,
  side: SIDE,
  violetOp: VIOLET_OP,
  cyanOp: CYAN_OP,
  nFine: N_FINE,
  nCoarse: N_COARSE,
};

function plant(
  mesh: THREE.Mesh,
  x: number,
  y: number,
  z: number,
  root: THREE.Group,
  receive: boolean,
  order: number,
) {
  mesh.position.set(x, y, z);
  mesh.castShadow = false;
  mesh.receiveShadow = receive;
  mesh.frustumCulled = true;
  mesh.renderOrder = order;
  root.add(mesh);
}

/**
 * One Hub-land veil at spawn (0, 78), east SIDE=7 of the walk. BoxGeometry
 * 0.08×4.2×2.8 MeshPhysical violet cloth hanging from two CylinderGeometry
 * posts — never chrome, never a lock. Fine also: cyan lining (skip extra on
 * coarse). 1 veil. Not Kael gate veil. Not civic banners. Not mist.
 */
export function growHubVeil(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "hubveil";
  group.add(root);

  const x = HUB_X + SIDE;
  const z = HUB_Z;
  const segs = coarse ? 6 : 8;
  const lining = !coarse;

  const sizes = {
    t: VEIL_T,
    h: VEIL_H,
    w: VEIL_W,
    postH: POST_H,
    postR: POST_R,
    hangY: HANG_Y,
    veilY: VEIL_Y,
    hubX: HUB_X,
    hubZ: HUB_Z,
    side: SIDE,
    violetOp: VIOLET_OP,
    cyanOp: lining ? CYAN_OP : 0,
    nFine: N_FINE,
    nCoarse: N_COARSE,
    x,
    y: VEIL_Y,
    z,
    segs,
    veilCount: 0,
    liningCount: 0,
    postCount: 0,
  };
  root.userData.sizes = sizes;
  root.userData.veilCount = 0;
  root.userData.liningCount = 0;
  root.userData.postCount = 0;

  const postMat = darkPost();
  const postGeo = new THREE.CylinderGeometry(POST_R, POST_R, POST_H, segs);
  const zL = z - VEIL_W * 0.5;
  const zR = z + VEIL_W * 0.5;
  plant(new THREE.Mesh(postGeo, postMat), x, POST_H * 0.5, zL, root, true, 2);
  plant(new THREE.Mesh(postGeo, postMat), x, POST_H * 0.5, zR, root, true, 2);

  const arm = new THREE.Mesh(new THREE.BoxGeometry(ARM_D, ARM_T, VEIL_W), postMat);
  plant(arm, x, POST_H - ARM_T * 0.5, z, root, true, 2);

  const cloth = new THREE.Mesh(
    new THREE.BoxGeometry(VEIL_T, VEIL_H, VEIL_W),
    violetCloth(VIOLET_OP),
  );
  plant(cloth, x, VEIL_Y, z, root, false, 3);

  sizes.veilCount = 1;
  sizes.postCount = 2;
  root.userData.veilCount = 1;
  root.userData.postCount = 2;

  if (!lining) return;

  const liningH = VEIL_H * LINING_SCALE_H;
  const liningW = VEIL_W * LINING_SCALE_W;
  const extra = new THREE.Mesh(
    new THREE.BoxGeometry(VEIL_T, liningH, liningW),
    cyanCloth(CYAN_OP),
  );
  plant(extra, x + LINING_OX, VEIL_Y, z, root, false, 3);

  sizes.liningCount = 1;
  root.userData.liningCount = 1;
}

export { SIZES as HUB_VEIL_SIZES };
