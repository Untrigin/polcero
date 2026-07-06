# PROMPT FOR CLAUDE CLI — Build the new POLCERO corporate website

> Paste this whole text as the first prompt into Claude Code (Claude CLI), running in the project root. The root already contains `styleUntrigin.md` (the design system you MUST reuse) and the project has access to the current, old polcero.com site (ICB robots) which you must analyze and migrate. This prompt is written so Claude CLI executes the whole thing end to end: web research, analysis of the old site, information architecture, content, visual design, internationalization (i18n) and SEO/AI-discoverability.

---

## 0. ROLE & GOAL

You are a senior frontend engineer + content architect. Build a **new, multilingual corporate website for the POLCERO group** — one cohesive site that:

1. Is the **main corporate (holding) site** of the POLCERO group, describing the whole business (based on the investor documents), with a strong emphasis that **everything is built to order** — we design and manufacture only after a customer order (make-to-order / build-to-order).
2. **Migrates and absorbs the existing old ICB-robots site** (currently live on polcero.com) as **one of the group's business branches** — we do not delete that content, we move it into the new structure.
3. Splits the business into **branches (categories)**, each with its own subpage under its own URL (e.g. `/robots-icb`, `/ai-systems`, `/robots`, `/photonic-processors`, `/farma-ai`, `/commander`, …).
4. Is built **exactly in the design system described in `styleUntrigin.md`** (violet/indigo accent, glassmorphism, Space Grotesk + Inter, bento grid, light/dark theme, scroll-reveal).
5. Is **multilingual** (see §16) and fully **SEO- and AI-assistant-optimized** (see §17) so it ranks well in search and is easy for AI chats (Claude, Gemini, ChatGPT, Perplexity) to cite.

Treat this as a real production project: complete code, real localized content, ready to `npm run dev`.

---

## 1. TECH STACK (mandatory — consistent with `styleUntrigin.md`)

- **Next.js 14 (App Router)** + TypeScript.
- **Tailwind CSS v3** + custom classes in `globals.css` (port the tokens and classes from `styleUntrigin.md` 1:1).
- Fonts: **Space Grotesk** (headings, `.font-display`) + **Inter** (body), loaded via `next/font`.
- **lucide-react** (icons), **framer-motion** (hero), and a `useScrollReveal()` hook with `[data-animate]` (exactly as in `styleUntrigin.md`).
- Light/dark via `[data-theme='dark']` + a theme toggle in the header (persist in `localStorage`, respect `prefers-color-scheme`).
- **i18n**: use `next-intl` (App Router `[locale]` segment) — see §16. All visible copy comes from message catalogs, never hardcoded.
- Contact/order forms: the front POSTs JSON to `/api/contact` (build a route handler + the EmailLabs integration described in §15 of `styleUntrigin.md`; SMTP via `.env` variables — NEVER hardcode secrets).

### 1.1. Required preliminary steps — before writing any UI

1. **Read `styleUntrigin.md` in full** and extract: CSS variables (light + dark), the `body` gradient, all component classes (`.glass-card`, `.nl-card`, `.bento-card`, `.btn-premium`, `.btn-secondary`, `.modern-input`, `.nl-chip`, `.text-gradient`, `.ambient-glow`, `.code-preview`, `.model-tab-btn`), the hero/header/footer/section patterns and the scroll-reveal animation. Recreate them in `globals.css` with no color deviations.
2. **Analyze the current, old polcero.com (ICB robots).** Open `https://polcero.com` and crawl ALL subpages (sitemap, menu, footer, internal links). For each subpage record: URL, title, headings, full text, list of ICB robot products/models, specs, images (URLs), downloadable files, contact data and CTAs. Produce a working file `MIGRATION_ICB.md` (inventory), then recreate that content in the new "ICB Robots" branch. **Do not invent** ICB content — migrate the real content. If a page can't be fetched, list it in `MIGRATION_ICB.md` as "manual-fill needed" and leave a clear placeholder in code.
3. **Do web research** on robots (§9) and photonics (§6.5) and save gathered data to `RESEARCH_ROBOTS.md`, so the subpage content is current and accurate.

---

## 2. BRAND IDENTITY & POSITIONING

- **Name:** POLCERO — **Polskie Centrum Robotyzacji** (English: "Polish Robotics Center").
- **One-liner (hero):** "We design and build robots, their AI brains and components in Poland — to order."
- **Subtitle (gradient):** "One technology platform. Many markets. Our own production and energy."
- **Core corporate message:** POLCERO is a **group (holding)** built on one modular platform (a shared AI brain + interchangeable chassis and modules), serving many markets, with manufacturing in Poland and its own energy. **Nothing off the shelf — everything is designed and built to the customer's order (make-to-order).**
- **Philosophy (from the docs):** "one brain, many bodies" — AI brain + plug-and-play interface + interchangeable chassis + interchangeable task module. A new market = a new combination of existing building blocks, not a new project from scratch.
- **Tone:** matter-of-fact, engineering-led, credible, "honest positioning" (we build capabilities; we don't over-promise finished products where they don't exist — especially for space/defense). No marketing hype.
- **Contact (footer + contact pages):** Arkadiusz Wiktorowicz · POLCERO · `arek@polcero.com` · tel. **+48 731 707 230**. Entity: POLCERO sp. z o.o., KRS 0001178417, NIP 8971955510, REGON 542000919.

