import type { RichBranch, DeepPartial } from '../../branchRich';

export const nl: Record<string, DeepPartial<RichBranch>> = {
  'icb-robots': {
    stats: [
      { label: 'Actief sinds' },
      { label: 'Jaar ervaring' },
      { label: 'Industriële sectoren' },
      { label: 'Robotics-as-a-Service' },
    ],
    productsHeading: {
      eyebrow: 'Productspecificaties',
      title: 'Echte gegevens uit de ICB-catalogus',
      desc: 'Gepubliceerde specificaties uit de productlijn van POLCERO / ICB Robots.',
    },
    products: [
      {
        name: 'AI-gestuurde robot voor precisiemontage en -manipulatie',
        desc: 'Ontworpen voor complexe taken met hoge nauwkeurigheid. Aangestuurd door onze software en ons AI-visiesysteem werkt de robot in verschillende productieomgevingen en corrigeert hij zijn eigen beweging in realtime. Wij programmeren hem op uw proces, brengen hem in gebruik en onderhouden hem.',
        specs: [
          { label: 'Laadvermogen' },
          { label: 'Reikwijdte' },
          { label: 'Herhaalnauwkeurigheid' },
          { label: 'Bedrijfstemperatuur' },
          { label: 'Garantie' },
          { label: 'Besturing' },
        ],
        points: [
          'AI-visiesysteem voor bewegingscorrectie in realtime',
          'Werkt in verschillende productieomgevingen zonder ombouw',
          'Programmering op maat per proces - wij configureren, implementeren en onderhouden',
          'Inzetbaar in productie-, logistieke en kwaliteitscontroletoepassingen',
        ],
      },
      {
        name: 'Intelligente robotarmen met 6 assen',
        desc: 'Zes bewegingsvrijheidsgraden voor complexe taken in beperkte productieruimte. Compact en eenvoudig te integreren - precisie en snelheid waar vloeroppervlak schaars is. Ook verkrijgbaar in een plafondgemonteerde uitvoering.',
        specs: [
          { label: 'Vrijheidsgraden' },
          { label: 'Herhaalnauwkeurigheid' },
          { label: 'Laadvermogen' },
          { label: 'Montageopties' },
        ],
        points: [
          'Hoge herhaalnauwkeurigheid voor precisietaken',
          'Hoog toegestaan laadvermogen',
          'Plafondgemonteerde uitvoering beschikbaar - bespaart vloeroppervlak',
          'Toepassingen: montage, verpakking, lassen, kwaliteitscontrole',
        ],
      },
    ],
    servicesHeading: {
      eyebrow: 'Servicecategorieën',
      title: 'Zes manieren om uw fabriek te robotiseren',
      desc: 'Elk systeem wordt op bestelling van de klant gebouwd - afgestemd op het proces, de fabriek en de integratie-eisen.',
    },
    services: [
      {
        name: 'Collaboratieve robots (cobots)',
        tagline: 'Mensen ondersteunen, automatiseren, aanleveren, monteren, transporteren',
        desc: 'Onze cobots werken naast menselijke operators - in gecertificeerde configuraties zijn geen veiligheidshekken nodig. Ze nemen repetitieve, ergonomisch belastende of precisietaken over, terwijl mensen zich richten op beoordeling en kwaliteitscontrole. Geprogrammeerd in Python, C++ en ROS, afgestemd op uw proces.',
        points: [
          'Ondersteun menselijke medewerkers op gedeelde werkplekken',
          'Automatiseer repetitieve of ergonomisch belastende taken',
          'Lever componenten en materialen aan de productielijn aan',
        ],
      },
      {
        name: 'Autonome heftrucks',
        tagline: 'Transporteren, heffen, scannen, lokaliseren, obstakels vermijden',
        desc: 'Onze autonome heftrucks verzorgen 24/7 de interne logistiek - pallets of ladingen oppakken, door de faciliteit transporteren en op de doellocatie plaatsen, zonder bestuurder. SLAM-navigatie: geen vloermarkeringen of infrastructuuraanpassingen nodig. WMS/ERP-integratie standaard.',
        points: [
          'Transporteer pallets en ladingen autonoom door de faciliteit',
          'Hef en plaats ladingen op doellocaties zonder bestuurder',
          'Scan barcodes en QR-codes voor identificatie van ladingen',
        ],
      },
      {
        name: 'AMR-platform',
        tagline: 'Binnenrijden, heffen, dragen, navigeren, vermijden, afleveren',
        desc: 'Het ICB AMR-platform is een configureerbare autonome mobiele robot voor transport binnen de faciliteit. Het basisplatform navigeert autonoom via LiDAR SLAM; taakmodules (transportbanddek, schap, roller, maatwerkhouder) worden verwisseld zonder het platform te wijzigen. Laadvermogen: 100-600 kg afhankelijk van de chassisvariant.',
        points: [
          'Rijd smalle gangpaden binnen en hef autonoom',
          'Hef en draag ladingen tot 600 kg',
          'Navigeer dynamisch en wijk in realtime uit voor obstakels',
        ],
      },
      {
        name: 'Controlecentrum',
        tagline: 'Bewaken, analyseren, waarschuwen, reageren, beveiligen, rapporteren',
        desc: 'Het ICB Controlecentrum is een softwarelaag voor toezicht die gegevens uit de volledige robotvloot en faciliteit samenbrengt. Het bewaakt de operaties in realtime, detecteert afwijkingen, activeert waarschuwingen, coördineert reacties en genereert compliance- en productiviteitsrapporten.',
        points: [
          'Bewaak de operaties van vloot en faciliteit in realtime',
          'Analyseer productie- en logistieke gegevens op knelpunten',
          'Waarschuw operators automatisch bij uitzonderingen en afwijkingen',
        ],
      },
      {
        name: 'Autonome productie',
        tagline: 'Sorteren, verpakken, etiketteren, inspecteren, verplaatsen, synchroniseren',
        desc: 'ICB-systemen voor autonome productie verzorgen taken aan het einde van de lijn en na de productie zonder handmatige tussenkomst. Vision en AI sturen de volgorde aan; de robot past zich in realtime aan productvariatie aan. Ontworpen voor verpakkings-, etiketteer- en kwaliteitscontrolelijnen.',
        points: [
          'Sorteer items op type, formaat of bestemming met vision-AI',
          'Verpak producten in dozen, trays of zakken',
          'Etiketteer verpakkingen nauwkeurig en controleer de plaatsing van etiketten',
        ],
      },
      {
        name: 'Productielijnen',
        tagline: 'Optimaliseren, automatiseren, besturen, integreren, bewaken, verbeteren',
        desc: 'Wij ontwerpen en automatiseren complete productielijnen - waarbij cobots, AMR\'s, transportbanden en besturingssoftware worden geïntegreerd tot één georkestreerd systeem. Elke lijn wordt gebouwd op het proces van de klant; wij testen hem in onze eigen faciliteit vóór levering.',
        points: [
          'Optimaliseer de productiestroom en verkort cyclustijden',
          'Automatiseer voorheen handmatige werkplekken',
          'Bestuur de volledige lijn via één geïntegreerde SCADA-/MES-interface',
        ],
      },
    ],
    casesHeading: {
      eyebrow: 'Praktijkvoorbeelden',
      title: 'Echte implementaties en projecten',
      desc: 'De fasen weerspiegelen de status zoals gepubliceerd op de oorspronkelijke website polcero.com.',
    },
    cases: [
      {
        sector: 'Bouw',
        stage: 'Concept',
        title: 'Robots voor materiaaltransport op bouwplaatsen',
        desc: 'Autonome robots voor het transporteren van bouwmaterialen - bakstenen, holle blokken, geprefabriceerde elementen - over actieve bouwplaatsen. Conceptfase, met bouwkundige domeinkennis in het team.',
      },
      {
        sector: 'Bouw',
        stage: 'R&D',
        title: 'Drones en robots voor inspectie van bouwplaatsen',
        desc: 'Drones en mobiele robots voor inspectie, meting en monitoring van bouwplaatsen. Op basis van analyse van de bouwmarkt - R&D-fase.',
      },
      {
        sector: 'Logistiek',
        stage: 'Pilot',
        title: 'Autonoom intern transport: AMR en heftrucks in een magazijn',
        desc: 'Autonoom intern transport waarbij AMR-platforms en autonome heftrucks worden gecombineerd in een magazijnomgeving. Momenteel in pilotimplementatie.',
      },
    ],
    sectorsHeading: {
      eyebrow: 'Bedrijfssectoren',
      title: 'Waar ICB-robots werken',
      desc: 'ICB-systemen worden ingezet in productie, logistiek en aanverwante sectoren - afgestemd op het specifieke proces en de fabriek.',
    },
    sectors: [
      { name: 'Productie', desc: 'Montage, machinebediening, transport binnen de lijn, inspectie en palletiseren op productielijnen van elke schaal.' },
      { name: 'Landbouw', desc: 'Intern transport binnen agrarische verwerkingsbedrijven, koelhuizen en verpakkingsloodsen.' },
      { name: 'Bouw', desc: 'Materiaaltransport op bouwplaatsen, montage van prefab, inspectie en repetitieve bouwtaken.' },
      { name: 'Logistiek en opslag', desc: 'Palletbehandeling, laden en lossen van trailers, goods-to-person-picking en eindsortering.' },
      { name: 'Diensten', desc: 'Horeca, logistiek in de zorg, facilitaire diensten en reinigings-/desinfectietaken.' },
      { name: 'Hernieuwbare energie', desc: 'Automatisering van componentenproductie en montage voor fabrikanten van hernieuwbare energie.' },
    ],
    processHeading: {
      eyebrow: 'Hoe wij leveren',
      title: 'Projectlevenscyclus - op bestelling gebouwd',
      desc: 'Elke ICB-implementatie volgt een proces van vier fasen, van documentatie tot inbedrijfstelling op locatie.',
    },
    process: [
      { title: 'Projectdocumentatie', desc: 'Wij komen samen met de klant om het proces in kaart te brengen en de eisen, beperkingen en succescriteria te documenteren. Resultaat: een haalbaarheidsrapport en conceptvoorstel.' },
      { title: 'Teamproject', desc: 'Ons engineeringteam ontwerpt het robot- of AMR-systeem - mechanisch, elektrisch en software - en verfijnt het AI-brein op klantgegevens of processimulaties.' },
      { title: 'Bouw en integratie', desc: 'Productie en montage in onze eigen faciliteit. Volledige fabrieksacceptatietest (FAT) en software-integratie. EU-conformiteitsdocumentatie (CE, ISO, NIS2) wordt opgesteld.' },
      { title: 'Levering en inbedrijfstelling', desc: 'Installatie op locatie, acceptatietest op locatie (SAT), operatortraining en overdracht. Doorlopende service onder onze RaaS-/servicelevelovereenkomst.' },
    ],
    aiBrain: {
      eyebrow: 'AI-brein',
      title: 'Elke ICB-robot draait op het POLCERO AI-brein',
      desc: 'Alle ICB-producten worden aangedreven door de intelligentielaag van POLCERO AI Systems: VLA-modellen, detectie van YOLO-klasse, SLAM-navigatie en vlootbeheer. Hetzelfde brein wordt verfijnd op uw procesgegevens. Programmering: Python, C++ en ROS.',
      ctaLabel: 'Meer weten over AI Systems',
    },
    compliance: {
      eyebrow: 'Compliance en veiligheid',
    },
  },
  'ai-systems': {
    stats: [
      { label: 'Latentie van edge-besturing' },
      { label: 'Verfijnde foundation-modellen' },
      { label: 'Multimodale waarneming' },
      { label: 'Hybride architectuur' },
    ],
    servicesHeading: {
      eyebrow: 'Mogelijkheden',
      title: 'De intelligentielaag',
      desc: 'Dezelfde AI-stack drijft elke POLCERO-tak aan. De robothardware kan van uzelf zijn of uit onze catalogus komen - wij leveren het brein.',
    },
    services: [
      {
        name: 'VLA-verfijning',
        tagline: 'Foundation-modellen, aangepast aan uw taak',
        desc: 'Open VLA-modellen (GR00T N1.7, π0, OpenVLA) verfijnd op klantgegevens. Een abstractielaag stelt ons in staat basismodellen te verwisselen zonder uw taakintelligentie opnieuw te trainen.',
      },
      {
        name: 'Vision en waarneming',
        tagline: 'Scèneherkenning in realtime',
        desc: 'Detectie van YOLO-klasse voor objectherkenning in realtime, dieptecamera\'s (RGB-D), LiDAR, multispectrale en thermische beeldvorming, plus een VLM voor scène- en taalbegrip.',
      },
      {
        name: 'Edge- en cloudarchitectuur',
        tagline: 'Besturing onder 10 ms, leren op cloudschaal',
        desc: 'Edge-inferentie aan boord voor besturing onder 10 ms. De cloud voor trainingsupdates, analyses en vlootbeheer. Een dataflywheel verbetert de prestaties voortdurend.',
      },
      {
        name: 'Klassieke besturing waar dat volstaat',
        tagline: 'AI alleen waar het zijn plaats verdient',
        desc: 'PID-regelaars voor eenvoudig, repetitief grijpen en snijden - lagere kosten, hogere betrouwbaarheid. AI reserveren wij voor complexe waarneming en beslissingen op basis van scènebegrip.',
      },
      {
        name: 'Vlootbeheer',
        tagline: 'Coördineer vele robots als één systeem',
        desc: 'Centraal toezicht op een gemengde robotvloot: taaktoewijzing, telemetrie, model-uitrol en productiviteitsrapportage vanuit één besturingslaag.',
      },
    ],
    processHeading: {
      eyebrow: 'Hoe wij samenwerken',
      title: 'Van procesgegevens naar een draaiend brein',
      desc: 'Wij leggen intelligentie op uw hardware of de onze in vier stappen.',
    },
    process: [
      { title: 'Gegevens en scoping', desc: 'Wij brengen de taak in kaart, verzamelen of simuleren procesgegevens en bepalen de eisen voor waarneming en besturing.' },
      { title: 'Modelselectie en verfijning', desc: 'Wij kiezen de juiste VLA-/vision-modellen (of klassieke besturing) en verfijnen ze op uw gegevens achter een stabiele abstractielaag.' },
      { title: 'Integratie en edge-implementatie', desc: 'Wij integreren het brein met de robot, brengen inferentie naar de edge voor besturing met lage latentie en valideren tegen acceptatiecriteria.' },
      { title: 'Vlootoperaties en dataflywheel', desc: 'Cloudanalyses, modelupdates en vlootbeheer blijven de prestaties verbeteren na de livegang.' },
    ],
  },
  robots: {
    stats: [
      { label: 'Chassistypen (W4 · T6 · WL4 · Q4)' },
      { label: 'Energie-efficiëntie op wielen t.o.v. pootaandrijving' },
      { label: 'Gedeeld AI-brein over alle uitvoeringen' },
      { label: 'Gestandaardiseerde taakmodules' },
    ],
    servicesHeading: {
      eyebrow: 'Het modulaire systeem',
      title: 'Eén platform, vele robots',
      desc: 'Een gedeeld AI-brein, een gestandaardiseerde interface, verwisselbare chassis en plug-and-play-taakmodules - op bestelling ingezet voor elke markt.',
    },
    services: [
      { name: 'AI-brein', tagline: 'Dezelfde intelligentie op elk chassis', desc: 'VLA- + YOLO-modellen verfijnd op klantgegevens. Edge-inferentie en cloudtraining. Dezelfde intelligentielaag past zich aan elk chassis en elke markt aan.' },
      { name: 'Plug-and-play-interface', tagline: 'Eén integratiepunt voor alle combinaties', desc: 'Een gestandaardiseerde mechanische en elektrische connector. Verwissel chassis of taakmodules zonder de intelligentielaag opnieuw te ontwerpen - één integratiepunt voor alle combinaties.' },
      { name: 'Chassisfamilie', tagline: 'W4 · T6 · WL4 · Q4', desc: 'W4 (wielen), T6 (rupsbanden), WL4 (wiel-poot), Q4 (poten). Wielplatforms zijn op vlakke ondergrond ongeveer 2,5 keer energiezuiniger dan platforms met poten - afgestemd op terrein en taak.' },
      { name: 'Taakmodules', tagline: 'Het juiste gereedschap voor de klus', desc: 'Zachte grijper, sproei-/fertigatiekop, sensormast (RGB-D / multispectraal / thermisch), logistieke drager, robotmanipulator op afstand - plug het juiste gereedschap voor de klus erin.' },
      { name: 'Landbouwrobots', tagline: 'Autonome veldplatforms', desc: 'Autonome veldplatforms voor het planten, verzorgen, precisiesproeien en selectief oogsten. Sensorfusie van RGB-D + multispectraal + thermisch voor monitoring van de gewasgezondheid.' },
      { name: 'Robots voor bouwplaatsen', tagline: 'Autonomie van BIM naar het veld', desc: 'Uitzetten van BIM naar het veld, boren, autonoom grondverzet, inspectie tegen een digital twin. Overal door de mens gecontroleerde autonomie.' },
      { name: 'Stationaire AI-machines', tagline: 'Cellen en werkstations met vaste arm', desc: 'Robots met vaste arm en intelligente werkstations voor inspectie, kwaliteitscontrole, repetitieve montage en materiaalbehandeling op productielijnen.' },
    ],
    processHeading: {
      eyebrow: 'Hoe wij leveren',
      title: 'Op bestelling geconfigureerd en gebouwd',
      desc: 'Elke robot wordt uit het gedeelde platform samengesteld en afgestemd op uw proces.',
    },
    process: [
      { title: 'Scope en configuratie', desc: 'Wij brengen de taak in kaart en kiezen het chassis, de taakmodules en de sensoren die bij het terrein en de klus passen.' },
      { title: 'Het AI-brein inpassen', desc: 'De gedeelde intelligentielaag wordt verfijnd op uw gegevens en via de gestandaardiseerde interface geïntegreerd.' },
      { title: 'Bouwen en valideren', desc: 'Montage en tests in onze eigen faciliteit, met een fabrieksacceptatietest vóór levering.' },
      { title: 'Implementeren en ondersteunen', desc: 'Inbedrijfstelling op locatie, operatortraining en doorlopende service - modules en chassis kunnen worden verwisseld naarmate de behoeften veranderen.' },
    ],
    aiBrain: {
      eyebrow: 'AI-brein',
      title: 'Elke uitvoering draait op het POLCERO AI-brein',
      desc: 'Het Robots-platform deelt de intelligentielaag van POLCERO AI Systems - VLA-modellen, vision van YOLO-klasse, SLAM-navigatie en vlootbeheer - verfijnd op uw procesgegevens.',
      ctaLabel: 'Meer weten over AI Systems',
    },
  },
  'farma-ai': {
    stats: [
      { label: 'Robot-as-a-Service, geen capex' },
      { label: 'Chemicaliëngebruik t.o.v. volveldsproeien' },
      { label: 'Plaatsingsnauwkeurigheid bij zaaien' },
      { label: 'Geautomatiseerde fasen van de teeltcyclus' },
    ],
    servicesHeading: {
      eyebrow: 'De teeltcyclus',
      title: 'Eén AI-boerenbrein, het hele seizoen',
      desc: 'Een vloot autonome veldrobots aangestuurd door het toezichthoudende "AI-boer"-brein - voor grote groentebedrijven, geleverd als Robot-as-a-Service.',
    },
    services: [
      { name: 'Planten', tagline: 'Nauwkeurig verplanten en direct zaaien', desc: 'Nauwkeurig rij-voor-rij verplanten of direct zaaien met RTK-/SLAM-navigatie. Plaatsingsnauwkeurigheid onder de centimeter op het POLCERO-W4-chassis.' },
      { name: 'Verzorging - wieden en uitdunnen', tagline: 'Geen herbicide voor gedetecteerd onkruid', desc: 'Onkruiddetectie met computer vision plus mechanisch of thermisch wieden. Geen herbicide voor geïdentificeerd onkruid - alleen gerichte pleksproei.' },
      { name: 'Pleksproeien / microdosering', tagline: 'Chemie alleen waar het nodig is', desc: 'Selectieve toepassing van meststof of gewasbeschermingsmiddelen alleen waar de AI een behoefte detecteert. Vermindert het chemicaliëngebruik tot 90% ten opzichte van volveldsproeien.' },
      { name: 'Monitoring', tagline: 'Een dagelijkse kaart van de gewasgezondheid', desc: 'Dagelijkse veldscans met RGB-D- + multispectrale + thermische camera\'s. Kaart van de gewasgezondheid, vroegtijdige waarschuwing voor ziekten en voorspelling van oogstrijpheid.' },
      { name: 'Selectief oogsten', tagline: 'De lastigste onopgeloste kloof in de landbouwautomatisering', desc: 'Selectief oogsten van kwetsbare groenten (te beginnen met kropsla) - de lastigste onopgeloste kloof in de landbouwautomatisering. Zachte grijper plus AI-rijpheidsdetectie.' },
    ],
    processHeading: {
      eyebrow: 'Hoe wij samenwerken',
      title: 'Robot-as-a-Service, het veld eerst',
      desc: 'Wij nemen de vloot, de operaties en het risico op ons - u krijgt het resultaat per hectare.',
    },
    process: [
      { title: 'Veldbeoordeling', desc: 'Wij inventariseren het bedrijf, de gewassen en het seizoen en spreken de beoogde bewerkingen en succesmaatstaven af.' },
      { title: 'Opzet van vloot en brein', desc: 'Wij configureren de veldrobots en stemmen het AI-boerenbrein af op het gewas, de bodem en de indeling.' },
      { title: 'Gecontroleerde uitvoering', desc: 'Robots voeren de teeltcyclus uit onder door de mens gecontroleerde autonomie; elke passage voedt de monitoringkaart.' },
      { title: 'Seizoensevaluatie en opschaling', desc: 'Wij evalueren opbrengst, besparingen op inputs en beschikbaarheid en schalen de vloot vervolgens op voor het volgende seizoen.' },
    ],
    aiBrain: {
      eyebrow: 'AI-brein',
      title: 'Aangedreven door het POLCERO AI-boerenbrein',
      desc: 'Farma AI draait op de intelligentielaag van POLCERO AI Systems - vision, waarneming en vlootbeheer - gespecialiseerd voor de landbouw en verfijnd op uw velden.',
      ctaLabel: 'Meer weten over AI Systems',
    },
  },
  'photonic-processors': {
    stats: [
      { label: 'Latentie van optische matrixvermenigvuldiging' },
      { label: 'Markt 2025-2034' },
      { label: 'CAGR' },
      { label: 'Gevolgde fotonische-computebedrijven (2026)' },
    ],
    servicesHeading: {
      eyebrow: 'R&D-richting',
      title: 'AI-berekeningen met licht',
      desc: 'Een onderzoeksrichting: het versnellen van AI-inferentie in onze robots met licht in plaats van uitsluitend elektronica - lager verbruik, hogere doorvoer.',
    },
    services: [
      { name: 'Optische matrixvermenigvuldiging', tagline: 'Eén optische passage tegenover duizenden klokcycli', desc: 'Inferentie van neurale netwerken wordt gedomineerd door matrix-vectorvermenigvuldiging (GEMM). Fotonische chips voeren die uit met licht dat door Mach-Zehnder-interferometernetwerken gaat - waarmee in één optische passage wordt berekend wat elektronica duizenden klokcycli kost.' },
      { name: 'Hybride fotonisch-elektronische architectuur', tagline: 'Optische wiskunde, elektronische activaties', desc: 'Fotonische chips blinken uit in lineaire bewerkingen (matrixwiskunde), maar niet in niet-lineaire (activatiefuncties). De gangbare architectuur combineert optische cores voor matrixwiskunde met elektronische eenheden voor activaties - een hybride ontwerp dat het beste van beide benut.' },
      { name: 'Van €1,8 mld naar €14,6 mld', tagline: 'Een snelgroeiende acceleratormarkt', desc: 'De wereldwijde markt voor fotonische AI-acceleratoren, 2025 tot 2034 (CAGR 26,3%). Vanaf 2026 volgen wij 52 fotonische-computebedrijven wereldwijd.' },
      { name: 'Fotonica als de toekomstige computelaag', tagline: 'Verwissel het substraat, behoud de intelligentie', desc: 'Naarmate fotonische acceleratoren volwassen worden (een venster van 2027-2031 voor producten van datacenterklasse), is de architectuur van het POLCERO AI-brein gebouwd om ze op te nemen - de abstractielaag stelt ons in staat het computesubstraat te verwisselen zonder de taakintelligentie opnieuw te trainen.' },
    ],
  },
};
