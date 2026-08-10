import type { ProductRichOverride } from '../../productRich';

// ── Sdílené bloky (shodné pro humanoid a mobile-humanoid) ─────────────────────
const batteryRobot = {
  title: 'Akumulátor a energie',
  lead: 'Každý robot pracuje se třemi hot-swap akumulátorovými pakety uloženými v centrálním modulu. Paket je samostatná 48V jednotka, takže výkon roste s počtem paketů a vybitý paket se vymění bez nářadí, zatímco robot pokračuje v práci na zbývajících.',
  rows: [
    { label: 'Napětí paketu', value: '48 V hot-swap' },
    { label: 'Energie paketu', value: '≈ 864 Wh na paket' },
    { label: 'Paketů v centrálním modulu', value: '3 (≈ 2.6 kWh celkem)' },
    { label: 'Výdrž na akumulátor', value: '≈ 5 h při běžném provozu' },
    { label: 'Při přímém napájení', value: '24/7 (kabelem nebo ze sítě)' },
    { label: 'Doba výměny', value: '< 60 s na paket, bez nářadí' },
  ],
};

const swapRobot = {
  title: 'Samovýměna akumulátorů — žádné prostoje',
  lead: 'Robot se kvůli nabíjení nikdy zcela nevypne. Vyměňuje své tři pakety postupně a pracuje přitom na zbývajících dvou, zatímco vybitý paket se nabíjí — směna se tak kvůli akumulátoru nikdy nezastaví.',
  robot: {
    title: 'Robot to zvládne sám',
    steps: [
      'Jakmile robot rozpozná docházející paket, dojede k nabíjecí stanici a udrží provoz na zbývajících dvou paketech.',
      'Rameno sáhne k zadní části centrálního modulu, uvolní zámek a vyjme vybitý paket.',
      'Vloží paket do volné pozice 4-pozicové stanice a na jeho místo vezme plně nabitý.',
      'Nový paket zaklapne; robot to opakuje pro každý paket a vrací se k práci — nikdy vypnutý, nikdy v nečinnosti.',
    ],
  },
  human: {
    title: 'Člověk to zvládne během několika sekund',
    steps: [
      'Bez vypínání a bez nářadí: pakety lze vyměnit za provozu, zatímco robot čeká připraven.',
      'Stiskněte zámek na zadní straně centrálního modulu a vytáhněte paket rovně ven.',
      'Zasuňte nabitý paket, dokud nezaklapne — robot pokračuje tam, kde skončil.',
    ],
  },
};

const statusRobot = {
  title: 'Stav akumulátoru a nabíjecí stanice',
  lead: 'Každý paket hlásí svůj vlastní stav, takže robot i jeho obsluha vždy vědí, kdy vyměnit. 4-pozicová nabíjecí stanice udržuje připravenou rotaci paketů a robot se sám dokuje, aby si během práce vyměnil vlastní pakety.',
  points: [
    { title: 'Živý stav každého paketu', text: 'Stav nabití, kondice a teplota každého ze tří paketů v reálném čase.' },
    { title: 'Prediktivní výměna', text: 'Systém naplánuje další výměnu dřív, než se paket vybije, takže se práce nikdy nepřeruší uprostřed úkolu.' },
    { title: '4-pozicová nabíjecí stanice', text: 'Čtyři nabíjecí vstupy udržují náhradní pakety nabité a připravené pro další rotaci.' },
    { title: 'Autonomní dokování', text: 'Robot si během směny vyměňuje vlastní pakety u stanice — bez obsluhy a bez prostojů.' },
  ],
};

const visionRobot = {
  title: 'Jak robot vidí',
  lead: 'Robot skládá obraz světa z několika pohledů zároveň. Širokoúhlá binokulární hlava poskytuje levý a pravý obraz; jejich porovnání dává hloubku; na to AI vrstva přidává perceptivní pohled, který pojmenovává objekty, povrchy a lidi.',
  views: [
    { label: 'Levý', text: 'Levé oko binokulární hlavy — širokoúhlý barevný pohled na scénu.' },
    { label: 'Pravý', text: 'Pravé oko — druhý barevný pohled, který robot porovnává s levým.' },
    { label: 'Hloubka', text: 'Stereo disparita mezi levým a pravým obrazem dává vzdálenost ke každému bodu v záběru.' },
    { label: 'Percepce', text: 'AI vrstva označuje objekty, povrchy, překážky a lidi a plánuje další krok přímo v zařízení.' },
  ],
  extra: [
    { title: 'Kamery na zápěstích', text: 'HD kamery na každém zápěstí poskytují detailní pohled pro přesné uchopování a montáž.' },
    { title: 'LiDAR + ultrazvuk', text: 'LiDAR na podvozku a ultrazvukové senzory mapují prostor a zachytí překážky mimo dosah kamer.' },
    { title: 'Síla a IMU', text: 'Klouby se silovou zpětnou vazbou a IMU snímají kontakt a rovnováhu pro bezpečný a stabilní pohyb.' },
    { title: 'Hlas a jazykový model', text: 'Hlasová interakce a jazykový model umožňují člověku řídit robota běžnou řečí.' },
  ],
};

