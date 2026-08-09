// ---------------------------------------------------------------------------
// POLCERO UI microcopy — the translatable "chrome" strings used inside
// components (breadcrumb labels, CTA labels, aria-labels, section eyebrows…).
//
// This is deliberately SEPARATE from page CONTENT (src/data/content.ts,
// branchRich.ts, legal.ts, specs.ts, productSpecs.ts). Only the UI
// microcopy that used to be written inline as `locale === 'pl' ? … : …`
// lives here.
//
// English (`en`) is the complete source of truth. Every other locale is a
// DeepPartial override merged on top of `en`, so any missing key falls back
// to English automatically.
// ---------------------------------------------------------------------------

import type { Locale } from '../lib/i18n';
import { de } from './i18n/ui/de';
import { fr } from './i18n/ui/fr';
import { es } from './i18n/ui/es';
import { it } from './i18n/ui/it';
import { pt } from './i18n/ui/pt';
import { nl } from './i18n/ui/nl';

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends readonly (infer U)[]
    ? readonly (U extends object ? DeepPartial<U> : U)[]
    : T[K] extends object
    ? DeepPartial<T[K]>
    : T[K];
};

export interface UI {
  common: {
    home: string;
    products: string;
    industries: string;
    services: string;
    news: string;
    about: string;
    contact: string;
    order: string;
  };
  header: {
    about: string;
    nav: string;
    platformSpec: string;
    themeToggle: string;
    language: string;
    drawerMenu: string;
    close: string;
    mobileNav: string;
    specification: string;
  };
  footer: {
    footerNav: string;
    cookiePolicy: string;
    terms: string;
    cookieSettings: string;
  };
  home: {
    order: string;
    scrollDown: string;
    ecosystemAlt: string;
    applications: string;
  };
  productDetail: {
    home: string;
    products: string;
    related: string;
    cta: string;
    specs: string;
    industries: string;
    back: string;
    uses: string;
    usesLead: string;
    platforms: string;
    platformsLead: string;
    drive: string;
    terrain: string;
    specNote: string;
    note: string;
    price: string;
    specification: string;
    construction: {
      title: string;
      lead: string;
      parts: { name: string; spec: string }[];
    };
  };
  branchDetail: {
    home: string;
    services: string;
    back: string;
    delivers: string;
    industries: string;
    cta: string;
    stack: string;
  };
  industryDetail: {
    home: string;
    industries: string;
    title: string;
    products: string;
    cta: string;
    order: string;
    services: string;
    servicesLead: string;
    all: string;
    challenges: string;
    challengesLead: string;
    approach: string;
    approachLead: string;
  };
  productsIndex: {
    home: string;
    products: string;
    lead: string;
    order: string;
    title: string;
  };
  industriesIndex: {
    home: string;
    industries: string;
    lead: string;
    title: string;
  };
  servicesPage: {
    home: string;
    services: string;
    title: string;
    cta: string;
    closing: string;
  };
  newsIndex: {
    home: string;
    news: string;
    lead: string;
    title: string;
    read: string;
  };
  newsArticle: {
    home: string;
    news: string;
  };
  aboutPage: {
    home: string;
    about: string;
    title: string;
    lead: string;
    cta: string;
    imageAlt: string;
    pdf: string;
    blocks: { h: string; b: string }[];
  };
  contactPage: {
    home: string;
    contact: string;
    badge: string;
    title: string;
    lead: string;
    name: string;
    namePh: string;
    email: string;
    emailPh: string;
    company: string;
    companyPh: string;
    subject: string;
    subjectPh: string;
    message: string;
    messagePh: string;
    send: string;
    sending: string;
    response: string;
    success: string;
    error: string;
    entity: string;
    reg: string;
    info: string;
    faqTitle: string;
    country: string;
    faqs: { q: string; a: string }[];
  };
  specsPage: {
    home: string;
    cta: string;
  };
  legalPage: {
    home: string;
    updated: string;
  };
}

