/** Charge meridians — leftover First Howl seen wrapping the world from the parent.
 * Not atmos sky rivers. Not corona rays. Not Lumen beacon. Crystal never chrome.
 * Parent hooks with:
 *   laterOn(() => { try { pulse = growCorePulse(group, coarse); } catch { } });
 *   // in world.tick(t): try { pulse?.tick(t); } catch { }
 * Dispose is world group.clear(). No photos. No vibrate.
 */
import * as THREE from "three";
import { STAR_CORE, SKY_R } from "./atmos";

function addBolt(hex: number, opacity: number) {
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

  const n = coarse ? 4 : 8;
  const R = Math.hypot(STAR_CORE.x, STAR_CORE.y, STAR_CORE.z) || SKY_R * 0.78;
  const tube = coarse ? 9 : 14;
  const segs = coarse ? 48 : 96;
  const arc = Math.PI * (coarse ? 0.48 : 0.62);

  const core = new THREE.Vector3(STAR_CORE.x, STAR_CORE.y, STAR_CORE.z).normalize();
  const up = Math.abs(core.y) < 0.92 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
  const u = new THREE.Vector3().crossVectors(core, up).normalize();
  const v = new THREE.Vector3().crossVectors(core, u).normalize();
  const zAxis = new THREE.Vector3(0, 0, 1);

  const geo = new THREE.TorusGeometry(R, tube, 8, segs, arc);
  const holders: THREE.Group[] = [];
  const mats: THREE.MeshBasicMaterial[] = [];
  const spins: number[] = [];
  const bases: number[] = [];

  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI;
    const normal = u.clone().multiplyScalar(Math.cos(a)).addScaledVector(v, Math.sin(a)).normalize();
    const hold = new THREE.Group();
    hold.quaternion.setFromUnitVectors(zAxis, normal);
    hold.frustumCulled = false;
    const gold = i % 3 === 0;
    const op = gold ? 0.03 : 0.038;
    const mat = addBolt(gold ? 0xe8c46a : i % 2 ? 0x7ef0ff : 0x2ee6ff, op);
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
    spins.push((i % 2 ? 1 : -1) * (0.055 + (i % 5) * 0.008));
    bases.push(op);
  }

  if (coarse) return { tick() {} };

  return {
    tick(t: number) {
      const breath = 0.62 + 0.38 * Math.sin(t * 0.7);
      for (let i = 0; i < holders.length; i++) {
        const hold = holders[i]!;
        const mesh = hold.children[0] as THREE.Mesh;
        mesh.rotation.z = t * spins[i]!;
        mats[i]!.opacity = (bases[i] ?? 0.05) * breath;
      }
    },
  };
}
