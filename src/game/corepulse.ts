/** Charge meridians — leftover First Howl seen wrapping the world from the parent.
 * Not atmos sky rivers. Not corona rays. Not Lumen beacon. Crystal never chrome.
 * Parent hooks with:
 *   laterOn(() => { try { pulse = growCorePulse(group, coarse); } catch { } });
 *   // in world.tick(t): try { pulse?.tick(t); } catch { }
 * Dispose is world group.clear(). No photos. No vibrate.
 */
import * as THREE from "three";
import { STAR_CORE, SKY_R } from "./atmos";

const OP_CAP = 0.08;

function pulseBoltMat(hex: number, phase: number) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPhase: { value: phase },
      uColor: { value: new THREE.Color(hex) },
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: true,
    fog: false,
    side: THREE.DoubleSide,
    toneMapped: false,
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uPhase;
      uniform vec3 uColor;
      varying vec2 vUv;
      void main() {
        float along = vUv.x;
        float travel = fract(along * 1.15 - uTime * 0.18 + uPhase);
        float head = smoothstep(0.82, 0.92, travel) * (1.0 - smoothstep(0.94, 1.0, travel));
        float tail = pow(clamp((travel - 0.48) / 0.34, 0.0, 1.0), 1.8)
          * (1.0 - smoothstep(0.82, 0.92, travel));
        float tube = 1.0 - abs(vUv.y * 2.0 - 1.0);
        float core = (head * 1.15 + tail * 0.22) * pow(tube, 1.4);
        float breath = 0.78 + 0.22 * sin(uTime * 0.7 + uPhase * 6.2832);
        float a = clamp(core * breath, 0.0, ${OP_CAP.toFixed(2)});
        vec3 white = vec3(0.91, 1.0, 0.973);
        vec3 col = mix(uColor, white, head);
        gl_FragColor = vec4(col, a);
      }
    `,
  });
}

/**
 * Great-circle Charge arcs through STAR_CORE wrapping the planet.
 * Partial tori spin so lightning travels around the world. tick: opacity breath + arc spin.
 */
export function growCorePulse(
  group: THREE.Group,
  coarse: boolean,
): { tick: (t: number) => void } {
  const root = new THREE.Group();
  root.name = "core-pulse";
  group.add(root);

  const n = coarse ? 3 : 6;
  const R = Math.hypot(STAR_CORE.x, STAR_CORE.y, STAR_CORE.z) || SKY_R * 0.78;
  const tube = coarse ? 5 : 7;
  const segs = coarse ? 40 : 72;
  const arc = Math.PI * (coarse ? 0.22 : 0.3);

  const core = new THREE.Vector3(STAR_CORE.x, STAR_CORE.y, STAR_CORE.z).normalize();
  const up = Math.abs(core.y) < 0.92 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
  const u = new THREE.Vector3().crossVectors(core, up).normalize();
  const v = new THREE.Vector3().crossVectors(core, u).normalize();
  const zAxis = new THREE.Vector3(0, 0, 1);

  const geo = new THREE.TorusGeometry(R, tube, 8, segs, arc);
  const holders: THREE.Group[] = [];
  const mats: THREE.ShaderMaterial[] = [];
  const spins: number[] = [];

  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI;
    const normal = u.clone().multiplyScalar(Math.cos(a)).addScaledVector(v, Math.sin(a)).normalize();
    const hold = new THREE.Group();
    hold.quaternion.setFromUnitVectors(zAxis, normal);
    hold.frustumCulled = false;
    const phase = i / n;
    const mat = pulseBoltMat(i % 2 ? 0x7ef0ff : 0x2ee6ff, phase);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.z = (i / n) * Math.PI * 2;
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    mesh.frustumCulled = false;
    mesh.renderOrder = -13;
    mesh.name = `core-pulse-arc-${i}`;
    hold.add(mesh);
    root.add(hold);
    holders.push(hold);
    mats.push(mat);
    spins.push((i % 2 ? 1 : -1) * (0.07 + (i % 5) * 0.012));
  }

  if (coarse) return { tick() {} };

  return {
    tick(t: number) {
      for (let i = 0; i < holders.length; i++) {
        const hold = holders[i]!;
        const mesh = hold.children[0] as THREE.Mesh;
        mesh.rotation.z = t * spins[i]!;
        mats[i]!.uniforms.uTime.value = t;
      }
    },
  };
}