### 2.1. The "to order" principle (thread it through the whole site)
Every branch and product page must clearly state the model: **customer submits an inquiry → we design/fine-tune/manufacture → we deliver and service**. The CTA is consistently **"Request a quote / Submit an inquiry"**, never "Buy now". For robots and AI systems, additionally the **RaaS/HaaS** model (rental with service) where it fits.

---

## 3. ⚠️ SENSITIVE DATA — WHAT NOT TO PUBLISH

The source materials are confidential. On the public site **DO NOT INCLUDE** the following. Use generalities instead of specifics:

- ❌ Concrete **investment-round parameters**: amounts (e.g. 3.5M EUR), pre/post-money valuation, 25% equity, Series A/B levels, 18-month runway, PARP grant amount (~150M zł), fundraising deadlines (e.g. "July 16"). → Instead: a neutral "For investors" page/section with a contact form and a general description ("we are in investor conversations — contact us for materials"). No numbers.
- ❌ **First agricultural customer's data**: the international/British group, ~500 ha in PL, ~400 seasonal workers, farms in 6 EU countries + USA/Africa/Asia, labor cost 8,000 zł/person/month, RaaS rent 3.0–3.5k zł/month, worker origin countries. → Instead, generally: "we work with large vegetable farms in the EU", no numbers and no identifying the customer.
- ❌ **Internal names and roles** beyond the official contact (Arkadiusz Wiktorowicz). Don't publish the full team list, RACI, FTE, ownership structure, or names (Kamil Rudyk, Mateusz Mika, Artur Mosak, Mateusz/Maksymilian, etc.). "Team" section — optionally generic: "an interdisciplinary team of robotics, AI and manufacturing engineers".
- ❌ **Internal budgets, component purchase prices, margins, cost estimates**, per-entity grant details, program deadlines, program names presented as commitments.
- ❌ **Named technology partners tied to sensitive claims**: do not present ByteDance/BytePlus/Meta as confirmed partners/investors. You may describe the AI strategy generically (open, commercially-licensed VLA models + our own data/fine-tuning). No supply-chain-risk or foreign-capital discussion.
- ❌ **Operational defense details.** Describe defense / dual-use **generally and cautiously** (see §6.7) — no weapon systems, no tactics, no technical details that could give operational uplift. Focus the message on "unmanned platforms for civil and dual-use applications, humanitarian demining, critical-infrastructure protection, reconnaissance/surveillance with a human in the loop".

✅ **Safe to publish:** the multi-market platform vision, the branches and their applications, the chassis family (designations and types), the technology and AI layers (VLA, edge+cloud, data flywheel), compliance (CE, ISO 18497, NIS2/CRA), the business model (RaaS / sale+service / licensing / energy), the manufacturing location (Poland/EU, Kietrz, Silesia — generally), the energy pillar (renewables cluster, hydrogen), the roadmap as general phases, and general market size ranges (as illustrative industry figures, not company revenue forecasts).

If you hit any other value that looks confidential (a numeric cost, a name, an internal agreement) — **default to not publishing it**, replace with a generality, and log it in `OMITTED_DATA.md`.

---

## 4. INFORMATION ARCHITECTURE (sitemap)

Build the following route structure (App Router, under a `[locale]` segment for i18n). Menu labels are localized; slugs stay ASCII/English and stable across locales.

```
/[locale]/                       → Corporate home (POLCERO holding)
/[locale]/about                  → About the group: vision, platform, "to order", production & energy (no sensitive data)
/[locale]/branches               → Overview of all branches (hub with cards → links to subpages)

  /[locale]/robots-icb           → BRANCH: ICB Robots (migration of the old polcero.com)
  /[locale]/ai-systems           → BRANCH: AI Systems for robots (the AI "brain" / VLA for existing robots)
  /[locale]/robots               → BRANCH: Robots (POLCERO platform + specialized robots, to order)
  /[locale]/farma-ai             → BRANCH: Farma AI (agriculture AI brain "AI-farmer" + agri robots)
  /[locale]/commander            → BRANCH: Commander (AI command system for dual-use / defense & security)
  /[locale]/photonic-processors  → BRANCH: Photonic processors (photonics / compute — R&D direction)
  /[locale]/energy               → BRANCH: Energy & infrastructure (renewables cluster, hydrogen)
  /[locale]/manufacturing        → BRANCH: Manufacturing & components in Poland/EU (make-to-order, carbon fiber, electronics)

  /[locale]/robots/[slug]        → Single robot reference page (e.g. /robots/unitree-g1, /robots/spot, …)

/[locale]/solutions              → Applications by market (each a section or subpage)
  /[locale]/solutions/agriculture      → Agriculture (links to /farma-ai for the AI brain)
  /[locale]/solutions/construction     → Construction robots (AI site manager, inspection, layout, BIM)
  /[locale]/solutions/warehouse        → Loading/unloading, warehouse logistics
  /[locale]/solutions/services         → Uniformed services & critical infrastructure
  /[locale]/solutions/industry         → Manufacturing industry (Gen II: sewing, furniture)

/[locale]/investors              → Neutral investor page (NO numbers; contact form + general description)
/[locale]/contact                → Inquiry form (make-to-order) + contact details
```

