import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CircuitApp } from "@/components/CircuitApp";
import "./styles.css";
import "./desktop.css";

document.body.classList.add("lc-desktop");

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <CircuitApp />
  </StrictMode>,
);
