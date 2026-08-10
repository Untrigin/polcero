import type { ProductRichOverride } from '../../productRich';

// ── Gemeinsame Blöcke (identisch für humanoid und mobile-humanoid) ────────────
const batteryRobot = {
  title: 'Akku und Energie',
  lead: 'Jeder Roboter läuft mit drei Hot-Swap-Akkupaketen, die im Kernmodul sitzen. Ein Paket ist eine eigenständige 48-V-Einheit, sodass die Leistung mit der Anzahl der Pakete skaliert und ein leeres Paket ohne Werkzeug getauscht wird, während der Roboter mit den übrigen weiterarbeitet.',
  rows: [
    { label: 'Paketspannung', value: '48 V Hot-Swap' },
    { label: 'Paketenergie', value: '≈ 864 Wh je Paket' },
    { label: 'Pakete im Kernmodul', value: '3 (≈ 2.6 kWh gesamt)' },
    { label: 'Laufzeit im Akkubetrieb', value: '≈ 5 h bei üblichem Einsatz' },
    { label: 'Bei Direktversorgung', value: '24/7 (kabelgebunden oder Netz)' },
    { label: 'Wechselzeit', value: '< 60 s pro Paket, werkzeugfrei' },
  ],
};

const swapRobot = {
  title: 'Selbstwechselnde Akkus — kein Stillstand',
  lead: 'Der Roboter schaltet sich zum Laden nie vollständig ab. Er tauscht seine drei Pakete nacheinander und läuft dabei mit den verbleibenden zwei, während ein leeres Paket lädt — so hält eine Schicht nie wegen des Akkus an.',
  robot: {
    title: 'Der Roboter macht es selbst',
    steps: [
      'Erkennt der Roboter ein zur Neige gehendes Paket, fährt er zur Ladestation und hält seinen Zustand mit den zwei verbleibenden Paketen.',
      'Ein Arm greift an die Rückseite des Kernmoduls, löst die Verriegelung und hebt das leere Paket heraus.',
      'Er setzt das Paket in einen freien Schacht der 4-Schacht-Station und nimmt an dessen Stelle ein vollgeladenes.',
      'Das frische Paket rastet ein; der Roboter wiederholt dies für jedes Paket und kehrt zur Arbeit zurück — nie aus, nie im Leerlauf.',
    ],
  },
  human: {
    title: 'Eine Person schafft es in Sekunden',
    steps: [
      'Kein Abschalten und kein Werkzeug: Die Pakete sind im laufenden Betrieb wechselbar, während der Roboter bereitsteht.',
      'Die Verriegelung an der Rückseite des Kernmoduls drücken und das Paket gerade herausziehen.',
      'Ein geladenes Paket einschieben, bis es einrastet — der Roboter arbeitet dort weiter, wo er aufgehört hat.',
    ],
  },
};

const statusRobot = {
  title: 'Akkustatus und die Ladestation',
  lead: 'Jedes Paket meldet seinen eigenen Zustand, sodass der Roboter und seine Bediener stets wissen, wann zu wechseln ist. Eine 4-Schacht-Ladestation hält eine Rotation von Paketen bereit, und der Roboter dockt an, um seine Pakete während der Arbeit selbst zu wechseln.',
  points: [
    { title: 'Live-Zustand je Paket', text: 'Ladezustand, Gesundheit und Temperatur für jedes der drei Pakete in Echtzeit.' },
    { title: 'Vorausschauender Wechsel', text: 'Das System plant den nächsten Wechsel, bevor ein Paket leer ist, sodass die Arbeit nie mitten in der Aufgabe unterbrochen wird.' },
    { title: '4-Schacht-Ladestation', text: 'Vier Ladeeingänge halten Ersatzpakete geladen und bereit für die nächste Rotation.' },
    { title: 'Autonomes Andocken', text: 'Der Roboter tauscht seine eigenen Pakete während einer Schicht an der Station — ohne Bediener und ohne Stillstand.' },
  ],
};

