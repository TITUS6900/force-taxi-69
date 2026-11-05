import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "screenshots");
const BASE_URL = "http://localhost:3000";

const SECTIONS = ["top", "syndicat", "avantages", "adherer", "contact"];

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

async function mockHelloAsso(context) {
  await context.route("**helloasso.com/associations/ft69/**", (route) =>
    route.fulfill({ contentType: "text/html; charset=utf-8", body: HELLOASSO_MOCK })
  );
}

async function preparePage(page) {
  await page.goto(BASE_URL, { waitUntil: "load", timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  // Désactive les animations/transitions pour des captures nettes et stables.
  await page.addStyleTag({
    content: `*, *::before, *::after { transition: none !important; animation: none !important; scroll-behavior: auto !important; }`,
  });
  await page.waitForTimeout(800);
}

async function run() {
  const browser = await chromium.launch();

  // --- Capture pleine page desktop ---
  {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2,
      locale: "fr-FR",
    });
    await mockHelloAsso(context);
    const page = await context.newPage();
    await preparePage(page);
    await page.screenshot({
      path: path.join(OUT_DIR, "desktop-full.png"),
      fullPage: true,
    });

    for (const id of SECTIONS) {
      const el = page.locator(`#${id}`);
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);
      await el.screenshot({
        path: path.join(OUT_DIR, `section-${id}.png`),
      });
    }

    await context.close();
  }

  // --- Capture pleine page mobile ---
  {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      locale: "fr-FR",
      isMobile: true,
      hasTouch: true,
    });
    await mockHelloAsso(context);
    const page = await context.newPage();
    await preparePage(page);
    await page.screenshot({
      path: path.join(OUT_DIR, "mobile-full.png"),
      fullPage: true,
    });
    await context.close();
  }

  await browser.close();
  console.log("Captures générées dans", OUT_DIR);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
