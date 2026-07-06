# OMITTED_DATA.md — Sensitive data not published

This file documents all sensitive information from source materials that was **intentionally excluded** from the public website per §3 of the brief.

---

## Financial / investment data (excluded)
- Investment round amounts and parameters
- Pre/post-money valuations
- Equity percentages
- Fundraising deadlines
- PARP grant amount and program name
- Series round designations (A/B etc.)
- 18-month runway figure
→ **Replaced with:** neutral "For investors" page with contact form only

## Customer data (excluded)
- First agricultural customer identity (international group, UK-linked)
- Farm size (~500 ha in PL)
- Worker counts (~400 seasonal workers)
- Labor cost per person/month (8,000 zł)
- RaaS rental price (3.0–3.5k zł/month)
- Origin countries of seasonal workers
- Farm locations in 6 EU countries + USA/Africa/Asia
→ **Replaced with:** "We work with large vegetable farms in the EU" (no specifics)

## Team / ownership data (excluded)
- Full team list: Kamil Rudyk, Mateusz Mika, Artur Mosak, Mateusz/Maksymilian, Wioletta Wojnarowska, Robert Świeboda
- RACI chart
- FTE counts
- Ownership structure / shareholding table
→ **Replaced with:** "An interdisciplinary team of robotics, AI and manufacturing engineers"
→ Only published: Arkadiusz Wiktorowicz (contact person, per brief)

## Internal budgets & costs (excluded)
- Component purchase prices
- Gross margins
- Cost estimates per robot
- Per-entity grant details
- Program deadlines presented as commitments
→ **Replaced with:** general descriptions of cost advantages

## Technology partners (excluded)
- ByteDance/BytePlus not mentioned as partner/investor
- Meta not mentioned as partner/investor
- No supply-chain-risk or foreign-capital discussion
→ **Replaced with:** generic AI strategy (open, commercially-licensed VLA models)

## Defense specifics (excluded)
- Weapon systems
- Targeting information
- Tactical details
- Specific program/contract names
→ **Replaced with:** general "civil and dual-use" framing, humanitarian demining, infrastructure protection

---

## Locale translations (TODO: professional review)
The following locale message files were machine-translated from English and should be reviewed by a professional translator before production launch:
- `messages/cs.json` — Czech (English fallback, needs professional translation)
- `messages/ro.json` — Romanian (English fallback, needs professional translation)
- `messages/el.json` — Greek (English fallback, needs professional translation)
- `messages/zh.json` — Chinese Simplified (English fallback, needs professional translation)
- `messages/hi.json` — Hindi (English fallback, needs professional translation)
- `messages/ar.json` — Arabic (English fallback, needs professional translation) — also: RTL `dir="rtl"` is set for Arabic locale, layout verified
- `messages/ru.json` — Russian (English fallback, needs professional translation)
- `messages/ja.json` — Japanese (English fallback, needs professional translation)
- `messages/uk.json` — Ukrainian (English fallback, needs professional translation)
- `messages/pl.json` — Polish (partial agent translation, needs review; core was rebuilt from en.json)
- `messages/de.json` — German (partial agent translation, needs review; core was rebuilt from en.json)

Complete professional translations for all 18 locales are the recommended next step before launch.

---

## AI crawlers (robots.txt)
Decision: all major AI crawlers (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, CCBot, OAI-SearchBot, anthropic-ai) are **explicitly allowed** in `app/robots.ts`. This enables AI assistant discoverability (GEO/AEO objective). Owner can opt out by modifying `app/robots.ts`.
