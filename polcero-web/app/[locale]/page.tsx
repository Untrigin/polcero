import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { ArrowRight, Bot, Brain, Cpu, Sprout, Shield, Zap, Sun, Factory,
  Wheat, HardHat, Warehouse, Shield as ShieldIcon, Cog,
  CheckCircle2, Layers, Puzzle, Move3d, Wrench } from "lucide-react";
import { AmbientGlow } from "@/components/AmbientGlow";
import { SectionHeader } from "@/components/SectionHeader";
import { StepFlow } from "@/components/StepFlow";
import { ChassisTable } from "@/components/ChassisTable";
import { ChipRow } from "@/components/ChipRow";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { DigitalConnections } from "@/components/DigitalConnections";
import { RobotScrollSection } from "@/components/RobotScrollSection";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("defaultTitle"),
    description: t("defaultDescription"),
    alternates: {
      canonical: `https://robotic4u.com/${locale}`,
      languages: {
        "en": "https://robotic4u.com/en",
        "pl": "https://robotic4u.com/pl",
        "de": "https://robotic4u.com/de",
        "fr": "https://robotic4u.com/fr",
        "es": "https://robotic4u.com/es",
        "it": "https://robotic4u.com/it",
        "x-default": "https://robotic4u.com/en",
      },
    },
  };
}

const branchData = [
  { key: "icb", slug: "robots-icb", Icon: Bot },
  { key: "ai_systems", slug: "ai-systems", Icon: Brain },
  { key: "robots", slug: "robots", Icon: Cpu },
  { key: "farma_ai", slug: "farma-ai", Icon: Sprout },
  { key: "commander", slug: "commander", Icon: Shield },
  { key: "photonic", slug: "photonic-processors", Icon: Zap },
  { key: "energy", slug: "energy", Icon: Sun },
  { key: "manufacturing", slug: "manufacturing", Icon: Factory },
] as const;

const solutionData = [
  { key: "agriculture", slug: "agriculture", Icon: Wheat },
  { key: "construction", slug: "construction", Icon: HardHat },
  { key: "warehouse", slug: "warehouse", Icon: Warehouse },
  { key: "services", slug: "services", Icon: ShieldIcon },
  { key: "industry", slug: "industry", Icon: Cog },
] as const;

