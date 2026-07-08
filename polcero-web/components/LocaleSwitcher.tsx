"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { locales } from "@/i18n/routing";
import { useEffect, useRef, useState, useTransition } from "react";

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
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const switchLocale = (next: string) => {
    setOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div className="relative" ref={rootRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="nl-icon-btn gap-1.5 px-3 w-auto"
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe size={15} />
        <span className="text-xs font-bold">{LOCALE_LABELS[locale] ?? locale.toUpperCase()}</span>
      </button>
      {open && (
        <div
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full mt-2 w-44 glass-card p-2 z-50 grid grid-cols-3 gap-1"
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
      )}
    </div>
  );
}
