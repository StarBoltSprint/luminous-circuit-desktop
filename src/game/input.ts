export type Actions = {
  moveX: number;
  moveY: number;
  lookX: number;
  lookY: number;
  howl: boolean;
  talk: boolean;
  sprint: boolean;
  pause: boolean;
  rise: boolean;
  sink: boolean;
};

export type InputHandle = {
  actions: Actions;
  justPressed: { talk: boolean; pause: boolean; howl: boolean; fly: boolean };
  setMoveStick: (x: number, y: number) => void;
  setLookStick: (x: number, y: number) => void;
  setHowl: (v: boolean) => void;
  setTalkHeld: (v: boolean) => void;
  tapFly: () => void;
  beginFrame: () => void;
  dispose: () => void;
  keys: Set<string>;
};

const empty = (): Actions => ({
  moveX: 0,
  moveY: 0,
  lookX: 0,
  lookY: 0,
  howl: false,
  talk: false,
  sprint: false,
  pause: false,
  rise: false,
  sink: false,
});

function radial(x: number, y: number, dz = 0.14) {
  const m = Math.hypot(x, y);
  if (m < dz) return { x: 0, y: 0 };
  const scale = ((m - dz) / (1 - dz)) / m;
  const nx = x * scale;
  const ny = y * scale;
  const mag = Math.hypot(nx, ny);
  if (mag > 1) return { x: nx / mag, y: ny / mag };
  return { x: nx, y: ny };
}

function clamp(n: number, max: number) {
  return Math.max(-max, Math.min(max, n));
}

/** Browser movementY is down-positive; lookY is up-positive. */
const LOOK_MOUSE = 0.12;
const LOOK_MOUSE_CLAMP = 1.25;

function hudTyping(e: Event) {
  const el = e.target;
  if (!(el instanceof HTMLElement)) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
}

function hudButton(el: EventTarget | null) {
  return el instanceof Element && !!el.closest("button, [role='button']");
}

const WALK_KEYS = new Set(["KeyW", "KeyA", "KeyS", "KeyD"]);
const PLAY_KEYS = new Set(["KeyW", "KeyA", "KeyS", "KeyD", "KeyF", "KeyC", "KeyH", "Space", "ShiftLeft", "ShiftRight"]);

