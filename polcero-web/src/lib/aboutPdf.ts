import type { Locale } from './i18n';

/**
 * "About us" brochure PDF per locale. Localized PDFs live in /public/brief/.
 * Locales without their own PDF (pl + all wave-2) fall back to the English one.
 */
const files: Partial<Record<Locale, string>> = {
  en: 'about-en.pdf',
  de: 'about-de.pdf',
  es: 'about-es.pdf',
  fr: 'about-fr.pdf',
  it: 'about-it.pdf',
  nl: 'about-nl.pdf',
  pt: 'about-pt.pdf',
};

export function aboutPdfPath(locale: Locale): string {
  return `/brief/${files[locale] ?? files.en}`;
}
