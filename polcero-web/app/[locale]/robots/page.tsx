import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  Brain, Puzzle, Move3d, Wrench,
  Bot, Cpu, Sprout, HardHat, Eye, Package, Zap,
  BatteryCharging, ArrowRight, ChevronRight,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChipRow } from "@/components/ChipRow";
import { JsonLd } from "@/components/JsonLd";
import { robots } from "@/content/robots";
import type { RobotCategory, MarketStatus } from "@/content/robots";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "robots_page" });
  return {
    title: t("meta_title"),
    description: t("meta_desc"),
    alternates: {
      canonical: `https://polcero.com/${locale}/robots`,
      languages: {
        en: "https://polcero.com/en/robots",
        pl: "https://polcero.com/pl/robots",
        de: "https://polcero.com/de/robots",
        "x-default": "https://polcero.com/en/robots",
      },
    },
  };
}

const categoryLabels: Record<RobotCategory, string> = {
  humanoid: "Humanoid",
  amr: "AMR / Logistics",
  cobot: "Cobot",
  quadruped: "Quadruped",
  specialized: "Specialized",
  construction: "Construction",
};

const categoryColors: Record<RobotCategory, string> = {
  humanoid: "rgba(139,92,246,0.15)",
  amr: "rgba(59,130,246,0.15)",
  cobot: "rgba(16,185,129,0.15)",
  quadruped: "rgba(245,158,11,0.15)",
  specialized: "rgba(236,72,153,0.15)",
  construction: "rgba(234,88,12,0.15)",
};

const categoryBorderColors: Record<RobotCategory, string> = {
  humanoid: "rgba(139,92,246,0.35)",
  amr: "rgba(59,130,246,0.35)",
  cobot: "rgba(16,185,129,0.35)",
  quadruped: "rgba(245,158,11,0.35)",
  specialized: "rgba(236,72,153,0.35)",
  construction: "rgba(234,88,12,0.35)",
};

const categoryTextColors: Record<RobotCategory, string> = {
  humanoid: "rgb(139,92,246)",
  amr: "rgb(59,130,246)",
  cobot: "rgb(16,185,129)",
  quadruped: "rgb(245,158,11)",
  specialized: "rgb(236,72,153)",
  construction: "rgb(234,88,12)",
};

const statusLabels: Record<MarketStatus, string> = {
  commercial: "Commercial",
  pilot: "Pilot",
  development: "Development",
  research: "Research",
};

const energyChips = [
  "LFP battery chemistry",
  "Wheeled: ~2.5× more efficient than legged on flat",
  "Grid-connected operation",
  "Trolley + buffer operation",
  "Hot-swap battery packs",
];

const catalogRobots = robots.slice(0, 10);

