/**
 * POLCERO robot catalog — typed list of robots that POLCERO can deploy
 * with its AI brain layer. Each entry reflects real 2024-2025 market data.
 */

export type RobotCategory =
  | 'humanoid'
  | 'amr'
  | 'cobot'
  | 'quadruped'
  | 'specialized'
  | 'construction';

export type MarketStatus = 'pilot' | 'commercial' | 'development' | 'research';

export interface RobotSpecs {
  height?: string;
  weight?: string;
  payload?: string;
  battery?: string;
  speed?: string;
  dof?: string;
  compute?: string;
  accuracy?: string;
}

export interface Robot {
  slug: string;
  name: string;
  manufacturer: string;
  category: RobotCategory;
  applications: string[];
  specs: RobotSpecs;
  marketStatus: MarketStatus;
  /** How POLCERO deploys / integrates this robot */
  polceroNote: string;
  priceRange?: string;
}

// ---------------------------------------------------------------------------
// Humanoids
// ---------------------------------------------------------------------------

const humanoids: Robot[] = [
  {
    slug: 'tesla-optimus-gen3',
    name: 'Tesla Optimus Gen 3',
    manufacturer: 'Tesla',
    category: 'humanoid',
    applications: ['factory automation', 'repetitive assembly', 'material handling'],
    specs: {
      height: '173 cm',
      weight: '57 kg',
      payload: '20 kg',
    },
    marketStatus: 'commercial',
    polceroNote:
      'Our AI brain layer for Tesla Optimus deployments — we fine-tune the task intelligence and fleet management on top of Tesla hardware for European factory clients.',
    priceRange: 'Commercial (limited availability)',
  },
  {
    slug: 'figure-03',
    name: 'Figure 03',
    manufacturer: 'Figure AI',
    category: 'humanoid',
    applications: ['home assistance', 'consumer tasks', 'light manufacturing support'],
    specs: {
      height: '173 cm',
      weight: '61 kg',
      payload: '20 kg',
      battery: '5 h',
    },
    marketStatus: 'pilot',
    polceroNote:
      'POLCERO integrates Figure 03 for home and consumer-facing deployments — our AI brain adds Polish-language interaction and task customisation.',
  },
  {
    slug: 'boston-dynamics-atlas-electric',
    name: 'Atlas (Electric)',
    manufacturer: 'Boston Dynamics',
    category: 'humanoid',
    applications: ['factory', 'warehouse', 'inspection', 'heavy manipulation'],
    specs: {
      height: '189 cm',
      payload: '50 kg',
      dof: '56',
    },
    marketStatus: 'pilot',
    polceroNote:
      'We layer our perception and task-planning AI on Atlas for industrial inspection and warehouse deployments requiring high payload and extreme dexterity.',
  },
  {
    slug: 'agility-digit',
    name: 'Digit',
    manufacturer: 'Agility Robotics',
    category: 'humanoid',
    applications: ['warehouse tote transfer', 'goods handling', 'logistics'],
    specs: {
      payload: '16–22 kg',
      battery: '4–8 h',
    },
    marketStatus: 'commercial',
    polceroNote:
      'Digit is our preferred humanoid for warehouse tote-transfer workflows — POLCERO provides WMS integration and fleet orchestration.',
  },
  {
    slug: 'unitree-g1',
    name: 'Unitree G1',
    manufacturer: 'Unitree Robotics',
    category: 'humanoid',
    applications: ['research', 'light industrial', 'demonstration', 'education'],
    specs: {
      height: '132 cm',
      weight: '35 kg',
    },
    marketStatus: 'commercial',
    polceroNote:
      'The G1 is the most cost-accessible humanoid we deploy (5,500+ units shipped globally in 2025). POLCERO uses it for proofs-of-concept and lower-budget pilot projects.',
    priceRange: '$16,000 – $73,900',
  },
  {
    slug: 'unitree-h1',
    name: 'Unitree H1',
    manufacturer: 'Unitree Robotics',
    category: 'humanoid',
    applications: ['research', 'inspection', 'industrial pilot'],
    specs: {
      height: '180 cm',
      weight: '47 kg',
      dof: '20',
      speed: '3.3 m/s',
    },
    marketStatus: 'commercial',
    polceroNote:
      'H1 is our go-to humanoid chassis for agile locomotion research. We fine-tune our VLA model on H1 for inspection and dynamic environment navigation.',
  },
  {
    slug: 'unitree-h2',
    name: 'Unitree H2',
    manufacturer: 'Unitree Robotics',
    category: 'humanoid',
    applications: ['advanced research', 'commercial pilot', 'high-compute tasks'],
    specs: {
      height: '182 cm',
      compute: '2,070 TOPS',
    },
    marketStatus: 'commercial',
    polceroNote:
      'The H2 on-board compute capacity lets us run heavier AI inference at the edge — ideal for POLCERO deployments where cloud latency is unacceptable.',
  },
  {
    slug: 'apptronik-apollo',
    name: 'Apollo',
    manufacturer: 'Apptronik',
    category: 'humanoid',
    applications: ['manufacturing', 'logistics', 'repetitive handling'],
    specs: {
      height: '173 cm',
      weight: '73 kg',
      payload: '25 kg',
      battery: '4 h (hot-swap)',
    },
    marketStatus: 'pilot',
    polceroNote:
      "Apollo's hot-swap battery system is critical for 24/7 manufacturing deployments. POLCERO layers its task AI and fleet scheduler on top for continuous operation.",
  },
  {
    slug: '1x-neo',
    name: 'NEO',
    manufacturer: '1X Technologies',
    category: 'humanoid',
    applications: ['home assistance', 'consumer', 'light service tasks'],
    specs: {
      height: '168 cm',
      weight: '30 kg',
      payload: '25 kg',
      battery: '4 h',
    },
    marketStatus: 'pilot',
    polceroNote:
      'We partner on NEO for home and service-sector deployments under a RaaS model — our AI brain handles task customisation and remote fleet oversight.',
    priceRange: '~$20,000 / month (RaaS)',
  },
  {
    slug: 'fourier-gr2',
    name: 'GR-2',
    manufacturer: 'Fourier Intelligence',
    category: 'humanoid',
    applications: ['research', 'healthcare rehabilitation', 'clinical assistance'],
    specs: {
      height: '175 cm',
      weight: '65 kg',
      dof: '53',
    },
    marketStatus: 'research',
    polceroNote:
      'POLCERO evaluates the GR-2 for healthcare and rehabilitation pilots — high DOF count enables nuanced assistive tasks that our AI fine-tunes per care protocol.',
  },
];

