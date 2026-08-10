import type { IndustryPower } from '../../industryPower';

export const sv: Record<string, IndustryPower> = {
  industry: {
    eyebrow: 'STRÖMINFRASTRUKTUR',
    title: 'Nätström på fabriksgolvet',
    lead: 'En hall har ström överallt, så de flesta robotar behöver inte bära den. Vi installerar fasta strömskenor längs stationerna och låter robotar köra direkt från nätet — batterier blir reserven för dem som rör sig mellan maskinerna.',
    modes: [
      { name: 'Fasta skenor vid stationer', text: 'Robotar som är fastmonterade vid eller betjänar en fast station drar ström via en skena och kör 24/7 utan ett enda byte.' },
      { name: 'Hot-swap för rörliga', text: 'En humanoid som rör sig mellan maskiner bär tre hot-swap-paket och toppladdar dem vid en laddstation.' },
      { name: 'En integration', text: 'Skenström och batteriström använder samma kärnmodul — växla en robot från kabelansluten till mobil utan omdesign.' },
    ],
  },
  agriculture: {
    eyebrow: 'STRÖMINFRASTRUKTUR',
    title: 'Driva hela den autonoma gården',
    lead: 'Farma AI driver hela odlingsekosystemet från nätet där det går. Växthus får fasta strömskenor; öppna fält får luftledningar som en spårvagns kontaktledning längs raderna; skenrobotar drar direkt från de uppvärmda rörskenorna — batterier fyller i där ingen ledning når.',
    modes: [
      { name: 'Fasta skenor i växthus', text: 'Glashus och tunnlar driver robotar från fasta skenor, så flottan arbetar dygnet runt genom säsongen.' },
      { name: 'Luftledningar på fält', text: 'På öppna fält spänner vi luftledningar längs raderna; roboten drar ström från ledningen och toppladdar sina paket medan den arbetar.' },
      { name: 'Batterier utanför nätet', text: 'Bortom ledningarna håller hot-swap-paket fältrobotar autonoma — bytta vid en solmatad laddstation.' },
    ],
  },
  construction: {
    eyebrow: 'STRÖMINFRASTRUKTUR',
    title: 'Ström där det ännu inte finns nät',
    lead: 'En arbetsplats har sällan fast ström i de tidiga faserna, så byggrobotar förlitar sig på batterier, med transportdrönaren som levererar laddade paket till de avlägsna hörnen. Där platsström eller ett aggregat finns tillgängligt kör fasta stationer kabelanslutna.',
    modes: [
      { name: 'Hot-swap i fält', text: 'Band- och bensatta robotar bär tre paket och byter dem vid en mobil laddstation på plats.' },
      { name: 'Drönarlevererade paket', text: 'Transportdrönaren släpper laddade paket och hämtar tömda där vägen inte når.' },
      { name: 'Kabelansluten vid fasta punkter', text: 'Där platsström eller ett aggregat finns kör inspektions- och hanteringsstationer kontinuerligt via en kabel.' },
    ],
  },
  logistics: {
    eyebrow: 'STRÖMINFRASTRUKTUR',
    title: 'Laddfält i lagret, paket på gården',
    lead: 'Ett lager har ström genomgående, så vi lägger laddfält och fasta skenor för robotarna som arbetar inne; på gården och på vägen kör flottan på hot-swap-paket, och drönaren bär laddade paket till avlägsna avlämningsplatser.',
    modes: [
      { name: 'Laddfält inomhus', text: 'Robotar dockar längs laddfält mellan uppgifter, så plockning och intern transport aldrig pausar för ström.' },
      { name: 'Hot-swap på gården', text: 'Utanför byggnaden roterar robotar med tre paket sina egna batterier vid en gårdsladdstation.' },
      { name: 'Paket till avlägsna avlämningar', text: 'Transportdrönaren levererar laddade paket tillsammans med roboten, så den landar redo att arbeta.' },
    ],
  },
  'public-sector': {
    eyebrow: 'STRÖMINFRASTRUKTUR',
    title: 'Ström på plats, data på plats',
    lead: 'För offentliga installationer stannar både ström och data på plats. Fast infrastruktur körs från det lokala nätet via kabel eller skena; mobila inspektions- och patrullrobotar körs på hot-swap-paket — och, precis som modellerna, behöver inget lämna lokalerna.',
    modes: [
      { name: 'Nät för fasta installationer', text: 'Stationära maskiner och laddstationer körs från byggnadens nät via kabel eller fast skena.' },
      { name: 'Batterier för patrull', text: 'Inspektions- och patrullrobotar förblir autonoma på tre hot-swap-paket, bytta vid en lokal station.' },
      { name: 'Allt stannar lokalt', text: 'Ström, laddning och inferens på enheten lever allt i lokalerna — inget beroende skickat utåt.' },
    ],
  },
};
