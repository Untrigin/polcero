import type { Locale } from '../lib/i18n';
import { overrides } from './i18n/overrides';

export type HeadingPart = { text: string; weight?: 300 | 400 | 500 | 700 };

export interface Product {
  slug: string;
  name: string;
  category: string;
  blurb: string;
  image: string;
  kind: 'humanoid' | 'mobile-humanoid' | 'specialized' | 'drone' | 'software';
  specs?: { label: string; value: string }[];
  subtitle?: string;
  price?: string;
  uses?: string[];
  /** Chassis variants shown inside a single "Specialized robots" product. */
  platforms?: { name: string; blurb: string; image: string; drive: string; terrain: string }[];
}

export interface Industry {
  slug: string;
  name: string;
  blurb: string;
  image: string;
  branchSlugs: string[];
  intro: string;
  challenges: { title: string; text: string }[];
  approach: { title: string; text: string }[];
}

export interface Branch {
  slug: string;
  icon: 'Bot' | 'Brain' | 'Cpu' | 'Sprout' | 'Shield' | 'Zap';
  badge: string;
  name: string;
  tagline: string;
  desc: string;
  intro?: string;
  points?: string[];
  note?: string;
  sections?: { title: string; desc: string }[];
}

export interface SiteContent {
  brand: string;
  tagline: string;
  nav: {
    products: string;
    solutions: string;
    services: string;
    industries: string;
    useCases: string;
    company: string;
    news: string;
    contact: string;
    cta: string;
  };
  services: { eyebrow: string; h2: HeadingPart[]; lead: string; cta: string; all: string };
  branches: Branch[];
  hero: {
    eyebrow: string;
    h1: HeadingPart[];
    subhead: string;
    h2: HeadingPart[];
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
  };
  stats: { value: string; label: string }[];
  platform: {
    wordmark: string;
    h2: HeadingPart[];
    body: string;
    cta: string;
    layers: { label: string; title: string; body: string }[];
  };
  tabs: {
    h2: HeadingPart[];
    items: { id: string; label: string; title: string; body: string; image: string; alt: string }[];
  };
  overview: { h2: HeadingPart[]; lead: string };
  cards: { eyebrow: string; h2: HeadingPart[] };
  mission: { h2: HeadingPart[]; body: string; imageAlt: string };
  closing: { h2: HeadingPart[]; body: string; cta: string };
  footer: {
    tagline: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    legal: string;
    rights: string;
  };
  products: Product[];
  industries: Industry[];
}

