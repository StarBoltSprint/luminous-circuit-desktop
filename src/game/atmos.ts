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
  const cyanH = new THREE.Color(0x16384c);
  const coreCyan = new THREE.Color(0x2ee6ff);
  const coreWhite = new THREE.Color(0xe8fff8);
  const coreGold = new THREE.Color(0xc4a060);
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
    c.lerp(warm, toward * hz * 0.16);
    c.lerp(gold, toward * toward * hz * 0.08);
    c.lerp(cyanH, toward * hz * 0.32);
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
    if (coreDot > 0.84) {
      const k = (coreDot - 0.84) / 0.16;
      c.lerp(coreCyan, k * k * 0.42);
      c.lerp(coreWhite, k * k * k * 0.22);
      c.lerp(coreGold, k * k * 0.1);
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
    color: 0xf0d078,
    emissive: 0xe8c46a,
    emissiveIntensity: 0.85,
    roughness: 0.14,
    metalness: 0.82,
    iridescence: 0.55,
    iridescenceIOR: 1.26,
    clearcoat: 0.72,
    clearcoatRoughness: 0.12,
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

function radialAlpha() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  if (!g) return null;
  const grd = g.createRadialGradient(128, 128, 36, 128, 128, 124);
  grd.addColorStop(0, "rgba(255,255,255,1)");
  grd.addColorStop(0.56, "rgba(255,255,255,1)");
  grd.addColorStop(0.66, "rgba(255,255,255,0.4)");
  grd.addColorStop(0.76, "rgba(255,255,255,0)");
  g.fillStyle = grd;
  g.fillRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c);
  t.needsUpdate = true;
  return t;
}

function coreHaloTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const g = c.getContext("2d");
  if (!g) return null;
  const grd = g.createRadialGradient(256, 256, 10, 256, 256, 248);
  grd.addColorStop(0, "rgba(255,255,255,0.95)");
  grd.addColorStop(0.12, "rgba(126,240,255,0.58)");
  grd.addColorStop(0.32, "rgba(46,230,255,0.22)");
  grd.addColorStop(0.5, "rgba(232,197,106,0.12)");
  grd.addColorStop(0.72, "rgba(46,230,255,0)");
  g.fillStyle = grd;
  g.fillRect(0, 0, 512, 512);
  const t = new THREE.CanvasTexture(c);
  t.needsUpdate = true;
  return t;
}

/**
 * Procedural atmosphere. Parent Star Core is the Hall cyan-lightning globe.
 * Parent hooks with:
 *   laterOn(() => { try { atmos = growAtmos(group, coarse); } catch { } });
 *   // in world.tick(t): try { atmos?.tick(t); } catch { }
 * Dispose is world group.clear(). No photos.
 */
