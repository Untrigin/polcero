import type { ProductRichOverride } from '../../productRich';

// ── Wspólne bloki (identyczne dla humanoid i mobile-humanoid) ─────────────────
const batteryRobot = {
  title: 'Bateria i zasilanie',
  lead: 'Każdy robot pracuje na trzech bateriach hot-swap osadzonych w module korpusu. Bateria to samodzielna jednostka 48 V, więc moc skaluje się z liczbą baterii, a rozładowaną wymienia się bez narzędzi, gdy robot pracuje dalej na pozostałych.',
  rows: [
    { label: 'Napięcie baterii', value: '48 V hot-swap' },
    { label: 'Energia baterii', value: '≈ 864 Wh każda' },
    { label: 'Baterie w module korpusu', value: '3 (≈ 2.6 kWh łącznie)' },
    { label: 'Czas pracy na baterii', value: '≈ 5 h przy typowej pracy' },
    { label: 'Przy zasilaniu bezpośrednim', value: '24/7 (kabel lub sieć)' },
    { label: 'Czas wymiany', value: '< 60 s na baterię, bez narzędzi' },
  ],
};

const swapRobot = {
  title: 'Samodzielna wymiana baterii — bez przestoju',
  lead: 'Robot nigdy nie wyłącza się całkowicie, aby się naładować. Rotuje trzema bateriami po kolei, pracując na pozostałych dwóch, gdy rozładowana się ładuje — dzięki temu zmiana nie staje z powodu baterii.',
  robot: {
    title: 'Robot robi to sam',
    steps: [
      'Wykrywając kończącą się baterię, robot podjeżdża do stacji ładującej i podtrzymuje stan na dwóch pozostałych bateriach.',
      'Ramię sięga do tyłu modułu korpusu, zwalnia zatrzask i wyjmuje rozładowaną baterię.',
      'Umieszcza ją w wolnym gnieździe 4-stanowiskowej stacji i w jej miejsce bierze w pełni naładowaną.',
      'Świeża bateria zatrzaskuje się; robot powtarza to dla każdej baterii po kolei i wraca do pracy — nigdy wyłączony, nigdy bezczynny.',
    ],
  },
  human: {
    title: 'Człowiek zrobi to w kilka sekund',
    steps: [
      'Bez wyłączania i bez narzędzi: baterie wymienia się na gorąco, gdy robot stoi w gotowości.',
      'Naciśnij zatrzask z tyłu modułu korpusu i wyciągnij baterię prosto do siebie.',
      'Wsuń naładowaną baterię, aż zatrzaśnie się w miejscu — robot podejmuje pracę tam, gdzie ją przerwał.',
    ],
  },
};

const statusRobot = {
  title: 'Status baterii i stacja ładująca',
  lead: 'Każda bateria raportuje swój stan, więc robot i jego operatorzy zawsze wiedzą, kiedy wymienić. 4-stanowiskowa stacja ładująca utrzymuje rotację gotowych baterii, a robot dokuje, aby wymienić je w trakcie pracy.',
  points: [
    { title: 'Stan każdej baterii na żywo', text: 'Naładowanie, kondycja i temperatura każdej z trzech baterii w czasie rzeczywistym.' },
    { title: 'Wymiana z wyprzedzeniem', text: 'System planuje kolejną wymianę, zanim bateria się wyczerpie, więc praca nigdy nie zostaje przerwana w połowie zadania.' },
    { title: '4-stanowiskowa stacja ładująca', text: 'Cztery wejścia ładujące utrzymują zapasowe baterie naładowane i gotowe do kolejnej rotacji.' },
    { title: 'Autonomiczne dokowanie', text: 'Robot sam rotuje swoimi bateriami na stacji w trakcie zmiany — bez operatora i bez przestoju.' },
  ],
};