> Notes: "Energy" and "Manufacturing" may alternatively live as strong, anchored sections in `/about` — but keep them at least as clearly delineated blocks. The **mandatory branches with their own subpages** are: **ICB Robots, AI Systems, Robots, Farma AI, Commander, Photonic Processors** (plus Energy and Manufacturing). Add more if the research/documents justify it (e.g. Space as an "R&D" card, not a prominent branch).

---

## 5. CORPORATE HOME (`/[locale]/`) — section by section

Use the patterns from `styleUntrigin.md` (hero with `ambient-glow`, `data-animate`, bento grid, zebra-strip, footer). Order:

1. **Header** (sticky, glass): POLCERO logo, nav (About, Branches, Solutions, Investors, Contact), **language switcher**, theme toggle, CTA `Submit an inquiry`.
2. **Hero:** badge "POLISH ROBOTICS CENTER"; H1 "Robots, AI brains and components — designed and built in Poland, to order."; H2 gradient "One platform. Many markets. Our own production and energy."; short paragraph (2–3 sentences of the vision); CTAs: `Explore our branches` (→ /branches) + `Submit an inquiry` (→ /contact). Stats strip (general, no sensitive numbers): e.g. "8 business branches", "Made in PL/EU", "Model: to order (RaaS/BTO)", "Compliant: CE · ISO 18497 · NIS2".
3. **Trust bar / pillars:** the three pillars from the docs — **Robotics platform** (shared AI brain + interchangeable chassis/modules), **Manufacturing in Poland** (Kietrz, Silesia), **Own energy** (renewables cluster + hydrogen). Three `bento-card`s with lucide icons.
4. **Business branches (key section):** a bento grid of cards, one per branch, each with icon, name, one-line description and an arrow CTA linking to the subpage:
   - **ICB Robots** → `/robots-icb`
   - **AI Systems for robots** → `/ai-systems`
   - **Robots (platform + specialized)** → `/robots`
   - **Farma AI** → `/farma-ai`
   - **Commander (dual-use AI system)** → `/commander`
   - **Photonic processors** → `/photonic-processors`
   - **Energy & infrastructure** → `/energy`
   - **Manufacturing & components** → `/manufacturing`
   Use the "Product/Feature Card" pattern from §9 of `styleUntrigin.md` (badge e.g. "TO ORDER" / "R&D" / "LIVE" for ICB / "DUAL-USE" for Commander).
5. **How we work (make-to-order):** 4 steps in `nl-card`s: Inquiry → Design / AI fine-tuning → Manufacturing in PL/EU → Delivery + service (RaaS/HaaS). Emphasize: "nothing off the shelf — everything for a specific deployment".
6. **Technology core (platform):** a zebra-strip section: the four platform layers (shared AI brain · plug-and-play interface · chassis family · interchangeable task modules) + a mini chassis-family table (see §6.3). Add a `code-preview`-style tile showing the "AI stack" (VLA + YOLO + edge/cloud) — decorative, in the `styleUntrigin.md` style.
7. **Solutions by market:** cards: Agriculture / Farma AI, Construction, Warehouse & logistics, Uniformed services & critical infrastructure, Industry. Each links to `/solutions/...`. (Mention defense/space cautiously as "dual-use / R&D" — see Commander branch.)
8. **Production & energy (ecosystem):** a short block about the closed ecosystem: manufacturing in PL/EU + renewables cluster + hydrogen; benefit: lower cost, supply-chain control, EU compliance. No budgets.
9. **Compliance & safety:** a `nl-chip` chip bar: CE / Machinery Regulation (EU) 2023/1230, ISO 18497, NIS2, Cyber Resilience Act, security-by-design, human-in-the-loop.
10. **Final CTA:** "Have a task to robotize? We'll build it to order." → form / `/contact`.
11. **Footer** (pattern from `styleUntrigin.md`): columns — Branches, Solutions, Company (About, Investors, Contact), contact details + entity (KRS/NIP/REGON), language switcher. Social optional.

---

## 6. BRANCHES — WHAT EACH SUBPAGE MUST CONTAIN

Shared branch-subpage template: branch hero (badge + H1 + gradient sub + description) → "what we do / what we can build" → application examples → (optional catalog/specs) → a "to order" section with CTA → related branches. Keep `bento-card`/`nl-card`, `data-animate`.

### 6.1. `/robots-icb` — ICB Robots (MIGRATION of the old site)
- **Content source = the current polcero.com.** Migrate the real content: ICB robot descriptions, models, applications, specs, images, files. Build it as a full branch subpage + optional per-model sub-subpages if the old site had them (`/robots-icb/[model]`).
- Preserve the meaning and data of the original; only **restyle visually** to the `styleUntrigin.md` system and embed it in the narrative "this is one of the POLCERO group's branches".
- If the old site had a form/contact — replace it with the new CTA "Submit an inquiry".
- Anything you can't fetch: list it in `MIGRATION_ICB.md` and leave a placeholder with a `{/* TODO: fill from original polcero.com */}` comment.

