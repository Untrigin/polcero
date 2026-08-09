import type { RichBranch, DeepPartial } from '../../branchRich';

export const it: Record<string, DeepPartial<RichBranch>> = {
  'icb-robots': {
    stats: [
      { label: 'Attivi dal' },
      { label: 'Anni di esperienza' },
      { label: 'Settori industriali' },
      { label: 'Robotics-as-a-Service' },
    ],
    productsHeading: {
      eyebrow: 'Specifiche di prodotto',
      title: 'Dati reali dal catalogo ICB',
      desc: 'Specifiche pubblicate della linea di prodotti POLCERO / ICB Robots.',
    },
    products: [
      {
        name: 'Robot di assemblaggio e manipolazione di precisione controllato da IA',
        desc: 'Progettato per compiti complessi con elevata accuratezza. Controllato dal nostro software e dal sistema di visione IA, opera in diversi ambienti produttivi e corregge il proprio movimento in tempo reale. Lo programmiamo sul tuo processo, lo installiamo e ne curiamo l\'assistenza.',
        specs: [
          { label: 'Portata' },
          { label: 'Sbraccio' },
          { label: 'Ripetibilità' },
          { label: 'Temperatura di esercizio' },
          { label: 'Garanzia' },
          { label: 'Controllo' },
        ],
        points: [
          'Sistema di visione IA per la correzione del movimento in tempo reale',
          'Opera in diversi ambienti produttivi senza riattrezzaggio',
          'Programmazione personalizzata per ogni processo - configuriamo, installiamo e assistiamo',
          'Impiegabile in applicazioni di produzione, logistica e controllo qualità',
        ],
      },
      {
        name: 'Bracci robotici intelligenti a 6 assi',
        desc: 'Sei gradi di movimento per compiti complessi in spazi produttivi ridotti. Compatti e facili da integrare - precisione e velocità ovunque lo spazio a terra sia limitato. Disponibili nella variante a montaggio a soffitto.',
        specs: [
          { label: 'Gradi di libertà' },
          { label: 'Ripetibilità' },
          { label: 'Portata' },
          { label: 'Opzioni di montaggio' },
        ],
        points: [
          'Elevata ripetibilità per compiti di precisione',
          'Elevata capacità di carico ammessa',
          'Versione a montaggio a soffitto disponibile - fa risparmiare spazio a terra',
          'Applicazioni: assemblaggio, imballaggio, saldatura, controllo qualità',
        ],
      },
    ],
    servicesHeading: {
      eyebrow: 'Categorie di servizio',
      title: 'Sei modi per robotizzare il tuo impianto',
      desc: 'Ogni sistema è realizzato su ordinazione del cliente - adattato al processo, all\'impianto e ai requisiti di integrazione.',
    },
    services: [
      {
        name: 'Robot collaborativi (cobot)',
        tagline: 'Supportano le persone, automatizzano, riforniscono, assemblano, trasportano',
        desc: 'I nostri cobot lavorano al fianco degli operatori umani - senza necessità di gabbie di sicurezza nelle configurazioni certificate. Si occupano di compiti ripetitivi, ergonomicamente impegnativi o di precisione, mentre le persone si concentrano sul giudizio e sul controllo qualità. Programmati in Python, C++ e ROS, adattati al tuo processo.',
        points: [
          'Supportano i lavoratori umani nelle postazioni condivise',
          'Automatizzano compiti ripetitivi o ergonomicamente impegnativi',
          'Riforniscono componenti e materiali alla linea di produzione',
        ],
      },
      {
        name: 'Carrelli elevatori autonomi',
        tagline: 'Trasportano, sollevano, scansionano, localizzano, evitano gli ostacoli',
        desc: 'I nostri carrelli elevatori autonomi gestiscono la logistica interna 24/7 - prelevando pallet o carichi, trasportandoli attraverso lo stabilimento e depositandoli nel punto di destinazione senza conducente. Navigazione SLAM: nessun marcatore a terra o modifica dell\'infrastruttura richiesti. Integrazione WMS/ERP di serie.',
        points: [
          'Trasportano pallet e carichi in modo autonomo attraverso lo stabilimento',
          'Sollevano e depositano i carichi nei punti di destinazione senza conducente',
          'Scansionano codici a barre e codici QR per l\'identificazione del carico',
        ],
      },
      {
        name: 'Piattaforma AMR',
        tagline: 'Entrano, sollevano, trasportano, navigano, evitano, consegnano',
        desc: 'La Piattaforma AMR ICB è un robot mobile autonomo configurabile per il trasporto in stabilimento. La piattaforma base naviga in modo autonomo tramite SLAM LiDAR; i moduli operativi (piano a nastro, scaffale, a rulli, attrezzatura personalizzata) vengono sostituiti senza modificare la piattaforma. Portata: 100-600 kg a seconda della variante di telaio.',
        points: [
          'Entrano in corsie strette e sollevano in modo autonomo',
          'Sollevano e trasportano carichi fino a 600 kg',
          'Navigano dinamicamente, ricalcolando il percorso attorno agli ostacoli in tempo reale',
        ],
      },
      {
        name: 'Centro di controllo',
        tagline: 'Monitora, analizza, allerta, risponde, protegge, rendiconta',
        desc: 'Il Centro di controllo ICB è un livello software di supervisione che aggrega i dati provenienti dall\'intera flotta di robot e dallo stabilimento. Monitora le operazioni in tempo reale, rileva anomalie, attiva allerte, coordina le risposte e genera report di conformità e produttività.',
        points: [
          'Monitora in tempo reale le operazioni della flotta e dello stabilimento',
          'Analizza i dati di produzione e logistica per individuare i colli di bottiglia',
          'Allerta automaticamente gli operatori su eccezioni e anomalie',
        ],
      },
      {
        name: 'Produzione autonoma',
        tagline: 'Smista, imballa, etichetta, ispeziona, movimenta, sincronizza',
        desc: 'I sistemi di produzione autonoma ICB gestiscono i compiti di fine linea e post-produzione senza intervento manuale. La visione e l\'IA controllano la sequenza; il robot si adatta in tempo reale alla variabilità del prodotto. Progettati per linee di imballaggio, etichettatura e controllo qualità.',
        points: [
          'Smistano gli articoli per tipo, dimensione o destinazione con la visione IA',
          'Imballano i prodotti in scatole, vassoi o sacchetti',
          'Etichettano gli imballi con precisione e verificano il posizionamento dell\'etichetta',
        ],
      },
      {
        name: 'Linee di produzione',
        tagline: 'Ottimizza, automatizza, controlla, integra, monitora, migliora',
        desc: 'Progettiamo e automatizziamo linee di produzione complete - integrando cobot, AMR, nastri trasportatori e software di controllo in un unico sistema orchestrato. Ogni linea è costruita sul processo del cliente; la collaudiamo nel nostro stabilimento prima della consegna.',
        points: [
          'Ottimizzano il flusso produttivo e riducono i tempi ciclo',
          'Automatizzano postazioni di lavoro precedentemente manuali',
          'Controllano l\'intera linea tramite un\'interfaccia SCADA / MES unificata',
        ],
      },
    ],
    casesHeading: {
      eyebrow: 'Casi studio',
      title: 'Implementazioni e progetti reali',
      desc: 'Le fasi riflettono lo stato pubblicato sul sito originale polcero.com.',
    },
    cases: [
      {
        sector: 'Edilizia',
        stage: 'Concept',
        title: 'Robot per il trasporto di materiali nei cantieri',
        desc: 'Robot autonomi per il trasporto di materiali edili - mattoni, blocchi forati, elementi prefabbricati - all\'interno di cantieri attivi. Fase di concept, con competenza nel settore edile all\'interno del team.',
      },
      {
        sector: 'Edilizia',
        stage: 'R&S',
        title: 'Droni e robot per l\'ispezione dei cantieri',
        desc: 'Droni e robot mobili per l\'ispezione, la misurazione e il monitoraggio dei cantieri. Basati sull\'analisi del mercato edile - fase di R&S.',
      },
      {
        sector: 'Logistica',
        stage: 'Pilota',
        title: 'Trasporto interno autonomo: AMR e carrelli elevatori in magazzino',
        desc: 'Trasporto interno autonomo che combina piattaforme AMR e carrelli elevatori autonomi in un ambiente di magazzino. Attualmente in implementazione pilota.',
      },
    ],
    sectorsHeading: {
      eyebrow: 'Settori industriali',
      title: 'Dove lavorano i robot ICB',
      desc: 'I sistemi ICB sono impiegati nella produzione, nella logistica e nei settori correlati - adattati allo specifico processo e impianto.',
    },
    sectors: [
      { name: 'Produzione', desc: 'Assemblaggio, asservimento macchine, trasporto interlinea, ispezione e pallettizzazione su linee di produzione di ogni scala.' },
      { name: 'Agricoltura', desc: 'Trasporto interno all\'interno di impianti di trasformazione agricola, celle frigorifere e centri di confezionamento.' },
      { name: 'Edilizia', desc: 'Trasporto di materiali nei cantieri, assemblaggio di prefabbricati, ispezione e compiti edili ripetitivi.' },
      { name: 'Logistica e magazzinaggio', desc: 'Movimentazione pallet, carico e scarico rimorchi, prelievo goods-to-person e smistamento finale.' },
      { name: 'Servizi', desc: 'Ospitalità, logistica sanitaria, servizi di facility e attività di pulizia / disinfezione.' },
      { name: 'Energie rinnovabili', desc: 'Automazione della produzione e dell\'assemblaggio di componenti per i produttori di energia rinnovabile.' },
    ],
    processHeading: {
      eyebrow: 'Come realizziamo i progetti',
      title: 'Ciclo di vita del progetto - su ordinazione',
      desc: 'Ogni implementazione ICB segue un processo in quattro fasi, dalla documentazione alla messa in servizio in loco.',
    },
    process: [
      { title: 'Documentazione di progetto', desc: 'Incontriamo il cliente per mappare il processo e documentare requisiti, vincoli e criteri di successo. Risultato: una relazione di fattibilità e una proposta di concept.' },
      { title: 'Progetto del team', desc: 'Il nostro team di ingegneri progetta il robot o il sistema AMR - meccanica, elettronica e software - e mette a punto il cervello IA sui dati del cliente o su simulazioni di processo.' },
      { title: 'Costruzione e integrazione', desc: 'Produzione e assemblaggio nel nostro stabilimento. Collaudo di accettazione in fabbrica (FAT) completo e integrazione software. Documentazione di conformità UE (CE, ISO, NIS2) predisposta.' },
      { title: 'Consegna e messa in servizio', desc: 'Installazione in loco, collaudo di accettazione sul sito (SAT), formazione degli operatori e consegna. Assistenza continuativa nell\'ambito del nostro contratto RaaS / service-level agreement.' },
    ],
    aiBrain: {
      eyebrow: 'Cervello IA',
      title: 'Ogni robot ICB funziona con il cervello IA POLCERO',
      desc: 'Tutti i prodotti ICB sono alimentati dal livello di intelligenza POLCERO AI Systems: modelli VLA, rilevamento di classe YOLO, navigazione SLAM e gestione della flotta. Lo stesso cervello viene messo a punto sui dati del tuo processo. Programmazione: Python, C++ e ROS.',
      ctaLabel: 'Scopri di più su AI Systems',
    },
    compliance: {
      eyebrow: 'Conformità e sicurezza',
    },
  },
  'ai-systems': {
    stats: [
      { label: 'Latenza di controllo edge' },
      { label: 'Modelli foundation ottimizzati' },
      { label: 'Percezione multimodale' },
      { label: 'Architettura ibrida' },
    ],
    servicesHeading: {
      eyebrow: 'Capacità',
      title: 'Il livello di intelligenza',
      desc: 'Lo stesso stack IA alimenta ogni branch POLCERO. L\'hardware robotico può essere il tuo o del nostro catalogo - noi forniamo il cervello.',
    },
    services: [
      {
        name: 'Ottimizzazione VLA',
        tagline: 'Modelli foundation, adattati al tuo compito',
        desc: 'Modelli VLA aperti (GR00T N1.7, π0, OpenVLA) ottimizzati sui dati del cliente. Un livello di astrazione ci consente di sostituire i modelli base senza riaddestrare l\'intelligenza del tuo compito.',
      },
      {
        name: 'Visione e percezione',
        tagline: 'Comprensione della scena in tempo reale',
        desc: 'Rilevamento di classe YOLO per il riconoscimento di oggetti in tempo reale, telecamere di profondità (RGB-D), LiDAR, imaging multispettrale e termico, oltre a un VLM per la comprensione della scena e del linguaggio.',
      },
      {
        name: 'Architettura edge + cloud',
        tagline: 'Controllo sotto i 10 ms, apprendimento su scala cloud',
        desc: 'Inferenza edge a bordo per un controllo sotto i 10 ms. Cloud per aggiornamenti di addestramento, analisi e gestione della flotta. Un data flywheel migliora continuamente le prestazioni.',
      },
      {
        name: 'Controllo classico dove sufficiente',
        tagline: 'IA solo dove serve davvero',
        desc: 'Controllori PID per operazioni di presa e taglio semplici e ripetitive - costo inferiore, affidabilità maggiore. Riserviamo l\'IA alle decisioni complesse di percezione e comprensione della scena.',
      },
      {
        name: 'Gestione della flotta',
        tagline: 'Coordina molti robot come un unico sistema',
        desc: 'Supervisione centralizzata di una flotta mista di robot: assegnazione dei compiti, telemetria, distribuzione dei modelli e reportistica sulla produttività da un unico livello di controllo.',
      },
    ],
    processHeading: {
      eyebrow: 'Come collaboriamo',
      title: 'Dai dati di processo a un cervello operativo',
      desc: 'Sovrapponiamo l\'intelligenza al tuo hardware o al nostro in quattro passaggi.',
    },
    process: [
      { title: 'Dati e definizione dell\'ambito', desc: 'Mappiamo il compito, raccogliamo o simuliamo i dati di processo e definiamo i requisiti di percezione e controllo.' },
      { title: 'Selezione e ottimizzazione dei modelli', desc: 'Scegliamo i modelli VLA / di visione adeguati (o il controllo classico) e li ottimizziamo sui tuoi dati dietro un livello di astrazione stabile.' },
      { title: 'Integrazione e deployment edge', desc: 'Integriamo il cervello con il robot, distribuiamo l\'inferenza sull\'edge per un controllo a bassa latenza e verifichiamo rispetto ai criteri di accettazione.' },
      { title: 'Operazioni di flotta e data flywheel', desc: 'Analisi cloud, aggiornamenti dei modelli e gestione della flotta continuano a migliorare le prestazioni dopo il go-live.' },
    ],
  },
  robots: {
    stats: [
      { label: 'Tipi di telaio (W4 · T6 · WL4 · Q4)' },
      { label: 'Efficienza energetica su ruote vs gambe' },
      { label: 'Cervello IA condiviso su tutte le configurazioni' },
      { label: 'Moduli operativi standardizzati' },
    ],
    servicesHeading: {
      eyebrow: 'Il sistema modulare',
      title: 'Una piattaforma, molti robot',
      desc: 'Un cervello IA condiviso, un\'interfaccia standardizzata, telai intercambiabili e moduli operativi plug-and-play - impiegati per qualsiasi mercato, su ordinazione.',
    },
    services: [
      { name: 'Cervello IA', tagline: 'La stessa intelligenza su ogni telaio', desc: 'Modelli VLA + YOLO ottimizzati sui dati del cliente. Inferenza edge e addestramento cloud. Lo stesso livello di intelligenza si adatta a ogni telaio e mercato.' },
      { name: 'Interfaccia plug-and-play', tagline: 'Un unico punto di integrazione per tutte le combinazioni', desc: 'Un connettore meccanico ed elettrico standardizzato. Sostituisci telai o moduli operativi senza riprogettare il livello di intelligenza - un unico punto di integrazione per tutte le combinazioni.' },
      { name: 'Famiglia di telai', tagline: 'W4 · T6 · WL4 · Q4', desc: 'W4 (a ruote), T6 (cingolato), WL4 (ruota-gamba), Q4 (a gambe). Le piattaforme a ruote sono circa 2,5 volte più efficienti dal punto di vista energetico rispetto a quelle a gambe su terreno pianeggiante - adattate al terreno e al compito.' },
      { name: 'Moduli operativi', tagline: 'Lo strumento giusto per ogni compito', desc: 'Pinza soffice, testa per irrorazione/fertirrigazione, albero sensori (RGB-D / multispettrale / termico), vettore logistico, manipolatore remoto - inserisci lo strumento giusto per il compito.' },
      { name: 'Robot agricoli', tagline: 'Piattaforme autonome da campo', desc: 'Piattaforme autonome da campo per la semina, la cura, l\'irrorazione di precisione e la raccolta selettiva. Fusione di sensori RGB-D + multispettrale + termico per il monitoraggio della salute delle colture.' },
      { name: 'Robot da cantiere', tagline: 'Autonomia dal BIM al campo', desc: 'Tracciamento dal BIM al campo, foratura, movimento terra autonomo, ispezione rispetto a un gemello digitale. Autonomia supervisionata dall\'uomo in ogni fase.' },
      { name: 'Macchine IA stazionarie', tagline: 'Celle a braccio fisso e postazioni di lavoro', desc: 'Robot a braccio fisso e postazioni di lavoro intelligenti per ispezione, controllo qualità, assemblaggio ripetitivo e movimentazione dei materiali sulle linee di produzione.' },
    ],
    processHeading: {
      eyebrow: 'Come realizziamo i progetti',
      title: 'Configurato e costruito su ordinazione',
      desc: 'Ogni robot è assemblato a partire dalla piattaforma condivisa e adattato al tuo processo.',
    },
    process: [
      { title: 'Analisi e configurazione', desc: 'Mappiamo il compito e scegliamo il telaio, i moduli operativi e i sensori adatti al terreno e al lavoro.' },
      { title: 'Installazione del cervello IA', desc: 'Il livello di intelligenza condiviso viene ottimizzato sui tuoi dati e integrato tramite l\'interfaccia standardizzata.' },
      { title: 'Costruzione e validazione', desc: 'Assemblaggio e collaudo nel nostro stabilimento, con un collaudo di accettazione in fabbrica prima della consegna.' },
      { title: 'Implementazione e supporto', desc: 'Messa in servizio in loco, formazione degli operatori e assistenza continuativa - i moduli e i telai possono essere sostituiti al variare delle esigenze.' },
    ],
    aiBrain: {
      eyebrow: 'Cervello IA',
      title: 'Ogni configurazione funziona con il cervello IA POLCERO',
      desc: 'La piattaforma Robots condivide il livello di intelligenza POLCERO AI Systems - modelli VLA, visione di classe YOLO, navigazione SLAM e gestione della flotta - ottimizzato sui dati del tuo processo.',
      ctaLabel: 'Scopri di più su AI Systems',
    },
  },
  'farma-ai': {
    stats: [
      { label: 'Robot-as-a-Service, senza capex' },
      { label: 'Uso di prodotti chimici vs irrorazione totale' },
      { label: 'Precisione di posizionamento della semina' },
      { label: 'Fasi del ciclo colturale automatizzate' },
    ],
    servicesHeading: {
      eyebrow: 'Il ciclo colturale',
      title: 'Un cervello AI-farmer, l\'intera stagione',
      desc: 'Una flotta di robot da campo autonomi gestita dal cervello di supervisione "AI-farmer" - per grandi aziende orticole, fornita come Robot-as-a-Service.',
    },
    services: [
      { name: 'Semina', tagline: 'Trapianto preciso e semina diretta', desc: 'Trapianto preciso fila per fila o semina diretta con navigazione RTK/SLAM. Precisione di posizionamento sotto il centimetro sul telaio POLCERO-W4.' },
      { name: 'Cura - diserbo e diradamento', tagline: 'Nessun erbicida sulle erbe infestanti rilevate', desc: 'Rilevamento delle erbe infestanti tramite computer vision, con diserbo meccanico o termico. Nessun erbicida sulle infestanti identificate - solo irrorazione mirata puntuale.' },
      { name: 'Irrorazione puntuale / micro-dosaggio', tagline: 'La chimica solo dove serve', desc: 'Applicazione selettiva di fertilizzante o prodotti fitosanitari solo dove l\'IA rileva la necessità. Riduce l\'uso di prodotti chimici fino al 90% rispetto all\'irrorazione totale.' },
      { name: 'Monitoraggio', tagline: 'Una mappa quotidiana della salute delle colture', desc: 'Scansione quotidiana del campo con telecamere RGB-D + multispettrali + termiche. Mappa della salute delle colture, allerta precoce per le malattie e previsione della maturità di raccolta.' },
      { name: 'Raccolta selettiva', tagline: 'La sfida irrisolta più difficile dell\'automazione agricola', desc: 'Raccolta selettiva di ortaggi delicati (a partire dai cespi di lattuga) - la sfida irrisolta più difficile dell\'automazione agricola. Pinza soffice e rilevamento della maturità tramite IA.' },
    ],
    processHeading: {
      eyebrow: 'Come collaboriamo',
      title: 'Robot-as-a-Service, prima di tutto in campo',
      desc: 'Ci facciamo carico della flotta, delle operazioni e del rischio - tu ottieni il risultato per ettaro.',
    },
    process: [
      { title: 'Valutazione del campo', desc: 'Effettuiamo un rilievo dell\'azienda, delle colture e della stagione e concordiamo le operazioni obiettivo e le metriche di successo.' },
      { title: 'Configurazione flotta e cervello', desc: 'Configuriamo i robot da campo e mettiamo a punto il cervello AI-farmer sulla coltura, sul suolo e sulla disposizione.' },
      { title: 'Operazione supervisionata', desc: 'I robot eseguono il ciclo colturale in autonomia supervisionata dall\'uomo; ogni passaggio alimenta la mappa di monitoraggio.' },
      { title: 'Bilancio di stagione e scalabilità', desc: 'Analizziamo resa, risparmio sugli input e disponibilità operativa, poi scaliamo la flotta per la stagione successiva.' },
    ],
    aiBrain: {
      eyebrow: 'Cervello IA',
      title: 'Alimentato dal cervello AI-farmer POLCERO',
      desc: 'Farma AI funziona sul livello di intelligenza POLCERO AI Systems - visione, percezione e gestione della flotta - specializzato per l\'agricoltura e ottimizzato sui tuoi campi.',
      ctaLabel: 'Scopri di più su AI Systems',
    },
  },
  'photonic-processors': {
    stats: [
      { label: 'Latenza della moltiplicazione matriciale ottica' },
      { label: 'Mercato 2025-2034' },
      { label: 'CAGR' },
      { label: 'Aziende di calcolo fotonico monitorate (2026)' },
    ],
    servicesHeading: {
      eyebrow: 'Direzione di R&S',
      title: 'Calcolo IA con la luce',
      desc: 'Una direzione di ricerca: accelerare l\'inferenza IA nei nostri robot usando la luce invece della sola elettronica - minori consumi, maggiore throughput.',
    },
    services: [
      { name: 'Moltiplicazione matriciale ottica', tagline: 'Un unico passaggio ottico contro migliaia di cicli di clock', desc: 'L\'inferenza delle reti neurali è dominata dalla moltiplicazione matrice-vettore (GEMM). I chip fotonici la eseguono con la luce che attraversa reti di interferometri di Mach-Zehnder - facendo in un unico passaggio ottico ciò che l\'elettronica richiede migliaia di cicli di clock per calcolare.' },
      { name: 'Architettura ibrida fotonico-elettronica', tagline: 'Matematica ottica, attivazioni elettroniche', desc: 'I chip fotonici eccellono nelle operazioni lineari (matematica matriciale) ma non in quelle non lineari (funzioni di attivazione). L\'architettura di consenso abbina core ottici per la matematica matriciale a unità elettroniche per le attivazioni - un progetto ibrido che prende il meglio di entrambi.' },
      { name: 'Da 1,8 mld $ a 14,6 mld $', tagline: 'Un mercato di acceleratori in rapida crescita', desc: 'Il mercato globale degli acceleratori IA fotonici, dal 2025 al 2034 (CAGR 26,3%). Al 2026 monitoriamo 52 aziende di calcolo fotonico in tutto il mondo.' },
      { name: 'La fotonica come futuro livello di calcolo', tagline: 'Sostituisci il substrato, mantieni l\'intelligenza', desc: 'Man mano che gli acceleratori fotonici raggiungono la maturità (una finestra 2027-2031 per i prodotti di classe datacenter), l\'architettura del cervello IA POLCERO è progettata per assorbirli - il livello di astrazione ci consente di sostituire il substrato di calcolo senza riaddestrare l\'intelligenza del compito.' },
    ],
  },
};
