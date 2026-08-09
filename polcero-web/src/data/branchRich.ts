// Rich, per-branch marketing content rendered by BranchDetail below the hero.
// Authored in English (the primary locale); other locales fall back to EN until
// their translation batch lands. Add more branch entries to expand the others.

import type { Locale } from '../lib/i18n';
import { de } from './i18n/branchRich/de';
import { fr } from './i18n/branchRich/fr';
import { es } from './i18n/branchRich/es';
import { it } from './i18n/branchRich/it';
import { pt } from './i18n/branchRich/pt';
import { nl } from './i18n/branchRich/nl';

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
  points?: string[];
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

const aiSystems: RichBranch = {
  stats: [
    { value: '<10 ms', label: 'Edge control latency' },
    { value: 'VLA', label: 'Fine-tuned foundation models' },
    { value: 'RGB-D · LiDAR', label: 'Multi-modal perception' },
    { value: 'Edge + Cloud', label: 'Hybrid architecture' },
  ],
  servicesHeading: {
    eyebrow: 'Capabilities',
    title: 'The intelligence layer',
    desc: 'The same AI stack powers every POLCERO branch. The robot hardware can be your own or from our catalogue - we supply the brain.',
  },
  services: [
    {
      badge: 'CAPABILITY',
      name: 'VLA fine-tuning',
      tagline: 'Foundation models, adapted to your task',
      desc: 'Open VLA models (GR00T N1.7, π0, OpenVLA) fine-tuned on customer data. An abstraction layer lets us swap base models without retraining your task intelligence.',
    },
    {
      badge: 'CAPABILITY',
      name: 'Vision and perception',
      tagline: 'Real-time scene understanding',
      desc: 'YOLO-class detection for real-time object recognition, depth cameras (RGB-D), LiDAR, multispectral and thermal imaging, plus a VLM for scene and language understanding.',
    },
    {
      badge: 'CAPABILITY',
      name: 'Edge + cloud architecture',
      tagline: 'Sub-10 ms control, cloud-scale learning',
      desc: 'On-board edge inference for sub-10 ms control. Cloud for training updates, analytics and fleet management. A data flywheel continuously improves performance.',
    },
    {
      badge: 'CAPABILITY',
      name: 'Classic control where sufficient',
      tagline: 'AI only where it earns its place',
      desc: 'PID controllers for simple, repetitive grasping and cutting - lower cost, higher reliability. We reserve AI for complex perception and scene-understanding decisions.',
    },
    {
      badge: 'CAPABILITY',
      name: 'Fleet management',
      tagline: 'Coordinate many robots as one system',
      desc: 'Central supervision of a mixed robot fleet: task allocation, telemetry, model rollouts and productivity reporting from a single control layer.',
    },
  ],
  processHeading: {
    eyebrow: 'How we engage',
    title: 'From process data to a running brain',
    desc: 'We layer intelligence onto your hardware or ours in four steps.',
  },
  process: [
    { n: '01', title: 'Data & scoping', desc: 'We map the task, collect or simulate process data and define the perception and control requirements.' },
    { n: '02', title: 'Model selection & fine-tuning', desc: 'We pick the right VLA / vision models (or classic control) and fine-tune them on your data behind a stable abstraction layer.' },
    { n: '03', title: 'Integration & edge deployment', desc: 'We integrate the brain with the robot, deploy inference to the edge for low-latency control and validate against acceptance criteria.' },
    { n: '04', title: 'Fleet ops & data flywheel', desc: 'Cloud analytics, model updates and fleet management keep improving performance after go-live.' },
  ],
};