### 6.2. `/ai-systems` — AI Systems for robots (the AI "brain")
The flagship new offering: **we build an AI system that becomes the brain of an existing robot** (humanoid or specialized). Describe:
- **Idea:** the robot (hardware) already exists on the market — we supply the **intelligence layer**: perception, planning, control, autonomy, fleet management. So one robot can take over repetitive human work.
- **Stack (from the docs, public):** open **VLA (vision-language-action)** models under commercially-permissive licenses (e.g. NVIDIA Isaac GR00T (N1.7 fully commercial), Physical Intelligence π0/π0.5, OpenVLA), **fine-tuned on our own data**; lightweight **YOLO**-class vision for detection; **edge + cloud** (on-board perception/control, training/analytics in cloud/HPC); a **data flywheel**; an abstraction layer so base models can be swapped. Emphasize that **the critical IP is the data, fine-tuning, integration and fleet logic — not the base model.**
- **Two-system architecture:** System 2 (a VLM — scene/language understanding) + System 1 (a motion policy, high frequency); action chunking; bounded latency. (These are real, current concepts from the research — use them matter-of-factly.)
- **Classic control where it's enough:** grasping/cutting can use a classic PID controller; reserve AI for perception and scene-understanding decisions — lowers cost and risk.
- **What it replaces / what it's for:** analyze and list the jobs/tasks the AI brain + robot can take over. Expand the below and **add your own** from the research:
  - **Site manager / construction supervision:** autonomous site walks (360°/LiDAR scan), progress comparison to the **BIM** model, deviation detection, EHS reports, "as-built" documentation, inspection of hazardous zones. (Also analyze and describe related roles that can be robotized: **QA/quality inspector on site, surveyor/layout, EHS coordinator, inventory & reality capture, site security monitoring**.)
  - **Loading and unloading in warehouses:** unloading trailers/containers, palletizing/depalletizing, order picking, moving boxes between zones, internal transport (AMR), sorting. (Also analyze and describe: **forklift operator, order-picking worker, packer, receiving/dispatch controller, loading-dock handling, cycle counting, goods-to-person operation**.)
  - **Further (expand per research):** production-line operation and repetitive industrial work; patrol/surveillance and critical-infrastructure inspection; rounds and readings in energy/water/mining; simple household/utility work (Gen III — long horizon).
- **Engagement model:** we integrate our brain with the customer's robot or one chosen from the catalog (see `/robots`); deployment to order; RaaS / software license + service.
- **Compliance:** ISO 18497 (agriculture), EU Machinery Regulation, NIS2/CRA, security-by-design, human-in-the-loop / safe stop.
- **Cross-links:** `/farma-ai` (agriculture variant "AI-farmer") and `/commander` (dual-use variant) are specializations of this same brain — link to both.

### 6.3. `/robots` — Robots (POLCERO platform + specialized robots to order + catalog)
Three content layers:

**(a) The POLCERO platform (modular).** Describe the four layers (AI brain, plug-and-play interface, chassis family, modules) and the **chassis family** (public designations from the docs):

| Designation | Type | Main environment | Example markets |
|---|---|---|---|
| POLCERO-W4 | wheeled (swerve / 4WIS) | flat, hard: field, halls, city | agriculture, services, logistics |
| POLCERO-T6 | tracked (heavy) | soft ground, rubble, rough terrain | construction, rough terrain, dual-use |
| POLCERO-WL4 | wheel-leg hybrid | inter-rows, stairs, obstacles | inspection, special services, hard agriculture |
| POLCERO-Q4 | quadruped | irregular terrain, inspection, interiors | surveillance, inspection, industry |

