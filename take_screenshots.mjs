import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const viewports = [
  { width: 1366, height: 768, name: '1366x768' },
  { width: 1440, height: 768, name: '1440x768' },
  { width: 1440, height: 900, name: '1440x900' },
  { width: 1536, height: 864, name: '1536x864' },
  { width: 1920, height: 1080, name: '1920x1080' },
  { width: 390, height: 844, name: 'mobile_390x844' }
];

const prefix = process.argv[2] || 'baseline';
const outDir = path.resolve('./screenshots', prefix);
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  const report = {};

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    // wait a moment for framer-motion animations
    await new Promise(r => setTimeout(r, 1200));

    const shotPath = path.join(outDir, `${vp.name}.png`);
    await page.screenshot({ path: shotPath, fullPage: false });

    // Measure positions of key elements
    const metrics = await page.evaluate((vpHeight) => {
      const getRect = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          top: Math.round(r.top),
          bottom: Math.round(r.bottom),
          height: Math.round(r.height),
          visibleInViewport: r.top < vpHeight && r.bottom > 0,
          fullyInViewport: r.top >= 0 && r.bottom <= vpHeight
        };
      };

      const navbar = getRect('header');
      const leftBadge = getRect('#hero-desktop-left-badge') || getRect('.md\\:flex #hero-desktop-left-badge');
      const portraitImg = getRect('#hero-desktop-portrait') || getRect('img[alt="Tanish Jangale"]');
      const halo = getRect('#hero-desktop-halo');
      const heroName = getRect('#hero-desktop-name') || getRect('#home h1');
      const exploreBtn = getRect('#hero-explore-projects-btn');
      const contactBtn = getRect('#hero-contact-btn');
      const scrollIndicator = getRect('#home button[aria-label="Scroll to About section"]');

      return {
        viewportHeight: vpHeight,
        navbar,
        leftBadge,
        halo,
        portraitImg,
        heroName,
        exploreBtn,
        contactBtn,
        scrollIndicator
      };
    }, vp.height);

    report[vp.name] = metrics;
    console.log(`Captured ${vp.name} -> ${shotPath}`);
  }

  await browser.close();

  fs.writeFileSync(path.join(outDir, 'metrics.json'), JSON.stringify(report, null, 2));
  console.log('Done capturing screenshots and metrics.');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
