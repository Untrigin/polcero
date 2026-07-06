/**
 * ICB Robots branch content — migrated from the legacy polcero.com site.
 *
 * Real content extracted from specICB.md (direct polcero.com scrape, 2026-07-05).
 * Placeholder / Industrium theme content discarded.
 */

// ---------------------------------------------------------------------------
// Company / branch identity
// ---------------------------------------------------------------------------

export interface IcbCompanyInfo {
  fullName: string;
  tagline: string;
  /** Core differentiator — verbatim from the old site (translated) */
  coreDifferentiator: string;
  description: string;
  status: "live" | "pilot" | "development";
  /** Real contact for the ICB branch (from specICB.md) */
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  /** From the site: "since 1980", "40+ years team experience" */
  experience: {
    since: number;
    teamExperienceYears: string;
    industrySectors: string;
  };
}

export const icbCompany: IcbCompanyInfo = {
  fullName: "Polskie Centrum Robotyzacji — ICB Robots",
  tagline: "We connect robots with AI",
  coreDifferentiator:
    "Robots already exist — what is missing are the systems that control them. We build that missing layer: we install knowledge, a plan and eyes (cameras, sensors) into the machine, connect it with artificial intelligence and make it work on its own — without a driver and without constant human supervision.",
  description:
    "ICB Robots is the live operating branch of POLCERO: we design, build and deploy collaborative robots (cobots), autonomous forklifts, AMR platforms and automated production systems for manufacturing, logistics and allied industries. We combine hardware, software and AI into solutions for industry, agriculture and logistics — supporting the client at every stage: from process analysis, through testing in our own facility, to full deployment and service.",
  status: "live",
  contact: {
    email: "biuro@polcero.com",
    phone: "+48 535 777 268",
    address: "Rynek 60/2, 50-116 Wrocław, Dolny Śląsk, Poland",
  },
  experience: {
    since: 1980,
    teamExperienceYears: "40+",
    industrySectors: "4+",
  },
};

// ---------------------------------------------------------------------------
// Product lines — 6 categories from the real site
// ---------------------------------------------------------------------------

export type IcbProductCategory =
  | "cobot"
  | "autonomous-forklift"
  | "amr"
  | "control-center"
  | "autonomous-production"
  | "production-lines";

export interface IcbProduct {
  id: string;
  name: string;
  namePl: string;
  category: IcbProductCategory;
  headline: string;
  description: string;
  /** Verb list from the original site — short capability bullets */
  verbCapabilities: string[];
  targetApplications: string[];
}

