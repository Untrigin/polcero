import type { RichBranch, DeepPartial } from '../../branchRich';

export const de: Record<string, DeepPartial<RichBranch>> = {
  'icb-robots': {
    stats: [
      { label: 'Aktiv seit' },
      { label: 'Jahre Erfahrung' },
      { label: 'Industriebranchen' },
      { label: 'Robotics-as-a-Service' },
    ],
    productsHeading: {
      eyebrow: 'Produktspezifikationen',
      title: 'Echte Daten aus dem ICB-Katalog',
      desc: 'Veroeffentlichte Spezifikationen aus der Produktreihe POLCERO / ICB Robots.',
    },
    products: [
      {
        name: 'KI-gesteuerter Roboter fuer Praezisionsmontage und -handhabung',
        desc: 'Konzipiert fuer komplexe Aufgaben mit hoher Genauigkeit. Gesteuert von unserer Software und unserem KI-Bildverarbeitungssystem, arbeitet er in unterschiedlichen Produktionsumgebungen und korrigiert seine Bewegung in Echtzeit. Wir programmieren ihn auf Ihren Prozess, nehmen ihn in Betrieb und warten ihn.',
        specs: [
          { label: 'Traglast' },
          { label: 'Reichweite' },
          { label: 'Wiederholgenauigkeit' },
          { label: 'Betriebstemperatur' },
          { label: 'Garantie' },
          { label: 'Steuerung' },
        ],
        points: [
          'KI-Bildverarbeitungssystem zur Bewegungskorrektur in Echtzeit',
          'Arbeitet in unterschiedlichen Produktionsumgebungen ohne Umruestung',
          'Individuelle Programmierung pro Prozess - wir konfigurieren, nehmen in Betrieb und warten',
          'Einsetzbar in Fertigung, Logistik und Qualitaetskontrolle',
        ],
      },
      {
        name: 'Intelligente 6-Achs-Roboterarme',
        desc: 'Sechs Bewegungsfreiheitsgrade fuer komplexe Aufgaben auf begrenztem Produktionsraum. Kompakt und einfach zu integrieren - Praezision und Geschwindigkeit ueberall dort, wo die Stellflaeche knapp ist. Als deckenmontierte Variante erhaeltlich.',
        specs: [
          { label: 'Freiheitsgrade' },
          { label: 'Wiederholgenauigkeit', value: 'Hoch' },
          { label: 'Traglast', value: 'Hoch (Spezifikation auf Anfrage)' },
          { label: 'Montageoptionen', value: 'Boden / Decke' },
        ],
        points: [
          'Hohe Wiederholgenauigkeit fuer Praezisionsaufgaben',
          'Hohe zulaessige Traglast',
          'Deckenmontierte Version verfuegbar - spart Stellflaeche',
          'Anwendungen: Montage, Verpackung, Schweissen, Qualitaetskontrolle',
        ],
      },
    ],
    servicesHeading: {
      eyebrow: 'Leistungskategorien',
      title: 'Sechs Wege, Ihre Anlage zu automatisieren',
      desc: 'Jedes System wird nach Kundenauftrag gebaut - abgestimmt auf den Prozess, die Anlage und die Integrationsanforderungen.',
    },
    services: [
      {
        badge: 'AUF BESTELLUNG',
        name: 'Kollaborative Roboter (Cobots)',
        tagline: 'Menschen unterstuetzen, automatisieren, zuliefern, montieren, transportieren',
        desc: 'Unsere Cobots arbeiten Seite an Seite mit menschlichen Bedienern - in zertifizierten Konfigurationen ohne Schutzzaun. Sie uebernehmen repetitive, ergonomisch anspruchsvolle oder praezise Aufgaben, waehrend sich die Menschen auf Beurteilung und Qualitaetskontrolle konzentrieren. Programmiert in Python, C++ und ROS, abgestimmt auf Ihren Prozess.',
        points: [
          'Unterstuetzen menschliche Mitarbeiter an gemeinsamen Arbeitsplaetzen',
          'Automatisieren repetitive oder ergonomisch anspruchsvolle Aufgaben',
          'Versorgen die Produktionslinie mit Komponenten und Material',
        ],
      },
      {
        badge: 'AUF BESTELLUNG',
        name: 'Autonome Gabelstapler',
        tagline: 'Transportieren, heben, scannen, lokalisieren, Hindernissen ausweichen',
        desc: 'Unsere autonomen Gabelstapler bewaeltigen die innerbetriebliche Logistik rund um die Uhr - sie nehmen Paletten oder Lasten auf, transportieren sie durch die Anlage und setzen sie am Zielort ab, ohne Fahrer. SLAM-Navigation: keine Bodenmarkierungen oder Infrastrukturaenderungen erforderlich. WMS/ERP-Integration serienmaessig.',
        points: [
          'Transportieren Paletten und Lasten autonom durch die Anlage',
          'Heben und platzieren Lasten am Zielort ohne Fahrer',
          'Scannen Barcodes und QR-Codes zur Lastidentifikation',
        ],
      },
      {
        badge: 'AUF BESTELLUNG',
        name: 'AMR-Plattform',
        tagline: 'Einfahren, heben, tragen, navigieren, ausweichen, ausliefern',
        desc: 'Die ICB AMR-Plattform ist ein konfigurierbarer autonomer mobiler Roboter fuer den Transport in der Anlage. Die Basisplattform navigiert autonom per LiDAR-SLAM; Aufgabenmodule (Foerderband-Aufsatz, Regal, Rollen, kundenspezifische Vorrichtung) werden getauscht, ohne die Plattform zu aendern. Traglast: 100-600 kg je nach Chassisvariante.',
        points: [
          'Fahren in schmale Gaenge ein und heben autonom',
          'Heben und tragen Lasten bis 600 kg',
          'Navigieren dynamisch und leiten in Echtzeit um Hindernisse um',
        ],
      },
      {
        badge: 'AUF BESTELLUNG',
        name: 'Leitstand',
        tagline: 'Ueberwachen, analysieren, alarmieren, reagieren, absichern, berichten',
        desc: 'Der ICB Leitstand ist eine uebergeordnete Softwareschicht, die Daten aus der gesamten Roboterflotte und der Anlage buendelt. Er ueberwacht den Betrieb in Echtzeit, erkennt Anomalien, loest Alarme aus, koordiniert Reaktionen und erstellt Compliance- und Produktivitaetsberichte.',
        points: [
          'Ueberwachen Flotten- und Anlagenbetrieb in Echtzeit',
          'Analysieren Produktions- und Logistikdaten auf Engpaesse',
          'Alarmieren Bediener automatisch bei Ausnahmen und Anomalien',
        ],
      },
      {
        badge: 'AUF BESTELLUNG',
        name: 'Autonome Produktion',
        tagline: 'Sortieren, verpacken, etikettieren, pruefen, bewegen, synchronisieren',
        desc: 'Autonome Produktionssysteme von ICB uebernehmen Aufgaben am Linienende und in der Nachbearbeitung ohne manuellen Eingriff. Bildverarbeitung und KI steuern den Ablauf; der Roboter passt sich Produktvariationen in Echtzeit an. Konzipiert fuer Verpackungs-, Etikettier- und Qualitaetskontrolllinien.',
        points: [
          'Sortieren Artikel nach Typ, Groesse oder Ziel mit KI-Bildverarbeitung',
          'Verpacken Produkte in Kartons, Trays oder Beutel',
          'Etikettieren Verpackungen praezise und pruefen die Etikettenplatzierung',
        ],
      },
      {
        badge: 'AUF BESTELLUNG',
        name: 'Produktionslinien',
        tagline: 'Optimieren, automatisieren, steuern, integrieren, ueberwachen, verbessern',
        desc: 'Wir planen und automatisieren komplette Produktionslinien - und integrieren Cobots, AMRs, Foerdertechnik und Steuerungssoftware zu einem einzigen orchestrierten System. Jede Linie wird auf den Prozess des Kunden zugeschnitten; wir testen sie in unserer eigenen Anlage vor der Auslieferung.',
        points: [
          'Optimieren den Produktionsfluss und verkuerzen Zykluszeiten',
          'Automatisieren zuvor manuelle Arbeitsplaetze',
          'Steuern die gesamte Linie ueber eine einheitliche SCADA-/MES-Oberflaeche',
        ],
      },
    ],
    casesHeading: {
      eyebrow: 'Fallstudien',
      title: 'Reale Einsaetze und Projekte',
      desc: 'Die Phasen entsprechen dem auf der urspruenglichen Website polcero.com veroeffentlichten Status.',
    },
    cases: [
      {
        sector: 'Bauwesen',
        stage: 'Konzept',
        title: 'Materialtransportroboter auf Baustellen',
        desc: 'Autonome Roboter fuer den Transport von Baumaterial - Ziegel, Hohlblocksteine, Fertigteile - ueber aktive Baustellen. In der Konzeptphase, mit Baufachwissen im Team.',
      },
      {
        sector: 'Bauwesen',
        stage: 'F&E',
        title: 'Drohnen und Roboter fuer die Baustelleninspektion',
        desc: 'Drohnen und mobile Roboter fuer Inspektion, Vermessung und Ueberwachung von Baustellen. Auf Basis einer Analyse des Baumarkts - in der F&E-Phase.',
      },
      {
        sector: 'Logistik',
        stage: 'Pilot',
        title: 'Autonomer Innentransport: AMR und Gabelstapler im Lager',
        desc: 'Autonomer Innentransport aus einer Kombination von AMR-Plattformen und autonomen Gabelstaplern in einer Lagerumgebung. Derzeit im Pilotbetrieb.',
      },
    ],
    sectorsHeading: {
      eyebrow: 'Branchen',
      title: 'Wo ICB-Roboter arbeiten',
      desc: 'ICB-Systeme kommen in Fertigung, Logistik und verwandten Industrien zum Einsatz - abgestimmt auf den jeweiligen Prozess und die Anlage.',
    },
    sectors: [
      { name: 'Fertigung', desc: 'Montage, Maschinenbeschickung, Innentransport, Inspektion und Palettierung auf Produktionslinien jeder Groesse.' },
      { name: 'Landwirtschaft', desc: 'Innentransport in landwirtschaftlichen Verarbeitungsbetrieben, Kuehlhaeusern und Packstationen.' },
      { name: 'Bauwesen', desc: 'Materialtransport auf Baustellen, Fertigteilmontage, Inspektion und repetitive Bauaufgaben.' },
      { name: 'Logistik & Lagerhaltung', desc: 'Palettenhandhabung, Be- und Entladen von Anhaengern, Ware-zur-Person-Kommissionierung und Feinsortierung.' },
      { name: 'Dienstleistungen', desc: 'Gastgewerbe, Gesundheitslogistik, Gebaeudedienste sowie Reinigungs- und Desinfektionsaufgaben.' },
      { name: 'Erneuerbare Energien', desc: 'Automatisierung von Komponentenfertigung und Montage fuer Hersteller im Bereich erneuerbarer Energien.' },
    ],
    processHeading: {
      eyebrow: 'So liefern wir',
      title: 'Projektlebenszyklus - nach Auftrag gefertigt',
      desc: 'Jeder ICB-Einsatz folgt einem vierstufigen Prozess, von der Dokumentation bis zur Inbetriebnahme vor Ort.',
    },
    process: [
      { title: 'Projektdokumentation', desc: 'Wir treffen uns mit dem Kunden, erfassen den Prozess und dokumentieren Anforderungen, Randbedingungen und Erfolgskriterien. Ergebnis: ein Machbarkeitsbericht und ein Konzeptvorschlag.' },
      { title: 'Teamprojekt', desc: 'Unser Engineering-Team entwirft das Roboter- oder AMR-System - mechanisch, elektrisch und softwareseitig - und stimmt das KI-Gehirn auf Kundendaten oder Prozesssimulationen ab.' },
      { title: 'Aufbau & Integration', desc: 'Fertigung und Montage in unserer eigenen Anlage. Vollstaendiger Werksabnahmetest (FAT) und Softwareintegration. EU-Konformitaetsdokumentation (CE, ISO, NIS2) wird vorbereitet.' },
      { title: 'Lieferung & Inbetriebnahme', desc: 'Installation vor Ort, Standortabnahmetest (SAT), Bedienerschulung und Uebergabe. Laufender Service im Rahmen unseres RaaS-/Service-Level-Agreements.' },
    ],
    aiBrain: {
      eyebrow: 'KI-Gehirn',
      title: 'Jeder ICB-Roboter laeuft auf dem POLCERO KI-Gehirn',
      desc: 'Alle ICB-Produkte werden von der Intelligenzschicht POLCERO AI Systems angetrieben: VLA-Modelle, Objekterkennung der YOLO-Klasse, SLAM-Navigation und Flottenmanagement. Dasselbe Gehirn wird auf Ihre Prozessdaten feinabgestimmt. Programmierung: Python, C++ und ROS.',
      ctaLabel: 'Mehr ueber AI Systems erfahren',
    },
    compliance: {
      eyebrow: 'Compliance & Sicherheit',
    },
  },
  'ai-systems': {
    stats: [
      { label: 'Steuerungslatenz am Edge' },
      { label: 'Feinabgestimmte Foundation-Modelle' },
      { label: 'Multimodale Wahrnehmung' },
      { label: 'Hybride Architektur' },
    ],
    servicesHeading: {
      eyebrow: 'Faehigkeiten',
      title: 'Die Intelligenzschicht',
      desc: 'Derselbe KI-Stack treibt jeden POLCERO-Geschaeftsbereich an. Die Roboterhardware kann Ihre eigene oder aus unserem Katalog sein - wir liefern das Gehirn.',
    },
    services: [
      {
        badge: 'FAEHIGKEIT',
        name: 'VLA-Feinabstimmung',
        tagline: 'Foundation-Modelle, angepasst an Ihre Aufgabe',
        desc: 'Offene VLA-Modelle (GR00T N1.7, π0, OpenVLA), feinabgestimmt auf Kundendaten. Eine Abstraktionsschicht erlaubt es uns, Basismodelle auszutauschen, ohne Ihre Aufgabenintelligenz neu zu trainieren.',
      },
      {
        badge: 'FAEHIGKEIT',
        name: 'Bildverarbeitung und Wahrnehmung',
        tagline: 'Szenenverstaendnis in Echtzeit',
        desc: 'Objekterkennung der YOLO-Klasse fuer Echtzeit-Objekterkennung, Tiefenkameras (RGB-D), LiDAR, multispektrale und thermische Bildgebung sowie ein VLM fuer Szenen- und Sprachverstaendnis.',
      },
      {
        badge: 'FAEHIGKEIT',
        name: 'Edge- + Cloud-Architektur',
        tagline: 'Steuerung unter 10 ms, Lernen in Cloud-Groesse',
        desc: 'Onboard-Edge-Inferenz fuer Steuerung unter 10 ms. Cloud fuer Trainingsupdates, Analysen und Flottenmanagement. Ein Daten-Schwungrad verbessert die Leistung kontinuierlich.',
      },
      {
        badge: 'FAEHIGKEIT',
        name: 'Klassische Steuerung, wo sie ausreicht',
        tagline: 'KI nur dort, wo sie sich lohnt',
        desc: 'PID-Regler fuer einfaches, repetitives Greifen und Schneiden - guenstiger, zuverlaessiger. KI reservieren wir fuer komplexe Wahrnehmung und Entscheidungen zum Szenenverstaendnis.',
      },
      {
        badge: 'FAEHIGKEIT',
        name: 'Flottenmanagement',
        tagline: 'Viele Roboter als ein System koordinieren',
        desc: 'Zentrale Ueberwachung einer gemischten Roboterflotte: Aufgabenverteilung, Telemetrie, Modell-Rollouts und Produktivitaetsberichte aus einer einzigen Steuerungsschicht.',
      },
    ],
    processHeading: {
      eyebrow: 'So arbeiten wir zusammen',
      title: 'Von Prozessdaten zum laufenden Gehirn',
      desc: 'Wir setzen Intelligenz in vier Schritten auf Ihre Hardware oder unsere auf.',
    },
    process: [
      { title: 'Daten & Scoping', desc: 'Wir erfassen die Aufgabe, sammeln oder simulieren Prozessdaten und definieren die Wahrnehmungs- und Steuerungsanforderungen.' },
      { title: 'Modellauswahl & Feinabstimmung', desc: 'Wir waehlen die richtigen VLA-/Vision-Modelle (oder klassische Steuerung) und stimmen sie hinter einer stabilen Abstraktionsschicht auf Ihre Daten ab.' },
      { title: 'Integration & Edge-Deployment', desc: 'Wir integrieren das Gehirn in den Roboter, bringen die Inferenz fuer latenzarme Steuerung an den Edge und validieren sie gegen die Abnahmekriterien.' },
      { title: 'Flottenbetrieb & Daten-Schwungrad', desc: 'Cloud-Analysen, Modellupdates und Flottenmanagement verbessern die Leistung auch nach dem Go-live weiter.' },
    ],
  },
  robots: {
    stats: [
      { label: 'Chassistypen (W4 · T6 · WL4 · Q4)' },
      { label: 'Energieeffizienz mit Raedern vs. mit Beinen' },
      { label: 'Gemeinsames KI-Gehirn ueber alle Bauformen' },
      { label: 'Standardisierte Aufgabenmodule' },
    ],
    servicesHeading: {
      eyebrow: 'Das modulare System',
      title: 'Eine Plattform, viele Roboter',
      desc: 'Ein gemeinsames KI-Gehirn, eine standardisierte Schnittstelle, austauschbare Chassis und Plug-and-play-Aufgabenmodule - fuer jeden Markt, auf Bestellung eingesetzt.',
    },
    services: [
      { badge: 'KERN', name: 'KI-Gehirn', tagline: 'Dieselbe Intelligenz auf jedem Chassis', desc: 'VLA- + YOLO-Modelle, feinabgestimmt auf Kundendaten. Edge-Inferenz und Cloud-Training. Dieselbe Intelligenzschicht passt sich an jedes Chassis und jeden Markt an.' },
      { badge: 'KERN', name: 'Plug-and-play-Schnittstelle', tagline: 'Ein Integrationspunkt fuer alle Kombinationen', desc: 'Ein standardisierter mechanischer und elektrischer Steckverbinder. Tauschen Sie Chassis oder Aufgabenmodule, ohne die Intelligenzschicht neu zu entwerfen - ein Integrationspunkt fuer alle Kombinationen.' },
      { badge: 'CHASSIS', name: 'Chassisfamilie', tagline: 'W4 · T6 · WL4 · Q4', desc: 'W4 (raederbasiert), T6 (kettenbasiert), WL4 (Rad-Bein), Q4 (beinbasiert). Raederbasierte Plattformen sind auf ebenem Boden rund 2,5-mal energieeffizienter als beinbasierte - abgestimmt auf Gelaende und Aufgabe.' },
      { badge: 'MODUL', name: 'Aufgabenmodule', tagline: 'Das richtige Werkzeug fuer die Aufgabe', desc: 'Soft-Greifer, Spruehe-/Fertigationskopf, Sensormast (RGB-D / multispektral / thermisch), Logistiktraeger, Fernmanipulator - stecken Sie das richtige Werkzeug fuer die Aufgabe ein.' },
      { badge: 'BAUFORM', name: 'Agrarroboter', tagline: 'Autonome Feldplattformen', desc: 'Autonome Feldplattformen fuer Pflanzung, Pflege, Praezisionsspruehung und selektive Ernte. Sensorfusion aus RGB-D + multispektral + thermisch zur Ueberwachung der Pflanzengesundheit.' },
      { badge: 'BAUFORM', name: 'Baustellenroboter', tagline: 'Autonomie von BIM bis Feld', desc: 'Layout von BIM bis Feld, Bohren, autonome Erdarbeiten, Inspektion gegen einen digitalen Zwilling. Durchgehend menschlich ueberwachte Autonomie.' },
      { badge: 'BAUFORM', name: 'Stationaere KI-Maschinen', tagline: 'Zellen und Arbeitsplaetze mit festem Arm', desc: 'Roboter mit festem Arm und intelligente Arbeitsplaetze fuer Inspektion, Qualitaetskontrolle, repetitive Montage und Materialhandhabung auf Produktionslinien.' },
    ],
    processHeading: {
      eyebrow: 'So liefern wir',
      title: 'Konfiguriert und nach Auftrag gefertigt',
      desc: 'Jeder Roboter wird aus der gemeinsamen Plattform zusammengesetzt und auf Ihren Prozess abgestimmt.',
    },
    process: [
      { title: 'Umfang & Konfiguration', desc: 'Wir erfassen die Aufgabe und waehlen das Chassis, die Aufgabenmodule und die Sensoren, die zu Gelaende und Aufgabe passen.' },
      { title: 'KI-Gehirn einpassen', desc: 'Die gemeinsame Intelligenzschicht wird auf Ihre Daten feinabgestimmt und ueber die standardisierte Schnittstelle integriert.' },
      { title: 'Aufbau & Validierung', desc: 'Montage und Test in unserer eigenen Anlage, mit einem Werksabnahmetest vor der Auslieferung.' },
      { title: 'Einsatz & Support', desc: 'Inbetriebnahme vor Ort, Bedienerschulung und laufender Service - Module und Chassis lassen sich tauschen, wenn sich die Anforderungen aendern.' },
    ],
    aiBrain: {
      eyebrow: 'KI-Gehirn',
      title: 'Jede Bauform laeuft auf dem POLCERO KI-Gehirn',
      desc: 'Die Robots-Plattform nutzt die gemeinsame Intelligenzschicht POLCERO AI Systems - VLA-Modelle, Bildverarbeitung der YOLO-Klasse, SLAM-Navigation und Flottenmanagement - feinabgestimmt auf Ihre Prozessdaten.',
      ctaLabel: 'Mehr ueber AI Systems erfahren',
    },
  },
  'farma-ai': {
    stats: [
      { label: 'Robot-as-a-Service, keine Investitionskosten' },
      { label: 'Chemieeinsatz vs. Flaechenspruehung' },
      { label: 'Genauigkeit der Saatplatzierung' },
      { label: 'Automatisierte Stufen des Anbauzyklus' },
    ],
    servicesHeading: {
      eyebrow: 'Der Anbauzyklus',
      title: 'Ein KI-Farmer-Gehirn, die gesamte Saison',
      desc: 'Eine Flotte autonomer Feldroboter, gesteuert vom uebergeordneten "KI-Farmer"-Gehirn - fuer grosse Gemuesebetriebe, geliefert als Robot-as-a-Service.',
    },
    services: [
      { badge: 'STUFE', name: 'Pflanzung', tagline: 'Praezises Verpflanzen und Direktsaat', desc: 'Praezises reihenweises Verpflanzen oder Direktsaat mit RTK-/SLAM-Navigation. Platzierungsgenauigkeit im Subzentimeterbereich auf dem Chassis POLCERO-W4.' },
      { badge: 'STUFE', name: 'Pflege - Jaeten und Vereinzeln', tagline: 'Kein Herbizid fuer erkannte Unkraeuter', desc: 'Unkrauterkennung per Computer Vision plus mechanisches oder thermisches Jaeten. Kein Herbizid fuer identifizierte Unkraeuter - nur gezielte Punktspruehung.' },
      { badge: 'STUFE', name: 'Punktspruehung / Mikrodosierung', tagline: 'Chemie nur dort, wo sie noetig ist', desc: 'Selektive Ausbringung von Duenger oder Pflanzenschutzmitteln nur dort, wo die KI Bedarf erkennt. Senkt den Chemieeinsatz gegenueber der Flaechenspruehung um bis zu 90 %.' },
      { badge: 'STUFE', name: 'Monitoring', tagline: 'Eine taegliche Karte der Pflanzengesundheit', desc: 'Taegliche Feldabtastung mit RGB-D- + multispektralen + thermischen Kameras. Karte der Pflanzengesundheit, Krankheitsfrueherkennung und Vorhersage der Erntereife.' },
      { badge: 'STUFE', name: 'Selektive Ernte', tagline: 'Die schwierigste ungeloeste Luecke in der Agrarautomatisierung', desc: 'Selektive Ernte empfindlicher Gemuesesorten (beginnend mit Salatkoepfen) - die schwierigste ungeloeste Luecke in der Agrarautomatisierung. Soft-Greifer plus KI-Reifegraderkennung.' },
    ],
    processHeading: {
      eyebrow: 'So arbeiten wir zusammen',
      title: 'Robot-as-a-Service, vom Feld her gedacht',
      desc: 'Wir uebernehmen die Flotte, den Betrieb und das Risiko - Sie erhalten das Ergebnis pro Hektar.',
    },
    process: [
      { title: 'Feldbewertung', desc: 'Wir begutachten Betrieb, Kulturen und Saison und vereinbaren die Zieloperationen sowie die Erfolgskennzahlen.' },
      { title: 'Einrichtung von Flotte & Gehirn', desc: 'Wir konfigurieren die Feldroboter und stimmen das KI-Farmer-Gehirn auf Kultur, Boden und Feldlayout ab.' },
      { title: 'Ueberwachter Betrieb', desc: 'Die Roboter durchlaufen den Anbauzyklus unter menschlich ueberwachter Autonomie; jeder Durchgang speist die Monitoring-Karte.' },
      { title: 'Saisonrueckblick & Skalierung', desc: 'Wir bewerten Ertrag, Einsparungen bei Betriebsmitteln und Verfuegbarkeit und skalieren dann die Flotte fuer die naechste Saison.' },
    ],
    aiBrain: {
      eyebrow: 'KI-Gehirn',
      title: 'Angetrieben vom POLCERO KI-Farmer-Gehirn',
      desc: 'Farma AI laeuft auf der Intelligenzschicht POLCERO AI Systems - Bildverarbeitung, Wahrnehmung und Flottenmanagement - spezialisiert auf die Landwirtschaft und feinabgestimmt auf Ihre Felder.',
      ctaLabel: 'Mehr ueber AI Systems erfahren',
    },
  },
  'photonic-processors': {
    stats: [
      { label: 'Latenz der optischen Matrixmultiplikation' },
      { label: 'Markt 2025-2034' },
      { label: 'CAGR' },
      { label: 'Erfasste Photonik-Computing-Unternehmen (2026)' },
    ],
    servicesHeading: {
      eyebrow: 'F&E-Richtung',
      title: 'KI-Berechnung mit Licht',
      desc: 'Eine Forschungsrichtung: die Beschleunigung der KI-Inferenz in unseren Robotern mit Licht statt allein mit Elektronik - geringerer Verbrauch, hoeherer Durchsatz.',
    },
    services: [
      { badge: 'F&E', name: 'Optische Matrixmultiplikation', tagline: 'Ein optischer Durchlauf statt Tausender Taktzyklen', desc: 'Die Inferenz neuronaler Netze wird von der Matrix-Vektor-Multiplikation (GEMM) dominiert. Photonische Chips fuehren sie mit Licht durch, das durch Netze von Mach-Zehnder-Interferometern laeuft - und erledigen in einem einzigen optischen Durchlauf, wofuer Elektronik Tausende Taktzyklen benoetigt.' },
      { badge: 'F&E', name: 'Hybride photonisch-elektronische Architektur', tagline: 'Optische Rechenoperationen, elektronische Aktivierungen', desc: 'Photonische Chips brillieren bei linearen Operationen (Matrixrechnen), aber nicht bei nichtlinearen (Aktivierungsfunktionen). Die Konsensarchitektur kombiniert optische Kerne fuer das Matrixrechnen mit elektronischen Einheiten fuer Aktivierungen - ein hybrides Design, das das Beste aus beiden nutzt.' },
      { badge: 'MARKT', name: 'Von 1,8 Mrd. $ auf 14,6 Mrd. $', tagline: 'Ein schnell wachsender Beschleunigermarkt', desc: 'Der globale Markt fuer photonische KI-Beschleuniger, 2025 bis 2034 (CAGR 26,3 %). Stand 2026 erfassen wir 52 Photonik-Computing-Unternehmen weltweit.' },
      { badge: 'STRATEGIE', name: 'Photonik als kuenftige Rechenschicht', tagline: 'Das Substrat tauschen, die Intelligenz behalten', desc: 'Sobald photonische Beschleuniger die Reife erreichen (ein Zeitfenster von 2027-2031 fuer Produkte der Rechenzentrumsklasse), ist die Architektur des POLCERO KI-Gehirns darauf ausgelegt, sie zu integrieren - die Abstraktionsschicht erlaubt es uns, das Rechensubstrat zu tauschen, ohne die Aufgabenintelligenz neu zu trainieren.' },
    ],
  },
};
