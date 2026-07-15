import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Cog, ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "industry_page" });
  return {
    title: t("meta_title"),
    description: t("meta_desc"),
    alternates: { canonical: `https://polcero.com/${locale}/solutions/industry` },
  };
}

/* Platform specs are factual - stays in English */
const platforms = [
  { name: "UR / FANUC / ABB cobots", note: "Collaborative robot arms for assembly, inspection and machine tending." },
  { name: "MiR AMRs", note: "250–1,350 kg AMRs for intra-factory material flow." },
  { name: "POLCERO-W4 + industrial module", note: "POLCERO wheeled platform configured for industrial applications with our AI brain." },
  { name: "OMRON LD series", note: "Autonomous mobile robots for manufacturing intralogistics." },
];

export default async function IndustryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("industry_page");
  const base = `/${locale}`;

  const tasks = [
    t("task1"), t("task2"), t("task3"), t("task4"),
    t("task5"), t("task6"), t("task7"),
  ];

  return (
    <>
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs crumbs={[
            { label: t("breadcrumb_home"), href: `/${locale}` },
            { label: t("breadcrumb_solutions"), href: `${base}/solutions` },
            { label: t("breadcrumb_page") },
          ]} />
          <div className="max-w-3xl mb-12">
            <span data-animate className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4
              bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
              text-[rgb(var(--primary))] text-xs font-bold uppercase tracking-wide">
              <Cog size={12} /> {t("hero_badge")}
            </span>
            <h1 data-animate data-animate-delay="100"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-tight mb-4 font-display">
              {t("hero_h1")}
            </h1>
            <p data-animate data-animate-delay="200" className="text-lg font-semibold text-gradient mb-6">
              {t("hero_h2")}
            </p>
            <p data-animate data-animate-delay="300" className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              {t("hero_desc")}
            </p>
            <Link href={`${base}/contact`} className="btn-premium h-11 px-7 inline-flex">
              {t("hero_cta")} <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div data-animate className="nl-card p-6">
              <h2 className="font-bold mb-4 font-display" style={{ color: "var(--text-strong)" }}>
                {t("tasks_title")}
              </h2>
              <ul className="space-y-2.5">
                {tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                    <CheckCircle2 size={14} className="text-[rgb(var(--primary))] mt-0.5 shrink-0" />{task}
                  </li>
                ))}
              </ul>
            </div>
            <div data-animate data-animate-delay="100" className="nl-card p-6">
              <h2 className="font-bold mb-4 font-display" style={{ color: "var(--text-strong)" }}>
                {t("platforms_title")}
              </h2>
              <div className="space-y-4">
                {platforms.map(({ name, note }, i) => (
                  <div key={i}>
                    <p className="font-mono font-bold text-xs text-[rgb(var(--primary))]">{name}</p>
                    <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>{note}</p>
                  </div>
                ))}
              </div>
            </div>
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