const visionRobot = {
  title: 'Wie der Roboter sieht',
  lead: 'Der Roboter setzt aus mehreren Ansichten zugleich ein Bild der Welt zusammen. Ein binokularer Weitwinkelkopf liefert ein linkes und ein rechtes Bild; ihr Vergleich ergibt Tiefe; darauf ergänzt die KI-Schicht eine Wahrnehmungsansicht, die Objekte, Oberflächen und Menschen benennt.',
  views: [
    { label: 'Links', text: 'Das linke Auge des binokularen Kopfes — eine Weitwinkel-Farbansicht der Szene.' },
    { label: 'Rechts', text: 'Das rechte Auge — die zweite Farbansicht, die der Roboter mit der linken vergleicht.' },
    { label: 'Tiefe', text: 'Die Stereo-Disparität zwischen links und rechts ergibt die Entfernung zu jedem Punkt im Bild.' },
    { label: 'Wahrnehmung', text: 'Die KI-Schicht kennzeichnet Objekte, Oberflächen, Hindernisse und Menschen und plant den nächsten Schritt direkt auf dem Gerät.' },
  ],
  extra: [
    { title: 'Handgelenkkameras', text: 'HD-Kameras an jedem Handgelenk liefern eine Nahansicht für präzises Greifen und Montieren.' },
    { title: 'LiDAR + Ultraschall', text: 'LiDAR am Chassis und Ultraschallsensoren kartieren den Raum und erfassen Hindernisse jenseits der Kameras.' },
    { title: 'Kraft und IMU', text: 'Kraftrückgekoppelte Gelenke und eine IMU erfassen Kontakt und Balance für sichere, stabile Bewegung.' },
    { title: 'Sprache und Sprachmodell', text: 'Sprachinteraktion und ein Sprachmodell lassen eine Person den Roboter in natürlicher Sprache steuern.' },
  ],
};

const powerRobot = {
  title: 'Zwei Wege zur Energie: Akkus oder das Netz',
  lead: 'Der Roboter ist mit Akkus autonom, doch wo ein Standort Strom liefern kann, läuft er über ein Kabel direkt aus dem Netz — keine Pakete zu rotieren, kein Stillstand, geringere Betriebskosten.',
  modes: [
    { name: 'Hot-Swap-Akkus', text: 'Vollständig mobil und autonom. Drei Pakete rotieren durch die Ladestation, sodass der Roboter ohne Kabel überall arbeiten kann.' },
    { name: 'Direktversorgung (Kabel)', text: 'Für eine feste Station oder 24/7-Betrieb bezieht der Roboter Strom über ein Kabel und läuft durchgehend — die Akkus werden zur Reserve.' },
    { name: 'Netzinfrastruktur', text: 'In Hallen, Fabriken und Gewächshäusern installieren wir feste Stromschienen; im Freien, auf Feldern und Höfen, Oberleitungen wie eine Straßenbahn-Fahrleitung. Der Roboter bezieht Strom aus der Leitung und lädt seine Pakete während der Arbeit nach.' },
  ],
};

const R = { battery: batteryRobot, swap: swapRobot, status: statusRobot, vision: visionRobot, power: powerRobot };

