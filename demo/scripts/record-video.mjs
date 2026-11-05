import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..");
const VIDEO_DIR = path.join(OUT_DIR, "_video_tmp");
const BASE_URL = "http://localhost:3000";

const HELLOASSO_MOCK = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><style>
  body{margin:0;font-family:Arial,Helvetica,sans-serif;background:#fff;color:#1c1c28;padding:28px;}
  .logo{display:flex;align-items:center;gap:8px;font-weight:700;font-size:16px;margin-bottom:24px;color:#3b3b98}
  .dot{width:16px;height:16px;border-radius:50%;background:conic-gradient(#f05a28,#f7a823,#8bc53f,#3b3b98,#f05a28)}
  .label{font-size:12px;color:#6b7280;margin-bottom:10px;text-transform:uppercase;letter-spacing:.04em}
  .amounts{display:flex;gap:10px;margin-bottom:24px;flex-wrap:wrap}
  .amount{border:2px solid #e5e7eb;border-radius:10px;padding:14px 22px;font-weight:600;font-size:15px}
  .amount.active{border-color:#3b3b98;background:#f1f1fb;color:#3b3b98}
  .field{height:42px;border:1px solid #e5e7eb;border-radius:8px;margin-bottom:14px}
  .cta{width:100%;background:#3b3b98;color:#fff;border:none;border-radius:10px;padding:16px;font-size:16px;font-weight:700}
  .note{margin-top:16px;font-size:11px;color:#9ca3af;text-align:center}
</style></head><body>
  <div class="logo"><span class="dot"></span>helloasso</div>
  <div class="label">Montant de l'adhésion</div>
  <div class="amounts"><div class="amount active">Adhésion FT69</div></div>
  <div class="label">Vos informations</div>
  <div class="field"></div><div class="field"></div><div class="field"></div>
  <button class="cta">Je règle mon adhésion</button>
  <div class="note">Paiement sécurisé — HelloAsso</div>
</body></html>`;

function smoothScrollTo({ targetY, durationMs }) {
  return new Promise((resolve) => {
    const startY = window.scrollY;
    const delta = targetY - startY;
    const start = performance.now();
    function step(now) {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      window.scrollTo(0, startY + delta * eased);
      if (t < 1) requestAnimationFrame(step);
      else resolve();
    }
    requestAnimationFrame(step);
  });
}

async function run() {
  fs.rmSync(VIDEO_DIR, { recursive: true, force: true });
  fs.mkdirSync(VIDEO_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    locale: "fr-FR",
    recordVideo: { dir: VIDEO_DIR, size: { width: 1440, height: 900 } },
  });
  await context.route("**helloasso.com/associations/ft69/**", (route) =>
    route.fulfill({ contentType: "text/html; charset=utf-8", body: HELLOASSO_MOCK })
  );

  const page = await context.newPage();
  await page.goto(BASE_URL, { waitUntil: "load", timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1000);

  const ids = ["top", "syndicat", "avantages", "adherer", "contact"];
  const pauses = [1800, 2200, 2800, 2800, 2200];

  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const targetY = await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (!el) return window.scrollY;
      const rect = el.getBoundingClientRect();
      return Math.max(0, window.scrollY + rect.top - (id === "top" ? 0 : 16));
    }, id);
    await page.evaluate(smoothScrollTo, { targetY, durationMs: 1600 });
    await page.waitForTimeout(1600 + pauses[i]);
  }

  // Descente finale jusqu'au footer tout en bas.
  const maxY = await page.evaluate(() => document.body.scrollHeight);
  await page.evaluate(smoothScrollTo, { targetY: maxY, durationMs: 1400 });
  await page.waitForTimeout(2200);

  await page.close();
  await context.close();
  await browser.close();

  const files = fs.readdirSync(VIDEO_DIR).filter((f) => f.endsWith(".webm"));
  if (files.length === 0) throw new Error("Aucune vidéo générée par Playwright.");
  const webmPath = path.join(VIDEO_DIR, files[0]);
  const finalWebm = path.join(OUT_DIR, "demo-force-taxi-69.webm");
  fs.copyFileSync(webmPath, finalWebm);
  console.log("Vidéo webm générée:", finalWebm);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
