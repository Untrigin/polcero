// ---------------------------------------------------------------------------
// POLCERO i18n — English is the PRIMARY locale (served at "/"), every other
// language is prefixed ("/pl/", "/de/", ...). RTL is handled for Arabic.
//
// `allLocales` is the full 18-language roster the site is built to support.
// `locales` is the subset currently BUILT + shown in the switcher; move a code
// from "pending" into `locales` once its translation lands (architecture-first,
// then batch — so we never publish untranslated duplicate-content pages).
// ---------------------------------------------------------------------------

export const allLocales = [
  'en', 'pl', 'de', 'fr', 'es', 'it', 'pt', 'nl', 'sv',
  'cs', 'ro', 'el', 'zh', 'hi', 'ar', 'ru', 'ja', 'uk',
] as const;
export type Locale = (typeof allLocales)[number];

/** Locales that are actually built and offered in the UI. Grows per batch. */
export const locales: readonly Locale[] = ['en', 'pl'];

export const defaultLocale: Locale = 'en';

/** Non-default active locales — the ones that live under a "/xx/" prefix. */
export const secondaryLocales: readonly Locale[] = locales.filter((l) => l !== defaultLocale);

const localeSet: ReadonlySet<string> = new Set(allLocales);

/** Extract the active locale from an Astro URL pathname. */
export function getLocale(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  return seg && seg !== defaultLocale && localeSet.has(seg) ? (seg as Locale) : defaultLocale;
}

/**
 * Build a locale-aware href. Pass a path WITHOUT locale prefix (e.g. "/products/").
 * The default locale (EN) stays at root; every other locale is prefixed.
 */
export function localizedPath(path: string, locale: Locale): string {
  const clean = '/' + path.replace(/^\/+/, '');
  const withSlash = clean.endsWith('/') ? clean : clean + '/';
  return locale === defaultLocale ? withSlash : `/${locale}${withSlash}`;
}

/** Given the current pathname, return the equivalent path in another locale. */
export function alternatePath(pathname: string, target: Locale): string {
  const current = getLocale(pathname);
  // Strip the current locale prefix down to the bare path.
  let base = pathname;
  if (current !== defaultLocale) {
    base = pathname.replace(new RegExp(`^/${current}(?=/|$)`), '') || '/';
  }
  if (!base.startsWith('/')) base = '/' + base;
  return localizedPath(base, target);
}

/** Native language name for the switcher. */
export const localeLabels: Record<Locale, string> = {
  en: 'English',
  pl: 'Polski',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  sv: 'Svenska',
  cs: 'Čeština',
  ro: 'Română',
  el: 'Ελληνικά',
  zh: '中文',
  hi: 'हिन्दी',
  ar: 'العربية',
  ru: 'Русский',
  ja: '日本語',
  uk: 'Українська',
};

/** Short code shown in the compact desktop switcher. */
export const localeShort: Record<Locale, string> = {
  en: 'EN', pl: 'PL', de: 'DE', fr: 'FR', es: 'ES', it: 'IT', pt: 'PT', nl: 'NL', sv: 'SV',
  cs: 'CS', ro: 'RO', el: 'EL', zh: 'ZH', hi: 'HI', ar: 'AR', ru: 'RU', ja: 'JA', uk: 'UK',
};

/** `lang` attribute value (BCP-47). */
export const htmlLang: Record<Locale, string> = {
  en: 'en', pl: 'pl-PL', de: 'de', fr: 'fr', es: 'es', it: 'it', pt: 'pt', nl: 'nl', sv: 'sv',
  cs: 'cs', ro: 'ro', el: 'el', zh: 'zh', hi: 'hi', ar: 'ar', ru: 'ru', ja: 'ja', uk: 'uk',
};

/** Text direction — Arabic is RTL, everything else LTR. */
export const htmlDir: Record<Locale, 'ltr' | 'rtl'> = Object.fromEntries(
  allLocales.map((l) => [l, l === 'ar' ? 'rtl' : 'ltr']),
) as Record<Locale, 'ltr' | 'rtl'>;
