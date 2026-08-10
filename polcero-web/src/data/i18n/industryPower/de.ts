import type { IndustryPower } from '../../industryPower';

export const de: Record<string, IndustryPower> = {
  industry: {
    eyebrow: 'STROMINFRASTRUKTUR',
    title: 'Netzstrom in der Produktionshalle',
    lead: 'Eine Halle hat überall Strom, daher muss ihn die Mehrzahl der Roboter nicht mittragen. Wir installieren feste Stromschienen entlang der Stationen und lassen Roboter direkt aus dem Netz laufen — Akkus werden zur Reserve für jene, die zwischen den Maschinen umherziehen.',
    modes: [
      { name: 'Feste Schienen an Stationen', text: 'Roboter, die an eine feste Station gebunden sind oder sie bedienen, beziehen Strom über eine Schiene und laufen 24/7 ohne einen einzigen Wechsel.' },
      { name: 'Hot-Swap für Mobile', text: 'Ein Humanoid, der zwischen den Maschinen wandert, trägt drei Hot-Swap-Pakete und lädt sie an einer Ladestation nach.' },
      { name: 'Eine Integration', text: 'Schienenstrom und Akkustrom nutzen dasselbe Kernmodul — schalten Sie einen Roboter ohne Umbau von kabelgebunden auf mobil um.' },
    ],
  },
  agriculture: {
    eyebrow: 'STROMINFRASTRUKTUR',
    title: 'Die gesamte autonome Farm mit Energie versorgen',
    lead: 'Farma AI versorgt das gesamte Anbau-Ökosystem aus dem Netz, wo es möglich ist. Gewächshäuser erhalten feste Stromschienen; offene Felder erhalten Oberleitungen wie eine Straßenbahn-Fahrleitung entlang der Reihen; Schienenroboter beziehen Strom direkt aus den beheizten Rohrschienen — Akkus füllen die Lücken, wo keine Leitung reicht.',
    modes: [
      { name: 'Feste Schienen in Gewächshäusern', text: 'Glashäuser und Tunnel betreiben Roboter über feste Schienen, sodass die Flotte über die Saison rund um die Uhr arbeitet.' },
      { name: 'Oberleitungen auf Feldern', text: 'Auf offenen Feldern spannen wir Oberleitungen entlang der Reihen; der Roboter bezieht Strom aus der Leitung und lädt seine Pakete während der Arbeit nach.' },
      { name: 'Akkus abseits des Netzes', text: 'Jenseits der Leitungen halten Hot-Swap-Pakete Feldroboter autonom — getauscht an einer solarbetriebenen Ladestation.' },
    ],
  },
  construction: {
    eyebrow: 'STROMINFRASTRUKTUR',
    title: 'Strom, wo es noch kein Netz gibt',
    lead: 'Eine Baustelle hat in den frühen Phasen selten feste Stromversorgung, daher stützen sich Bauroboter auf Akkus, während die Transportdrohne geladene Pakete in die entlegenen Winkel liefert. Wo Baustrom oder ein Generator verfügbar ist, laufen feste Stationen kabelgebunden.',
    modes: [
      { name: 'Hot-Swap im Feld', text: 'Ketten- und Laufroboter tragen drei Pakete und tauschen sie an einer mobilen Ladestation vor Ort.' },
      { name: 'Von der Drohne gelieferte Pakete', text: 'Die Transportdrohne setzt geladene Pakete ab und holt leere dort ab, wo die Straße nicht hinreicht.' },
      { name: 'Kabelgebunden an festen Punkten', text: 'Wo Baustrom oder ein Generator vorhanden ist, laufen Inspektions- und Handhabungsstationen durchgehend über ein Kabel.' },
    ],
  },
  logistics: {
    eyebrow: 'STROMINFRASTRUKTUR',
    title: 'Ladespuren im Lager, Pakete auf dem Hof',
    lead: 'Ein Lager hat durchgehend Strom, daher verlegen wir Ladespuren und feste Schienen für die drinnen arbeitenden Roboter; auf dem Hof und auf der Straße läuft die Flotte mit Hot-Swap-Paketen, und die Drohne bringt geladene Pakete zu entlegenen Abladepunkten.',
    modes: [
      { name: 'Ladespuren im Innenbereich', text: 'Roboter docken zwischen den Aufgaben entlang der Ladespuren an, sodass Kommissionierung und interner Transport nie für Strom pausieren.' },
      { name: 'Hot-Swap auf dem Hof', text: 'Außerhalb des Gebäudes tauschen Roboter mit drei Paketen ihre Akkus selbst an einer Hof-Ladestation.' },
      { name: 'Pakete zu entlegenen Abladepunkten', text: 'Die Transportdrohne liefert geladene Pakete zusammen mit dem Roboter, sodass er arbeitsbereit landet.' },
    ],
  },
  'public-sector': {
    eyebrow: 'STROMINFRASTRUKTUR',
    title: 'Strom vor Ort, Daten vor Ort',
    lead: 'Bei öffentlichen Installationen bleiben sowohl Strom als auch Daten vor Ort. Feste Infrastruktur läuft über Kabel oder Schiene aus dem lokalen Netz; mobile Inspektions- und Patrouillenroboter laufen mit Hot-Swap-Paketen — und wie die Modelle muss nichts das Gelände verlassen.',
    modes: [
      { name: 'Netz für feste Installationen', text: 'Stationäre Maschinen und Ladestationen laufen über Kabel oder feste Schiene aus dem Gebäudenetz.' },
      { name: 'Akkus für Patrouillen', text: 'Inspektions- und Patrouillenroboter bleiben autonom mit drei Hot-Swap-Paketen, getauscht an einer lokalen Station.' },
      { name: 'Alles bleibt lokal', text: 'Strom, Laden und Inferenz auf dem Gerät — alles vor Ort, ohne nach außen gesendete Abhängigkeit.' },
    ],
  },
};
