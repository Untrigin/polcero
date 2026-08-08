// Legal documents for POLCERO. Structure adapted from the untrigin.com legal
// pages (../../legal.md) but rewritten for POLCERO (a robotics company) and its
// entity details. Authored in EN (primary) + PL; other locales fall back to EN.
import type { Locale } from '../lib/i18n';

export interface LegalSection { heading: string; body: string[] }
export interface LegalDoc {
  slug: 'privacy' | 'cookies' | 'terms';
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const COMPANY_EN =
  'POLCERO sp. z o.o., with its registered office in Kietrz, Poland, entered in the Register of Entrepreneurs of the National Court Register (KRS) under number 0001178417, NIP 8971955510, REGON 542000919 ("POLCERO", "we").';
const COMPANY_PL =
  'POLCERO sp. z o.o. z siedzibą w Kietrzu, wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego (KRS) pod numerem 0001178417, NIP 8971955510, REGON 542000919 („POLCERO", „my").';
const CONTACT_EN = 'e-mail: biuro@polcero.com, tel. +48 535 777 268.';
const CONTACT_PL = 'e-mail: biuro@polcero.com, tel. +48 535 777 268.';

const en: Record<string, LegalDoc> = {
  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy',
    updated: '8 August 2026',
    intro:
      'This Privacy Policy explains how POLCERO processes personal data in connection with this website (polcero.com) and enquiries made through it, in accordance with Regulation (EU) 2016/679 (GDPR).',
    sections: [
      {
        heading: '1. Data controller',
        body: [
          `The controller of your personal data is ${COMPANY_EN}`,
          `In all matters relating to the processing of personal data you may contact us at: ${CONTACT_EN}`,
        ],
      },
      {
        heading: '2. What data we collect',
        body: [
          'Contact form: the name, e-mail address, company (optional), subject and message content you provide when you write to us.',
          'Technical data: server logs (IP address, browser type, date and time of request) generated automatically when you visit the site, and information stored in or read from cookies and similar technologies (see our Cookie Policy).',
          'We do not knowingly collect data from children and we do not carry out automated decision-making or profiling that produces legal effects for you.',
        ],
      },
      {
        heading: '3. Purposes and legal bases',
        body: [
          'To respond to your enquiry and take steps at your request prior to entering into a contract - Art. 6(1)(b) GDPR.',
          'To operate, secure and maintain the website and to pursue our legitimate interests, including answering business correspondence and preventing abuse - Art. 6(1)(f) GDPR.',
          'To use analytics and marketing cookies - only on the basis of your consent, Art. 6(1)(a) GDPR, which you can withdraw at any time.',
          'To comply with legal obligations to which we are subject (e.g. accounting, responding to authorities) - Art. 6(1)(c) GDPR.',
        ],
      },
      {
        heading: '4. Cookies and analytics',
        body: [
          'We use essential cookies necessary for the site to function, and - with your consent - analytics and marketing cookies. You manage your choices through the cookie settings panel available on the site. Full details are in our Cookie Policy.',
        ],
      },
      {
        heading: '5. Recipients and processors',
        body: [
          'Your data may be shared with trusted providers who process it on our behalf under data-processing agreements, in particular our hosting and e-mail provider, and - subject to your consent - analytics providers.',
          'We do not sell your personal data.',
        ],
      },
      {
        heading: '6. Retention',
        body: [
          'Enquiry data is kept for as long as necessary to handle the matter and afterwards for the period required to establish, exercise or defend legal claims. Consent-based data is kept until you withdraw consent. Server logs are kept for a limited period for security and diagnostics.',
        ],
      },
      {
        heading: '7. Transfers outside the EEA',
        body: [
          'Where a provider processes data outside the European Economic Area, we ensure an adequate level of protection through appropriate safeguards, such as the European Commission’s Standard Contractual Clauses.',
        ],
      },
      {
        heading: '8. Your rights',
        body: [
          'You have the right to access your data, to rectification, erasure or restriction of processing, to data portability, and to object to processing based on our legitimate interest. Where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.',
          'You also have the right to lodge a complaint with the President of the Personal Data Protection Office (Prezes Urzędu Ochrony Danych Osobowych), ul. Stawki 2, 00-193 Warsaw, Poland.',
        ],
      },
      {
        heading: '9. Contact',
        body: [`To exercise your rights or ask questions about this policy, contact us at ${CONTACT_EN}`],
      },
    ],
  },
  cookies: {
    slug: 'cookies',
    title: 'Cookie Policy',
    updated: '8 August 2026',
    intro:
      'This Cookie Policy explains how POLCERO uses cookies and similar technologies (such as browser local storage) on polcero.com.',
    sections: [
      {
        heading: '1. What are cookies',
        body: [
          'Cookies are small text files stored on your device by your browser. Similar technologies, such as local storage, work in a comparable way. They let a site remember your actions and preferences.',
        ],
      },
      {
        heading: '2. Categories we use',
        body: [
          'Essential - necessary for the site to work and to remember your privacy choices. These are always active and do not require consent. Example: the local-storage entry that records your cookie preferences.',
          'Analytics - help us understand how the site is used so we can improve it. Loaded only with your consent.',
          'Marketing - used to measure and personalise campaigns. Loaded only with your consent.',
          'No analytics or marketing technologies are loaded before you give consent.',
        ],
      },
      {
        heading: '3. Managing your consent',
        body: [
          'When you first visit, a banner lets you accept all, reject optional, or choose categories. You can change your decision at any time by opening the cookie settings panel (the "Cookie settings" link in the footer).',
          'You can also block or delete cookies in your browser settings; note that disabling essential cookies may affect how the site works.',
        ],
      },
      {
        heading: '4. Changes',
        body: [
          'We may update this Cookie Policy as our use of cookies changes. The date above indicates the latest revision.',
        ],
      },
      {
        heading: '5. Contact',
        body: [`Questions about cookies? Contact us at ${CONTACT_EN}`],
      },
    ],
  },
  terms: {
    slug: 'terms',
    title: 'Terms of Service',
    updated: '8 August 2026',
    intro:
      'These Terms govern the use of the polcero.com website. By using the website you accept these Terms.',
    sections: [
      {
        heading: '1. Website operator',
        body: [`The website is operated by ${COMPANY_EN}`, `Contact: ${CONTACT_EN}`],
      },
      {
        heading: '2. Use of the website',
        body: [
          'The website and its content are provided for informational purposes about POLCERO and its products and services. You may browse and use the site for lawful purposes only.',
          'You agree not to interfere with the operation or security of the site, not to attempt unauthorised access, and not to use it in a way that infringes the rights of others or applicable law.',
        ],
      },
      {
        heading: '3. Intellectual property',
        body: [
          'All content on the website - text, graphics, logos, images, layout and software - is owned by POLCERO or its licensors and is protected by law. You may not copy, distribute or create derivative works without our prior written consent, except as permitted by mandatory law.',
        ],
      },
      {
        heading: '4. Enquiries - no commercial offer',
        body: [
          'Information published on the website, including product descriptions and indicative pricing ("on request"), is not a commercial offer within the meaning of Article 66 of the Polish Civil Code. It is an invitation to enter into negotiations. A binding agreement arises only through a separately concluded contract.',
          'Messages sent through the contact form are requests for contact and do not create any obligation on either side.',
        ],
      },
      {
        heading: '5. Liability',
        body: [
          'We take care to keep the information on the website accurate and up to date, but we do not warrant that it is complete, current or error-free. To the extent permitted by law, POLCERO is not liable for decisions taken solely on the basis of website content.',
        ],
      },
      {
        heading: '6. External links',
        body: [
          'The website may contain links to third-party sites. We are not responsible for the content or privacy practices of those sites.',
        ],
      },
      {
        heading: '7. Personal data',
        body: [
          'Personal data is processed in accordance with our Privacy Policy and Cookie Policy.',
        ],
      },
      {
        heading: '8. Complaints',
        body: [
          `You may submit complaints regarding the operation of the website by e-mail to biuro@polcero.com. Please describe the issue and your contact details. We will consider the complaint and respond without undue delay, no later than 30 days from receipt.`,
        ],
      },
      {
        heading: '9. Governing law and disputes',
        body: [
          'These Terms are governed by Polish law. Any disputes will be resolved by the Polish court having jurisdiction over the seat of POLCERO, unless mandatory consumer-protection rules provide otherwise.',
        ],
      },
      {
        heading: '10. Changes to these Terms',
        body: [
          'We may amend these Terms. The version published on the website with the date above applies to your current use.',
        ],
      },
    ],
  },
};

