/** Sky of the living crystal world. Dark violet-navy. Parent Star Core on the horizon. Not a throne. */
import * as THREE from "three";

/** Parent Star Core — west, low, far. Overlook aims here. Shared with corona.ts / vault.ts. */
export const STAR_CORE = { x: -4050, y: 540, z: 195 } as const;
export const SKY_R = 5200;

function hash(i: number, s: number) {
  const n = Math.sin(i * 127.1 + s * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

function addMat(hex: number, opacity: number) {
  return new THREE.MeshBasicMaterial({
    color: hex,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: true,
    fog: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
}

function paintSky(geo: THREE.SphereGeometry, radius: number, coreX: number, coreY: number, coreZ: number) {
  const pos = geo.getAttribute("position") as THREE.BufferAttribute;
  const cols = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  const zenith = new THREE.Color(0x04030c);
  const mid = new THREE.Color(0x0a0918);
  const rim = new THREE.Color(0x1a142a);
  const nadir = new THREE.Color(0x03020a);
  const warm = new THREE.Color(0x4a3018);
  const gold = new THREE.Color(0x6a4a22);
  const cool = new THREE.Color(0x0a1620);
  const milk = new THREE.Color(0x2c2440);
  const coreLen = Math.hypot(coreX, coreZ) || 1;
  const core3 = Math.hypot(coreX, coreY, coreZ) || 1;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const ny = y / radius;
    if (ny > 0.22) c.copy(mid).lerp(zenith, (ny - 0.22) / 0.78);
    else if (ny > -0.02) c.copy(rim).lerp(mid, (ny + 0.02) / 0.24);
    else c.copy(nadir).lerp(rim, Math.max(0, (ny + 1) / 0.98));
    const toward = Math.max(0, -(x * coreX + z * coreZ) / (radius * coreLen));
    const hz = Math.max(0, 1 - Math.abs(ny) * 2.2);
    c.lerp(warm, toward * hz * 0.34);
    c.lerp(gold, toward * toward * hz * 0.22);
    const away = Math.max(0, (x * coreX + z * coreZ) / (radius * coreLen));
    c.lerp(cool, away * hz * 0.16);
    const nx = x / radius;
    const nz = z / radius;
    const band = Math.abs(nx * 0.18 + ny * 0.78 + nz * 0.6);
    const bandW = Math.max(0, 1 - band * 3.8);
    c.lerp(milk, bandW * (0.1 + toward * 0.08));
    const n = hash(i, 1);
    c.r = Math.min(1, c.r * (0.9 + n * 0.16));
    c.g = Math.min(1, c.g * (0.92 + hash(i, 4) * 0.12));
    c.b = Math.min(1, c.b * (0.94 + hash(i, 7) * 0.1));
    const coreDot = (x * coreX + y * coreY + z * coreZ) / ((radius || 1) * core3);
    if (coreDot > 0.88) {
      const k = (coreDot - 0.88) / 0.12;
      c.lerp(gold, k * k * 0.55);
    }
    cols[i * 3] = c.r;
    cols[i * 3 + 1] = c.g;
    cols[i * 3 + 2] = c.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(cols, 3));
}

function river(
  root: THREE.Group,
  radius: number,
  tube: number,
  hex: number,
  opacity: number,
  rx: number,
  rz: number,
  y: number,
  segs: number,
) {
  const mesh = new THREE.Mesh(
    new THREE.TorusGeometry(radius, tube, 6, segs),
    addMat(hex, opacity),
  );
  mesh.rotation.x = rx;
  mesh.rotation.z = rz;
  mesh.position.y = y;
  mesh.frustumCulled = false;
  mesh.renderOrder = -12;
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  root.add(mesh);
}

function goldRingMat() {
  return new THREE.MeshPhysicalMaterial({
    color: 0xe8c46a,
    emissive: 0xc4a040,
    emissiveIntensity: 0.45,
    roughness: 0.22,
    metalness: 0.78,
    iridescence: 0.4,
    iridescenceIOR: 1.26,
    clearcoat: 0.55,
    clearcoatRoughness: 0.18,
    fog: false,
    toneMapped: false,
  });
}

function hallCoreTexture() {
  const url = `${import.meta.env.BASE_URL}assets/star-core.jpg`;
  const tex = new THREE.TextureLoader().load(url);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/**
 * Procedural atmosphere. Parent hooks with:
 *   laterOn(() => { try { growAtmos(group, coarse); } catch { } });
 * Dispose is world group.clear(). No tick. No photos.
 */
export function growAtmos(group: THREE.Group, coarse: boolean): void {
  const root = new THREE.Group();
  root.name = "atmos";
  group.add(root);

  const { x: CORE_X, y: CORE_Y, z: CORE_Z } = STAR_CORE;
  const SKY = SKY_R;

  const skySeg = coarse ? 24 : 48;
  const skyRing = coarse ? 16 : 28;
  const skyGeo = new THREE.SphereGeometry(SKY, skySeg, skyRing);
  paintSky(skyGeo, SKY, CORE_X, CORE_Y, CORE_Z);
  const sky = new THREE.Mesh(
    skyGeo,
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      vertexColors: true,
      side: THREE.BackSide,
      fog: false,
      depthWrite: false,
      depthTest: false,
      toneMapped: false,
    }),
  );
  sky.frustumCulled = false;
  sky.renderOrder = -20;
  sky.castShadow = false;
  sky.receiveShadow = false;
  root.add(sky);

  const core = new THREE.Group();
  core.name = "star-core";
  core.position.set(CORE_X, CORE_Y, CORE_Z);
  core.frustumCulled = false;
  core.renderOrder = -8;

  const spark = new THREE.Mesh(
    new THREE.SphereGeometry(coarse ? 28 : 38, 16, 12),
    addMat(0x7ef0ff, 0.22),
  );
  spark.name = "star-core-spark";
  spark.renderOrder = -6;
  spark.castShadow = false;
  spark.receiveShadow = false;
  core.add(spark);

  const bloom = new THREE.Mesh(
    new THREE.SphereGeometry(coarse ? 70 : 96, 16, 12),
    addMat(0x2ee6ff, 0.08),
  );
  bloom.name = "star-core-bloom";
  bloom.renderOrder = -8;
  bloom.castShadow = false;
  bloom.receiveShadow = false;
  core.add(bloom);

  const art = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: hallCoreTexture(),
      color: 0xffffff,
      transparent: true,
      opacity: 0.94,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: true,
      fog: false,
      toneMapped: false,
    }),
  );
  art.name = "star-core-art";
  const artS = coarse ? 260 : 420;
  art.scale.set(artS, artS, 1);
  art.renderOrder = -5;
  art.frustumCulled = false;
  core.add(art);

  const ringMat = goldRingMat();
  const ringR = coarse ? 52 : 72;
  const ringTube = coarse ? 1.4 : 2.1;
  const ringSeg = coarse ? 48 : 80;
  const orbits = [
    { rx: 1.12, ry: 0.18, rz: 0.31 },
    { rx: 0.42, ry: 1.05, rz: -0.22 },
    { rx: 1.48, ry: -0.4, rz: 0.08 },
  ];
  const nRings = coarse ? 2 : 3;
  for (let i = 0; i < nRings; i++) {
    const o = orbits[i]!;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(ringR, ringTube, 8, ringSeg), ringMat);
    ring.rotation.set(o.rx, o.ry, o.rz);
    ring.castShadow = false;
    ring.receiveShadow = false;
    ring.renderOrder = -6;
    ring.frustumCulled = false;
    ring.name = `star-core-orbit-${i}`;
    core.add(ring);
  }
  root.add(core);

  const bandSegs = coarse ? 40 : 72;
  river(root, 3920, 22, 0xc4a060, 0.048, 1.49, 0.05, 310, bandSegs);
  river(root, 3480, 32, 0x3aa8c0, 0.062, 1.22, 0.2, 640, bandSegs);
  if (!coarse) {
    river(root, 3060, 18, 0x6a48a8, 0.05, 1.08, -0.34, 980, bandSegs);
    river(root, 4180, 14, 0xe0c070, 0.032, 1.52, -0.08, 180, bandSegs);
  }

  const starN = coarse ? 70 : 180;
  const starMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    vertexColors: true,
    transparent: true,
    opacity: 0.46,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    fog: false,
    toneMapped: false,
  });
  const stars = new THREE.InstancedMesh(new THREE.OctahedronGeometry(1, 0), starMat, starN);
  const dummy = new THREE.Object3D();
  const tint = new THREE.Color();
  const pal = [0xc8d8f0, 0x9ecad8, 0xc4a8e0, 0xe8d4a8, 0xffffff];
  const coreLen = Math.hypot(CORE_X, CORE_Y, CORE_Z);
  let placed = 0;
  for (let i = 0; placed < starN && i < starN * 5; i++) {
    const theta = hash(i, 3) * Math.PI * 2;
    const phi = Math.acos(0.04 + hash(i, 9) * 0.82);
    const r = SKY * (0.7 + hash(i, 13) * 0.1);
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.cos(phi);
    const z = r * Math.sin(phi) * Math.sin(theta);
    const dot = (x * CORE_X + y * CORE_Y + z * CORE_Z) / ((r || 1) * coreLen);
    if (dot > 0.94) continue;
    dummy.position.set(x, y, z);
    dummy.rotation.set(hash(i, 17) * 2, theta, phi);
    const bright = hash(i, 29) > 0.86;
    const s = bright ? 11 + hash(i, 21) * 10 : 3.2 + hash(i, 21) * 6;
    dummy.scale.set(s, s * (0.75 + hash(i, 5) * 0.8), s);
    dummy.updateMatrix();
    stars.setMatrixAt(placed, dummy.matrix);
    tint.setHex(pal[i % pal.length]!);
    if (bright) tint.multiplyScalar(1.35);
    stars.setColorAt(placed, tint);
    placed += 1;
  }
  stars.count = placed;
  stars.instanceMatrix.needsUpdate = true;
  if (stars.instanceColor) stars.instanceColor.needsUpdate = true;
  stars.frustumCulled = false;
  stars.renderOrder = -11;
  stars.castShadow = false;
  stars.receiveShadow = false;
  root.add(stars);
}