export function createInput(target: HTMLElement): InputHandle {
  const keys = new Set<string>();
  const stickMove = { x: 0, y: 0 };
  const stickLook = { x: 0, y: 0 };
  let howlBtn = false;
  let talkBtn = false;
  let flyQueued = false;
  const prev = { talk: false, pause: false, howl: false, fly: false };
  const actions = empty();
  const justPressed = { talk: false, pause: false, howl: false, fly: false };

  const GAME_KEYS = new Set([
    "KeyW",
    "KeyA",
    "KeyS",
    "KeyD",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Space",
    "ShiftLeft",
    "ShiftRight",
    "KeyE",
    "KeyF",
    "KeyH",
    "KeyT",
    "KeyC",
    "ControlLeft",
    "ControlRight",
  ]);

  let mouseDx = 0;
  let mouseDy = 0;
  let pointerLocked = document.pointerLockElement === target;
  let unlockSkipPause = false;

  const onKeyDown = (e: KeyboardEvent) => {
    if (hudTyping(e)) return;
    // Space/Enter activate a focused HUD button; WASD still walks.
    if (hudButton(e.target) && !PLAY_KEYS.has(e.code) && e.code !== "Escape") return;
    if (e.code === "Escape") {
      if (pointerLocked || document.pointerLockElement) {
        unlockSkipPause = true;
        if (document.pointerLockElement) document.exitPointerLock();
        return;
      }
    }
    if (e.repeat && (e.code === "Space" || e.code === "KeyH" || e.code === "KeyF")) { e.preventDefault(); return; }
    if (e.code === "KeyF" && !e.repeat) flyQueued = true;
    keys.add(e.code);
    if (GAME_KEYS.has(e.code)) e.preventDefault();
  };
  const onKeyUp = (e: KeyboardEvent) => {
    keys.delete(e.code);
  };
  const clearKeys = () => keys.clear();

  const onMouseMove = (e: MouseEvent) => {
    if (document.pointerLockElement !== target) return;
    mouseDx += e.movementX;
    mouseDy += e.movementY;
  };
  const onCanvasClick = (e: MouseEvent) => {
    if (e.target !== target) return;
    if (document.pointerLockElement === target) return;
    void target.requestPointerLock?.();
  };
  const onPointerLockChange = () => {
    const locked = document.pointerLockElement === target;
    if (pointerLocked && !locked) {
      unlockSkipPause = true;
      mouseDx = 0;
      mouseDy = 0;
    }
    pointerLocked = locked;
  };

  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
  window.addEventListener("blur", clearKeys);
  target.addEventListener("mousemove", onMouseMove);
  target.addEventListener("click", onCanvasClick);
  document.addEventListener("pointerlockchange", onPointerLockChange);
  const visHide = () => {
    if (document.hidden) clearKeys();
  };
  document.addEventListener("visibilitychange", visHide);

  const handle: InputHandle = {
    actions,
    justPressed,
    keys,
    setMoveStick(x, y) {
      const r = radial(x, y);
      stickMove.x = r.x;
      stickMove.y = r.y;
    },
    setLookStick(x, y) {
      const r = radial(x, y, 0.08);
      stickLook.x = r.x;
      stickLook.y = r.y;
    },
    setHowl(v) {
      howlBtn = v;
    },
    setTalkHeld(v) {
      talkBtn = v;
    },
    tapFly() {
      flyQueued = true;
    },
    beginFrame() {
      // WASD = on-foot: W forward, S back, A left strafe, D right strafe
      let mx = stickMove.x;
      let my = stickMove.y;
      if (keys.has("KeyA")) mx -= 1;
      if (keys.has("KeyD")) mx += 1;
      if (keys.has("KeyW")) my += 1;
      if (keys.has("KeyS")) my -= 1;
      const mv = radial(mx, my, 0.02);
      actions.moveX = mv.x;
      actions.moveY = mv.y;

      // Arrows / right stick = look
      let lx = stickLook.x;
      let ly = stickLook.y;
      if (keys.has("ArrowLeft")) lx -= 1;
      if (keys.has("ArrowRight")) lx += 1;
      if (keys.has("ArrowUp")) ly += 1;
      if (keys.has("ArrowDown")) ly -= 1;
      const lk = radial(lx, ly, 0.02);
      actions.lookX = lk.x + clamp(mouseDx * LOOK_MOUSE, LOOK_MOUSE_CLAMP);
      actions.lookY = lk.y + clamp(-mouseDy * LOOK_MOUSE, LOOK_MOUSE_CLAMP);
      mouseDx = 0;
      mouseDy = 0;

      actions.sprint =
        keys.has("ShiftLeft") || keys.has("ShiftRight") || Math.hypot(mv.x, mv.y) > 0.92;
      actions.rise = keys.has("Space");
      actions.sink = keys.has("KeyC") || keys.has("ControlLeft") || keys.has("ControlRight");
      actions.howl = howlBtn || keys.has("KeyH");
      actions.talk = talkBtn || keys.has("KeyE") || keys.has("KeyT");
      actions.pause = keys.has("KeyP") || (keys.has("Escape") && !unlockSkipPause);
      unlockSkipPause = false;

      justPressed.talk = actions.talk && !prev.talk;
      justPressed.pause = actions.pause && !prev.pause;
      justPressed.howl = actions.howl && !prev.howl;
      justPressed.fly = flyQueued;
      flyQueued = false;
      prev.talk = actions.talk;
      prev.pause = actions.pause;
      prev.howl = actions.howl;
      prev.fly = keys.has("KeyF");

      void target;
    },
    dispose() {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", clearKeys);
      document.removeEventListener("visibilitychange", visHide);
      document.removeEventListener("pointerlockchange", onPointerLockChange);
      target.removeEventListener("mousemove", onMouseMove);
      target.removeEventListener("click", onCanvasClick);
    },
  };

  return handle;
}
