# MIGRATION_ICB.md — ICB Robots site inventory

## Source
- **Old site URL:** https://polcero.com
- **Platform:** WordPress (Industrium theme)
- **Direct dump:** specICB.md (2026-07-05)

## What was real vs. placeholder

### Real POLCERO / ICB content (migrated)

**Core differentiator (verbatim, translated):**
> "Robots already exist — what is missing are the systems that control them. We build that missing layer: we install knowledge, a plan and eyes (cameras, sensors) into the machine, connect it with artificial intelligence and make it work on its own — without a driver and without constant human supervision."

**Company identity:**
- Name: Polskie Centrum Robotyzacji — ICB Robots
- Tagline: "Łączymy roboty z AI" (We connect robots with AI)
- Since: 1980
- Team experience: 40+ years
- Industry sectors: 4+
- Address: Rynek 60/2, 50-116 Wrocław, Dolny Śląsk
- Phone: +48 535 777 268
- Email: biuro@polcero.com

**6 service categories (real, from homepage):**
| Category (PL) | Category (EN) | Capabilities |
|---|---|---|
| Coboty | Cobots | Support, automate, supply, assemble, transport |
| Autonomiczne widlaki | Autonomous Forklifts | Transport, lift, scan, locate, avoid obstacles |
| Platforma AMR | AMR Platform | Enter, lift, carry, navigate, avoid, deliver |
| Centrum kontroli | Control Center | Monitor, analyse, alert, respond, secure, report |
| Autonomiczna produkcja | Autonomous Production | Sort, pack, label, inspect, move, synchronise |
| Linie produkcyjne | Production Lines | Optimise, automate, control, integrate, monitor, improve |

**Product with published real specifications:**
| Spec | Value |
|---|---|
| Product name | Robot do precyzyjnego montażu i manipulacji sterowany AI |
| Payload (Udźwig) | **20 kg** |
| Reach (Zasięg) | **up to 1,800 mm** |
| Repeatability (Powtarzalność) | **±0.02 mm** |
| Operating temperature | **0–45 °C** |
| Warranty (Gwarancja) | **24 months** |
| Control (Sterowanie) | **Vision + AI (Python · C++ · ROS)** |

**6-axis robotic arms (no numerical specs published):**
- 6 degrees of freedom
- High repeatability, high payload capacity
- Ceiling-mounted version available
- Programming: Python, C++, ROS
- Applications: assembly, packaging, welding, quality control

**Case studies (3, with their stated stage from the original site):**
1. Material transport robots on construction sites — **Concept** (construction expertise in team)
2. Drones and robots for construction site inspection — **R&D** (based on market analysis)
3. Autonomous internal transport: AMR and forklifts in warehouse — **Pilot**

**Industries mentioned on services page:**
Ecological production, Processing industry, Renewable energy, Gas & oil, Atomic energy, Timber industry

### Discarded (Industrium theme placeholders)
- Fish Lorem Ipsum text on all service detail pages
- "Phosphate coating", "Chemical processing of super alloys" service pages
- US contact (New York, +1 numbers, support@industrium.com)
- $0/$25/$75 pricing plans
- "2022 Industrium. All Rights reserved by Artureanec"
- FAQ questions about "software updates" (generic theme demo)

---

## Migration status

| Item | Status |
|---|---|
| Core differentiator / tagline | ✅ Migrated to page + content/icb.ts |
| 6 service categories | ✅ Migrated (was 3, now 6) |
| AI-controlled robot specs (20kg/1800mm/±0.02mm) | ✅ Migrated to featured product spec table |
| 6-axis arm specs | ✅ Migrated (no numerical specs were published) |
| 3 case studies with stages | ✅ Migrated with concept/R&D/pilot badges |
| Company info (Wrocław, since 1980) | ✅ Migrated to content/icb.ts |
| Industries served | ✅ Expanded to 6 (added Renewable Energy) |
| Individual robot model numbers / SKUs | ❌ Not published on old site — **manual-fill needed** |
| Portfolio project case studies (detailed) | ❌ Old site had placeholder only — **manual-fill needed** |
| Images | ❌ Not migrated — **TODO: own / licensed image** |
| Shop / product pricing | ❌ Shop was never launched — **manual-fill needed** |
