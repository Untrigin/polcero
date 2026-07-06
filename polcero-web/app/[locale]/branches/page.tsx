import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Bot, Brain, Cpu, Sprout, Shield, Zap, Sun, Factory } from "lucide-react";
import { AmbientGlow } from "@/components/AmbientGlow";
import { SectionHeader } from "@/components/SectionHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: "Business Branches — POLCERO",
    description: t("branches_section.subtitle"),
    alternates: { canonical: `https://polcero.com/${locale}/branches` },
  };
}

const branchData = [
  { key: "icb",           slug: "robots-icb",           Icon: Bot     },
  { key: "ai_systems",    slug: "ai-systems",            Icon: Brain   },
  { key: "robots",        slug: "robots",                Icon: Cpu     },
  { key: "farma_ai",      slug: "farma-ai",              Icon: Sprout  },
  { key: "commander",     slug: "commander",             Icon: Shield  },
  { key: "photonic",      slug: "photonic-processors",   Icon: Zap     },
  { key: "energy",        slug: "energy",                Icon: Sun     },
  { key: "manufacturing", slug: "manufacturing",         Icon: Factory },
] as const;

export default async function BranchesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t  = await getTranslations("branches");
  const ht = await getTranslations("home");
  const ct = await getTranslations("common");
  const base = `/${locale}`;

  return (
    <>
      <section className="relative z-20 py-16 px-6 overflow-hidden">
        <AmbientGlow />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            badge={ht("branches_section.badge")}
            title={<>{ht("branches_section.title")}</>}
            subtitle={ht("branches_section.subtitle")}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {branchData.map(({ key, slug, Icon }, i) => (
              <Link
                key={slug}
                href={`${base}/${slug}`}
                data-animate
                data-animate-delay={String((i % 4) * 100)}
                className="group bento-card hover:border-[rgba(var(--primary),0.3)] transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
                    flex items-center justify-center group-hover:bg-[rgba(var(--primary),0.18)] transition-all">
                    <Icon size={22} className="text-[rgb(var(--primary))]" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full
                    bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)] text-[rgb(var(--primary))]">
                    {t(`${key}.badge`)}
                  </span>
                </div>
                <h2 className="font-bold text-base mb-1 font-display group-hover:text-[rgb(var(--primary))] transition-colors">
                  {t(`${key}.name`)}
                </h2>
                <p className="text-[10px] font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--text-faint)" }}>
                  {t(`${key}.tagline`)}
                </p>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                  {t(`${key}.desc`)}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[rgb(var(--primary))] mt-4">
                  {ct("learn_more")} <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