const pl: SiteContent = {
  brand: 'POLCERO',
  tagline: 'Autonomiczne roboty modułowe dla przemysłu i rolnictwa',
  nav: {
    products: 'Produkty',
    solutions: 'Rozwiązania',
    services: 'Kierunki',
    industries: 'Branże',
    useCases: 'Zastosowania',
    company: 'Firma',
    news: 'Aktualności',
    contact: 'Kontakt',
    cta: 'Porozmawiajmy',
  },
  services: {
    eyebrow: 'KIERUNKI BIZNESOWE',
    h2: [
      { text: 'Pięć kierunków, ', weight: 300 },
      { text: 'jeden mózg AI', weight: 700 },
    ],
    lead: 'Od gotowych cobotów po fotonikę w laboratorium - każdy kierunek korzysta z tej samej warstwy inteligencji POLCERO.',
    cta: 'Poznaj kierunki',
    all: 'Wszystkie kierunki',
  },
  branches: [
    { slug: 'icb-robots', icon: 'Bot', badge: 'LIVE', name: 'ICB Robots', tagline: 'Przemysłowe coboty i AMR', desc: 'Przemysłowe roboty współpracujące, autonomiczne wózki widłowe i platformy AMR - projektowane i dostarczane na zamówienie.' },
    { slug: 'ai-systems', icon: 'Brain', badge: 'NA ZAMÓWIENIE', name: 'AI Systems', tagline: 'Mózg AI dla każdego robota', desc: 'Budujemy warstwę inteligencji dla robotów humanoidalnych i specjalistycznych: percepcja, planowanie, autonomia, zarządzanie flotą.' },
    { slug: 'robots', icon: 'Cpu', badge: 'NA ZAMÓWIENIE', name: 'Robots', tagline: 'Platforma + roboty specjalistyczne', desc: 'Modułowa platforma POLCERO i katalog robotów, które wdrażamy z naszym mózgiem AI - dla każdego rynku, na zamówienie.' },
    { slug: 'farma-ai', icon: 'Sprout', badge: 'NA ZAMÓWIENIE', name: 'Farma AI', tagline: 'AI rolniczy + roboty polowe', desc: 'Autonomiczna flota robotów polowych z mózgiem AI-rolnika: siew, pielęgnacja, selektywne zbiory - model RaaS (robot jako usługa).' },
    { slug: 'photonic-processors', icon: 'Zap', badge: 'B+R', name: 'Procesory fotoniczne', tagline: 'Obliczenia AI za pomocą światła', desc: 'Kierunek B+R: obliczenia fotoniczne dla przyspieszenia wnioskowania AI w naszych robotach - mniejsza moc, większa przepustowość.' },
  ],
  hero: {
    eyebrow: 'ROBOTY MODUŁOWE · POLSKA',
    h1: [
      { text: 'Autonomiczne ', weight: 300 },
      { text: 'roboty', weight: 700 },
      { text: ' modułowe', weight: 300 },
    ],
    subhead: 'Nie budujemy jednego robota. Budujemy ekosystem, który ma sens dopiero razem.',
    h2: [
      { text: 'Jedna platforma, ', weight: 300 },
      { text: 'wymienne moduły', weight: 700 },
      { text: ', dowolne zadanie.', weight: 300 },
    ],
    body: 'POLCERO łączy trzy warstwy: platformę sztucznej inteligencji, która planuje i nadzoruje pracę, transport, który dowozi robota na miejsce, oraz modułowy robot, który sam dobiera podwozie i moduł zadaniowy do zastanego zadania. Zlecasz cel, nie ruch.',
    ctaPrimary: 'Porozmawiajmy o wdrożeniu',
    ctaSecondary: 'Zobacz platformę',
    imageAlt: 'Modułowy robot POLCERO na platformie jezdnej w hali produkcyjnej',
  },
  stats: [
    { value: '500 kg', label: 'udźwig drona transportowego' },
    { value: '€200B+', label: 'globalny rynek robotyki do 2030' },
    { value: '≈40%', label: 'niższy koszt zbioru na sztukę' },
    { value: '2027', label: 'start wdrożeń u klientów' },
  ],
  platform: {
    wordmark: 'POLCERO OS',
    h2: [
      { text: 'Mózg, który ', weight: 300 },
      { text: 'zleca cel', weight: 700 },
      { text: ' - nie zaprogramowany ruch.', weight: 300 },
    ],
    body: 'Platforma sztucznej inteligencji przyjmuje zadanie, planuje jego wykonanie, nadzoruje przebieg i dokumentuje wynik. Robot uczy się z pokazu - operator wykonuje zadanie, system rozumie i działa autonomicznie, bez skomplikowanego programowania. Modele mogą pracować lokalnie, na urządzeniu, bez wysyłania obrazu na zewnątrz.',
    cta: 'Jak działa platforma',
    layers: [
      { label: '01', title: 'Warstwa AI', body: 'Planowanie, nadzór i dokumentacja zadania. Dane i zgodność zostają w Unii Europejskiej.' },
      { label: '02', title: 'Warstwa transportowa', body: 'Dron transportowy dowozi robota tam, gdzie dojazd jest kosztowny lub niemożliwy - docelowo także same roboty.' },
      { label: '03', title: 'Robot modułowy', body: 'Wspólny moduł korpusu, wymienne podwozie i moduły zadaniowe. Rozpoznaje sytuację i sam dobiera narzędzie.' },
    ],
  },
  tabs: {
    h2: [
      { text: 'Gdzie ', weight: 300 },
      { text: 'pracuje', weight: 700 },
      { text: ' POLCERO', weight: 300 },
    ],
    items: [
      {
        id: 'industry',
        label: 'Przemysł',
        title: 'Robot dojeżdża do stanowiska, a nie jest do niego przykręcony',
        body: 'Humanoid na platformie jezdnej wchodzi w halę zaprojektowaną pod człowieka bez jej przebudowy. Sięga tam, gdzie sięga pracownik, obsługuje kilka stanowisk zamiast stać przy jednym i wykonuje dwie operacje w jednym cyklu.',
        image: '/media/tab-industry.webp',
        alt: 'Humanoid POLCERO obsługujący stanowisko montażowe w hali',
      },
      {
        id: 'agriculture',
        label: 'Rolnictwo',
        title: 'Selektywna manipulacja tam, gdzie zawodzi masowy zbiór',
        body: 'Robot z modułem zadaniowym do rolnictwa zbiera warzywa w szklarniach, tunelach i na polu, a gdy trzeba, wymienia chwytak na laser do odchwaszczania. Praca w miejscach, gdzie zawodzi sygnał satelitarny.',
        image: '/media/tab-services.webp',
        alt: 'Robot POLCERO pracujący między rzędami upraw w tunelu foliowym',
      },
      {
        id: 'logistics',
        label: 'Logistyka',
        title: 'Transport tam, gdzie kończy się droga',
        body: 'Dron transportowy dostarcza części, materiały i same roboty w teren górski, na place budowy bez utwardzonych dróg oraz w obszary odcięte po awarii lub powodzi. To brakujące ogniwo modelu wynajmu godzinowego.',
        image: '/media/tab-home.webp',
        alt: 'Dron transportowy POLCERO przenoszący ładunek nad terenem trudno dostępnym',
      },
    ],
  },
  overview: {
    h2: [
      { text: 'Jedna platforma w ', weight: 300 },
      { text: 'wielu konfiguracjach', weight: 700 },
    ],
    lead: 'Nie budujemy osobnej maszyny na każde zadanie. Budujemy jeden moduł korpusu, osadzamy go na wybranym podwoziu i uzbrajamy w moduł zadaniowy - ta sama maszyna, inne narzędzie i program, obsługuje inne zadanie.',
  },
  cards: {
    eyebrow: 'DOSTĘPNE NA ZAMÓWIENIE',
    h2: [
      { text: 'Roboty budowane ', weight: 300 },
      { text: 'pod proces', weight: 700 },
      { text: ' klienta', weight: 300 },
    ],
  },
  mission: {
    h2: [
      { text: 'Każde kolejne wdrożenie ', weight: 300 },
      { text: 'tańsze i szybsze', weight: 700 },
      { text: ' od poprzedniego', weight: 300 },
    ],
    body: 'Wspólny moduł korpusu jest wielokrotnego użytku, a dane z poprzednich wdrożeń skracają trening modeli. To jest dla nas główne kryterium powodzenia - droga od firmy realizującej projekty do producenta robotów.',
    imageAlt: 'Flota autonomicznych robotów POLCERO w nowoczesnym zakładzie produkcyjnym',
  },
  closing: {
    h2: [
      { text: 'Sprzedajemy ', weight: 300 },
      { text: 'rezultat', weight: 700 },
      { text: ', nie maszynę.', weight: 300 },
    ],
    body: 'Rozliczamy się za zebrany areał, obsłużony wolumen i dotrzymany termin. Ryzyko techniczne bierzemy na siebie, bo to my odpowiadamy za technologię. Porozmawiajmy o Twoim procesie.',
    cta: 'Porozmawiajmy',
  },
  footer: {
    tagline: 'Autonomiczne roboty modułowe dla przemysłu i rolnictwa. Projektowane, budowane i serwisowane w Polsce.',
    columns: [
      {
        title: 'Produkty',
        links: [
          { label: 'Humanoid', href: '/products/humanoid/' },
          { label: 'Humanoid na platformie jezdnej', href: '/products/mobile-humanoid/' },
          { label: 'Roboty specjalistyczne', href: '/products/specialized-robots/' },
          { label: 'Dron transportowy', href: '/products/transport-drone/' },
          { label: 'Specyfikacja', href: '/specs/' },
        ],
      },
      {
        title: 'Branże',
        links: [
          { label: 'Przemysł', href: '/industries/industry/' },
          { label: 'Rolnictwo', href: '/industries/agriculture/' },
          { label: 'Budownictwo', href: '/industries/construction/' },
          { label: 'Logistyka', href: '/industries/logistics/' },
          { label: 'Sektor publiczny', href: '/industries/public-sector/' },
        ],
      },
      {
        title: 'Firma',
        links: [
          { label: 'Kierunki', href: '/services/' },
          { label: 'O nas', href: '/about/' },
          { label: 'Aktualności', href: '/news/' },
          { label: 'Kontakt', href: '/contact/' },
        ],
      },
      {
        title: 'Zasoby',
        links: [
          { label: 'Platforma POLCERO OS', href: '/products/polcero-os/' },
          { label: 'O nas (PDF)', href: '/POLCERO-About-us.pdf' },
          { label: 'RSS', href: '/rss.xml' },
        ],
      },
    ],
    legal: 'Polityka prywatności',
    rights: 'Wszelkie prawa zastrzeżone.',
  },
  products: [
    { slug: 'humanoid', name: 'Humanoid', category: 'Humanoid', kind: 'humanoid', blurb: 'Moduł korpusu uzupełniony o nogi i dwa ramiona. Wchodzi w otoczenie zaprojektowane pod człowieka i obsługuje maszyny przeznaczone do obsługi ręcznej.', image: '/media/p-humanoid.webp' },
    { slug: 'mobile-humanoid', name: 'Humanoid na platformie jezdnej', category: 'Humanoid', kind: 'mobile-humanoid', blurb: 'Ten sam humanoid osadzony na platformie jezdnej. Dojeżdża do stanowiska i obsługuje kilka miejsc zamiast stać przy jednym.', image: '/media/p-mobile.webp' },
    { slug: 'specialized-robots', name: 'Roboty specjalistyczne', category: 'Roboty specjalistyczne', kind: 'specialized', image: '/media/chassis-lineup.webp',
      blurb: 'Ten sam moduł korpusu - sterowanie, AI i baterie hot-swap - na podwoziu, którego wymaga Twój teren: kroczącym, gąsienicowym, kołowym lub kołowo-nożnym. Wymień platformę, zachowaj mózg i moduły zadaniowe.',
      platforms: [
        { name: 'Robot kroczący', image: '/media/chassis-legged.webp', drive: 'Podwozie kroczące (4 nogi)', terrain: 'Schody, przeszkody, teren nierówny', blurb: 'Moduł korpusu na podwoziu kroczącym. Pokonuje schody, progi i teren niedostępny dla kół.' },
        { name: 'Robot gąsienicowy', image: '/media/chassis-tracked.webp', drive: 'Podwozie gąsienicowe', terrain: 'Nieutwardzony, ciężki teren, place budowy', blurb: 'Podwozie gąsienicowe do trudnego, nierównego terenu, placów budowy i pracy w terenie.' },
        { name: 'Robot kołowy', image: '/media/chassis-wheeled.webp', drive: 'Podwozie kołowe', terrain: 'Posadzki, magazyny, płaski teren', blurb: 'Szybkie, ciche podwozie kołowe do posadzek przemysłowych, magazynów i monitoringu.' },
        { name: 'Robot kołowo-nożny', image: '/media/chassis-wheelleg.webp', drive: 'Podwozie kołowo-nożne', terrain: 'Płaski teren, przeszkody i szyny', blurb: 'Hybrydowe podwozie kołowo-nożne: jedzie po płaskim i pokonuje przeszkody oraz szyny.' },
      ] },
    { slug: 'transport-drone', name: 'Dron transportowy', category: 'Dron transportowy', kind: 'drone', blurb: 'Ciężki dron transportowy do przenoszenia robotów, modułów i ładunków w trudno dostępne miejsca. Dostarczamy robota tam, gdzie dojazd jest niemożliwy.', image: '/media/p-drone.webp', specs: [ { label: 'Nośność maksymalna', value: '500 kg' }, { label: 'Waga drona', value: '90 kg' }, { label: 'Konstrukcja', value: 'modułowa' }, { label: 'Przeznaczenie', value: 'roboty · moduły · ładunki' } ] },
    { slug: 'polcero-os', name: 'POLCERO OS', category: 'Oprogramowanie', kind: 'software', blurb: 'Moduł korpusu z warstwą AI: sterowanie, percepcja i planowanie. Robot uczy się z pokazu - operator wykonuje zadanie, system rozumie i działa autonomicznie, skracając czas programowania nawet dziesięciokrotnie.', image: '/media/r-os.webp' },
  ],
  industries: [
    {
      slug: 'industry', name: 'Przemysł', blurb: 'Humanoid na platformie jezdnej w halach zaprojektowanych pod człowieka.', image: '/media/tab-industry.webp', branchSlugs: ['icb-robots', 'ai-systems', 'robots'],
      intro: 'Hale produkcyjne, stanowiska, przenośniki i wysokości robocze są od dziesięcioleci projektowane pod człowieka. Robot o ludzkich proporcjach wchodzi w to otoczenie bez przebudowywania go - sięga tam, gdzie sięga pracownik, i obsługuje maszyny zaprojektowane do obsługi ręcznej. Klient nie musi przystosowywać zakładu do robota, tylko robota do zakładu.',
      challenges: [
        { title: 'Brak rąk do pracy', text: 'Powtarzalne prace fizyczne i porządkowe coraz trudniej obsadzić, a rotacja rośnie.' },
        { title: 'Sztywne stanowiska', text: 'Roboty przemysłowe są na stałe przykręcone do jednego miejsca w hali i nie nadążają za zmianą procesu.' },
        { title: 'Kosztowna przebudowa', text: 'Automatyzacja zwykle wymaga przeprojektowania hali pod maszynę, co podnosi próg wejścia.' },
        { title: 'Integracja z parkiem maszyn', text: 'Nowe urządzenie musi współpracować z maszynami, które u klienta już stoją i działają.' },
      ],
      approach: [
        { title: 'Robot dojeżdża do stanowiska', text: 'Humanoid na platformie jezdnej obsługuje kilka stanowisk zamiast stać przy jednym i domyka luki między maszynami klienta.' },
        { title: 'Dwie operacje w jednym cyklu', text: 'Układ dwuramienny z obrotem w pasie zwiększa przepustowość stanowiska przy pracy powtarzalnej.' },
        { title: 'Wdrożenie pod klucz', text: 'Projekt, budowa, integracja, uruchomienie, dokumentacja i serwis - od 2 mln €, z oceną zgodności.' },
      ],
    },
    {
      slug: 'agriculture', name: 'Rolnictwo', blurb: 'Selektywny zbiór i pielęgnacja w tunelach i szklarniach.', image: '/media/agri-field.webp', branchSlugs: ['farma-ai', 'robots'],
      intro: 'Wielcy producenci maszyn rolniczych są bardzo dobrzy w zbiorze masowym i w nawigacji po otwartym polu. Selektywna manipulacja w miękkim, wrażliwym plonie oraz praca w tunelach i szklarniach, gdzie zawodzi sygnał satelitarny, pozostają obszarem słabo obsadzonym. To jest nasz obszar i wybraliśmy go świadomie.',
      challenges: [
        { title: 'Brak pracowników sezonowych', text: 'Przy jednej farmie pracuje w szczycie od stu do stu pięćdziesięciu osób, a chętnych jest coraz mniej.' },
        { title: 'Rosnące koszty pracy', text: 'Pełny koszt jednego pracownika sezonowego to dziś około 15 900 € miesięcznie - i rośnie.' },
        { title: 'Presja na ograniczenie chemii', text: 'Pielęgnacja i odchwaszczanie muszą być coraz bardziej precyzyjne i punktowe.' },
        { title: 'Krótki sezon', text: 'Gospodarstwo potrzebuje maszyny przez sześć miesięcy - nie ma powodu zamrażać kapitału na cały rok.' },
      ],
      approach: [
        { title: 'Moduł zadaniowy do rolnictwa', text: 'Robot z ramionami i chwytakiem zbiera plon, a gdy trzeba wymienia narzędzie na laser do odchwaszczania.' },
        { title: 'Rozliczenie za rezultat', text: 'Celujemy w 9-12 eurocent za sztukę wobec 15-20 eurocent przy zbiorze ręcznym - około 40% mniej.' },
        { title: 'Praca bez sygnału GPS', text: 'Selektywny zbiór i pielęgnacja w tunelach i szklarniach, gdzie nawigacja satelitarna zawodzi.' },
      ],
    },
    {
      slug: 'construction', name: 'Budownictwo', blurb: 'Inspekcja, transport ciężki i patrol BHP - prace, które mogą przejąć roboty.', image: '/media/tab-industry.webp', branchSlugs: ['robots', 'ai-systems', 'icb-robots'],
      intro: 'Na placu budowy roboty przejmują prace ryzykowne lub żmudne dla człowieka: inspekcję i porównanie stanu z modelem BIM, wytyczanie, transport ciężki oraz patrole BHP. Podwozie gąsienicowe radzi sobie z nieutwardzonym, nierównym terenem, a dron transportowy uzupełnia dostawy z zewnątrz.',
      challenges: [
        { title: 'Ryzyko wypadkowe', text: 'Prace na wysokości, w zapyleniu i w ruchu maszyn są niebezpieczne dla ludzi.' },
        { title: 'Rozbieżność BIM-rzeczywistość', text: 'Stan faktyczny odbiega od modelu, a wychwycenie różnic zajmuje czas.' },
        { title: 'Opóźniony monitoring postępu', text: 'Dokumentacja postępu prac jest wykonywana rzadko i ręcznie.' },
        { title: 'Trudny, nieutwardzony teren', text: 'Dojazd i transport materiałów po placu bez dróg jest kosztowny.' },
      ],
      approach: [
        { title: 'Inspekcja i porównanie z BIM', text: 'Robot rejestruje stan placu i zestawia go z modelem, wychwytując różnice.' },
        { title: 'Transport w trudnym terenie', text: 'Podwozie gąsienicowe przewozi materiały między strefami, a dron dowozi je z zewnątrz.' },
        { title: 'Patrol BHP i monitoring', text: 'Regularne obchody i dokumentacja bez narażania ludzi, z danymi po stronie klienta.' },
      ],
    },
    {
      slug: 'logistics', name: 'Logistyka', blurb: 'Dron transportowy tam, gdzie kończy się droga.', image: '/media/tab-home.webp', branchSlugs: ['icb-robots', 'robots'],
      intro: 'Robot jest wart tyle, ile jest wart w miejscu, w którym akurat jest potrzebny. Warstwa transportowa - z dronem o udźwigu do 500 kilogramów, którego prototyp już mamy - dostarcza części, materiały i same roboty tam, gdzie dojazd jest kosztowny, długi albo niemożliwy.',
      challenges: [
        { title: 'Teren trudno dostępny', text: 'Obszary górskie i leśne, place budowy bez utwardzonych dróg, tereny odcięte po awarii lub powodzi.' },
        { title: 'Koszt floty i kierowców', text: 'Utrzymanie pojazdów i kierowców oraz zależność od korków i stanu dróg obciążają każdą usługę.' },
        { title: 'Rozładunek i paletyzacja', text: 'Powtarzalny, ciężki transport wewnętrzny w magazynie wciąż wymaga rąk do pracy.' },
        { title: 'Ostatnia mila robota', text: 'Koszt i czas dowiezienia robota decydują o opłacalności wynajmu godzinowego.' },
      ],
      approach: [
        { title: 'Dron transportowy', text: 'Dowóz ładunków, ludzi i robotów w teren, gdzie kończy się droga - bez utrzymywania floty.' },
        { title: 'Coboty i platformy AMR', text: 'ICB Robots do rozładunku, kompletacji i transportu wewnętrznego, dostarczane na zamówienie.' },
        { title: 'Dowóz robota pod obiekt', text: 'Brakujące ogniwo modelu wynajmu godzinowego - robot pracuje u kilku klientów tego samego dnia.' },
      ],
    },
    {
      slug: 'public-sector', name: 'Sektor publiczny', blurb: 'Dane i zgodność w UE. Praca lokalnie, bez wysyłania obrazu na zewnątrz.', image: '/media/mission.webp', branchSlugs: ['ai-systems', 'photonic-processors'],
      intro: 'Dla wielu instytucji dane z hal produkcyjnych i infrastruktury są informacją wrażliwą. Nasze modele mogą pracować lokalnie, na urządzeniu, bez wysyłania obrazu na zewnątrz. Przy rosnących wymaganiach regulacyjnych to przestaje być argumentem technicznym, a staje się warunkiem zakupu.',
      challenges: [
        { title: 'Wymagania regulacyjne', text: 'Zgodność i audytowalność rozwiązania są warunkiem rozmowy, a nie dodatkiem.' },
        { title: 'Wrażliwość danych', text: 'Obraz i dane operacyjne nie mogą opuszczać organizacji ani Unii Europejskiej.' },
        { title: 'Kontrola łańcucha dostaw', text: 'Instytucje publiczne oczekują przejrzystego, europejskiego łańcucha dostaw.' },
        { title: 'Produkcja w UE', text: 'Wartość dodana - projekt, oprogramowanie, montaż i serwis - powinna powstawać na miejscu.' },
      ],
      approach: [
        { title: 'Modele na urządzeniu', text: 'Percepcja i wnioskowanie działają lokalnie; dane i zgodność zostają w Unii Europejskiej.' },
        { title: 'Projektowane i budowane w Polsce', text: 'Zakład w Kietrzu i polscy dostawcy większości komponentów - kontrola nad łańcuchem dostaw.' },
        { title: 'Kierunek fotoniczny (B+R)', text: 'Obliczenia fotoniczne przyspieszają wnioskowanie AI przy mniejszym poborze mocy.' },
      ],
    },
  ],
};

