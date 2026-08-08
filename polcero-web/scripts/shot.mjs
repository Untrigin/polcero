import { chromium } from 'playwright-core';

const exe = process.env.HOME + '/AppData/Local/ms-playwright/chromium-1097/chrome-win/chrome.exe';
const base = 'http://localhost:4321';
const shots = [
  { path: '/', vp: { width: 1440, height: 900 }, out: 'shot-home-desktop.png', full: true },
  { path: '/', vp: { width: 375, height: 812 }, out: 'shot-home-mobile.png', full: true },
];

const browser = await chromium.launch({ executablePath: exe });
for (const s of shots) {
  const page = await browser.newPage({ viewport: s.vp, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  await page.goto(base + s.path, { waitUntil: 'networkidle' });
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'scripts/' + s.out, fullPage: s.full });
  console.log('saved', s.out);
  await page.close();
}
await browser.close();