export const de: Record<string, ProductRichOverride> = {
  humanoid: {
    ...R,
    application: {
      title: 'Drei Humanoide, ein Lager',
      body: 'So sieht eine Schicht aus. In einem einzigen Raum packt ein Humanoid am Tisch ein Paket, ein zweiter hebt eine beladene Metallkiste vom Boden, und ein dritter stapelt Kartons auf ein Regal. Derselbe Roboter, drei Aufgaben — jeder betrat einen für Menschen gebauten Raum und übernahm Arbeit, die für menschliche Hände gemacht ist, ohne dass eine Linie um sie herum umgebaut werden musste.',
    },
  },
  'mobile-humanoid': {
    ...R,
    versions: {
      title: 'Zwei Plattformversionen',
      lead: 'Derselbe humanoide Oberkörper sitzt auf der Fahrbasis, die Sie brauchen — eine leichte, klappbare Basis für die Kommissionierung am Boden oder eine schwere Basis, um echtes Gewicht zu heben.',
      items: [
        {
          name: 'V1 — klappbare Basis',
          blurb: 'Der Mast klappt in der Mitte, sodass sich der Roboter mit geringem Leistungsverlust bückt, um Dinge vom Boden aufzunehmen. Räder an der Basis drehen den gesamten Roboter auf der Stelle, was ihn in engen Gängen und bei niedrigen Kommissionierhöhen wendig macht.',
          specs: [
            { label: 'Am besten für', value: 'Kommissionierung am Boden, enge Gänge' },
            { label: 'Basis', value: 'Klappmast, Drehung auf der Stelle' },
            { label: 'Reichweite', value: 'Boden bis Arbeitshöhe' },
          ],
        },
        {
          name: 'V2 — schwere Basis',
          blurb: 'Eine stärkere Fahrplattform, gebaut, um echtes Gewicht zu heben. Sie behält den zweiarmigen humanoiden Oberkörper, steht aber auf einer starren Basis mit hoher Traglast für Handhabung und Montage schwererer Industrieteile.',
          specs: [
            { label: 'Am besten für', value: 'Schwere Handhabung und Montage' },
            { label: 'Basis', value: 'Starre Plattform mit hoher Traglast' },
            { label: 'Nenntraglast', value: '≈ 7 kg pro Arm' },
          ],
        },
      ],
    },
  },
  'specialized-robots': {
    ...R,
    vision: { ...visionRobot, extra: [
      { title: 'Wahrnehmungsmast', text: 'Auf einem spezialisierten Chassis trägt das Kernmodul einen zusätzlichen Mast mit Werkzeugen und Kameras für die jeweilige Aufgabe.' },
      { title: 'LiDAR + Ultraschall', text: 'LiDAR am Chassis und Ultraschallsensoren kartieren unwegsames Gelände und erfassen Hindernisse jenseits der Kameras.' },
      { title: 'Multispektral / Thermal', text: 'Optionale multispektrale und thermische Bildgebung für Pflanzengesundheit, Inspektion und Nachtarbeit.' },
      { title: 'Rechnen auf dem Gerät', text: 'Erkennung und Planung laufen auf dem Gerät; Daten und Konformität bleiben in der EU.' },
    ] },
    robots: {
      title: 'Die spezialisierte Linie, Roboter für Roboter',
      lead: 'Jeder von ihnen ist dasselbe Kernmodul — Steuerung, KI und Hot-Swap-Akkus — auf einem anderen Chassis. Behalten Sie das Gehirn und die Aufgabenmodule; wechseln Sie die Plattform passend zum Untergrund. Fügen Sie Arme, einen Greifer, einen Erntekopf oder einen Sensormast am Schnellverschluss hinzu oder entfernen Sie sie.',
      items: [
        {
          name: 'Laufroboter',
          role: 'Treppen, Hindernisse, unebener Boden',
          body: 'Ein vierbeiniges Chassis, das Treppen, Bordsteine und aufgebrochenen Boden meistert, den kein Rad nimmt. Er läuft Inspektionsrouten durch Anlagen, Umspannwerke und Standorte, die für Menschen und nicht für Maschinen angelegt sind.',
          modify: 'Fügen Sie einen oder zwei Arme mit Greifer für die Manipulation hinzu oder einen Sensormast zur Inspektion. Wechseln Sie zu einer Rad- oder Kettenbasis, wenn der Boden flach oder weich wird.',
        },
        {
          name: 'Kettenroboter',
          role: 'Unbefestigt, schweres Gelände, Baustellen',
          body: 'Ein Kettenchassis für Schlamm, Schutt und steilen, unbefestigten Boden. Er trägt Last über eine Baustelle oder ein offenes Feld, wo Räder einsinken und Beine zu langsam sind.',
          modify: 'Rüsten Sie einen Logistikträger für schweren Transport, einen Arm zur Handhabung oder einen Vermessungsmast für die BIM-Inspektion aus. Derselbe Körper wechselt zu Beinen oder Rädern, wenn sich die Aufgabe ändert.',
        },
        {
          name: 'Radroboter',
          role: 'Böden, Lager, ebener Grund',
          body: 'Ein schnelles, leises Radchassis für Industrieböden und Lager — auf flachem Grund rund 2.5× energieeffizienter als Beine. Ideal für Patrouille, Überwachung und internen Transport.',
          modify: 'Fügen Sie Arme und einen Greifer für Pick-and-Place, einen Sensormast zur Überwachung oder einen Träger für den Transport hinzu. Versetzen Sie das Kernmodul auf eine Kettenbasis, um den Belag zu verlassen.',
        },
        {
          name: 'Rad-Bein-Roboter',
          role: 'Ebener Grund, Hindernisse und Schienen',
          body: 'Ein hybrides Rad-Bein-Chassis: Es rollt schnell auf dem Flachen, und wenn es auf eine Stufe, einen Bordstein oder eine Schiene trifft, heben die Beine die Räder darüber. Eine Plattform für gemischte Umgebungen, die sonst zwei Roboter bräuchten.',
          modify: 'Arme, Greifer, Erntekopf oder Sensormast werden alle am Schnellverschluss montiert. Nehmen Sie die Beine ab für eine reine Radbasis oder setzen Sie sie wieder an, wenn die Route rau wird.',
        },
        {
          name: 'Arm auf einer Plattform',
          role: 'Produktionslinien, mobile Maschinen, Vorsätze',
          body: 'Das Kernmodul an einem einzigen Punkt fixiert — an einer Produktionslinie oder auf einer fahrenden Maschine bzw. einem Vorsatz montiert. Auf einem Salat-Erntevorsatz etwa schneiden die Arme die Kultur und legen sie direkt auf das Band, während die Maschine vorrückt.',
          modify: 'Wählen Sie einen oder zwei Arme mit Greifer, Schneidwerk oder Erntekopf. Montieren Sie ihn stationär an einer Linie oder auf jeder Trägermaschine, die ihn durch das Feld führt.',
        },
        {
          name: 'Roboter auf Schienen',
          role: 'Gewächshäuser, Reihen, feste Routen',
          body: 'Eine schienengeführte Version für Gewächshäuser und Glashäuser mit festen Reihen. Er fährt auf den beheizten Rohrschienen zwischen den Kulturen für präzises, wiederholbares Sprühen, Überwachen und selektives Ernten.',
          modify: 'Fügen Sie einen Sprüh- oder Fertigationskopf, einen Sensormast oder einen weichen Greifer hinzu. Dasselbe Kernmodul hebt von den Schienen auf eine Rad- oder Rad-Bein-Basis für offenes Gelände.',
        },
      ],
    },
  },
  'transport-drone': {
    battery: {
      title: 'Akku und Energie',
      lead: 'Die Transportdrohne fliegt mit ihrem eigenen Hochleistungspaket und trägt Hot-Swap-Pakete für die Roboter, die sie liefert. Ihre Aufgabe ist es, die Roboter zu befördern, damit sie mit vollen eigenen Akkus ankommen und ihre Energie in die Arbeit stecken, nicht in die Anreise.',
      rows: [
        { label: 'Maximale Nutzlast', value: '500 kg' },
        { label: 'Drohnengewicht', value: '90 kg' },
        { label: 'Transportiert', value: 'Roboter · Module · geladene Pakete' },
        { label: 'Bauweise', value: 'modular' },
      ],
    },
    drone: {
      title: 'Die Drohne trägt die Roboter',
      body: 'Unser Ziel ist es, dass die Drohne Roboter und Humanoide über die längeren Strecken trägt, damit die Roboter ihre Energie für die Aufgabe behalten, statt sie für die Anreise zu verbrauchen. Die Drohne trägt zudem austauschbare Module und Chassis, sodass ein Roboter ankommt und das Aufgabenmodul und die Plattform wählen kann, die seine Umgebung verlangt.',
      points: [
        'Roboter fahren mit vollen Akkus zum Einsatzort und landen arbeitsbereit.',
        'Austauschbare Chassis und Aufgabenmodule reisen mit der Drohne.',
        'Lieferung dort, wo die Straße endet — Berge, Standorte ohne befestigte Wege, nach einer Flut abgeschnittene Gebiete.',
        'Das fehlende Glied des Stundenmietmodells: Ein Roboter bedient mehrere Kunden am selben Tag.',
      ],
    },
  },
  'polcero-os': {
    vision: visionRobot,
  },
};