Selection rule: on flat ground wheels are ~2.5× more energy-efficient than legs → the base for fields/halls is W4/T6, and Q4/WL4 are reserved for irregular terrain and special tasks. Energy realism (from the docs): legged platforms under load realistically run ~1.5–2 h, so treat the battery as a buffer — multi-variant energy architecture (grid in halls/greenhouses, trolley lines with buffer battery in the field, hot-swap/docking where infrastructure doesn't pay off). Electric drive only (not combustion), LFP chemistry.

**(b) Specialized robots to order.** Based on the investor docs, describe **what we can build for a customer** (make-to-order), grouped by application — no prices, no customer data:
- agricultural robots (harvesting delicate vegetables, care, spot spraying, on-farm transport) — more in `/farma-ai`;
- construction-site robots (heavy material transport, site logistics, progress scanning vs BIM, EHS inspections, work in hazardous zones);
- patrol/inspection robots for services and critical infrastructure (surveillance, event & gas detection, telerobotic reconnaissance);
- unmanned dual-use platforms (cautiously — see §6.7 and the Commander branch);
- stationary AI machines / automated lines for manufacturing industry (Gen II);
- eventually general-purpose utility robots (Gen III) — as vision/R&D.
Add interchangeable **task modules** as the robot's "hands": planting, delicate-harvest soft gripper/knife, spot spray/fertigation, care module, sensor head (RGB-D/multispectral/thermal), logistics/load module, remote manipulator (telerobotics).

**(c) Robot catalog (reference, from research).** Build a grid of cards of humanoid and specialized robots on the market that we **can integrate with our AI brain or select for a deployment** (framing: "we integrate and fine-tune — we're not the manufacturer of these platforms unless noted"). Each card → `/robots/[slug]`. Content and data in §9.

### 6.4. `/farma-ai` — Farma AI (NEW BRANCH: agriculture AI brain "AI-farmer" + agri robots)
This is the agriculture specialization of the AI brain ("AI-farmer") plus the field-robot fleet. Build it from the Farma AI document, **omitting sensitive data** (§3). Allowed content:
- **What it is:** an autonomous system = a fleet of field robots + a superordinate **"Farma AI" brain** (soil sensors, vision, harvest scheduling, fleet management, a field digital twin).
- **What the robot does:** the full crop cycle — planting, care (weeding, **spot spray / micro-dosing**), monitoring, **selective harvest of delicate vegetables** (starting with lettuce heads). Interchangeable task modules.
- **Why it's hard (innovation):** selective harvesting of lettuce heads is the "last frontier" of agri automation; weeding/thinning and baby-leaf harvest are already commercial — we target the unsolved gap + integration of the whole cycle.
- **Perception:** RGB-D + multispectral + thermal; YOLO + VLA; RTK/SLAM navigation.
- **Fleet energy:** electric drive, **LFP** chemistry, battery swap/docking; IP67 (generally).
- **Value:** less chemistry and water (point decisions), harvest in the optimal window, resilience to labor shortages, made in PL/EU.
- **Compliance:** ISO 18497, EU Machinery Regulation (2023/1230, from 20 Jan 2027), NIS2/CRA, security-by-design, human-in-the-loop.
- **Model:** Robot-/Harvest-as-a-Service (rental with service) + Farma AI license. CTA "Submit an inquiry".
- **DO NOT publish:** the customer, hectares, worker counts, labor costs, RaaS rent, budgets, grants, names. Market size may be given as a general order of magnitude, not tied to any customer.
- Cross-link to `/ai-systems` (the general brain) and `/solutions/agriculture`.

### 6.5. `/commander` — Commander (NEW BRANCH: AI command system for dual-use / defense & security)
The dual-use specialization of the AI brain, named **"Commander"** in the docs (the industrial/surveillance/defense counterpart of "AI-farmer"). Position it **cautiously and defensively** (see §6.7). Build:
- **What it is:** "Commander" — a supervisory AI command layer and advisory interface/avatar that aggregates the state of the whole fleet, plans missions, and enables supervised autonomy and teleoperation, with **a human in the decision loop**. The same AI core as AI-farmer, a different domain overlay.
- **Capabilities (describe generally):** reconnaissance and observation (day/night optical head), surveillance and protection of objects and critical infrastructure, field/logistics support (carrying supplies over rough terrain), threat neutralization via **telerobotics** (remote reconnaissance/neutralization of hazards — e.g. humanitarian demining), resilient communications (mesh network + an independent channel that works without infrastructure).
- **Platform fit:** typically POLCERO-Q4 (quadruped) and POLCERO-T6 (tracked) chassis; modular "plug-and-play" mission kits.
- **Framing:** dual-use / security applications; civil and defense synergy on one platform; made in EU (supply-chain security). Emphasize the **human-in-the-loop** and legal/ethical boundaries; compliance with EU/national law and export-control (dual-use) regimes.
- **STRICTLY avoid:** weapon systems, targeting, tactics, operational/technical detail that could provide uplift; any specific program/contract/partner. Keep it high-level and policy-aware.
- **Model:** to order; joint R&D and pilots. CTA "Discuss a project".
- Cross-link to `/ai-systems`, `/solutions/services`, and (cautiously) the defense note in `/about`.

### 6.6. `/photonic-processors` — Photonic processors
- Build a **"Photonic processors / photonics"** branch as the group's compute R&D direction: describe generally the idea of **photonic computing** (processing information with light rather than electronics alone), its potential for **accelerating AI / edge inference**, lower power and higher throughput for the models that drive robots.
- **Do web research** (photonic AI chips 2025–2026, e.g. photonic inference accelerators, optical matrix multiplication) and describe the state of the art **matter-of-factly, without hype**, clearly marking what is the **group's R&D direction** vs a mature market. Tie it to the rest: "photonics as a future compute layer for our robots' AI brains".
- Model: R&D and projects to order / partnerships. CTA: "Discuss an R&D project".
- If you find no hard, public POLCERO data about its own photonic processors — **don't invent a finished product**; describe it as an R&D branch and vision (consistent with "honest positioning").

### 6.7. Defense / dual-use and space — CAUTION
- When creating this content, do it **generally and defensively**. Allowed messages: "unmanned ground platforms for civil and dual-use applications", "humanitarian demining", "protection and inspection of critical infrastructure", "jam-resistant navigation (GPS-denied) as a base technology". **Do not** describe weaponry, tactics, or technical detail that gives operational advantage. No program/contract data.
- **Space** should be presented as **R&D / a development direction** on the shared core (locomotion and autonomy in extreme environments), with "honest positioning": we build capability, we don't claim a finished rover. Best as a small block in `/about` or an "R&D" card — not a prominent standalone branch.

### 6.8. `/energy` and `/manufacturing` (backbone branches)
- **Energy:** an energy cluster (producer + consumer in one location), renewables, **hydrogen** and storage; benefit: cheaper robot production and AI training, selling surpluses to nearby towns/plants. Mention synthetic fuels from coal **only** as a considered "bridge option", with the EU regulatory caveat (or omit). No budgets or project-finance numbers.
- **Manufacturing & components:** production and assembly in Poland/EU (Kietrz; post-industrial Silesian sites — generally), competencies: electronics, **carbon fiber**, mechanics/chassis, integration. Message: "we design and manufacture components and whole robots to order, with quality control and EU compliance".

---

## 7. `/solutions/agriculture` — and the other solution pages

For agriculture, keep the deep detail in `/farma-ai`; `/solutions/agriculture` is a market-framed entry that links there. For each market page (construction, warehouse, services, industry): hero → problem (labor shortages, cost, safety) → what we do (robot + AI brain + modules) → **which jobs/tasks we replace** (the expanded lists from §6.2) → which robots/chassis fit (links to `/robots` and the catalog) → compliance → CTA. Base the specifics on `RESEARCH_ROBOTS.md` (§9) so examples are real (e.g. construction: reality capture/BIM, layout, inspection; warehouse: trailer unloading, palletizing, picking, AMR, goods-to-person).

---

## 8. (reserved) — see §7 for the solution-page template.

---

## 9. ROBOT RESEARCH + CATALOG `/robots/[slug]`

**Do web research** and build `RESEARCH_ROBOTS.md`, then a catalog of cards + subpages. Framing on the site: "platforms we integrate with our AI brain or select for a deployment" (don't pretend they're our products). Cover at least the below (verify and refresh data online — prices/status change; give ranges and a date):

**Humanoids:** Tesla Optimus (Gen 3 / V3), Figure 03 (Helix), Boston Dynamics Atlas (electric), Agility Robotics Digit, Unitree G1 / H1 / H2, Apptronik Apollo, 1X NEO, Fourier GR-2, AgiBot, UBTECH Walker S, Neura 4NE-1, Engineered Arts Ameca, Kawasaki Kaleido. (Segment by use: factory, warehouse, healthcare/rehab, research/education, customer service, home.)

**Specialized — warehouse/logistics:** Boston Dynamics Stretch (trailer unloading, suction gripper), Agility Digit (logistics), AMRs: Locus Robotics, Geek+, Fetch/Zebra, MiR (Teradyne), OMRON LD/HD, KUKA KMP; goods-to-person: AutoStore, Symbotic; palletizing/depalletizing (ABB/FANUC/UR cobots); autonomous forklifts/AGVs.

**Specialized — construction:** Boston Dynamics Spot (inspection/reality capture, LiDAR scan, BIM), Dusty Robotics FieldPrinter (layout), Rugged Robotics, Hilti Jaibot (MEP drilling), Built Robotics (autonomous earthmoving), TyBot/IronBot (rebar tying), FBR Hadrian X / SAM100 (masonry), Canvas (finishing), drones: DroneDeploy/Skydio/DJI.

**Specialized — other:** inspection quadrupeds (Spot, Unitree Go/B2, ANYbotics), industrial AMRs, cobots (UR, FANUC, ABB, KUKA).

For each robot subpage `/robots/[slug]` (card + page): name, manufacturer, category (humanoid/AMR/cobot/quadruped/specialized), typical applications, key public specs (height/weight/payload/range/battery — if public), market status (pilot/commercial/dev), and a **POLCERO block**: "How we deploy it — our AI brain, modules, RaaS, to order" + CTA `Ask about deployment`. Use `generateStaticParams`, a shared `RobotCard` and `RobotPage`, data in typed `content/robots.ts`.

**Citation/legal:** don't copy source descriptions verbatim — paraphrase in your own words. Don't use others' photos without rights; use placeholders/icons or mark `{/* TODO: own / licensed image */}`.

---

## 10. COMPONENTS TO BUILD (React/TSX)

- `Header`, `Footer`, `ThemeToggle`, `LocaleSwitcher`, `AmbientGlow`, `SectionHeader`, `BentoGrid`, `BentoCard`, `BranchCard`, `RobotCard`, `SolutionCard`, `StepFlow` (how we work), `ChassisTable`, `ChipRow`, `CTASection`, `ContactForm`/`OrderForm` (POST → /api/contact), `useScrollReveal` (hook), `JsonLd` (structured-data injector), `Breadcrumbs`.
- All styled with the `globals.css` classes ported from `styleUntrigin.md`. No inline hex values other than the defined variables.
- Responsiveness per the `styleUntrigin.md` breakpoints (mobile-first; grid 2-col `sm:`, 3-col `lg:`, 4-col `xl:`; `max-w-7xl` / `max-w-4xl`).
- Accessibility: semantic HTML, `aria-*` on the toggle, nav and locale switcher, focus states, contrast in both themes, `prefers-reduced-motion` disables animations.

---

## 11. PROJECT STRUCTURE (proposed)

```
/ (root — styleUntrigin.md lives here)
  app/
    [locale]/
      layout.tsx            (fonts, theme, Header/Footer, background, <html lang>, i18n provider)
      page.tsx              (home)
      about/page.tsx
      branches/page.tsx
      robots-icb/page.tsx          (+ [model]/page.tsx if needed)
      ai-systems/page.tsx
      robots/page.tsx              (+ [slug]/page.tsx catalog)
      farma-ai/page.tsx
      commander/page.tsx
      photonic-processors/page.tsx
      energy/page.tsx
      manufacturing/page.tsx
      solutions/page.tsx           (+ agriculture, construction, warehouse, services, industry)
      investors/page.tsx
      contact/page.tsx
    api/contact/route.ts
    globals.css            (tokens + classes from styleUntrigin.md)
    sitemap.ts, robots.ts, manifest.ts
  i18n/
    request.ts, routing.ts
  messages/
    en.json, pl.json, de.json, fr.json, es.json, it.json, … (see §16)
  components/              (as in §10)
  content/
    branches.ts           (branch data, localized keys)
    robots.ts             (robot catalog from research)
    solutions.ts          (markets/applications)
    icb.ts                (content migrated from the old site)
  lib/ (email, seo, utils)
  public/ (logo, og images, placeholders, robots meta)
  MIGRATION_ICB.md, RESEARCH_ROBOTS.md, OMITTED_DATA.md   (working files)
```

---

## 12. EXECUTION ORDER (follow it)

1. Read `styleUntrigin.md` → recreate `globals.css`, `tailwind.config`, fonts, theme, scroll-reveal hook, `Header`/`Footer`/`AmbientGlow`/`LocaleSwitcher`. Stand up a working Next.js 14 + next-intl skeleton with the `[locale]` segment and at least `en` + `pl`.
2. Fetch and inventory the old polcero.com → `MIGRATION_ICB.md` → build `/robots-icb` with the real ICB content.
3. Web-research robots and photonics → `RESEARCH_ROBOTS.md` (+ photonics notes).
4. Build the home `/` (§5) and `/branches` (hub).
5. Build the mandatory branches: `/ai-systems`, `/robots` (+ catalog `/robots/[slug]`), `/farma-ai`, `/commander`, `/photonic-processors`, and finish `/robots-icb`. Add `/energy`, `/manufacturing`.
6. Build `/solutions/*` (agriculture links to farma-ai; construction, warehouse, services, industry).
7. `/about`, `/investors` (no numbers), `/contact` + `/api/contact` (EmailLabs).
8. i18n: extract all copy into message catalogs; add the remaining locales (§16); localized metadata; `hreflang`.
9. SEO/GEO: metadata, canonicals, OG/Twitter, sitemap (with locales), robots.ts, JSON-LD, `llms.txt`, AI-answer-friendly content blocks (§17).
10. Accessibility, dark mode, final pass. Write `OMITTED_DATA.md`. Run `npm run dev`, walk all routes/locales, fix errors.

---

## 13. EDITORIAL RULES (content)

- Author content in **English and Polish** first (primary), then localize to the other languages (§16). Tone: matter-of-fact, engineering-led, "honest positioning".
- Consistently message "to order / make-to-order" and the CTA "Submit an inquiry / Request a quote".
- No sensitive data (§3). When in doubt — generalize + log in `OMITTED_DATA.md`.
- Don't copy others' content verbatim (research, competitor sites) — paraphrase. Migrate ICB content as our own (it's the client's site), but restyle it visually.
- State compliance, standards and AI-model names matter-of-factly; for market/robot data note "as of the research date, subject to change".

---

## 16. INTERNATIONALIZATION (i18n) — multilingual site

- Use **next-intl** with an `app/[locale]/` segment, locale-prefixed routes, a `LocaleSwitcher`, and per-locale `<html lang>`.
- **Locales to ship (EU + most-spoken world languages):**
  - **EU official:** English (`en`, default), Polish (`pl`), German (`de`), French (`fr`), Spanish (`es`), Italian (`it`), Portuguese (`pt`), Dutch (`nl`), Swedish (`sv`), Czech (`cs`), Romanian (`ro`), Greek (`el`).
  - **Major world languages:** Chinese Simplified (`zh`), Hindi (`hi`), Arabic (`ar`), Russian (`ru`), Japanese (`ja`), Ukrainian (`uk`).
  - If shipping all at once is too heavy, implement the **full framework + all message keys**, fully translate **`en` and `pl`**, and machine-translate the rest into complete catalogs (no missing keys) with a `{/* TODO: professional review */}` note per locale in `OMITTED_DATA.md`. Never leave a locale with missing keys or English fallbacks silently.
- **RTL:** for `ar`, set `dir="rtl"` on `<html>` and ensure the layout (flex/grid, paddings, icons) mirrors correctly; verify the design system still holds.
- All copy lives in `messages/{locale}.json` with a clear key hierarchy (`home.hero.title`, `branches.commander.desc`, …). No hardcoded visible strings.
- **Localized metadata** (title/description/OG) per route per locale via `generateMetadata`.
- **Language switcher** preserves the current path and switches only the locale prefix; persist preference; respect `Accept-Language` for first visit; provide a sensible fallback chain.

---

## 17. SEO & AI-ASSISTANT DISCOVERABILITY (GEO/AEO)

Make the site rank in search **and** be easy for AI chats (Claude, Gemini, ChatGPT, Perplexity, Copilot) to find and cite.

### 17.1. Technical SEO
- Per-route, per-locale `generateMetadata`: unique `title`, `description`, `keywords` where useful, `openGraph` and `twitter` cards, `alternates.canonical`, and `alternates.languages` (**hreflang** for every locale + `x-default`).
- `app/sitemap.ts`: include every route in every locale with `alternates`/`hreflang`; `app/robots.ts`: allow crawling, point to the sitemap, and **explicitly allow AI crawlers** (e.g. `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `anthropic-ai`, `Google-Extended`, `PerplexityBot`, `CCBot`) — unless the owner opts out; if unsure, allow and note it in `OMITTED_DATA.md`.
- `app/manifest.ts` (PWA basics), favicons, and a branded **OG image** per major page (generate simple, on-brand OG images or a dynamic OG route using the design tokens).
- Clean semantic HTML: one `<h1>` per page, logical heading order, descriptive `alt` text, `Breadcrumbs` with structured data.
- Performance: static generation where possible, `next/font`, `next/image` for real images, lazy-load below-the-fold, good Core Web Vitals.

### 17.2. Structured data (JSON-LD) — via a `JsonLd` component
- **Organization** (POLCERO: name, url, logo, `sameAs`, contactPoint with `arek@polcero.com` / +48 731 707 230, address with KRS/NIP/REGON) on all pages.
- **WebSite** with `inLanguage` and (optional) `SearchAction`.
- **BreadcrumbList** on subpages.
- **Service** / **Product** / **ItemList** where it fits (each branch as a Service; the robot catalog as an ItemList of Products; solutions as Services).
- **FAQPage** on pages that include an FAQ block (see 17.3).

### 17.3. AI-answer-friendly content (GEO/AEO)
- Give each branch and solution page a short, **quotable summary** near the top (2–4 sentences answering "what is it / who is it for / how does it work") — AI assistants lift these.
- Add an **FAQ block** (5–8 Q&As) to key pages (home, ai-systems, robots, farma-ai, commander, each solution), phrased as natural questions people ask ("Can a robot replace a construction site manager?", "How do you automate trailer unloading in a warehouse?", "What is an AI brain for a humanoid robot?"). Mark up with FAQPage JSON-LD.
- Use clear, declarative sentences and self-contained facts (entity + attribute + value), avoid burying key facts in images only, and keep tables in real HTML (not screenshots).
- Add a **`public/llms.txt`** (and optionally `llms-full.txt`) summarizing the company, branches, key pages and contact — a concise, link-rich index designed for LLMs.
- Keep URLs descriptive and stable; internal-link generously between related branches/solutions/robots so crawlers and models can map the site.

---

## 14. DEFINITION OF DONE (DoD)

- [ ] Project starts (`npm run dev`) with no errors; every route in §4 works in `en` and `pl`, framework ready for all §16 locales.
- [ ] Visuals match `styleUntrigin.md` 1:1 (tokens, glass, bento, hero, footer, light/dark, scroll-reveal).
- [ ] Corporate home describes the group and "to order"; every branch has its own subpage under its own URL.
- [ ] ICB Robots migrated with real content from the old polcero.com (or clearly-marked placeholders + `MIGRATION_ICB.md`).
- [ ] All mandatory branches present (ICB Robots, AI Systems, Robots, **Farma AI**, **Commander**, Photonic Processors) + Energy/Manufacturing.
- [ ] Robot catalog from research (`/robots/[slug]`) with real, refreshed data and a "how we deploy" block.
- [ ] Farma AI and other solutions contain no sensitive data; `/investors` has no numbers.
- [ ] Inquiry form POSTs to `/api/contact` (EmailLabs configured via `.env`).
- [ ] i18n complete: locale routing, switcher, `hreflang`, localized metadata, `en`+`pl` fully translated, other locales complete (no missing keys).
- [ ] SEO/GEO complete: metadata, canonicals, OG/Twitter, sitemap w/ locales, robots.ts (AI crawlers allowed), JSON-LD (Organization/WebSite/Breadcrumb/Service/Product/FAQ), `llms.txt`, quotable summaries + FAQ blocks.
- [ ] Accessibility & performance checked; `OMITTED_DATA.md` filled.

Build the whole thing. Where you must assume something, pick the safe option (a generality instead of sensitive data, a placeholder instead of an invented product) and record it.