const en: UI = {
  common: {
    home: 'Home',
    products: 'Products',
    industries: 'Industries',
    services: 'Branches',
    news: 'News',
    about: 'About',
    contact: 'Contact',
    order: 'View product',
  },
  header: {
    about: 'About',
    nav: 'Main',
    platformSpec: 'Platform specification',
    themeToggle: 'Toggle theme',
    language: 'Language',
    drawerMenu: 'Menu',
    close: 'Close',
    mobileNav: 'Mobile',
    specification: 'Specification',
  },
  footer: {
    footerNav: 'Footer',
    cookiePolicy: 'Cookie Policy',
    terms: 'Terms',
    cookieSettings: 'Cookie settings',
  },
  home: {
    order: 'View product',
    scrollDown: 'Scroll down',
    ecosystemAlt: 'POLCERO humanoid seated in the transport drone',
    applications: 'APPLICATIONS',
  },
  productDetail: {
    home: 'Home',
    products: 'Products',
    related: 'Related',
    cta: 'Ask about deployment',
    specs: 'At a glance',
    industries: 'Industries',
    back: 'All products',
    uses: 'Use cases',
    usesLead: 'What we use this model for.',
    platforms: 'Platforms',
    platformsLead: 'The same core module on four interchangeable chassis - choose the platform for your terrain.',
    drive: 'Drive',
    terrain: 'Terrain',
    specNote: 'Values are design assumptions; the product is under development and configuration may change. Please confirm details with sales.',
    note: 'We build robots around the client’s specific process - starting from our own prototypes, adapted to purpose. We fit the technology to the process, not the other way around.',
    price: 'Price',
    specification: 'Specification',
    construction: {
      title: 'Modular construction',
      lead: 'The common core stays the same: chassis, controls, perception and a quick-release tool connector. The working end and the program change - not the whole machine. We mount the core module (control system + AI) on any specialized chassis, or add legs and arms to make a humanoid. Add a task module - arms with a gripper, a harvest head or a weeding laser - and the same robot takes on the next job.',
      parts: [
        { name: 'Core module', spec: 'Control, perception and AI in one module.' },
        { name: 'Swappable chassis', spec: 'Wheeled, tracked, legged or wheel-leg.' },
        { name: 'Swappable batteries', spec: 'Three hot-swap batteries in the back.' },
        { name: 'Perception', spec: 'Cameras, LiDAR, on-device compute.' },
      ],
    },
  },
  branchDetail: {
    home: 'Home',
    services: 'Branches',
    back: 'All branches',
    delivers: 'What we deliver',
    industries: 'Industries',
    cta: 'Ask about deployment',
    stack: 'Programming stack',
  },
  industryDetail: {
    home: 'Home',
    industries: 'Industries',
    title: 'Solutions for',
    products: 'Related products',
    cta: 'Talk to us',
    order: 'View product',
    services: 'Branches for this industry',
    servicesLead: 'The POLCERO branches we most often deploy in this industry.',
    all: 'All branches',
    challenges: 'Challenges',
    challengesLead: 'What this industry is up against.',
    approach: 'How we help',
    approachLead: 'How POLCERO answers those challenges.',
  },
  productsIndex: {
    home: 'Home',
    products: 'Products',
    lead: 'One platform in many configurations. A shared core, swappable end-effectors and different programs for different tasks.',
    order: 'View product',
    title: 'Products',
  },
  industriesIndex: {
    home: 'Home',
    industries: 'Industries',
    lead: 'We go where the big players do not - selective manipulation, work in tunnels, and transport where the road ends.',
    title: 'Industries',
  },
  servicesPage: {
    home: 'Home',
    services: 'Branches',
    title: 'Business branches',
    cta: 'Submit an inquiry',
    closing: 'Not sure which branch fits your process?',
  },
  newsIndex: {
    home: 'Home',
    news: 'News',
    lead: 'Progress on deployments, prototypes and the POLCERO platform.',
    title: 'News',
    read: 'Read',
  },
  newsArticle: {
    home: 'Home',
    news: 'News',
  },
  aboutPage: {
    home: 'Home',
    about: 'About',
    title: 'About',
    lead: 'POLCERO does not build a robot. We build an ecosystem of three layers that only make sense together.',
    cta: 'Talk to us',
    imageAlt: 'The POLCERO team in a production hall',
    pdf: 'Download the POLCERO presentation (PDF)',
    blocks: [
      { h: 'We sell the result, not the machine', b: 'Global manufacturers sell a device and shift all the risk to the client. We can take that risk on ourselves and settle for hectares harvested or volume handled.' },
      { h: 'We go where the big players do not', b: 'Selective manipulation in soft crops and work in tunnels and greenhouses, where satellite signal fails, is poorly served. We chose it deliberately.' },
      { h: 'Designed and built in Poland', b: 'We aim for all the added value - design, engineering, software, assembly and service - to be created here. Data and compliance stay in the European Union.' },
      { h: 'Response time', b: 'Changing a gripper design takes us weeks, not a large corporation’s product cycle. The client talks to the engineer who designs it.' },
    ],
  },
  contactPage: {
    home: 'Home',
    contact: 'Contact',
    badge: 'GET IN TOUCH',
    title: 'Submit an inquiry',
    lead: "Describe your process or challenge - we'll design and build a solution to order.",
    name: 'Your name',
    namePh: 'Jan Kowalski',
    email: 'Email',
    emailPh: 'jan@company.com',
    company: 'Company / organization',
    companyPh: 'Company name',
    subject: 'Subject',
    subjectPh: 'Brief description of your need',
    message: 'Message',
    messagePh: 'Describe your process, challenge or question in detail…',
    send: 'Send inquiry',
    sending: 'Sending…',
    response: 'We will respond within 1-2 business days.',
    success: 'Thank you! Your message has been sent.',
    error: 'Could not send. Please try again or email biuro@polcero.com.',
    entity: 'POLCERO sp. z o.o.',
    reg: 'KRS 0001178417 · NIP 8971955510 · REGON 542000919',
    info: 'Contact details',
    faqTitle: 'Frequently asked questions',
    country: 'Poland',
    faqs: [
      { q: 'What is the entry value for a deployment?', a: 'The value of the first orders starts from PLN 2 million upward and is delivered turnkey - from robot design and build to commissioning, documentation and service.' },
      { q: 'Do I have to buy a robot?', a: 'Not always. We offer sale, seasonal rental and settlement for work done - the client pays for the result while the robot and operators stay on our side.' },
      { q: 'Where does the data stay?', a: 'Our models can run locally, on-device, without sending imagery outside. Data and compliance stay in the European Union.' },
    ],
  },
  specsPage: {
    home: 'Home',
    cta: 'Ask for details',
  },
  legalPage: {
    home: 'Home',
    updated: 'Last updated',
  },
};