// ---------------------------------------------------------------------------
// Warehouse & Logistics (AMRs)
// ---------------------------------------------------------------------------

const warehouseRobots: Robot[] = [
  {
    slug: 'boston-dynamics-stretch',
    name: 'Stretch',
    manufacturer: 'Boston Dynamics',
    category: 'amr',
    applications: ['trailer unloading', 'case handling', 'depalletizing'],
    specs: {
      payload: '22.7 kg (case capacity)',
    },
    marketStatus: 'commercial',
    polceroNote:
      'Stretch is our primary robot for automated trailer unloading — POLCERO integrates it with WMS and our fleet AI for autonomous unload scheduling.',
  },
  {
    slug: 'locus-origin',
    name: 'Locus Origin AMR',
    manufacturer: 'Locus Robotics',
    category: 'amr',
    applications: ['picking', 'put-away', 'warehouse transport'],
    specs: {
      payload: '36 kg',
    },
    marketStatus: 'commercial',
    polceroNote:
      'We deploy Locus Origin AMRs in picking workflows with POLCERO fleet orchestration, routing and WMS synchronisation.',
  },
  {
    slug: 'geekplus-shelf-to-person',
    name: 'Shelf-to-Person Robot',
    manufacturer: 'Geek+',
    category: 'amr',
    applications: ['goods-to-person', 'dense storage', 'order fulfilment'],
    specs: {
      payload: '600 kg',
    },
    marketStatus: 'commercial',
    polceroNote:
      'For high-density goods-to-person systems, POLCERO integrates Geek+ shelf robots with its AI picking station and order management layer.',
  },
  {
    slug: 'mir250',
    name: 'MiR250',
    manufacturer: 'Mobile Industrial Robots (Mir)',
    category: 'amr',
    applications: ['facility transport', 'inter-department logistics', 'material flow'],
    specs: {
      payload: '250 kg',
      speed: '2 m/s',
    },
    marketStatus: 'commercial',
    polceroNote:
      'MiR250 AMRs handle heavy inter-department transport in POLCERO factory automation projects — our fleet layer handles traffic and dynamic re-routing.',
  },
  {
    slug: 'omron-ld-250',
    name: 'LD-250',
    manufacturer: 'OMRON',
    category: 'amr',
    applications: ['facility AMR', 'production line supply', 'assembly transport'],
    specs: {
      payload: '250 kg',
      speed: '2.1 m/s',
    },
    marketStatus: 'commercial',
    polceroNote:
      'The LD-250 is used in POLCERO industrial deployments where OMRON PLC ecosystem integration is required alongside our AI fleet management layer.',
  },
];

