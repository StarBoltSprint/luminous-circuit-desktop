/** Sky of the living crystal world. Dark violet-navy. Parent Star Core on the horizon. Not a throne. */
import * as THREE from "three";

/** Parent Star Core — west, low, far. Overlook aims here. Shared with corona.ts / vault.ts. */
export const STAR_CORE = { x: -4050, y: 540, z: 195 } as const;
export const SKY_R = 5200;
export const GLOBE_R = 980;
export const GLOBE_R_COARSE = 640;

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
    side: THREE.FrontSide,
    vertexShader: `
      varying vec3 vN;
      varying vec3 vP;
      void main() {
        vN = normalize(normalMatrix * normal);
        vP = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec3 vN;
      varying vec3 vP;
      float hash31(vec3 p) {
        p = fract(p * 0.1031);
        p += dot(p, p.yzx + 33.33);
        return fract((p.x + p.y) * p.z);
      }
      float vnoise(vec3 x) {
        vec3 i = floor(x);
        vec3 f = fract(x);
        f = f * f * (3.0 - 2.0 * f);
        float n000 = hash31(i);
        float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
        float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
        float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
        float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
        float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
        float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
        float n111 = hash31(i + vec3(1.0, 1.0, 1.0));
        float nx00 = mix(n000, n100, f.x);
        float nx10 = mix(n010, n110, f.x);
        float nx01 = mix(n001, n101, f.x);
        float nx11 = mix(n011, n111, f.x);
        return mix(mix(nx00, nx10, f.y), mix(nx01, nx11, f.y), f.z);
      }
      float fbm(vec3 p) {
        float s = 0.0;
        float a = 0.5;
        for (int i = 0; i < 4; i++) {
          s += a * vnoise(p);
          p = p * 2.11 + vec3(1.7, 9.2, 3.1);
          a *= 0.52;
        }
        return s;
      }
      float ridge(float n) {
        return 1.0 - abs(n * 2.0 - 1.0);
      }
      float cracks(vec3 p, float t) {
        vec3 q = p * 3.6;
        q += (fbm(q + t * 0.07) - 0.5) * 1.15;
        float n = fbm(q * 1.65);
        float fat = pow(max(0.0, (ridge(n) - 0.28) / 0.72), 2.1);
        vec3 q2 = p * 8.4 + 2.7;
        q2 += (fbm(q2 - t * 0.11) - 0.5) * 0.7;
        float n2 = fbm(q2);
        float fine = pow(max(0.0, (ridge(n2) - 0.46) / 0.54), 3.4);
        return fat * 1.45 + fine * 0.7;
      }
      float hero(vec3 p, vec3 axis, float seed, float t) {
        vec3 w = p + (fbm(p * 5.4 + seed + t * 0.05) - 0.5) * 0.72;
        float d = abs(dot(normalize(w), axis));
        return pow(1.0 - smoothstep(0.0, 0.05, d), 1.65);
      }
      void main() {
        vec3 p = normalize(vP);
        vec3 n = normalize(vN);
        float t = uTime;
        float bolt = cracks(p, t);
        bolt += hero(p, vec3(0.22, 0.81, 0.54), 1.7, t) * 0.92;
        bolt += hero(p, vec3(-0.66, 0.19, 0.73), 4.1, t) * 0.84;
        bolt += hero(p, vec3(0.58, -0.62, 0.53), 8.3, t) * 0.78;
        bolt += hero(p, vec3(-0.31, 0.48, -0.82), 12.6, t) * 0.7;
        bolt += hero(p, vec3(0.84, 0.12, -0.53), 19.2, t) * 0.58;
        bolt += hero(p, vec3(-0.14, 0.93, -0.34), 24.8, t) * 0.62;
        float crawl = fbm(p * 6.0 + vec3(t * 0.11, t * 0.07, -t * 0.05));
        float snap = 0.74 + 0.26 * smoothstep(-0.12, 1.0, sin(t * 5.8 + crawl * 22.0));
        bolt *= snap;
        float fres = pow(1.0 - abs(n.z), 2.05);
        float sheet = fres * 0.32 + pow(max(0.0, p.y), 2.2) * 0.06;
        vec3 deep = vec3(0.12, 0.78, 0.98);
        vec3 cyan = vec3(0.494, 0.941, 1.0);
        vec3 white = vec3(0.94, 1.0, 0.98);
        vec3 gold = vec3(0.93, 0.78, 0.42);
        vec3 col = mix(deep, cyan, clamp(bolt * 0.85, 0.0, 1.0));
        col = mix(col, white, smoothstep(0.62, 1.48, bolt));
        col = mix(col, gold, smoothstep(1.05, 1.95, bolt) * 0.34);
        col = mix(col, cyan, fres * 0.32);
        float a = clamp(bolt * 1.12 + sheet, 0.0, 1.0);
        gl_FragColor = vec4(col, a);
      }
    `,
  });
}