const powerRobot = {
  title: 'Dvě cesty k energii: akumulátory nebo síť',
  lead: 'Robot je na akumulátory autonomní, ale tam, kde místo umí dodat proud, běží přímo ze sítě přes kabel — žádné pakety k rotaci, žádné prostoje, nižší provozní náklady.',
  modes: [
    { name: 'Hot-swap akumulátory', text: 'Plně mobilní a autonomní. Tři pakety rotují nabíjecí stanicí, takže robot pracuje kdekoli bez kabelu.' },
    { name: 'Přímé napájení (kabel)', text: 'Pro pevné stanoviště nebo provoz 24/7 čerpá robot proud přes kabel a běží nepřetržitě — akumulátory se stávají zálohou.' },
    { name: 'Síťová infrastruktura', text: 'V halách, továrnách a sklenících instalujeme pevné napájecí lišty; venku, na polích a dvorech, trolejové vedení jako tramvajová trakce. Robot čerpá z vedení a během práce si dobíjí pakety.' },
  ],
};

const R = { battery: batteryRobot, swap: swapRobot, status: statusRobot, vision: visionRobot, power: powerRobot };

export const cs: Record<string, ProductRichOverride> = {
  humanoid: {
    ...R,
    application: {
      title: 'Tři humanoidi, jeden sklad',
      body: 'Takto vypadá směna. V jediné místnosti jeden humanoid balí u stolu zásilku, druhý zvedá z podlahy naloženou kovovou přepravku a třetí skládá krabice na regál. Stejný robot, tři úkoly — každý vstoupil do prostoru postaveného pro lidi a převzal práci určenou lidským rukám, aniž by bylo nutné kolem něj přestavovat linku.',
    },
  },
  'mobile-humanoid': {
    ...R,
    versions: {
      title: 'Dvě verze platformy',
      lead: 'Stejný humanoidní trup sedí na pojezdové základně, kterou potřebujete — lehká, sklopná základna pro vychystávání u podlahy nebo těžká základna pro zvedání skutečné hmotnosti.',
      items: [
        {
          name: 'V1 — sklopná základna',
          blurb: 'Sloup se sklápí v polovině, takže se robot ohýbá pro sběr věcí z podlahy s malou ztrátou výkonu. Kola na základně otáčejí celého robota na místě, což jej činí obratným v úzkých uličkách a při nízkých výškách vychystávání.',
          specs: [
            { label: 'Nejlepší pro', value: 'Vychystávání u podlahy, úzké uličky' },
            { label: 'Základna', value: 'Sklopný sloup, otáčení na místě' },
            { label: 'Dosah', value: 'Od podlahy po pracovní výšku' },
          ],
        },
        {
          name: 'V2 — těžká základna',
          blurb: 'Silnější pojezdová platforma postavená pro zvedání skutečné hmotnosti. Zachovává dvouramenný humanoidní trup, ale stojí na tuhé základně s vysokou nosností pro manipulaci a montáž těžších průmyslových dílů.',
          specs: [
            { label: 'Nejlepší pro', value: 'Těžkou manipulaci a montáž' },
            { label: 'Základna', value: 'Tuhá platforma s vysokou nosností' },
            { label: 'Jmenovitá nosnost', value: '≈ 7 kg na rameno' },
          ],
        },
      ],
    },
  },
  'specialized-robots': {
    ...R,
    vision: { ...visionRobot, extra: [
      { title: 'Percepční sloup', text: 'Na specializovaném podvozku nese centrální modul přidaný sloup s nástroji a kamerami pro daný úkol.' },
      { title: 'LiDAR + ultrazvuk', text: 'LiDAR na podvozku a ultrazvukové senzory mapují náročný terén a zachytí překážky mimo dosah kamer.' },
      { title: 'Multispektrální / termální', text: 'Volitelné multispektrální a termální zobrazování pro zdraví plodin, inspekci a noční práci.' },
      { title: 'Výpočet v zařízení', text: 'Detekce a plánování běží v zařízení; data a soulad zůstávají v EU.' },
    ] },
    robots: {
      title: 'Specializovaná řada, robot po robotu',
      lead: 'Každý z nich je stejný centrální modul — řízení, AI a hot-swap akumulátory — na jiném podvozku. Ponechte mozek a moduly úkolů; vyměňte platformu podle terénu. Přidejte nebo odeberte ramena, chapadlo, sklízecí hlavu nebo senzorový sloup na rychloupínacím konektoru.',
      items: [
        {
          name: 'Kráčející robot',
          role: 'Schody, překážky, nerovný terén',
          body: 'Čtyřnohý podvozek, který zvládne schody, obrubníky a rozbitý terén, na jaký žádné kolo nestačí. Chodí inspekční trasy provozy, rozvodnami a lokalitami uspořádanými pro lidi, ne pro stroje.',
          modify: 'Přidejte jedno nebo dvě ramena s chapadlem pro manipulaci nebo senzorový sloup pro inspekci. Přejděte na kolovou či pásovou základnu, když je terén rovný nebo měkký.',
        },
        {
          name: 'Pásový robot',
          role: 'Nezpevněný, těžký terén, staveniště',
          body: 'Pásový podvozek pro bahno, suť a strmý, nezpevněný terén. Nese náklad přes staveniště nebo otevřené pole, kde kola zapadnou a nohy jsou příliš pomalé.',
          modify: 'Osaďte logistický nosič pro těžkou přepravu, rameno pro manipulaci nebo měřický sloup pro BIM inspekci. Stejné tělo přejde na nohy nebo kola, když se úkol změní.',
        },
        {
          name: 'Kolový robot',
          role: 'Podlahy, sklady, rovný terén',
          body: 'Rychlý, tichý kolový podvozek pro průmyslové podlahy a sklady — na rovném terénu zhruba 2.5× energeticky úspornější než nohy. Ideální pro obchůzky, monitoring a vnitřní přepravu.',
          modify: 'Přidejte ramena a chapadlo pro pick-and-place, senzorový sloup pro monitoring nebo nosič pro přepravu. Přesuňte centrální modul na pásovou základnu, když opustíte zpevněný povrch.',
        },
        {
          name: 'Kolo-nohý robot',
          role: 'Rovný terén, překážky a koleje',
          body: 'Hybridní kolo-nohý podvozek: na rovině se rychle valí, a když narazí na schod, obrubník nebo kolej, nohy zvednou kola přes ně. Jedna platforma pro smíšená prostředí, která by jinak vyžadovala dva roboty.',
          modify: 'Ramena, chapadlo, sklízecí hlava či senzorový sloup se montují na rychloupínací konektor. Sundejte nohy pro čistě kolovou základnu nebo je vraťte zpět, když trasa zdrsní.',
        },
        {
          name: 'Rameno na platformě',
          role: 'Výrobní linky, mobilní stroje, adaptéry',
          body: 'Centrální modul upevněný v jediném bodě — na výrobní lince nebo namontovaný na pojíždějícím stroji či adaptéru. Například na sklízecím adaptéru salátu ramena plodinu ustřihnou a položí rovnou na pás, jak stroj postupuje vpřed.',
          modify: 'Vyberte jedno nebo dvě ramena s chapadlem, řezačkou nebo sklízecí hlavou. Namontujte jej stacionárně na linku nebo na jakýkoli nosný stroj, který jej vede polem.',
        },
        {
          name: 'Robot na kolejích',
          role: 'Skleníky, řady, pevné trasy',
          body: 'Kolejnicově vedená verze pro skleníky uspořádané v pevných řadách. Jezdí po vyhřívaných trubkových kolejnicích mezi plodinami pro přesné a opakovatelné postřikování, monitorování a selektivní sklizeň.',
          modify: 'Přidejte postřikovou nebo fertigační hlavu, senzorový sloup či měkké chapadlo. Stejný centrální modul se zvedne z kolejnic na kolovou nebo kolo-nohou základnu pro otevřený terén.',
        },
      ],
    },
  },
  'transport-drone': {
    battery: {
      title: 'Akumulátor a energie',
      lead: 'Transportní dron létá na vlastním vysokovýkonovém paketu a veze hot-swap pakety pro roboty, které doručuje. Jeho úkolem je přemístit roboty tak, aby dorazili s vlastními akumulátory plnými a svou energii věnovali práci, ne cestě.',
      rows: [
        { label: 'Maximální nosnost', value: '500 kg' },
        { label: 'Hmotnost dronu', value: '90 kg' },
        { label: 'Přepravuje', value: 'roboty · moduly · nabité pakety' },
        { label: 'Konstrukce', value: 'modulární' },
      ],
    },
    drone: {
      title: 'Dron nese roboty',
      body: 'Naším cílem je, aby dron nesl roboty a humanoidy přes delší vzdálenosti, takže si roboti uchovají energii pro úkol místo toho, aby ji spotřebovali na cestu tam. Dron také veze vyměnitelné moduly a podvozky, takže robot dorazí schopen zvolit modul úkolu a platformu, kterou jeho prostředí vyžaduje.',
      points: [
        'Roboti se na místo dopraví s plnými akumulátory a přistanou připraveni k práci.',
        'Vyměnitelné podvozky a moduly úkolů cestují s dronem.',
        'Doručení tam, kde končí silnice — hory, lokality bez zpevněných cest, oblasti odříznuté po povodni.',
        'Chybějící článek modelu hodinového pronájmu: jeden robot obslouží více zákazníků tentýž den.',
      ],
    },
  },
  'polcero-os': {
    vision: visionRobot,
  },
};
