import type { ProductRichOverride } from '../../productRich';

// ── Blocchi condivisi (tradotti una volta, riutilizzati) ─────────────────────
const batteryRobot = {
  title: 'Batteria e alimentazione',
  lead: `Ogni robot funziona con tre batterie hot-swap alloggiate nel modulo centrale. Ogni batteria è un'unità autonoma a 48 V, quindi la potenza cresce con il numero di batterie e una scarica si sostituisce senza attrezzi mentre il robot continua a lavorare con le altre.`,
  rows: [
    { label: 'Tensione batteria', value: '48 V hot-swap' },
    { label: 'Energia per batteria', value: '≈ 864 Wh ciascuna' },
    { label: 'Batterie nel modulo centrale', value: '3 (≈ 2.6 kWh in totale)' },
    { label: 'Autonomia a batteria', value: '≈ 5 h in uso tipico' },
    { label: 'Con alimentazione diretta', value: '24/7 (via cavo o rete)' },
    { label: 'Tempo di cambio', value: '< 60 s per batteria, senza attrezzi' },
  ],
};

const swapRobot = {
  title: 'Batterie auto-sostituibili — nessun fermo',
  lead: `Il robot non si spegne mai del tutto per ricaricarsi. Ruota le sue tre batterie una alla volta, funzionando con le due rimanenti mentre quella scarica si carica — così il turno non si ferma per la batteria.`,
  robot: {
    title: 'Il robot lo fa da solo',
    steps: [
      `Rilevando una batteria in esaurimento, il robot raggiunge la stazione di ricarica e mantiene lo stato sulle due batterie rimanenti.`,
      `Un braccio raggiunge il retro del modulo centrale, sblocca il gancio ed estrae la batteria scarica.`,
      `Colloca la batteria in un alloggiamento libero della stazione a 4 alloggiamenti e ne preleva una completamente carica al suo posto.`,
      `La batteria nuova si aggancia con uno scatto; il robot ripete il processo per ogni batteria a turno e torna al lavoro — mai spento, mai fermo.`,
    ],
  },
  human: {
    title: 'Una persona può farlo in pochi secondi',
    steps: [
      `Nessuno spegnimento e nessun attrezzo: le batterie sono sostituibili a caldo mentre il robot resta pronto.`,
      `Premi il gancio sul retro del modulo centrale ed estrai la batteria tirandola dritta fuori.`,
      `Fai scorrere una batteria carica finché si aggancia con uno scatto — il robot riprende esattamente da dove si era fermato.`,
    ],
  },
};

const statusRobot = {
  title: 'Stato della batteria e stazione di ricarica',
  lead: `Ogni batteria comunica il proprio stato, così il robot e i suoi operatori sanno sempre quando cambiarla. Una stazione di ricarica a 4 alloggiamenti tiene pronta una rotazione di batterie e il robot si aggancia per cambiare le proprie batterie durante il lavoro.`,
  points: [
    { title: 'Stato in tempo reale per batteria', text: 'Stato di carica, salute e temperatura di ciascuna delle tre batterie, in tempo reale.' },
    { title: 'Cambio predittivo', text: `Il sistema programma il cambio successivo prima che una batteria si esaurisca, così il lavoro non si interrompe mai a metà di un'operazione.` },
    { title: 'Stazione di ricarica a 4 alloggiamenti', text: 'Quattro ingressi di ricarica mantengono le batterie di riserva al massimo e pronte per la rotazione successiva.' },
    { title: 'Aggancio autonomo', text: 'Il robot ruota le proprie batterie alla stazione durante il turno — senza operatore e senza fermi.' },
  ],
};

const visionRobot = {
  title: 'Come vede il robot',
  lead: `Il robot costruisce un'unica immagine del mondo a partire da più viste contemporaneamente. Una testa binoculare ad ampio campo fornisce un'immagine sinistra e una destra; confrontandole si ottiene la profondità; su questo il livello di IA aggiunge una vista di percezione che nomina oggetti, superfici e persone.`,
  views: [
    { label: 'Sinistra', text: `L'occhio sinistro della testa binoculare — una vista a colori ad ampio campo della scena.` },
    { label: 'Destra', text: `L'occhio destro — la seconda vista a colori che il robot confronta con la sinistra.` },
    { label: 'Profondità', text: 'La disparità stereo tra sinistra e destra fornisce la distanza di ogni punto del fotogramma.' },
    { label: 'Percezione', text: 'Il livello di IA etichetta oggetti, superfici, ostacoli e persone e pianifica la mossa successiva direttamente sul dispositivo.' },
  ],
  extra: [
    { title: 'Telecamere ai polsi', text: `Telecamere HD su ogni polso offrono una vista ravvicinata per una presa e un assemblaggio precisi.` },
    { title: 'LiDAR + ultrasuoni', text: 'Il LiDAR del telaio e i sensori a ultrasuoni mappano lo spazio e intercettano gli ostacoli oltre le telecamere.' },
    { title: 'Forza e IMU', text: 'Giunti con feedback di forza e una IMU percepiscono il contatto e l\'equilibrio per un movimento sicuro e stabile.' },
    { title: 'Voce e linguaggio', text: `L'interazione vocale e un modello linguistico permettono a una persona di guidare il robot con parole comuni.` },
  ],
};