// ---------------------------------------------------------------------------
// Inspection & Surveillance (Quadrupeds)
// ---------------------------------------------------------------------------

const quadrupeds: Robot[] = [
  {
    slug: 'boston-dynamics-spot',
    name: 'Spot',
    manufacturer: 'Boston Dynamics',
    category: 'quadruped',
    applications: ['inspection', '3D scanning', 'EHS patrol', 'data collection'],
    specs: {
      weight: '32 kg',
      payload: '14 kg',
      battery: '90 min',
    },
    marketStatus: 'commercial',
    polceroNote:
      'Over 1,500 Spot robots are deployed globally. POLCERO layers its Commander AI and inspection mission planner on Spot for autonomous facility patrol and scanning missions.',
  },
];

// ---------------------------------------------------------------------------
// Construction & Specialized
// ---------------------------------------------------------------------------

const constructionRobots: Robot[] = [
  {
    slug: 'dusty-robotics-fieldprinter2',
    name: 'FieldPrinter 2',
    manufacturer: 'Dusty Robotics',
    category: 'construction',
    applications: ['floor layout printing', 'BIM-to-field', 'MEP layout', 'construction layout'],
    specs: {
      accuracy: '1.6 mm',
    },
    marketStatus: 'commercial',
    polceroNote:
      'POLCERO deploys the FieldPrinter 2 for BIM-to-field layout workflows on construction sites — our AI pipeline converts BIM models directly to FieldPrinter job files.',
  },
  {
    slug: 'built-robotics-exosystem',
    name: 'Exosystem',
    manufacturer: 'Built Robotics',
    category: 'construction',
    applications: ['autonomous excavation', 'trenching', 'grading', 'earthworks'],
    specs: {},
    marketStatus: 'commercial',
    polceroNote:
      'The Exosystem is an autonomous retrofit kit for standard excavators. POLCERO integrates it with site planning AI for trenching and grading on infrastructure projects.',
  },
  {
    slug: 'hilti-jaibot',
    name: 'Jaibot',
    manufacturer: 'Hilti',
    category: 'construction',
    applications: ['ceiling drilling', 'MEP installations', 'overhead fastening'],
    specs: {},
    marketStatus: 'commercial',
    polceroNote:
      'Jaibot handles overhead drilling on ceiling-mounted MEP installations — POLCERO integrates Jaibot into multi-robot construction workflows with schedule and BIM sync.',
  },
];

// ---------------------------------------------------------------------------
// Full catalog export
// ---------------------------------------------------------------------------

export const robots: Robot[] = [
  ...humanoids,
  ...warehouseRobots,
  ...quadrupeds,
  ...constructionRobots,
];

/** Convenience look-up by slug */
export function getRobotBySlug(slug: string): Robot | undefined {
  return robots.find((r) => r.slug === slug);
}

/** Filter by category */
export function getRobotsByCategory(category: RobotCategory): Robot[] {
  return robots.filter((r) => r.category === category);
}
