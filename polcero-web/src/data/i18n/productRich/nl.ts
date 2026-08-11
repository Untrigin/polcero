import type { ProductRichOverride } from '../../productRich';

// ── Gedeelde blokken (Nederlands) — hergebruikt voor humanoid & mobile-humanoid ──
const batteryRobot = {
  title: 'Accu en voeding',
  lead: 'Elke robot draait op drie hot-swap accupakketten in de kernmodule. Een pakket is een op zichzelf staande 48 V-eenheid, dus het vermogen schaalt mee met het aantal pakketten en een leeg pakket wordt zonder gereedschap vervangen terwijl de robot op de andere gewoon doorwerkt.',
  rows: [
    { label: 'Pakketspanning', value: '48 V hot-swap' },
    { label: 'Pakketenergie', value: '≈ 864 Wh per stuk' },
    { label: 'Pakketten in de kernmodule', value: '3 (≈ 2.6 kWh totaal)' },
    { label: 'Looptijd op accu', value: '≈ 5 h bij normale inzet' },
    { label: 'Op directe voeding', value: '24/7 (met kabel of net)' },
    { label: 'Wisseltijd', value: '< 60 s per pakket, zonder gereedschap' },
  ],
};

const swapRobot = {
  title: 'Zelf accu wisselen — geen stilstand',
  lead: 'De robot schakelt nooit volledig uit om op te laden. Hij rouleert zijn drie pakketten één voor één en draait ondertussen op de overige twee terwijl een leeg pakket oplaadt — zo stopt een dienst niet voor de accu.',
  robot: {
    title: 'De robot doet het zelf',
    steps: [
      'Zodra een pakket bijna leeg is, rijdt de robot naar het laaddock en houdt zijn status vast op de twee resterende pakketten.',
      'Een arm reikt naar de achterkant van de kernmodule, ontgrendelt de vergrendeling en tilt het lege pakket eruit.',
      'Hij plaatst het pakket in een vrije bak van het 4-baks dock en neemt er een volledig opgeladen exemplaar voor terug.',
      'Het verse pakket klikt vast; de robot herhaalt dit voor elk pakket op zijn beurt en gaat weer aan het werk — nooit uit, nooit stil.',
    ],
  },
  human: {
    title: 'Een mens doet het in seconden',
    steps: [
      'Geen uitschakelen en geen gereedschap: de pakketten zijn hot-swappbaar terwijl de robot standby staat.',
      'Druk op de vergrendeling aan de achterkant van de kernmodule en trek het pakket recht naar buiten.',
      'Schuif een opgeladen pakket erin tot het vastklikt — de robot gaat verder waar hij gebleven was.',
    ],
  },
};

const statusRobot = {
  title: 'Accustatus en het laadstation',
  lead: 'Elk pakket rapporteert zijn eigen toestand, zodat de robot en zijn operators altijd weten wanneer te wisselen. Een 4-baks laadstation houdt een rotatie van pakketten klaar en de robot dockt om tijdens het werk zijn eigen pakketten te wisselen.',
  points: [
    { title: 'Live status per pakket', text: 'Laadtoestand, gezondheid en temperatuur van elk van de drie pakketten, in realtime.' },
    { title: 'Voorspellende wissel', text: 'Het systeem plant de volgende wissel voordat een pakket leeg raakt, zodat het werk nooit midden in een taak wordt onderbroken.' },
    { title: '4-baks laaddock', text: 'Vier laadingangen houden reservepakketten opgeladen en klaar voor de volgende rotatie.' },
    { title: 'Autonoom dokken', text: 'De robot rouleert tijdens een dienst zijn eigen pakketten aan het dock — zonder operator en zonder stilstand.' },
  ],
};

const visionRobot = {
  title: 'Hoe de robot ziet',
  lead: 'De robot bouwt uit meerdere beelden tegelijk één beeld van de wereld op. Een binoculaire kop met groot gezichtsveld levert een linker- en een rechterbeeld; door ze te vergelijken ontstaat diepte; daarbovenop voegt de AI-laag een perceptiebeeld toe dat objecten, oppervlakken en mensen benoemt.',
  views: [
    { label: 'Links', text: 'Het linkeroog van de binoculaire kop — een kleurenbeeld van de scène met groot gezichtsveld.' },
    { label: 'Rechts', text: 'Het rechteroog — het tweede kleurenbeeld dat de robot met het linker vergelijkt.' },
    { label: 'Diepte', text: 'Stereodispariteit tussen links en rechts levert de afstand tot elk punt in het beeld.' },
    { label: 'Perceptie', text: 'De AI-laag labelt objecten, oppervlakken, obstakels en mensen, en plant de volgende beweging op het apparaat zelf.' },
  ],
  extra: [
    { title: "Polscamera's", text: "HD-camera's aan elke pols geven een close-upbeeld voor nauwkeurig grijpen en assembleren." },
    { title: 'LiDAR + ultrasoon', text: 'LiDAR op het chassis en ultrasone sensoren brengen de ruimte in kaart en vangen obstakels op buiten het bereik van de camera’s.' },
    { title: 'Kracht en IMU', text: 'Gewrichten met krachtterugkoppeling en een IMU voelen contact en balans voor veilige, stabiele beweging.' },
    { title: 'Stem en taal', text: 'Steminteractie en een taalmodel laten een mens de robot in gewone spraak aansturen.' },
  ],
};

