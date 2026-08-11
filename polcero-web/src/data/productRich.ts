import type { Locale } from '../lib/i18n';
import { pl } from './i18n/productRich/pl';
import { de } from './i18n/productRich/de';
import { fr } from './i18n/productRich/fr';
import { es } from './i18n/productRich/es';
import { it } from './i18n/productRich/it';
import { pt } from './i18n/productRich/pt';
import { nl } from './i18n/productRich/nl';
import { ro } from './i18n/productRich/ro';
import { uk } from './i18n/productRich/uk';
import { sv } from './i18n/productRich/sv';
import { cs } from './i18n/productRich/cs';
import { el } from './i18n/productRich/el';
import { zh } from './i18n/productRich/zh';
import { hi } from './i18n/productRich/hi';
import { ar } from './i18n/productRich/ar';
import { ru } from './i18n/productRich/ru';
import { ja } from './i18n/productRich/ja';

/**
 * Rich, per-product marketing sections beyond the base Product record.
 * English is the authored base; other locales deep-merge their override over EN,
 * so untranslated fields fall back to English (same pattern as branchRich.ts).
 * All images live in /public/media and were converted from /photos/new.
 */

export interface RichBand { image: string; alt: string; title: string; body: string }
export interface RichVersion { image: string; alt: string; name: string; blurb: string; specs: { label: string; value: string }[] }
export interface RichRobot { image: string; alt: string; name: string; role: string; body: string; modify: string }
export interface RichBattery { image: string; alt: string; title: string; lead: string; rows: { label: string; value: string }[] }
export interface RichSwap { image: string; alt: string; title: string; lead: string; robot: { title: string; steps: string[] }; human: { title: string; steps: string[] } }
export interface RichStatus { image: string; alt: string; title: string; lead: string; points: { title: string; text: string }[] }
export interface RichVision { image: string; alt: string; title: string; lead: string; views: { label: string; text: string }[]; extra: { title: string; text: string }[] }
export interface RichPower { title: string; lead: string; modes: { name: string; text: string }[] }
export interface RichDrone { images: { src: string; alt: string }[]; title: string; body: string; points: string[] }

export interface ProductRich {
  application?: RichBand;
  versions?: { title: string; lead: string; items: RichVersion[] };
  robots?: { title: string; lead: string; items: RichRobot[] };
  battery?: RichBattery;
  swap?: RichSwap;
  status?: RichStatus;
  vision?: RichVision;
  power?: RichPower;
  drone?: RichDrone;
}

// ── Shared blocks (English base) reused across the robot products ─────────────
// The core module and its three hot-swap packs are common to every robot, so the
// battery, self-swap, status and power sections share one authored source.

const batteryRobot: RichBattery = {
  image: '/media/battery.webp',
  alt: 'POLCERO hot-swap battery pack',
  title: 'Battery and power',
  lead: 'Each robot runs on three hot-swap battery packs seated in the core module. A pack is a self-contained 48 V unit, so power scales with the number of packs and a depleted one is replaced without tools while the robot keeps working on the others.',
  rows: [
    { label: 'Pack voltage', value: '48 V hot-swap' },
    { label: 'Pack energy', value: '≈ 864 Wh each' },
    { label: 'Packs in the core module', value: '3 (≈ 2.6 kWh total)' },
    { label: 'Runtime on battery', value: '≈ 5 h typical duty' },
    { label: 'On direct power', value: '24/7 (tethered or grid)' },
    { label: 'Swap time', value: '< 60 s per pack, tool-free' },
  ],
};

const swapRobot: RichSwap = {
  image: '/media/battery-swap.webp',
  alt: 'How a POLCERO robot swaps its own battery',
  title: 'Self-swapping batteries — no downtime',
  lead: 'The robot never fully powers down to recharge. It rotates its three packs one at a time, running on the remaining two while a spent pack charges — so a shift does not stop for the battery.',
  robot: {
    title: 'The robot does it itself',
    steps: [
      'Sensing a pack running low, the robot drives to the charging dock and holds state on the two remaining packs.',
      'An arm reaches to the back of the core module, releases the latch and lifts out the depleted pack.',
      'It seats the pack in a free bay of the 4-bay dock and takes a fully charged one in its place.',
      'The fresh pack clicks in; the robot repeats for each pack in turn and returns to work — never off, never idle.',
    ],
  },
  human: {
    title: 'A person can do it in seconds',
    steps: [
      'No shutdown and no tools: the packs are hot-swappable while the robot stands ready.',
      'Press the latch on the back of the core module and pull the pack straight out.',
      'Slide a charged pack in until it clicks home — the robot picks up where it left off.',
    ],
  },
};

