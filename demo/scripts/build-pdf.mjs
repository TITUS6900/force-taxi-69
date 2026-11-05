import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEMO_DIR = path.join(__dirname, "..");
const PROJECT_DIR = path.join(DEMO_DIR, "..");
const SHOTS = path.join(DEMO_DIR, "screenshots");

const template = fs.readFileSync(
  path.join(DEMO_DIR, "pdf", "presentation.html"),
  "utf8"
);

const toUrl = (p) => pathToFileURL(p).href;

const html = template
  .replaceAll("LOGO_SRC", toUrl(path.join(PROJECT_DIR, "public", "logo-ft69.svg")))
  .replace("SHOT_TOP", toUrl(path.join(SHOTS, "section-top.png")))
  .replace("SHOT_SYNDICAT", toUrl(path.join(SHOTS, "section-syndicat.png")))
  .replace("SHOT_AVANTAGES", toUrl(path.join(SHOTS, "section-avantages.png")))
  .replace("SHOT_ADHERER", toUrl(path.join(SHOTS, "section-adherer.png")))
  .replace("SHOT_CONTACT", toUrl(path.join(SHOTS, "section-contact.png")));

const resolvedHtmlPath = path.join(DEMO_DIR, "pdf", "_resolved.html");
fs.writeFileSync(resolvedHtmlPath, html, "utf8");

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(toUrl(resolvedHtmlPath), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  const outPath = path.join(PROJECT_DIR, "demo", "presentation-force-taxi-69.pdf");
  await page.pdf({
    path: outPath,
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();
  fs.rmSync(resolvedHtmlPath, { force: true });
  console.log("PDF généré:", outPath);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