const en: SiteContent = {
  brand: 'POLCERO',
  tagline: 'Autonomous modular robots for industry and agriculture',
  nav: {
    products: 'Products',
    solutions: 'Solutions',
    services: 'Branches',
    industries: 'Industries',
    useCases: 'Use cases',
    company: 'Company',
    news: 'News',
    contact: 'Contact',
    cta: 'Talk to us',
  },
  services: {
    eyebrow: 'BUSINESS BRANCHES',
    h2: [
      { text: 'Five branches, ', weight: 300 },
      { text: 'one AI brain', weight: 700 },
    ],
    lead: 'From ready-made cobots to photonics in the lab - every branch runs on the same POLCERO intelligence layer.',
    cta: 'Explore the branches',
    all: 'All branches',
  },
  branches: [
    { slug: 'icb-robots', icon: 'Bot', badge: 'LIVE', name: 'ICB Robots', tagline: 'Industrial cobots & AMRs', desc: 'Industrial collaborative robots, autonomous forklifts and AMR platforms - designed and delivered to order.' },
    { slug: 'ai-systems', icon: 'Brain', badge: 'TO ORDER', name: 'AI Systems', tagline: 'The AI brain for any robot', desc: 'We build the intelligence layer for humanoid and specialized robots: perception, planning, autonomy, fleet management.' },
    { slug: 'robots', icon: 'Cpu', badge: 'TO ORDER', name: 'Robots', tagline: 'Platform + specialized robots', desc: 'The POLCERO modular platform and a catalog of robots we deploy with our AI brain - for any market, to order.' },
    { slug: 'farma-ai', icon: 'Sprout', badge: 'TO ORDER', name: 'Farma AI', tagline: 'Agriculture AI + field robots', desc: 'Autonomous field-robot fleet with the AI-farmer brain: planting, care, selective harvest - RaaS (robot-as-a-service) model.' },
    { slug: 'photonic-processors', icon: 'Zap', badge: 'R&D', name: 'Photonic Processors', tagline: 'AI compute with light', desc: 'R&D direction: photonic computing to accelerate AI inference in our robots - lower power, higher throughput.' },
  ],
  hero: {
    eyebrow: 'MODULAR ROBOTS · POLAND',
    h1: [
      { text: 'Autonomous ', weight: 300 },
      { text: 'modular', weight: 700 },
      { text: ' robots', weight: 300 },
    ],
    subhead: "We don't build one robot. We build an ecosystem that only makes sense together.",
    h2: [
      { text: 'One platform, ', weight: 300 },
      { text: 'swappable modules', weight: 700 },
      { text: ', any task.', weight: 300 },
    ],
    body: 'POLCERO joins three layers: an AI platform that plans and supervises the work, transport that delivers the robot on site, and a modular robot that picks its own chassis and task module for the task it finds. You assign a goal, not a motion.',
    ctaPrimary: 'Talk about deployment',
    ctaSecondary: 'See the platform',
    imageAlt: 'POLCERO modular robot on a mobile platform in a production hall',
  },
  stats: [
    { value: '500 kg', label: 'transport drone payload' },
    { value: '€200B+', label: 'global robotics market by 2030' },
    { value: '≈40%', label: 'lower harvest cost per unit' },
    { value: '2027', label: 'first client deployments' },
  ],
  platform: {
    wordmark: 'POLCERO OS',
    h2: [
      { text: 'A brain that ', weight: 300 },
      { text: 'assigns a goal', weight: 700 },
      { text: ' - not a pre-programmed motion.', weight: 300 },
    ],
    body: 'The AI platform takes the task, plans its execution, supervises the run and documents the result. The robot learns by demonstration - an operator performs the task, the system understands and acts autonomously, with no complex programming. Models can run locally, on-device, without sending imagery outside.',
    cta: 'How the platform works',
    layers: [
      { label: '01', title: 'AI layer', body: 'Planning, supervision and task documentation. Data and compliance stay in the European Union.' },
      { label: '02', title: 'Transport layer', body: 'A transport drone delivers the robot where access is costly or impossible - in time, the robots themselves.' },
      { label: '03', title: 'Modular robot', body: 'A shared core module, swappable chassis and task modules. It reads the situation and picks its own tool.' },
    ],
  },
  tabs: {
    h2: [
      { text: 'Where ', weight: 300 },
      { text: 'POLCERO works', weight: 700 },
    ],
    items: [
      {
        id: 'industry',
        label: 'Industry',
        title: 'The robot drives up to the station - it is not bolted to it',
        body: 'A humanoid on a mobile platform enters a hall designed for people without rebuilding it. It reaches where a worker reaches, serves several stations instead of standing at one, and performs two operations in a single cycle.',
        image: '/media/tab-industry.webp',
        alt: 'POLCERO humanoid robot operating an assembly station in a hall',
      },
      {
        id: 'agriculture',
        label: 'Agriculture',
        title: 'Selective manipulation where mass harvest fails',
        body: 'A robot with an agriculture task module harvests vegetables in greenhouses, tunnels and fields, and when needed swaps the gripper for a laser to weed. It works where satellite signal fails.',
        image: '/media/tab-services.webp',
        alt: 'POLCERO robot working between crop rows in a poly-tunnel',
      },
      {
        id: 'logistics',
        label: 'Logistics',
        title: 'Transport where the road ends',
        body: 'A transport drone delivers parts, materials and the robots themselves into mountainous terrain, construction sites without paved roads, and areas cut off after a failure or flood. The missing link of the hourly-rental model.',
        image: '/media/tab-home.webp',
        alt: 'POLCERO transport drone carrying a load over hard-to-reach terrain',
      },
    ],
  },
  overview: {
    h2: [
      { text: 'One platform in ', weight: 300 },
      { text: 'many configurations', weight: 700 },
    ],
    lead: "We don't build a separate machine for every task. We build one core module, mount it on the chosen chassis and arm it with a task module - the same machine, a different tool and program, handles a different task.",
  },
  cards: {
    eyebrow: 'AVAILABLE TO ORDER',
    h2: [
      { text: 'Robots built ', weight: 300 },
      { text: "around the client's", weight: 700 },
      { text: ' process', weight: 300 },
    ],
  },
  mission: {
    h2: [
      { text: 'Every next deployment ', weight: 300 },
      { text: 'cheaper and faster', weight: 700 },
      { text: ' than the last', weight: 300 },
    ],
    body: 'The shared core module is reusable, and data from prior deployments shortens model training. This is our main measure of success - the road from a project company to a robot manufacturer.',
    imageAlt: 'A fleet of POLCERO autonomous robots in a modern production plant',
  },
  closing: {
    h2: [
      { text: 'We sell the ', weight: 300 },
      { text: 'result', weight: 700 },
      { text: ', not the machine.', weight: 300 },
    ],
    body: 'We settle for hectares harvested, volume handled and deadlines met. We take the technical risk, because we answer for the technology. Let’s talk about your process.',
    cta: 'Talk to us',
  },
  footer: {
    tagline: 'Autonomous modular robots for industry and agriculture. Designed, built and serviced in Poland.',
    columns: [
      {
        title: 'Products',
        links: [
          { label: 'Humanoid', href: '/products/humanoid/' },
          { label: 'Humanoid on a mobile platform', href: '/products/mobile-humanoid/' },
          { label: 'Specialized robots', href: '/products/specialized-robots/' },
          { label: 'Transport drone', href: '/products/transport-drone/' },
          { label: 'Specification', href: '/specs/' },
        ],
      },
      {
        title: 'Industries',
        links: [
          { label: 'Industry', href: '/industries/industry/' },
          { label: 'Agriculture', href: '/industries/agriculture/' },
          { label: 'Construction', href: '/industries/construction/' },
          { label: 'Logistics', href: '/industries/logistics/' },
          { label: 'Public sector', href: '/industries/public-sector/' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'Branches', href: '/services/' },
          { label: 'About', href: '/about/' },
          { label: 'News', href: '/news/' },
          { label: 'Contact', href: '/contact/' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'POLCERO OS platform', href: '/products/polcero-os/' },
          { label: 'About us (PDF)', href: '/POLCERO-About-us.pdf' },
          { label: 'RSS', href: '/rss.xml' },
        ],
      },
    ],
    legal: 'Privacy policy',
    rights: 'All rights reserved.',
  },
  products: [
    { slug: 'humanoid', name: 'Humanoid', category: 'Humanoid', kind: 'humanoid', blurb: 'The core module completed with legs and two arms. Enters spaces designed for people and operates machines built for manual handling.', image: '/media/p-humanoid.webp' },
    { slug: 'mobile-humanoid', name: 'Humanoid on a mobile platform', category: 'Humanoid', kind: 'mobile-humanoid', blurb: 'The same humanoid on a mobile base. Drives up to the station and serves several spots instead of standing at one.', image: '/media/p-mobile.webp' },
    { slug: 'specialized-robots', name: 'Specialized robots', category: 'Specialized robots', kind: 'specialized', image: '/media/chassis-lineup.webp',
      blurb: 'The same core module - control, AI and hot-swap batteries - on the chassis your terrain needs: legged, tracked, wheeled or wheel-leg. Swap the platform, keep the brain and the task modules.',
      platforms: [
        { name: 'Legged robot', image: '/media/chassis-legged.webp', drive: 'Legged chassis (4 legs)', terrain: 'Stairs, obstacles, uneven ground', blurb: 'The core module on a legged chassis. Clears stairs, curbs and terrain that wheels cannot.' },
        { name: 'Tracked robot', image: '/media/chassis-tracked.webp', drive: 'Tracked chassis', terrain: 'Unpaved, rough terrain, construction sites', blurb: 'A tracked chassis for rough, uneven ground, construction sites and fieldwork.' },
        { name: 'Wheeled robot', image: '/media/chassis-wheeled.webp', drive: 'Wheeled chassis', terrain: 'Floors, warehouses, flat ground', blurb: 'A fast, quiet wheeled chassis for industrial floors, warehouses and monitoring.' },
        { name: 'Wheel-leg robot', image: '/media/chassis-wheelleg.webp', drive: 'Wheel-leg chassis', terrain: 'Flat ground, obstacles and rails', blurb: 'A hybrid wheel-leg chassis: rolls on the flat and clears obstacles and rails.' },
      ] },
    { slug: 'transport-drone', name: 'Transport drone', category: 'Transport drone', kind: 'drone', blurb: 'A heavy transport drone for carrying robots, modules and loads into hard-to-reach places. We deliver the robot where access is impossible.', image: '/media/p-drone.webp', specs: [ { label: 'Maximum payload', value: '500 kg' }, { label: 'Drone weight', value: '90 kg' }, { label: 'Construction', value: 'modular' }, { label: 'Carries', value: 'robots · modules · loads' } ] },
    { slug: 'polcero-os', name: 'POLCERO OS', category: 'Software', kind: 'software', blurb: 'The core module with the AI layer: control, perception and planning. The robot learns by demonstration - an operator performs the task, the system understands and acts autonomously, cutting programming time up to tenfold.', image: '/media/r-os.webp' },
  ],
  industries: [
    {
      slug: 'industry', name: 'Industry', blurb: 'A humanoid on a mobile platform in halls designed for people.', image: '/media/tab-industry.webp', branchSlugs: ['icb-robots', 'ai-systems', 'robots'],
      intro: 'Production halls, stations, conveyors and working heights have been designed for people for decades. A robot with human proportions enters that environment without rebuilding it - it reaches where a worker reaches and operates machines built for manual handling. The client does not adapt the plant to the robot, only the robot to the plant.',
      challenges: [
        { title: 'Labour shortage', text: 'Repetitive physical and cleanup work is ever harder to staff, and turnover keeps rising.' },
        { title: 'Fixed stations', text: 'Industrial robots are bolted to one spot and cannot keep up when the process changes.' },
        { title: 'Costly rebuilds', text: 'Automation usually means redesigning the hall around the machine, raising the barrier to entry.' },
        { title: 'Integration with existing machines', text: 'A new device must work with the machines the client already runs.' },
      ],
      approach: [
        { title: 'The robot drives up to the station', text: 'A humanoid on a mobile platform serves several stations instead of standing at one and closes the gaps between machines.' },
        { title: 'Two operations per cycle', text: 'A dual-arm layout with waist rotation raises station throughput on repetitive work.' },
        { title: 'Turnkey deployment', text: 'Design, build, integration, commissioning, documentation and service - from €2M, with conformity assessment.' },
      ],
    },
    {
      slug: 'agriculture', name: 'Agriculture', blurb: 'Selective harvest and care in tunnels and greenhouses.', image: '/media/agri-field.webp', branchSlugs: ['farma-ai', 'robots'],
      intro: 'The large agricultural manufacturers are very good at mass harvest and open-field navigation. Selective manipulation in soft, delicate crops, and work in tunnels and greenhouses where satellite signal fails, remain poorly served. This is our area, and we chose it deliberately.',
      challenges: [
        { title: 'Seasonal labour shortage', text: 'A single farm employs a hundred to a hundred-fifty people at peak - and fewer are available each year.' },
        { title: 'Rising labour cost', text: 'The full cost of one seasonal worker is about €15,900 per month today, and climbing.' },
        { title: 'Pressure to cut chemistry', text: 'Care and weeding must become ever more precise and spot-level.' },
        { title: 'A short season', text: 'A farm needs the machine for six months - no reason to freeze capital on it all year.' },
      ],
      approach: [
        { title: 'An agriculture task module', text: 'A robot with arms and a gripper harvests the crop, and when needed swaps the tool for a laser to weed.' },
        { title: 'Settlement for the result', text: 'We target 9-12 eurocent per unit versus 15-20 for manual harvest - about 40% less.' },
        { title: 'Works without GPS', text: 'Selective harvest and care in tunnels and greenhouses where satellite navigation fails.' },
      ],
    },
    {
      slug: 'construction', name: 'Construction', blurb: 'Inspection, heavy transport and EHS patrol - human work that robots can take over.', image: '/media/tab-industry.webp', branchSlugs: ['robots', 'ai-systems', 'icb-robots'],
      intro: 'On the construction site, robots take over work that is risky or tedious for people: inspection and reality-capture against the BIM model, layout, heavy transport and EHS patrols. A tracked chassis handles unpaved, uneven ground, while the transport drone tops up supplies from outside.',
      challenges: [
        { title: 'Safety risks', text: 'Work at height, in dust and around moving machinery is dangerous for people.' },
        { title: 'BIM-reality gap', text: 'The as-built state diverges from the model, and catching the differences takes time.' },
        { title: 'Delayed progress monitoring', text: 'Progress documentation is done rarely and by hand.' },
        { title: 'Difficult, unpaved terrain', text: 'Access and material transport across a road-less site is costly.' },
      ],
      approach: [
        { title: 'Inspection and reality-capture vs BIM', text: 'The robot captures the site state and compares it to the model, flagging differences.' },
        { title: 'Transport on difficult terrain', text: 'A tracked chassis moves materials between zones while the drone brings them in from outside.' },
        { title: 'EHS patrol and monitoring', text: 'Regular rounds and documentation without putting people at risk, data on the client side.' },
      ],
    },
    {
      slug: 'logistics', name: 'Logistics', blurb: 'A transport drone where the road ends.', image: '/media/tab-home.webp', branchSlugs: ['icb-robots', 'robots'],
      intro: 'A robot is worth what it is worth in the place where it is needed. The transport layer - with a drone carrying up to 500 kilograms, a prototype we already have - delivers parts, materials and the robots themselves where access is costly, slow or impossible.',
      challenges: [
        { title: 'Hard-to-reach terrain', text: 'Mountainous and forested areas, construction sites without paved roads, zones cut off after a failure or flood.' },
        { title: 'Fleet and driver cost', text: 'Maintaining vehicles and drivers, and dependence on traffic and road conditions, burden every service.' },
        { title: 'Unloading and palletising', text: 'Repetitive, heavy internal transport in the warehouse still needs hands.' },
        { title: 'The robot’s last mile', text: 'The cost and time of delivering the robot decide the economics of hourly rental.' },
      ],
      approach: [
        { title: 'Transport drone', text: 'Delivers loads, people and robots where the road ends - without maintaining a fleet.' },
        { title: 'Cobots and AMR platforms', text: 'ICB Robots for unloading, picking and internal transport, delivered to order.' },
        { title: 'Robot delivered to site', text: 'The missing link of the hourly-rental model - the robot serves several clients the same day.' },
      ],
    },
    {
      slug: 'public-sector', name: 'Public sector', blurb: 'Data and compliance in the EU. On-device, no imagery sent outside.', image: '/media/mission.webp', branchSlugs: ['ai-systems', 'photonic-processors'],
      intro: 'For many institutions, data from production halls and infrastructure is sensitive information. Our models can run locally, on-device, without sending imagery outside. With rising regulatory requirements, that stops being a technical argument and becomes a condition of purchase.',
      challenges: [
        { title: 'Regulatory requirements', text: 'Compliance and auditability are a condition of the conversation, not an add-on.' },
        { title: 'Data sensitivity', text: 'Imagery and operational data must not leave the organisation or the European Union.' },
        { title: 'Supply-chain control', text: 'Public institutions expect a transparent, European supply chain.' },
        { title: 'Manufacturing in the EU', text: 'The added value - design, software, assembly and service - should be created on site.' },
      ],
      approach: [
        { title: 'On-device models', text: 'Perception and inference run locally; data and compliance stay in the European Union.' },
        { title: 'Designed and built in Poland', text: 'A plant in Kietrz and Polish suppliers for most components - control over the supply chain.' },
        { title: 'Photonic direction (R&D)', text: 'Photonic computing accelerates AI inference at lower power draw.' },
      ],
    },
  ],
};

