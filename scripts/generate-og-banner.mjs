// Regenerates public/og-banner.png (1200x630) — renders an HTML/CSS layout
// with Playwright and screenshots it. Run this again whenever the banner
// copy or character art changes:
//   node scripts/generate-og-banner.mjs
//
// IMPORTANT: after regenerating, also bump the ?v=N cache-busting query on
// the og:image/twitter:image URLs in index.html. This file's URL never
// changes, so without a version bump, platforms that already cached it
// (KakaoTalk in particular) can keep showing the old image indefinitely
// even after this script updates the bytes on disk/deploy.
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const CHAR_DIR = 'src/assets/characters';
const OUT_FILE = 'public/og-banner.png';

const ELEMENTS = [
  { key: 'Wood', file: 'wood.png', ring: '#4caf50' },
  { key: 'Fire', file: 'fire.png', ring: '#ef4444' },
  { key: 'Earth', file: 'earth.png', ring: '#b08d57' },
  { key: 'Metal', file: 'metal.png', ring: '#c9a227' },
  { key: 'Water', file: 'water.png', ring: '#2f4d78' },
];

function dataUri(filename) {
  const buf = fs.readFileSync(path.join(CHAR_DIR, filename));
  return `data:image/png;base64,${buf.toString('base64')}`;
}

const badges = ELEMENTS.map(
  ({ file, ring }) => `
    <div class="badge" style="border-color: ${ring}">
      <img src="${dataUri(file)}" alt="" />
    </div>`
).join('\n');

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    font-family: -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    background: linear-gradient(135deg, #fafafa 0%, #f2eefc 55%, #e6ddfa 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
  }
  .wordmark {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .wordmark-icon {
    width: 76px;
    height: 76px;
    border-radius: 50%;
    border: 3px solid #ef4444;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .wordmark-icon img { width: 100%; height: 100%; object-fit: contain; padding: 8px; box-sizing: border-box; }
  .wordmark-text {
    font-size: 64px;
    font-weight: 800;
    color: #17151f;
    letter-spacing: -1px;
  }
  .tagline {
    font-size: 26px;
    color: #4b4758;
    text-align: center;
    line-height: 1.4;
    max-width: 820px;
  }
  .badges {
    display: flex;
    gap: 22px;
    margin-top: 6px;
  }
  .badge {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    border: 3px solid;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .badge img { width: 100%; height: 100%; object-fit: contain; }
  .pills {
    display: flex;
    gap: 14px;
    margin-top: 6px;
  }
  .pill {
    padding: 12px 26px;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0 6px 16px rgba(80, 60, 140, 0.12);
    font-size: 20px;
    font-weight: 700;
    color: #2c2a35;
  }
</style>
</head>
<body>
  <div class="content">
    <div class="wordmark">
      <div class="wordmark-icon"><img src="${dataUri('fire.png')}" alt="" /></div>
      <div class="wordmark-text">Ohaeng</div>
    </div>
    <div class="tagline">Korean saju readings, idol compatibility &amp; K-drama matches — made for K-pop hearts</div>
    <div class="badges">
      ${badges}
    </div>
    <div class="pills">
      <div class="pill">Saju Readings</div>
      <div class="pill">Idol Match</div>
      <div class="pill">Compatibility</div>
    </div>
  </div>
</body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.screenshot({ path: OUT_FILE });
await browser.close();

console.log(`wrote ${OUT_FILE} (${fs.statSync(OUT_FILE).size} bytes)`);
