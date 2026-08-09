import type { SpecsContent } from '../../specs';
import type { CookieText } from '../../cookieText';

export const it = {
  specs: {
    eyebrow: 'SPECIFICHE',
    title: 'Piattaforma modulare - specifiche',
    lead: 'Un unico modulo centrale in diverse configurazioni. Di seguito, un confronto tra le varianti della piattaforma POLCERO.',
    columns: ['Umanoide', 'Umanoide su piattaforma mobile', 'Robot specializzato', 'Drone da trasporto'],
    legend: '"–" = non disponibile · "o" = opzionale · "✓" = di serie',
    note: 'I valori sono ipotesi progettuali e obiettivi di prodotto; il prodotto è in fase di sviluppo e la configurazione e i parametri possono cambiare. Si prega di confermare i dettagli con il reparto vendite prima di ordinare.',
    groups: [
      {
        title: 'Costruzione',
        rows: [
          { label: 'Materiale', values: ['Alluminio e compositi', 'Alluminio e compositi', 'Alluminio e compositi', 'Compositi in carbonio'] },
          { label: 'Costruzione modulare', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Modulo centrale (controllo + IA)', values: ['✓', '✓', '✓', 'o'] },
          { label: 'Attacco utensili a sgancio rapido', values: ['✓', '✓', '✓', '–'] },
        ],
      },
      {
        title: 'Manipolazione',
        rows: [
          { label: 'Numero di bracci', values: ['2', '2', 'o (0–2)', '–'] },
          { label: 'Moduli di lavoro intercambiabili', values: ['✓', '✓', '✓', '–'] },
          { label: 'Terminali (pinza · testa di raccolta · laser)', values: ['✓', '✓', '✓', '–'] },
        ],
      },
      {
        title: 'Mobilità',
        rows: [
          { label: 'Trazione', values: ['Gambe', 'Piattaforma mobile', 'Su ruote · cingolata · su gambe · ruota-gamba', 'Multirotore'] },
          { label: 'Supera scale e ostacoli', values: ['✓', 'o', '✓', '–'] },
          { label: 'Opera su strade non asfaltate', values: ['o', '–', '✓', '✓'] },
        ],
      },
      {
        title: 'Alimentazione',
        rows: [
          { label: 'Batterie hot-swap', values: ['3', '3', '3', 'o'] },
          { label: 'Sostituzione batteria senza fermo macchina', values: ['✓', '✓', '✓', 'o'] },
          { label: 'IA on-device (funzionamento locale)', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
      {
        title: 'Percezione',
        rows: [
          { label: 'Telecamere RGBD', values: ['✓', '✓', '✓', '✓'] },
          { label: 'LiDAR', values: ['✓', '✓', '✓', 'o'] },
          { label: 'IMU', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
      {
        title: 'Trasporto',
        rows: [
          { label: 'Carico utile massimo', values: ['–', '–', '–', '500 kg'] },
          { label: 'Peso proprio', values: ['–', '–', '–', '90 kg'] },
          { label: 'Trasporta robot e moduli', values: ['–', '–', '–', '✓'] },
        ],
      },
      {
        title: 'IA e software',
        rows: [
          { label: 'POLCERO OS', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Apprendimento per dimostrazione', values: ['✓', '✓', '✓', 'o'] },
          { label: 'Dati e conformità nell\'UE', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Adattato al processo del cliente', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
    ],
  } as SpecsContent,

  specLabels: {
    construction: 'Costruzione', material: 'Materiale', modular: 'Costruzione modulare', core: 'Modulo centrale (controllo + IA)', coupler: 'Attacco utensili a sgancio rapido',
    mobility: 'Trazione e mobilità', drive: 'Trazione', terrain: 'Terreno',
    manip: 'Manipolazione', arms: 'Numero di bracci', tasks: 'Moduli di lavoro', ends: 'Terminali intercambiabili',
    power: 'Alimentazione', batt: 'Batterie hot-swap', swap: 'Sostituzione senza fermo macchina', local: 'Funzionamento locale (IA on-device)',
    perc: 'Percezione', ai: 'IA e software', os: 'POLCERO OS', demo: 'Apprendimento per dimostrazione', eu: 'Dati e conformità nell\'UE',
    transport: 'Trasporto', payload: 'Carico utile massimo', weight: 'Peso proprio', carry: 'Trasporta robot e moduli', autonomy: 'Autonomia', gear: 'Controllo e attrezzatura di lavoro',
    platform: 'Piattaforma', functions: 'Funzioni', planning: 'Pianificazione e supervisione delle attività', fleet: 'Gestione della flotta', compat: 'Compatibilità', chassis: 'Compatibile con i telai',
    yes: 'Sì', optArms: 'Opzionale (0-2)', opt: 'Opzionale', dev: 'In sviluppo', allTypes: 'Tutti i tipi di telaio',
    tasksVal: 'Pinza · testa di raccolta · laser', percCam: 'Telecamere, LiDAR', demoVal: 'fino a 10× meno programmazione',
    carbon: 'Compositi in carbonio', aluminium: 'Alluminio e compositi', multirotor: 'Multirotore',
  },

  drive: {
    humanoid: ['Gambe (bipede)', 'Scale, cordoli, spazi progettati per l\'uomo'] as [string, string],
    'mobile-humanoid': ['Piattaforma mobile', 'Capannoni e pavimentazioni industriali'] as [string, string],
    'quadruped-robot': ['Telaio su gambe (4 gambe)', 'Scale, ostacoli, terreno accidentato'] as [string, string],
    'tracked-robot': ['Telaio cingolato', 'Terreno non asfaltato, accidentato, cantieri'] as [string, string],
    'wheeled-robot': ['Telaio su ruote', 'Pavimentazioni, magazzini, terreno pianeggiante'] as [string, string],
    'wheel-leg-robot': ['Telaio ruota-gamba', 'Terreno pianeggiante, ostacoli e rotaie'] as [string, string],
    'specialized-robots': ['4 telai intercambiabili', 'Su gambe · cingolato · su ruote · ruota-gamba'] as [string, string],
  },

  cookie: {
    title: 'Rispettiamo la tua privacy',
    desc: 'Utilizziamo cookie essenziali per il funzionamento di questo sito. Con il tuo consenso utilizziamo anche cookie analitici e di marketing per migliorarlo. Puoi modificare la tua scelta in qualsiasi momento.',
    acceptAll: 'Accetta tutti',
    rejectOptional: 'Rifiuta opzionali',
    moreOptions: 'Altre opzioni',
    prefTitle: 'Preferenze cookie',
    prefDesc: 'Scegli quali categorie di cookie consentire. I cookie essenziali sono sempre attivi.',
    essential: 'Essenziali', essentialDesc: 'Necessari per le funzionalità di base e la sicurezza del sito. Sempre attivi.',
    alwaysActive: 'Sempre attivi',
    analytics: 'Analitici', analyticsDesc: 'Ci aiutano a capire come viene utilizzato il sito, così da poterlo migliorare.',
    marketing: 'Marketing', marketingDesc: 'Utilizzati per misurare e personalizzare le campagne.',
    save: 'Salva le scelte', cancel: 'Annulla',
    footer: 'Leggi la nostra', privacyLink: 'Informativa sulla privacy', cookieLink: 'Informativa sui cookie', close: 'Chiudi',
  } as CookieText,
};
