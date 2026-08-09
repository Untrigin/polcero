import type { SpecsContent } from '../../specs';
import type { CookieText } from '../../cookieText';

export const de = {
  specs: {
    eyebrow: 'SPEZIFIKATION',
    title: 'Modulare Plattform - Spezifikation',
    lead: 'Ein Kernmodul in mehreren Konfigurationen. Nachfolgend ein Vergleich der Varianten der POLCERO-Plattform.',
    columns: ['Humanoid', 'Humanoid auf Fahrplattform', 'Spezialroboter', 'Transportdrohne'],
    legend: '„–" = nicht verfügbar · „o" = optional · „✓" = Standard',
    note: 'Die Werte sind Entwurfsannahmen und Produktziele; das Produkt befindet sich in Entwicklung, und Konfiguration sowie Parameter können sich ändern. Bitte bestätigen Sie die Details vor der Bestellung mit dem Vertrieb.',
    groups: [
      {
        title: 'Konstruktion',
        rows: [
          { label: 'Material', values: ['Aluminium & Verbundwerkstoffe', 'Aluminium & Verbundwerkstoffe', 'Aluminium & Verbundwerkstoffe', 'Kohlefaser-Verbundwerkstoffe'] },
          { label: 'Modulare Bauweise', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Kernmodul (Steuerung + KI)', values: ['✓', '✓', '✓', 'o'] },
          { label: 'Werkzeug-Schnellwechselkupplung', values: ['✓', '✓', '✓', '–'] },
        ],
      },
      {
        title: 'Manipulation',
        rows: [
          { label: 'Anzahl der Arme', values: ['2', '2', 'o (0–2)', '–'] },
          { label: 'Austauschbare Aufgabenmodule', values: ['✓', '✓', '✓', '–'] },
          { label: 'Endeffektoren (Greifer · Erntekopf · Laser)', values: ['✓', '✓', '✓', '–'] },
        ],
      },
      {
        title: 'Mobilität',
        rows: [
          { label: 'Antrieb', values: ['Beine', 'Fahrplattform', 'Räder · Ketten · Beine · Rad-Bein', 'Multirotor'] },
          { label: 'Überwindet Treppen und Hindernisse', values: ['✓', 'o', '✓', '–'] },
          { label: 'Einsatz abseits befestigter Wege', values: ['o', '–', '✓', '✓'] },
        ],
      },
      {
        title: 'Energieversorgung',
        rows: [
          { label: 'Hot-Swap-Akkus', values: ['3', '3', '3', 'o'] },
          { label: 'Akkuwechsel ohne Ausfallzeit', values: ['✓', '✓', '✓', 'o'] },
          { label: 'Lokaler Betrieb (KI auf dem Gerät)', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
      {
        title: 'Wahrnehmung',
        rows: [
          { label: 'RGBD-Kameras', values: ['✓', '✓', '✓', '✓'] },
          { label: 'LiDAR', values: ['✓', '✓', '✓', 'o'] },
          { label: 'IMU', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
      {
        title: 'Transport',
        rows: [
          { label: 'Maximale Nutzlast', values: ['–', '–', '–', '500 kg'] },
          { label: 'Eigengewicht', values: ['–', '–', '–', '90 kg'] },
          { label: 'Transport von Robotern und Modulen', values: ['–', '–', '–', '✓'] },
        ],
      },
      {
        title: 'KI & Software',
        rows: [
          { label: 'POLCERO OS', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Lernen durch Vormachen', values: ['✓', '✓', '✓', 'o'] },
          { label: 'Daten & Compliance in der EU', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Angepasst an den Kundenprozess', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
    ],
  } as SpecsContent,

  specLabels: {
    construction: 'Konstruktion', material: 'Material', modular: 'Modulare Bauweise', core: 'Kernmodul (Steuerung + KI)', coupler: 'Werkzeug-Schnellwechselkupplung',
    mobility: 'Antrieb & Mobilität', drive: 'Antrieb', terrain: 'Gelände',
    manip: 'Manipulation', arms: 'Anzahl der Arme', tasks: 'Aufgabenmodule', ends: 'Austauschbare Endeffektoren',
    power: 'Energieversorgung', batt: 'Hot-Swap-Akkus', swap: 'Wechsel ohne Ausfallzeit', local: 'Lokaler Betrieb (KI auf dem Gerät)',
    perc: 'Wahrnehmung', ai: 'KI & Software', os: 'POLCERO OS', demo: 'Lernen durch Vormachen', eu: 'Daten & Compliance in der EU',
    transport: 'Transport', payload: 'Maximale Nutzlast', weight: 'Eigengewicht', carry: 'Transport von Robotern und Modulen', autonomy: 'Autonomie', gear: 'Steuerung und Aufgabenausrüstung',
    platform: 'Plattform', functions: 'Funktionen', planning: 'Aufgabenplanung und -überwachung', fleet: 'Flottenmanagement', compat: 'Kompatibilität', chassis: 'Arbeitet mit Fahrgestellen',
    yes: 'Ja', optArms: 'Optional (0-2)', opt: 'Optional', dev: 'In Entwicklung', allTypes: 'Alle Fahrgestelltypen',
    tasksVal: 'Greifer · Erntekopf · Laser', percCam: 'Kameras, LiDAR', demoVal: 'bis zu 10× weniger Programmierung',
    carbon: 'Kohlefaser-Verbundwerkstoffe', aluminium: 'Aluminium & Verbundwerkstoffe', multirotor: 'Multirotor',
  },

  drive: {
    humanoid: ['Beine (zweibeinig)', 'Treppen, Bordsteine, für Menschen gestaltete Umgebungen'],
    'mobile-humanoid': ['Fahrplattform', 'Hallen und Industrieböden'],
    'quadruped-robot': ['Beinfahrwerk (4 Beine)', 'Treppen, Hindernisse, unebenes Gelände'],
    'tracked-robot': ['Kettenfahrwerk', 'Unbefestigtes, schweres Gelände, Baustellen'],
    'wheeled-robot': ['Radfahrwerk', 'Böden, Lager, ebenes Gelände'],
    'wheel-leg-robot': ['Rad-Bein-Fahrwerk', 'Ebenes Gelände, Hindernisse und Schienen'],
    'specialized-robots': ['4 austauschbare Fahrwerke', 'Beine · Ketten · Räder · Rad-Bein'],
  },

  cookie: {
    title: 'Wir schätzen Ihre Privatsphäre',
    desc: 'Wir verwenden essenzielle Cookies, damit diese Website funktioniert. Mit Ihrer Einwilligung nutzen wir außerdem Analyse- und Marketing-Cookies, um sie zu verbessern. Sie können Ihre Wahl jederzeit ändern.',
    acceptAll: 'Alle akzeptieren',
    rejectOptional: 'Optionale ablehnen',
    moreOptions: 'Weitere Optionen',
    prefTitle: 'Cookie-Einstellungen',
    prefDesc: 'Wählen Sie, welche Cookie-Kategorien Sie zulassen. Essenzielle Cookies sind immer aktiv.',
    essential: 'Essenziell', essentialDesc: 'Erforderlich für grundlegende Website-Funktionen und Sicherheit. Immer aktiv.',
    alwaysActive: 'Immer aktiv',
    analytics: 'Analyse', analyticsDesc: 'Helfen uns zu verstehen, wie die Website genutzt wird, damit wir sie verbessern können.',
    marketing: 'Marketing', marketingDesc: 'Werden zur Messung und Personalisierung von Kampagnen verwendet.',
    save: 'Auswahl speichern', cancel: 'Abbrechen',
    footer: 'Lesen Sie unsere', privacyLink: 'Datenschutzerklärung', cookieLink: 'Cookie-Richtlinie', close: 'Schließen',
  } as CookieText,
};