// Per-product task subtitle, price and uses (applications). Prices are provisional ("on request").
// Only en/pl are authored inline; these bilingual merge blocks key to that pair.
type FullLocale = 'en' | 'pl';
type Meta = { subtitle: Record<FullLocale, string>; price: Record<FullLocale, string>; uses: Record<FullLocale, string[]> };
const onRequest = { pl: 'Na zapytanie', en: 'On request' };
const productMeta: Record<string, Meta> = {
  humanoid: {
    subtitle: { pl: 'Praca tam, gdzie pracuje człowiek', en: 'Works where people work' }, price: onRequest,
    uses: {
      pl: ['Obsługa stanowisk zaprojektowanych pod człowieka', 'Montaż i powtarzalne prace fizyczne', 'Obsługa maszyn przeznaczonych do obsługi ręcznej', 'Pomoc domowa i prace porządkowe (kierunek rozwoju)'],
      en: ['Manning stations designed for people', 'Assembly and repetitive physical work', 'Operating machines built for manual handling', 'Domestic help and cleanup (roadmap)'],
    },
  },
  'mobile-humanoid': {
    subtitle: { pl: 'Jeden robot, wiele stanowisk', en: 'One robot, many stations' }, price: onRequest,
    uses: {
      pl: ['Obsługa kilku stanowisk z jednej maszyny', 'Domykanie luk między maszynami w hali', 'Transport wewnętrzny między stanowiskami', 'Dwie operacje w jednym cyklu'],
      en: ['Serving several stations from one machine', 'Closing gaps between machines on the floor', 'Internal transport between stations', 'Two operations in a single cycle'],
    },
  },
  'specialized-robots': {
    subtitle: { pl: 'Jeden moduł korpusu, cztery podwozia', en: 'One core module, four chassis' }, price: onRequest,
    uses: {
      pl: ['Inspekcja i monitoring w trudnym terenie', 'Patrol infrastruktury i obiektów', 'Praca polowa i transport w terenie nieutwardzonym', 'Prace i transport materiałów na placu budowy', 'Transport wewnętrzny i monitoring po posadzkach'],
      en: ['Inspection and monitoring on hard terrain', 'Patrolling infrastructure and facilities', 'Fieldwork and off-road transport', 'Work and material transport on construction sites', 'Internal transport and monitoring on floors'],
    },
  },
  'transport-drone': {
    subtitle: { pl: 'Dowozi robota tam, gdzie nie ma drogi', en: 'Delivers the robot where there is no road' }, price: onRequest,
    uses: {
      pl: ['Dowóz robotów, modułów i ładunków w trudno dostępne miejsca', 'Dostawy po awarii lub powodzi', 'Transport w teren górski i leśny', 'Zaopatrzenie placów budowy bez dróg'],
      en: ['Delivering robots, modules and loads to hard-to-reach places', 'Deliveries after a failure or flood', 'Transport into mountainous and forested terrain', 'Supplying construction sites without roads'],
    },
  },
  'polcero-os': {
    subtitle: { pl: 'Mózg AI, który uczy się z pokazu', en: 'The AI brain that learns by demonstration' }, price: { pl: 'W cenie wdrożenia', en: 'Included with deployment' },
    uses: {
      pl: ['Uczenie robota z pokazu operatora', 'Planowanie, nadzór i dokumentacja zadań', 'Zarządzanie flotą robotów', 'Praca lokalna z danymi w Unii Europejskiej'],
      en: ['Teaching the robot by demonstration', 'Task planning, supervision and documentation', 'Robot-fleet management', 'Local operation with data in the EU'],
    },
  },
};

