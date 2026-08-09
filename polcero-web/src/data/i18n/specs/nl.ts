import type { SpecsContent } from '../../specs';
import type { CookieText } from '../../cookieText';

export const nl = {
  specs: {
    eyebrow: 'SPECIFICATIE',
    title: 'Modulair platform - specificatie',
    lead: 'Eén kernmodule in meerdere configuraties. Hieronder een vergelijking van de POLCERO-platformvarianten.',
    columns: ['Humanoïde', 'Humanoïde op mobiel platform', 'Gespecialiseerde robot', 'Transportdrone'],
    legend: '„–" = niet beschikbaar · „o" = optioneel · „✓" = standaard',
    note: 'De waarden zijn ontwerpaannames en productdoelen; het product is in ontwikkeling en de configuratie en parameters kunnen wijzigen. Bevestig de details met verkoop voordat u bestelt.',
    groups: [
      {
        title: 'Constructie',
        rows: [
          { label: 'Materiaal', values: ['Aluminium & composieten', 'Aluminium & composieten', 'Aluminium & composieten', 'Koolstofcomposieten'] },
          { label: 'Modulaire constructie', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Kernmodule (besturing + AI)', values: ['✓', '✓', '✓', 'o'] },
          { label: 'Snelkoppeling voor gereedschap', values: ['✓', '✓', '✓', '–'] },
        ],
      },
      {
        title: 'Manipulatie',
        rows: [
          { label: 'Aantal armen', values: ['2', '2', 'o (0–2)', '–'] },
          { label: 'Verwisselbare taakmodules', values: ['✓', '✓', '✓', '–'] },
          { label: 'Eindeffectoren (grijper · oogstkop · laser)', values: ['✓', '✓', '✓', '–'] },
        ],
      },
      {
        title: 'Mobiliteit',
        rows: [
          { label: 'Aandrijving', values: ['Benen', 'Mobiel platform', 'Wielen · rupsen · benen · wiel-been', 'Multirotor'] },
          { label: 'Neemt trappen en obstakels', values: ['✓', 'o', '✓', '–'] },
          { label: 'Werkt op onverharde wegen', values: ['o', '–', '✓', '✓'] },
        ],
      },
      {
        title: 'Voeding',
        rows: [
          { label: 'Hot-swap-accu’s', values: ['3', '3', '3', 'o'] },
          { label: 'Accuwissel zonder stilstand', values: ['✓', '✓', '✓', 'o'] },
          { label: 'On-device AI (lokale werking)', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
      {
        title: 'Waarneming',
        rows: [
          { label: 'RGBD-camera’s', values: ['✓', '✓', '✓', '✓'] },
          { label: 'LiDAR', values: ['✓', '✓', '✓', 'o'] },
          { label: 'IMU', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
      {
        title: 'Transport',
        rows: [
          { label: 'Maximale laadvermogen', values: ['–', '–', '–', '500 kg'] },
          { label: 'Eigen gewicht', values: ['–', '–', '–', '90 kg'] },
          { label: 'Vervoert robots en modules', values: ['–', '–', '–', '✓'] },
        ],
      },
      {
        title: 'AI & software',
        rows: [
          { label: 'POLCERO OS', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Leren door demonstratie', values: ['✓', '✓', '✓', 'o'] },
          { label: 'Data & compliance in de EU', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Afgestemd op het proces van de klant', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
    ],
  } as SpecsContent,
  specLabels: {
    construction: 'Constructie', material: 'Materiaal', modular: 'Modulaire constructie', core: 'Kernmodule (besturing + AI)', coupler: 'Snelkoppeling voor gereedschap',
    mobility: 'Aandrijving & mobiliteit', drive: 'Aandrijving', terrain: 'Terrein',
    manip: 'Manipulatie', arms: 'Aantal armen', tasks: 'Taakmodules', ends: 'Verwisselbare eindeffectoren',
    power: 'Voeding', batt: 'Hot-swap-accu’s', swap: 'Wissel zonder stilstand', local: 'Lokale werking (on-device AI)',
    perc: 'Waarneming', ai: 'AI & software', os: 'POLCERO OS', demo: 'Leren door demonstratie', eu: 'Data & compliance in de EU',
    transport: 'Transport', payload: 'Maximale laadvermogen', weight: 'Eigen gewicht', carry: 'Vervoert robots en modules', autonomy: 'Autonomie', gear: 'Besturing en taakuitrusting',
    platform: 'Platform', functions: 'Functies', planning: 'Taakplanning en -toezicht', fleet: 'Vlootbeheer', compat: 'Compatibiliteit', chassis: 'Werkt met chassis',
    yes: 'Ja', optArms: 'Optioneel (0-2)', opt: 'Optioneel', dev: 'In ontwikkeling', allTypes: 'Alle chassistypes',
    tasksVal: 'Grijper · oogstkop · laser', percCam: 'Camera’s, LiDAR', demoVal: 'tot 10× minder programmeren',
    carbon: 'Koolstofcomposieten', aluminium: 'Aluminium & composieten', multirotor: 'Multirotor',
  },
  drive: {
    humanoid: ['Benen (tweevoetig)', 'Trappen, stoepranden, voor mensen ontworpen ruimtes'],
    'mobile-humanoid': ['Mobiel platform', 'Hallen en industriële vloeren'],
    'quadruped-robot': ['Lopend chassis (4 benen)', 'Trappen, obstakels, oneffen terrein'],
    'tracked-robot': ['Rupsonderstel', 'Onverhard, ruw terrein, bouwplaatsen'],
    'wheeled-robot': ['Wielonderstel', 'Vloeren, magazijnen, vlak terrein'],
    'wheel-leg-robot': ['Wiel-been-chassis', 'Vlak terrein, obstakels en rails'],
    'specialized-robots': ['4 verwisselbare chassis', 'Lopend · rups · wiel · wiel-been'],
  } as Record<string, [string, string]>,
  cookie: {
    title: 'Wij hechten waarde aan uw privacy',
    desc: 'Wij gebruiken essentiële cookies om deze site te laten werken. Met uw toestemming gebruiken wij ook analytische en marketingcookies om de site te verbeteren. U kunt uw keuze op elk moment wijzigen.',
    acceptAll: 'Alles accepteren',
    rejectOptional: 'Optionele weigeren',
    moreOptions: 'Meer opties',
    prefTitle: 'Cookievoorkeuren',
    prefDesc: 'Kies welke categorieën cookies u toestaat. Essentiële cookies staan altijd aan.',
    essential: 'Essentieel', essentialDesc: 'Vereist voor de kernfunctionaliteit en beveiliging van de site. Altijd actief.',
    alwaysActive: 'Altijd actief',
    analytics: 'Analytisch', analyticsDesc: 'Helpen ons te begrijpen hoe de site wordt gebruikt, zodat wij deze kunnen verbeteren.',
    marketing: 'Marketing', marketingDesc: 'Gebruikt om campagnes te meten en te personaliseren.',
    save: 'Keuzes opslaan', cancel: 'Annuleren',
    footer: 'Lees onze', privacyLink: 'Privacybeleid', cookieLink: 'Cookiebeleid', close: 'Sluiten',
  } as CookieText,
};