const pl: DeepPartial<UI> = {
  common: {
    home: 'Start',
    products: 'Produkty',
    industries: 'Branże',
    services: 'Kierunki',
    news: 'Aktualności',
    about: 'O nas',
    contact: 'Kontakt',
    order: 'Zobacz produkt',
  },
  header: {
    about: 'O nas',
    nav: 'Główna',
    platformSpec: 'Specyfikacja platformy',
    themeToggle: 'Przełącz motyw',
    language: 'Język',
    drawerMenu: 'Menu',
    close: 'Zamknij',
    mobileNav: 'Mobilne',
    specification: 'Specyfikacja',
  },
  footer: {
    footerNav: 'Stopka',
    cookiePolicy: 'Polityka cookie',
    terms: 'Regulamin',
    cookieSettings: 'Ustawienia cookie',
  },
  home: {
    order: 'Zobacz produkt',
    scrollDown: 'Przewiń w dół',
    ecosystemAlt: 'Humanoid POLCERO w kabinie drona transportowego',
    applications: 'ZASTOSOWANIA',
  },
  productDetail: {
    home: 'Start',
    products: 'Produkty',
    related: 'Powiązane',
    cta: 'Zapytaj o wdrożenie',
    specs: 'W skrócie',
    industries: 'Branże',
    back: 'Wszystkie produkty',
    uses: 'Zastosowania',
    usesLead: 'Do czego wykorzystujemy ten model.',
    platforms: 'Platformy',
    platformsLead: 'Ten sam moduł korpusu na czterech wymiennych podwoziach - wybierz platformę pod swój teren.',
    drive: 'Napęd',
    terrain: 'Teren',
    specNote: 'Wartości mają charakter założeń projektowych; produkt jest w rozwoju, a konfiguracja może się zmienić. Prosimy potwierdzić szczegóły z działem sprzedaży.',
    note: 'Roboty budujemy pod konkretny proces u klienta - punktem wyjścia są nasze własne prototypy, które modyfikujemy pod przeznaczenie. Dopasowujemy technologię do procesu, a nie odwrotnie.',
    price: 'Cena',
    specification: 'Specyfikacja',
    construction: {
      title: 'Budowa modułowa',
      lead: 'Wspólny rdzeń pozostaje ten sam: podwozie, sterowanie, percepcja i szybkozłącze narzędziowe. Zmienia się końcówka robocza i program - nie cała maszyna. Moduł korpusu z systemem sterowania i AI łączymy z dowolnym podwoziem specjalistycznym albo uzupełniamy o nogi i ramiona, tworząc humanoida. Po dołożeniu modułu zadaniowego - ramion z chwytakiem, głowicy zbioru czy lasera do odchwaszczania - ten sam robot wykonuje kolejne prace.',
      parts: [
        { name: 'Moduł korpusu', spec: 'Sterowanie, percepcja i AI w jednym module.' },
        { name: 'Wymienne podwozie', spec: 'Kołowe, gąsienicowe, kroczące lub kołowo-nożne.' },
        { name: 'Wymienne baterie', spec: 'Trzy baterie hot-swap z tyłu korpusu.' },
        { name: 'Percepcja', spec: 'Kamery, LiDAR, przetwarzanie na urządzeniu.' },
      ],
    },
  },
  branchDetail: {
    home: 'Start',
    services: 'Kierunki',
    back: 'Wszystkie kierunki',
    delivers: 'Co dostarczamy',
    industries: 'Branże',
    cta: 'Zapytaj o wdrożenie',
    stack: 'Stos programowania',
  },
  industryDetail: {
    home: 'Start',
    industries: 'Branże',
    title: 'Rozwiązania dla branży',
    products: 'Powiązane produkty',
    cta: 'Porozmawiajmy',
    order: 'Zobacz produkt',
    services: 'Kierunki dla tej branży',
    servicesLead: 'Kierunki POLCERO, które najczęściej wdrażamy w tej branży.',
    all: 'Wszystkie kierunki',
    challenges: 'Wyzwania',
    challengesLead: 'Z czym mierzy się ta branża.',
    approach: 'Jak pomagamy',
    approachLead: 'Jak POLCERO odpowiada na te wyzwania.',
  },
  productsIndex: {
    home: 'Start',
    products: 'Produkty',
    lead: 'Jedna platforma w wielu konfiguracjach. Wspólny rdzeń, wymienne końcówki robocze i różne programy dla różnych zadań.',
    order: 'Zobacz produkt',
    title: 'Produkty',
  },
  industriesIndex: {
    home: 'Start',
    industries: 'Branże',
    lead: 'Wchodzimy tam, gdzie duzi nie wchodzą - selektywna manipulacja, praca w tunelach i transport tam, gdzie kończy się droga.',
    title: 'Branże',
  },
  servicesPage: {
    home: 'Start',
    services: 'Kierunki',
    title: 'Kierunki biznesowe',
    cta: 'Złóż zapytanie',
    closing: 'Nie wiesz, który kierunek pasuje do Twojego procesu?',
  },
  newsIndex: {
    home: 'Start',
    news: 'Aktualności',
    lead: 'Postępy we wdrożeniach, prototypach i rozwoju platformy POLCERO.',
    title: 'Aktualności',
    read: 'Czytaj',
  },
  newsArticle: {
    home: 'Start',
    news: 'Aktualności',
  },
  aboutPage: {
    home: 'Start',
    about: 'O nas',
    title: 'O nas',
    lead: 'POLCERO nie buduje robota. Budujemy ekosystem złożony z trzech warstw, które mają sens dopiero razem.',
    cta: 'Porozmawiajmy',
    imageAlt: 'Zespół POLCERO w hali produkcyjnej',
    pdf: 'Pobierz prezentację POLCERO (PDF)',
    blocks: [
      { h: 'Sprzedajemy rezultat, nie maszynę', b: 'Globalni producenci sprzedają urządzenie i przenoszą na klienta całe ryzyko. My możemy wziąć to ryzyko na siebie i rozliczyć się za zebrany areał albo obsłużony wolumen.' },
      { h: 'Wchodzimy tam, gdzie duzi nie wchodzą', b: 'Selektywna manipulacja w miękkim plonie oraz praca w tunelach i szklarniach, gdzie zawodzi sygnał satelitarny, to obszar słabo obsadzony. Wybraliśmy go świadomie.' },
      { h: 'Projektujemy i budujemy w Polsce', b: 'Dążymy do tego, żeby cała wartość dodana - projekt, konstrukcja, oprogramowanie, montaż i serwis - powstawała u nas. Dane i zgodność zostają w Unii Europejskiej.' },
      { h: 'Czas reakcji', b: 'Zmiana konstrukcji chwytaka zajmuje nam tygodnie, a nie cykl produktowy dużego koncernu. Klient rozmawia z inżynierem, który tę konstrukcję projektuje.' },
    ],
  },
  contactPage: {
    home: 'Start',
    contact: 'Kontakt',
    badge: 'NAPISZ DO NAS',
    title: 'Złóż zapytanie',
    lead: 'Opisz swój proces lub wyzwanie - zaprojektujemy i zbudujemy rozwiązanie na zamówienie.',
    name: 'Imię i nazwisko',
    namePh: 'Jan Kowalski',
    email: 'E-mail',
    emailPh: 'jan@firma.pl',
    company: 'Firma / organizacja',
    companyPh: 'Nazwa firmy',
    subject: 'Temat',
    subjectPh: 'Krótki opis Twojej potrzeby',
    message: 'Wiadomość',
    messagePh: 'Opisz szczegółowo swój proces, wyzwanie lub pytanie…',
    send: 'Wyślij zapytanie',
    sending: 'Wysyłanie…',
    response: 'Odpowiemy w ciągu 1-2 dni roboczych.',
    success: 'Dziękujemy! Wiadomość została wysłana.',
    error: 'Nie udało się wysłać. Spróbuj ponownie lub napisz na biuro@polcero.com.',
    entity: 'POLCERO sp. z o.o.',
    reg: 'KRS 0001178417 · NIP 8971955510 · REGON 542000919',
    info: 'Dane kontaktowe',
    faqTitle: 'Najczęstsze pytania',
    country: 'Polska',
    faqs: [
      { q: 'Od jakiej wartości zaczynają się wdrożenia?', a: 'Wartość pierwszych zamówień zaczyna się od 2 milionów złotych wzwyż i jest realizowana pod klucz - od projektu i budowy robotów po uruchomienie, dokumentację i serwis.' },
      { q: 'Czy trzeba kupić robota?', a: 'Nie zawsze. Oferujemy sprzedaż, wynajem sezonowy oraz rozliczenie za wykonaną pracę - klient płaci za rezultat, a robot i operatorzy pozostają po naszej stronie.' },
      { q: 'Gdzie zostają dane?', a: 'Nasze modele mogą pracować lokalnie, na urządzeniu, bez wysyłania obrazu na zewnątrz. Dane i zgodność zostają w Unii Europejskiej.' },
    ],
  },
  specsPage: {
    home: 'Start',
    cta: 'Zapytaj o szczegóły',
  },
  legalPage: {
    home: 'Start',
    updated: 'Ostatnia aktualizacja',
  },
};

/** Translations for locales beyond en/pl land here as they are produced. */
export const uiOverrides: Partial<Record<Locale, DeepPartial<UI>>> = { de, fr, es, it, pt, nl };

// Merge an override on top of the English base: objects recurse, arrays merge
// by index, and any `undefined` value falls back to the English original.
function deepMerge<T>(base: T, over: DeepPartial<T> | undefined): T {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base)) {
    const ov = over as unknown as readonly unknown[];
    return (base as readonly unknown[]).map((item, i) =>
      deepMerge(item as unknown, ov[i] as DeepPartial<unknown>),
    ) as unknown as T;
  }
  if (typeof base === 'object' && base !== null) {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const key of Object.keys(base as Record<string, unknown>)) {
      out[key] = deepMerge(
        (base as Record<string, unknown>)[key],
        (over as Record<string, unknown>)[key] as DeepPartial<unknown>,
      );
    }
    return out as T;
  }
  return (over as T) ?? base;
}

/** Full UI dictionary for a locale, English-backed with per-locale overrides. */
export function getUI(locale: Locale): UI {
  if (locale === 'en') return en;
  const over = locale === 'pl' ? pl : uiOverrides[locale];
  return over ? deepMerge(en, over) : en;
}
