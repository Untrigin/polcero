import type { RichBranch, DeepPartial } from '../../branchRich';

export const sv: Record<string, DeepPartial<RichBranch>> = {
  'icb-robots': {
    stats: [
      { label: 'Aktiv sedan' },
      { label: 'Års erfarenhet' },
      { label: 'Industrisektorer' },
      { label: 'Robotics-as-a-Service' },
    ],
    productsHeading: {
      eyebrow: 'Produktspecifikationer',
      title: 'Verkliga data ur ICB-katalogen',
      desc: 'Publicerade specifikationer från produktlinjen POLCERO / ICB Robots.',
    },
    products: [
      {
        name: 'AI-styrd robot för precisionsmontering och hantering',
        desc: 'Konstruerad för komplexa uppgifter med hög noggrannhet. Styrd av vår programvara och vårt AI-baserade visionssystem arbetar den i olika produktionsmiljöer och korrigerar sin egen rörelse i realtid. Vi programmerar den efter din process, driftsätter och underhåller den.',
        specs: [
          { label: 'Nyttolast' },
          { label: 'Räckvidd' },
          { label: 'Repeterbarhet' },
          { label: 'Drifttemperatur' },
          { label: 'Garanti' },
          { label: 'Styrning' },
        ],
        points: [
          'AI-baserat visionssystem för rörelsekorrigering i realtid',
          'Arbetar i olika produktionsmiljöer utan omställning',
          'Anpassad programmering per process - vi konfigurerar, driftsätter och underhåller',
          'Kan driftsättas inom tillverkning, logistik och kvalitetskontroll',
        ],
      },
      {
        name: 'Intelligenta 6-axliga robotarmar',
        desc: 'Sex rörelsegrader för komplexa uppgifter i begränsat produktionsutrymme. Kompakta och enkla att integrera - precision och hastighet där golvytan är begränsad. Finns i en takmonterad variant.',
        specs: [
          { label: 'Frihetsgrader' },
          { label: 'Repeterbarhet' },
          { label: 'Nyttolast' },
          { label: 'Monteringsalternativ' },
        ],
        points: [
          'Hög repeterbarhet för precisionsuppgifter',
          'Hög tillåten lastkapacitet',
          'Takmonterad version tillgänglig - sparar golvyta',
          'Tillämpningar: montering, packning, svetsning, kvalitetskontroll',
        ],
      },
    ],
    servicesHeading: {
      eyebrow: 'Tjänstekategorier',
      title: 'Sex sätt att robotisera din anläggning',
      desc: 'Varje system byggs på kundens beställning - anpassat efter processen, anläggningen och integrationskraven.',
    },
    services: [
      {
        name: 'Kollaborativa robotar (cobotar)',
        tagline: 'Stötta människor, automatisera, förse, montera, transportera',
        desc: 'Våra cobotar arbetar sida vid sida med mänskliga operatörer - inga skyddsburar krävs i certifierade konfigurationer. De hanterar repetitiva, ergonomiskt krävande eller precisionsberoende uppgifter medan människor fokuserar på bedömning och kvalitetskontroll. Programmerade i Python, C++ och ROS, anpassade efter din process.',
        points: [
          'Stötta mänskliga medarbetare vid gemensamma arbetsstationer',
          'Automatisera repetitiva eller ergonomiskt krävande uppgifter',
          'Förse produktionslinjen med komponenter och material',
        ],
      },
      {
        name: 'Autonoma gaffeltruckar',
        tagline: 'Transportera, lyfta, skanna, lokalisera, undvika hinder',
        desc: 'Våra autonoma gaffeltruckar sköter den interna logistiken dygnet runt - hämtar pallar eller laster, transporterar genom anläggningen och placerar på målplatsen utan förare. SLAM-navigering: inga golvmarkeringar eller infrastrukturändringar krävs. WMS/ERP-integration som standard.',
        points: [
          'Transportera pallar och laster autonomt genom anläggningen',
          'Lyfta och placera laster på målplatser utan förare',
          'Skanna streckkoder och QR-koder för lastidentifiering',
        ],
      },
      {
        name: 'AMR-plattform',
        tagline: 'Åka in, lyfta, bära, navigera, undvika, leverera',
        desc: 'ICB AMR-plattformen är en konfigurerbar autonom mobil robot för transport inom anläggningen. Basplattformen navigerar autonomt via LiDAR SLAM; uppgiftsmoduler (transportörtopp, hylla, rulle, kundanpassad fixtur) byts utan att plattformen ändras. Nyttolast: 100-600 kg beroende på chassivariant.',
        points: [
          'Åka in i smala gångar och lyfta autonomt',
          'Lyfta och bära nyttolaster upp till 600 kg',
          'Navigera dynamiskt och planera om vägen runt hinder i realtid',
        ],
      },
      {
        name: 'Kontrollcenter',
        tagline: 'Övervaka, analysera, larma, agera, säkra, rapportera',
        desc: 'ICB Control Center är ett övervakande programvarulager som samlar data från hela robotflottan och anläggningen. Det övervakar driften i realtid, upptäcker avvikelser, utlöser larm, samordnar insatser och genererar rapporter om efterlevnad och produktivitet.',
        points: [
          'Övervaka flottans och anläggningens drift i realtid',
          'Analysera produktions- och logistikdata efter flaskhalsar',
          'Larma operatörer automatiskt vid undantag och avvikelser',
        ],
      },
      {
        name: 'Autonom produktion',
        tagline: 'Sortera, packa, etikettera, inspektera, flytta, synkronisera',
        desc: 'ICB:s autonoma produktionssystem hanterar uppgifter vid linjens slut och efter produktion utan manuellt ingripande. Vision och AI styr sekvensen; roboten anpassar sig till produktvariationer i realtid. Utformad för packnings-, etiketterings- och kvalitetskontrollinjer.',
        points: [
          'Sortera artiklar efter typ, storlek eller destination med vision-AI',
          'Packa produkter i lådor, brickor eller påsar',
          'Etikettera förpackningar exakt och granska etikettplacering',
        ],
      },
      {
        name: 'Produktionslinjer',
        tagline: 'Optimera, automatisera, styra, integrera, övervaka, förbättra',
        desc: 'Vi konstruerar och automatiserar kompletta produktionslinjer - och integrerar cobotar, AMR:er, transportörer och styrprogramvara i ett enda orkestrerat system. Varje linje byggs efter kundens process; vi testar den i vår egen anläggning före leverans.',
        points: [
          'Optimera produktionsflödet och minska cykeltiderna',
          'Automatisera tidigare manuella arbetsstationer',
          'Styra hela linjen via ett enhetligt SCADA/MES-gränssnitt',
        ],
      },
    ],
    casesHeading: {
      eyebrow: 'Fallstudier',
      title: 'Verkliga driftsättningar och projekt',
      desc: 'Faserna återspeglar den status som publicerats på den ursprungliga webbplatsen polcero.com.',
    },
    cases: [
      {
        sector: 'Byggbranschen',
        stage: 'Koncept',
        title: 'Materialtransportrobotar på byggarbetsplatser',
        desc: 'Autonoma robotar för transport av byggmaterial - tegel, håltegel, prefabricerade element - över aktiva byggarbetsplatser. Konceptfas, med byggkompetens i teamet.',
      },
      {
        sector: 'Byggbranschen',
        stage: 'FoU',
        title: 'Drönare och robotar för inspektion av byggarbetsplatser',
        desc: 'Drönare och mobila robotar för inspektion, mätning och övervakning av byggarbetsplatser. Baserat på analys av byggmarknaden - FoU-fas.',
      },
      {
        sector: 'Logistik',
        stage: 'Pilot',
        title: 'Autonom intern transport: AMR och gaffeltruckar i ett lager',
        desc: 'Autonom intern transport som kombinerar AMR-plattformar och autonoma gaffeltruckar i en lagermiljö. För närvarande i pilotdriftsättning.',
      },
    ],
    sectorsHeading: {
      eyebrow: 'Industrisektorer',
      title: 'Där ICB-robotar arbetar',
      desc: 'ICB-system driftsätts inom tillverkning, logistik och närliggande branscher - anpassade efter den specifika processen och anläggningen.',
    },
    sectors: [
      { name: 'Tillverkning', desc: 'Montering, maskinbetjäning, transport inom linjen, inspektion och palletering på produktionslinjer av alla storlekar.' },
      { name: 'Jordbruk', desc: 'Intern transport inom jordbrukets bearbetningsanläggningar, kyllager och packerier.' },
      { name: 'Byggbranschen', desc: 'Materialtransport på byggarbetsplatser, prefabmontering, inspektion och repetitiva bygguppgifter.' },
      { name: 'Logistik och lagerhållning', desc: 'Pallhantering, lastning och lossning av trailrar, goods-to-person-plockning och sortering i sista ledet.' },
      { name: 'Tjänster', desc: 'Besöksnäring, vårdlogistik, fastighetstjänster och rengörings-/desinfektionsuppgifter.' },
      { name: 'Förnybar energi', desc: 'Automatisering av komponenttillverkning och montering för tillverkare inom förnybar energi.' },
    ],
    processHeading: {
      eyebrow: 'Så levererar vi',
      title: 'Projektets livscykel - byggt på beställning',
      desc: 'Varje ICB-driftsättning följer en process i fyra steg, från dokumentation till driftsättning på plats.',
    },
    process: [
      { title: 'Projektdokumentation', desc: 'Vi träffar kunden för att kartlägga processen och dokumentera krav, begränsningar och framgångskriterier. Resultat: en genomförbarhetsrapport och ett konceptförslag.' },
      { title: 'Teamprojekt', desc: 'Vårt ingenjörsteam konstruerar robot- eller AMR-systemet - mekanik, elektronik och programvara - och finjusterar AI-hjärnan på kunddata eller processimuleringar.' },
      { title: 'Bygge och integration', desc: 'Tillverkning och montering i vår egen anläggning. Fullständigt fabriksgodkännandetest (FAT) och programvaruintegration. Dokumentation för EU-efterlevnad (CE, ISO, NIS2) förbereds.' },
      { title: 'Leverans och driftsättning', desc: 'Installation på plats, platsgodkännandetest (SAT), operatörsutbildning och överlämning. Löpande service enligt vårt RaaS-/servicenivåavtal.' },
    ],
    aiBrain: {
      eyebrow: 'AI-hjärna',
      title: 'Varje ICB-robot drivs av POLCERO AI-hjärnan',
      desc: 'Alla ICB-produkter drivs av intelligenslagret POLCERO AI Systems: VLA-modeller, YOLO-klassad detektering, SLAM-navigering och flotthantering. Samma hjärna finjusteras på dina processdata. Programmering: Python, C++ och ROS.',
      ctaLabel: 'Läs mer om AI Systems',
    },
    compliance: {
      eyebrow: 'Efterlevnad och säkerhet',
    },
  },
  'ai-systems': {
    stats: [
      { label: 'Latens för edge-styrning' },
      { label: 'Finjusterade grundmodeller' },
      { label: 'Multimodal perception' },
      { label: 'Hybridarkitektur' },
    ],
    servicesHeading: {
      eyebrow: 'Förmågor',
      title: 'Intelligenslagret',
      desc: 'Samma AI-stack driver varje POLCERO-gren. Robothårdvaran kan vara din egen eller från vår katalog - vi levererar hjärnan.',
    },
    services: [
      {
        name: 'VLA-finjustering',
        tagline: 'Grundmodeller, anpassade efter din uppgift',
        desc: 'Öppna VLA-modeller (GR00T N1.7, π0, OpenVLA) finjusterade på kunddata. Ett abstraktionslager gör att vi kan byta ut basmodeller utan att träna om din uppgiftsintelligens.',
      },
      {
        name: 'Vision och perception',
        tagline: 'Scenförståelse i realtid',
        desc: 'YOLO-klassad detektering för objektigenkänning i realtid, djupkameror (RGB-D), LiDAR, multispektral och termisk avbildning, plus en VLM för scen- och språkförståelse.',
      },
      {
        name: 'Edge- och molnarkitektur',
        tagline: 'Styrning under 10 ms, lärande i molnskala',
        desc: 'Inbyggd edge-inferens för styrning under 10 ms. Moln för träningsuppdateringar, analys och flotthantering. Ett datasvänghjul förbättrar prestandan kontinuerligt.',
      },
      {
        name: 'Klassisk styrning där det räcker',
        tagline: 'AI endast där den gör nytta',
        desc: 'PID-regulatorer för enkel, repetitiv gripning och skärning - lägre kostnad, högre tillförlitlighet. Vi reserverar AI för komplex perception och beslut som kräver scenförståelse.',
      },
      {
        name: 'Flotthantering',
        tagline: 'Samordna många robotar som ett system',
        desc: 'Central övervakning av en blandad robotflotta: uppgiftstilldelning, telemetri, modellutrullningar och produktivitetsrapportering från ett enda styrlager.',
      },
    ],
    processHeading: {
      eyebrow: 'Så samarbetar vi',
      title: 'Från processdata till en fungerande hjärna',
      desc: 'Vi lägger intelligens ovanpå din hårdvara eller vår egen i fyra steg.',
    },
    process: [
      { title: 'Data och avgränsning', desc: 'Vi kartlägger uppgiften, samlar in eller simulerar processdata och definierar kraven på perception och styrning.' },
      { title: 'Modellval och finjustering', desc: 'Vi väljer rätt VLA-/visionsmodeller (eller klassisk styrning) och finjusterar dem på dina data bakom ett stabilt abstraktionslager.' },
      { title: 'Integration och edge-driftsättning', desc: 'Vi integrerar hjärnan med roboten, driftsätter inferens till edge för styrning med låg latens och validerar mot godkännandekriterier.' },
      { title: 'Flottdrift och datasvänghjul', desc: 'Molnanalys, modelluppdateringar och flotthantering fortsätter att förbättra prestandan efter driftstart.' },
    ],
  },
  robots: {
    stats: [
      { label: 'Chassityper (W4 · T6 · WL4 · Q4)' },
      { label: 'Energieffektivitet för hjul kontra ben' },
      { label: 'Delad AI-hjärna över alla byggen' },
      { label: 'Standardiserade uppgiftsmoduler' },
    ],
    servicesHeading: {
      eyebrow: 'Det modulära systemet',
      title: 'En plattform, många robotar',
      desc: 'En delad AI-hjärna, ett standardiserat gränssnitt, utbytbara chassin och plug-and-play-uppgiftsmoduler - driftsatta för valfri marknad, på beställning.',
    },
    services: [
      { name: 'AI-hjärna', tagline: 'Samma intelligens på varje chassi', desc: 'VLA- + YOLO-modeller finjusterade på kunddata. Edge-inferens och molnträning. Samma intelligenslager anpassar sig till varje chassi och marknad.' },
      { name: 'Plug-and-play-gränssnitt', tagline: 'En integrationspunkt för alla kombinationer', desc: 'En standardiserad mekanisk och elektrisk kontakt. Byt chassi eller uppgiftsmoduler utan att omkonstruera intelligenslagret - en integrationspunkt för alla kombinationer.' },
      { name: 'Chassifamilj', tagline: 'W4 · T6 · WL4 · Q4', desc: 'W4 (hjul), T6 (band), WL4 (hjul-ben), Q4 (ben). Hjulplattformar är omkring 2,5 gånger mer energieffektiva än benförsedda på plan mark - anpassade efter terräng och uppgift.' },
      { name: 'Uppgiftsmoduler', tagline: 'Rätt verktyg för jobbet', desc: 'Mjukt gripdon, spruthuvud för sprutning/fertigation, sensormast (RGB-D/multispektral/termisk), logistikbärare, fjärrmanipulator - koppla in rätt verktyg för jobbet.' },
      { name: 'Jordbruksrobotar', tagline: 'Autonoma fältplattformar', desc: 'Autonoma fältplattformar för sättning, skötsel, precisionssprutning och selektiv skörd. Sensorfusion av RGB-D + multispektral + termisk för övervakning av grödornas hälsa.' },
      { name: 'Robotar för byggarbetsplatser', tagline: 'Autonomi från BIM till fält', desc: 'Utsättning från BIM till fält, borrning, autonoma markarbeten, inspektion mot en digital tvilling. Människoövervakad autonomi genomgående.' },
      { name: 'Stationära AI-maskiner', tagline: 'Fasta armceller och arbetsstationer', desc: 'Robotar med fast arm och intelligenta arbetsstationer för inspektion, kvalitetskontroll, repetitiv montering och materialhantering på produktionslinjer.' },
    ],
    processHeading: {
      eyebrow: 'Så levererar vi',
      title: 'Konfigurerat och byggt på beställning',
      desc: 'Varje robot monteras från den delade plattformen och anpassas efter din process.',
    },
    process: [
      { title: 'Avgränsa och konfigurera', desc: 'Vi kartlägger uppgiften och väljer det chassi, de uppgiftsmoduler och de sensorer som passar terrängen och jobbet.' },
      { title: 'Montera AI-hjärnan', desc: 'Det delade intelligenslagret finjusteras på dina data och integreras via det standardiserade gränssnittet.' },
      { title: 'Bygg och validera', desc: 'Montering och testning i vår egen anläggning, med ett fabriksgodkännandetest före leverans.' },
      { title: 'Driftsätt och stötta', desc: 'Driftsättning på plats, operatörsutbildning och löpande service - moduler och chassin kan bytas ut när behoven förändras.' },
    ],
    aiBrain: {
      eyebrow: 'AI-hjärna',
      title: 'Varje bygge drivs av POLCERO AI-hjärnan',
      desc: 'Robots-plattformen delar intelligenslagret POLCERO AI Systems - VLA-modeller, YOLO-klassad vision, SLAM-navigering och flotthantering - finjusterat på dina processdata.',
      ctaLabel: 'Läs mer om AI Systems',
    },
  },
  'farma-ai': {
    stats: [
      { label: 'Robot-as-a-Service, ingen capex' },
      { label: 'Kemikalieanvändning kontra heltäckande sprutning' },
      { label: 'Placeringsnoggrannhet vid sådd' },
      { label: 'Automatiserade skeden i odlingscykeln' },
    ],
    servicesHeading: {
      eyebrow: 'Odlingscykeln',
      title: 'En AI-bonde-hjärna, hela säsongen',
      desc: 'En flotta autonoma fältrobotar som styrs av den övervakande "AI-bonde"-hjärnan - för stora grönsaksodlingar, levererad som Robot-as-a-Service.',
    },
    services: [
      { name: 'Sättning', tagline: 'Exakt omplantering och direktsådd', desc: 'Exakt rad-för-rad-omplantering eller direktsådd med RTK/SLAM-navigering. Placeringsnoggrannhet under en centimeter på chassit POLCERO-W4.' },
      { name: 'Skötsel - ogräsrensning och gallring', tagline: 'Inget herbicid för upptäckt ogräs', desc: 'Ogräsdetektering med datorseende plus mekanisk eller termisk ogräsrensning. Inget herbicid för identifierat ogräs - endast riktad punktsprutning.' },
      { name: 'Punktsprutning / mikrodosering', tagline: 'Kemikalier endast där de behövs', desc: 'Selektiv tillförsel av gödsel eller växtskyddsmedel endast där AI:n upptäcker behov. Minskar kemikalieanvändningen med upp till 90 % jämfört med heltäckande sprutning.' },
      { name: 'Övervakning', tagline: 'En daglig karta över grödornas hälsa', desc: 'Daglig fältskanning med RGB-D- + multispektral- + termiska kameror. Karta över grödornas hälsa, tidig varning för sjukdomar och prognos för skördemognad.' },
      { name: 'Selektiv skörd', tagline: 'Den svåraste olösta luckan inom jordbruksautomatisering', desc: 'Selektiv skörd av ömtåliga grönsaker (med start i salladshuvuden) - den svåraste olösta luckan inom jordbruksautomatisering. Mjukt gripdon plus AI-detektering av mognad.' },
    ],
    processHeading: {
      eyebrow: 'Så samarbetar vi',
      title: 'Robot-as-a-Service, med fältet först',
      desc: 'Vi tar på oss flottan, driften och risken - du får resultatet per hektar.',
    },
    process: [
      { title: 'Fältbedömning', desc: 'Vi kartlägger gården, grödorna och säsongen och kommer överens om målsatta operationer och framgångsmått.' },
      { title: 'Uppsättning av flotta och hjärna', desc: 'Vi konfigurerar fältrobotarna och anpassar AI-bonde-hjärnan efter grödan, jorden och layouten.' },
      { title: 'Övervakad drift', desc: 'Robotarna kör odlingscykeln under människoövervakad autonomi; varje överfart matar övervakningskartan.' },
      { title: 'Säsongsgenomgång och skalning', desc: 'Vi granskar avkastning, insatsbesparingar och drifttid och skalar sedan upp flottan inför nästa säsong.' },
    ],
    aiBrain: {
      eyebrow: 'AI-hjärna',
      title: 'Drivs av POLCERO AI-bonde-hjärnan',
      desc: 'Farma AI körs på intelligenslagret POLCERO AI Systems - vision, perception och flotthantering - specialiserat för jordbruk och finjusterat på dina fält.',
      ctaLabel: 'Läs mer om AI Systems',
    },
  },
  'photonic-processors': {
    stats: [
      { label: 'Latens för optisk matrismultiplikation' },
      { label: 'Marknad 2025-2034' },
      { label: 'CAGR' },
      { label: 'Bevakade företag inom fotonisk databehandling (2026)' },
    ],
    servicesHeading: {
      eyebrow: 'FoU-inriktning',
      title: 'AI-beräkning med ljus',
      desc: 'En forskningsinriktning: att accelerera AI-inferens i våra robotar med hjälp av ljus i stället för enbart elektronik - lägre effekt, högre genomströmning.',
    },
    services: [
      { name: 'Optisk matrismultiplikation', tagline: 'En optisk passage kontra tusentals klockcykler', desc: 'Inferens i neurala nätverk domineras av matris-vektormultiplikation (GEMM). Fotoniska chip utför den med ljus som passerar genom nät av Mach-Zehnder-interferometrar - och gör i en enda optisk passage vad elektronik behöver tusentals klockcykler för att beräkna.' },
      { name: 'Hybrid fotonisk-elektronisk arkitektur', tagline: 'Optisk matematik, elektroniska aktiveringar', desc: 'Fotoniska chip utmärker sig på linjära operationer (matrismatematik) men inte på olinjära (aktiveringsfunktioner). Konsensusarkitekturen parar optiska kärnor för matrismatematik med elektroniska enheter för aktiveringar - en hybriddesign som tar det bästa av båda.' },
      { name: 'Från 1,8 miljarder EUR till 14,6 miljarder EUR', tagline: 'En snabbväxande acceleratormarknad', desc: 'Den globala marknaden för fotoniska AI-acceleratorer, 2025 till 2034 (CAGR 26,3 %). Per 2026 bevakar vi 52 företag inom fotonisk databehandling världen över.' },
      { name: 'Fotonik som framtidens beräkningslager', tagline: 'Byt substratet, behåll intelligensen', desc: 'När fotoniska acceleratorer når mognad (ett fönster 2027-2031 för produkter i datacenterklass) är POLCERO:s AI-hjärnarkitektur byggd för att ta upp dem - abstraktionslagret gör att vi kan byta beräkningssubstrat utan att träna om uppgiftsintelligensen.' },
    ],
  },
};