const powerRobot = {
  title: 'Due modi per alimentarlo: batterie o rete',
  lead: `Il robot è autonomo a batteria, ma dove un sito può fornire energia funziona direttamente dalla rete tramite un cavo — nessuna batteria da ruotare, nessun fermo, costi di esercizio più bassi.`,
  modes: [
    { name: 'Batterie hot-swap', text: 'Completamente mobile e autonomo. Tre batterie ruotano attraverso la stazione di ricarica, così il robot si sposta ovunque senza cavo.' },
    { name: 'Alimentazione diretta (cavo)', text: `Per una stazione fissa o un servizio 24/7, il robot preleva energia via cavo e funziona di continuo — le batterie diventano la riserva.` },
    { name: 'Infrastruttura di rete', text: `In capannoni, fabbriche e serre installiamo binari di alimentazione fissi; all'aperto, su campi e piazzali, linee aeree di conduttori come la catenaria del tram. Il robot preleva dalla linea e ricarica le batterie mentre lavora.` },
  ],
};

const R = { battery: batteryRobot, swap: swapRobot, status: statusRobot, vision: visionRobot, power: powerRobot };

export const it: Record<string, ProductRichOverride> = {
  humanoid: {
    ...R,
    application: {
      title: 'Tre umanoidi, un magazzino',
      body: `Ecco com'è un turno. In un'unica sala, un umanoide imballa un pacco al banco, un secondo solleva da terra un contenitore metallico carico e un terzo impila scatole su uno scaffale. Stesso robot, tre mansioni — ognuno è entrato in uno spazio costruito per le persone e ha assunto un lavoro pensato per mani umane, senza alcuna linea da ricostruire attorno a loro.`,
    },
  },
  'mobile-humanoid': {
    ...R,
    versions: {
      title: 'Due versioni di piattaforma',
      lead: `Lo stesso busto umanoide si monta sulla base mobile di cui hai bisogno — una base leggera e ripiegabile per il prelievo a livello del pavimento, o una base pesante per sollevare peso reale.`,
      items: [
        {
          name: 'V1 — base ripiegabile',
          blurb: `L'albero si ripiega nel punto centrale, così il robot si piega per raccogliere oggetti da terra con scarsa perdita di potenza. Le ruote alla base fanno ruotare l'intero robot sul posto, rendendolo agile in corsie strette e a basse altezze di prelievo.`,
          specs: [
            { label: 'Ideale per', value: 'Prelievo a livello del pavimento, corsie strette' },
            { label: 'Base', value: 'Albero ripiegabile, rotazione sul posto' },
            { label: 'Estensione', value: `Dal pavimento all'altezza di lavoro` },
          ],
        },
        {
          name: 'V2 — base pesante',
          blurb: `Una piattaforma mobile più robusta costruita per sollevare peso reale. Mantiene la parte superiore umanoide a doppio braccio, ma poggia su una base rigida ad alta portata per la movimentazione e l'assemblaggio di componenti industriali più pesanti.`,
          specs: [
            { label: 'Ideale per', value: 'Movimentazione pesante e assemblaggio' },
            { label: 'Base', value: 'Piattaforma rigida ad alta portata' },
            { label: 'Portata nominale', value: '≈ 7 kg per braccio' },
          ],
        },
      ],
    },
  },
  'specialized-robots': {
    ...R,
    vision: {
      ...visionRobot,
      extra: [
        { title: 'Albero di percezione', text: 'Su un telaio specializzato il modulo centrale porta un albero aggiuntivo di strumenti e telecamere per il compito in questione.' },
        { title: 'LiDAR + ultrasuoni', text: 'Il LiDAR del telaio e i sensori a ultrasuoni mappano il terreno accidentato e intercettano gli ostacoli oltre le telecamere.' },
        { title: 'Multispettrale / termico', text: 'Imaging multispettrale e termico opzionale per la salute delle colture, l\'ispezione e il lavoro notturno.' },
        { title: 'Calcolo sul dispositivo', text: 'Rilevamento e pianificazione vengono eseguiti sul dispositivo; dati e conformità restano nell\'UE.' },
      ],
    },
    robots: {
      title: 'La linea specializzata, robot per robot',
      lead: `Ognuno di questi è lo stesso modulo centrale — controllo, IA e batterie hot-swap — su un telaio diverso. Mantieni il cervello e i moduli di lavoro; cambia la piattaforma per adattarla al terreno. Aggiungi o togli braccia, una pinza, una testa di raccolta o un albero di sensori sul connettore a sgancio rapido.`,
      items: [
        {
          name: 'Robot con zampe',
          role: 'Scale, ostacoli, terreno irregolare',
          body: `Un telaio a quattro zampe che supera scale, cordoli e terreno accidentato che nessuna ruota può affrontare. Percorre percorsi di ispezione tra impianti, sottostazioni e siti progettati per le persone, non per le macchine.`,
          modify: `Aggiungi uno o due bracci con una pinza per la manipolazione, o un albero di sensori per l'ispezione. Passa a una base a ruote o cingolata quando il terreno diventa piano o soffice.`,
        },
        {
          name: 'Robot cingolato',
          role: 'Sterrato, terreno pesante, cantieri',
          body: `Un telaio cingolato per fango, macerie e terreno ripido e non asfaltato. Trasporta carichi attraverso un cantiere o un campo aperto dove le ruote si impantanano e le zampe sono troppo lente.`,
          modify: `Monta un vano di carico logistico per il trasporto pesante, un braccio per la movimentazione o un albero topografico per l'ispezione BIM. Lo stesso corpo passa a zampe o ruote quando cambia il lavoro.`,
        },
        {
          name: 'Robot su ruote',
          role: 'Pavimenti, magazzini, terreno piano',
          body: `Un telaio su ruote veloce e silenzioso per pavimenti industriali e magazzini — circa 2.5× più efficiente in energia rispetto alle zampe su terreno piano. Ideale per pattugliamento, monitoraggio e trasporto interno.`,
          modify: `Aggiungi braccia e una pinza per il pick-and-place, un albero di sensori per il monitoraggio o un vano di carico per il trasporto. Sposta il modulo centrale su una base cingolata per lasciare l'asfalto.`,
        },
        {
          name: 'Robot ruota-zampa',
          role: 'Terreno piano, ostacoli e binari',
          body: `Un telaio ibrido ruota-zampa: rotola veloce sul piano e, quando incontra un gradino, un cordolo o un binario, le zampe sollevano le ruote oltre l'ostacolo. Un'unica piattaforma per ambienti misti che altrimenti richiederebbero due robot.`,
          modify: `Braccia, pinza, testa di raccolta o albero di sensori si montano tutti sul connettore a sgancio rapido. Togli le zampe per una base a sole ruote, o rimettile quando il percorso si fa difficile.`,
        },
        {
          name: 'Braccio su piattaforma',
          role: 'Linee di produzione, macchine mobili, teste',
          body: `Il modulo centrale fissato in un unico punto — su una linea di produzione, o montato su una macchina in movimento o una testa. Su una testa di raccolta della lattuga, ad esempio, le braccia tagliano e depositano il raccolto direttamente sul nastro mentre la macchina avanza.`,
          modify: `Scegli uno o due bracci con una pinza, una lama o una testa di raccolta. Montalo fisso su una linea, o su qualsiasi macchina ospite che lo trasporti nel campo.`,
        },
        {
          name: 'Robot su binari',
          role: 'Serre, filari, percorsi fissi',
          body: `Una versione guidata su binari per serre e serre in vetro disposte in filari fissi. Percorre i binari dei tubi riscaldati tra le colture per una spruzzatura, un monitoraggio e una raccolta selettiva precisi e ripetibili.`,
          modify: `Aggiungi una testa di spruzzatura o fertirrigazione, un albero di sensori o una pinza morbida. Lo stesso modulo centrale si solleva dai binari su una base a ruote o ruota-zampa per il terreno aperto.`,
        },
      ],
    },
  },
  'transport-drone': {
    battery: {
      title: 'Batteria e alimentazione',
      lead: `Il drone da trasporto vola con la propria batteria di volo ad alta potenza e trasporta anche batterie hot-swap cariche per i robot che consegna, così arrivano con le batterie piene e spendono l'energia nel lavoro, non nel viaggio.`,
      rows: [
        { label: 'Batteria', value: 'Batteria di volo hot-swap' },
        { label: 'Energia della batteria', value: '≈ 30 kWh' },
        { label: 'Autonomia al carico utile massimo', value: '≈ 20 min' },
        { label: 'Ricambio', value: 'Hot-swap tra i voli' },
        { label: 'Trasporta anche', value: 'Batterie robot 48 V cariche' },
      ],
    },
    drone: {
      title: 'Il drone trasporta i robot',
      body: `Il nostro obiettivo è che il drone trasporti robot e umanoidi sulle distanze più lunghe, così i robot conservano l'energia per il compito invece di spenderla per arrivarci. Il drone trasporta anche moduli e telai intercambiabili, così un robot arriva potendo scegliere il modulo di lavoro e la piattaforma che il suo ambiente richiede.`,
      points: [
        'I robot raggiungono il sito con le batterie cariche e atterrano pronti a lavorare.',
        'Telai e moduli di lavoro intercambiabili viaggiano con il drone.',
        `Consegna dove finisce la strada — montagne, siti senza strade asfaltate, aree isolate dopo un'alluvione.`,
        'L\'anello mancante del modello di noleggio a ore: un robot serve più clienti nello stesso giorno.',
      ],
    },
  },
  'polcero-os': {
    vision: visionRobot,
  },
};