export function growAtmos(group: THREE.Group, coarse: boolean): { tick: (t: number) => void } {
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
    new THREE.SphereGeometry(coarse ? 36 : 56, 20, 16),
    addMat(0xe8fff8, 0.34),
  );
  spark.name = "star-core-spark";
  spark.renderOrder = -4;
  spark.castShadow = false;
  spark.receiveShadow = false;
  core.add(spark);

  const bloom = new THREE.Mesh(
    new THREE.SphereGeometry(coarse ? 120 : 180, 20, 16),
    addMat(0x2ee6ff, 0.08),
  );
  bloom.name = "star-core-bloom";
  bloom.renderOrder = -9;
  bloom.castShadow = false;
  bloom.receiveShadow = false;
  core.add(bloom);

  const haloMap = coreHaloTexture();
  if (haloMap) {
    const halo = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: haloMap,
        color: 0xffffff,
        transparent: true,
        opacity: 0.32,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
        fog: false,
        toneMapped: false,
      }),
    );
    halo.name = "star-core-halo";
    const haloS = coarse ? 780 : 1080;
    halo.scale.set(haloS, haloS, 1);
    halo.renderOrder = -10;
    halo.frustumCulled = false;
    core.add(halo);
  }

  const artR = coarse ? 400 : 600;
  const artMat = new THREE.MeshBasicMaterial({
    map: hallCoreTexture(),
    alphaMap: radialAlpha() ?? undefined,
    color: 0xffffff,
    transparent: true,
    opacity: 1,
    depthWrite: false,
    depthTest: true,
    fog: false,
    toneMapped: false,
    side: THREE.DoubleSide,
  });
  const art = new THREE.Mesh(new THREE.CircleGeometry(artR, coarse ? 48 : 72), artMat);
  art.name = "star-core-art";
  art.renderOrder = -5;
  art.frustumCulled = false;
  art.castShadow = false;
  art.receiveShadow = false;
  core.add(art);

  const ringMat = goldRingMat();
  const ringRadii = coarse ? [300, 410] : [360, 470, 580];
  const ringTube = coarse ? 4.2 : 6.2;
  const ringSeg = coarse ? 64 : 96;
  const orbits = [
    { rx: 1.12, ry: 0.18, rz: 0.31, spin: 0.045 },
    { rx: 0.42, ry: 1.05, rz: -0.22, spin: -0.032 },
    { rx: 1.48, ry: -0.4, rz: 0.08, spin: 0.022 },
  ];
  const ringMeshes: THREE.Mesh[] = [];
  for (let i = 0; i < ringRadii.length; i++) {
    const o = orbits[i]!;
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(ringRadii[i], ringTube * (1 - i * 0.12), 8, ringSeg),
      ringMat,
    );
    ring.rotation.set(o.rx, o.ry, o.rz);
    ring.castShadow = false;
    ring.receiveShadow = false;
    ring.renderOrder = -6;
    ring.frustumCulled = false;
    ring.name = `star-core-orbit-${i}`;
    core.add(ring);
    ringMeshes.push(ring);
  }

  const boltN = coarse ? 3 : 6;
  const boltMat = addMat(0x7ef0ff, 0.16);
  const boltMeshes: THREE.Mesh[] = [];
  for (let i = 0; i < boltN; i++) {
    const h = (coarse ? 220 : 340) * (0.7 + hash(i, 11) * 0.6);
    const bolt = new THREE.Mesh(new THREE.PlaneGeometry(coarse ? 10 : 16, h), boltMat);
    bolt.rotation.set(hash(i, 3) * 1.4, hash(i, 5) * Math.PI * 2, hash(i, 7) * 1.2);
    bolt.position.set(
      (hash(i, 13) - 0.5) * 40,
      (hash(i, 17) - 0.5) * 40,
      (hash(i, 19) - 0.5) * 40,
    );
    bolt.castShadow = false;
    bolt.receiveShadow = false;
    bolt.renderOrder = -4;
    bolt.frustumCulled = false;
    bolt.name = `star-core-bolt-${i}`;
    core.add(bolt);
    boltMeshes.push(bolt);
  }
  root.add(core);
  core.updateMatrixWorld(true);
  art.lookAt(0, 190, 0);

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

  if (coarse) return { tick() {} };

  return {
    tick(t: number) {
      const breath = 1 + Math.sin(t * 0.7) * 0.07;
      spark.scale.setScalar(breath);
      bloom.scale.setScalar(1 + Math.sin(t * 0.55) * 0.09);
      artMat.opacity = 0.92 + Math.sin(t * 0.6) * 0.05;
      for (let i = 0; i < ringMeshes.length; i++) {
        const o = orbits[i]!;
        const ring = ringMeshes[i]!;
        ring.rotation.y = o.ry + t * o.spin;
        ring.rotation.z = o.rz + Math.sin(t * 0.12 + i) * 0.04;
      }
      for (let i = 0; i < boltMeshes.length; i++) {
        const bolt = boltMeshes[i]!;
        bolt.rotation.z = t * (0.08 + i * 0.02);
        (bolt.material as THREE.MeshBasicMaterial).opacity = 0.1 + (Math.sin(t * 1.3 + i) + 1) * 0.08;
      }
    },
  };
}
