import { chromium } from 'playwright-core';
const exe = process.env.HOME + '/AppData/Local/ms-playwright/chromium-1097/chrome-win/chrome.exe';
const browser = await chromium.launch({ executablePath: exe });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
// scroll through to trigger all lazy images
await page.evaluate(async () => {
  for (let y = 0; y <= document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); }
  window.scrollTo(0, 0);
});
// wait for every img to be fully loaded
await page.evaluate(() => Promise.all(
  Array.from(document.images).map(img => img.complete ? Promise.resolve() : new Promise(res => { img.onload = img.onerror = res; }))
));
await page.waitForTimeout(300);
const cards = await page.$('.cards');
if (cards) { await cards.scrollIntoViewIfNeeded(); await page.waitForTimeout(200); await cards.screenshot({ path: 'scripts/clip-cards.png' }); }
const tabs = await page.$('.tabs-section');
if (tabs) { await tabs.scrollIntoViewIfNeeded(); await page.waitForTimeout(200); await tabs.screenshot({ path: 'scripts/clip-tabs.png' }); }
const ov = await page.$('.overview');
if (ov) { await ov.scrollIntoViewIfNeeded(); await page.waitForTimeout(200); await ov.screenshot({ path: 'scripts/clip-overview.png' }); }
console.log('clips saved');
await browser.close();