export const icbProducts: IcbProduct[] = [
  {
    id: "cobot",
    name: "Collaborative Robots (Cobots)",
    namePl: "Coboty",
    category: "cobot",
    headline: "Support people, automate, supply, assemble, transport",
    description:
      "Our cobots work alongside human operators — no safety cages required in certified configurations. They handle repetitive, ergonomically demanding or precision tasks while humans focus on judgment and quality control. Programmed in Python, C++ and ROS, matched to your process.",
    verbCapabilities: [
      "Support human workers at shared workstations",
      "Automate repetitive or ergonomically demanding tasks",
      "Supply components and materials to the production line",
      "Assemble parts with vision-guided precision",
      "Transport loads between workstations",
    ],
    targetApplications: [
      "Manufacturing assembly",
      "Quality inspection",
      "Packaging and palletising",
      "Machine tending",
      "Welding and dispensing",
    ],
  },
  {
    id: "autonomous-forklift",
    name: "Autonomous Forklifts",
    namePl: "Autonomiczne widlaki",
    category: "autonomous-forklift",
    headline: "Transport, lift, scan, locate, avoid obstacles",
    description:
      "Our autonomous forklifts handle intra-facility logistics 24/7 — picking up pallets or loads, transporting across the facility and placing at the target location without a driver. SLAM navigation: no floor markers or infrastructure changes required. WMS/ERP integration as standard.",
    verbCapabilities: [
      "Transport pallets and loads autonomously across the facility",
      "Lift and place loads at target locations without a driver",
      "Scan barcodes and QR codes for load identification",
      "Locate within the facility via SLAM — no floor markers needed",
      "Avoid obstacles and people in real time",
    ],
    targetApplications: [
      "Warehouse pallet transport",
      "Manufacturing material supply",
      "Cold-storage logistics",
      "Distribution centre operations",
      "Inter-department material flow",
    ],
  },
  {
    id: "amr-platform",
    name: "AMR Platform",
    namePl: "Platforma AMR",
    category: "amr",
    headline: "Enter, lift, carry, navigate, avoid, deliver",
    description:
      "The ICB AMR Platform is a configurable autonomous mobile robot for facility transport. The base platform navigates autonomously via LiDAR SLAM; task modules (conveyor top, shelf, roller, custom fixture) are swapped without changing the platform. Payload: 100–600 kg depending on chassis variant.",
    verbCapabilities: [
      "Enter narrow aisles and lifts autonomously",
      "Lift and carry payloads up to 600 kg",
      "Navigate dynamically, re-routing around obstacles in real time",
      "Avoid people and objects with laser scanners and 3D cameras",
      "Deliver goods to the right station and confirm via WMS",
    ],
    targetApplications: [
      "Intra-factory material transport",
      "Hospital logistics",
      "Warehouse tote and tray transport",
      "E-commerce fulfilment",
      "Agricultural facility internal transport",
    ],
  },
  {
    id: "control-center",
    name: "Control Center",
    namePl: "Centrum kontroli",
    category: "control-center",
    headline: "Monitor, analyse, alert, respond, secure, report",
    description:
      "The ICB Control Center is a supervisory software layer that aggregates data from the entire robot fleet and facility. It monitors operations in real time, detects anomalies, triggers alerts, coordinates responses and generates compliance and productivity reports.",
    verbCapabilities: [
      "Monitor fleet and facility operations in real time",
      "Analyse production and logistics data for bottlenecks",
      "Alert operators to exceptions and anomalies automatically",
      "Respond to incidents by re-routing robots or pausing operations",
      "Secure access and audit trails for compliance",
      "Report on KPIs, throughput and downtime",
    ],
    targetApplications: [
      "Fleet management for multi-robot deployments",
      "Production monitoring and OEE tracking",
      "Safety and compliance reporting",
      "Logistics operations centre",
    ],
  },
  {
    id: "autonomous-production",
    name: "Autonomous Production",
    namePl: "Autonomiczna produkcja",
    category: "autonomous-production",
    headline: "Sort, pack, label, inspect, move, synchronise",
    description:
      "ICB autonomous production systems handle end-of-line and post-production tasks without manual intervention. Vision and AI control the sequence; the robot adapts to product variation in real time. Designed for packaging, labelling and quality-control lines.",
    verbCapabilities: [
      "Sort items by type, size or destination with vision AI",
      "Pack products into boxes, trays or bags",
      "Label packages accurately and audit label placement",
      "Inspect quality at line speed with vision system",
      "Move finished goods to dispatch or storage",
      "Synchronise with upstream and downstream production systems",
    ],
    targetApplications: [
      "Packaging and end-of-line automation",
      "Food and beverage production",
      "Consumer goods and e-commerce",
      "Pharmaceutical packaging",
    ],
  },
  {
    id: "production-lines",
    name: "Production Lines",
    namePl: "Linie produkcyjne",
    category: "production-lines",
    headline: "Optimise, automate, control, integrate, monitor, improve",
    description:
      "We design and automate complete production lines — integrating cobots, AMRs, conveyors and control software into a single orchestrated system. Each line is built to the customer's process; we test it in our own facility before delivery.",
    verbCapabilities: [
      "Optimise production flow and reduce cycle times",
      "Automate previously manual workstations",
      "Control the full line via a unified SCADA / MES interface",
      "Integrate with existing machinery, ERP and WMS",
      "Monitor OEE and flag underperformance automatically",
      "Improve throughput and quality over time via data flywheel",
    ],
    targetApplications: [
      "Manufacturing industry assembly lines",
      "Processing industry automation",
      "Renewable energy component production",
      "Timber and materials processing",
    ],
  },
];

// ---------------------------------------------------------------------------
// Featured product — the only item with published real specifications
// ---------------------------------------------------------------------------

export interface IcbFeaturedProduct {
  name: string;
  namePl: string;
  description: string;
  specs: Array<{ label: string; labelPl: string; value: string }>;
  programmingStack: string[];
  features: string[];
}

export const icbFeaturedProducts: IcbFeaturedProduct[] = [
  {
    name: "AI-controlled precision assembly and manipulation robot",
    namePl: "Robot do precyzyjnego montażu i manipulacji sterowany AI",
    description:
      "Designed for complex tasks with high accuracy. Controlled by our software and AI vision system, it works across different production environments and corrects its own motion in real time. We program it to your process, deploy and service it.",
    specs: [
      { label: "Payload",              labelPl: "Udźwig",             value: "20 kg" },
      { label: "Reach",                labelPl: "Zasięg",             value: "up to 1,800 mm" },
      { label: "Repeatability",        labelPl: "Powtarzalność",      value: "±0.02 mm" },
      { label: "Operating temperature",labelPl: "Temperatura pracy",  value: "0–45 °C" },
      { label: "Warranty",             labelPl: "Gwarancja",          value: "24 months" },
      { label: "Control",              labelPl: "Sterowanie",         value: "Vision + AI" },
    ],
    programmingStack: ["Python", "C++", "ROS"],
    features: [
      "AI vision system for real-time motion correction",
      "Works across different production environments without retooling",
      "Custom programming per process — we configure, deploy and service",
      "Deployable in manufacturing, logistics and quality-control applications",
    ],
  },
  {
    name: "Intelligent 6-axis robotic arms",
    namePl: "Inteligentne ramiona robotyczne 6-osiowe",
    description:
      "Six degrees of movement for complex tasks in limited production space. Compact and easy to integrate — precision and speed wherever floor space is constrained. Available in a ceiling-mounted variant.",
    specs: [
      { label: "Degrees of freedom", labelPl: "Osie ruchu",          value: "6" },
      { label: "Repeatability",      labelPl: "Powtarzalność",       value: "High" },
      { label: "Payload",            labelPl: "Udźwig",              value: "High (contact for spec)" },
      { label: "Mount options",      labelPl: "Warianty montażu",    value: "Floor / Ceiling" },
    ],
    programmingStack: ["Python", "C++", "ROS"],
    features: [
      "High repeatability for precision tasks",
      "High permitted load capacity",
      "Ceiling-mounted version available — saves floor space",
      "Applications: assembly, packaging, welding, quality control",
    ],
  },
];

