import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Wheat, HardHat, Warehouse, Shield, Cog } from "lucide-react";
import { AmbientGlow } from "@/components/AmbientGlow";
import { SectionHeader } from "@/components/SectionHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: "Solutions by Market - POLCERO",
    description: t("solutions_section.subtitle"),
    alternates: { canonical: `https://robotic4u.com/${locale}/solutions` },
  };
}

const solutionData = [
  { Icon: Wheat,    slug: "agriculture", key: "agriculture", color: "text-green-500"  },
  { Icon: HardHat,  slug: "construction", key: "construction", color: "text-orange-500" },
  { Icon: Warehouse, slug: "warehouse",   key: "warehouse",   color: "text-blue-500"  },
  { Icon: Shield,   slug: "services",    key: "services",    color: "text-purple-500" },
  { Icon: Cog,      slug: "industry",    key: "industry",    color: "text-yellow-500" },
] as const;

export default async function SolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t  = await getTranslations("solutions");
  const ht = await getTranslations("home");
  const ct = await getTranslations("common");
  const base = `/${locale}`;

  return (
    <section className="relative z-20 py-16 px-6 overflow-hidden">
      <AmbientGlow />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge={ht("solutions_section.badge")}
          title={<>{ht("solutions_section.title")}</>}
          subtitle={ht("solutions_section.subtitle")}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutionData.map(({ Icon, slug, key, color }, i) => (
            <Link key={slug} href={`${base}/solutions/${slug}`} data-animate data-animate-delay={String(i * 100)}
              className="group bento-card hover:border-[rgba(var(--primary),0.3)] transition-all">
              <Icon size={28} className={`${color} mb-4`} />
              <h2 className="font-bold text-lg mb-1 font-display group-hover:text-[rgb(var(--primary))] transition-colors">
                {t(`${key}.name`)}
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--text-faint)" }}>
                {t(`${key}.problem`)}
              </p>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                {t(`${key}.desc`)}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[rgb(var(--primary))] mt-4">
                {ct("explore_solutions")} <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