const statusRobot: RichStatus = {
  image: '/media/battery-status.webp',
  alt: 'POLCERO battery-status dashboard and 4-bay charging station',
  title: 'Battery status and the charging station',
  lead: 'Every pack reports its own state, so the robot and its operators always know when to swap. A 4-bay charging station keeps a rotation of packs ready, and the robot docks to swap its own packs during work.',
  points: [
    { title: 'Live per-pack state', text: 'State of charge, health and temperature for each of the three packs, in real time.' },
    { title: 'Predictive swap', text: 'The system schedules the next swap before a pack runs out, so work is never interrupted mid-task.' },
    { title: '4-bay charging dock', text: 'Four charging inputs keep spare packs topped up and ready for the next rotation.' },
    { title: 'Autonomous docking', text: 'The robot rotates its own packs at the dock during a shift — no operator and no downtime.' },
  ],
};

const visionRobot: RichVision = {
  image: '/media/vision.webp',
  alt: 'The four views a POLCERO robot builds of the world',
  title: 'How the robot sees',
  lead: 'The robot builds one picture of the world from several views at once. A wide-field binocular head gives a left and a right image; comparing them yields depth; on top of that the AI layer adds a perception view that names objects, surfaces and people.',
  views: [
    { label: 'Left', text: 'The left eye of the binocular head — a wide-field colour view of the scene.' },
    { label: 'Right', text: 'The right eye — the second colour view the robot compares against the left.' },
    { label: 'Depth', text: 'Stereo disparity between left and right yields distance to every point in the frame.' },
    { label: 'Perception', text: 'The AI layer labels objects, surfaces, obstacles and people, and plans the next move on-device.' },
  ],
  extra: [
    { title: 'Wrist cameras', text: 'HD cameras at each wrist give a close-up view for precise grasping and assembly.' },
    { title: 'LiDAR + ultrasonic', text: 'Chassis LiDAR and ultrasonic sensors map the space and catch obstacles beyond the cameras.' },
    { title: 'Force and IMU', text: 'Force-feedback joints and an IMU sense contact and balance for safe, stable motion.' },
    { title: 'Voice and language', text: 'Voice interaction and a language model let a person direct the robot in plain speech.' },
  ],
};

const powerRobot: RichPower = {
  title: 'Two ways to power it: batteries or the grid',
  lead: 'The robot is autonomous on batteries, but where a site can supply power it runs straight off the grid through a cable — no packs to rotate, no downtime, lower running cost.',
  modes: [
    { name: 'Hot-swap batteries', text: 'Fully mobile and autonomous. Three packs rotate through the charging dock so the robot roams anywhere without a tether.' },
    { name: 'Direct power (cable)', text: 'For a fixed station or 24/7 duty, the robot draws power over a cable and runs continuously — the batteries become a backup.' },
    { name: 'Grid infrastructure', text: 'In halls, factories and greenhouses we install fixed power rails; outdoors, on fields and yards, overhead conductor lines like tram catenary. The robot draws from the line and tops up its packs while it works.' },
  ],
};

const R = { battery: batteryRobot, swap: swapRobot, status: statusRobot, vision: visionRobot, power: powerRobot };

