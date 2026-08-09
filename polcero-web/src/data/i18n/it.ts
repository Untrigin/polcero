import type { SiteContentOverride } from './overrides';

export const it: SiteContentOverride = {
  tagline: 'Robot modulari autonomi per l\'industria e l\'agricoltura',
  nav: {
    products: 'Prodotti',
    solutions: 'Soluzioni',
    services: 'Divisioni',
    industries: 'Settori',
    useCases: 'Casi d\'uso',
    company: 'Azienda',
    news: 'Novità',
    contact: 'Contatti',
    cta: 'Parliamone',
  },
  services: {
    eyebrow: 'DIVISIONI DI BUSINESS',
    h2: [
      { text: 'Cinque divisioni, ', weight: 300 },
      { text: 'un solo cervello AI', weight: 700 },
    ],
    lead: 'Dai cobot pronti all\'uso alla fotonica in laboratorio - ogni divisione si basa sullo stesso livello di intelligenza POLCERO.',
    cta: 'Scopri le divisioni',
    all: 'Tutte le divisioni',
  },
  branches: [
    {
      tagline: 'Cobot industriali e AMR',
      desc: 'Robot collaborativi industriali, carrelli elevatori autonomi e piattaforme AMR - progettati e consegnati su misura.',
      intro: 'I robot esistono già - ciò che manca sono i sistemi che li controllano. Costruiamo questo livello mancante: installiamo nella macchina la conoscenza, un piano e gli "occhi" (telecamere, sensori), la colleghiamo all\'AI e la rendiamo capace di lavorare da sola - senza operatore e senza supervisione costante. ICB Robots è la divisione operativa già attiva di POLCERO: progettiamo, costruiamo e implementiamo cobot, carrelli elevatori autonomi, piattaforme AMR e sistemi di produzione automatizzati.',
      points: ['Robot collaborativi (cobot)', 'Carrelli elevatori autonomi', 'Piattaforme AMR', 'Centro di controllo', 'Produzione autonoma', 'Linee di produzione'],
      note: 'Divisione attiva · esperienza del team dal 1980',
      sections: [
        { title: 'Cobot', desc: 'Assistono le persone, automatizzano, alimentano, assemblano e trasportano.' },
        { title: 'Carrelli elevatori autonomi', desc: 'Trasportano, sollevano, scansionano, localizzano ed evitano gli ostacoli.' },
        { title: 'Piattaforma AMR', desc: 'Entra, solleva, trasporta, naviga, evita e consegna.' },
        { title: 'Centro di controllo', desc: 'Monitora, analizza, allerta, reagisce, protegge e rendiconta.' },
        { title: 'Produzione autonoma', desc: 'Smista, imballa, etichetta, controlla, sposta e sincronizza.' },
        { title: 'Linee di produzione', desc: 'Ottimizza, automatizza, controlla, integra, monitora e migliora.' },
        { title: 'Il cervello AI POLCERO in ogni robot', desc: 'Ogni prodotto ICB è alimentato dal livello di intelligenza POLCERO AI Systems: modelli VLA, rilevamento di classe YOLO, navigazione SLAM e gestione della flotta. Lo stesso cervello viene affinato sui dati del tuo processo. Programmazione: Python, C++ e ROS.' },
      ],
    },
    {
      tagline: 'Il cervello AI per qualsiasi robot',
      desc: 'Costruiamo il livello di intelligenza per robot umanoidi e specializzati: percezione, pianificazione, autonomia, gestione della flotta.',
      intro: 'POLCERO costruisce un livello di intelligenza AI - percezione, pianificazione, controllo e gestione della flotta - per robot umanoidi e specializzati. Lo stesso stack AI serve tutte le divisioni POLCERO: modelli VLA affinati, visione YOLO, architettura edge+cloud e un volano di dati. L\'hardware del robot può essere quello del cliente o scelto dal nostro catalogo; noi forniamo l\'intelligenza.',
      points: ['Affinamento dei modelli VLA', 'Visione e percezione', 'Architettura edge + cloud', 'Controllo classico dove è sufficiente', 'Gestione della flotta'],
      sections: [
        { title: 'Affinamento VLA', desc: 'Modelli VLA aperti (GR00T N1.7, π0, OpenVLA) affinati sui dati del cliente. Un livello di astrazione consente di sostituire i modelli di base senza riaddestrare l\'intelligenza dei compiti.' },
        { title: 'Visione e percezione', desc: 'Rilevamento di classe YOLO per il riconoscimento degli oggetti in tempo reale, telecamere di profondità (RGB-D), LiDAR, imaging multispettrale e termico, oltre a un VLM per la comprensione della scena e del linguaggio.' },
        { title: 'Architettura edge + cloud', desc: 'Inferenza edge a bordo per un controllo con latenza inferiore a 10 ms. Cloud per gli aggiornamenti dei modelli, l\'analitica e la gestione della flotta. Un volano di dati migliora costantemente le prestazioni.' },
        { title: 'Controllo classico dove è sufficiente', desc: 'Regolatori PID per operazioni di presa e taglio semplici e ripetitive - costo inferiore e affidabilità maggiore. Riserviamo l\'AI alla percezione complessa e alle decisioni sulla scena.' },
      ],
    },
    {
      tagline: 'Piattaforma + robot specializzati',
      desc: 'La piattaforma modulare POLCERO e un catalogo di robot che implementiamo con il nostro cervello AI - per qualsiasi mercato, su misura.',
      intro: 'La divisione Robots è la piattaforma modulare al centro di tutto ciò che costruiamo - un cervello AI condiviso, un\'interfaccia standardizzata, telai intercambiabili e moduli di lavoro plug-and-play. Implementiamo anche robot del catalogo dei nostri partner, applicandovi il nostro cervello AI per qualsiasi mercato.',
      points: ['Cervello AI', 'Interfaccia plug-and-play', 'Famiglia di telai', 'Moduli di lavoro', 'Robot agricoli', 'Robot per cantieri', 'Macchine AI stazionarie'],
      sections: [
        { title: 'Cervello AI', desc: 'Modelli VLA + YOLO affinati sui dati del cliente. Inferenza edge e addestramento in cloud. Lo stesso livello di intelligenza si adatta a ogni telaio e a ogni mercato.' },
        { title: 'Interfaccia plug-and-play', desc: 'Un connettore meccanico ed elettrico standardizzato. Sostituisci telaio o modulo di lavoro senza riprogettare il livello di intelligenza - un unico punto di integrazione per tutte le combinazioni.' },
        { title: 'Famiglia di telai', desc: 'W4 (a ruote), T6 (cingolato), WL4 (ruota-gamba), Q4 (a zampe). Le piattaforme a ruote sono circa 2,5 volte più efficienti dal punto di vista energetico rispetto a quelle a zampe su terreno piano - abbinate al terreno e al compito.' },
        { title: 'Moduli di lavoro', desc: 'Pinza morbida, testa di irrorazione/fertirrigazione, albero sensori (RGB-D / multispettrale / termico), portatore logistico, manipolatore remoto - collega lo strumento giusto per il compito.' },
        { title: 'Robot agricoli', desc: 'Piattaforme di campo autonome per semina, cura, irrorazione di precisione e raccolta selettiva. Fusione di sensori RGB-D + multispettrale + termico per il monitoraggio dello stato delle colture.' },
        { title: 'Robot per cantieri', desc: 'Tracciamento dal modello BIM sul campo, foratura, movimento terra autonomo, ispezione e confronto con il gemello digitale. Autonomia supervisionata dall\'uomo in ogni fase.' },
        { title: 'Macchine AI stazionarie', desc: 'Robot a braccio fisso e postazioni di lavoro intelligenti per ispezione, controllo qualità, assemblaggio ripetitivo e movimentazione dei materiali sulle linee di produzione.' },
      ],
    },
    {
      tagline: 'AI agricola + robot da campo',
      desc: 'Flotta di robot da campo autonomi con il cervello AI-agronomo: semina, cura, raccolta selettiva - modello RaaS (robot come servizio).',
      intro: 'Farma AI è la divisione agricola di POLCERO: una flotta di robot da campo autonomi guidata dal cervello supervisore "AI-agronomo" per l\'intero ciclo colturale - semina, cura (diserbo, irrorazione mirata), monitoraggio e raccolta selettiva di ortaggi delicati. Pensata per le grandi aziende orticole, erogata come Robot-as-a-Service (RaaS) - senza spese in conto capitale.',
      points: ['Semina', 'Cura - diserbo e diradamento', 'Irrorazione mirata / microdosaggio', 'Monitoraggio', 'Raccolta selettiva'],
      sections: [
        { title: 'Semina', desc: 'Trapianto di precisione fila per fila o semina diretta con navigazione RTK/SLAM. Precisione di posizionamento inferiore al centimetro sul telaio POLCERO-W4.' },
        { title: 'Cura - diserbo e diradamento', desc: 'Rilevamento delle erbe infestanti con visione artificiale e diserbo meccanico o termico. Nessun erbicida per le infestanti individuate - solo irrorazione mirata.' },
        { title: 'Irrorazione mirata / microdosaggio', desc: 'Applicazione selettiva di fertilizzante o prodotti fitosanitari solo dove l\'AI ne rileva la necessità. Riduce l\'uso di prodotti chimici fino al 90% rispetto all\'irrorazione totale.' },
        { title: 'Monitoraggio', desc: 'Scansione quotidiana del campo con telecamere RGB-D + multispettrali + termiche. Mappa dello stato delle colture, allerta precoce delle malattie e previsione della maturazione.' },
        { title: 'Raccolta selettiva', desc: 'Raccolta selettiva di ortaggi delicati (a partire dai cespi di lattuga) - la più difficile lacuna irrisolta nell\'automazione agricola. Pinza morbida e rilevamento della maturità tramite AI.' },
      ],
    },
    {
      tagline: 'Calcolo AI con la luce',
      desc: 'Direzione R&S: calcolo fotonico per accelerare l\'inferenza AI nei nostri robot - meno consumo, maggiore throughput.',
      intro: 'Photonic Processors è la direzione di R&S di POLCERO: accelerare l\'inferenza AI nei nostri robot usando la luce anziché la sola elettronica. La moltiplicazione ottica di matrici - l\'operazione fondamentale nelle reti neurali - può essere eseguita in un singolo passaggio ottico attraverso un chip fotonico, offrendo una latenza sub-nanosecondo e un consumo energetico per operazione inferiore di ordini di grandezza rispetto ai chip GPU/ASIC.',
      points: ['Moltiplicazione ottica di matrici', 'Architettura ibrida fotonico-elettronica', 'Mercato: da 1,8 a 14,6 miliardi di EUR', 'La fotonica come futuro livello di calcolo'],
      sections: [
        { title: 'Moltiplicazione ottica di matrici', desc: 'L\'inferenza delle reti neurali è dominata dalla moltiplicazione matrice-vettore (GEMM). I chip fotonici la eseguono con la luce che attraversa reticoli di interferometri di Mach-Zehnder - in un singolo passaggio fanno ciò che l\'elettronica calcola in migliaia di cicli di clock.' },
        { title: 'Architettura ibrida fotonico-elettronica', desc: 'I chip fotonici eccellono nelle operazioni lineari (matematica delle matrici) ma non in quelle non lineari (funzioni di attivazione). L\'architettura consensuale abbina core ottici per la matematica delle matrici a unità elettroniche per le attivazioni - un progetto ibrido che prende il meglio di entrambi.' },
        { title: 'Mercato: da 1,8 a 14,6 miliardi di EUR', desc: 'Il mercato globale degli acceleratori AI fotonici, dal 2025 al 2034 (CAGR 26,3%). Al 2026 monitoriamo 52 aziende di calcolo fotonico nel mondo.' },
        { title: 'La fotonica come futuro livello di calcolo', desc: 'Quando gli acceleratori fotonici raggiungeranno la maturità (una finestra 2027-2031 per i prodotti di classe datacenter), l\'architettura del cervello AI POLCERO è pronta ad assorbirli - il livello di astrazione consente di sostituire il substrato di calcolo senza riaddestrare l\'intelligenza dei compiti.' },
      ],
    },
  ],
  hero: {
    eyebrow: 'ROBOT MODULARI · POLONIA',
    h1: [
      { text: 'Robot ', weight: 300 },
      { text: 'modulari', weight: 700 },
      { text: ' autonomi', weight: 300 },
    ],
    subhead: 'Non costruiamo un solo robot. Costruiamo un ecosistema che ha senso solo insieme.',
    h2: [
      { text: 'Una piattaforma, ', weight: 300 },
      { text: 'moduli intercambiabili', weight: 700 },
      { text: ', qualsiasi compito.', weight: 300 },
    ],
    body: 'POLCERO unisce tre livelli: una piattaforma AI che pianifica e supervisiona il lavoro, il trasporto che porta il robot sul posto e un robot modulare che sceglie da solo il proprio telaio e il modulo di lavoro per il compito che incontra. Assegni un obiettivo, non un movimento.',
    ctaPrimary: 'Parliamo dell\'implementazione',
    ctaSecondary: 'Guarda la piattaforma',
    imageAlt: 'Robot modulare POLCERO su una piattaforma mobile in un capannone di produzione',
  },
  stats: [
    { label: 'portata del drone da trasporto' },
    { label: 'mercato globale della robotica entro il 2030' },
    { label: 'costo di raccolta per unità inferiore' },
    { label: 'prime implementazioni presso i clienti' },
  ],
  platform: {
    h2: [
      { text: 'Un cervello che ', weight: 300 },
      { text: 'assegna un obiettivo', weight: 700 },
      { text: ' - non un movimento preprogrammato.', weight: 300 },
    ],
    body: 'La piattaforma AI riceve il compito, ne pianifica l\'esecuzione, supervisiona lo svolgimento e documenta il risultato. Il robot impara per dimostrazione - un operatore esegue il compito, il sistema comprende e agisce in autonomia, senza programmazione complessa. I modelli possono funzionare localmente, sul dispositivo, senza inviare immagini all\'esterno.',
    cta: 'Come funziona la piattaforma',
    layers: [
      { title: 'Livello AI', body: 'Pianificazione, supervisione e documentazione dei compiti. I dati e la conformità restano nell\'Unione Europea.' },
      { title: 'Livello di trasporto', body: 'Un drone da trasporto porta il robot dove l\'accesso è costoso o impossibile - in futuro, i robot stessi.' },
      { title: 'Robot modulare', body: 'Un modulo centrale condiviso, telaio e moduli di lavoro intercambiabili. Interpreta la situazione e sceglie da solo lo strumento.' },
    ],
  },
  tabs: {
    h2: [
      { text: 'Dove ', weight: 300 },
      { text: 'lavora POLCERO', weight: 700 },
    ],
    items: [
      {
        label: 'Industria',
        title: 'Il robot raggiunge la postazione - non è fissato a essa',
        body: 'Un umanoide su una piattaforma mobile entra in un capannone progettato per le persone senza ricostruirlo. Arriva dove arriva un lavoratore, serve più postazioni invece di restare fermo a una sola ed esegue due operazioni in un unico ciclo.',
        alt: 'Robot umanoide POLCERO che opera a una postazione di assemblaggio in un capannone',
      },
      {
        label: 'Agricoltura',
        title: 'Manipolazione selettiva dove la raccolta di massa fallisce',
        body: 'Un robot con un modulo di lavoro agricolo raccoglie ortaggi in serre, tunnel e campi e, quando serve, sostituisce la pinza con un laser per il diserbo. Lavora dove il segnale satellitare non arriva.',
        alt: 'Robot POLCERO che lavora tra le file di coltura in un tunnel di plastica',
      },
      {
        label: 'Logistica',
        title: 'Trasporto dove finisce la strada',
        body: 'Un drone da trasporto consegna parti, materiali e i robot stessi in terreni montuosi, cantieri privi di strade asfaltate e zone isolate dopo un guasto o un\'alluvione. L\'anello mancante del modello di noleggio a ore.',
        alt: 'Drone da trasporto POLCERO che trasporta un carico su un terreno di difficile accesso',
      },
    ],
  },
  overview: {
    h2: [
      { text: 'Una piattaforma in ', weight: 300 },
      { text: 'molte configurazioni', weight: 700 },
    ],
    lead: 'Non costruiamo una macchina diversa per ogni compito. Costruiamo un unico modulo centrale, lo montiamo sul telaio scelto e lo equipaggiamo con un modulo di lavoro - la stessa macchina, con uno strumento e un programma diversi, gestisce un compito diverso.',
  },
  cards: {
    eyebrow: 'DISPONIBILI SU MISURA',
    h2: [
      { text: 'Robot costruiti ', weight: 300 },
      { text: 'sul processo del cliente', weight: 700 },
    ],
  },
  mission: {
    h2: [
      { text: 'Ogni implementazione successiva ', weight: 300 },
      { text: 'più economica e più rapida', weight: 700 },
      { text: ' della precedente', weight: 300 },
    ],
    body: 'Il modulo centrale condiviso è riutilizzabile e i dati delle implementazioni precedenti accorciano l\'addestramento dei modelli. È questo il nostro principale criterio di successo - il percorso da azienda di progetti a produttore di robot.',
    imageAlt: 'Una flotta di robot autonomi POLCERO in un moderno stabilimento produttivo',
  },
  closing: {
    h2: [
      { text: 'Vendiamo il ', weight: 300 },
      { text: 'risultato', weight: 700 },
      { text: ', non la macchina.', weight: 300 },
    ],
    body: 'Ci facciamo pagare per gli ettari raccolti, il volume gestito e le scadenze rispettate. Ci assumiamo il rischio tecnico, perché rispondiamo della tecnologia. Parliamo del tuo processo.',
    cta: 'Parliamone',
  },
  footer: {
    tagline: 'Robot modulari autonomi per l\'industria e l\'agricoltura. Progettati, costruiti e assistiti in Polonia.',
    columns: [
      {
        title: 'Prodotti',
        links: [
          { label: 'Umanoide' },
          { label: 'Umanoide su piattaforma mobile' },
          { label: 'Robot specializzati' },
          { label: 'Drone da trasporto' },
          { label: 'Specifiche' },
        ],
      },
      {
        title: 'Settori',
        links: [
          { label: 'Industria' },
          { label: 'Agricoltura' },
          { label: 'Edilizia' },
          { label: 'Logistica' },
          { label: 'Settore pubblico' },
        ],
      },
      {
        title: 'Azienda',
        links: [
          { label: 'Divisioni' },
          { label: 'Chi siamo' },
          { label: 'Novità' },
          { label: 'Contatti' },
        ],
      },
      {
        title: 'Risorse',
        links: [
          { label: 'Piattaforma POLCERO OS' },
          { label: 'Chi siamo (PDF)' },
          { label: 'RSS' },
        ],
      },
    ],
    legal: 'Informativa sulla privacy',
    rights: 'Tutti i diritti riservati.',
  },
  products: [
    {
      name: 'Umanoide', category: 'Umanoide',
      blurb: 'Il modulo centrale completato con gambe e due braccia. Entra in spazi progettati per le persone e utilizza macchine costruite per la movimentazione manuale.',
      subtitle: 'Lavora dove lavorano le persone',
      uses: ['Presidio di postazioni progettate per le persone', 'Assemblaggio e lavori fisici ripetitivi', 'Uso di macchine costruite per la movimentazione manuale', 'Assistenza domestica e pulizie (roadmap)'],
    },
    {
      name: 'Umanoide su piattaforma mobile', category: 'Umanoide',
      blurb: 'Lo stesso umanoide su una base mobile. Raggiunge la postazione e serve più punti invece di restare fermo a uno solo.',
      subtitle: 'Un robot, molte postazioni',
      uses: ['Servire più postazioni da un\'unica macchina', 'Colmare i vuoti tra le macchine in officina', 'Trasporto interno tra le postazioni', 'Due operazioni in un unico ciclo'],
    },
    {
      name: 'Robot specializzati', category: 'Robot specializzati',
      blurb: 'Lo stesso modulo centrale - controllo, AI e batterie sostituibili a caldo - sul telaio richiesto dal tuo terreno: a zampe, cingolato, a ruote o ruota-gamba. Sostituisci la piattaforma, mantieni il cervello e i moduli di lavoro.',
      subtitle: 'Un modulo centrale, quattro telai',
      uses: ['Ispezione e monitoraggio su terreni difficili', 'Pattugliamento di infrastrutture e impianti', 'Lavori in campo e trasporto su terreni non asfaltati', 'Lavori e trasporto di materiali in cantiere', 'Trasporto interno e monitoraggio sulle pavimentazioni'],
      platforms: [
        { name: 'Robot a zampe', drive: 'Telaio a zampe (4 zampe)', terrain: 'Scale, ostacoli, terreni sconnessi', blurb: 'Il modulo centrale su un telaio a zampe. Supera scale, cordoli e terreni che le ruote non affrontano.' },
        { name: 'Robot cingolato', drive: 'Telaio cingolato', terrain: 'Terreni non asfaltati e sconnessi, cantieri', blurb: 'Un telaio cingolato per terreni accidentati e sconnessi, cantieri e lavori in campo.' },
        { name: 'Robot a ruote', drive: 'Telaio a ruote', terrain: 'Pavimentazioni, magazzini, terreno piano', blurb: 'Un telaio a ruote veloce e silenzioso per pavimentazioni industriali, magazzini e monitoraggio.' },
        { name: 'Robot ruota-gamba', drive: 'Telaio ruota-gamba', terrain: 'Terreno piano, ostacoli e rotaie', blurb: 'Un telaio ibrido ruota-gamba: rotola sul piano e supera ostacoli e rotaie.' },
      ],
    },
    {
      name: 'Drone da trasporto', category: 'Drone da trasporto',
      blurb: 'Un drone da trasporto pesante per portare robot, moduli e carichi in luoghi di difficile accesso. Portiamo il robot dove l\'accesso è impossibile.',
      specs: [
        { label: 'Portata massima' },
        { label: 'Peso del drone' },
        { label: 'Costruzione', value: 'modulare' },
        { label: 'Trasporta', value: 'robot · moduli · carichi' },
      ],
      subtitle: 'Porta il robot dove non c\'è strada',
      uses: ['Consegna di robot, moduli e carichi in luoghi di difficile accesso', 'Consegne dopo un guasto o un\'alluvione', 'Trasporto in terreni montuosi e boschivi', 'Rifornimento di cantieri privi di strade'],
    },
    {
      name: 'POLCERO OS', category: 'Software',
      blurb: 'Il modulo centrale con il livello AI: controllo, percezione e pianificazione. Il robot impara per dimostrazione - un operatore esegue il compito, il sistema comprende e agisce in autonomia, riducendo i tempi di programmazione fino a dieci volte.',
      subtitle: 'Il cervello AI che impara per dimostrazione',
      price: 'Incluso nell\'implementazione',
      uses: ['Insegnare al robot tramite dimostrazione dell\'operatore', 'Pianificazione, supervisione e documentazione dei compiti', 'Gestione della flotta di robot', 'Funzionamento locale con dati nell\'UE'],
    },
  ],
  industries: [
    {
      name: 'Industria', blurb: 'Un umanoide su piattaforma mobile in capannoni progettati per le persone.',
      intro: 'Capannoni di produzione, postazioni, nastri trasportatori e altezze di lavoro sono progettati per le persone da decenni. Un robot con proporzioni umane entra in quell\'ambiente senza ricostruirlo - arriva dove arriva un lavoratore e utilizza macchine costruite per la movimentazione manuale. Il cliente non adatta lo stabilimento al robot, ma solo il robot allo stabilimento.',
      challenges: [
        { title: 'Carenza di manodopera', text: 'I lavori fisici e di pulizia ripetitivi sono sempre più difficili da coprire e il turnover continua a crescere.' },
        { title: 'Postazioni fisse', text: 'I robot industriali sono fissati a un unico punto e non riescono a stare al passo quando il processo cambia.' },
        { title: 'Ristrutturazioni costose', text: 'L\'automazione di solito richiede di riprogettare il capannone attorno alla macchina, alzando la barriera d\'ingresso.' },
        { title: 'Integrazione con le macchine esistenti', text: 'Un nuovo dispositivo deve funzionare con le macchine che il cliente già utilizza.' },
      ],
      approach: [
        { title: 'Il robot raggiunge la postazione', text: 'Un umanoide su piattaforma mobile serve più postazioni invece di restare fermo a una sola e colma i vuoti tra le macchine.' },
        { title: 'Due operazioni per ciclo', text: 'Una configurazione a doppio braccio con rotazione in vita aumenta la produttività della postazione nei lavori ripetitivi.' },
        { title: 'Implementazione chiavi in mano', text: 'Progettazione, costruzione, integrazione, messa in servizio, documentazione e assistenza - da 2 milioni di €, con valutazione di conformità.' },
      ],
    },
    {
      name: 'Agricoltura', blurb: 'Raccolta selettiva e cura in tunnel e serre.',
      intro: 'I grandi produttori di macchine agricole sono molto bravi nella raccolta di massa e nella navigazione in campo aperto. La manipolazione selettiva di colture morbide e delicate, e il lavoro in tunnel e serre dove il segnale satellitare non arriva, restano poco presidiati. Questo è il nostro ambito, e lo abbiamo scelto deliberatamente.',
      challenges: [
        { title: 'Carenza di manodopera stagionale', text: 'Una singola azienda agricola impiega da cento a centocinquanta persone nei periodi di punta - e ogni anno se ne trovano meno.' },
        { title: 'Costo del lavoro crescente', text: 'Il costo pieno di un lavoratore stagionale è oggi di circa 15.900 € al mese, ed è in aumento.' },
        { title: 'Pressione a ridurre la chimica', text: 'La cura e il diserbo devono diventare sempre più precisi e puntuali.' },
        { title: 'Una stagione breve', text: 'Un\'azienda agricola ha bisogno della macchina per sei mesi - non c\'è motivo di immobilizzare capitale per tutto l\'anno.' },
      ],
      approach: [
        { title: 'Un modulo di lavoro agricolo', text: 'Un robot con braccia e pinza raccoglie il prodotto e, quando serve, sostituisce lo strumento con un laser per il diserbo.' },
        { title: 'Pagamento a risultato', text: 'Puntiamo a 9-12 eurocent per unità contro 15-20 della raccolta manuale - circa il 40% in meno.' },
        { title: 'Funziona senza GPS', text: 'Raccolta selettiva e cura in tunnel e serre dove la navigazione satellitare non arriva.' },
      ],
    },
    {
      name: 'Edilizia', blurb: 'Ispezione, trasporto pesante e pattugliamento EHS - lavori umani che i robot possono assumere.',
      intro: 'In cantiere i robot assumono i lavori rischiosi o gravosi per le persone: ispezione e rilievo della realtà rispetto al modello BIM, tracciamento, trasporto pesante e pattugliamenti EHS. Un telaio cingolato affronta terreni non asfaltati e sconnessi, mentre il drone da trasporto integra i rifornimenti dall\'esterno.',
      challenges: [
        { title: 'Rischi per la sicurezza', text: 'Il lavoro in quota, in ambienti polverosi e in presenza di macchinari in movimento è pericoloso per le persone.' },
        { title: 'Divario BIM-realtà', text: 'Lo stato as-built si discosta dal modello e individuare le differenze richiede tempo.' },
        { title: 'Monitoraggio dell\'avanzamento ritardato', text: 'La documentazione dell\'avanzamento viene fatta di rado e a mano.' },
        { title: 'Terreni difficili e non asfaltati', text: 'L\'accesso e il trasporto dei materiali in un cantiere privo di strade è costoso.' },
      ],
      approach: [
        { title: 'Ispezione e rilievo della realtà vs BIM', text: 'Il robot rileva lo stato del cantiere e lo confronta con il modello, segnalando le differenze.' },
        { title: 'Trasporto su terreni difficili', text: 'Un telaio cingolato sposta i materiali tra le zone mentre il drone li porta dall\'esterno.' },
        { title: 'Pattugliamento EHS e monitoraggio', text: 'Giri regolari e documentazione senza mettere a rischio le persone, con i dati lato cliente.' },
      ],
    },
    {
      name: 'Logistica', blurb: 'Un drone da trasporto dove finisce la strada.',
      intro: 'Un robot vale quanto vale nel luogo in cui è necessario. Il livello di trasporto - con un drone che porta fino a 500 chilogrammi, un prototipo che già possediamo - consegna parti, materiali e i robot stessi dove l\'accesso è costoso, lento o impossibile.',
      challenges: [
        { title: 'Terreni di difficile accesso', text: 'Aree montuose e boschive, cantieri privi di strade asfaltate, zone isolate dopo un guasto o un\'alluvione.' },
        { title: 'Costo di flotta e autisti', text: 'Il mantenimento di veicoli e autisti, e la dipendenza da traffico e condizioni stradali, gravano su ogni servizio.' },
        { title: 'Scarico e pallettizzazione', text: 'Il trasporto interno ripetitivo e pesante in magazzino richiede ancora manodopera.' },
        { title: 'L\'ultimo miglio del robot', text: 'Il costo e il tempo per consegnare il robot decidono la convenienza del noleggio a ore.' },
      ],
      approach: [
        { title: 'Drone da trasporto', text: 'Consegna carichi, persone e robot dove finisce la strada - senza mantenere una flotta.' },
        { title: 'Cobot e piattaforme AMR', text: 'ICB Robots per scarico, picking e trasporto interno, consegnati su misura.' },
        { title: 'Robot consegnato in loco', text: 'L\'anello mancante del modello di noleggio a ore - il robot serve più clienti nello stesso giorno.' },
      ],
    },
    {
      name: 'Settore pubblico', blurb: 'Dati e conformità nell\'UE. Sul dispositivo, nessuna immagine inviata all\'esterno.',
      intro: 'Per molte istituzioni i dati provenienti da capannoni di produzione e infrastrutture sono informazioni sensibili. I nostri modelli possono funzionare localmente, sul dispositivo, senza inviare immagini all\'esterno. Con l\'aumento dei requisiti normativi, questo smette di essere un argomento tecnico e diventa una condizione d\'acquisto.',
      challenges: [
        { title: 'Requisiti normativi', text: 'Conformità e verificabilità sono una condizione della trattativa, non un\'aggiunta.' },
        { title: 'Sensibilità dei dati', text: 'Le immagini e i dati operativi non devono uscire dall\'organizzazione né dall\'Unione Europea.' },
        { title: 'Controllo della catena di fornitura', text: 'Le istituzioni pubbliche si aspettano una catena di fornitura trasparente ed europea.' },
        { title: 'Produzione nell\'UE', text: 'Il valore aggiunto - progettazione, software, assemblaggio e assistenza - dovrebbe essere creato in loco.' },
      ],
      approach: [
        { title: 'Modelli sul dispositivo', text: 'Percezione e inferenza funzionano localmente; i dati e la conformità restano nell\'Unione Europea.' },
        { title: 'Progettati e costruiti in Polonia', text: 'Uno stabilimento a Kietrz e fornitori polacchi per la maggior parte dei componenti - controllo sulla catena di fornitura.' },
        { title: 'Direzione fotonica (R&S)', text: 'Il calcolo fotonico accelera l\'inferenza AI con un consumo energetico inferiore.' },
      ],
    },
  ],
};
