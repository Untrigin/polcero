// Rich, per-branch marketing content rendered by BranchDetail below the hero.
// Authored in English (the primary locale); other locales fall back to EN until
// their translation batch lands. Add more branch entries to expand the others.

export interface SpecRow { label: string; value: string }
export interface RichProduct {
  name: string;
  desc: string;
  specs: SpecRow[];
  stack?: string[];
  points: string[];
}
export interface ServiceCategory {
  badge: string;
  name: string;
  tagline: string;
  desc: string;
  points: string[];
}
export interface CaseStudy { sector: string; stage: string; title: string; desc: string }
export interface Sector { name: string; desc: string }
export interface ProcessStep { n: string; title: string; desc: string }
export interface Heading { eyebrow: string; title: string; desc?: string }

export interface RichBranch {
  stats?: { value: string; label: string }[];
  productsHeading?: Heading;
  products?: RichProduct[];
  servicesHeading?: Heading;
  services?: ServiceCategory[];
  casesHeading?: Heading;
  cases?: CaseStudy[];
  sectorsHeading?: Heading;
  sectors?: Sector[];
  processHeading?: Heading;
  process?: ProcessStep[];
  aiBrain?: { eyebrow: string; title: string; desc: string; ctaLabel: string; ctaHref: string };
  compliance?: { eyebrow: string; items: string[] };
}

