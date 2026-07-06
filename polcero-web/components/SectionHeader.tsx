interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ badge, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div data-animate className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <p className="text-xs text-[rgb(var(--primary))] font-bold uppercase tracking-widest mb-3">
          {badge}
        </p>
      )}
      <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold tracking-tight mb-4 font-display">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[rgb(var(--muted-foreground))] ${centered ? "max-w-xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
