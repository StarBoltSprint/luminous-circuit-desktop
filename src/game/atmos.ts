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
): THREE.Mesh {
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
  return mesh;
}

function lightningShellMat() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: true,
    fog: false,
    toneMapped: false,
    side: THREE.DoubleSide,
    vertexShader: `
      varying vec3 vN;
      void main() {
        vN = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec3 vN;
      void main() {
        vec3 n = normalize(vN);
        float t = uTime;
        float g1 = abs(n.x * 0.62 + n.y * 0.28 + n.z * 0.72);
        float g2 = abs(n.x * -0.48 + n.y * 0.82 + n.z * 0.18);
        float g3 = abs(n.x * 0.22 + n.y * -0.55 + n.z * 0.8);
        float j1 = abs(g1 - 0.12 * sin(g2 * 18.0 + t * 1.4));
        float j2 = abs(g2 - 0.1 * sin(g3 * 22.0 - t * 0.9));
        float j3 = abs(g3 - 0.14 * sin(g1 * 14.0 + t * 2.2));
        float bolt = pow(1.0 - smoothstep(0.0, 0.055, j1), 2.4)
          + pow(1.0 - smoothstep(0.0, 0.04, j2), 2.8)
          + pow(1.0 - smoothstep(0.0, 0.05, j3), 2.2);
        float sheet = pow(max(0.0, n.y), 2.0) * 0.06;
        float pulse = 0.55 + 0.45 * sin(t * 0.7);
        vec3 cyan = vec3(0.49, 0.94, 1.0);
        vec3 gold = vec3(0.91, 0.77, 0.42);
        vec3 col = mix(cyan, gold, smoothstep(0.7, 1.6, bolt) * 0.35);
        float a = clamp(bolt * 0.42 + sheet, 0.0, 1.0) * pulse;
        gl_FragColor = vec4(col, a);
      }
    `,
  });
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

  const globeR = coarse ? 640 : 980;
  const globeSpin = new THREE.Group();
  globeSpin.name = "star-core-spin";
  globeSpin.rotation.z = 0.18;
  globeSpin.rotation.x = 0.08;
  core.add(globeSpin);

  const spark = new THREE.Mesh(
    new THREE.SphereGeometry(globeR * 0.22, 20, 16),
    addMat(0xe8fff8, 0.42),
  );
  spark.name = "star-core-spark";
  spark.renderOrder = -4;
  spark.castShadow = false;
  spark.receiveShadow = false;
  globeSpin.add(spark);

  const bloom = new THREE.Mesh(
    new THREE.SphereGeometry(globeR * 0.55, 20, 16),
    addMat(0x2ee6ff, 0.1),
  );
  bloom.name = "star-core-bloom";
  bloom.renderOrder = -9;
  bloom.castShadow = false;
  bloom.receiveShadow = false;
  globeSpin.add(bloom);

  const haloMap = coreHaloTexture();
  if (haloMap) {
    const halo = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: haloMap,
        color: 0xffffff,
        transparent: true,
        opacity: 0.28,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
        fog: false,
        toneMapped: false,
      }),
    );
    halo.name = "star-core-halo";
    const haloS = globeR * 2.15;
    halo.scale.set(haloS, haloS, 1);
    halo.renderOrder = -10;
    halo.frustumCulled = false;
    core.add(halo);
  }

  const globeMat = new THREE.MeshPhysicalMaterial({
    color: 0x163848,
    roughness: 0.14,
    metalness: 0.12,
    emissive: 0x1aa8c8,
    emissiveIntensity: 0.48,
    iridescence: 1,
    iridescenceIOR: 1.32,
    iridescenceThicknessRange: [40, 620],
    clearcoat: 0.96,
    clearcoatRoughness: 0.06,
    sheen: 0.62,
    sheenColor: new THREE.Color(0x7ef0ff),
    envMapIntensity: 1.4,
    fog: false,
    toneMapped: false,
  });
  const segs = coarse ? 32 : 48;
  const globe = new THREE.Mesh(
    new THREE.SphereGeometry(globeR, segs, Math.max(20, segs - 8)),
    globeMat,
  );
  globe.name = "star-core-globe";
  globe.renderOrder = -5;
  globe.frustumCulled = false;
  globe.castShadow = false;
  globe.receiveShadow = false;
  globeSpin.add(globe);

  const boltMat = lightningShellMat();
  const bolts = new THREE.Mesh(
    new THREE.SphereGeometry(globeR * 1.04, segs, Math.max(20, segs - 8)),
    boltMat,
  );
  bolts.name = "star-core-veins";
  bolts.renderOrder = -3;
  bolts.frustumCulled = false;
  bolts.castShadow = false;
  bolts.receiveShadow = false;
  globeSpin.add(bolts);

  const ringMat = goldRingMat();
  const ringRadii = coarse
    ? [globeR * 1.12, globeR * 1.32]
    : [globeR * 1.14, globeR * 1.34, globeR * 1.56];
  const ringTube = coarse ? 7 : 11;
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
  root.add(core);

  const bandSegs = coarse ? 40 : 72;
  const skyRivers: THREE.Mesh[] = [
    river(root, 3920, 22, 0xc4a060, 0.048, 1.49, 0.05, 310, bandSegs),
    river(root, 3480, 32, 0x3aa8c0, 0.062, 1.22, 0.2, 640, bandSegs),
  ];
  if (!coarse) {
    skyRivers.push(river(root, 3060, 18, 0x6a48a8, 0.05, 1.08, -0.34, 980, bandSegs));
    skyRivers.push(river(root, 4180, 14, 0xe0c070, 0.032, 1.52, -0.08, 180, bandSegs));
  }
  const riverBase = skyRivers.map((m) => (m.material as THREE.MeshBasicMaterial).opacity);

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
      globeSpin.rotation.y = t * 0.08;
      boltMat.uniforms.uTime.value = t;
      globeMat.emissiveIntensity = 0.55 + Math.sin(t * 0.7) * 0.12;
      for (let i = 0; i < ringMeshes.length; i++) {
        const o = orbits[i]!;
        const ring = ringMeshes[i]!;
        ring.rotation.y = o.ry + t * o.spin;
        ring.rotation.z = o.rz + Math.sin(t * 0.12 + i) * 0.04;
      }
      for (let i = 0; i < skyRivers.length; i++) {
        const mat = skyRivers[i]!.material as THREE.MeshBasicMaterial;
        mat.opacity = (riverBase[i] ?? 0.05) * (0.72 + 0.28 * Math.sin(t * 0.7 + i * 0.9));
      }
    },
  };
}