export default async function RobotsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("robots_page");
  const base = `/${locale}`;

  const platformLayers = [
    { Icon: Brain,  title: t("layer1_title"), desc: t("layer1_desc") },
    { Icon: Puzzle, title: t("layer2_title"), desc: t("layer2_desc") },
    { Icon: Move3d, title: t("layer3_title"), desc: t("layer3_desc") },
    { Icon: Wrench, title: t("layer4_title"), desc: t("layer4_desc") },
  ];

  const specializedRobots = [
    { Icon: Sprout,  title: t("spec1_title"), desc: t("spec1_desc") },
    { Icon: HardHat, title: t("spec2_title"), desc: t("spec2_desc") },
    { Icon: Eye,     title: t("spec3_title"), desc: t("spec3_desc") },
    { Icon: Bot,     title: t("spec4_title"), desc: t("spec4_desc") },
    { Icon: Cpu,     title: t("spec5_title"), desc: t("spec5_desc") },
    { Icon: Package, title: t("spec6_title"), desc: t("spec6_desc") },
  ];

  const taskModules = [
    { Icon: Wrench,  name: t("module1_name"), desc: t("module1_desc") },
    { Icon: Sprout,  name: t("module2_name"), desc: t("module2_desc") },
    { Icon: Eye,     name: t("module3_name"), desc: t("module3_desc") },
    { Icon: Package, name: t("module4_name"), desc: t("module4_desc") },
    { Icon: Bot,     name: t("module5_name"), desc: t("module5_desc") },
  ];

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("meta_title"),
    description: t("meta_desc"),
    url: `https://polcero.com/${locale}/robots`,
  };

  return (
    <>
      <JsonLd data={pageJsonLd} />

      {/* ── HERO ──────────────────────────────── */}
      <section className="relative z-20 pt-8 pb-16 px-6 w-full overflow-hidden min-h-[70vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--primary),0.05)] to-transparent z-0" />
        <div className="relative z-20 max-w-[1200px] mx-auto">
          <Breadcrumbs
            crumbs={[
              { label: t("breadcrumb_home"), href: base },
              { label: t("breadcrumb_branches"), href: `${base}/branches` },
              { label: t("breadcrumb_page") },
            ]}
          />

          <div data-animate className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
            border border-[rgba(var(--primary),0.2)] bg-[rgba(var(--primary),0.05)]
            text-xs font-semibold tracking-wide uppercase text-[rgb(var(--primary))]">
            {t("hero_badge")}
          </div>

          <h1 data-animate data-animate-delay="100"
            className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.04em] leading-[1.05]
              mb-4 max-w-4xl font-display"
            style={{ color: "rgb(var(--foreground))" }}>
            {t("hero_h1")}
          </h1>

          <p data-animate data-animate-delay="200" className="text-xl font-semibold text-gradient mb-6 max-w-2xl">
            {t("hero_h2")}
          </p>

          <p data-animate data-animate-delay="300"
            className="text-sm md:text-base text-[rgb(var(--muted-foreground))]
              max-w-2xl mb-8 leading-relaxed font-medium">
            {t("hero_desc")}
          </p>

          <div data-animate data-animate-delay="400" className="flex flex-col sm:flex-row items-start gap-4">
            <Link href={`${base}/contact`} className="btn-premium h-11 px-7">
              {t("cta_primary")} <ArrowRight size={16} />
            </Link>
            <Link href={`${base}/ai-systems`} className="btn-secondary h-11 px-7">
              {t("hero_cta2")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── (A) PLATFORM LAYERS ───────────────── */}
      <section className="py-24 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(var(--card),0.5)] border-y border-[rgba(var(--border))] z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            badge={t("platform_badge")}
            title={<>{t("platform_title")}</>}
            subtitle={t("platform_subtitle")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {platformLayers.map(({ Icon, title, desc }, i) => (
              <div key={title} data-animate data-animate-delay={String(i * 100)} className="bento-card">
                <div className="w-12 h-12 rounded-xl bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
                  flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[rgb(var(--primary))]" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[rgb(var(--primary))] mb-1">
                  {t("layer_prefix")} {i + 1}
                </p>
                <h3 className="font-bold text-base mb-2 font-display" style={{ color: "var(--text-strong)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Robotic4u external link */}
          <div data-animate className="mt-8 mb-4">
            <a href="https://robotic4u.com" target="_blank" rel="noopener noreferrer"
              className="nl-card p-5 flex items-center gap-5 hover:border-[rgba(var(--primary),0.3)] transition-all group">
              <div className="shrink-0">
                <Image src="/robotic4u_black.svg" alt="ROBOTIC4U" width={124} height={28}
                  className="logo-light w-auto" style={{ height: 22 }} />
                <Image src="/robotic4u.svg" alt="ROBOTIC4U" width={124} height={28}
                  className="logo-dark w-auto" style={{ height: 22 }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold uppercase tracking-wide mb-0.5 text-[rgb(var(--primary))]">robotic4u.com</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  POLCERO's AI integration arm - deploying the platform layer above onto robots for EU clients.
                </p>
              </div>
              <ArrowRight size={15} className="text-[rgb(var(--primary))] shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Energy note */}
          <div data-animate className="nl-card p-5 flex flex-wrap items-start gap-4">
            <div className="shrink-0">
              <BatteryCharging size={22} className="text-[rgb(var(--primary))]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm mb-1 font-display" style={{ color: "var(--text-strong)" }}>
                {t("energy_title")}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {t("energy_desc")}
              </p>
              <div className="mt-3">
                <ChipRow chips={energyChips} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── (B) WHAT WE CAN BUILD ─────────────── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge={t("build_badge")}
            title={<>{t("build_title")}</>}
            subtitle={t("build_subtitle")}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {specializedRobots.map(({ Icon, title, desc }, i) => (
              <div key={title} data-animate data-animate-delay={String((i % 3) * 100)} className="nl-card p-5">
                <Icon size={22} className="text-[rgb(var(--primary))] mb-3" />
                <h3 className="font-bold text-sm mb-1.5 font-display" style={{ color: "var(--text-strong)" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Task modules sub-section */}
          <div data-animate className="bento-card p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-widest text-[rgb(var(--primary))] mb-4">
              {t("modules_badge")}
            </p>
            <h3 className="font-bold text-xl mb-6 font-display" style={{ color: "var(--text-strong)" }}>
              {t("modules_title")}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {taskModules.map(({ Icon, name, desc }) => (
                <div key={name} className="flex flex-col items-start gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
                    flex items-center justify-center">
                    <Icon size={18} className="text-[rgb(var(--primary))]" />
                  </div>
                  <p className="font-bold text-sm font-display" style={{ color: "var(--text-strong)" }}>{name}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── (C) ROBOT CATALOG ─────────────────── */}
      <section className="py-24 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(var(--card),0.5)] border-y border-[rgba(var(--border))] z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            badge={t("catalog_badge")}
            title={<>{t("catalog_title")}</>}
            subtitle={t("catalog_subtitle")}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {catalogRobots.map((robot, i) => (
              <Link
                key={robot.slug}
                href={`${base}/robots/${robot.slug}`}
                data-animate
                data-animate-delay={String((i % 4) * 100)}
                className="group flex flex-col gap-3 p-5 rounded-2xl
                  border border-[rgba(var(--border))] bg-[rgba(var(--foreground),0.02)]
                  hover:bg-[rgba(var(--primary),0.04)] hover:border-[rgba(var(--primary),0.25)]
                  transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border"
                    style={{
                      background: categoryColors[robot.category],
                      borderColor: categoryBorderColors[robot.category],
                      color: categoryTextColors[robot.category],
                    }}>
                    {categoryLabels[robot.category]}
                  </span>
                  <span className="text-[10px] font-semibold truncate" style={{ color: "var(--text-faint)" }}>
                    {robot.manufacturer}
                  </span>
                </div>

                <h3 className="font-bold text-sm font-display group-hover:text-[rgb(var(--primary))] transition-colors"
                  style={{ color: "var(--text-strong)" }}>
                  {robot.name}
                </h3>

                {Object.keys(robot.specs).length > 0 && (
                  <div className="flex flex-col gap-1">
                    {robot.specs.height && (
                      <div className="flex items-center justify-between text-[11px]">
                        <span style={{ color: "var(--text-faint)" }}>{t("catalog_height")}</span>
                        <span className="font-semibold" style={{ color: "var(--text-muted)" }}>{robot.specs.height}</span>
                      </div>
                    )}
                    {robot.specs.payload && (
                      <div className="flex items-center justify-between text-[11px]">
                        <span style={{ color: "var(--text-faint)" }}>{t("catalog_payload")}</span>
                        <span className="font-semibold" style={{ color: "var(--text-muted)" }}>{robot.specs.payload}</span>
                      </div>
                    )}
                    {robot.specs.speed && (
                      <div className="flex items-center justify-between text-[11px]">
                        <span style={{ color: "var(--text-faint)" }}>{t("catalog_speed")}</span>
                        <span className="font-semibold" style={{ color: "var(--text-muted)" }}>{robot.specs.speed}</span>
                      </div>
                    )}
                    {robot.specs.battery && (
                      <div className="flex items-center justify-between text-[11px]">
                        <span style={{ color: "var(--text-faint)" }}>{t("catalog_battery")}</span>
                        <span className="font-semibold" style={{ color: "var(--text-muted)" }}>{robot.specs.battery}</span>
                      </div>
                    )}
                  </div>
                )}

                <span className="self-start text-[9px] font-bold uppercase tracking-wider px-2 py-0.5
                  rounded-full border border-[rgba(var(--border))] bg-[rgba(var(--foreground),0.04)]"
                  style={{ color: "var(--text-faint)" }}>
                  {statusLabels[robot.marketStatus]}
                </span>

                <p className="text-[11px] leading-relaxed line-clamp-3 mt-auto" style={{ color: "var(--text-muted)" }}>
                  {robot.polceroNote}
                </p>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-[rgb(var(--primary))] mt-1">
                  {t("catalog_details")} <ChevronRight size={12} />
                </span>
              </Link>
            ))}
          </div>

          <div data-animate className="mt-8 text-center">
            <p className="text-sm text-[rgb(var(--muted-foreground))] mb-4">{t("catalog_more")}</p>
            <Link href={`${base}/contact`} className="btn-secondary h-10 px-6">
              {t("catalog_ask")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE CHIPS ──────────────────── */}
      <section className="py-10 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-4 text-[rgb(var(--primary))]">
            {t("compliance_badge")}
          </p>
          <ChipRow chips={["CE Marking","EU Machinery Regulation 2023/1230","ISO 18497","NIS2","Cyber Resilience Act","Made in Poland/EU","RaaS / HaaS model"]} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        description={t("cta_desc")}
        cta={t("cta_primary")}
        ctaHref={`${base}/contact`}
        secondaryCta={t("cta_secondary")}
        secondaryCtaHref={`${base}/ai-systems`}
      />
    </>
  );
}