for (const loc of ['pl', 'en'] as FullLocale[]) {
  for (const product of ({ pl, en })[loc].products) {
    const m = productMeta[product.slug];
    if (m) {
      product.subtitle = m.subtitle[loc];
      product.price = m.price[loc];
      product.uses = m.uses[loc];
    }
  }
}

// Per-branch detail (intro, points, note, detailed sections) - brought over from the polcero-web branch pages.
type Sec = { title: string; desc: string }[];
type BMeta = { intro: Record<FullLocale, string>; points: Record<FullLocale, string[]>; note?: Record<FullLocale, string>; sections: Record<FullLocale, Sec> };
const branchMeta: Record<string, BMeta> = {
  'icb-robots': {
    intro: {
      pl: 'Roboty już istnieją - brakuje systemów, które nimi sterują. Budujemy tę brakującą warstwę: instalujemy w maszynie wiedzę, plan i „oczy" (kamery, sensory), łączymy ją z AI i sprawiamy, że pracuje sama - bez kierowcy i bez ciągłego nadzoru. ICB Robots to działający oddział POLCERO: projektujemy, budujemy i wdrażamy coboty, autonomiczne wózki widłowe, platformy AMR i zautomatyzowane systemy produkcyjne.',
      en: 'Robots already exist - what is missing are the systems that control them. We build that missing layer: we install knowledge, a plan and "eyes" (cameras, sensors) in the machine, connect it with AI and make it work on its own - without a driver and without constant supervision. ICB Robots is the live operating branch of POLCERO: we design, build and deploy cobots, autonomous forklifts, AMR platforms and automated production systems.',
    },
    points: {
      pl: ['Roboty współpracujące (coboty)', 'Autonomiczne wózki widłowe', 'Platformy AMR', 'Centrum kontroli', 'Autonomiczna produkcja', 'Linie produkcyjne'],
      en: ['Collaborative robots (cobots)', 'Autonomous forklifts', 'AMR platforms', 'Control center', 'Autonomous production', 'Production lines'],
    },
    note: { pl: 'Działający oddział · doświadczenie zespołu od 1980 roku', en: 'Live branch · team experience since 1980' },
    sections: {
      pl: [
        { title: 'Coboty', desc: 'Wspierają ludzi, automatyzują, zasilają, montują i transportują.' },
        { title: 'Autonomiczne wózki widłowe', desc: 'Transport, podnoszenie, skanowanie, lokalizacja i omijanie przeszkód.' },
        { title: 'Platforma AMR', desc: 'Wjazd, podnoszenie, przenoszenie, nawigacja, omijanie i dostawa.' },
        { title: 'Centrum kontroli', desc: 'Monitoruje, analizuje, alarmuje, reaguje, zabezpiecza i raportuje.' },
        { title: 'Autonomiczna produkcja', desc: 'Sortuje, pakuje, etykietuje, kontroluje, przenosi i synchronizuje.' },
        { title: 'Linie produkcyjne', desc: 'Optymalizuje, automatyzuje, kontroluje, integruje, monitoruje i ulepsza.' },
        { title: 'Mózg AI POLCERO w każdym robocie', desc: 'Wszystkie produkty ICB napędza warstwa inteligencji POLCERO AI Systems: modele VLA, detekcja klasy YOLO, nawigacja SLAM i zarządzanie flotą. Ten sam mózg dostrajamy na danych Twojego procesu. Programowanie: Python, C++ i ROS.' },
      ],
      en: [
        { title: 'Cobots', desc: 'Support people, automate, supply, assemble and transport.' },
        { title: 'Autonomous forklifts', desc: 'Transport, lift, scan, locate and avoid obstacles.' },
        { title: 'AMR platform', desc: 'Enter, lift, carry, navigate, avoid and deliver.' },
        { title: 'Control center', desc: 'Monitor, analyse, alert, respond, secure and report.' },
        { title: 'Autonomous production', desc: 'Sort, pack, label, inspect, move and synchronise.' },
        { title: 'Production lines', desc: 'Optimise, automate, control, integrate, monitor and improve.' },
        { title: 'The POLCERO AI brain in every robot', desc: 'Every ICB product is powered by the POLCERO AI Systems intelligence layer: VLA models, YOLO-class detection, SLAM navigation and fleet management. The same brain is fine-tuned on your process data. Programming: Python, C++ and ROS.' },
      ],
    },
  },
  'ai-systems': {
    intro: {
      pl: 'POLCERO buduje warstwę inteligencji AI - percepcję, planowanie, sterowanie i zarządzanie flotą - dla robotów humanoidalnych i specjalistycznych. Ten sam stos AI obsługuje wszystkie kierunki POLCERO: dostrojone modele VLA, wizja YOLO, architektura edge+cloud i koło danych. Sprzęt może być własny klienta lub wybrany z naszego katalogu; my dostarczamy inteligencję.',
      en: 'POLCERO builds an AI intelligence layer - perception, planning, control and fleet management - for humanoid and specialized robots. The same AI stack serves all POLCERO branches: fine-tuned VLA models, YOLO vision, edge+cloud architecture and a data flywheel. The robot hardware can be the customer\'s own or from our catalog; we supply the intelligence.',
    },
    points: {
      pl: ['Dostrajanie modeli VLA', 'Wizja i percepcja', 'Architektura edge + cloud', 'Klasyczne sterowanie tam, gdzie wystarczy', 'Zarządzanie flotą'],
      en: ['VLA fine-tuning', 'Vision and perception', 'Edge + cloud architecture', 'Classic control where sufficient', 'Fleet management'],
    },
    sections: {
      pl: [
        { title: 'Dostrajanie VLA', desc: 'Otwarte modele VLA (GR00T N1.7, π0, OpenVLA) dostrojone na danych klienta. Warstwa abstrakcji pozwala wymieniać modele bazowe bez ponownego trenowania inteligencji zadań.' },
        { title: 'Wizja i percepcja', desc: 'Detekcja klasy YOLO do rozpoznawania obiektów w czasie rzeczywistym, kamery głębi (RGB-D), LiDAR, obraz multispektralny i termiczny oraz VLM do rozumienia sceny i języka.' },
        { title: 'Architektura edge + cloud', desc: 'Wnioskowanie na brzegu sieci dla sterowania z opóźnieniem poniżej 10 ms. Chmura do aktualizacji modeli, analityki i zarządzania flotą. Koło danych stale poprawia wydajność.' },
        { title: 'Klasyczne sterowanie tam, gdzie wystarczy', desc: 'Regulatory PID do prostego, powtarzalnego chwytania i cięcia - niższy koszt i wyższa niezawodność. AI rezerwujemy dla złożonej percepcji i decyzji sceny.' },
      ],
      en: [
        { title: 'VLA fine-tuning', desc: 'Open VLA models (GR00T N1.7, π0, OpenVLA) fine-tuned on customer data. An abstraction layer lets us swap base models without retraining your task intelligence.' },
        { title: 'Vision and perception', desc: 'YOLO-class detection for real-time object recognition, depth cameras (RGB-D), LiDAR, multispectral and thermal imaging, plus a VLM for scene and language understanding.' },
        { title: 'Edge + cloud architecture', desc: 'On-board edge inference for sub-10 ms control. Cloud for training updates, analytics and fleet management. A data flywheel continuously improves performance.' },
        { title: 'Classic control where sufficient', desc: 'PID controllers for simple, repetitive grasping and cutting - lower cost, higher reliability. We reserve AI for complex perception and scene-understanding decisions.' },
      ],
    },
  },
  robots: {
    intro: {
      pl: 'Kierunek Robots to modułowa platforma będąca rdzeniem wszystkiego, co budujemy - wspólny mózg AI, znormalizowany interfejs, wymienne podwozia i moduły zadaniowe plug-and-play. Wdrażamy też roboty z katalogu partnerów, nakładając na nie nasz mózg AI dla dowolnego rynku.',
      en: 'The Robots branch is the modular platform at the core of everything we build - a shared AI brain, a standardised interface, interchangeable chassis and plug-and-play task modules. We also deploy robots from our partner catalog, layering our AI brain on top for any market.',
    },
    points: {
      pl: ['Mózg AI', 'Interfejs plug-and-play', 'Rodzina podwozi', 'Moduły zadaniowe', 'Roboty rolnicze', 'Roboty na place budowy', 'Stacjonarne maszyny AI'],
      en: ['AI brain', 'Plug-and-play interface', 'Chassis family', 'Task modules', 'Agricultural robots', 'Construction-site robots', 'Stationary AI machines'],
    },
    sections: {
      pl: [
        { title: 'Mózg AI', desc: 'Modele VLA + YOLO dostrojone na danych klienta. Wnioskowanie na brzegu sieci i trenowanie w chmurze. Ta sama warstwa inteligencji dostosowuje się do każdego podwozia i rynku.' },
        { title: 'Interfejs plug-and-play', desc: 'Znormalizowane złącze mechaniczne i elektryczne. Wymień podwozie lub moduł zadaniowy bez przeprojektowywania warstwy inteligencji - jeden punkt integracji dla wszystkich kombinacji.' },
        { title: 'Rodzina podwozi', desc: 'W4 (kołowe), T6 (gąsienicowe), WL4 (kołowo-nożne), Q4 (kroczące). Platformy kołowe są ok. 2,5 raza bardziej energooszczędne niż nożne na płaskim terenie - dobieramy podwozie do terenu i zadania.' },
        { title: 'Moduły zadaniowe', desc: 'Miękki chwytak, głowica oprysku/fertigacji, maszt sensoryczny (RGB-D / multispektralny / termiczny), nośnik logistyczny, zdalny manipulator - podłącz właściwe narzędzie do zadania.' },
        { title: 'Roboty rolnicze', desc: 'Autonomiczne platformy polowe do siewu, pielęgnacji, precyzyjnego oprysku i selektywnych zbiorów. Fuzja sensorów RGB-D + multispektralny + termiczny do monitoringu kondycji upraw.' },
        { title: 'Roboty na place budowy', desc: 'Wytyczanie z modelu BIM na terenie, wiercenie, autonomiczne prace ziemne, inspekcja i porównanie z cyfrowym bliźniakiem. Autonomia nadzorowana przez człowieka.' },
        { title: 'Stacjonarne maszyny AI', desc: 'Roboty z ramieniem stałym i inteligentne stanowiska do inspekcji, kontroli jakości, powtarzalnego montażu i obsługi materiałów na liniach produkcyjnych.' },
      ],
      en: [
        { title: 'AI brain', desc: 'VLA + YOLO models fine-tuned on customer data. Edge inference and cloud training. The same intelligence layer adapts to every chassis and market.' },
        { title: 'Plug-and-play interface', desc: 'A standardised mechanical and electrical connector. Swap chassis or task modules without redesigning the intelligence layer - one integration point for all combinations.' },
        { title: 'Chassis family', desc: 'W4 (wheeled), T6 (tracked), WL4 (wheel-leg), Q4 (legged). Wheeled platforms are about 2.5 times more energy-efficient than legged on flat ground - matched to terrain and task.' },
        { title: 'Task modules', desc: 'Soft gripper, spray/fertigation head, sensor mast (RGB-D / multispectral / thermal), logistics carrier, remote manipulator - plug in the right tool for the job.' },
        { title: 'Agricultural robots', desc: 'Autonomous field platforms for planting, care, precision spray and selective harvest. Sensor fusion of RGB-D + multispectral + thermal for crop-health monitoring.' },
        { title: 'Construction-site robots', desc: 'BIM-to-field layout, drilling, autonomous earthworks, inspection against a digital twin. Human-supervised autonomy throughout.' },
        { title: 'Stationary AI machines', desc: 'Fixed-arm robots and intelligent workstations for inspection, quality control, repetitive assembly and material handling on production lines.' },
      ],
    },
  },
  'farma-ai': {
    intro: {
      pl: 'Farma AI to rolniczy kierunek POLCERO: flota autonomicznych robotów polowych sterowana nadzorczym mózgiem „AI-rolnika" dla pełnego cyklu uprawy - siew, pielęgnacja (odchwaszczanie, oprysk punktowy), monitoring i selektywny zbiór delikatnych warzyw. Dla dużych gospodarstw warzywnych, w modelu Robot-as-a-Service (RaaS) - bez nakładów kapitałowych.',
      en: 'Farma AI is POLCERO\'s agriculture branch: a fleet of autonomous field robots run by the "AI-farmer" supervisory brain for the full crop cycle - planting, care (weeding, spot spraying), monitoring and selective harvest of delicate vegetables. Built for large vegetable farms, delivered as Robot-as-a-Service (RaaS) - no capital expenditure.',
    },
    points: {
      pl: ['Siew', 'Pielęgnacja - odchwaszczanie i przerzedzanie', 'Oprysk punktowy / mikrodozowanie', 'Monitoring', 'Selektywny zbiór'],
      en: ['Planting', 'Care - weeding and thinning', 'Spot spraying / micro-dosing', 'Monitoring', 'Selective harvest'],
    },
    sections: {
      pl: [
        { title: 'Siew', desc: 'Precyzyjne rzędowe przesadzanie lub siew bezpośredni z nawigacją RTK/SLAM. Dokładność rozmieszczenia poniżej centymetra na podwoziu POLCERO-W4.' },
        { title: 'Pielęgnacja - odchwaszczanie i przerzedzanie', desc: 'Wykrywanie chwastów kamerą + mechaniczne lub termiczne odchwaszczanie. Bez herbicydu dla wykrytych chwastów - tylko celowany oprysk punktowy.' },
        { title: 'Oprysk punktowy / mikrodozowanie', desc: 'Selektywne aplikowanie nawozu lub środków ochrony roślin tylko tam, gdzie AI wykryje potrzebę. Ogranicza zużycie chemii nawet o 90% wobec oprysku całopowierzchniowego.' },
        { title: 'Monitoring', desc: 'Codzienne skanowanie pola kamerami RGB-D + multispektralnymi + termicznymi. Mapa kondycji upraw, wczesne ostrzeganie o chorobach i prognoza gotowości do zbioru.' },
        { title: 'Selektywny zbiór', desc: 'Selektywne zbieranie delikatnych warzyw (zaczynając od główek sałaty) - najtrudniejsza nierozwiązana luka w automatyzacji rolnictwa. Miękki chwytak i detekcja dojrzałości przez AI.' },
      ],
      en: [
        { title: 'Planting', desc: 'Precise row-by-row transplanting or direct seeding with RTK/SLAM navigation. Sub-centimeter placement accuracy on the POLCERO-W4 chassis.' },
        { title: 'Care - weeding and thinning', desc: 'Computer-vision weed detection plus mechanical or thermal weeding. No herbicide for identified weeds - only targeted spot spray.' },
        { title: 'Spot spraying / micro-dosing', desc: 'Selective application of fertilizer or plant-protection products only where the AI detects need. Cuts chemical use by up to 90% versus blanket spraying.' },
        { title: 'Monitoring', desc: 'Daily field scanning with RGB-D + multispectral + thermal cameras. Crop-health map, disease early-warning and harvest-readiness prediction.' },
        { title: 'Selective harvest', desc: 'Selective harvesting of delicate vegetables (starting with lettuce heads) - the hardest unsolved gap in agri automation. Soft gripper plus AI maturity detection.' },
      ],
    },
  },
  'photonic-processors': {
    intro: {
      pl: 'Procesory fotoniczne to kierunek B+R POLCERO: przyspieszanie wnioskowania AI w naszych robotach za pomocą światła zamiast samej elektroniki. Optyczne mnożenie macierzy - podstawową operację w sieciach neuronowych - można wykonać w jednym przejściu światła przez chip fotoniczny, uzyskując opóźnienie sub-nanosekundowe i o rzędy wielkości niższe zużycie energii na operację niż w chipach GPU/ASIC.',
      en: 'Photonic Processors is POLCERO\'s R&D direction: accelerating AI inference in our robots using light instead of electronics alone. Optical matrix multiplication - the core operation in neural networks - can be done in a single optical pass through a photonic chip, delivering sub-nanosecond latency and orders-of-magnitude lower energy per operation than GPU/ASIC chips.',
    },
    points: {
      pl: ['Optyczne mnożenie macierzy', 'Architektura hybrydowa fotoniczno-elektroniczna', 'Rynek: z 1,8 mld do 14,6 mld EUR', 'Fotonika jako przyszła warstwa obliczeniowa'],
      en: ['Optical matrix multiplication', 'Hybrid photonic-electronic architecture', 'Market: from €1.8B to €14.6B', 'Photonics as the future compute layer'],
    },
    sections: {
      pl: [
        { title: 'Optyczne mnożenie macierzy', desc: 'Wnioskowanie sieci neuronowych zdominowane jest przez mnożenie macierz-wektor (GEMM). Chipy fotoniczne wykonują je światłem przechodzącym przez siatki interferometrów Macha-Zehndera - w jednym przejściu robią to, co elektronika liczy przez tysiące cykli zegara.' },
        { title: 'Architektura hybrydowa fotoniczno-elektroniczna', desc: 'Chipy fotoniczne świetnie liczą operacje liniowe (macierze), ale nie funkcje nieliniowe. Konsensusowa architektura łączy rdzenie optyczne do matematyki macierzowej z jednostkami elektronicznymi do aktywacji - projekt hybrydowy łączy zalety obu.' },
        { title: 'Rynek: z 1,8 mld do 14,6 mld EUR', desc: 'Globalny rynek fotonicznych akceleratorów AI, od 2025 do 2034 (CAGR 26,3%). Na 2026 rok śledzimy 52 firmy zajmujące się obliczeniami fotonicznymi.' },
        { title: 'Fotonika jako przyszła warstwa obliczeniowa', desc: 'Gdy akceleratory fotoniczne osiągną dojrzałość (horyzont 2027-2031 dla produktów klasy centrum danych), architektura mózgu AI POLCERO jest gotowa je wchłonąć - warstwa abstrakcji pozwala wymienić substrat obliczeniowy bez ponownego trenowania inteligencji zadań.' },
      ],
      en: [
        { title: 'Optical matrix multiplication', desc: 'Neural-network inference is dominated by matrix-vector multiplication (GEMM). Photonic chips perform it with light passing through Mach-Zehnder interferometer meshes - doing in a single optical pass what electronics need thousands of clock cycles to compute.' },
        { title: 'Hybrid photonic-electronic architecture', desc: 'Photonic chips excel at linear operations (matrix math) but not nonlinear ones (activation functions). The consensus architecture pairs optical cores for matrix math with electronic units for activations - a hybrid design taking the best of both.' },
        { title: 'Market: from €1.8B to €14.6B', desc: 'The global photonic AI-accelerator market, 2025 to 2034 (CAGR 26.3%). As of 2026 we track 52 photonic-computing companies worldwide.' },
        { title: 'Photonics as the future compute layer', desc: 'As photonic accelerators reach maturity (a 2027-2031 window for datacenter-class products), the POLCERO AI-brain architecture is built to absorb them - the abstraction layer lets us swap the compute substrate without retraining the task intelligence.' },
      ],
    },
  },
};

