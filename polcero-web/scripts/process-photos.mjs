// Processes real photography from ../photos into public/media/ at the fixed
// dimensions the site expects (see README). Scenes are cover-cropped; the drone
// render sheet is cut down to a single view. Re-run after adding new photos.
import sharp from 'sharp';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir } from 'node:fs/promises';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const photos = join(root, '..', 'photos');
const media = join(root, 'public', 'media');
const og = join(root, 'public', 'og');
await mkdir(media, { recursive: true });
await mkdir(og, { recursive: true });

const src = (f) => join(photos, f);

// Scene images: cover-crop to target, focus on the salient subject.
const scenes = [
  { file: 'all_polcero_robots.jpg', out: 'hero.webp', w: 2560, h: 1440, pos: 'centre' },
  { file: 'humanoid_on_a_mobile_platform.jpg', out: 'tab-industry.webp', w: 1600, h: 1200, pos: 'attention' },
  { file: 'humanodi_walks_among_the_shelves.jpg', out: 'tab-home.webp', w: 1600, h: 1200, pos: 'attention' },
  { file: 'Macro_camera_angle_zoom_202608041248.jpg', out: 'tab-services.webp', w: 1600, h: 1200, pos: 'attention' },
  { file: 'humanoid_robot_walks among the shelves.jpg', out: 'mission.webp', w: 2000, h: 1200, pos: 'attention' },
];

for (const s of scenes) {
  await sharp(src(s.file))
    .resize(s.w, s.h, { fit: 'cover', position: s.pos })
    .webp({ quality: 82 })
    .toFile(join(media, s.out));
  console.log('media/%s  ←  %s', s.out, s.file);
}

// Product tiles (1024²) — square cover crops focusing on the subject.
const products = [
  { file: 'Humanoid_robot_in_white_room_202607311626.jpg', out: 'product-01.webp', pos: 'centre' },
  // dron-500: cut the front view (top-left quadrant) out of the 4-view sheet
  { file: 'the_dron.png', out: 'product-02.webp', extract: { left: 20, top: 10, width: 748, height: 470 }, pos: 'centre' },
  { file: 'Macro_camera_angle_zoom_202608041248.jpg', out: 'product-03.webp', pos: 'attention' },
  { file: 'humanoid_on_a_mobile_platform.jpg', out: 'product-04.webp', pos: 'attention' },
  { file: 'humanodi_walks_among_the_shelves.jpg', out: 'product-05.webp', pos: 'attention' },
  { file: 'all_polcero_robots.jpg', out: 'product-06.webp', extract: { left: 720, top: 150, width: 810, height: 810 }, pos: 'centre' },
];

for (const p of products) {
  let img = sharp(src(p.file));
  if (p.extract) img = img.extract(p.extract);
  await img
    .resize(1024, 1024, { fit: 'cover', position: p.pos })
    .webp({ quality: 84 })
    .toFile(join(media, p.out));
  console.log('media/%s  ←  %s%s', p.out, p.file, p.extract ? ' (cut)' : '');
}

// OG default (1200×630)
await sharp(src('all_polcero_robots.jpg'))
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .png()
  .toFile(join(og, 'default.png'));
console.log('og/default.png  ←  all_polcero_robots.jpg');