const robots: RichBranch = {
  stats: [
    { value: '4', label: 'Chassis types (W4 · T6 · WL4 · Q4)' },
    { value: '2.5×', label: 'Wheeled energy efficiency vs legged' },
    { value: '1', label: 'Shared AI brain across all builds' },
    { value: 'Plug-and-play', label: 'Standardised task modules' },
  ],
  servicesHeading: {
    eyebrow: 'The modular system',
    title: 'One platform, many robots',
    desc: 'A shared AI brain, a standardised interface, interchangeable chassis and plug-and-play task modules - deployed for any market, to order.',
  },
  services: [
    { badge: 'CORE', name: 'AI brain', tagline: 'The same intelligence on every chassis', desc: 'VLA + YOLO models fine-tuned on customer data. Edge inference and cloud training. The same intelligence layer adapts to every chassis and market.' },
    { badge: 'CORE', name: 'Plug-and-play interface', tagline: 'One integration point for all combinations', desc: 'A standardised mechanical and electrical connector. Swap chassis or task modules without redesigning the intelligence layer - one integration point for all combinations.' },
    { badge: 'CHASSIS', name: 'Chassis family', tagline: 'W4 · T6 · WL4 · Q4', desc: 'W4 (wheeled), T6 (tracked), WL4 (wheel-leg), Q4 (legged). Wheeled platforms are about 2.5 times more energy-efficient than legged on flat ground - matched to terrain and task.' },
    { badge: 'MODULE', name: 'Task modules', tagline: 'The right tool for the job', desc: 'Soft gripper, spray/fertigation head, sensor mast (RGB-D / multispectral / thermal), logistics carrier, remote manipulator - plug in the right tool for the job.' },
    { badge: 'BUILD', name: 'Agricultural robots', tagline: 'Autonomous field platforms', desc: 'Autonomous field platforms for planting, care, precision spray and selective harvest. Sensor fusion of RGB-D + multispectral + thermal for crop-health monitoring.' },
    { badge: 'BUILD', name: 'Construction-site robots', tagline: 'BIM-to-field autonomy', desc: 'BIM-to-field layout, drilling, autonomous earthworks, inspection against a digital twin. Human-supervised autonomy throughout.' },
    { badge: 'BUILD', name: 'Stationary AI machines', tagline: 'Fixed-arm cells and workstations', desc: 'Fixed-arm robots and intelligent workstations for inspection, quality control, repetitive assembly and material handling on production lines.' },
  ],
  processHeading: {
    eyebrow: 'How we deliver',
    title: 'Configured and built to order',
    desc: 'Every robot is assembled from the shared platform and matched to your process.',
  },
  process: [
    { n: '01', title: 'Scope & configure', desc: 'We map the task and choose the chassis, task modules and sensors that fit the terrain and the job.' },
    { n: '02', title: 'Fit the AI brain', desc: 'The shared intelligence layer is fine-tuned on your data and integrated through the standardised interface.' },
    { n: '03', title: 'Build & validate', desc: 'Assembly and testing in our own facility, with a factory acceptance test before delivery.' },
    { n: '04', title: 'Deploy & support', desc: 'On-site commissioning, operator training and ongoing service - modules and chassis can be swapped as needs change.' },
  ],
  aiBrain: {
    eyebrow: 'AI brain',
    title: 'Every build runs on the POLCERO AI brain',
    desc: 'The Robots platform shares the POLCERO AI Systems intelligence layer - VLA models, YOLO-class vision, SLAM navigation and fleet management - fine-tuned on your process data.',
    ctaLabel: 'Learn more about AI Systems',
    ctaHref: '/services/ai-systems/',
  },
};

const farmaAi: RichBranch = {
  stats: [
    { value: 'RaaS', label: 'Robot-as-a-Service, no capex' },
    { value: 'up to -90%', label: 'Chemical use vs blanket spraying' },
    { value: '<1 cm', label: 'Seeding placement accuracy' },
    { value: '5', label: 'Crop-cycle stages automated' },
  ],
  servicesHeading: {
    eyebrow: 'The crop cycle',
    title: 'One AI-farmer brain, the full season',
    desc: 'A fleet of autonomous field robots run by the "AI-farmer" supervisory brain - for large vegetable farms, delivered as Robot-as-a-Service.',
  },
  services: [
    { badge: 'STAGE', name: 'Planting', tagline: 'Precise transplanting and direct seeding', desc: 'Precise row-by-row transplanting or direct seeding with RTK/SLAM navigation. Sub-centimeter placement accuracy on the POLCERO-W4 chassis.' },
    { badge: 'STAGE', name: 'Care - weeding and thinning', tagline: 'No herbicide for detected weeds', desc: 'Computer-vision weed detection plus mechanical or thermal weeding. No herbicide for identified weeds - only targeted spot spray.' },
    { badge: 'STAGE', name: 'Spot spraying / micro-dosing', tagline: 'Chemistry only where it is needed', desc: 'Selective application of fertilizer or plant-protection products only where the AI detects need. Cuts chemical use by up to 90% versus blanket spraying.' },
    { badge: 'STAGE', name: 'Monitoring', tagline: 'A daily crop-health map', desc: 'Daily field scanning with RGB-D + multispectral + thermal cameras. Crop-health map, disease early-warning and harvest-readiness prediction.' },
    { badge: 'STAGE', name: 'Selective harvest', tagline: 'The hardest unsolved gap in agri automation', desc: 'Selective harvesting of delicate vegetables (starting with lettuce heads) - the hardest unsolved gap in agri automation. Soft gripper plus AI maturity detection.' },
  ],
  processHeading: {
    eyebrow: 'How we engage',
    title: 'Robot-as-a-Service, field-first',
    desc: 'We take on the fleet, the operations and the risk - you get the outcome per hectare.',
  },
  process: [
    { n: '01', title: 'Field assessment', desc: 'We survey the farm, crops and season, and agree the target operations and success metrics.' },
    { n: '02', title: 'Fleet & brain setup', desc: 'We configure the field robots and tune the AI-farmer brain to the crop, soil and layout.' },
    { n: '03', title: 'Supervised operation', desc: 'Robots run the crop cycle under human-supervised autonomy; every pass feeds the monitoring map.' },
    { n: '04', title: 'Season review & scale', desc: 'We review yield, input savings and uptime, then scale the fleet for the next season.' },
  ],
  aiBrain: {
    eyebrow: 'AI brain',
    title: 'Powered by the POLCERO AI-farmer brain',
    desc: 'Farma AI runs on the POLCERO AI Systems intelligence layer - vision, perception and fleet management - specialised for agriculture and fine-tuned on your fields.',
    ctaLabel: 'Learn more about AI Systems',
    ctaHref: '/services/ai-systems/',
  },
};

