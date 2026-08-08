// Generates brand-gradient placeholder media so the site builds before real
// photography exists. Swap these out in public/media with real assets (see README).
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const mediaDir = join(root, 'public', 'media');
const ogDir = join(root, 'public', 'og');

const VOID = '#0A0A0B';
const SURFACE = '#17181C';
const ACCENT = '#FF6A1A';
const ICE = '#F4F5F7';
const MUTE = '#9096A0';

function svg(w, h, label, opts = {}) {
  const { light = false } = opts;
  const bgA = light ? '#EDEEF0' : VOID;
  const bgB = light ? '#DADCE0' : SURFACE;
  const fg = light ? '#0A0A0B' : ICE;
  const sub = light ? '#5B6068' : MUTE;
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${bgA}"/>
      <stop offset="1" stop-color="${bgB}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.72" cy="0.28" r="0.6">
      <stop offset="0" stop-color="${ACCENT}" stop-opacity="${light ? 0.25 : 0.4}"/>
      <stop offset="1" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <g fill="none" stroke="${sub}" stroke-opacity="0.14" stroke-width="1">
    ${Array.from({ length: Math.floor(w / 96) }, (_, i) => `<line x1="${i * 96}" y1="0" x2="${i * 96}" y2="${h}"/>`).join('')}
    ${Array.from({ length: Math.floor(h / 96) }, (_, i) => `<line x1="0" y1="${i * 96}" x2="${w}" y2="${i * 96}"/>`).join('')}
  </g>
  <text x="${w / 2}" y="${h / 2 - 6}" font-family="monospace" font-size="${Math.max(22, w / 42)}" fill="${fg}" text-anchor="middle" font-weight="700" letter-spacing="2">POLCERO</text>
  <text x="${w / 2}" y="${h / 2 + Math.max(30, w / 46)}" font-family="monospace" font-size="${Math.max(14, w / 90)}" fill="${sub}" text-anchor="middle" letter-spacing="3">${label} · ${w}×${h}</text>
</svg>`);
}

const media = [
  { name: 'hero', w: 2560, h: 1440, label: 'HERO' },
  { name: 'product-01', w: 1024, h: 1024, label: 'PRODUCT', light: true },
  { name: 'product-02', w: 1024, h: 1024, label: 'PRODUCT', light: true },
  { name: 'product-03', w: 1024, h: 1024, label: 'PRODUCT', light: true },
  { name: 'product-04', w: 1024, h: 1024, label: 'PRODUCT', light: true },
  { name: 'tab-industry', w: 1600, h: 1200, label: 'INDUSTRY' },
  { name: 'tab-services', w: 1600, h: 1200, label: 'AGRICULTURE' },
  { name: 'tab-home', w: 1600, h: 1200, label: 'LOGISTICS' },
  { name: 'mission', w: 2000, h: 1200, label: 'MISSION' },
];

await mkdir(mediaDir, { recursive: true });
await mkdir(ogDir, { recursive: true });

for (const m of media) {
  await sharp(svg(m.w, m.h, m.label, { light: m.light }))
    .webp({ quality: 82 })
    .toFile(join(mediaDir, `${m.name}.webp`));
  console.log('media/%s.webp', m.name);
}

// OG default 1200×630 as PNG
await sharp(svg(1200, 630, 'OPEN GRAPH')).png().toFile(join(ogDir, 'default.png'));
console.log('og/default.png');
