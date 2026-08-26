import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("lcDesktop", {
  vessel: "desktop",
  pack: "luminous-circuit",
});
