// Cookie-consent banner/modal strings. English base + per-locale overrides
// (deep-merged, EN fallback), so the CMP localizes with the rest of the site.
import type { Locale } from '../lib/i18n';
import { de } from './i18n/specs/de';
import { fr } from './i18n/specs/fr';
import { es } from './i18n/specs/es';
import { it } from './i18n/specs/it';
import { pt } from './i18n/specs/pt';
import { nl } from './i18n/specs/nl';

export interface CookieText {
  title: string; desc: string;
  acceptAll: string; rejectOptional: string; moreOptions: string;
  prefTitle: string; prefDesc: string;
  essential: string; essentialDesc: string; alwaysActive: string;
  analytics: string; analyticsDesc: string;
  marketing: string; marketingDesc: string;
  save: string; cancel: string;
  footer: string; privacyLink: string; cookieLink: string; close: string;
}

const en: CookieText = {
  title: 'We value your privacy',
  desc: 'We use essential cookies to make this site work. With your consent we also use analytics and marketing cookies to improve it. You can change your choice at any time.',
  acceptAll: 'Accept all',
  rejectOptional: 'Reject optional',
  moreOptions: 'More options',
  prefTitle: 'Cookie preferences',
  prefDesc: 'Choose which categories of cookies you allow. Essential cookies are always on.',
  essential: 'Essential', essentialDesc: 'Required for core site functionality and security. Always active.',
  alwaysActive: 'Always active',
  analytics: 'Analytics', analyticsDesc: 'Help us understand how the site is used so we can improve it.',
  marketing: 'Marketing', marketingDesc: 'Used to measure and personalise campaigns.',
  save: 'Save choices', cancel: 'Cancel',
  footer: 'Read our', privacyLink: 'Privacy Policy', cookieLink: 'Cookie Policy', close: 'Close',
};

const pl: CookieText = {
  title: 'Szanujemy Twoją prywatność',
  desc: 'Używamy niezbędnych plików cookie, aby strona działała. Za Twoją zgodą używamy też cookie analitycznych i marketingowych, aby ją ulepszać. Możesz zmienić wybór w każdej chwili.',
  acceptAll: 'Akceptuj wszystkie',
  rejectOptional: 'Odrzuć opcjonalne',
  moreOptions: 'Więcej opcji',
  prefTitle: 'Ustawienia cookie',
  prefDesc: 'Wybierz, które kategorie plików cookie akceptujesz. Niezbędne cookie są zawsze włączone.',
  essential: 'Niezbędne', essentialDesc: 'Wymagane do podstawowego działania i bezpieczeństwa strony. Zawsze aktywne.',
  alwaysActive: 'Zawsze aktywne',
  analytics: 'Analityczne', analyticsDesc: 'Pomagają nam zrozumieć, jak używana jest strona, abyśmy mogli ją ulepszać.',
  marketing: 'Marketingowe', marketingDesc: 'Służą do pomiaru i personalizacji kampanii.',
  save: 'Zapisz wybór', cancel: 'Anuluj',
  footer: 'Przeczytaj naszą', privacyLink: 'Politykę prywatności', cookieLink: 'Politykę cookie', close: 'Zamknij',
};

/** Overrides for locales beyond en/pl land here as translation batches complete. */
export const cookieOverrides: Partial<Record<Locale, Partial<CookieText>>> = {
  de: de.cookie, fr: fr.cookie, es: es.cookie, it: it.cookie, pt: pt.cookie, nl: nl.cookie,
};

export function getCookieText(locale: Locale): CookieText {
  if (locale === 'en') return en;
  if (locale === 'pl') return pl;
  return { ...en, ...(cookieOverrides[locale] ?? {}) };
}
