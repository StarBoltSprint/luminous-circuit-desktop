import puppeteer from "puppeteer-core";
import path from "node:path";
import { mkdirSync } from "node:fs";

const chrome =
  process.env.CHROME ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const url = process.env.SHOT_URL || "http://127.0.0.1:5174/";
const outDir = path.resolve("screenshots");
mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: "new",
  args: ["--no-sandbox", "--window-size=1600,900", "--hide-scrollbars"],
  defaultViewport: { width: 1600, height: 900, deviceScaleFactor: 1 },
});

try {
  const page = await browser.newPage();
  page.setDefaultTimeout(60000);
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
  await page.waitForSelector("canvas", { timeout: 20000 });
  await page.waitForSelector(".title-land", { timeout: 15000 });
  await new Promise((r) => setTimeout(r, 2500));
  await page.evaluate(() => {
    const el = document.querySelector(".title-land");
    if (el) {
      el.style.background = "transparent";
      el.style.opacity = "0.35";
    }
  });
  await new Promise((r) => setTimeout(r, 10000));
  await page.screenshot({ path: path.join(outDir, "graphism-title.png"), type: "png" });

  await page.evaluate(() => {
    const yaw = Math.PI / 2;
    const raw = localStorage.getItem("lc-android-save-v1");
    let data = {};
    try { data = raw ? JSON.parse(raw) : {}; } catch { data = {}; }
    data.px = 52;
    data.pz = 110;
    data.yaw = yaw;
    localStorage.setItem("lc-android-save-v1", JSON.stringify(data));
  });
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForSelector(".title-land", { timeout: 20000 });
  await new Promise((r) => setTimeout(r, 2000));
  await page.click(".title-land");
  await page.waitForFunction(
    () => !document.querySelector(".title-land"),
    { timeout: 20000 },
  ).catch(() => {});
  await new Promise((r) => setTimeout(r, 9000));
  await page.screenshot({ path: path.join(outDir, "graphism-landed.png"), type: "png" });
  const look = await page.evaluate(() => {
    const canvas = document.querySelector("canvas");
    return {
      w: canvas?.width ?? 0,
      h: canvas?.height ?? 0,
      title: !!document.querySelector(".title-land"),
      gl: !!canvas,
    };
  });
  console.log(JSON.stringify(look));
} finally {
  await browser.close();
}
