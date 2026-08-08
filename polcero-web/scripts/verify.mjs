import { chromium } from 'playwright-core';

const exe = process.env.HOME + '/AppData/Local/ms-playwright/chromium-1097/chrome-win/chrome.exe';
const base = 'http://localhost:4321';
const widths = [375, 768, 1024, 1440, 1920];
const pages = ['/', '/produkty/', '/produkty/dron-500/', '/branze/rolnictwo/', '/aktualnosci/', '/kontakt/', '/o-nas/', '/en/'];

const browser = await chromium.launch({ executablePath: exe });
let fails = 0;
for (const path of pages) {
  for (const w of widths) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 }, reducedMotion: 'reduce' });
    await page.goto(base + path, { waitUntil: 'domcontentloaded' });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (overflow > 1) { console.log(`  ✗ H-SCROLL ${path} @${w}px  (+${overflow}px)`); fails++; }
    await page.close();
  }
}
console.log(fails === 0 ? '✓ No horizontal scroll on any page/breakpoint' : `✗ ${fails} overflow cases`);

// Screenshots
const caps = [
  { path: '/produkty/dron-500/', vp: { width: 1440, height: 900 }, out: 'shot-product.png' },
  { path: '/kontakt/', vp: { width: 1440, height: 900 }, out: 'shot-contact.png' },
  { path: '/aktualnosci/', vp: { width: 1440, height: 900 }, out: 'shot-news.png' },
];
for (const s of caps) {
  const page = await browser.newPage({ viewport: s.vp, reducedMotion: 'reduce' });
  await page.goto(base + s.path, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scripts/' + s.out, fullPage: true });
  console.log('saved', s.out);
  await page.close();
}
await browser.close();