const pl: Record<string, LegalDoc> = {
  privacy: {
    slug: 'privacy',
    title: 'Polityka prywatności',
    updated: '8 sierpnia 2026',
    intro:
      'Niniejsza Polityka prywatności wyjaśnia, jak POLCERO przetwarza dane osobowe w związku z tą stroną internetową (polcero.com) oraz zapytaniami składanymi za jej pośrednictwem, zgodnie z rozporządzeniem (UE) 2016/679 (RODO).',
    sections: [
      {
        heading: '1. Administrator danych',
        body: [
          `Administratorem Twoich danych osobowych jest ${COMPANY_PL}`,
          `We wszystkich sprawach dotyczących przetwarzania danych osobowych możesz skontaktować się z nami: ${CONTACT_PL}`,
        ],
      },
      {
        heading: '2. Jakie dane zbieramy',
        body: [
          'Formularz kontaktowy: imię i nazwisko, adres e-mail, firma (opcjonalnie), temat i treść wiadomości, które podajesz, pisząc do nas.',
          'Dane techniczne: logi serwera (adres IP, typ przeglądarki, data i godzina żądania) generowane automatycznie podczas wizyty oraz informacje zapisywane w plikach cookie i podobnych technologiach (zob. Politykę cookie).',
          'Nie zbieramy świadomie danych dzieci i nie prowadzimy zautomatyzowanego podejmowania decyzji ani profilowania wywołującego wobec Ciebie skutki prawne.',
        ],
      },
      {
        heading: '3. Cele i podstawy prawne',
        body: [
          'Udzielenie odpowiedzi na zapytanie i podjęcie działań na Twoje żądanie przed zawarciem umowy - art. 6 ust. 1 lit. b RODO.',
          'Prowadzenie, zabezpieczenie i utrzymanie strony oraz realizacja naszych prawnie uzasadnionych interesów, w tym obsługa korespondencji i przeciwdziałanie nadużyciom - art. 6 ust. 1 lit. f RODO.',
          'Stosowanie cookie analitycznych i marketingowych - wyłącznie na podstawie Twojej zgody, art. 6 ust. 1 lit. a RODO, którą możesz wycofać w każdej chwili.',
          'Wypełnienie obowiązków prawnych ciążących na nas (np. rachunkowych, odpowiedzi organom) - art. 6 ust. 1 lit. c RODO.',
        ],
      },
      {
        heading: '4. Pliki cookie i analityka',
        body: [
          'Używamy niezbędnych plików cookie koniecznych do działania strony oraz - za Twoją zgodą - cookie analitycznych i marketingowych. Wyborami zarządzasz w panelu ustawień cookie dostępnym na stronie. Szczegóły znajdziesz w Polityce cookie.',
        ],
      },
      {
        heading: '5. Odbiorcy i podmioty przetwarzające',
        body: [
          'Twoje dane mogą być powierzane zaufanym dostawcom przetwarzającym je w naszym imieniu na podstawie umów powierzenia, w szczególności dostawcy hostingu i poczty, a - za Twoją zgodą - dostawcom narzędzi analitycznych.',
          'Nie sprzedajemy Twoich danych osobowych.',
        ],
      },
      {
        heading: '6. Okres przechowywania',
        body: [
          'Dane z zapytań przechowujemy przez czas niezbędny do obsługi sprawy, a następnie przez okres wymagany do ustalenia, dochodzenia lub obrony roszczeń. Dane oparte na zgodzie - do jej wycofania. Logi serwera przechowujemy przez ograniczony czas dla celów bezpieczeństwa i diagnostyki.',
        ],
      },
      {
        heading: '7. Przekazywanie poza EOG',
        body: [
          'Jeżeli dostawca przetwarza dane poza Europejskim Obszarem Gospodarczym, zapewniamy odpowiedni poziom ochrony za pomocą właściwych zabezpieczeń, takich jak Standardowe Klauzule Umowne Komisji Europejskiej.',
        ],
      },
      {
        heading: '8. Twoje prawa',
        body: [
          'Masz prawo dostępu do danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, prawo do przenoszenia danych oraz prawo sprzeciwu wobec przetwarzania opartego na naszym prawnie uzasadnionym interesie. Gdy przetwarzanie opiera się na zgodzie, możesz ją wycofać w każdej chwili bez wpływu na zgodność z prawem przetwarzania przed wycofaniem.',
          'Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.',
        ],
      },
      {
        heading: '9. Kontakt',
        body: [`Aby skorzystać z praw lub zadać pytania dotyczące tej polityki, napisz do nas: ${CONTACT_PL}`],
      },
    ],
  },
  cookies: {
    slug: 'cookies',
    title: 'Polityka cookie',
    updated: '8 sierpnia 2026',
    intro:
      'Niniejsza Polityka cookie wyjaśnia, jak POLCERO wykorzystuje pliki cookie i podobne technologie (np. pamięć lokalną przeglądarki) na stronie polcero.com.',
    sections: [
      {
        heading: '1. Czym są pliki cookie',
        body: [
          'Pliki cookie to niewielkie pliki tekstowe zapisywane na Twoim urządzeniu przez przeglądarkę. Podobne technologie, jak pamięć lokalna, działają w zbliżony sposób. Pozwalają stronie zapamiętać Twoje działania i preferencje.',
        ],
      },
      {
        heading: '2. Kategorie, których używamy',
        body: [
          'Niezbędne - konieczne do działania strony i zapamiętania Twoich wyborów prywatności. Są zawsze aktywne i nie wymagają zgody. Przykład: wpis w pamięci lokalnej zapisujący Twoje preferencje cookie.',
          'Analityczne - pomagają nam zrozumieć, jak używana jest strona, abyśmy mogli ją ulepszać. Ładowane wyłącznie za Twoją zgodą.',
          'Marketingowe - służą do pomiaru i personalizacji kampanii. Ładowane wyłącznie za Twoją zgodą.',
          'Żadne technologie analityczne ani marketingowe nie są ładowane przed wyrażeniem przez Ciebie zgody.',
        ],
      },
      {
        heading: '3. Zarządzanie zgodą',
        body: [
          'Przy pierwszej wizycie baner pozwala zaakceptować wszystkie, odrzucić opcjonalne lub wybrać kategorie. Decyzję możesz zmienić w każdej chwili, otwierając panel ustawień cookie (link „Ustawienia cookie" w stopce).',
          'Możesz również blokować lub usuwać cookie w ustawieniach przeglądarki; wyłączenie cookie niezbędnych może wpłynąć na działanie strony.',
        ],
      },
      {
        heading: '4. Zmiany',
        body: [
          'Możemy aktualizować niniejszą Politykę cookie w miarę zmian w wykorzystaniu plików cookie. Data powyżej wskazuje ostatnią aktualizację.',
        ],
      },
      {
        heading: '5. Kontakt',
        body: [`Masz pytania o cookie? Napisz do nas: ${CONTACT_PL}`],
      },
    ],
  },
  terms: {
    slug: 'terms',
    title: 'Regulamin',
    updated: '8 sierpnia 2026',
    intro:
      'Niniejszy Regulamin określa zasady korzystania ze strony internetowej polcero.com. Korzystając ze strony, akceptujesz Regulamin.',
    sections: [
      {
        heading: '1. Operator strony',
        body: [`Operatorem strony jest ${COMPANY_PL}`, `Kontakt: ${CONTACT_PL}`],
      },
      {
        heading: '2. Korzystanie ze strony',
        body: [
          'Strona i jej zawartość mają charakter informacyjny i dotyczą POLCERO oraz jej produktów i usług. Możesz przeglądać i korzystać ze strony wyłącznie w celach zgodnych z prawem.',
          'Zobowiązujesz się nie zakłócać działania ani bezpieczeństwa strony, nie podejmować prób nieuprawnionego dostępu oraz nie korzystać z niej w sposób naruszający prawa innych osób lub obowiązujące przepisy.',
        ],
      },
      {
        heading: '3. Własność intelektualna',
        body: [
          'Cała zawartość strony - teksty, grafika, logo, zdjęcia, układ i oprogramowanie - należy do POLCERO lub jej licencjodawców i jest chroniona prawem. Bez naszej uprzedniej pisemnej zgody nie wolno jej kopiować, rozpowszechniać ani tworzyć opracowań, z wyjątkiem przypadków dozwolonych bezwzględnie obowiązującym prawem.',
        ],
      },
      {
        heading: '4. Zapytania - brak oferty handlowej',
        body: [
          'Informacje publikowane na stronie, w tym opisy produktów i orientacyjne ceny („na zapytanie"), nie stanowią oferty w rozumieniu art. 66 Kodeksu cywilnego. Są zaproszeniem do negocjacji. Wiążąca umowa powstaje wyłącznie na podstawie odrębnie zawartego kontraktu.',
          'Wiadomości przesyłane przez formularz kontaktowy są prośbą o kontakt i nie rodzą zobowiązań po żadnej ze stron.',
        ],
      },
      {
        heading: '5. Odpowiedzialność',
        body: [
          'Dokładamy starań, aby informacje na stronie były aktualne i poprawne, jednak nie gwarantujemy ich kompletności, aktualności ani bezbłędności. W zakresie dozwolonym prawem POLCERO nie ponosi odpowiedzialności za decyzje podjęte wyłącznie na podstawie treści strony.',
        ],
      },
      {
        heading: '6. Linki zewnętrzne',
        body: [
          'Strona może zawierać linki do witryn podmiotów trzecich. Nie odpowiadamy za ich treść ani praktyki dotyczące prywatności.',
        ],
      },
      {
        heading: '7. Dane osobowe',
        body: ['Dane osobowe przetwarzamy zgodnie z Polityką prywatności i Polityką cookie.'],
      },
      {
        heading: '8. Reklamacje',
        body: [
          'Reklamacje dotyczące działania strony możesz zgłaszać e-mailem na adres biuro@polcero.com. Opisz problem i podaj dane kontaktowe. Rozpatrzymy reklamację i odpowiemy bez zbędnej zwłoki, nie później niż w ciągu 30 dni od otrzymania.',
        ],
      },
      {
        heading: '9. Prawo właściwe i spory',
        body: [
          'Regulamin podlega prawu polskiemu. Spory rozstrzyga sąd polski właściwy dla siedziby POLCERO, chyba że bezwzględnie obowiązujące przepisy o ochronie konsumentów stanowią inaczej.',
        ],
      },
      {
        heading: '10. Zmiany Regulaminu',
        body: [
          'Możemy zmieniać Regulamin. Do bieżącego korzystania stosuje się wersję opublikowaną na stronie z datą wskazaną powyżej.',
        ],
      },
    ],
  },
};

const byLocale: Partial<Record<Locale, Record<string, LegalDoc>>> = { en, pl };

export function getLegalDoc(slug: 'privacy' | 'cookies' | 'terms', locale: Locale): LegalDoc {
  return (byLocale[locale] ?? en)[slug] ?? en[slug];
}