function rimShellMat() {
  return new THREE.ShaderMaterial({
    uniforms: {},
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: true,
    fog: false,
    toneMapped: false,
    side: THREE.FrontSide,
    vertexShader: `
      varying vec3 vN;
      void main() {
        vN = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vN;
      void main() {
        float fres = pow(1.0 - abs(normalize(vN).z), 2.6);
        vec3 cyan = vec3(0.494, 0.941, 1.0);
        gl_FragColor = vec4(cyan, clamp(fres * 0.28, 0.0, 0.38));
      }
    `,
  });
}

function goldRingMat() {
  return new THREE.MeshPhysicalMaterial({
    color: 0xf0d08a,
    emissive: 0xe8c46a,
    emissiveIntensity: 0.42,
    roughness: 0.22,
    metalness: 0.38,
    iridescence: 0.46,
    iridescenceIOR: 1.24,
    iridescenceThicknessRange: [80, 420],
    clearcoat: 0.58,
    clearcoatRoughness: 0.16,
    sheen: 0.42,
    sheenColor: new THREE.Color(0xffe6a8),
    fog: false,
    toneMapped: true,
  });
}

function walkBolt(
  radius: number,
  seed: number,
  steps: number,
  stepLen: number,
  jitter: number,
  origin?: THREE.Vector3,
  initDir?: THREE.Vector3,
): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  const p = origin
    ? origin.clone().normalize()
    : new THREE.Vector3(hash(seed, 1) * 2 - 1, hash(seed, 2) * 2 - 1, hash(seed, 3) * 2 - 1).normalize();
  const tmp = new THREE.Vector3();
  const dir = initDir
    ? initDir.clone()
    : new THREE.Vector3(hash(seed, 4) - 0.5, hash(seed, 5) - 0.5, hash(seed, 6) - 0.5);
  dir.addScaledVector(p, -dir.dot(p));
  if (dir.lengthSq() < 1e-6) dir.set(1, 0, 0).addScaledVector(p, -p.x);
  dir.normalize();
  for (let i = 0; i < steps; i++) {
    pts.push(p.clone().multiplyScalar(radius));
    tmp.set(hash(seed, 20 + i) - 0.5, hash(seed, 40 + i) - 0.5, hash(seed, 60 + i) - 0.5);
    tmp.addScaledVector(p, -tmp.dot(p));
    if (tmp.lengthSq() > 1e-8) tmp.normalize();
    dir.addScaledVector(tmp, jitter).addScaledVector(p, -dir.dot(p));
    if (dir.lengthSq() < 1e-8) break;
    dir.normalize();
    p.addScaledVector(dir, stepLen).normalize();
  }
  return pts;
}