const icbRobots: RichBranch = {
  stats: [
    { value: '1980', label: 'Active since' },
    { value: '40+', label: 'Years of experience' },
    { value: '4+', label: 'Industrial sectors' },
    { value: 'RaaS', label: 'Robotics-as-a-Service' },
  ],
  productsHeading: {
    eyebrow: 'Product specifications',
    title: 'Real data from the ICB catalogue',
    desc: 'Published specifications from the POLCERO / ICB Robots product line.',
  },
  products: [
    {
      name: 'AI-controlled precision assembly and manipulation robot',
      desc: 'Designed for complex tasks with high accuracy. Controlled by our software and AI vision system, it works across different production environments and corrects its own motion in real time. We program it to your process, deploy and service it.',
      specs: [
        { label: 'Payload', value: '20 kg' },
        { label: 'Reach', value: 'up to 1,800 mm' },
        { label: 'Repeatability', value: '±0.02 mm' },
        { label: 'Operating temperature', value: '0-45 °C' },
        { label: 'Warranty', value: '24 months' },
        { label: 'Control', value: 'Vision + AI' },
      ],
      stack: ['Python', 'C++', 'ROS'],
      points: [
        'AI vision system for real-time motion correction',
        'Works across different production environments without retooling',
        'Custom programming per process - we configure, deploy and service',
        'Deployable in manufacturing, logistics and quality-control applications',
      ],
    },
    {
      name: 'Intelligent 6-axis robotic arms',
      desc: 'Six degrees of movement for complex tasks in limited production space. Compact and easy to integrate - precision and speed wherever floor space is constrained. Available in a ceiling-mounted variant.',
      specs: [
        { label: 'Degrees of freedom', value: '6' },
        { label: 'Repeatability', value: 'High' },
        { label: 'Payload', value: 'High (contact for spec)' },
        { label: 'Mount options', value: 'Floor / Ceiling' },
      ],
      stack: ['Python', 'C++', 'ROS'],
      points: [
        'High repeatability for precision tasks',
        'High permitted load capacity',
        'Ceiling-mounted version available - saves floor space',
        'Applications: assembly, packaging, welding, quality control',
      ],
    },
  ],
  servicesHeading: {
    eyebrow: 'Service categories',
    title: 'Six ways to robotise your plant',
    desc: "Every system is built to the customer's order - matched to the process, the plant and the integration requirements.",
  },
  services: [
    {
      badge: 'TO ORDER',
      name: 'Collaborative Robots (Cobots)',
      tagline: 'Support people, automate, supply, assemble, transport',
      desc: 'Our cobots work alongside human operators - no safety cages required in certified configurations. They handle repetitive, ergonomically demanding or precision tasks while people focus on judgment and quality control. Programmed in Python, C++ and ROS, matched to your process.',
      points: [
        'Support human workers at shared workstations',
        'Automate repetitive or ergonomically demanding tasks',
        'Supply components and materials to the production line',
      ],
    },
    {
      badge: 'TO ORDER',
      name: 'Autonomous Forklifts',
      tagline: 'Transport, lift, scan, locate, avoid obstacles',
      desc: 'Our autonomous forklifts handle intra-facility logistics 24/7 - picking up pallets or loads, transporting across the facility and placing at the target location without a driver. SLAM navigation: no floor markers or infrastructure changes required. WMS/ERP integration as standard.',
      points: [
        'Transport pallets and loads autonomously across the facility',
        'Lift and place loads at target locations without a driver',
        'Scan barcodes and QR codes for load identification',
      ],
    },
    {
      badge: 'TO ORDER',
      name: 'AMR Platform',
      tagline: 'Enter, lift, carry, navigate, avoid, deliver',
      desc: 'The ICB AMR Platform is a configurable autonomous mobile robot for facility transport. The base platform navigates autonomously via LiDAR SLAM; task modules (conveyor top, shelf, roller, custom fixture) are swapped without changing the platform. Payload: 100-600 kg depending on chassis variant.',
      points: [
        'Enter narrow aisles and lift autonomously',
        'Lift and carry payloads up to 600 kg',
        'Navigate dynamically, re-routing around obstacles in real time',
      ],
    },
    {
      badge: 'TO ORDER',
      name: 'Control Center',
      tagline: 'Monitor, analyse, alert, respond, secure, report',
      desc: 'The ICB Control Center is a supervisory software layer that aggregates data from the entire robot fleet and facility. It monitors operations in real time, detects anomalies, triggers alerts, coordinates responses and generates compliance and productivity reports.',
      points: [
        'Monitor fleet and facility operations in real time',
        'Analyse production and logistics data for bottlenecks',
        'Alert operators to exceptions and anomalies automatically',
      ],
    },
    {
      badge: 'TO ORDER',
      name: 'Autonomous Production',
      tagline: 'Sort, pack, label, inspect, move, synchronise',
      desc: 'ICB autonomous production systems handle end-of-line and post-production tasks without manual intervention. Vision and AI control the sequence; the robot adapts to product variation in real time. Designed for packaging, labelling and quality-control lines.',
      points: [
        'Sort items by type, size or destination with vision AI',
        'Pack products into boxes, trays or bags',
        'Label packages accurately and audit label placement',
      ],
    },
    {
      badge: 'TO ORDER',
      name: 'Production Lines',
      tagline: 'Optimise, automate, control, integrate, monitor, improve',
      desc: "We design and automate complete production lines - integrating cobots, AMRs, conveyors and control software into a single orchestrated system. Each line is built to the customer's process; we test it in our own facility before delivery.",
      points: [
        'Optimise production flow and reduce cycle times',
        'Automate previously manual workstations',
        'Control the full line via a unified SCADA / MES interface',
      ],
    },
  ],
  casesHeading: {
    eyebrow: 'Case studies',
    title: 'Real deployments and projects',
    desc: 'Stages reflect the status published on the original polcero.com site.',
  },
  cases: [
    {
      sector: 'Construction',
      stage: 'Concept',
      title: 'Material-transport robots on construction sites',
      desc: 'Autonomous robots for transporting construction materials - bricks, hollow blocks, prefabricated elements - across active building sites. Concept stage, with construction domain expertise in the team.',
    },
    {
      sector: 'Construction',
      stage: 'R&D',
      title: 'Drones and robots for construction-site inspection',
      desc: 'Drones and mobile robots for inspection, measurement and monitoring of construction sites. Based on analysis of the construction market - R&D stage.',
    },
    {
      sector: 'Logistics',
      stage: 'Pilot',
      title: 'Autonomous internal transport: AMR and forklifts in a warehouse',
      desc: 'Autonomous internal transport combining AMR platforms and autonomous forklifts in a warehouse environment. Currently in pilot deployment.',
    },
  ],
  sectorsHeading: {
    eyebrow: 'Industry sectors',
    title: 'Where ICB robots work',
    desc: 'ICB systems are deployed in manufacturing, logistics and related industries - matched to the specific process and plant.',
  },
  sectors: [
    { name: 'Manufacturing', desc: 'Assembly, machine tending, intra-line transport, inspection and palletising on production lines of all scales.' },
    { name: 'Agriculture', desc: 'Internal transport within agricultural processing facilities, cold stores and packhouses.' },
    { name: 'Construction', desc: 'Material transport on building sites, prefab assembly, inspection and repetitive construction tasks.' },
    { name: 'Logistics & Warehousing', desc: 'Pallet handling, trailer loading and unloading, goods-to-person picking and last-touch sortation.' },
    { name: 'Services', desc: 'Hospitality, healthcare logistics, facility services and cleaning / disinfection tasks.' },
    { name: 'Renewable Energy', desc: 'Component production and assembly automation for renewable-energy manufacturers.' },
  ],
  processHeading: {
    eyebrow: 'How we deliver',
    title: 'Project lifecycle - built to order',
    desc: 'Every ICB deployment follows a four-stage process, from documentation to on-site commissioning.',
  },
  process: [
    { n: '01', title: 'Project documentation', desc: 'We meet with the customer to map the process and document requirements, constraints and success criteria. Output: a feasibility report and concept proposal.' },
    { n: '02', title: 'Team project', desc: 'Our engineering team designs the robot or AMR system - mechanical, electrical and software - and fine-tunes the AI brain on customer data or process simulations.' },
    { n: '03', title: 'Build & integration', desc: 'Manufacturing and assembly in our own facility. Full factory acceptance test (FAT) and software integration. EU compliance (CE, ISO, NIS2) documentation prepared.' },
    { n: '04', title: 'Delivery & commissioning', desc: 'On-site installation, site acceptance test (SAT), operator training and handover. Ongoing service under our RaaS / service-level agreement.' },
  ],
  aiBrain: {
    eyebrow: 'AI brain',
    title: 'Every ICB robot runs on the POLCERO AI brain',
    desc: 'All ICB products are powered by the POLCERO AI Systems intelligence layer: VLA models, YOLO-class detection, SLAM navigation and fleet management. The same brain is fine-tuned on your process data. Programming: Python, C++ and ROS.',
    ctaLabel: 'Learn more about AI Systems',
    ctaHref: '/services/ai-systems/',
  },
  compliance: {
    eyebrow: 'Compliance & safety',
    items: [
      'CE Marking',
      'ISO 10218 / TS 15066',
      'ISO 18497',
      'NIS2 / CRA',
      'EU Machinery Regulation 2023/1230',
      'Human-in-the-loop',
    ],
  },
};

const data: Record<string, RichBranch> = {
  'icb-robots': icbRobots,
};

export function getBranchRich(slug: string): RichBranch | undefined {
  return data[slug];
}
