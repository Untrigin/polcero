import type { RichBranch, DeepPartial } from '../../branchRich';

export const ro: Record<string, DeepPartial<RichBranch>> = {
  'icb-robots': {
    stats: [
      { label: 'Activi din' },
      { label: 'Ani de experiență' },
      { label: 'Sectoare industriale' },
      { label: 'Robotics-as-a-Service' },
    ],
    productsHeading: {
      eyebrow: 'Specificații de produs',
      title: 'Date reale din catalogul ICB',
      desc: 'Specificații publicate din gama de produse POLCERO / ICB Robots.',
    },
    products: [
      {
        name: 'Robot de asamblare și manipulare de precizie controlat de IA',
        desc: 'Proiectat pentru sarcini complexe cu acuratețe ridicată. Controlat de software-ul nostru și de sistemul de viziune IA, funcționează în diferite medii de producție și își corectează propria mișcare în timp real. Îl programăm pentru procesul dumneavoastră, îl implementăm și îl întreținem.',
        specs: [
          { label: 'Sarcină utilă' },
          { label: 'Rază de acțiune' },
          { label: 'Repetabilitate' },
          { label: 'Temperatură de funcționare' },
          { label: 'Garanție' },
          { label: 'Control' },
        ],
        points: [
          'Sistem de viziune IA pentru corectarea mișcării în timp real',
          'Funcționează în diferite medii de producție fără reechipare',
          'Programare personalizată per proces - configurăm, implementăm și întreținem',
          'Implementabil în aplicații de producție, logistică și control al calității',
        ],
      },
      {
        name: 'Brațe robotice inteligente cu 6 axe',
        desc: 'Șase grade de mișcare pentru sarcini complexe într-un spațiu de producție limitat. Compact și ușor de integrat - precizie și viteză oriunde spațiul la sol este restrâns. Disponibil într-o variantă montată pe tavan.',
        specs: [
          { label: 'Grade de libertate' },
          { label: 'Repetabilitate' },
          { label: 'Sarcină utilă' },
          { label: 'Opțiuni de montare' },
        ],
        points: [
          'Repetabilitate ridicată pentru sarcini de precizie',
          'Capacitate de încărcare admisă ridicată',
          'Versiune montată pe tavan disponibilă - economisește spațiu la sol',
          'Aplicații: asamblare, ambalare, sudare, control al calității',
        ],
      },
    ],
    servicesHeading: {
      eyebrow: 'Categorii de servicii',
      title: 'Șase moduri de a robotiza fabrica dumneavoastră',
      desc: 'Fiecare sistem este construit la comanda clientului - adaptat procesului, fabricii și cerințelor de integrare.',
    },
    services: [
      {
        name: 'Roboți colaborativi (Cobots)',
        tagline: 'Sprijină oamenii, automatizează, alimentează, asamblează, transportă',
        desc: 'Coboții noștri lucrează alături de operatorii umani - fără cuști de siguranță în configurații certificate. Ei preiau sarcini repetitive, solicitante ergonomic sau de precizie, în timp ce oamenii se concentrează pe raționament și controlul calității. Programați în Python, C++ și ROS, adaptați procesului dumneavoastră.',
        points: [
          'Sprijină lucrătorii umani la posturi de lucru comune',
          'Automatizează sarcini repetitive sau solicitante ergonomic',
          'Alimentează componente și materiale către linia de producție',
        ],
      },
      {
        name: 'Motostivuitoare autonome',
        tagline: 'Transportă, ridică, scanează, localizează, evită obstacolele',
        desc: 'Motostivuitoarele noastre autonome gestionează logistica intra-facilitate non-stop - preluând paleți sau încărcături, transportându-le prin facilitate și amplasându-le la destinație fără șofer. Navigație SLAM: fără marcaje la sol sau modificări de infrastructură. Integrare WMS/ERP standard.',
        points: [
          'Transportă paleți și încărcături autonom prin facilitate',
          'Ridică și amplasează încărcături la destinație fără șofer',
          'Scanează coduri de bare și coduri QR pentru identificarea încărcăturii',
        ],
      },
      {
        name: 'Platformă AMR',
        tagline: 'Intră, ridică, transportă, navighează, evită, livrează',
        desc: 'Platforma ICB AMR este un robot mobil autonom configurabil pentru transportul în facilitate. Platforma de bază navighează autonom prin LiDAR SLAM; modulele de sarcină (transportor, raft, role, dispozitiv personalizat) sunt schimbate fără a modifica platforma. Sarcină utilă: 100-600 kg în funcție de varianta de șasiu.',
        points: [
          'Intră pe culoare înguste și ridică autonom',
          'Ridică și transportă sarcini utile de până la 600 kg',
          'Navighează dinamic, recalculând traseul în jurul obstacolelor în timp real',
        ],
      },
      {
        name: 'Centru de control',
        tagline: 'Monitorizează, analizează, alertează, răspunde, securizează, raportează',
        desc: 'Centrul de control ICB este un strat software de supraveghere care agregă date din întreaga flotă de roboți și din facilitate. Monitorizează operațiunile în timp real, detectează anomalii, declanșează alerte, coordonează răspunsurile și generează rapoarte de conformitate și productivitate.',
        points: [
          'Monitorizează operațiunile flotei și ale facilității în timp real',
          'Analizează datele de producție și logistică pentru blocaje',
          'Alertează automat operatorii cu privire la excepții și anomalii',
        ],
      },
      {
        name: 'Producție autonomă',
        tagline: 'Sortează, ambalează, etichetează, inspectează, mută, sincronizează',
        desc: 'Sistemele de producție autonomă ICB gestionează sarcini de capăt de linie și post-producție fără intervenție manuală. Viziunea și IA controlează secvența; robotul se adaptează la variația produsului în timp real. Proiectate pentru linii de ambalare, etichetare și control al calității.',
        points: [
          'Sortează articolele după tip, dimensiune sau destinație cu viziune IA',
          'Ambalează produsele în cutii, tăvi sau pungi',
          'Etichetează pachetele cu acuratețe și verifică amplasarea etichetei',
        ],
      },
      {
        name: 'Linii de producție',
        tagline: 'Optimizează, automatizează, controlează, integrează, monitorizează, îmbunătățește',
        desc: 'Proiectăm și automatizăm linii de producție complete - integrând coboți, AMR-uri, transportoare și software de control într-un singur sistem orchestrat. Fiecare linie este construită conform procesului clientului; o testăm în propria noastră facilitate înainte de livrare.',
        points: [
          'Optimizează fluxul de producție și reduce timpii de ciclu',
          'Automatizează posturi de lucru anterior manuale',
          'Controlează întreaga linie printr-o interfață SCADA / MES unificată',
        ],
      },
    ],
    casesHeading: {
      eyebrow: 'Studii de caz',
      title: 'Implementări și proiecte reale',
      desc: 'Etapele reflectă statusul publicat pe site-ul original polcero.com.',
    },
    cases: [
      {
        sector: 'Construcții',
        stage: 'Concept',
        title: 'Roboți de transport materiale pe șantiere de construcții',
        desc: 'Roboți autonomi pentru transportul materialelor de construcție - cărămizi, blocuri ceramice, elemente prefabricate - pe șantiere active. Etapa de concept, cu expertiză în domeniul construcțiilor în echipă.',
      },
      {
        sector: 'Construcții',
        stage: 'Cercetare-dezvoltare',
        title: 'Drone și roboți pentru inspecția șantierelor de construcții',
        desc: 'Drone și roboți mobili pentru inspecția, măsurarea și monitorizarea șantierelor de construcții. Bazate pe analiza pieței construcțiilor - etapa de cercetare-dezvoltare.',
      },
      {
        sector: 'Logistică',
        stage: 'Pilot',
        title: 'Transport intern autonom: AMR și motostivuitoare într-un depozit',
        desc: 'Transport intern autonom care combină platforme AMR și motostivuitoare autonome într-un mediu de depozit. În prezent în implementare pilot.',
      },
    ],
    sectorsHeading: {
      eyebrow: 'Sectoare industriale',
      title: 'Unde lucrează roboții ICB',
      desc: 'Sistemele ICB sunt implementate în producție, logistică și industrii conexe - adaptate procesului și fabricii specifice.',
    },
    sectors: [
      { name: 'Producție', desc: 'Asamblare, deservirea mașinilor, transport intra-linie, inspecție și paletizare pe linii de producție de orice dimensiune.' },
      { name: 'Agricultură', desc: 'Transport intern în cadrul facilităților de procesare agricolă, depozitelor frigorifice și halelor de ambalare.' },
      { name: 'Construcții', desc: 'Transport de materiale pe șantiere, asamblare de prefabricate, inspecție și sarcini de construcție repetitive.' },
      { name: 'Logistică și depozitare', desc: 'Manipularea paleților, încărcarea și descărcarea remorcilor, culegere goods-to-person și sortare finală.' },
      { name: 'Servicii', desc: 'Ospitalitate, logistică medicală, servicii de facilitate și sarcini de curățenie / dezinfecție.' },
      { name: 'Energie regenerabilă', desc: 'Automatizarea producției și asamblării de componente pentru producătorii de energie regenerabilă.' },
    ],
    processHeading: {
      eyebrow: 'Cum livrăm',
      title: 'Ciclul de viață al proiectului - construit la comandă',
      desc: 'Fiecare implementare ICB urmează un proces în patru etape, de la documentare la punerea în funcțiune la fața locului.',
    },
    process: [
      { title: 'Documentarea proiectului', desc: 'Ne întâlnim cu clientul pentru a cartografia procesul și a documenta cerințele, constrângerile și criteriile de succes. Rezultat: un raport de fezabilitate și o propunere de concept.' },
      { title: 'Proiectul echipei', desc: 'Echipa noastră de ingineri proiectează robotul sau sistemul AMR - mecanic, electric și software - și reglează fin creierul IA pe datele clientului sau pe simulări de proces.' },
      { title: 'Construcție și integrare', desc: 'Fabricare și asamblare în propria noastră facilitate. Test complet de acceptanță în fabrică (FAT) și integrare software. Documentație de conformitate UE (CE, ISO, NIS2) pregătită.' },
      { title: 'Livrare și punere în funcțiune', desc: 'Instalare la fața locului, test de acceptanță la fața locului (SAT), instruirea operatorilor și predare. Service continuu conform acordului nostru RaaS / de nivel de servicii.' },
    ],
    aiBrain: {
      eyebrow: 'Creier IA',
      title: 'Fiecare robot ICB funcționează pe creierul IA POLCERO',
      desc: 'Toate produsele ICB sunt alimentate de stratul de inteligență POLCERO AI Systems: modele VLA, detecție de clasă YOLO, navigație SLAM și gestionarea flotei. Același creier este reglat fin pe datele procesului dumneavoastră. Programare: Python, C++ și ROS.',
    },
    compliance: {
      eyebrow: 'Conformitate și siguranță',
    },
  },
  'ai-systems': {
    stats: [
      { label: 'Latență de control la edge' },
      { label: 'Modele fundamentale reglate fin' },
      { label: 'Percepție multi-modală' },
      { label: 'Arhitectură hibridă' },
    ],
    servicesHeading: {
      eyebrow: 'Capabilități',
      title: 'Stratul de inteligență',
      desc: 'Același stack IA alimentează fiecare divizie POLCERO. Hardware-ul robotului poate fi al dumneavoastră sau din catalogul nostru - noi furnizăm creierul.',
    },
    services: [
      {
        name: 'Reglare fină VLA',
        tagline: 'Modele fundamentale, adaptate sarcinii dumneavoastră',
        desc: 'Modele VLA deschise (GR00T N1.7, π0, OpenVLA) reglate fin pe datele clientului. Un strat de abstractizare ne permite să schimbăm modelele de bază fără a reantrena inteligența sarcinii dumneavoastră.',
      },
      {
        name: 'Viziune și percepție',
        tagline: 'Înțelegerea scenei în timp real',
        desc: 'Detecție de clasă YOLO pentru recunoașterea obiectelor în timp real, camere de adâncime (RGB-D), LiDAR, imagistică multispectrală și termică, plus un VLM pentru înțelegerea scenei și a limbajului.',
      },
      {
        name: 'Arhitectură edge + cloud',
        tagline: 'Control sub 10 ms, învățare la scară cloud',
        desc: 'Inferență la edge la bord pentru control sub 10 ms. Cloud pentru actualizări de antrenare, analize și gestionarea flotei. Un volant de date îmbunătățește continuu performanța.',
      },
      {
        name: 'Control clasic acolo unde este suficient',
        tagline: 'IA doar acolo unde își merită locul',
        desc: 'Controlere PID pentru prindere și tăiere simple, repetitive - cost mai mic, fiabilitate mai mare. Rezervăm IA pentru decizii complexe de percepție și înțelegere a scenei.',
      },
      {
        name: 'Gestionarea flotei',
        tagline: 'Coordonează mulți roboți ca un singur sistem',
        desc: 'Supraveghere centrală a unei flote mixte de roboți: alocarea sarcinilor, telemetrie, lansarea modelelor și raportarea productivității dintr-un singur strat de control.',
      },
    ],
    processHeading: {
      eyebrow: 'Cum colaborăm',
      title: 'De la datele de proces la un creier funcțional',
      desc: 'Suprapunem inteligența peste hardware-ul dumneavoastră sau al nostru în patru pași.',
    },
    process: [
      { title: 'Date și definirea scopului', desc: 'Cartografiem sarcina, colectăm sau simulăm datele de proces și definim cerințele de percepție și control.' },
      { title: 'Selectarea modelului și reglarea fină', desc: 'Alegem modelele VLA / de viziune potrivite (sau control clasic) și le reglăm fin pe datele dumneavoastră în spatele unui strat de abstractizare stabil.' },
      { title: 'Integrare și implementare la edge', desc: 'Integrăm creierul cu robotul, implementăm inferența la edge pentru control cu latență redusă și validăm față de criteriile de acceptanță.' },
      { title: 'Operațiuni de flotă și volant de date', desc: 'Analizele cloud, actualizările de modele și gestionarea flotei continuă să îmbunătățească performanța după lansare.' },
    ],
  },
  robots: {
    stats: [
      { label: 'Tipuri de șasiu (W4 · T6 · WL4 · Q4)' },
      { label: 'Eficiență energetică pe roți vs picioare' },
      { label: 'Creier IA comun pentru toate construcțiile' },
      { label: 'Module de sarcină standardizate' },
    ],
    servicesHeading: {
      eyebrow: 'Sistemul modular',
      title: 'O platformă, mulți roboți',
      desc: 'Un creier IA comun, o interfață standardizată, șasiuri interschimbabile și module de sarcină plug-and-play - implementate pentru orice piață, la comandă.',
    },
    services: [
      { name: 'Creier IA', tagline: 'Aceeași inteligență pe fiecare șasiu', desc: 'Modele VLA + YOLO reglate fin pe datele clientului. Inferență la edge și antrenare în cloud. Același strat de inteligență se adaptează fiecărui șasiu și fiecărei piețe.' },
      { name: 'Interfață plug-and-play', tagline: 'Un singur punct de integrare pentru toate combinațiile', desc: 'Un conector mecanic și electric standardizat. Schimbați șasiul sau modulele de sarcină fără a reproiecta stratul de inteligență - un singur punct de integrare pentru toate combinațiile.' },
      { name: 'Familia de șasiuri', tagline: 'W4 · T6 · WL4 · Q4', desc: 'W4 (pe roți), T6 (pe șenile), WL4 (roată-picior), Q4 (pe picioare). Platformele pe roți sunt de aproximativ 2,5 ori mai eficiente energetic decât cele pe picioare pe teren plat - adaptate terenului și sarcinii.' },
      { name: 'Module de sarcină', tagline: 'Unealta potrivită pentru sarcină', desc: 'Gripper moale, cap de pulverizare/fertirigare, catarg de senzori (RGB-D / multispectral / termic), transportor logistic, manipulator la distanță - conectați unealta potrivită pentru sarcină.' },
      { name: 'Roboți agricoli', tagline: 'Platforme autonome de câmp', desc: 'Platforme autonome de câmp pentru plantare, îngrijire, pulverizare de precizie și recoltare selectivă. Fuziune de senzori RGB-D + multispectral + termic pentru monitorizarea sănătății culturilor.' },
      { name: 'Roboți pentru șantiere de construcții', tagline: 'Autonomie de la BIM la teren', desc: 'Trasare de la BIM la teren, forare, terasamente autonome, inspecție față de un geamăn digital. Autonomie supravegheată de om pe tot parcursul.' },
      { name: 'Mașini IA staționare', tagline: 'Celule cu braț fix și posturi de lucru', desc: 'Roboți cu braț fix și posturi de lucru inteligente pentru inspecție, control al calității, asamblare repetitivă și manipularea materialelor pe liniile de producție.' },
    ],
    processHeading: {
      eyebrow: 'Cum livrăm',
      title: 'Configurat și construit la comandă',
      desc: 'Fiecare robot este asamblat din platforma comună și adaptat procesului dumneavoastră.',
    },
    process: [
      { title: 'Definirea scopului și configurare', desc: 'Cartografiem sarcina și alegem șasiul, modulele de sarcină și senzorii care se potrivesc terenului și sarcinii.' },
      { title: 'Montarea creierului IA', desc: 'Stratul de inteligență comun este reglat fin pe datele dumneavoastră și integrat prin interfața standardizată.' },
      { title: 'Construcție și validare', desc: 'Asamblare și testare în propria noastră facilitate, cu un test de acceptanță în fabrică înainte de livrare.' },
      { title: 'Implementare și suport', desc: 'Punere în funcțiune la fața locului, instruirea operatorilor și service continuu - modulele și șasiurile pot fi schimbate pe măsură ce nevoile se modifică.' },
    ],
    aiBrain: {
      eyebrow: 'Creier IA',
      title: 'Fiecare construcție funcționează pe creierul IA POLCERO',
      desc: 'Platforma Robots partajează stratul de inteligență POLCERO AI Systems - modele VLA, viziune de clasă YOLO, navigație SLAM și gestionarea flotei - reglat fin pe datele procesului dumneavoastră.',
    },
  },
  'farma-ai': {
    stats: [
      { label: 'Robot-as-a-Service, fără capex' },
      { label: 'Utilizare de substanțe chimice vs pulverizare totală' },
      { label: 'Acuratețea amplasării semințelor' },
      { label: 'Etape ale ciclului de cultură automatizate' },
    ],
    servicesHeading: {
      eyebrow: 'Ciclul de cultură',
      title: 'Un creier IA-fermier, întregul sezon',
      desc: 'O flotă de roboți autonomi de câmp conduși de creierul de supraveghere „IA-fermier" - pentru ferme mari de legume, livrat ca Robot-as-a-Service.',
    },
    services: [
      { name: 'Plantare', tagline: 'Transplantare precisă și însămânțare directă', desc: 'Transplantare precisă rând cu rând sau însămânțare directă cu navigație RTK/SLAM. Acuratețe de amplasare sub-centimetrică pe șasiul POLCERO-W4.' },
      { name: 'Îngrijire - plivit și rărire', tagline: 'Fără erbicid pentru buruienile detectate', desc: 'Detecția buruienilor prin viziune computerizată plus plivit mecanic sau termic. Fără erbicid pentru buruienile identificate - doar pulverizare punctuală țintită.' },
      { name: 'Pulverizare punctuală / micro-dozare', tagline: 'Substanțe chimice doar acolo unde este nevoie', desc: 'Aplicarea selectivă a îngrășămintelor sau a produselor de protecție a plantelor doar acolo unde IA detectează nevoia. Reduce utilizarea de substanțe chimice cu până la 90% față de pulverizarea totală.' },
      { name: 'Monitorizare', tagline: 'O hartă zilnică a sănătății culturilor', desc: 'Scanare zilnică a câmpului cu camere RGB-D + multispectrale + termice. Hartă a sănătății culturilor, avertizare timpurie a bolilor și predicția pregătirii pentru recoltare.' },
      { name: 'Recoltare selectivă', tagline: 'Cea mai grea lacună nerezolvată în automatizarea agricolă', desc: 'Recoltarea selectivă a legumelor delicate (începând cu căpățânile de salată) - cea mai grea lacună nerezolvată în automatizarea agricolă. Gripper moale plus detecția maturității prin IA.' },
    ],
    processHeading: {
      eyebrow: 'Cum colaborăm',
      title: 'Robot-as-a-Service, prioritate câmpului',
      desc: 'Ne asumăm flota, operațiunile și riscul - dumneavoastră obțineți rezultatul per hectar.',
    },
    process: [
      { title: 'Evaluarea câmpului', desc: 'Inspectăm ferma, culturile și sezonul și convenim asupra operațiunilor țintă și a indicatorilor de succes.' },
      { title: 'Configurarea flotei și a creierului', desc: 'Configurăm roboții de câmp și reglăm creierul IA-fermier în funcție de cultură, sol și amenajare.' },
      { title: 'Operare supravegheată', desc: 'Roboții parcurg ciclul de cultură sub autonomie supravegheată de om; fiecare trecere alimentează harta de monitorizare.' },
      { title: 'Analiza sezonului și extindere', desc: 'Analizăm producția, economiile de resurse și timpul de funcționare, apoi extindem flota pentru sezonul următor.' },
    ],
    aiBrain: {
      eyebrow: 'Creier IA',
      title: 'Alimentat de creierul IA-fermier POLCERO',
      desc: 'Farma AI funcționează pe stratul de inteligență POLCERO AI Systems - viziune, percepție și gestionarea flotei - specializat pentru agricultură și reglat fin pe câmpurile dumneavoastră.',
    },
  },
  'photonic-processors': {
    stats: [
      { label: 'Latență de înmulțire matricială optică' },
      { label: 'Piață 2025-2034' },
      { label: 'CAGR' },
      { label: 'Firme de calcul fotonic urmărite (2026)' },
    ],
    servicesHeading: {
      eyebrow: 'Direcție de cercetare-dezvoltare',
      title: 'Calcul IA cu lumină',
      desc: 'O direcție de cercetare: accelerarea inferenței IA în roboții noștri folosind lumina în loc de electronică doar - consum mai mic, debit mai mare.',
    },
    services: [
      { name: 'Înmulțire matricială optică', tagline: 'O singură trecere optică vs mii de cicluri de ceas', desc: 'Inferența rețelelor neuronale este dominată de înmulțirea matrice-vector (GEMM). Cipurile fotonice o realizează cu lumina care trece prin rețele de interferometre Mach-Zehnder - făcând într-o singură trecere optică ceea ce electronica are nevoie de mii de cicluri de ceas pentru a calcula.' },
      { name: 'Arhitectură hibridă fotonică-electronică', tagline: 'Calcule optice, activări electronice', desc: 'Cipurile fotonice excelează la operații liniare (calcule matriciale), dar nu și la cele neliniare (funcții de activare). Arhitectura de consens asociază nuclee optice pentru calcule matriciale cu unități electronice pentru activări - un design hibrid care preia ce e mai bun din ambele.' },
      { name: 'De la 1,8 mld. $ la 14,6 mld. $', tagline: 'O piață de acceleratoare în creștere rapidă', desc: 'Piața globală a acceleratoarelor IA fotonice, 2025 până în 2034 (CAGR 26,3%). Începând cu 2026, urmărim 52 de companii de calcul fotonic la nivel mondial.' },
      { name: 'Fotonica drept viitorul strat de calcul', tagline: 'Schimbă substratul, păstrează inteligența', desc: 'Pe măsură ce acceleratoarele fotonice ating maturitatea (o fereastră 2027-2031 pentru produse de clasă datacenter), arhitectura creierului IA POLCERO este construită să le absoarbă - stratul de abstractizare ne permite să schimbăm substratul de calcul fără a reantrena inteligența sarcinii.' },
    ],
  },
};