const complianceChips = [
  "CE Marking", "EU Machinery Regulation 2023/1230", "ISO 18497",
  "NIS2", "Cyber Resilience Act", "Security-by-design", "Human-in-the-loop",
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("home");
  const bt = await getTranslations("branches");
  const sol = await getTranslations("solutions");
  const faq = await getTranslations("faq");
  const ct = await getTranslations("common");
  const chassis_t = await getTranslations("chassis");
  const rs = await getTranslations("robotScroll");
  const base = `/${locale}`;

  const steps = [
    { number: "01", title: t("how_we_work.step1_title"), description: t("how_we_work.step1_desc") },
    { number: "02", title: t("how_we_work.step2_title"), description: t("how_we_work.step2_desc") },
    { number: "03", title: t("how_we_work.step3_title"), description: t("how_we_work.step3_desc") },
    { number: "04", title: t("how_we_work.step4_title"), description: t("how_we_work.step4_desc") },
  ];

  const techLayers = [
    { Icon: Brain, title: t("tech_core.layer1_title"), desc: t("tech_core.layer1_desc") },
    { Icon: Puzzle, title: t("tech_core.layer2_title"), desc: t("tech_core.layer2_desc") },
    { Icon: Move3d, title: t("tech_core.layer3_title"), desc: t("tech_core.layer3_desc") },
    { Icon: Wrench, title: t("tech_core.layer4_title"), desc: t("tech_core.layer4_desc") },
  ];

  const faqItems = [
    { q: faq("what_is_polcero_q"), a: faq("what_is_polcero_a") },
    { q: faq("make_to_order_q"), a: faq("make_to_order_a") },
    { q: faq("ai_brain_q"), a: faq("ai_brain_a") },
    { q: faq("manufacturing_q"), a: faq("manufacturing_a") },
    { q: faq("raas_q"), a: faq("raas_a") },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative z-20 w-full overflow-hidden flex items-center"
        style={{ minHeight: "calc(100vh - 3.5rem)" }}>
        <AmbientGlow />

        <div className="relative z-20 px-6 py-10 max-w-[1280px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center">

            {/* ── Left: text content (kept short to match reference) ── */}
            <div>
              <h1 data-animate
                className="text-[clamp(2rem,4.2vw,3.75rem)] font-bold tracking-[-0.04em]
                  leading-[1.05] mb-4 font-display"
                style={{ color: "rgb(var(--foreground))" }}>
                {t("h1")}
              </h1>

              <p data-animate data-animate-delay="100"
                className="text-gradient font-semibold text-base md:text-lg mb-6 leading-snug max-w-md">
                {t("h2")}
              </p>

              {/* Two key stats */}
              <div data-animate data-animate-delay="200"
                className="flex flex-wrap gap-x-6 gap-y-1.5 mb-7 text-xs font-semibold"
                style={{ color: "var(--text-muted)" }}>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[rgb(var(--primary))] shrink-0" />
                  {t("stats.branches")}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[rgb(var(--primary))] shrink-0" />
                  {t("stats.compliance")}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[rgb(var(--primary))] shrink-0" />
                  {t("stats.origin")}
                </span>
              </div>

              {/* CTAs */}
              <div data-animate data-animate-delay="300"
                className="flex flex-col sm:flex-row items-start gap-3">
                <Link href={`${base}/branches`} className="btn-premium h-10 px-6 text-sm">
                  {t("cta_branches")} <ArrowRight size={14} />
                </Link>
                <Link href={`${base}/contact`} className="btn-secondary h-10 px-6 text-sm">
                  {t("cta_inquiry")}
                </Link>
              </div>
            </div>

            {/* ── Right: decorative chassis preview (robots live in scroll section below) ── */}
            <div
              data-animate data-animate-delay="200"
              className="hidden lg:flex items-center justify-center relative min-h-[400px]"
            >
              {/* Central circular glow - mirrors webdesign.jpg reference element */}
              <div aria-hidden="true"
                className="rounded-full border border-[rgba(var(--primary),0.18)]"
                style={{
                  width: 276, height: 276,
                  background: "radial-gradient(circle at 50% 40%, rgba(124,58,237,0.22) 0%, rgba(124,58,237,0.05) 58%, transparent 76%)",
                  boxShadow: "0 0 90px rgba(124,58,237,0.09), inset 0 0 60px rgba(124,58,237,0.06)",
                }}
              />

              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 pointer-events-none">
                <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[rgb(var(--primary))]">
                  ONE AI BRAIN
                </p>
                <p className="text-[8px] font-semibold uppercase tracking-widest"
                  style={{ color: "var(--text-faint)" }}>
                  any chassis · any market
                </p>
              </div>

              {/* Floating chassis chips - hint at the animation below */}
              <div className="absolute top-[12%] right-[6%] nl-chip text-[9px] font-black uppercase tracking-widest">
                Q4 QUADRUPED
              </div>
              <div className="absolute top-[40%] right-[0%] nl-chip text-[9px] font-black uppercase tracking-widest">
                T6 TRACKED
              </div>
              <div className="absolute bottom-[26%] right-[6%] nl-chip text-[9px] font-black uppercase tracking-widest">
                W4 WHEELED
              </div>
              <div className="absolute bottom-[12%] left-[8%] nl-chip text-[9px] font-black uppercase tracking-widest">
                WL4 WHEEL-LEG
              </div>
              <div className="absolute top-[18%] left-[4%]">
                <p className="text-[8px] font-bold uppercase tracking-widest"
                  style={{ color: "var(--text-faint)" }}>MADE IN</p>
                <p className="text-[8px] font-black uppercase tracking-widest text-[rgb(var(--primary))]">
                  POLAND / EU
                </p>
              </div>

              {/* Subtle scroll nudge */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-35">
                <p className="text-[8px] uppercase tracking-[0.18em] font-bold"
                  style={{ color: "var(--text-faint)" }}>scroll</p>
                <div className="w-px h-7"
                  style={{ background: "linear-gradient(to bottom, rgba(124,58,237,0.55), transparent)" }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ROBOT SCROLL SECTION ─────────────── */}
      <RobotScrollSection
        label1={rs("label1")} title1={rs("title1")} desc1={rs("desc1")}
        label2={rs("label2")} title2={rs("title2")} desc2={rs("desc2")}
        label3={rs("label3")} title3={rs("title3")} desc3={rs("desc3")}
        label4={rs("label4")} title4={rs("title4")} desc4={rs("desc4")}
      />

      {/* ── CONTENT COVER ────────────────────────────────────────────────────
          z-[40] > robot panel z-30: this div slides up over the fixed panel
          as the user scrolls, naturally covering the frozen Stage 4 robot.
          Background must be opaque so it fully hides the panel behind it.   */}
      <div className="relative z-[40]" style={{ background: "var(--bg-app)" }}>

      {/* ── THREE PILLARS ────────────────────── */}
      <section className="pt-24 pb-0 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge={t("pillars.badge")}
            title={<>{t("pillars.title")}</>}
            subtitle={t("pillars.subtitle")}
          />

          {/*
            Relative wrapper so the SVG can be positioned absolutely between
            the tiles and the image.
          */}
          <div className="relative">

          {/*
            Middle card is half-height higher than the side cards.
            All three cards have min-h-48 (192 px = 12 rem).
            Side cards are pushed down by mt-24 (96 px = 6 rem = 50 % of 192 px).
            items-start keeps them anchored at their own top edge.
          */}
          <div className="grid sm:grid-cols-3 gap-4 items-start">
            {/* Left card */}
            <div data-animate className="bento-card min-h-48 sm:mt-24">
              <div className="w-12 h-12 rounded-xl bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
                flex items-center justify-center mb-5">
                <Layers size={22} className="text-[rgb(var(--primary))]" />
              </div>
              <h3 className="font-bold text-base mb-2 font-display" style={{ color: "var(--text-strong)" }}>
                {t("pillars.robotics_title")}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {t("pillars.robotics_desc")}
              </p>
            </div>

            {/* Middle card - sits at the top of the grid row (half-height higher) */}
            <div data-animate data-animate-delay="100" className="bento-card min-h-48">
              <div className="w-12 h-12 rounded-xl bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
                flex items-center justify-center mb-5">
                <Factory size={22} className="text-[rgb(var(--primary))]" />
              </div>
              <h3 className="font-bold text-base mb-2 font-display" style={{ color: "var(--text-strong)" }}>
                {t("pillars.manufacturing_title")}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {t("pillars.manufacturing_desc")}
              </p>
            </div>

            {/* Right card */}
            <div data-animate data-animate-delay="200" className="bento-card min-h-48 sm:mt-24">
              <div className="w-12 h-12 rounded-xl bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
                flex items-center justify-center mb-5">
                <Sun size={22} className="text-[rgb(var(--primary))]" />
              </div>
              <h3 className="font-bold text-base mb-2 font-display" style={{ color: "var(--text-strong)" }}>
                {t("pillars.energy_title")}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {t("pillars.energy_desc")}
              </p>
            </div>
          </div>

          {/* Digital connection lines from tiles to image */}
          <DigitalConnections />

          {/* Image below the tiles - relative z-20 places it above the SVG lines (z-10)
              so lines show through the transparent top of the photo and disappear
              behind the opaque robot content. */}
          <div data-animate className="mt-6 rounded-3xl overflow-hidden relative z-20">
            <Image
              src="/robot_earth.png"
              alt="POLCERO robot platform deployed across EU - make-to-order industrial robotics manufactured in Poland"
              width={1400}
              height={600}
              quality={85}
              className="w-full h-auto object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          </div>{/* end relative wrapper */}
        </div>
      </section>

      {/* ── BUSINESS BRANCHES ────────────────── */}
      <section className="py-24 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(var(--card),0.5)] border-y border-[rgba(var(--border))] z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            badge={t("branches_section.badge")}
            title={<>{t("branches_section.title")}</>}
            subtitle={t("branches_section.subtitle")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {branchData.map(({ key, slug, Icon }, i) => (
              <Link
                key={slug}
                href={`${base}/${slug}`}
                data-animate
                data-animate-delay={String((i % 4) * 100)}
                className="group flex flex-col gap-4 p-5 rounded-2xl
                  border border-[rgba(var(--border))] bg-[rgba(var(--foreground),0.02)]
                  hover:bg-[rgba(var(--primary),0.04)] hover:border-[rgba(var(--primary),0.25)]
                  transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(var(--foreground),0.06)] border border-[rgba(var(--border))]
                    flex items-center justify-center group-hover:border-[rgba(var(--primary),0.2)] transition-all">
                    <Icon size={20} className="text-[rgb(var(--primary))]" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5
                    rounded-full bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
                    text-[rgb(var(--primary))]">
                    {bt(`${key}.badge`)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm mb-0.5 group-hover:text-[rgb(var(--primary))] transition-colors font-display">
                    {bt(`${key}.name`)}
                  </p>
                  <p className="text-[10px] font-semibold text-[rgb(var(--muted-foreground))] uppercase tracking-wide mb-2">
                    {bt(`${key}.tagline`)}
                  </p>
                  <p className="text-[11px] text-[rgb(var(--muted-foreground))] leading-relaxed">
                    {bt(`${key}.desc`)}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[rgb(var(--primary))] mt-auto">
                  {ct("learn_more")} <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge={t("how_we_work.badge")}
            title={<>{t("how_we_work.title")}</>}
            subtitle={t("how_we_work.subtitle")}
          />
          <StepFlow steps={steps} />
        </div>
      </section>

      {/* ── TECHNOLOGY CORE ──────────────────── */}
      <section className="py-24 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--primary),0.04)] to-transparent z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            badge={t("tech_core.badge")}
            title={<>{t("tech_core.title")}</>}
            subtitle={t("tech_core.subtitle")}
          />
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Platform layers */}
            <div className="grid sm:grid-cols-2 gap-4">
              {techLayers.map(({ Icon, title, desc }, i) => (
                <div key={i} data-animate data-animate-delay={String(i * 100)} className="nl-card p-5">
                  <Icon size={20} className="text-[rgb(var(--primary))] mb-3" />
                  <h3 className="font-bold text-sm mb-1.5 font-display" style={{ color: "var(--text-strong)" }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Code-preview AI stack */}
            <div data-animate className="code-preview p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[rgba(var(--border))]">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-[11px] text-[rgb(var(--muted-foreground))]">polcero-ai-stack.ts</span>
              </div>
              <pre className="text-[rgb(var(--primary))] text-xs leading-6 overflow-x-auto">
{`// POLCERO AI Architecture
const aiStack = {
  perception: {
    vision: ["YOLO-class detection", "RGB-D", "LiDAR"],
    language: "VLA (VLM + motion policy)",
  },
  models: {
    base: "NVIDIA GR00T N1.7 | π0 | OpenVLA",
    finetuned: "customer-data + POLCERO datasets",
    abstraction: "swap base model without retraining",
  },
  architecture: {
    system2: "VLM - scene & language understanding",
    system1: "motion policy - high frequency control",
    classic: "PID for simple grasping/cutting",
  },
  deployment: {
    edge: "on-board inference (<10ms latency)",
    cloud: "training, analytics, fleet mgmt",
    ip: "data + fine-tuning + fleet logic",
  },
}`}
              </pre>
            </div>
          </div>

          {/* Chassis table */}
          <div className="mt-10" data-animate>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
              {chassis_t("title")}
            </h3>
            <ChassisTable />
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS BY MARKET ───────────────── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge={t("solutions_section.badge")}
            title={<>{t("solutions_section.title")}</>}
            subtitle={t("solutions_section.subtitle")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {solutionData.map(({ key, slug, Icon }, i) => (
              <Link
                key={slug}
                href={`${base}/solutions/${slug}`}
                data-animate
                data-animate-delay={String(i * 100)}
                className="bento-card hover:border-[rgba(var(--primary),0.25)] group transition-all"
              >
                <Icon size={24} className="text-[rgb(var(--primary))] mb-4" />
                <h3 className="font-bold text-sm mb-1.5 group-hover:text-[rgb(var(--primary))] transition-colors font-display">
                  {sol(`${key}.name`)}
                </h3>
                <p className="text-xs leading-relaxed mt-auto" style={{ color: "var(--text-muted)" }}>
                  {sol(`${key}.desc`)}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[rgb(var(--primary))] mt-3">
                  <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ────────────────────────── */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-4 text-[rgb(var(--primary))]">
            {t("compliance.badge")}
          </p>
          <ChipRow chips={complianceChips} />
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────── */}
      <section className="py-24 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(var(--card),0.5)] border-y border-[rgba(var(--border))] z-0" />
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader badge={t("faq.badge")} title={t("faq.title")} />
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} data-animate data-animate-delay={String(i * 100)}
                className="nl-card p-5 group">
                <summary className="font-bold text-sm cursor-pointer list-none flex items-center justify-between gap-4 font-display"
                  style={{ color: "var(--text-strong)" }}>
                  {item.q}
                  <span className="text-[rgb(var(--primary))] shrink-0">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────── */}
      <CTASection
        title={t("final_cta.title")}
        subtitle={t("final_cta.subtitle")}
        description={t("final_cta.desc")}
        cta={t("final_cta.cta")}
        ctaHref={`${base}/contact`}
        secondaryCta={t("final_cta.secondary_cta")}
        secondaryCtaHref={`${base}/branches`}
      />

      </div>{/* end content-cover */}
    </>
  );
}