for (const loc of ['pl', 'en'] as FullLocale[]) {
  for (const branch of ({ pl, en })[loc].branches) {
    const m = branchMeta[branch.slug];
    if (m) {
      branch.intro = m.intro[loc];
      branch.points = m.points[loc];
      branch.sections = m.sections[loc];
      if (m.note) branch.note = m.note[loc];
    }
  }
}

// Fully-authored locales live here; others are built by deep-merging their
// translation override (src/data/i18n/overrides.ts) over English, so untranslated
// fields fall back to EN and languages can be translated incrementally.
const content: Partial<Record<Locale, SiteContent>> = { en, pl };

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}
// Merge `over` onto a deep copy of `base`. Arrays merge element-by-element.
function deepMerge<T>(base: T, over: unknown): T {
  if (over === undefined) return base;
  if (Array.isArray(base)) {
    const o = Array.isArray(over) ? over : [];
    return base.map((item, i) => deepMerge(item, o[i])) as unknown as T;
  }
  if (isObject(base)) {
    const out: Record<string, unknown> = { ...base };
    if (isObject(over)) for (const k of Object.keys(over)) out[k] = deepMerge((base as any)[k], over[k]);
    return out as T;
  }
  return (over as T) ?? base;
}

const cache: Partial<Record<Locale, SiteContent>> = {};

export function getContent(locale: Locale): SiteContent {
  if (content[locale]) return content[locale]!;
  if (cache[locale]) return cache[locale]!;
  const over = overrides[locale];
  const merged = over ? deepMerge(en, over) : (en as SiteContent);
  cache[locale] = merged;
  return merged;
}