function plantCrackBolts(spin: THREE.Group, radius: number, coarse: boolean) {
  const nMain = coarse ? 5 : 11;
  const nBranch = coarse ? 2 : 7;
  const pathSegs = coarse ? 16 : 32;
  const tubeSegs = coarse ? 4 : 6;
  const matCyan = addMat(0x7ef0ff, coarse ? 0.32 : 0.42);
  const matDeep = addMat(0x2ee6ff, coarse ? 0.24 : 0.32);
  const matCore = addMat(0xe8fff8, 0.34);
  const matGold = addMat(0xe8c46a, 0.18);
  for (let i = 0; i < nMain; i++) {
    const pts = walkBolt(radius * 1.035, i * 19 + 5, pathSegs, 0.11, 0.95);
    if (pts.length < 4) continue;
    const curve = new THREE.CatmullRomCurve3(pts);
    const thick = radius * (0.012 + (i % 4) * 0.0035);
    const mesh = new THREE.Mesh(
      new THREE.TubeGeometry(curve, pathSegs, thick, tubeSegs, false),
      i % 5 === 0 ? matGold : i % 2 ? matCyan : matDeep,
    );
    mesh.name = `star-core-crack-${i}`;
    mesh.renderOrder = -2;
    mesh.frustumCulled = false;
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    spin.add(mesh);
    if (!coarse) {
      const inner = new THREE.Mesh(
        new THREE.TubeGeometry(curve, pathSegs, thick * 0.38, 4, false),
        matCore,
      );
      inner.name = `star-core-crack-core-${i}`;
      inner.renderOrder = -1;
      inner.frustumCulled = false;
      inner.castShadow = false;
      inner.receiveShadow = false;
      spin.add(inner);
    }
    if (i < nBranch) {
      const mid = pts[Math.floor(pts.length * (0.28 + hash(i, 8) * 0.4))]!;
      const bdir = new THREE.Vector3(hash(i, 11) - 0.5, hash(i, 12) - 0.5, hash(i, 13) - 0.5);
      const branch = walkBolt(radius * 1.032, i * 31 + 77, Math.max(8, (pathSegs * 0.42) | 0), 0.1, 1.15, mid, bdir);
      if (branch.length < 4) continue;
      const bcurve = new THREE.CatmullRomCurve3(branch);
      const bmesh = new THREE.Mesh(
        new THREE.TubeGeometry(bcurve, branch.length, thick * 0.55, tubeSegs, false),
        i % 2 ? matDeep : matCyan,
      );
      bmesh.name = `star-core-crack-branch-${i}`;
      bmesh.renderOrder = -2;
      bmesh.frustumCulled = false;
      bmesh.castShadow = false;
      bmesh.receiveShadow = false;
      spin.add(bmesh);
    }
  }
}

function coreHaloTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const g = c.getContext("2d");
  if (!g) return null;
  const grd = g.createRadialGradient(256, 256, 10, 256, 256, 248);
  grd.addColorStop(0, "rgba(255,255,255,0.55)");
  grd.addColorStop(0.1, "rgba(126,240,255,0.32)");
  grd.addColorStop(0.28, "rgba(46,230,255,0.14)");
  grd.addColorStop(0.48, "rgba(232,197,106,0.08)");
  grd.addColorStop(0.7, "rgba(46,230,255,0)");
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

  const globeR = coarse ? GLOBE_R_COARSE : GLOBE_R;
  const globeSpin = new THREE.Group();
  globeSpin.name = "star-core-spin";
  globeSpin.rotation.z = 0.18;
  globeSpin.rotation.x = 0.08;
  core.add(globeSpin);

  const spark = new THREE.Mesh(
    new THREE.SphereGeometry(globeR * 0.26, 20, 16),
    addMat(0xe8fff8, 0.28),
  );
  spark.name = "star-core-spark";
  spark.renderOrder = -4;
  spark.castShadow = false;
  spark.receiveShadow = false;
  globeSpin.add(spark);

  const bloom = new THREE.Mesh(
    new THREE.SphereGeometry(globeR * 0.58, 20, 16),
    addMat(0x2ee6ff, 0.07),
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
        opacity: 0.22,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
        fog: false,
        toneMapped: false,
      }),
    );
    halo.name = "star-core-halo";
    const haloS = globeR * 1.72;
    halo.scale.set(haloS, haloS, 1);
    halo.renderOrder = -10;
    halo.frustumCulled = false;
    core.add(halo);
  }

  const globeMat = new THREE.MeshPhysicalMaterial({
    color: 0x082032,
    roughness: 0.18,
    metalness: 0.05,
    emissive: 0x1490b4,
    emissiveIntensity: 0.34,
    iridescence: 0.9,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [40, 640],
    clearcoat: 0.82,
    clearcoatRoughness: 0.08,
    sheen: 0.88,
    sheenColor: new THREE.Color(0x7ef0ff),
    envMapIntensity: 0.92,
    fog: false,
    toneMapped: true,
  });
  const segs = coarse ? 32 : 64;
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
    new THREE.SphereGeometry(globeR * 1.045, segs, Math.max(20, segs - 8)),
    boltMat,
  );
  bolts.name = "star-core-veins";
  bolts.renderOrder = -3;
  bolts.frustumCulled = false;
  bolts.castShadow = false;
  bolts.receiveShadow = false;
  globeSpin.add(bolts);

  const rim = new THREE.Mesh(
    new THREE.SphereGeometry(globeR * 1.07, coarse ? 24 : 40, coarse ? 16 : 28),
    rimShellMat(),
  );
  rim.name = "star-core-rim";
  rim.renderOrder = -3;
  rim.frustumCulled = false;
  rim.castShadow = false;
  rim.receiveShadow = false;
  globeSpin.add(rim);

  plantCrackBolts(globeSpin, globeR, coarse);

  const ringMat = goldRingMat();
  const ringGlow = addMat(0xe8c46a, 0.1);
  const ringFilament = addMat(0xffe6a8, 0.16);
  const ringRadii = coarse
    ? [globeR * 1.16, globeR * 1.38]
    : [globeR * 1.18, globeR * 1.4, globeR * 1.64];
  const ringTube = coarse ? 22 : 40;
  const ringSeg = coarse ? 64 : 96;
  const orbits = [
    { rx: 1.12, ry: 0.18, rz: 0.31, spin: 0.045 },
    { rx: 0.42, ry: 1.05, rz: -0.22, spin: -0.032 },
    { rx: 1.48, ry: -0.4, rz: 0.08, spin: 0.022 },
  ];
  const ringMeshes: THREE.Group[] = [];
  const boltRails: THREE.MeshBasicMaterial[] = [];
  const kissDummy = new THREE.Object3D();
  for (let i = 0; i < ringRadii.length; i++) {
    const o = orbits[i]!;
    const hold = new THREE.Group();
    hold.name = `star-core-orbit-${i}`;
    hold.rotation.set(o.rx, o.ry, o.rz);
    hold.frustumCulled = false;
    const tube = ringTube * (1 - i * 0.1);
    const R = ringRadii[i]!;
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(R, tube, 8, ringSeg),
      ringMat,
    );
    ring.castShadow = false;
    ring.receiveShadow = false;
    ring.renderOrder = -6;
    ring.frustumCulled = false;
    hold.add(ring);
    const glow = new THREE.Mesh(
      new THREE.TorusGeometry(R, tube * 1.7, 6, ringSeg),
      ringGlow,
    );
    glow.castShadow = false;
    glow.receiveShadow = false;
    glow.renderOrder = -7;
    glow.frustumCulled = false;
    hold.add(glow);
    const filament = new THREE.Mesh(
      new THREE.TorusGeometry(R, Math.max(6, tube * 0.28), 6, ringSeg),
      ringFilament,
    );
    filament.name = `star-core-orbit-fil-${i}`;
    filament.castShadow = false;
    filament.receiveShadow = false;
    filament.renderOrder = -5;
    filament.frustumCulled = false;
    hold.add(filament);
    const boltRail = new THREE.Mesh(
      new THREE.TorusGeometry(R, Math.max(4, tube * 0.2), 5, ringSeg),
      addMat(0x7ef0ff, 0.26),
    );
    boltRail.name = `star-core-orbit-bolt-${i}`;
    boltRail.castShadow = false;
    boltRail.receiveShadow = false;
    boltRail.renderOrder = -4;
    boltRail.frustumCulled = false;
    hold.add(boltRail);
    boltRails.push(boltRail.material as THREE.MeshBasicMaterial);
    const beadN = coarse ? 3 : 6;
    const beads = new THREE.InstancedMesh(
      new THREE.TetrahedronGeometry(globeR * (0.022 - i * 0.003), 0),
      addMat(0x7ef0ff, 0.62),
      beadN,
    );
    beads.name = `star-core-orbit-vein-${i}`;
    for (let k = 0; k < beadN; k++) {
      const a = (k / beadN) * Math.PI * 2 + i * 0.41 + 0.22;
      kissDummy.position.set(Math.cos(a) * R, Math.sin(a) * R, 0);
      kissDummy.rotation.set(hash(i * 17 + k, 4) * 2, a, hash(i * 17 + k, 5));
      kissDummy.scale.setScalar(0.9 + hash(i * 17 + k, 6) * 0.4);
      kissDummy.updateMatrix();
      beads.setMatrixAt(k, kissDummy.matrix);
    }
    beads.instanceMatrix.needsUpdate = true;
    beads.castShadow = false;
    beads.receiveShadow = false;
    beads.frustumCulled = false;
    beads.renderOrder = -4;
    hold.add(beads);
    const kissN = coarse ? 4 : 8;
    const kisses = new THREE.InstancedMesh(
      new THREE.OctahedronGeometry(globeR * (0.036 - i * 0.004), 0),
      ringMat,
      kissN,
    );
    kisses.name = `star-core-orbit-kiss-${i}`;
    for (let k = 0; k < kissN; k++) {
      const a = (k / kissN) * Math.PI * 2 + i * 0.17;
      kissDummy.position.set(Math.cos(a) * R, Math.sin(a) * R, 0);
      kissDummy.rotation.set(hash(i * 11 + k, 1) * 2, a, hash(i * 11 + k, 2));
      kissDummy.scale.setScalar(0.88 + hash(i * 11 + k, 3) * 0.38);
      kissDummy.updateMatrix();
      kisses.setMatrixAt(k, kissDummy.matrix);
    }
    kisses.instanceMatrix.needsUpdate = true;
    kisses.castShadow = false;
    kisses.receiveShadow = false;
    kisses.frustumCulled = false;
    kisses.renderOrder = -5;
    hold.add(kisses);
    core.add(hold);
    ringMeshes.push(hold);
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
      globeMat.emissiveIntensity = 0.32 + Math.sin(t * 0.7) * 0.06;
      ringMat.emissiveIntensity = 0.4 + Math.sin(t * 0.55) * 0.08;
      ringGlow.opacity = 0.08 + Math.sin(t * 0.55) * 0.03;
      ringFilament.opacity = 0.14 + Math.sin(t * 0.8) * 0.04;
      for (let i = 0; i < boltRails.length; i++) {
        boltRails[i]!.opacity = 0.08 + Math.sin(t * 1.15 + i * 0.9) * 0.04;
      }
      for (let i = 0; i < ringMeshes.length; i++) {
        const o = orbits[i]!;
        const ring = ringMeshes[i]!;
        ring.rotation.y = o.ry + t * o.spin;
        ring.rotation.z = o.rz + Math.sin(t * 0.12 + i) * 0.05;
        ring.rotation.x = o.rx + Math.sin(t * 0.07 + i * 1.1) * 0.03;
      }
      for (let i = 0; i < skyRivers.length; i++) {
        const mat = skyRivers[i]!.material as THREE.MeshBasicMaterial;
        mat.opacity = (riverBase[i] ?? 0.05) * (0.72 + 0.28 * Math.sin(t * 0.7 + i * 0.9));
      }
    },
  };
}