const visionRobot = {
  title: 'Jak robot widzi',
  lead: 'Robot składa jeden obraz świata z kilku widoków naraz. Szerokokątna głowa dwuoczna daje obraz lewy i prawy; ich porównanie daje głębię; na tym warstwa AI dokłada widok percepcji, który nazywa obiekty, powierzchnie i ludzi.',
  views: [
    { label: 'Lewy', text: 'Lewe oko głowy dwuocznej — szerokokątny, kolorowy widok sceny.' },
    { label: 'Prawy', text: 'Prawe oko — drugi kolorowy widok, który robot porównuje z lewym.' },
    { label: 'Głębia', text: 'Rozbieżność stereo między lewym a prawym daje odległość do każdego punktu w kadrze.' },
    { label: 'Percepcja', text: 'Warstwa AI oznacza obiekty, powierzchnie, przeszkody i ludzi oraz planuje kolejny ruch lokalnie na urządzeniu.' },
  ],
  extra: [
    { title: 'Kamery nadgarstkowe', text: 'Kamery HD przy każdym nadgarstku dają zbliżenie do precyzyjnego chwytania i montażu.' },
    { title: 'LiDAR + ultradźwięki', text: 'LiDAR podwozia i czujniki ultradźwiękowe mapują przestrzeń i wychwytują przeszkody poza zasięgiem kamer.' },
    { title: 'Siła i IMU', text: 'Przeguby ze sprzężeniem siłowym i IMU wyczuwają kontakt i równowagę dla bezpiecznego, stabilnego ruchu.' },
    { title: 'Głos i język', text: 'Interakcja głosowa i model języka pozwalają sterować robotem zwykłą mową.' },
  ],
};

const powerRobot = {
  title: 'Dwa sposoby zasilania: baterie lub sieć',
  lead: 'Robot jest autonomiczny na bateriach, ale tam, gdzie obiekt może dostarczyć prąd, pracuje wprost z sieci przez kabel — brak baterii do rotacji, brak przestoju, niższy koszt pracy.',
  modes: [
    { name: 'Baterie hot-swap', text: 'W pełni mobilny i autonomiczny. Trzy baterie rotują przez stację ładującą, więc robot porusza się wszędzie bez kabla.' },
    { name: 'Zasilanie bezpośrednie (kabel)', text: 'Do stałego stanowiska lub pracy 24/7 robot pobiera prąd przez kabel i pracuje ciągle — baterie stają się rezerwą.' },
    { name: 'Infrastruktura sieciowa', text: 'W halach, fabrykach i szklarniach montujemy stałe szyny zasilające; na zewnątrz, na polach i placach, napowietrzne linie jak trakcja tramwajowa. Robot pobiera prąd z linii i doładowuje baterie w trakcie pracy.' },
  ],
};

const R = { battery: batteryRobot, swap: swapRobot, status: statusRobot, vision: visionRobot, power: powerRobot };

