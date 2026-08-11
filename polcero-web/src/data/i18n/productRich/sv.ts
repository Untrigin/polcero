import type { ProductRichOverride } from '../../productRich';

// ── Gemensamma block (identiska för humanoid och mobile-humanoid) ──────────────
const batteryRobot = {
  title: 'Batteri och energi',
  lead: 'Varje robot drivs av tre hot-swap-batteripaket som sitter i kärnmodulen. Ett paket är en fristående 48 V-enhet, så effekten skalar med antalet paket och ett tömt paket byts utan verktyg medan roboten fortsätter arbeta på de övriga.',
  rows: [
    { label: 'Paketspänning', value: '48 V hot-swap' },
    { label: 'Paketenergi', value: '≈ 864 Wh per paket' },
    { label: 'Paket i kärnmodulen', value: '3 (≈ 2.6 kWh totalt)' },
    { label: 'Drifttid på batteri', value: '≈ 5 h vid normal drift' },
    { label: 'Vid direktförsörjning', value: '24/7 (kabelansluten eller nät)' },
    { label: 'Bytestid', value: '< 60 s per paket, verktygsfritt' },
  ],
};

const swapRobot = {
  title: 'Självbytande batterier — ingen driftstopp',
  lead: 'Roboten stängs aldrig av helt för att laddas. Den roterar sina tre paket ett i taget och kör på de återstående två medan ett tömt paket laddas — så ett arbetspass stannar aldrig för batteriet.',
  robot: {
    title: 'Roboten gör det själv',
    steps: [
      'När roboten känner av ett paket som håller på att ta slut kör den till laddstationen och håller sitt läge på de två återstående paketen.',
      'En arm når baksidan av kärnmodulen, lossar spärren och lyfter ut det tömda paketet.',
      'Den placerar paketet i en ledig fack i den 4-fackiga stationen och tar ett fulladdat i dess ställe.',
      'Det nya paketet klickar på plats; roboten upprepar för varje paket i tur och ordning och återgår till arbetet — aldrig avstängd, aldrig i vila.',
    ],
  },
  human: {
    title: 'En person klarar det på sekunder',
    steps: [
      'Ingen avstängning och inga verktyg: paketen är hot-swap-bara medan roboten står redo.',
      'Tryck på spärren på baksidan av kärnmodulen och dra ut paketet rakt ut.',
      'Skjut in ett laddat paket tills det klickar på plats — roboten fortsätter där den slutade.',
    ],
  },
};

const statusRobot = {
  title: 'Batteristatus och laddstationen',
  lead: 'Varje paket rapporterar sitt eget tillstånd, så roboten och dess operatörer vet alltid när det är dags att byta. En 4-fackig laddstation håller en rotation av paket redo, och roboten dockar för att byta sina egna paket under arbetet.',
  points: [
    { title: 'Livetillstånd per paket', text: 'Laddningsnivå, hälsa och temperatur för vart och ett av de tre paketen, i realtid.' },
    { title: 'Prediktivt byte', text: 'Systemet schemalägger nästa byte innan ett paket tar slut, så arbetet aldrig avbryts mitt i en uppgift.' },
    { title: '4-fackig laddstation', text: 'Fyra laddingångar håller reservpaket toppladdade och redo för nästa rotation.' },
    { title: 'Autonom dockning', text: 'Roboten roterar sina egna paket vid stationen under ett arbetspass — ingen operatör och ingen driftstopp.' },
  ],
};

const visionRobot = {
  title: 'Hur roboten ser',
  lead: 'Roboten bygger en bild av världen från flera vyer samtidigt. Ett binokulärt vidvinkelhuvud ger en vänster- och en högerbild; jämförelsen ger djup; ovanpå det lägger AI-lagret till en perceptionsvy som namnger objekt, ytor och människor.',
  views: [
    { label: 'Vänster', text: 'Det vänstra ögat på det binokulära huvudet — en vidvinkelfärgvy av scenen.' },
    { label: 'Höger', text: 'Det högra ögat — den andra färgvyn som roboten jämför mot vänster.' },
    { label: 'Djup', text: 'Stereodisparitet mellan vänster och höger ger avståndet till varje punkt i bilden.' },
    { label: 'Perception', text: 'AI-lagret märker objekt, ytor, hinder och människor och planerar nästa steg direkt på enheten.' },
  ],
  extra: [
    { title: 'Handledskameror', text: 'HD-kameror vid varje handled ger en närbild för precist grepp och montering.' },
    { title: 'LiDAR + ultraljud', text: 'LiDAR på chassit och ultraljudssensorer kartlägger utrymmet och fångar hinder bortom kamerorna.' },
    { title: 'Kraft och IMU', text: 'Kraftåterkopplade leder och en IMU känner av kontakt och balans för säker, stabil rörelse.' },
    { title: 'Röst och språk', text: 'Röstinteraktion och en språkmodell låter en person styra roboten med vanligt tal.' },
  ],
};