// ── Per-product English base ─────────────────────────────────────────────────
const en: Record<string, ProductRich> = {
  humanoid: {
    ...R,
    application: {
      image: '/media/app-warehouse.webp',
      alt: 'Three POLCERO humanoids working together in a modern warehouse',
      title: 'Three humanoids, one warehouse',
      body: 'This is what a shift looks like. In a single room, one humanoid packs a parcel at the bench, a second lifts a loaded metal tote off the floor, and a third stacks boxes onto a rack. Same robot, three jobs — each entered a space built for people and picked up work built for human hands, with no line to rebuild around them.',
    },
  },
  'mobile-humanoid': {
    ...R,
    versions: {
      title: 'Two platform versions',
      lead: 'The same humanoid torso sits on the mobile base you need — a light, folding base for floor-level picking, or a heavy base for lifting real weight.',
      items: [
        {
          image: '/media/mobile-v1.webp',
          alt: 'Folding mobile-platform humanoid, version 1',
          name: 'V1 — folding base',
          blurb: 'The mast folds at its midpoint, so the robot bends to collect things off the floor with little loss of power. Wheels at the base rotate the whole robot in place, making it nimble in tight aisles and at low picking heights.',
          specs: [
            { label: 'Best for', value: 'Floor-level picking, tight aisles' },
            { label: 'Base', value: 'Folding mast, in-place turn' },
            { label: 'Reach', value: 'Floor to work height' },
          ],
        },
        {
          image: '/media/p-mobile.webp',
          alt: 'Heavy-duty mobile-platform humanoid, version 2',
          name: 'V2 — heavy base',
          blurb: 'A stronger mobile platform built to lift real weight. It keeps the dual-arm humanoid upper body but stands on a rigid, high-payload base for handling and assembly of heavier industrial parts.',
          specs: [
            { label: 'Best for', value: 'Heavy handling and assembly' },
            { label: 'Base', value: 'Rigid high-payload platform' },
            { label: 'Rated payload', value: '≈ 7 kg per arm' },
          ],
        },
      ],
    },
  },
  'specialized-robots': {
    ...R,
    vision: { ...visionRobot, extra: [
      { title: 'Perception mast', text: 'On a specialized chassis the core module carries an added mast of tools and cameras for the task at hand.' },
      { title: 'LiDAR + ultrasonic', text: 'Chassis LiDAR and ultrasonic sensors map rough terrain and catch obstacles beyond the cameras.' },
      { title: 'Multispectral / thermal', text: 'Optional multispectral and thermal imaging for crop health, inspection and night work.' },
      { title: 'On-device compute', text: 'Detection and planning run on-device; data and compliance stay in the EU.' },
    ] },
    robots: {
      title: 'The specialized line, robot by robot',
      lead: 'Every one of these is the same core module — control, AI and hot-swap batteries — on a different chassis. Keep the brain and the task modules; change the platform to match the ground. Add or remove arms, a gripper, a harvest head or a sensor mast at the quick-release connector.',
      items: [
        {
          image: '/media/chassis-legged.webp',
          alt: 'POLCERO legged robot',
          name: 'Legged robot',
          role: 'Stairs, obstacles, uneven ground',
          body: 'A four-legged chassis that clears stairs, curbs and broken ground no wheel can take. It walks inspection routes through plants, substations and sites laid out for people, not machines.',
          modify: 'Add one or two arms with a gripper for manipulation, or a sensor mast for inspection. Swap to a wheeled or tracked base when the ground turns flat or soft.',
        },
        {
          image: '/media/chassis-tracked.webp',
          alt: 'POLCERO tracked robot',
          name: 'Tracked robot',
          role: 'Unpaved, heavy terrain, construction sites',
          body: 'A tracked chassis for mud, rubble and steep, unpaved ground. It carries load across a construction site or open field where wheels bog down and legs are too slow.',
          modify: 'Fit a logistics carrier for heavy transport, an arm for handling, or a survey mast for BIM inspection. The same body moves to legs or wheels when the job changes.',
        },
        {
          image: '/media/chassis-wheeled.webp',
          alt: 'POLCERO wheeled robot',
          name: 'Wheeled robot',
          role: 'Floors, warehouses, flat ground',
          body: 'A fast, quiet wheeled chassis for industrial floors and warehouses — about 2.5× more energy-efficient than legs on flat ground. Ideal for patrol, monitoring and internal transport.',
          modify: 'Add arms and a gripper for pick-and-place, a sensor mast for monitoring, or a carrier for transport. Move the core module to a tracked base to leave the pavement.',
        },
        {
          image: '/media/chassis-wheelleg.webp',
          alt: 'POLCERO wheel-leg robot',
          name: 'Wheel-leg robot',
          role: 'Flat ground, obstacles and rails',
          body: 'A hybrid wheel-leg chassis: it rolls fast on the flat and, when it meets a step, a curb or a rail, the legs lift the wheels over. One platform for mixed environments that would otherwise need two robots.',
          modify: 'Arms, gripper, harvest head or sensor mast all mount at the quick-release connector. Drop the legs for a pure wheeled base, or add them back when the route gets rough.',
        },
        {
          image: '/media/chassis-arm.webp',
          alt: 'POLCERO arm robot fixed on a platform or machine',
          name: 'Arm on a platform',
          role: 'Production lines, mobile machines, headers',
          body: 'The core module fixed at a single point — on a production line, or mounted on a moving machine or header. On a lettuce-harvest header, for example, the arms cut and lay the crop straight onto the belt as the machine advances.',
          modify: 'Choose one or two arms with a gripper, cutter or harvest head. Mount it stationary on a line, or on any host machine that carries it through the field.',
        },
        {
          image: '/media/chassis-rails.webp',
          alt: 'POLCERO robot running on rails',
          name: 'Robot on rails',
          role: 'Greenhouses, rows, fixed routes',
          body: 'A rail-guided version for greenhouses and glasshouses laid out in fixed rows. It runs the heated pipe rails between crops for precise, repeatable spraying, monitoring and selective harvest.',
          modify: 'Add a spray or fertigation head, a sensor mast or a soft gripper. The same core module lifts off the rails onto a wheeled or wheel-leg base for open ground.',
        },
      ],
    },
  },
  'transport-drone': {
    battery: {
      image: '/media/battery.webp',
      alt: 'POLCERO transport-drone flight battery',
      title: 'Battery and power',
      lead: 'The transport drone flies on its own high-output flight pack and also ferries charged hot-swap packs for the robots it delivers - so they arrive with full batteries and spend their energy on the work, not the journey.',
      rows: [
        { label: 'Battery', value: 'Hot-swap flight pack' },
        { label: 'Pack energy', value: '≈ 30 kWh' },
        { label: 'Endurance at max payload', value: '≈ 20 min' },
        { label: 'Turnaround', value: 'Hot-swap between flights' },
        { label: 'Also ferries', value: 'Charged 48 V robot packs' },
      ],
    },
    drone: {
      images: [
        { src: '/media/p-drone.webp', alt: 'POLCERO transport drone' },
        { src: '/media/drone-duo.webp', alt: 'POLCERO drone carrying a robot' },
      ],
      title: 'The drone carries the robots',
      body: 'Our aim is for the drone to carry robots and humanoids over the longer distances, so the robots keep their energy for the task instead of spending it getting there. The drone also carries interchangeable modules and chassis, so a robot arrives able to pick the task module and platform its environment demands.',
      points: [
        'Robots ride to site with full batteries and land ready to work.',
        'Interchangeable chassis and task modules travel with the drone.',
        'Delivery where the road ends — mountains, sites without paved roads, areas cut off after a flood.',
        'The missing link of the hourly-rental model: one robot serves several clients the same day.',
      ],
    },
  },
  'polcero-os': {
    vision: visionRobot,
  },
};

type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> };
export type ProductRichOverride = DeepPartial<ProductRich>;
type RichSet = Record<string, ProductRichOverride>;

const overrides: Partial<Record<Locale, RichSet>> = { pl, de, fr, es, it, pt, nl, ro, uk, sv, cs, el, zh, hi, ar, ru, ja };

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}
function deepMerge<T>(base: T, over: unknown): T {
  if (over === undefined) return base;
  if (Array.isArray(base)) {
    const o = Array.isArray(over) ? over : [];
    return base.map((item, i) => deepMerge(item, o[i])) as unknown as T;
  }
  if (isObject(base)) {
    const out: Record<string, unknown> = { ...base };
    if (isObject(over)) for (const k of Object.keys(over)) out[k] = deepMerge((base as any)[k], over[k]);
    return out as T;
  }
  return (over as T) ?? base;
}

export function getProductRich(slug: string, locale: Locale): ProductRich {
  const base = en[slug] ?? {};
  const over = overrides[locale]?.[slug];
  return over ? deepMerge(base, over) : base;
}