const powerRobot = {
  title: 'Twee manieren om te voeden: accu of het net',
  lead: 'De robot is autonoom op accu, maar waar een locatie voeding kan leveren draait hij rechtstreeks van het net via een kabel — geen pakketten te rouleren, geen stilstand, lagere bedrijfskosten.',
  modes: [
    { name: 'Hot-swap accu’s', text: 'Volledig mobiel en autonoom. Drie pakketten rouleren via het laaddock, zodat de robot overal rondgaat zonder kabel.' },
    { name: 'Directe voeding (kabel)', text: 'Voor een vast station of 24/7-inzet trekt de robot voeding over een kabel en draait continu — de accu’s worden een back-up.' },
    { name: 'Netinfrastructuur', text: 'In hallen, fabrieken en kassen installeren we vaste voedingsrails; buiten, op velden en terreinen, bovenleidingen zoals tramtractie. De robot trekt uit de lijn en laadt zijn pakketten bij terwijl hij werkt.' },
  ],
};

export const nl: Record<string, ProductRichOverride> = {
  humanoid: {
    battery: batteryRobot,
    swap: swapRobot,
    status: statusRobot,
    vision: visionRobot,
    power: powerRobot,
    application: {
      title: 'Drie humanoïden, één magazijn',
      body: 'Zo ziet een dienst eruit. In één ruimte pakt de ene humanoïde een pakket in aan de werkbank, tilt een tweede een geladen metalen krat van de vloer en stapelt een derde dozen op een rek. Dezelfde robot, drie taken — elk betrad een ruimte gebouwd voor mensen en pakte werk op dat voor mensenhanden is gemaakt, zonder een lijn die om hen heen herbouwd moest worden.',
    },
  },
  'mobile-humanoid': {
    battery: batteryRobot,
    swap: swapRobot,
    status: statusRobot,
    vision: visionRobot,
    power: powerRobot,
    versions: {
      title: 'Twee platformversies',
      lead: 'Dezelfde humanoïde torso staat op de mobiele basis die u nodig hebt — een lichte, inklapbare basis voor picken op vloerniveau, of een zware basis om echt gewicht te tillen.',
      items: [
        {
          name: 'V1 — inklapbare basis',
          blurb: 'De mast klapt op zijn middelpunt, zodat de robot buigt om dingen van de vloer te rapen met weinig vermogensverlies. Wielen aan de basis draaien de hele robot ter plaatse, wat hem wendbaar maakt in krappe gangpaden en op lage pickhoogten.',
          specs: [
            { label: 'Geschikt voor', value: 'Picken op vloerniveau, krappe gangpaden' },
            { label: 'Basis', value: 'Inklapbare mast, draaien ter plaatse' },
            { label: 'Reikwijdte', value: 'Vloer tot werkhoogte' },
          ],
        },
        {
          name: 'V2 — zware basis',
          blurb: 'Een sterker mobiel platform gebouwd om echt gewicht te tillen. Het behoudt het humanoïde bovenlichaam met dubbele armen, maar staat op een stevige basis met hoog laadvermogen voor het hanteren en assembleren van zwaardere industriële onderdelen.',
          specs: [
            { label: 'Geschikt voor', value: 'Zwaar hanteren en assembleren' },
            { label: 'Basis', value: 'Stevig platform met hoog laadvermogen' },
            { label: 'Nominaal laadvermogen', value: '≈ 7 kg per arm' },
          ],
        },
      ],
    },
  },
  'specialized-robots': {
    battery: batteryRobot,
    swap: swapRobot,
    status: statusRobot,
    power: powerRobot,
    vision: {
      ...visionRobot,
      extra: [
        { title: 'Perceptiemast', text: 'Op een gespecialiseerd chassis draagt de kernmodule een extra mast met gereedschap en camera’s voor de taak die voorligt.' },
        { title: 'LiDAR + ultrasoon', text: 'LiDAR op het chassis en ultrasone sensoren brengen ruw terrein in kaart en vangen obstakels op buiten het bereik van de camera’s.' },
        { title: 'Multispectraal / thermisch', text: 'Optionele multispectrale en thermische beeldvorming voor gewasgezondheid, inspectie en nachtwerk.' },
        { title: 'Rekenkracht op het apparaat', text: 'Detectie en planning draaien op het apparaat zelf; data en naleving blijven in de EU.' },
      ],
    },
    robots: {
      title: 'De gespecialiseerde lijn, robot voor robot',
      lead: 'Elk hiervan is dezelfde kernmodule — besturing, AI en hot-swap accu’s — op een ander chassis. Behoud het brein en de taakmodules; verander het platform naar de ondergrond. Voeg armen, een grijper, een oogstkop of een sensormast toe of verwijder ze via de snelkoppeling.',
      items: [
        {
          name: 'Robot met poten',
          role: 'Trappen, obstakels, ongelijke grond',
          body: 'Een chassis met vier poten dat trappen, stoepranden en gebroken grond neemt die geen wiel aankan. Hij loopt inspectieroutes door fabrieken, onderstations en terreinen die voor mensen zijn ingericht, niet voor machines.',
          modify: 'Voeg een of twee armen met een grijper toe voor manipulatie, of een sensormast voor inspectie. Wissel naar een basis met wielen of rupsen wanneer de grond vlak of zacht wordt.',
        },
        {
          name: 'Robot met rupsen',
          role: 'Onverhard, zwaar terrein, bouwplaatsen',
          body: 'Een rupschassis voor modder, puin en steile, onverharde grond. Hij draagt last over een bouwplaats of open veld waar wielen wegzakken en poten te traag zijn.',
          modify: 'Monteer een logistieke drager voor zwaar transport, een arm voor hanteren, of een landmeetmast voor BIM-inspectie. Hetzelfde lichaam gaat over op poten of wielen als de klus verandert.',
        },
        {
          name: 'Robot met wielen',
          role: 'Vloeren, magazijnen, vlakke grond',
          body: 'Een snel, stil wielchassis voor industriële vloeren en magazijnen — ongeveer 2.5× energiezuiniger dan poten op vlakke grond. Ideaal voor patrouille, monitoring en intern transport.',
          modify: 'Voeg armen en een grijper toe voor pick-and-place, een sensormast voor monitoring, of een drager voor transport. Verplaats de kernmodule naar een rupsbasis om het plaveisel te verlaten.',
        },
        {
          name: 'Robot met wiel-poten',
          role: 'Vlakke grond, obstakels en rails',
          body: 'Een hybride wiel-pootchassis: het rolt snel over het vlakke en, als het een trede, een stoeprand of een rail tegenkomt, tillen de poten de wielen eroverheen. Eén platform voor gemengde omgevingen waar anders twee robots voor nodig zouden zijn.',
          modify: 'Armen, grijper, oogstkop of sensormast monteren allemaal aan de snelkoppeling. Laat de poten weg voor een pure wielbasis, of voeg ze terug wanneer de route ruw wordt.',
        },
        {
          name: 'Arm op een platform',
          role: 'Productielijnen, mobiele machines, oogstkoppen',
          body: 'De kernmodule vast op één punt — op een productielijn, of gemonteerd op een bewegende machine of oogstkop. Op een sla-oogstkop bijvoorbeeld snijden de armen het gewas en leggen het meteen op de band terwijl de machine oprukt.',
          modify: 'Kies een of twee armen met een grijper, snijder of oogstkop. Monteer hem stationair op een lijn, of op elke gastmachine die hem door het veld draagt.',
        },
        {
          name: 'Robot op rails',
          role: 'Kassen, rijen, vaste routes',
          body: 'Een railgeleide versie voor kassen en glastuinbouw met vaste rijen. Hij rijdt over de verwarmingsbuisrails tussen de gewassen voor nauwkeurig, herhaalbaar spuiten, monitoren en selectief oogsten.',
          modify: 'Voeg een spuit- of fertigatiekop, een sensormast of een zachte grijper toe. Dezelfde kernmodule tilt van de rails op een basis met wielen of wiel-poten voor open terrein.',
        },
      ],
    },
  },
  'transport-drone': {
    battery: {
      title: 'Accu en voeding',
      lead: `De transportdrone vliegt op zijn eigen vliegpakket met hoog uitgangsvermogen en vervoert daarnaast opgeladen hot-swap pakketten voor de robots die hij aflevert — zo komen ze aan met volle accu's en besteden ze hun energie aan het werk, niet aan de reis.`,
      rows: [
        { label: 'Accu', value: 'Hot-swap vliegpakket' },
        { label: 'Pakketenergie', value: '≈ 30 kWh' },
        { label: 'Looptijd bij maximaal laadvermogen', value: '≈ 20 min' },
        { label: 'Wisseltijd', value: 'Hot-swap tussen vluchten' },
        { label: 'Vervoert ook', value: 'Opgeladen 48 V-robotpakketten' },
      ],
    },
    drone: {
      title: 'De drone draagt de robots',
      body: 'Ons doel is dat de drone robots en humanoïden over de langere afstanden draagt, zodat de robots hun energie voor de taak behouden in plaats van die aan de reis te besteden. De drone draagt ook verwisselbare modules en chassis, zodat een robot aankomt en de taakmodule en het platform kan kiezen die zijn omgeving vereist.',
      points: [
        'Robots reizen naar de locatie met volle accu’s en landen klaar om te werken.',
        'Verwisselbare chassis en taakmodules reizen mee met de drone.',
        'Levering waar de weg ophoudt — bergen, terreinen zonder verharde wegen, gebieden afgesneden na een overstroming.',
        'De ontbrekende schakel van het uurverhuurmodel: één robot bedient meerdere klanten op dezelfde dag.',
      ],
    },
  },
  'polcero-os': {
    vision: visionRobot,
  },
};
