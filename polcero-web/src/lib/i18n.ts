export const locales = ['pl', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pl';

/** Extract the active locale from an Astro URL pathname. */
export function getLocale(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  return seg === 'en' ? 'en' : 'pl';
}

/**
 * Build a locale-aware href. Pass a path WITHOUT locale prefix (e.g. "/products/").
 * PL (default) stays at root, EN is prefixed with /en.
 */
export function localizedPath(path: string, locale: Locale): string {
  const clean = '/' + path.replace(/^\/+/, '');
  const withSlash = clean.endsWith('/') ? clean : clean + '/';
  return locale === 'en' ? `/en${withSlash}` : withSlash;
}

/** Given the current pathname, return the equivalent path in the other locale. */
export function alternatePath(pathname: string, target: Locale): string {
  const current = getLocale(pathname);
  if (current === target) return pathname;
  if (target === 'en') {
    return ('/en' + (pathname === '/' ? '/' : pathname)).replace(/\/{2,}/g, '/');
  }
  // strip leading /en
  const stripped = pathname.replace(/^\/en(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

export const localeLabels: Record<Locale, string> = { pl: 'PL', en: 'EN' };
export const htmlLang: Record<Locale, string> = { pl: 'pl-PL', en: 'en' };
