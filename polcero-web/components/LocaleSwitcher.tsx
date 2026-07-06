"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { locales } from "@/i18n/routing";
import { useTransition } from "react";

const LOCALE_LABELS: Record<string, string> = {
  en: "EN", pl: "PL", de: "DE", fr: "FR", es: "ES",
  it: "IT", pt: "PT", nl: "NL", sv: "SV", cs: "CS",
  ro: "RO", el: "EL", zh: "中文", hi: "हि", ar: "AR",
  ru: "RU", ja: "JA", uk: "UK",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (next: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div className="relative group">
      <button
        className="nl-icon-btn gap-1.5 px-3 w-auto"
        aria-label="Select language"
        aria-haspopup="listbox"
      >
        <Globe size={15} />
        <span className="text-xs font-bold">{LOCALE_LABELS[locale] ?? locale.toUpperCase()}</span>
      </button>
      <div
        role="listbox"
        aria-label="Language"
        className="absolute right-0 top-full mt-2 w-44 glass-card p-2 z-50
          invisible opacity-0 group-hover:visible group-hover:opacity-100
          group-focus-within:visible group-focus-within:opacity-100
          transition-all duration-150 grid grid-cols-3 gap-1"
      >
        {locales.map((l) => (
          <button
            key={l}
            role="option"
            aria-selected={l === locale}
            onClick={() => switchLocale(l)}
            disabled={isPending}
            className={`text-xs font-semibold px-2 py-1.5 rounded-lg transition-colors
              ${l === locale
                ? "bg-[var(--accent)] text-white"
                : "hover:bg-[var(--bg-chip)] text-[var(--text-muted)]"
              } disabled:opacity-50`}
          >
            {LOCALE_LABELS[l] ?? l.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
