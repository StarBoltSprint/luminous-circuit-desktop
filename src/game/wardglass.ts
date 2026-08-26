/** Crystal crowns, gold orbits, and parent-kiss glass on every ward hall.
 * Not Hub lattice. Not Star Core corona. Not foundry lamps. Living crystal, never chrome.
 * Parent hooks with:
 *   laterOn(() => { try { growWardGlass(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos. No vibrate.
 */
import * as THREE from "three";
import { DISTRICTS } from "./lore";

function hash(i: number, s: number) {
  const n = Math.sin(i * 127.1 + s * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

function glassMat(hex: number, op: number) {
  return new THREE.MeshBasicMaterial({
    color: hex,
    transparent: true,
    opacity: op,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
}

function crystalMat(hex: number, emit: number) {
  return new THREE.MeshPhysicalMaterial({
    color: hex,
    roughness: 0.06,
    metalness: 0.12,
    emissive: emit,
    emissiveIntensity: 0.62,
    iridescence: 1,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [50, 580],
    clearcoat: 0.94,
    clearcoatRoughness: 0.06,
    sheen: 0.7,
    sheenColor: new THREE.Color(0x7ef0ff),
    envMapIntensity: 1.8,
  });
}

function goldMat() {
  return new THREE.MeshPhysicalMaterial({
    color: 0xe8c46a,
    roughness: 0.14,
    metalness: 0.72,
    emissive: 0xc4a040,
    emissiveIntensity: 0.5,
    iridescence: 0.48,
    clearcoat: 0.78,
    clearcoatRoughness: 0.12,
  });
}

function hue(kind: (typeof DISTRICTS)[number]["kind"]): { glass: number; crystal: number; emit: number } {
  switch (kind) {
    case "foundry":
      return { glass: 0xffb040, crystal: 0xe8c46a, emit: 0xc47820 };
    case "canal":
      return { glass: 0x2ee6ff, crystal: 0x7ef0ff, emit: 0x1aa8c0 };
    case "grove":
      return { glass: 0xe8c070, crystal: 0xd4b060, emit: 0x8a7020 };
    case "beacon":
    case "overlook":
      return { glass: 0x7ef0ff, crystal: 0xc8f8ff, emit: 0x3ad0e8 };
    case "archive":
      return { glass: 0xe8c46a, crystal: 0xf0d078, emit: 0xc4a040 };
    case "gate":
      return { glass: 0xb48cff, crystal: 0xc8a0ff, emit: 0x6a48a8 };
    default:
      return { glass: 0x7ef0ff, crystal: 0xa8e8f0, emit: 0x2aa0b8 };
  }
}

/**
 * Ward glass + crystal crowns at each DISTRICTS hall so dens read as living crystal
 * under the parent Star Core, not stretched boxes.
 */
export function growWardGlass(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "ward-glass";
  group.add(root);

  const octa = new THREE.OctahedronGeometry(1, 0);
  const torus = new THREE.TorusGeometry(1, 0.045, 6, coarse ? 18 : 28);
  const shaft = new THREE.CylinderGeometry(1, 1.08, 1, coarse ? 6 : 8, 1, true);
  const band = new THREE.TorusGeometry(1, 0.03, 5, coarse ? 16 : 24);
  const gold = goldMat();

  DISTRICTS.forEach((D, di) => {
    const pal = hue(D.kind);
    const tall =
      D.kind === "beacon" ? 124 : D.kind === "overlook" ? 108 : D.kind === "archive" ? 100 : D.kind === "canal" ? 28 : 72;
    const fat = D.kind === "canal" ? 22 : D.kind === "terrace" ? 40 : D.kind === "beacon" ? 14 : 28;
    const zg = new THREE.Group();
    zg.position.set(D.x, 0, D.z);
    zg.name = `ward-glass-${D.kind}`;

    const crown = new THREE.Mesh(octa, crystalMat(pal.crystal, pal.emit));
    crown.scale.set(fat * 0.22, tall * 0.18, fat * 0.22);
    crown.position.y = 10 + tall * 0.55;
    crown.rotation.y = hash(di, 3) * Math.PI;
    crown.castShadow = true;
    zg.add(crown);

    const orbit = new THREE.Mesh(torus, gold);
    orbit.scale.set(fat * 0.48, fat * 0.48, fat * 0.48);
    orbit.rotation.x = Math.PI / 2;
    orbit.position.y = 8 + tall * 0.38;
    zg.add(orbit);

    if (!coarse) {
      const orbit2 = new THREE.Mesh(torus, gold);
      orbit2.scale.set(fat * 0.32, fat * 0.32, fat * 0.32);
      orbit2.rotation.set(0.7, 0.2, 0.4);
      orbit2.position.y = 8 + tall * 0.48;
      zg.add(orbit2);
    }

    const glass = new THREE.Mesh(shaft, glassMat(pal.glass, 0.14));
    glass.scale.set(fat * 0.36, tall * 0.62, fat * 0.36);
    glass.position.y = 8 + tall * 0.28;
    glass.renderOrder = 2;
    zg.add(glass);

    const lip = new THREE.Mesh(band, glassMat(pal.glass, 0.28));
    lip.scale.set(fat * 0.55, fat * 0.55, fat * 0.55);
    lip.rotation.x = Math.PI / 2;
    lip.position.y = 8 + tall * 0.22;
    zg.add(lip);

    const nWin = coarse ? 4 : 8;
    for (let k = 0; k < nWin; k++) {
      const a = (k / nWin) * Math.PI * 2 + hash(di, k) * 0.2;
      const shard = new THREE.Mesh(octa, crystalMat(pal.crystal, pal.emit));
      const rr = fat * 0.62;
      shard.position.set(Math.cos(a) * rr, 6 + hash(di + k, 9) * tall * 0.35, Math.sin(a) * rr);
      shard.scale.set(1.6, 4.2 + hash(di, k + 4) * 3.2, 1.6);
      shard.rotation.y = a;
      shard.castShadow = false;
      zg.add(shard);
    }

    root.add(zg);
  });
}
