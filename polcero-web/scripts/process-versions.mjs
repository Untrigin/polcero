import sharp from 'sharp';
const V = '../photos/versions/';
const P = '../photos/';
const OUT = 'public/media/';
const pad = 60;

// contain a crop onto a light square panel
async function tile(src, region, out, size = 1024) {
  let img = sharp(src);
  if (region) img = img.extract(region);
  const inner = size - pad * 2;
  const buf = await img.resize(inner, inner, { fit: 'contain', background: '#EDEEF0', kernel: 'lanczos3' })
    .flatten({ background: '#EDEEF0' }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 3, background: '#EDEEF0' } })
    .composite([{ input: buf, gravity: 'centre' }]).webp({ quality: 86 }).toFile(OUT + out);
  console.log(out);
}

// montage 2752x1536 → 3 cols x 2 rows; top-right = nice 3/4 view
const TR = { left: 1836, top: 8, width: 908, height: 752 };
const TL = { left: 8, top: 8, width: 908, height: 752 };

await tile(P + 'Humanoid_robot_in_white_room_202607311626.jpg', { left: 830, top: 60, width: 1100, height: 1420 }, 'r-humanoid.webp');
await tile(V + 'humanoid_on_a_mobile_platform.jpeg', TR, 'r-mobile.webp');
await tile(V + 'crawler chassis robot.jpeg', TR, 'r-tracked.webp');
await tile(V + 'wheeled chassis robot.jpeg', TR, 'r-wheeled.webp');
await tile(V + 'robot with foot-wheel chassis.jpeg', TR, 'r-wheelleg.webp');
// quadruped (dog): legged robot sits top-right of the "all types" lineup
await tile(V + 'robot - all types of chassis.jpeg', { left: 1960, top: 70, width: 780, height: 520 }, 'r-quadruped.webp');
await tile(P + 'dron_front.jpg', null, 'r-drone.webp');

// body/core module (korpus): 2 rows x 4 cols → col ~688
await tile(V + 'korpus_robot.jpeg', { left: 10, top: 10, width: 670, height: 750 }, 'module-front.webp');      // front w/ logo
await tile(V + 'korpus_robot.jpeg', { left: 690, top: 10, width: 670, height: 750 }, 'module-back.webp');      // back w/ 3 batteries
await tile(V + 'korpus_robot.jpeg', { left: 10, top: 10, width: 670, height: 750 }, 'r-os.webp');

// chassis lineup (all types) — wide, for modularity story / article
await sharp(V + 'robot - all types of chassis.jpeg').resize(1600, 893, { fit: 'cover' }).webp({ quality: 84 }).toFile(OUT + 'chassis-lineup.webp');
console.log('chassis-lineup.webp');