const photonic: RichBranch = {
  stats: [
    { value: 'sub-ns', label: 'Optical matrix-multiply latency' },
    { value: '€1.8B → €14.6B', label: 'Market 2025-2034' },
    { value: '26.3%', label: 'CAGR' },
    { value: '52', label: 'Photonic-compute firms tracked (2026)' },
  ],
  servicesHeading: {
    eyebrow: 'R&D direction',
    title: 'AI compute with light',
    desc: 'A research direction: accelerating AI inference in our robots using light instead of electronics alone - lower power, higher throughput.',
  },
  services: [
    { badge: 'R&D', name: 'Optical matrix multiplication', tagline: 'One optical pass vs thousands of clock cycles', desc: 'Neural-network inference is dominated by matrix-vector multiplication (GEMM). Photonic chips perform it with light passing through Mach-Zehnder interferometer meshes - doing in a single optical pass what electronics need thousands of clock cycles to compute.' },
    { badge: 'R&D', name: 'Hybrid photonic-electronic architecture', tagline: 'Optical math, electronic activations', desc: 'Photonic chips excel at linear operations (matrix math) but not nonlinear ones (activation functions). The consensus architecture pairs optical cores for matrix math with electronic units for activations - a hybrid design taking the best of both.' },
    { badge: 'MARKET', name: 'From €1.8B to €14.6B', tagline: 'A fast-growing accelerator market', desc: 'The global photonic AI-accelerator market, 2025 to 2034 (CAGR 26.3%). As of 2026 we track 52 photonic-computing companies worldwide.' },
    { badge: 'STRATEGY', name: 'Photonics as the future compute layer', tagline: 'Swap the substrate, keep the intelligence', desc: 'As photonic accelerators reach maturity (a 2027-2031 window for datacenter-class products), the POLCERO AI-brain architecture is built to absorb them - the abstraction layer lets us swap the compute substrate without retraining the task intelligence.' },
  ],
};

const data: Record<string, RichBranch> = {
  'icb-robots': icbRobots,
  'ai-systems': aiSystems,
  robots,
  'farma-ai': farmaAi,
  'photonic-processors': photonic,
};

// A deep-partial mirror of a type: every field optional, recursively. Arrays are
// treated by index (each element itself deep-partial), so an override can supply
// only the entries/fields it wants translated.
export type DeepPartial<T> = T extends (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

// Per-locale translation overrides, keyed by slug. Empty for now — translation
// batches are added here later; anything omitted falls back to the English base.
export const branchRichOverrides: Partial<Record<Locale, Record<string, DeepPartial<RichBranch>>>> = { de, fr, es, it, pt, nl };

// Merge an override onto a base: objects recurse, arrays merge element-by-element,
// and an `undefined` override value keeps the base value.
function deepMerge<T>(base: T, over: DeepPartial<T>): T {
  if (over === undefined) return base;
  if (Array.isArray(base)) {
    const ov = over as unknown as unknown[];
    return (base as unknown[]).map((el, i) =>
      i < ov.length ? deepMerge(el, ov[i] as DeepPartial<typeof el>) : el,
    ) as unknown as T;
  }
  if (base !== null && typeof base === 'object') {
    const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const key of Object.keys(over as Record<string, unknown>)) {
      const bv = (base as Record<string, unknown>)[key];
      const ov = (over as Record<string, unknown>)[key];
      result[key] = bv === undefined ? ov : deepMerge(bv, ov as DeepPartial<typeof bv>);
    }
    return result as T;
  }
  return over as T;
}

export function getBranchRich(slug: string, locale: Locale): RichBranch | undefined {
  const base = data[slug];
  if (!base) return undefined;
  const over = branchRichOverrides[locale]?.[slug];
  return over ? deepMerge(base, over) : base;
}
