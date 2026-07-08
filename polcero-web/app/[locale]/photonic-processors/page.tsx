import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Zap, Cpu, ArrowRight, FlaskConical } from "lucide-react";
import { AmbientGlow } from "@/components/AmbientGlow";
import { SectionHeader } from "@/components/SectionHeader";
import { ChipRow } from "@/components/ChipRow";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "photonic_page" });
  return {
    title: t("meta_title"),
    description: t("meta_desc"),
    alternates: { canonical: `https://robotic4u.com/${locale}/photonic-processors` },
  };
}

/* Comparison table and companies data is technical/factual — stays in English */
const comparison = [
  { property: "Matrix multiply latency", photonic: "Sub-nanosecond (single optical pass)", electronic: "Microsecond–millisecond" },
  { property: "Energy per MAC", photonic: "Sub-picojoule (target)", electronic: "10–100 picojoules" },
  { property: "Bandwidth", photonic: "Terahertz-range", electronic: "~GHz-range" },
  { property: "Heat generation", photonic: "Very low", electronic: "High (major bottleneck)" },
  { property: "Nonlinear ops", photonic: "Requires electronic hybrid", electronic: "Native in silicon" },
];

const companies = [
  { name: "Lightmatter (USA)", note: "Passage M1000: 114 Tbps photonic interposer; $400M Series D 2025; first photonic to run transformers, CNNs and RL without modification." },
  { name: "Q.ANT (Germany)", note: "~50× performance advantage vs. NVIDIA GPU in matrix-vector multiplication benchmarks, validated at LRZ supercomputing center." },
  { name: "Neurophos (USA)", note: "1,000×1,000 optical matrix chip demonstrated; claims 10× NVIDIA Vera Rubin NVL72 in FP4/INT4 workloads at similar power." },
  { name: "Celestial AI → Marvell", note: "1.6T light engines for AI networks — acquired by Marvell for $3.25B (Dec 2025)." },
];

export default async function PhotonicProcessorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("photonic_page");
  const base = `/${locale}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name: t("meta_title"),
    description: t("meta_desc"),
    url: `https://robotic4u.com/${locale}/photonic-processors`,
    funder: { "@id": "https://robotic4u.com/#org" },
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />

      <section className="relative z-20 py-16 px-6 overflow-hidden">
        <AmbientGlow />
        <div className="max-w-7xl mx-auto relative z-10">
          <Breadcrumbs crumbs={[
            { label: t("breadcrumb_home"), href: `/${locale}` },
            { label: t("breadcrumb_branches"), href: `${base}/branches` },
            { label: t("breadcrumb_page") },
          ]} />

          <div className="max-w-3xl mb-16">
            <span data-animate className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4
              bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
              text-[rgb(var(--primary))] text-xs font-bold uppercase tracking-wide">
              <Zap size={12} /> {t("hero_badge")}
            </span>
            <h1 data-animate data-animate-delay="100"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-tight mb-4 font-display">
              {t("hero_h1")}
            </h1>
            <p data-animate data-animate-delay="200" className="text-xl font-semibold text-gradient mb-6">
              {t("hero_h2")}
            </p>
            <p data-animate data-animate-delay="300" className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              {t("hero_desc")}
            </p>
            <div data-animate data-animate-delay="400" className="nl-card p-4 mb-8 inline-flex items-start gap-3 max-w-xl">
              <FlaskConical size={18} className="text-[rgb(var(--primary))] shrink-0 mt-0.5" />
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                <strong style={{ color: "var(--text-strong)" }}>Honest positioning:</strong> {t("hero_honest")}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={`${base}/contact`} className="btn-premium h-11 px-7">
                {t("hero_cta")} <ArrowRight size={15} />
              </Link>
              <Link href={`${base}/ai-systems`} className="btn-secondary h-11 px-7">
                {t("hero_cta2")}
              </Link>
            </div>
          </div>

          {/* What is photonic computing */}
          <SectionHeader badge={t("tech_badge")} title={<>{t("tech_title")}</>} subtitle={t("tech_subtitle")} />
          <div className="grid lg:grid-cols-2 gap-6 mb-20">
            <div data-animate className="bento-card">
              <Zap size={24} className="text-[rgb(var(--primary))] mb-4" />
              <h3 className="font-bold text-base mb-3 font-display">{t("tech1_title")}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{t("tech1_desc")}</p>
            </div>
            <div data-animate data-animate-delay="100" className="bento-card">
              <Cpu size={24} className="text-[rgb(var(--primary))] mb-4" />
              <h3 className="font-bold text-base mb-3 font-display">{t("tech2_title")}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{t("tech2_desc")}</p>
            </div>
          </div>

          {/* Comparison table */}
          <SectionHeader badge={t("bench_badge")} title={<>{t("bench_title")}</>} subtitle={t("bench_subtitle")} />
          <div data-animate className="overflow-x-auto rounded-2xl border border-[var(--nl-border)] mb-20">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--bg-chip)", borderBottom: "1px solid var(--nl-border)" }}>
                  {[t("bench_col_prop"), t("bench_col_photonic"), t("bench_col_electronic")].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < comparison.length - 1 ? "1px solid var(--nl-border)" : "none" }}>
                    <td className="px-5 py-3.5 font-medium" style={{ color: "var(--text)" }}>{row.property}</td>
                    <td className="px-5 py-3.5 text-[rgb(var(--primary))] font-semibold">{row.photonic}</td>
                    <td className="px-5 py-3.5" style={{ color: "var(--text-muted)" }}>{row.electronic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* State of the art */}
          <SectionHeader badge={t("sota_badge")} title={<>{t("sota_title")}</>} subtitle={t("sota_subtitle")} />
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            {companies.map(({ name, note }, i) => (
              <div key={i} data-animate data-animate-delay={String(i * 100)} className="nl-card p-5">
                <p className="font-bold text-sm mb-2 font-display" style={{ color: "var(--text-strong)" }}>{name}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{note}</p>
              </div>
            ))}
          </div>

          {/* Market */}
          <div data-animate className="bento-card mb-16 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-[rgb(var(--primary))]">{t("market_badge")}</p>
            <p className="text-2xl font-black font-display mb-1" style={{ color: "var(--text-strong)" }}>
              {t("market_title")}
            </p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>{t("market_desc")}</p>
          </div>

          {/* POLCERO direction */}
          <div data-animate className="glass-card p-8 mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-[rgb(var(--primary))]">{t("direction_badge")}</p>
            <h3 className="text-xl font-bold mb-3 font-display" style={{ color: "var(--text-strong)" }}>
              {t("direction_title")}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{t("direction_desc")}</p>
          </div>

          {/* Tags */}
          <div data-animate>
            <ChipRow chips={["Photonic AI", "Optical matrix multiplication", "MZI mesh", "Silicon photonics", "Hybrid photonic-electronic", "Edge inference", "R&D direction"]} />
          </div>
        </div>
      </section>

      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        description={t("cta_desc")}
        cta={t("cta_primary")}
        ctaHref={`${base}/contact`}
      />
    </>
  );
}
