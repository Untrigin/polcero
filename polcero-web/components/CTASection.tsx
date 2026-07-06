import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  cta: string;
  ctaHref: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
}

export function CTASection({
  title,
  subtitle,
  description,
  cta,
  ctaHref,
  secondaryCta,
  secondaryCtaHref,
}: CTASectionProps) {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--primary),0.06)] to-transparent z-0" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div data-animate className="bento-card p-10 md:p-16">
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold tracking-tight mb-3 font-display">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl font-semibold text-gradient mb-6">{subtitle}</p>
          )}
          {description && (
            <p className="text-[rgb(var(--muted-foreground))] max-w-xl mx-auto mb-8">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={ctaHref} className="btn-premium h-12 px-8">
              {cta} <ArrowRight size={16} />
            </Link>
            {secondaryCta && secondaryCtaHref && (
              <Link href={secondaryCtaHref} className="btn-secondary h-12 px-8">
                {secondaryCta}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
