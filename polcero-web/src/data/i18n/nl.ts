import type { SiteContentOverride } from './overrides';

export const nl: SiteContentOverride = {
  tagline: 'Autonome modulaire robots voor industrie en landbouw',
  nav: {
    products: 'Producten',
    solutions: 'Oplossingen',
    services: 'Branches',
    industries: 'Sectoren',
    useCases: 'Toepassingen',
    company: 'Bedrijf',
    news: 'Nieuws',
    contact: 'Contact',
    cta: 'Neem contact op',
  },
  services: {
    eyebrow: 'ZAKELIJKE BRANCHES',
    h2: [
      { text: 'Vijf branches, ', weight: 300 },
      { text: 'één AI-brein', weight: 700 },
    ],
    lead: 'Van kant-en-klare cobots tot fotonica in het lab - elke branche draait op dezelfde POLCERO-intelligentielaag.',
    cta: 'Ontdek de branches',
    all: 'Alle branches',
  },
  branches: [
    {
      tagline: 'Industriële cobots en AMR\'s',
      desc: 'Industriële collaboratieve robots, autonome heftrucks en AMR-platformen - ontworpen en op maat geleverd.',
      intro: 'Robots bestaan al - wat ontbreekt zijn de systemen die ze aansturen. Wij bouwen die ontbrekende laag: we installeren kennis, een plan en "ogen" (camera\'s, sensoren) in de machine, verbinden die met AI en laten haar zelfstandig werken - zonder bestuurder en zonder constant toezicht. ICB Robots is de actieve operationele branche van POLCERO: we ontwerpen, bouwen en implementeren cobots, autonome heftrucks, AMR-platformen en geautomatiseerde productiesystemen.',
      points: ['Collaboratieve robots (cobots)', 'Autonome heftrucks', 'AMR-platformen', 'Controlecentrum', 'Autonome productie', 'Productielijnen'],
      note: 'Actieve branche · teamervaring sinds 1980',
      sections: [
        { title: 'Cobots', desc: 'Ondersteunen mensen, automatiseren, bevoorraden, monteren en transporteren.' },
        { title: 'Autonome heftrucks', desc: 'Transporteren, heffen, scannen, lokaliseren en obstakels vermijden.' },
        { title: 'AMR-platform', desc: 'Binnenrijden, heffen, dragen, navigeren, ontwijken en afleveren.' },
        { title: 'Controlecentrum', desc: 'Bewaakt, analyseert, alarmeert, reageert, beveiligt en rapporteert.' },
        { title: 'Autonome productie', desc: 'Sorteert, verpakt, etiketteert, inspecteert, verplaatst en synchroniseert.' },
        { title: 'Productielijnen', desc: 'Optimaliseert, automatiseert, controleert, integreert, bewaakt en verbetert.' },
        { title: 'Het POLCERO AI-brein in elke robot', desc: 'Elk ICB-product wordt aangedreven door de intelligentielaag van POLCERO AI Systems: VLA-modellen, YOLO-klasse detectie, SLAM-navigatie en vlootbeheer. Hetzelfde brein wordt afgestemd op de data van uw proces. Programmering: Python, C++ en ROS.' },
      ],
    },
    {
      tagline: 'Het AI-brein voor elke robot',
      desc: 'Wij bouwen de intelligentielaag voor humanoïde en gespecialiseerde robots: perceptie, planning, autonomie, vlootbeheer.',
      intro: 'POLCERO bouwt een AI-intelligentielaag - perceptie, planning, besturing en vlootbeheer - voor humanoïde en gespecialiseerde robots. Dezelfde AI-stack bedient alle POLCERO-branches: afgestemde VLA-modellen, YOLO-visie, edge+cloud-architectuur en een datavliegwiel. De robothardware kan van de klant zelf zijn of uit onze catalogus komen; wij leveren de intelligentie.',
      points: ['VLA-afstemming', 'Visie en perceptie', 'Edge + cloud-architectuur', 'Klassieke besturing waar dat volstaat', 'Vlootbeheer'],
      sections: [
        { title: 'VLA-afstemming', desc: 'Open VLA-modellen (GR00T N1.7, π0, OpenVLA) afgestemd op klantdata. Een abstractielaag laat ons basismodellen verwisselen zonder uw taakintelligentie opnieuw te trainen.' },
        { title: 'Visie en perceptie', desc: 'YOLO-klasse detectie voor realtime objectherkenning, dieptecamera\'s (RGB-D), LiDAR, multispectrale en thermische beeldvorming, plus een VLM voor scène- en taalbegrip.' },
        { title: 'Edge + cloud-architectuur', desc: 'On-board edge-inferentie voor besturing met minder dan 10 ms latentie. Cloud voor trainingsupdates, analyse en vlootbeheer. Een datavliegwiel verbetert de prestaties voortdurend.' },
        { title: 'Klassieke besturing waar dat volstaat', desc: 'PID-regelaars voor eenvoudig, repetitief grijpen en snijden - lagere kosten, hogere betrouwbaarheid. AI reserveren we voor complexe perceptie en scènebegrip-beslissingen.' },
      ],
    },
    {
      tagline: 'Platform + gespecialiseerde robots',
      desc: 'Het modulaire POLCERO-platform en een catalogus van robots die we met ons AI-brein uitrollen - voor elke markt, op maat.',
      intro: 'De Robots-branche is het modulaire platform dat de kern vormt van alles wat we bouwen - een gedeeld AI-brein, een gestandaardiseerde interface, verwisselbare onderstellen en plug-and-play-taakmodules. We implementeren ook robots uit onze partnercatalogus en leggen daar ons AI-brein overheen voor elke markt.',
      points: ['AI-brein', 'Plug-and-play-interface', 'Onderstelfamilie', 'Taakmodules', 'Landbouwrobots', 'Robots voor bouwplaatsen', 'Stationaire AI-machines'],
      sections: [
        { title: 'AI-brein', desc: 'VLA + YOLO-modellen afgestemd op klantdata. Edge-inferentie en cloudtraining. Dezelfde intelligentielaag past zich aan elk onderstel en elke markt aan.' },
        { title: 'Plug-and-play-interface', desc: 'Een gestandaardiseerde mechanische en elektrische connector. Verwissel onderstellen of taakmodules zonder de intelligentielaag te herontwerpen - één integratiepunt voor alle combinaties.' },
        { title: 'Onderstelfamilie', desc: 'W4 (wielen), T6 (rupsen), WL4 (wiel-poot), Q4 (lopend). Wielplatformen zijn op vlakke grond ongeveer 2,5 keer energiezuiniger dan lopende - afgestemd op terrein en taak.' },
        { title: 'Taakmodules', desc: 'Zachte grijper, spuit-/fertigatiekop, sensormast (RGB-D / multispectraal / thermisch), logistieke drager, manipulator op afstand - sluit het juiste gereedschap aan voor de klus.' },
        { title: 'Landbouwrobots', desc: 'Autonome veldplatformen voor zaaien, verzorgen, precisiespuiten en selectief oogsten. Sensorfusie van RGB-D + multispectraal + thermisch voor monitoring van de gewasgezondheid.' },
        { title: 'Robots voor bouwplaatsen', desc: 'BIM-naar-veld-uitzetten, boren, autonome grondwerken, inspectie tegen een digital twin. Door de mens gecontroleerde autonomie in alles.' },
        { title: 'Stationaire AI-machines', desc: 'Robots met vaste arm en intelligente werkstations voor inspectie, kwaliteitscontrole, repetitieve montage en materiaalbehandeling op productielijnen.' },
      ],
    },
    {
      tagline: 'Landbouw-AI + veldrobots',
      desc: 'Autonome vloot veldrobots met het AI-boerbrein: zaaien, verzorgen, selectief oogsten - RaaS-model (robot-as-a-service).',
      intro: 'Farma AI is de landbouwbranche van POLCERO: een vloot autonome veldrobots aangestuurd door het toezichthoudende "AI-boer"-brein voor de volledige teeltcyclus - zaaien, verzorgen (wieden, gericht spuiten), monitoring en selectief oogsten van delicate groenten. Gebouwd voor grote groentebedrijven, geleverd als Robot-as-a-Service (RaaS) - zonder kapitaalinvestering.',
      points: ['Zaaien', 'Verzorging - wieden en dunnen', 'Gericht spuiten / microdosering', 'Monitoring', 'Selectief oogsten'],
      sections: [
        { title: 'Zaaien', desc: 'Precieze rij-voor-rij-verplanting of directe zaai met RTK/SLAM-navigatie. Plaatsingsnauwkeurigheid onder de centimeter op het POLCERO-W4-onderstel.' },
        { title: 'Verzorging - wieden en dunnen', desc: 'Onkruiddetectie via computervisie plus mechanisch of thermisch wieden. Geen herbicide voor herkende onkruiden - alleen gerichte puntspuit.' },
        { title: 'Gericht spuiten / microdosering', desc: 'Selectieve toediening van meststof of gewasbeschermingsmiddelen alleen daar waar de AI een behoefte detecteert. Verlaagt het chemiegebruik tot 90% ten opzichte van vlakdekkend spuiten.' },
        { title: 'Monitoring', desc: 'Dagelijkse veldscans met RGB-D + multispectrale + thermische camera\'s. Kaart van de gewasgezondheid, vroegtijdige ziektewaarschuwing en voorspelling van de oogstgereedheid.' },
        { title: 'Selectief oogsten', desc: 'Selectief oogsten van delicate groenten (te beginnen met slakroppen) - het moeilijkste onopgeloste gat in de landbouwautomatisering. Zachte grijper plus AI-rijpheidsdetectie.' },
      ],
    },
    {
      tagline: 'AI-rekenkracht met licht',
      desc: 'R&D-richting: fotonisch rekenen om AI-inferentie in onze robots te versnellen - minder vermogen, hogere doorvoer.',
      intro: 'Photonic Processors is de R&D-richting van POLCERO: AI-inferentie in onze robots versnellen met licht in plaats van elektronica alleen. Optische matrixvermenigvuldiging - de kernbewerking in neurale netwerken - kan in één optische passage door een fotonische chip worden uitgevoerd, met een latentie onder de nanoseconde en een energieverbruik per bewerking dat orden van grootte lager is dan bij GPU/ASIC-chips.',
      points: ['Optische matrixvermenigvuldiging', 'Hybride fotonisch-elektronische architectuur', 'Markt: van 1,8 mld naar 14,6 mld USD', 'Fotonica als de toekomstige rekenlaag'],
      sections: [
        { title: 'Optische matrixvermenigvuldiging', desc: 'Inferentie van neurale netwerken wordt gedomineerd door matrix-vectorvermenigvuldiging (GEMM). Fotonische chips voeren die uit met licht dat door meshes van Mach-Zehnder-interferometers gaat - in één optische passage doen wat elektronica duizenden klokcycli kost om te berekenen.' },
        { title: 'Hybride fotonisch-elektronische architectuur', desc: 'Fotonische chips blinken uit in lineaire bewerkingen (matrixwiskunde) maar niet in niet-lineaire (activatiefuncties). De consensusarchitectuur koppelt optische kernen voor matrixwiskunde aan elektronische eenheden voor activaties - een hybride ontwerp dat het beste van beide neemt.' },
        { title: 'Markt: van 1,8 mld naar 14,6 mld USD', desc: 'De wereldwijde markt voor fotonische AI-versnellers, 2025 tot 2034 (CAGR 26,3%). Vanaf 2026 volgen we wereldwijd 52 bedrijven in fotonisch rekenen.' },
        { title: 'Fotonica als de toekomstige rekenlaag', desc: 'Wanneer fotonische versnellers volwassen worden (een venster van 2027-2031 voor producten van datacenterklasse), is de POLCERO AI-breinarchitectuur gebouwd om ze op te nemen - de abstractielaag laat ons het rekensubstraat verwisselen zonder de taakintelligentie opnieuw te trainen.' },
      ],
    },
  ],
  hero: {
    eyebrow: 'MODULAIRE ROBOTS · POLEN',
    h1: [
      { text: 'Autonome ', weight: 300 },
      { text: 'modulaire', weight: 700 },
      { text: ' robots', weight: 300 },
    ],
    subhead: 'We bouwen niet één robot. We bouwen een ecosysteem dat alleen samen zin heeft.',
    h2: [
      { text: 'Eén platform, ', weight: 300 },
      { text: 'verwisselbare modules', weight: 700 },
      { text: ', elke taak.', weight: 300 },
    ],
    body: 'POLCERO verbindt drie lagen: een AI-platform dat het werk plant en bewaakt, transport dat de robot ter plaatse brengt, en een modulaire robot die zelf het onderstel en de taakmodule kiest voor de taak die hij aantreft. U geeft een doel op, geen beweging.',
    ctaPrimary: 'Praat over inzet',
    ctaSecondary: 'Bekijk het platform',
    imageAlt: 'Modulaire POLCERO-robot op een mobiel platform in een productiehal',
  },
  stats: [
    { label: 'laadvermogen transportdrone' },
    { label: 'waarde van eerste implementaties' },
    { label: 'lagere oogstkosten per stuk' },
    { label: 'eerste implementaties bij klanten' },
  ],
  platform: {
    h2: [
      { text: 'Een brein dat ', weight: 300 },
      { text: 'een doel toewijst', weight: 700 },
      { text: ' - geen voorgeprogrammeerde beweging.', weight: 300 },
    ],
    body: 'Het AI-platform neemt de taak aan, plant de uitvoering, bewaakt het verloop en documenteert het resultaat. De robot leert door demonstratie - een operator voert de taak uit, het systeem begrijpt het en handelt autonoom, zonder complexe programmering. Modellen kunnen lokaal draaien, op het apparaat, zonder beelden naar buiten te sturen.',
    cta: 'Hoe het platform werkt',
    layers: [
      { title: 'AI-laag', body: 'Planning, toezicht en taakdocumentatie. Data en compliance blijven binnen de Europese Unie.' },
      { title: 'Transportlaag', body: 'Een transportdrone brengt de robot waar toegang duur of onmogelijk is - op termijn ook de robots zelf.' },
      { title: 'Modulaire robot', body: 'Een gedeelde kernmodule, verwisselbare onderstellen en taakmodules. Hij leest de situatie en kiest zelf zijn gereedschap.' },
    ],
  },
  tabs: {
    h2: [
      { text: 'Waar ', weight: 300 },
      { text: 'POLCERO werkt', weight: 700 },
    ],
    items: [
      {
        label: 'Industrie',
        title: 'De robot rijdt naar het werkstation - hij zit er niet aan vastgeschroefd',
        body: 'Een humanoïde op een mobiel platform betreedt een hal die voor mensen is ontworpen, zonder deze te verbouwen. Hij reikt waar een medewerker reikt, bedient meerdere stations in plaats van bij één te staan en voert twee handelingen in één cyclus uit.',
        alt: 'Humanoïde POLCERO-robot die een montagestation in een hal bedient',
      },
      {
        label: 'Landbouw',
        title: 'Selectieve manipulatie waar massale oogst tekortschiet',
        body: 'Een robot met een landbouwtaakmodule oogst groenten in kassen, tunnels en op het veld en verwisselt zo nodig de grijper voor een laser om te wieden. Hij werkt waar het satellietsignaal wegvalt.',
        alt: 'POLCERO-robot aan het werk tussen gewasrijen in een folietunnel',
      },
      {
        label: 'Logistiek',
        title: 'Transport waar de weg eindigt',
        body: 'Een transportdrone bezorgt onderdelen, materialen en de robots zelf in bergachtig terrein, op bouwplaatsen zonder verharde wegen en in gebieden die na een storing of overstroming zijn afgesloten. De ontbrekende schakel van het uurverhuurmodel.',
        alt: 'POLCERO-transportdrone die een lading over moeilijk bereikbaar terrein vervoert',
      },
    ],
  },
  overview: {
    h2: [
      { text: 'Eén platform in ', weight: 300 },
      { text: 'vele configuraties', weight: 700 },
    ],
    lead: 'We bouwen niet voor elke taak een aparte machine. We bouwen één kernmodule, plaatsen die op het gekozen onderstel en rusten die uit met een taakmodule - dezelfde machine, een ander gereedschap en programma, voert een andere taak uit.',
  },
  cards: {
    eyebrow: 'OP MAAT VERKRIJGBAAR',
    h2: [
      { text: 'Robots gebouwd ', weight: 300 },
      { text: 'rond het proces', weight: 700 },
      { text: ' van de klant', weight: 300 },
    ],
  },
  mission: {
    h2: [
      { text: 'Elke volgende implementatie ', weight: 300 },
      { text: 'goedkoper en sneller', weight: 700 },
      { text: ' dan de vorige', weight: 300 },
    ],
    body: 'De gedeelde kernmodule is herbruikbaar en data uit eerdere implementaties verkort de modeltraining. Dit is onze belangrijkste succesmaatstaf - de weg van een projectbedrijf naar een robotfabrikant.',
    imageAlt: 'Een vloot autonome POLCERO-robots in een moderne productiefabriek',
  },
  closing: {
    h2: [
      { text: 'Wij verkopen het ', weight: 300 },
      { text: 'resultaat', weight: 700 },
      { text: ', niet de machine.', weight: 300 },
    ],
    body: 'We rekenen af op geoogste hectares, verwerkt volume en gehaalde deadlines. Wij nemen het technische risico op ons, want wij staan in voor de technologie. Laten we het over uw proces hebben.',
    cta: 'Neem contact op',
  },
  footer: {
    tagline: 'Autonome modulaire robots voor industrie en landbouw. Ontworpen, gebouwd en onderhouden in Polen.',
    columns: [
      {
        title: 'Producten',
        links: [
          { label: 'Humanoïde' },
          { label: 'Humanoïde op een mobiel platform' },
          { label: 'Gespecialiseerde robots' },
          { label: 'Transportdrone' },
          { label: 'Specificatie' },
        ],
      },
      {
        title: 'Sectoren',
        links: [
          { label: 'Industrie' },
          { label: 'Landbouw' },
          { label: 'Bouw' },
          { label: 'Logistiek' },
          { label: 'Publieke sector' },
        ],
      },
      {
        title: 'Bedrijf',
        links: [
          { label: 'Branches' },
          { label: 'Over ons' },
          { label: 'Nieuws' },
          { label: 'Contact' },
        ],
      },
      {
        title: 'Bronnen',
        links: [
          { label: 'POLCERO OS-platform' },
          { label: 'Over ons (PDF)' },
          { label: 'RSS' },
        ],
      },
    ],
    legal: 'Privacybeleid',
    rights: 'Alle rechten voorbehouden.',
  },
  products: [
    {
      category: 'Humanoïde',
      name: 'Humanoïde',
      blurb: 'De kernmodule aangevuld met benen en twee armen. Betreedt ruimtes die voor mensen zijn ontworpen en bedient machines die voor handmatige bediening zijn gebouwd.',
      subtitle: 'Werkt waar mensen werken',
      uses: ['Bemannen van stations die voor mensen zijn ontworpen', 'Montage en repetitief fysiek werk', 'Bedienen van machines gebouwd voor handmatige bediening', 'Huishoudelijke hulp en opruimwerk (roadmap)'],
    },
    {
      category: 'Humanoïde',
      name: 'Humanoïde op een mobiel platform',
      blurb: 'Dezelfde humanoïde op een mobiele basis. Rijdt naar het station en bedient meerdere plekken in plaats van bij één te staan.',
      subtitle: 'Eén robot, vele stations',
      uses: ['Meerdere stations bedienen vanuit één machine', 'Gaten dichten tussen machines op de vloer', 'Intern transport tussen stations', 'Twee handelingen in één cyclus'],
    },
    {
      category: 'Gespecialiseerde robots',
      name: 'Gespecialiseerde robots',
      blurb: 'Dezelfde kernmodule - besturing, AI en verwisselbare accu\'s - op het onderstel dat uw terrein vraagt: lopend, rups, wielen of wiel-poot. Verwissel het platform, behoud het brein en de taakmodules.',
      subtitle: 'Eén kernmodule, vier onderstellen',
      uses: ['Inspectie en monitoring op zwaar terrein', 'Patrouille van infrastructuur en objecten', 'Veldwerk en onverhard transport', 'Werk en materiaaltransport op bouwplaatsen', 'Intern transport en monitoring op vloeren'],
      platforms: [
        {
          name: 'Lopende robot',
          drive: 'Lopend onderstel (4 poten)',
          terrain: 'Trappen, obstakels, oneffen terrein',
          blurb: 'De kernmodule op een lopend onderstel. Neemt trappen, drempels en terrein dat wielen niet aankunnen.',
        },
        {
          name: 'Rupsrobot',
          drive: 'Rupsonderstel',
          terrain: 'Onverhard, ruw terrein, bouwplaatsen',
          blurb: 'Een rupsonderstel voor ruw, oneffen terrein, bouwplaatsen en veldwerk.',
        },
        {
          name: 'Wielrobot',
          drive: 'Wielonderstel',
          terrain: 'Vloeren, magazijnen, vlakke grond',
          blurb: 'Een snel, stil wielonderstel voor industriële vloeren, magazijnen en monitoring.',
        },
        {
          name: 'Wiel-poot-robot',
          drive: 'Wiel-poot-onderstel',
          terrain: 'Vlakke grond, obstakels en rails',
          blurb: 'Een hybride wiel-poot-onderstel: rolt over vlakke grond en neemt obstakels en rails.',
        },
      ],
    },
    {
      category: 'Transportdrone',
      name: 'Transportdrone',
      blurb: 'Een zware transportdrone om robots, modules en ladingen naar moeilijk bereikbare plekken te vervoeren. Wij bezorgen de robot waar toegang onmogelijk is.',
      subtitle: 'Bezorgt de robot waar geen weg is',
      specs: [
        { label: 'Maximaal laadvermogen' },
        { label: 'Gewicht van de drone' },
        { label: 'Constructie', value: 'modulair' },
        { label: 'Vervoert', value: 'robots · modules · ladingen' },
      ],
      uses: ['Robots, modules en ladingen bezorgen op moeilijk bereikbare plekken', 'Leveringen na een storing of overstroming', 'Transport naar bergachtig en bebost terrein', 'Bevoorrading van bouwplaatsen zonder wegen'],
    },
    {
      category: 'Software',
      name: 'POLCERO OS',
      blurb: 'De kernmodule met de AI-laag: besturing, perceptie en planning. De robot leert door demonstratie - een operator voert de taak uit, het systeem begrijpt het en handelt autonoom, wat de programmeertijd tot tienvoudig verkort.',
      subtitle: 'Het AI-brein dat leert door demonstratie',
      price: 'Inbegrepen bij implementatie',
      uses: ['De robot leren door demonstratie', 'Taakplanning, toezicht en documentatie', 'Beheer van robotvloten', 'Lokale werking met data in de EU'],
    },
  ],
  industries: [
    {
      name: 'Industrie',
      blurb: 'Een humanoïde op een mobiel platform in hallen die voor mensen zijn ontworpen.',
      intro: 'Productiehallen, werkstations, transportbanden en werkhoogtes zijn al decennia voor mensen ontworpen. Een robot met menselijke proporties betreedt die omgeving zonder deze te verbouwen - hij reikt waar een medewerker reikt en bedient machines die voor handmatige bediening zijn gebouwd. De klant past niet de fabriek aan de robot aan, maar de robot aan de fabriek.',
      challenges: [
        { title: 'Personeelstekort', text: 'Repetitief fysiek werk en opruimwerk zijn steeds moeilijker te bemannen, en het verloop blijft stijgen.' },
        { title: 'Vaste stations', text: 'Industriële robots zitten aan één plek vastgeschroefd en kunnen niet meekomen als het proces verandert.' },
        { title: 'Dure verbouwingen', text: 'Automatisering betekent meestal de hal herontwerpen rond de machine, wat de instapdrempel verhoogt.' },
        { title: 'Integratie met bestaande machines', text: 'Een nieuw apparaat moet samenwerken met de machines die de klant al draait.' },
      ],
      approach: [
        { title: 'De robot rijdt naar het station', text: 'Een humanoïde op een mobiel platform bedient meerdere stations in plaats van bij één te staan en dicht de gaten tussen machines.' },
        { title: 'Twee handelingen per cyclus', text: 'Een dubbelarmige opzet met taillerotatie verhoogt de doorvoer per station bij repetitief werk.' },
        { title: 'Kant-en-klare implementatie', text: 'Ontwerp, bouw, integratie, inbedrijfstelling, documentatie en service - vanaf 2 mln PLN, met conformiteitsbeoordeling.' },
      ],
    },
    {
      name: 'Landbouw',
      blurb: 'Selectief oogsten en verzorgen in tunnels en kassen.',
      intro: 'De grote fabrikanten van landbouwmachines zijn zeer goed in massale oogst en navigatie op open velden. Selectieve manipulatie in zacht, kwetsbaar gewas en werk in tunnels en kassen waar het satellietsignaal wegvalt, blijven onderbediend. Dit is ons terrein, en we hebben er bewust voor gekozen.',
      challenges: [
        { title: 'Tekort aan seizoensarbeiders', text: 'Eén boerderij zet in de piek honderd tot honderdvijftig mensen in - en er zijn er elk jaar minder beschikbaar.' },
        { title: 'Stijgende arbeidskosten', text: 'De volledige kosten van één seizoensarbeider bedragen vandaag ongeveer 15.900 PLN per maand, en stijgen.' },
        { title: 'Druk om chemie te beperken', text: 'Verzorging en wieden moeten steeds preciezer en gerichter worden.' },
        { title: 'Een kort seizoen', text: 'Een boerderij heeft de machine zes maanden nodig - geen reden om er het hele jaar kapitaal in vast te leggen.' },
      ],
      approach: [
        { title: 'Een landbouwtaakmodule', text: 'Een robot met armen en een grijper oogst het gewas en verwisselt zo nodig het gereedschap voor een laser om te wieden.' },
        { title: 'Afrekenen op resultaat', text: 'We mikken op 9-12 groszy per stuk tegenover 15-20 bij handmatige oogst - ongeveer 40% minder.' },
        { title: 'Werkt zonder GPS', text: 'Selectief oogsten en verzorgen in tunnels en kassen waar satellietnavigatie wegvalt.' },
      ],
    },
    {
      name: 'Bouw',
      blurb: 'Inspectie, zwaar transport en VGM-patrouille - menselijk werk dat robots kunnen overnemen.',
      intro: 'Op de bouwplaats nemen robots werk over dat riskant of eentonig is voor mensen: inspectie en reality-capture tegen het BIM-model, uitzetten, zwaar transport en VGM-patrouilles. Een rupsonderstel gaat om met onverhard, oneffen terrein, terwijl de transportdrone de voorraden van buitenaf aanvult.',
      challenges: [
        { title: 'Veiligheidsrisico\'s', text: 'Werk op hoogte, in stof en rond bewegende machines is gevaarlijk voor mensen.' },
        { title: 'Kloof tussen BIM en werkelijkheid', text: 'De as-built-toestand wijkt af van het model, en het opsporen van de verschillen kost tijd.' },
        { title: 'Vertraagde voortgangsmonitoring', text: 'De voortgangsdocumentatie wordt zelden en handmatig gedaan.' },
        { title: 'Moeilijk, onverhard terrein', text: 'Toegang en materiaaltransport over een weglooze locatie is kostbaar.' },
      ],
      approach: [
        { title: 'Inspectie en reality-capture tegen BIM', text: 'De robot legt de toestand van de locatie vast en vergelijkt die met het model, waarbij verschillen worden gemarkeerd.' },
        { title: 'Transport op moeilijk terrein', text: 'Een rupsonderstel verplaatst materialen tussen zones, terwijl de drone ze van buitenaf aanvoert.' },
        { title: 'VGM-patrouille en monitoring', text: 'Regelmatige rondes en documentatie zonder mensen in gevaar te brengen, met data aan de kant van de klant.' },
      ],
    },
    {
      name: 'Logistiek',
      blurb: 'Een transportdrone waar de weg eindigt.',
      intro: 'Een robot is waard wat hij waard is op de plek waar hij nodig is. De transportlaag - met een drone die tot 500 kilogram draagt, een prototype dat we al hebben - bezorgt onderdelen, materialen en de robots zelf waar toegang duur, traag of onmogelijk is.',
      challenges: [
        { title: 'Moeilijk bereikbaar terrein', text: 'Bergachtige en beboste gebieden, bouwplaatsen zonder verharde wegen, zones afgesloten na een storing of overstroming.' },
        { title: 'Kosten van vloot en chauffeurs', text: 'Het onderhoud van voertuigen en chauffeurs en de afhankelijkheid van verkeer en wegomstandigheden belasten elke dienst.' },
        { title: 'Lossen en palletiseren', text: 'Repetitief, zwaar intern transport in het magazijn vraagt nog steeds handen.' },
        { title: 'De last mile van de robot', text: 'De kosten en tijd om de robot te bezorgen bepalen de rentabiliteit van uurverhuur.' },
      ],
      approach: [
        { title: 'Transportdrone', text: 'Bezorgt ladingen, mensen en robots waar de weg eindigt - zonder een vloot te onderhouden.' },
        { title: 'Cobots en AMR-platformen', text: 'ICB Robots voor lossen, orderpicken en intern transport, op maat geleverd.' },
        { title: 'Robot ter plaatse bezorgd', text: 'De ontbrekende schakel van het uurverhuurmodel - de robot bedient meerdere klanten op dezelfde dag.' },
      ],
    },
    {
      name: 'Publieke sector',
      blurb: 'Data en compliance in de EU. Op het apparaat, geen beelden naar buiten gestuurd.',
      intro: 'Voor veel instellingen is data uit productiehallen en infrastructuur gevoelige informatie. Onze modellen kunnen lokaal draaien, op het apparaat, zonder beelden naar buiten te sturen. Bij toenemende regelgevingseisen is dat geen technisch argument meer maar een aankoopvoorwaarde.',
      challenges: [
        { title: 'Regelgevingseisen', text: 'Compliance en auditeerbaarheid zijn een voorwaarde voor het gesprek, geen extraatje.' },
        { title: 'Gevoeligheid van data', text: 'Beelden en operationele data mogen de organisatie of de Europese Unie niet verlaten.' },
        { title: 'Controle over de toeleveringsketen', text: 'Publieke instellingen verwachten een transparante, Europese toeleveringsketen.' },
        { title: 'Productie in de EU', text: 'De toegevoegde waarde - ontwerp, software, montage en service - moet ter plaatse ontstaan.' },
      ],
      approach: [
        { title: 'Modellen op het apparaat', text: 'Perceptie en inferentie draaien lokaal; data en compliance blijven binnen de Europese Unie.' },
        { title: 'Ontworpen en gebouwd in Polen', text: 'Een fabriek in Kietrz en Poolse leveranciers voor de meeste componenten - controle over de toeleveringsketen.' },
        { title: 'Fotonische richting (R&D)', text: 'Fotonisch rekenen versnelt AI-inferentie bij een lager vermogensverbruik.' },
      ],
    },
  ],
};
