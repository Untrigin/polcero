import type { SiteContentOverride } from './overrides';

export const ro: SiteContentOverride = {
  tagline: 'Roboți modulari autonomi pentru industrie și agricultură',
  nav: {
    products: 'Produse',
    solutions: 'Soluții',
    services: 'Divizii',
    industries: 'Industrii',
    useCases: 'Cazuri de utilizare',
    company: 'Companie',
    news: 'Noutăți',
    contact: 'Contact',
    cta: 'Discutați cu noi',
  },
  services: {
    eyebrow: 'DIVIZII DE AFACERI',
    h2: [
      { text: 'Cinci divizii, ', weight: 300 },
      { text: 'un singur creier AI', weight: 700 },
    ],
    lead: 'De la coboți gata de utilizare la fotonică în laborator - fiecare divizie funcționează pe același nivel de inteligență POLCERO.',
    cta: 'Explorați diviziile',
    all: 'Toate diviziile',
  },
  branches: [
    {
      tagline: 'Coboți industriali și AMR',
      desc: 'Roboți colaborativi industriali, motostivuitoare autonome și platforme AMR - proiectați și livrați la comandă.',
      intro: 'Roboții există deja - ceea ce lipsește sunt sistemele care îi controlează. Construim acest nivel lipsă: instalăm în mașină cunoștințele, un plan și „ochii" (camere, senzori), o conectăm la AI și o facem să lucreze singură - fără operator și fără supraveghere constantă. ICB Robots este divizia operațională activă a POLCERO: proiectăm, construim și implementăm coboți, motostivuitoare autonome, platforme AMR și sisteme de producție automatizate.',
      points: ['Roboți colaborativi (coboți)', 'Motostivuitoare autonome', 'Platforme AMR', 'Centru de control', 'Producție autonomă', 'Linii de producție'],
      note: 'Divizie activă · experiența echipei din 1980',
      sections: [
        { title: 'Coboți', desc: 'Sprijină oamenii, automatizează, alimentează, asamblează și transportă.' },
        { title: 'Motostivuitoare autonome', desc: 'Transportă, ridică, scanează, localizează și evită obstacolele.' },
        { title: 'Platformă AMR', desc: 'Intră, ridică, transportă, navighează, evită și livrează.' },
        { title: 'Centru de control', desc: 'Monitorizează, analizează, alertează, reacționează, securizează și raportează.' },
        { title: 'Producție autonomă', desc: 'Sortează, ambalează, etichetează, controlează, mută și sincronizează.' },
        { title: 'Linii de producție', desc: 'Optimizează, automatizează, controlează, integrează, monitorizează și îmbunătățește.' },
        { title: 'Creierul AI POLCERO în fiecare robot', desc: 'Fiecare produs ICB este alimentat de nivelul de inteligență POLCERO AI Systems: modele VLA, detecție de clasă YOLO, navigație SLAM și gestionarea flotei. Același creier este ajustat pe datele procesului dumneavoastră. Programare: Python, C++ și ROS.' },
      ],
    },
    {
      tagline: 'Creierul AI pentru orice robot',
      desc: 'Construim nivelul de inteligență pentru roboți umanoizi și specializați: percepție, planificare, autonomie, gestionarea flotei.',
      intro: 'POLCERO construiește un nivel de inteligență AI - percepție, planificare, control și gestionarea flotei - pentru roboți umanoizi și specializați. Același stiva AI deservește toate diviziile POLCERO: modele VLA ajustate, viziune YOLO, arhitectură edge+cloud și un volant de date. Hardware-ul robotului poate fi al clientului sau ales din catalogul nostru; noi furnizăm inteligența.',
      points: ['Ajustarea modelelor VLA', 'Viziune și percepție', 'Arhitectură edge + cloud', 'Control clasic acolo unde este suficient', 'Gestionarea flotei'],
      sections: [
        { title: 'Ajustare VLA', desc: 'Modele VLA deschise (GR00T N1.7, π0, OpenVLA) ajustate pe datele clientului. Un nivel de abstractizare ne permite să schimbăm modelele de bază fără a reantrena inteligența sarcinilor.' },
        { title: 'Viziune și percepție', desc: 'Detecție de clasă YOLO pentru recunoașterea obiectelor în timp real, camere de adâncime (RGB-D), LiDAR, imagistică multispectrală și termică, plus un VLM pentru înțelegerea scenei și a limbajului.' },
        { title: 'Arhitectură edge + cloud', desc: 'Inferență edge la bord pentru control cu latență sub 10 ms. Cloud pentru actualizări ale modelelor, analitică și gestionarea flotei. Un volant de date îmbunătățește continuu performanța.' },
        { title: 'Control clasic acolo unde este suficient', desc: 'Regulatoare PID pentru operațiuni simple și repetitive de prindere și tăiere - cost mai redus, fiabilitate mai mare. Rezervăm AI pentru percepția complexă și deciziile de înțelegere a scenei.' },
      ],
    },
    {
      tagline: 'Platformă + roboți specializați',
      desc: 'Platforma modulară POLCERO și un catalog de roboți pe care îi implementăm cu creierul nostru AI - pentru orice piață, la comandă.',
      intro: 'Divizia Robots este platforma modulară aflată în centrul a tot ceea ce construim - un creier AI comun, o interfață standardizată, șasiuri interschimbabile și module de sarcină plug-and-play. Implementăm și roboți din catalogul partenerilor noștri, aplicând peste ei creierul nostru AI pentru orice piață.',
      points: ['Creier AI', 'Interfață plug-and-play', 'Familie de șasiuri', 'Module de sarcină', 'Roboți agricoli', 'Roboți pentru șantiere', 'Mașini AI staționare'],
      sections: [
        { title: 'Creier AI', desc: 'Modele VLA + YOLO ajustate pe datele clientului. Inferență edge și antrenare în cloud. Același nivel de inteligență se adaptează la fiecare șasiu și la fiecare piață.' },
        { title: 'Interfață plug-and-play', desc: 'Un conector mecanic și electric standardizat. Schimbați șasiul sau modulul de sarcină fără a reproiecta nivelul de inteligență - un singur punct de integrare pentru toate combinațiile.' },
        { title: 'Familie de șasiuri', desc: 'W4 (cu roți), T6 (pe șenile), WL4 (roată-picior), Q4 (pășitor). Platformele cu roți sunt de aproximativ 2,5 ori mai eficiente energetic decât cele pășitoare pe teren plan - potrivite cu terenul și sarcina.' },
        { title: 'Module de sarcină', desc: 'Clește moale, cap de pulverizare/fertirigare, catarg cu senzori (RGB-D / multispectral / termic), suport logistic, manipulator la distanță - conectați unealta potrivită pentru sarcină.' },
        { title: 'Roboți agricoli', desc: 'Platforme de câmp autonome pentru semănat, îngrijire, pulverizare de precizie și recoltare selectivă. Fuziune de senzori RGB-D + multispectral + termic pentru monitorizarea stării culturilor.' },
        { title: 'Roboți pentru șantiere', desc: 'Trasare din modelul BIM pe teren, forare, terasamente autonome, inspecție și comparație cu geamănul digital. Autonomie supravegheată de om pe tot parcursul.' },
        { title: 'Mașini AI staționare', desc: 'Roboți cu braț fix și posturi de lucru inteligente pentru inspecție, controlul calității, asamblare repetitivă și manipularea materialelor pe liniile de producție.' },
      ],
    },
    {
      tagline: 'AI agricol + roboți de câmp',
      desc: 'Flotă de roboți de câmp autonomi cu creierul AI-fermier: semănat, îngrijire, recoltare selectivă - model RaaS (robot ca serviciu).',
      intro: 'Farma AI este divizia agricolă a POLCERO: o flotă de roboți de câmp autonomi condusă de creierul supraveghetor „AI-fermier" pentru întregul ciclu de cultură - semănat, îngrijire (plivit, pulverizare punctuală), monitorizare și recoltare selectivă a legumelor delicate. Concepută pentru marile ferme de legume, livrată ca Robot-as-a-Service (RaaS) - fără cheltuieli de capital.',
      points: ['Semănat', 'Îngrijire - plivit și rărire', 'Pulverizare punctuală / microdozare', 'Monitorizare', 'Recoltare selectivă'],
      sections: [
        { title: 'Semănat', desc: 'Transplantare de precizie rând cu rând sau semănat direct cu navigație RTK/SLAM. Precizie de amplasare sub un centimetru pe șasiul POLCERO-W4.' },
        { title: 'Îngrijire - plivit și rărire', desc: 'Detecție a buruienilor prin viziune computerizată plus plivit mecanic sau termic. Fără erbicid pentru buruienile identificate - doar pulverizare punctuală țintită.' },
        { title: 'Pulverizare punctuală / microdozare', desc: 'Aplicare selectivă de îngrășământ sau produse de protecție a plantelor doar acolo unde AI detectează necesitatea. Reduce consumul de substanțe chimice cu până la 90% față de pulverizarea integrală.' },
        { title: 'Monitorizare', desc: 'Scanare zilnică a câmpului cu camere RGB-D + multispectrale + termice. Hartă a stării culturilor, avertizare timpurie a bolilor și predicție a gradului de pregătire pentru recoltare.' },
        { title: 'Recoltare selectivă', desc: 'Recoltare selectivă a legumelor delicate (începând cu căpățânile de salată) - cea mai dificilă lacună nerezolvată din automatizarea agriculturii. Clește moale plus detecție a maturității prin AI.' },
      ],
    },
    {
      tagline: 'Calcul AI cu lumină',
      desc: 'Direcție de cercetare-dezvoltare: calcul fotonic pentru accelerarea inferenței AI în roboții noștri - consum mai redus, debit mai mare.',
      intro: 'Photonic Processors este direcția de cercetare-dezvoltare a POLCERO: accelerarea inferenței AI în roboții noștri folosind lumina în locul electronicii singure. Înmulțirea optică de matrice - operația fundamentală în rețelele neuronale - poate fi efectuată într-o singură trecere optică printr-un cip fotonic, oferind latență sub-nanosecundă și un consum energetic pe operație cu ordine de mărime mai mic decât cipurile GPU/ASIC.',
      points: ['Înmulțire optică de matrice', 'Arhitectură hibridă fotonic-electronic', 'Piață: de la 1,8 mld. la 14,6 mld. EUR', 'Fotonica drept viitorul nivel de calcul'],
      sections: [
        { title: 'Înmulțire optică de matrice', desc: 'Inferența rețelelor neuronale este dominată de înmulțirea matrice-vector (GEMM). Cipurile fotonice o efectuează cu lumină care trece prin rețele de interferometre Mach-Zehnder - într-o singură trecere optică fac ceea ce electronica calculează în mii de cicluri de ceas.' },
        { title: 'Arhitectură hibridă fotonic-electronic', desc: 'Cipurile fotonice excelează la operațiile liniare (matematica matricelor), dar nu la cele neliniare (funcții de activare). Arhitectura de consens combină nuclee optice pentru matematica matricelor cu unități electronice pentru activări - un proiect hibrid care ia ce e mai bun din ambele.' },
        { title: 'Piață: de la 1,8 mld. la 14,6 mld. EUR', desc: 'Piața globală a acceleratoarelor AI fotonice, între 2025 și 2034 (CAGR 26,3%). La nivelul anului 2026 urmărim 52 de companii de calcul fotonic din întreaga lume.' },
        { title: 'Fotonica drept viitorul nivel de calcul', desc: 'Când acceleratoarele fotonice vor atinge maturitatea (o fereastră 2027-2031 pentru produsele de clasă datacenter), arhitectura creierului AI POLCERO este pregătită să le absoarbă - nivelul de abstractizare ne permite să schimbăm substratul de calcul fără a reantrena inteligența sarcinilor.' },
      ],
    },
  ],
  hero: {
    eyebrow: 'ROBOȚI MODULARI · POLONIA',
    h1: [
      { text: 'Roboți ', weight: 300 },
      { text: 'modulari', weight: 700 },
      { text: ' autonomi', weight: 300 },
    ],
    subhead: 'Nu construim un singur robot. Construim un ecosistem care are sens doar împreună.',
    h2: [
      { text: 'O platformă, ', weight: 300 },
      { text: 'module interschimbabile', weight: 700 },
      { text: ', orice sarcină.', weight: 300 },
    ],
    body: 'POLCERO reunește trei niveluri: o platformă AI care planifică și supraveghează munca, transportul care aduce robotul la fața locului și un robot modular care își alege singur șasiul și modulul de sarcină pentru sarcina pe care o întâlnește. Atribuiți un obiectiv, nu o mișcare.',
    ctaPrimary: 'Discutați despre implementare',
    ctaSecondary: 'Vedeți platforma',
    imageAlt: 'Robot modular POLCERO pe o platformă mobilă într-o hală de producție',
  },
  stats: [
    { label: 'sarcină utilă a dronei de transport' },
    { label: 'piața globală a roboticii până în 2030' },
    { label: 'cost de recoltare pe unitate mai mic' },
    { label: 'primele implementări la clienți' },
  ],
  platform: {
    h2: [
      { text: 'Un creier care ', weight: 300 },
      { text: 'atribuie un obiectiv', weight: 700 },
      { text: ' - nu o mișcare preprogramată.', weight: 300 },
    ],
    body: 'Platforma AI preia sarcina, planifică execuția, supraveghează desfășurarea și documentează rezultatul. Robotul învață prin demonstrație - un operator execută sarcina, sistemul înțelege și acționează autonom, fără programare complexă. Modelele pot rula local, pe dispozitiv, fără a trimite imagini în exterior.',
    cta: 'Cum funcționează platforma',
    layers: [
      { title: 'Nivelul AI', body: 'Planificare, supraveghere și documentarea sarcinilor. Datele și conformitatea rămân în Uniunea Europeană.' },
      { title: 'Nivelul de transport', body: 'O dronă de transport aduce robotul acolo unde accesul este costisitor sau imposibil - în timp, chiar roboții înșiși.' },
      { title: 'Robot modular', body: 'Un modul central comun, șasiu și module de sarcină interschimbabile. Citește situația și își alege singur unealta.' },
    ],
  },
  tabs: {
    h2: [
      { text: 'Unde ', weight: 300 },
      { text: 'lucrează POLCERO', weight: 700 },
    ],
    items: [
      {
        label: 'Industrie',
        title: 'Robotul se apropie de post - nu este fixat de el',
        body: 'Un umanoid pe o platformă mobilă intră într-o hală proiectată pentru oameni fără a o reconstrui. Ajunge acolo unde ajunge un muncitor, deservește mai multe posturi în loc să stea la unul singur și execută două operațiuni într-un singur ciclu.',
        alt: 'Robot umanoid POLCERO care operează la un post de asamblare într-o hală',
      },
      {
        label: 'Agricultură',
        title: 'Manipulare selectivă acolo unde recoltarea în masă eșuează',
        body: 'Un robot cu un modul de sarcină agricol recoltează legume în sere, tuneluri și câmpuri, iar când este nevoie schimbă cleștele cu un laser pentru plivit. Lucrează acolo unde semnalul satelitar nu ajunge.',
        alt: 'Robot POLCERO care lucrează între rândurile de cultură într-un tunel de plastic',
      },
      {
        label: 'Logistică',
        title: 'Transport acolo unde se termină drumul',
        body: 'O dronă de transport livrează piese, materiale și chiar roboții înșiși în terenuri muntoase, șantiere fără drumuri asfaltate și zone izolate după o avarie sau o inundație. Veriga lipsă a modelului de închiriere cu ora.',
        alt: 'Dronă de transport POLCERO care transportă o încărcătură peste un teren greu accesibil',
      },
    ],
  },
  overview: {
    h2: [
      { text: 'O platformă în ', weight: 300 },
      { text: 'multe configurații', weight: 700 },
    ],
    lead: 'Nu construim o mașină separată pentru fiecare sarcină. Construim un singur modul central, îl montăm pe șasiul ales și îl echipăm cu un modul de sarcină - aceeași mașină, cu o altă unealtă și un alt program, rezolvă o altă sarcină.',
  },
  cards: {
    eyebrow: 'DISPONIBILE LA COMANDĂ',
    h2: [
      { text: 'Roboți construiți ', weight: 300 },
      { text: 'în jurul procesului clientului', weight: 700 },
    ],
  },
  mission: {
    h2: [
      { text: 'Fiecare implementare următoare ', weight: 300 },
      { text: 'mai ieftină și mai rapidă', weight: 700 },
      { text: ' decât precedenta', weight: 300 },
    ],
    body: 'Modulul central comun este reutilizabil, iar datele din implementările anterioare scurtează antrenarea modelelor. Acesta este principalul nostru indicator de succes - drumul de la o companie de proiecte la un producător de roboți.',
    imageAlt: 'O flotă de roboți autonomi POLCERO într-o uzină de producție modernă',
  },
  closing: {
    h2: [
      { text: 'Vindem ', weight: 300 },
      { text: 'rezultatul', weight: 700 },
      { text: ', nu mașina.', weight: 300 },
    ],
    body: 'Ne facem plătiți pentru hectarele recoltate, volumul procesat și termenele respectate. Ne asumăm riscul tehnic, deoarece răspundem pentru tehnologie. Haideți să discutăm despre procesul dumneavoastră.',
    cta: 'Discutați cu noi',
  },
  footer: {
    tagline: 'Roboți modulari autonomi pentru industrie și agricultură. Proiectați, construiți și întreținuți în Polonia.',
    columns: [
      {
        title: 'Produse',
        links: [
          { label: 'Umanoid' },
          { label: 'Umanoid pe platformă mobilă' },
          { label: 'Roboți specializați' },
          { label: 'Dronă de transport' },
          { label: 'Specificații' },
        ],
      },
      {
        title: 'Industrii',
        links: [
          { label: 'Industrie' },
          { label: 'Agricultură' },
          { label: 'Construcții' },
          { label: 'Logistică' },
          { label: 'Sector public' },
        ],
      },
      {
        title: 'Companie',
        links: [
          { label: 'Divizii' },
          { label: 'Despre noi' },
          { label: 'Noutăți' },
          { label: 'Contact' },
        ],
      },
      {
        title: 'Resurse',
        links: [
          { label: 'Platforma POLCERO OS' },
          { label: 'Despre noi (PDF)' },
          { label: 'RSS' },
        ],
      },
    ],
    legal: 'Politica de confidențialitate',
    rights: 'Toate drepturile rezervate.',
  },
  products: [
    {
      name: 'Umanoid', category: 'Umanoid',
      blurb: 'Modulul central completat cu picioare și două brațe. Intră în spații proiectate pentru oameni și operează mașini construite pentru manipulare manuală.',
      subtitle: 'Lucrează acolo unde lucrează oamenii',
      uses: ['Deservirea posturilor proiectate pentru oameni', 'Asamblare și munci fizice repetitive', 'Operarea mașinilor construite pentru manipulare manuală', 'Ajutor casnic și lucrări de curățenie (direcție de dezvoltare)'],
    },
    {
      name: 'Umanoid pe platformă mobilă', category: 'Umanoid',
      blurb: 'Același umanoid pe o bază mobilă. Se apropie de post și deservește mai multe puncte în loc să stea la unul singur.',
      subtitle: 'Un robot, multe posturi',
      uses: ['Deservirea mai multor posturi de la o singură mașină', 'Închiderea golurilor dintre mașini în hală', 'Transport intern între posturi', 'Două operațiuni într-un singur ciclu'],
    },
    {
      name: 'Roboți specializați', category: 'Roboți specializați',
      blurb: 'Același modul central - control, AI și baterii cu schimbare la cald - pe șasiul de care are nevoie terenul dumneavoastră: pășitor, pe șenile, cu roți sau roată-picior. Schimbați platforma, păstrați creierul și modulele de sarcină.',
      subtitle: 'Un modul central, patru șasiuri',
      uses: ['Inspecție și monitorizare pe teren dificil', 'Patrularea infrastructurii și a obiectivelor', 'Muncă de câmp și transport pe teren neasfaltat', 'Lucrări și transport de materiale pe șantier', 'Transport intern și monitorizare pe pardoseli'],
      platforms: [
        { name: 'Robot pășitor', drive: 'Șasiu pășitor (4 picioare)', terrain: 'Scări, obstacole, teren accidentat', blurb: 'Modulul central pe un șasiu pășitor. Trece peste scări, borduri și teren pe care roțile nu îl pot aborda.' },
        { name: 'Robot pe șenile', drive: 'Șasiu pe șenile', terrain: 'Teren neasfaltat, accidentat, șantiere', blurb: 'Un șasiu pe șenile pentru teren accidentat și denivelat, șantiere și muncă de câmp.' },
        { name: 'Robot cu roți', drive: 'Șasiu cu roți', terrain: 'Pardoseli, depozite, teren plan', blurb: 'Un șasiu cu roți rapid și silențios pentru pardoseli industriale, depozite și monitorizare.' },
        { name: 'Robot roată-picior', drive: 'Șasiu roată-picior', terrain: 'Teren plan, obstacole și șine', blurb: 'Un șasiu hibrid roată-picior: rulează pe plan și trece peste obstacole și șine.' },
      ],
    },
    {
      name: 'Dronă de transport', category: 'Dronă de transport',
      blurb: 'O dronă de transport grea pentru a duce roboți, module și încărcături în locuri greu accesibile. Livrăm robotul acolo unde accesul este imposibil.',
      specs: [
        { label: 'Sarcină utilă maximă' },
        { label: 'Greutatea dronei' },
        { label: 'Construcție', value: 'modular' },
        { label: 'Transportă', value: 'roboți · module · încărcături' },
      ],
      subtitle: 'Aduce robotul acolo unde nu există drum',
      uses: ['Livrare de roboți, module și încărcături în locuri greu accesibile', 'Livrări după o avarie sau o inundație', 'Transport în teren muntos și împădurit', 'Aprovizionarea șantierelor fără drumuri'],
    },
    {
      name: 'POLCERO OS', category: 'Software',
      blurb: 'Modulul central cu nivelul AI: control, percepție și planificare. Robotul învață prin demonstrație - un operator execută sarcina, sistemul înțelege și acționează autonom, reducând timpul de programare de până la zece ori.',
      subtitle: 'Creierul AI care învață prin demonstrație',
      price: 'Inclus în implementare',
      uses: ['Instruirea robotului prin demonstrația operatorului', 'Planificarea, supravegherea și documentarea sarcinilor', 'Gestionarea flotei de roboți', 'Funcționare locală cu datele în UE'],
    },
  ],
  industries: [
    {
      name: 'Industrie', blurb: 'Un umanoid pe platformă mobilă în hale proiectate pentru oameni.',
      intro: 'Halele de producție, posturile, benzile transportoare și înălțimile de lucru sunt proiectate pentru oameni de zeci de ani. Un robot cu proporții umane intră în acel mediu fără a-l reconstrui - ajunge acolo unde ajunge un muncitor și operează mașini construite pentru manipulare manuală. Clientul nu adaptează uzina la robot, ci doar robotul la uzină.',
      challenges: [
        { title: 'Lipsa forței de muncă', text: 'Munca fizică repetitivă și cea de curățenie sunt tot mai greu de acoperit, iar fluctuația de personal continuă să crească.' },
        { title: 'Posturi fixe', text: 'Roboții industriali sunt fixați într-un singur loc și nu pot ține pasul atunci când procesul se schimbă.' },
        { title: 'Renovări costisitoare', text: 'Automatizarea înseamnă de obicei reproiectarea halei în jurul mașinii, ridicând bariera de intrare.' },
        { title: 'Integrarea cu mașinile existente', text: 'Un dispozitiv nou trebuie să funcționeze cu mașinile pe care clientul le folosește deja.' },
      ],
      approach: [
        { title: 'Robotul se apropie de post', text: 'Un umanoid pe platformă mobilă deservește mai multe posturi în loc să stea la unul singur și închide golurile dintre mașini.' },
        { title: 'Două operațiuni pe ciclu', text: 'O configurație cu două brațe și rotație în talie crește productivitatea postului la munca repetitivă.' },
        { title: 'Implementare la cheie', text: 'Proiectare, construcție, integrare, punere în funcțiune, documentație și service - de la 2 mil. €, cu evaluarea conformității.' },
      ],
    },
    {
      name: 'Agricultură', blurb: 'Recoltare selectivă și îngrijire în tuneluri și sere.',
      intro: 'Marii producători de utilaje agricole sunt foarte buni la recoltarea în masă și la navigarea în câmp deschis. Manipularea selectivă a culturilor moi și delicate, precum și munca în tuneluri și sere unde semnalul satelitar nu ajunge, rămân slab acoperite. Acesta este domeniul nostru și l-am ales în mod deliberat.',
      challenges: [
        { title: 'Lipsa forței de muncă sezoniere', text: 'O singură fermă angajează între o sută și o sută cincizeci de persoane în vârf de sezon - și sunt tot mai puține disponibile în fiecare an.' },
        { title: 'Costul crescând al muncii', text: 'Costul total al unui lucrător sezonier este astăzi de aproximativ 15.900 € pe lună și continuă să crească.' },
        { title: 'Presiunea de a reduce chimia', text: 'Îngrijirea și plivitul trebuie să devină tot mai precise și la nivel punctual.' },
        { title: 'Un sezon scurt', text: 'O fermă are nevoie de mașină șase luni - nu există niciun motiv să blocheze capital în ea tot anul.' },
      ],
      approach: [
        { title: 'Un modul de sarcină agricol', text: 'Un robot cu brațe și clește recoltează cultura, iar când este nevoie schimbă unealta cu un laser pentru plivit.' },
        { title: 'Plată pentru rezultat', text: 'Vizăm 9-12 eurocent pe unitate față de 15-20 la recoltarea manuală - cu aproximativ 40% mai puțin.' },
        { title: 'Funcționează fără GPS', text: 'Recoltare selectivă și îngrijire în tuneluri și sere unde navigația satelitară nu ajunge.' },
      ],
    },
    {
      name: 'Construcții', blurb: 'Inspecție, transport greu și patrulare EHS - munci umane pe care roboții le pot prelua.',
      intro: 'Pe șantier, roboții preiau munca riscantă sau obositoare pentru oameni: inspecție și captarea realității față de modelul BIM, trasare, transport greu și patrulări EHS. Un șasiu pe șenile abordează terenul neasfaltat și denivelat, în timp ce drona de transport suplimentează aprovizionarea din exterior.',
      challenges: [
        { title: 'Riscuri de siguranță', text: 'Munca la înălțime, în praf și în preajma utilajelor în mișcare este periculoasă pentru oameni.' },
        { title: 'Decalajul BIM-realitate', text: 'Starea as-built se abate de la model, iar depistarea diferențelor necesită timp.' },
        { title: 'Monitorizare întârziată a progresului', text: 'Documentarea progresului se face rar și manual.' },
        { title: 'Teren dificil, neasfaltat', text: 'Accesul și transportul materialelor pe un șantier fără drumuri este costisitor.' },
      ],
      approach: [
        { title: 'Inspecție și captarea realității vs BIM', text: 'Robotul captează starea șantierului și o compară cu modelul, semnalând diferențele.' },
        { title: 'Transport pe teren dificil', text: 'Un șasiu pe șenile mută materialele între zone, în timp ce drona le aduce din exterior.' },
        { title: 'Patrulare EHS și monitorizare', text: 'Runde regulate și documentare fără a expune oamenii la risc, cu datele de partea clientului.' },
      ],
    },
    {
      name: 'Logistică', blurb: 'O dronă de transport acolo unde se termină drumul.',
      intro: 'Un robot valorează cât valorează în locul în care este necesar. Nivelul de transport - cu o dronă care duce până la 500 de kilograme, un prototip pe care îl avem deja - livrează piese, materiale și chiar roboții înșiși acolo unde accesul este costisitor, lent sau imposibil.',
      challenges: [
        { title: 'Teren greu accesibil', text: 'Zone muntoase și împădurite, șantiere fără drumuri asfaltate, zone izolate după o avarie sau o inundație.' },
        { title: 'Costul flotei și al șoferilor', text: 'Întreținerea vehiculelor și a șoferilor, precum și dependența de trafic și de condițiile de drum, apasă asupra fiecărui serviciu.' },
        { title: 'Descărcare și paletizare', text: 'Transportul intern repetitiv și greu din depozit are încă nevoie de mâini.' },
        { title: 'Ultima milă a robotului', text: 'Costul și timpul de livrare a robotului decid economia închirierii cu ora.' },
      ],
      approach: [
        { title: 'Dronă de transport', text: 'Livrează încărcături, oameni și roboți acolo unde se termină drumul - fără a întreține o flotă.' },
        { title: 'Coboți și platforme AMR', text: 'ICB Robots pentru descărcare, picking și transport intern, livrați la comandă.' },
        { title: 'Robot livrat la fața locului', text: 'Veriga lipsă a modelului de închiriere cu ora - robotul deservește mai mulți clienți în aceeași zi.' },
      ],
    },
    {
      name: 'Sector public', blurb: 'Date și conformitate în UE. Pe dispozitiv, fără imagini trimise în exterior.',
      intro: 'Pentru multe instituții, datele din halele de producție și din infrastructură sunt informații sensibile. Modelele noastre pot rula local, pe dispozitiv, fără a trimite imagini în exterior. Odată cu creșterea cerințelor de reglementare, acest lucru încetează să mai fie un argument tehnic și devine o condiție de achiziție.',
      challenges: [
        { title: 'Cerințe de reglementare', text: 'Conformitatea și auditabilitatea sunt o condiție a discuției, nu un adaos.' },
        { title: 'Sensibilitatea datelor', text: 'Imaginile și datele operaționale nu trebuie să părăsească organizația sau Uniunea Europeană.' },
        { title: 'Controlul lanțului de aprovizionare', text: 'Instituțiile publice se așteaptă la un lanț de aprovizionare transparent și european.' },
        { title: 'Producție în UE', text: 'Valoarea adăugată - proiectare, software, asamblare și service - ar trebui creată la fața locului.' },
      ],
      approach: [
        { title: 'Modele pe dispozitiv', text: 'Percepția și inferența rulează local; datele și conformitatea rămân în Uniunea Europeană.' },
        { title: 'Proiectați și construiți în Polonia', text: 'O uzină în Kietrz și furnizori polonezi pentru majoritatea componentelor - control asupra lanțului de aprovizionare.' },
        { title: 'Direcție fotonică (C&D)', text: 'Calculul fotonic accelerează inferența AI cu un consum energetic mai redus.' },
      ],
    },
  ],
};