export const pl: Record<string, ProductRichOverride> = {
  humanoid: {
    ...R,
    application: {
      title: 'Trzy humanoidy, jeden magazyn',
      body: 'Tak wygląda zmiana. W jednym pomieszczeniu jeden humanoid pakuje paczkę przy stole, drugi podnosi z podłogi załadowany metalowy kosz, a trzeci układa pudła na regale. Ten sam robot, trzy zadania — każdy wszedł w przestrzeń zbudowaną dla ludzi i przejął pracę stworzoną dla ludzkich rąk, bez przebudowywania linii wokół nich.',
    },
  },
  'mobile-humanoid': {
    ...R,
    versions: {
      title: 'Dwie wersje platformy',
      lead: 'Ten sam humanoidalny korpus osadzamy na platformie jezdnej, której potrzebujesz — lekkiej, uginanej do zbioru z podłogi albo mocnej, do podnoszenia realnych ciężarów.',
      items: [
        {
          name: 'V1 — platforma uginana',
          blurb: 'Maszt ugina się w połowie, więc robot pochyla się po rzeczy z podłogi z niewielką utratą mocy. Koła u podstawy obracają całego robota w miejscu, co czyni go zwinnym w ciasnych alejkach i przy niskim zbiorze.',
          specs: [
            { label: 'Najlepszy do', value: 'Zbiór z podłogi, ciasne alejki' },
            { label: 'Podstawa', value: 'Uginany maszt, obrót w miejscu' },
            { label: 'Zasięg', value: 'Od podłogi do wysokości pracy' },
          ],
        },
        {
          name: 'V2 — platforma wzmocniona',
          blurb: 'Mocniejsza platforma jezdna zbudowana do podnoszenia realnych ciężarów. Zachowuje dwuramienny korpus humanoida, ale stoi na sztywnej podstawie o dużym udźwigu do przenoszenia i montażu cięższych części przemysłowych.',
          specs: [
            { label: 'Najlepszy do', value: 'Ciężkie przenoszenie i montaż' },
            { label: 'Podstawa', value: 'Sztywna platforma o dużym udźwigu' },
            { label: 'Udźwig znamionowy', value: '≈ 7 kg na ramię' },
          ],
        },
      ],
    },
  },
  'specialized-robots': {
    ...R,
    vision: { ...visionRobot, extra: [
      { title: 'Maszt percepcyjny', text: 'Na podwoziu specjalistycznym moduł korpusu niesie dodatkowy maszt z narzędziami i kamerami do danego zadania.' },
      { title: 'LiDAR + ultradźwięki', text: 'LiDAR podwozia i czujniki ultradźwiękowe mapują trudny teren i wychwytują przeszkody poza zasięgiem kamer.' },
      { title: 'Multispektralne / termowizja', text: 'Opcjonalne obrazowanie multispektralne i termiczne do kondycji upraw, inspekcji i pracy nocą.' },
      { title: 'Przetwarzanie na urządzeniu', text: 'Detekcja i planowanie działają na urządzeniu; dane i zgodność zostają w UE.' },
    ] },
    robots: {
      title: 'Linia specjalistyczna, robot po robocie',
      lead: 'Każdy z nich to ten sam moduł korpusu — sterowanie, AI i baterie hot-swap — na innym podwoziu. Zachowaj mózg i moduły zadaniowe; wymień platformę pod teren. Dodaj lub zdejmij ramiona, chwytak, głowicę zbioru czy maszt sensoryczny na szybkozłączu.',
      items: [
        {
          name: 'Robot kroczący',
          role: 'Schody, przeszkody, teren nierówny',
          body: 'Czteronożne podwozie, które pokonuje schody, progi i teren niedostępny dla żadnego koła. Chodzi trasy inspekcyjne po zakładach, stacjach i obiektach zaprojektowanych dla ludzi, nie dla maszyn.',
          modify: 'Dodaj jedno lub dwa ramiona z chwytakiem do manipulacji albo maszt sensoryczny do inspekcji. Przejdź na podwozie kołowe lub gąsienicowe, gdy teren staje się płaski lub miękki.',
        },
        {
          name: 'Robot gąsienicowy',
          role: 'Nieutwardzony, ciężki teren, place budowy',
          body: 'Podwozie gąsienicowe do błota, gruzu i stromego, nieutwardzonego terenu. Wozi ładunek po placu budowy lub otwartym polu, gdzie koła grzęzną, a nogi są zbyt wolne.',
          modify: 'Zamontuj nośnik logistyczny do ciężkiego transportu, ramię do przenoszenia lub maszt pomiarowy do inspekcji BIM. Ten sam korpus przechodzi na nogi lub koła, gdy zmienia się zadanie.',
        },
        {
          name: 'Robot kołowy',
          role: 'Posadzki, magazyny, płaski teren',
          body: 'Szybkie, ciche podwozie kołowe do posadzek przemysłowych i magazynów — na płaskim około 2.5× bardziej energooszczędne niż nogi. Idealne do patrolu, monitoringu i transportu wewnętrznego.',
          modify: 'Dodaj ramiona i chwytak do pick-and-place, maszt sensoryczny do monitoringu lub nośnik do transportu. Przenieś moduł korpusu na podwozie gąsienicowe, aby zejść z posadzki.',
        },
        {
          name: 'Robot kołowo-nożny',
          role: 'Płaski teren, przeszkody i szyny',
          body: 'Hybrydowe podwozie kołowo-nożne: jedzie szybko po płaskim, a gdy napotka stopień, próg lub szynę, nogi unoszą koła ponad przeszkodę. Jedna platforma do mieszanych środowisk, które inaczej wymagałyby dwóch robotów.',
          modify: 'Ramiona, chwytak, głowica zbioru czy maszt sensoryczny montują się na szybkozłączu. Zdejmij nogi dla czystego podwozia kołowego lub dodaj je z powrotem, gdy trasa robi się trudna.',
        },
        {
          name: 'Ramię na platformie',
          role: 'Linie produkcyjne, maszyny jezdne, headery',
          body: 'Moduł korpusu przytwierdzony w jednym punkcie — na linii produkcyjnej albo zamontowany na jezdnej maszynie lub headerze. Na headerze do zbioru sałaty ramiona ścinają plon i układają go wprost na taśmę, gdy maszyna posuwa się naprzód.',
          modify: 'Wybierz jedno lub dwa ramiona z chwytakiem, nożem lub głowicą zbioru. Zamontuj stacjonarnie na linii albo na dowolnej maszynie nośnej, która przewiezie go przez pole.',
        },
        {
          name: 'Robot na szynach',
          role: 'Szklarnie, rzędy, stałe trasy',
          body: 'Wersja szynowa do szklarni i tuneli o stałym układzie rzędów. Jeździ po szynach z rur grzewczych między uprawami, dla precyzyjnego, powtarzalnego oprysku, monitoringu i selektywnego zbioru.',
          modify: 'Dodaj głowicę oprysku lub fertigacji, maszt sensoryczny albo miękki chwytak. Ten sam moduł korpusu zdejmuje się z szyn na podwozie kołowe lub kołowo-nożne do pracy w terenie otwartym.',
        },
      ],
    },
  },
  'transport-drone': {
    battery: {
      title: 'Bateria i zasilanie',
      lead: 'Dron transportowy lata na własnej baterii o dużej mocy i wozi baterie hot-swap dla robotów, które dostarcza. Jego zadaniem jest przewożenie robotów, aby docierały z pełnymi własnymi bateriami i zużywały energię na pracę, a nie na dojazd.',
      rows: [
        { label: 'Nośność maksymalna', value: '500 kg' },
        { label: 'Waga drona', value: '90 kg' },
        { label: 'Przewozi', value: 'roboty · moduły · naładowane baterie' },
        { label: 'Konstrukcja', value: 'modułowa' },
      ],
    },
    drone: {
      title: 'Dron przewozi roboty',
      body: 'Naszym celem jest, aby dron przewoził roboty i humanoidy na dalsze odległości, dzięki czemu roboty zachowują energię na zadanie zamiast zużywać ją na dojazd. Dron wozi też wymienne moduły i podwozia, więc robot dociera gotowy dobrać moduł zadaniowy i platformę, których wymaga jego środowisko.',
      points: [
        'Roboty docierają na miejsce z pełnymi bateriami i lądują gotowe do pracy.',
        'Wymienne podwozia i moduły zadaniowe podróżują razem z dronem.',
        'Dostawa tam, gdzie kończy się droga — góry, place bez utwardzonych dróg, tereny odcięte po powodzi.',
        'Brakujące ogniwo modelu wynajmu godzinowego: jeden robot obsługuje kilku klientów tego samego dnia.',
      ],
    },
  },
  'polcero-os': {
    vision: visionRobot,
  },
};
