import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CircuitApp } from "@/components/CircuitApp";
import "./styles.css";
import "./desktop.css";

document.body.classList.add("lc-desktop");

function KeysLegend() {
  return (
    <aside className="lc-keys" aria-label="Desktop keys">
      <p className="lc-keys-kicker">Ward keys</p>
      <p className="lc-keys-row">
        <kbd>W</kbd>
        <kbd>A</kbd>
        <kbd>S</kbd>
        <kbd>D</kbd>
        <span>walk</span>
        <kbd className="lc-keys-wide">Shift</kbd>
        <span>sprint</span>
      </p>
      <p className="lc-keys-row">
        <kbd className="lc-keys-cyan">F</kbd>
        <span>lift</span>
        <kbd>Space</kbd>
        <span>up</span>
        <kbd>C</kbd>
        <span>down</span>
      </p>
      <p className="lc-keys-row">
        <kbd>E</kbd>
        <kbd>T</kbd>
        <span>talk</span>
        <span className="lc-keys-hold">hold</span>
        <kbd className="lc-keys-cyan">H</kbd>
        <span className="lc-keys-howl">Howl</span>
        <kbd className="lc-keys-wide lc-keys-cyan">Space</kbd>
        <span>Howl on foot</span>
      </p>
      <p className="lc-keys-row">
        <span>click city look</span>
        <kbd className="lc-keys-esc">Esc</kbd>
        <span>release</span>
      </p>
    </aside>
  );
}

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <CircuitApp />
    <KeysLegend />
  </StrictMode>,
);