// ---------------------------------------------------------------------------
// Case studies (from the old site — with their stated stage)
// ---------------------------------------------------------------------------

export interface IcbCaseStudy {
  id: string;
  title: string;
  sector: string;
  stage: "concept" | "rd" | "pilot" | "live";
  stageLabel: string;
  description: string;
}

export const icbCaseStudies: IcbCaseStudy[] = [
  {
    id: "construction-transport",
    title: "Material transport robots on construction sites",
    sector: "Construction",
    stage: "concept",
    stageLabel: "Concept (construction expertise in team)",
    description:
      "Autonomous robots for transporting construction materials — bricks, hollow blocks, prefabricated elements — across active building sites. Concept stage with construction domain expertise in the team.",
  },
  {
    id: "construction-inspection",
    title: "Drones and robots for construction site inspection",
    sector: "Construction",
    stage: "rd",
    stageLabel: "R&D (based on market analysis)",
    description:
      "Drones and mobile robots for inspection, measurement and monitoring of construction sites. Based on analysis of the construction market — R&D stage.",
  },
  {
    id: "warehouse-amr",
    title: "Autonomous internal transport: AMR and forklifts in a warehouse",
    sector: "Logistics",
    stage: "pilot",
    stageLabel: "Pilot",
    description:
      "Autonomous internal transport combining AMR platforms and autonomous forklifts in a warehouse environment. Currently in pilot deployment.",
  },
];

// ---------------------------------------------------------------------------
// Industries served
// ---------------------------------------------------------------------------

export interface IcbIndustry {
  id: string;
  name: string;
  relevantProducts: string[];
  note: string;
}

export const icbIndustries: IcbIndustry[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    relevantProducts: ["cobot", "amr-platform", "autonomous-forklift", "production-lines"],
    note: "Assembly, machine tending, intra-line transport, inspection and palletising on production lines of all scales.",
  },
  {
    id: "agriculture",
    name: "Agriculture",
    relevantProducts: ["amr-platform"],
    note: "Internal transport within agricultural processing facilities, cold stores and packhouses.",
  },
  {
    id: "construction",
    name: "Construction",
    relevantProducts: ["cobot", "amr-platform"],
    note: "Material transport on building sites, prefab assembly, inspection and repetitive construction tasks.",
  },
  {
    id: "logistics",
    name: "Logistics & Warehousing",
    relevantProducts: ["autonomous-forklift", "amr-platform"],
    note: "Pallet handling, trailer loading/unloading, goods-to-person picking and last-touch sortation.",
  },
  {
    id: "services",
    name: "Services",
    relevantProducts: ["amr-platform", "cobot"],
    note: "Hospitality, healthcare logistics, facility services and cleaning/disinfection tasks.",
  },
  {
    id: "renewable-energy",
    name: "Renewable Energy",
    relevantProducts: ["production-lines", "autonomous-production"],
    note: "Component production and assembly automation for renewable energy manufacturers.",
  },
];

// ---------------------------------------------------------------------------
// Delivery workflow (4 steps from the original site)
// ---------------------------------------------------------------------------

export interface IcbWorkflowStep {
  step: number;
  id: string;
  title: string;
  description: string;
}

export const icbWorkflow: IcbWorkflowStep[] = [
  {
    step: 1,
    id: "documentation",
    title: "Project documentation",
    description:
      "We meet with the customer to map the process, document requirements, constraints and success criteria. Output: a feasibility report and concept proposal.",
  },
  {
    step: 2,
    id: "team-project",
    title: "Team project",
    description:
      "Our engineering team designs the robot or AMR system — mechanical, electrical and software — and fine-tunes the AI brain on customer data or process simulations.",
  },
  {
    step: 3,
    id: "completion",
    title: "Build & integration",
    description:
      "Manufacturing and assembly in our own facility. Full factory acceptance test (FAT) and software integration. EU compliance (CE, ISO, NIS2) documentation prepared.",
  },
  {
    step: 4,
    id: "protocol",
    title: "Delivery & commissioning protocol",
    description:
      "On-site installation, site acceptance test (SAT), operator training and handover. Ongoing service under our RaaS / service-level agreement.",
  },
];

// ---------------------------------------------------------------------------
// Aggregated export
// ---------------------------------------------------------------------------

export const icb = {
  company: icbCompany,
  products: icbProducts,
  featuredProducts: icbFeaturedProducts,
  caseStudies: icbCaseStudies,
  industries: icbIndustries,
  workflow: icbWorkflow,
} as const;

export default icb;