const powerRobot = {
  title: 'Två sätt att driva den: batterier eller nätet',
  lead: 'Roboten är autonom på batterier, men där en anläggning kan leverera ström kör den direkt från nätet via en kabel — inga paket att rotera, ingen driftstopp, lägre driftkostnad.',
  modes: [
    { name: 'Hot-swap-batterier', text: 'Fullt mobil och autonom. Tre paket roterar genom laddstationen så att roboten kan röra sig var som helst utan kabel.' },
    { name: 'Direktförsörjning (kabel)', text: 'För en fast station eller 24/7-drift drar roboten ström via en kabel och kör kontinuerligt — batterierna blir en reserv.' },
    { name: 'Nätinfrastruktur', text: 'I hallar, fabriker och växthus installerar vi fasta strömskenor; utomhus, på fält och gårdar, luftledningar som en spårvagns kontaktledning. Roboten drar ström från ledningen och toppladdar sina paket medan den arbetar.' },
  ],
};

const R = { battery: batteryRobot, swap: swapRobot, status: statusRobot, vision: visionRobot, power: powerRobot };

export const sv: Record<string, ProductRichOverride> = {
  humanoid: {
    ...R,
    application: {
      title: 'Tre humanoider, ett lager',
      body: 'Så här ser ett arbetspass ut. I ett enda rum packar en humanoid ett paket vid bänken, en andra lyfter en lastad metalltråg från golvet, och en tredje staplar lådor på en ställning. Samma robot, tre jobb — var och en gick in i ett utrymme byggt för människor och tog upp arbete gjort för mänskliga händer, utan någon linje att bygga om kring dem.',
    },
  },
  'mobile-humanoid': {
    ...R,
    versions: {
      title: 'Två plattformsversioner',
      lead: 'Samma humanoida överkropp sitter på den mobila bas du behöver — en lätt, hopfällbar bas för plockning på golvnivå, eller en tung bas för att lyfta riktig vikt.',
      items: [
        {
          name: 'V1 — hopfällbar bas',
          blurb: 'Masten fälls vid sin mittpunkt, så roboten böjer sig för att plocka saker från golvet med liten effektförlust. Hjul vid basen roterar hela roboten på stället, vilket gör den smidig i trånga gångar och vid låga plockhöjder.',
          specs: [
            { label: 'Bäst för', value: 'Plockning på golvnivå, trånga gångar' },
            { label: 'Bas', value: 'Hopfällbar mast, sväng på stället' },
            { label: 'Räckvidd', value: 'Golv till arbetshöjd' },
          ],
        },
        {
          name: 'V2 — tung bas',
          blurb: 'En starkare mobil plattform byggd för att lyfta riktig vikt. Den behåller den tvåarmade humanoida överkroppen men står på en styv bas med hög nyttolast för hantering och montering av tyngre industridelar.',
          specs: [
            { label: 'Bäst för', value: 'Tung hantering och montering' },
            { label: 'Bas', value: 'Styv plattform med hög nyttolast' },
            { label: 'Nominell nyttolast', value: '≈ 7 kg per arm' },
          ],
        },
      ],
    },
  },
  'specialized-robots': {
    ...R,
    vision: { ...visionRobot, extra: [
      { title: 'Perceptionsmast', text: 'På ett specialiserat chassi bär kärnmodulen en extra mast med verktyg och kameror för uppgiften.' },
      { title: 'LiDAR + ultraljud', text: 'LiDAR på chassit och ultraljudssensorer kartlägger svår terräng och fångar hinder bortom kamerorna.' },
      { title: 'Multispektral / termisk', text: 'Valfri multispektral och termisk avbildning för grödhälsa, inspektion och nattarbete.' },
      { title: 'Beräkning på enheten', text: 'Detektering och planering körs på enheten; data och efterlevnad stannar i EU.' },
    ] },
    robots: {
      title: 'Den specialiserade linjen, robot för robot',
      lead: 'Var och en av dessa är samma kärnmodul — styrning, AI och hot-swap-batterier — på ett annat chassi. Behåll hjärnan och uppgiftsmodulerna; byt plattform för att matcha underlaget. Lägg till eller ta bort armar, ett gripdon, ett skördehuvud eller en sensormast vid snabbkopplingen.',
      items: [
        {
          name: 'Bensatt robot',
          role: 'Trappor, hinder, ojämnt underlag',
          body: 'Ett fyrbent chassi som klarar trappor, trottoarkanter och uppbrutet underlag som inget hjul tar. Den går inspektionsrundor genom anläggningar, ställverk och platser byggda för människor, inte maskiner.',
          modify: 'Lägg till en eller två armar med ett gripdon för manipulation, eller en sensormast för inspektion. Byt till en hjul- eller bandbas när underlaget blir platt eller mjukt.',
        },
        {
          name: 'Bandrobot',
          role: 'Obelagd, tung terräng, byggarbetsplatser',
          body: 'Ett bandchassi för lera, spillror och brant, obelagt underlag. Den bär last över en byggarbetsplats eller ett öppet fält där hjul fastnar och ben är för långsamma.',
          modify: 'Montera en logistikbärare för tung transport, en arm för hantering, eller en mätmast för BIM-inspektion. Samma kropp går över till ben eller hjul när uppgiften ändras.',
        },
        {
          name: 'Hjulrobot',
          role: 'Golv, lager, plant underlag',
          body: 'Ett snabbt, tyst hjulchassi för industrigolv och lager — ungefär 2.5× mer energieffektivt än ben på plant underlag. Idealisk för patrullering, övervakning och intern transport.',
          modify: 'Lägg till armar och ett gripdon för pick-and-place, en sensormast för övervakning, eller en bärare för transport. Flytta kärnmodulen till en bandbas för att lämna beläggningen.',
        },
        {
          name: 'Hjul-ben-robot',
          role: 'Plant underlag, hinder och skenor',
          body: 'Ett hybridchassi med hjul och ben: det rullar snabbt på det platta och när det möter ett steg, en trottoarkant eller en skena lyfter benen hjulen över. En plattform för blandade miljöer som annars skulle behöva två robotar.',
          modify: 'Armar, gripdon, skördehuvud eller sensormast monteras alla vid snabbkopplingen. Ta bort benen för en ren hjulbas, eller sätt tillbaka dem när rutten blir svår.',
        },
        {
          name: 'Arm på en plattform',
          role: 'Produktionslinjer, mobila maskiner, skärbord',
          body: 'Kärnmodulen fixerad vid en enda punkt — på en produktionslinje, eller monterad på en rörlig maskin eller ett skärbord. På ett skärbord för sallatsskörd, till exempel, skär armarna grödan och lägger den direkt på bandet medan maskinen rör sig framåt.',
          modify: 'Välj en eller två armar med ett gripdon, en kniv eller ett skördehuvud. Montera den stationärt på en linje, eller på valfri värdmaskin som bär den genom fältet.',
        },
        {
          name: 'Robot på skenor',
          role: 'Växthus, rader, fasta rutter',
          body: 'En skenstyrd version för växthus och glashus med fasta rader. Den kör på de uppvärmda rörskenorna mellan grödorna för precis, upprepbar besprutning, övervakning och selektiv skörd.',
          modify: 'Lägg till ett sprut- eller fertigeringshuvud, en sensormast eller ett mjukt gripdon. Samma kärnmodul lyfter av skenorna till en hjul- eller hjul-ben-bas för öppet underlag.',
        },
      ],
    },
  },
  'transport-drone': {
    battery: {
      title: 'Batteri och energi',
      lead: 'Transportdrönaren flyger på sitt eget högeffekts-flygpaket och bär dessutom laddade hot-swap-paket för robotarna den levererar — så att de anländer med fulla batterier och lägger sin energi på arbetet, inte på resan.',
      rows: [
        { label: 'Batteri', value: 'Hot-swap-flygpaket' },
        { label: 'Paketenergi', value: '≈ 30 kWh' },
        { label: 'Flygtid vid maximal nyttolast', value: '≈ 20 min' },
        { label: 'Omställning', value: 'Hot-swap mellan flygningar' },
        { label: 'Bär även', value: 'Laddade 48 V robotpaket' },
      ],
    },
    drone: {
      title: 'Drönaren bär robotarna',
      body: 'Vårt mål är att drönaren ska bära robotar och humanoider över de längre sträckorna, så att robotarna behåller sin energi för uppgiften istället för att förbruka den på att ta sig dit. Drönaren bär också utbytbara moduler och chassin, så att en robot anländer redo att välja den uppgiftsmodul och plattform som dess miljö kräver.',
      points: [
        'Robotar åker till platsen med fulla batterier och landar redo att arbeta.',
        'Utbytbara chassin och uppgiftsmoduler reser med drönaren.',
        'Leverans där vägen tar slut — berg, platser utan belagda vägar, områden avskurna efter en översvämning.',
        'Den saknade länken i timuthyrningsmodellen: en robot betjänar flera kunder samma dag.',
      ],
    },
  },
  'polcero-os': {
    vision: visionRobot,
  },
};
