import type { RichBranch, DeepPartial } from '../../branchRich';

export const fr: Record<string, DeepPartial<RichBranch>> = {
  'icb-robots': {
    stats: [
      { label: 'En activité depuis' },
      { label: "Années d'expérience" },
      { label: 'Secteurs industriels' },
      { label: 'Robotique en tant que service' },
    ],
    productsHeading: {
      eyebrow: 'Spécifications produit',
      title: 'Données réelles du catalogue ICB',
      desc: 'Spécifications publiées de la gamme de produits POLCERO / ICB Robots.',
    },
    products: [
      {
        name: 'Robot de montage et de manipulation de précision piloté par IA',
        desc: "Conçu pour des tâches complexes exigeant une grande précision. Piloté par notre logiciel et notre système de vision par IA, il fonctionne dans différents environnements de production et corrige son propre mouvement en temps réel. Nous le programmons selon votre processus, le déployons et en assurons la maintenance.",
        specs: [
          { label: 'Charge utile' },
          { label: 'Portée' },
          { label: 'Répétabilité' },
          { label: 'Température de fonctionnement' },
          { label: 'Garantie' },
          { label: 'Commande' },
        ],
        points: [
          'Système de vision par IA pour la correction du mouvement en temps réel',
          "Fonctionne dans différents environnements de production sans réoutillage",
          'Programmation sur mesure par processus - nous configurons, déployons et assurons la maintenance',
          'Déployable dans les applications de fabrication, de logistique et de contrôle qualité',
        ],
      },
      {
        name: 'Bras robotisés intelligents à 6 axes',
        desc: "Six degrés de liberté pour des tâches complexes dans un espace de production restreint. Compact et facile à intégrer - précision et rapidité partout où la surface au sol est limitée. Disponible en version montée au plafond.",
        specs: [
          { label: 'Degrés de liberté' },
          { label: 'Répétabilité' },
          { label: 'Charge utile' },
          { label: 'Options de montage' },
        ],
        points: [
          'Répétabilité élevée pour les tâches de précision',
          'Capacité de charge admissible élevée',
          'Version montée au plafond disponible - gain de surface au sol',
          'Applications : montage, emballage, soudage, contrôle qualité',
        ],
      },
    ],
    servicesHeading: {
      eyebrow: 'Catégories de services',
      title: 'Six façons de robotiser votre usine',
      desc: "Chaque système est construit sur commande du client - adapté au processus, à l'usine et aux exigences d'intégration.",
    },
    services: [
      {
        name: 'Robots collaboratifs (cobots)',
        tagline: 'Assister les personnes, automatiser, approvisionner, assembler, transporter',
        desc: "Nos cobots travaillent aux côtés des opérateurs humains - sans cage de sécurité dans les configurations certifiées. Ils prennent en charge les tâches répétitives, ergonomiquement exigeantes ou de précision pendant que les personnes se concentrent sur le jugement et le contrôle qualité. Programmés en Python, C++ et ROS, adaptés à votre processus.",
        points: [
          'Assister les travailleurs humains sur les postes de travail partagés',
          'Automatiser les tâches répétitives ou ergonomiquement exigeantes',
          "Approvisionner la ligne de production en composants et matériaux",
        ],
      },
      {
        name: 'Chariots élévateurs autonomes',
        tagline: 'Transporter, lever, scanner, localiser, éviter les obstacles',
        desc: "Nos chariots élévateurs autonomes gèrent la logistique interne des installations 24 h/24 et 7 j/7 - en prenant des palettes ou des charges, en les transportant à travers l'installation et en les déposant à l'emplacement cible sans conducteur. Navigation SLAM : aucun marquage au sol ni modification d'infrastructure requis. Intégration WMS/ERP en standard.",
        points: [
          "Transporter des palettes et des charges de façon autonome à travers l'installation",
          'Lever et déposer des charges aux emplacements cibles sans conducteur',
          "Scanner les codes-barres et les codes QR pour l'identification des charges",
        ],
      },
      {
        name: 'Plateforme AMR',
        tagline: 'Entrer, lever, transporter, naviguer, éviter, livrer',
        desc: "La plateforme AMR ICB est un robot mobile autonome configurable pour le transport en installation. La plateforme de base navigue de façon autonome grâce au SLAM LiDAR ; les modules de tâche (dessus à convoyeur, étagère, rouleaux, fixation sur mesure) sont interchangés sans modifier la plateforme. Charge utile : 100-600 kg selon la variante de châssis.",
        points: [
          'Entrer dans les allées étroites et lever de façon autonome',
          "Lever et transporter des charges utiles jusqu'à 600 kg",
          'Naviguer dynamiquement en recalculant les itinéraires autour des obstacles en temps réel',
        ],
      },
      {
        name: 'Centre de contrôle',
        tagline: 'Surveiller, analyser, alerter, réagir, sécuriser, rapporter',
        desc: "Le centre de contrôle ICB est une couche logicielle de supervision qui agrège les données de l'ensemble de la flotte de robots et de l'installation. Il surveille les opérations en temps réel, détecte les anomalies, déclenche des alertes, coordonne les réponses et génère des rapports de conformité et de productivité.",
        points: [
          "Surveiller en temps réel les opérations de la flotte et de l'installation",
          'Analyser les données de production et de logistique pour repérer les goulets d\'étranglement',
          'Alerter automatiquement les opérateurs en cas d\'exceptions et d\'anomalies',
        ],
      },
      {
        name: 'Production autonome',
        tagline: 'Trier, emballer, étiqueter, inspecter, déplacer, synchroniser',
        desc: "Les systèmes de production autonome ICB prennent en charge les tâches de fin de ligne et de post-production sans intervention manuelle. La vision et l'IA pilotent la séquence ; le robot s'adapte en temps réel aux variations de produit. Conçus pour les lignes d'emballage, d'étiquetage et de contrôle qualité.",
        points: [
          'Trier les articles par type, taille ou destination grâce à la vision par IA',
          'Emballer les produits dans des cartons, plateaux ou sacs',
          "Étiqueter les colis avec précision et auditer le placement des étiquettes",
        ],
      },
      {
        name: 'Lignes de production',
        tagline: 'Optimiser, automatiser, contrôler, intégrer, surveiller, améliorer',
        desc: "Nous concevons et automatisons des lignes de production complètes - en intégrant cobots, AMR, convoyeurs et logiciel de contrôle dans un seul système orchestré. Chaque ligne est construite selon le processus du client ; nous la testons dans nos propres installations avant livraison.",
        points: [
          'Optimiser le flux de production et réduire les temps de cycle',
          'Automatiser les postes de travail auparavant manuels',
          "Contrôler l'ensemble de la ligne via une interface SCADA / MES unifiée",
        ],
      },
    ],
    casesHeading: {
      eyebrow: 'Études de cas',
      title: 'Déploiements et projets réels',
      desc: "Les étapes reflètent le statut publié sur le site polcero.com d'origine.",
    },
    cases: [
      {
        sector: 'Construction',
        stage: 'Concept',
        title: 'Robots de transport de matériaux sur les chantiers',
        desc: "Robots autonomes pour le transport de matériaux de construction - briques, blocs creux, éléments préfabriqués - à travers des chantiers en activité. Au stade du concept, avec une expertise du domaine de la construction au sein de l'équipe.",
      },
      {
        sector: 'Construction',
        stage: 'R&D',
        title: 'Drones et robots pour l\'inspection de chantiers',
        desc: "Drones et robots mobiles pour l'inspection, la mesure et la surveillance des chantiers. Sur la base d'une analyse du marché de la construction - au stade de la R&D.",
      },
      {
        sector: 'Logistique',
        stage: 'Pilote',
        title: 'Transport interne autonome : AMR et chariots élévateurs en entrepôt',
        desc: "Transport interne autonome combinant plateformes AMR et chariots élévateurs autonomes dans un environnement d'entrepôt. Actuellement en déploiement pilote.",
      },
    ],
    sectorsHeading: {
      eyebrow: "Secteurs d'activité",
      title: 'Où travaillent les robots ICB',
      desc: "Les systèmes ICB sont déployés dans la fabrication, la logistique et les industries connexes - adaptés au processus et à l'usine spécifiques.",
    },
    sectors: [
      { name: 'Fabrication', desc: 'Montage, alimentation de machines, transport intra-ligne, inspection et palettisation sur des lignes de production de toutes tailles.' },
      { name: 'Agriculture', desc: "Transport interne au sein des installations de transformation agricole, des entrepôts frigorifiques et des stations de conditionnement." },
      { name: 'Construction', desc: 'Transport de matériaux sur les chantiers, assemblage de préfabriqués, inspection et tâches de construction répétitives.' },
      { name: 'Logistique et entreposage', desc: 'Manutention de palettes, chargement et déchargement de remorques, préparation de commandes marchandise-vers-opérateur et tri de dernière touche.' },
      { name: 'Services', desc: "Hôtellerie, logistique de santé, services aux installations et tâches de nettoyage / désinfection." },
      { name: 'Énergies renouvelables', desc: "Automatisation de la production et de l'assemblage de composants pour les fabricants d'énergies renouvelables." },
    ],
    processHeading: {
      eyebrow: 'Comment nous livrons',
      title: 'Cycle de vie du projet - construit sur commande',
      desc: "Chaque déploiement ICB suit un processus en quatre étapes, de la documentation à la mise en service sur site.",
    },
    process: [
      { title: 'Documentation du projet', desc: 'Nous rencontrons le client pour cartographier le processus et documenter les exigences, les contraintes et les critères de réussite. Résultat : un rapport de faisabilité et une proposition de concept.' },
      { title: "Projet d'équipe", desc: "Notre équipe d'ingénierie conçoit le robot ou le système AMR - mécanique, électrique et logiciel - et affine le cerveau IA sur les données du client ou des simulations de processus." },
      { title: 'Construction et intégration', desc: "Fabrication et assemblage dans nos propres installations. Test de recette en usine (FAT) complet et intégration logicielle. Documentation de conformité UE (CE, ISO, NIS2) préparée." },
      { title: 'Livraison et mise en service', desc: "Installation sur site, test de recette sur site (SAT), formation des opérateurs et transfert. Service continu dans le cadre de notre contrat de niveau de service / RaaS." },
    ],
    aiBrain: {
      eyebrow: 'Cerveau IA',
      title: 'Chaque robot ICB fonctionne sur le cerveau IA POLCERO',
      desc: "Tous les produits ICB sont animés par la couche d'intelligence POLCERO AI Systems : modèles VLA, détection de classe YOLO, navigation SLAM et gestion de flotte. Le même cerveau est affiné sur les données de votre processus. Programmation : Python, C++ et ROS.",
      ctaLabel: 'En savoir plus sur AI Systems',
    },
    compliance: {
      eyebrow: 'Conformité et sécurité',
    },
  },
  'ai-systems': {
    stats: [
      { label: 'Latence de commande en périphérie' },
      { label: 'Modèles de fondation affinés' },
      { label: 'Perception multimodale' },
      { label: 'Architecture hybride' },
    ],
    servicesHeading: {
      eyebrow: 'Capacités',
      title: "La couche d'intelligence",
      desc: "La même pile IA anime chaque branche POLCERO. Le matériel robotique peut être le vôtre ou provenir de notre catalogue - nous fournissons le cerveau.",
    },
    services: [
      {
        name: 'Affinage VLA',
        tagline: 'Des modèles de fondation adaptés à votre tâche',
        desc: "Modèles VLA ouverts (GR00T N1.7, π0, OpenVLA) affinés sur les données du client. Une couche d'abstraction nous permet de changer de modèle de base sans réentraîner l'intelligence de votre tâche.",
      },
      {
        name: 'Vision et perception',
        tagline: 'Compréhension de scène en temps réel',
        desc: "Détection de classe YOLO pour la reconnaissance d'objets en temps réel, caméras de profondeur (RGB-D), LiDAR, imagerie multispectrale et thermique, ainsi qu'un VLM pour la compréhension de scène et du langage.",
      },
      {
        name: 'Architecture périphérie + cloud',
        tagline: "Commande sous 10 ms, apprentissage à l'échelle du cloud",
        desc: "Inférence en périphérie embarquée pour une commande sous 10 ms. Cloud pour les mises à jour d'entraînement, l'analytique et la gestion de flotte. Un volant de données améliore continuellement les performances.",
      },
      {
        name: 'Commande classique lorsque cela suffit',
        tagline: "L'IA uniquement là où elle apporte de la valeur",
        desc: "Contrôleurs PID pour la préhension et la découpe simples et répétitives - coût réduit, fiabilité accrue. Nous réservons l'IA aux décisions complexes de perception et de compréhension de scène.",
      },
      {
        name: 'Gestion de flotte',
        tagline: 'Coordonner de nombreux robots comme un seul système',
        desc: "Supervision centrale d'une flotte de robots mixte : allocation des tâches, télémétrie, déploiement des modèles et reporting de productivité depuis une seule couche de contrôle.",
      },
    ],
    processHeading: {
      eyebrow: 'Comment nous intervenons',
      title: 'Des données de processus à un cerveau opérationnel',
      desc: "Nous superposons l'intelligence à votre matériel ou au nôtre en quatre étapes.",
    },
    process: [
      { title: 'Données et cadrage', desc: 'Nous cartographions la tâche, collectons ou simulons les données de processus et définissons les exigences de perception et de commande.' },
      { title: 'Sélection et affinage des modèles', desc: "Nous choisissons les bons modèles VLA / de vision (ou la commande classique) et les affinons sur vos données derrière une couche d'abstraction stable." },
      { title: 'Intégration et déploiement en périphérie', desc: "Nous intégrons le cerveau au robot, déployons l'inférence en périphérie pour une commande à faible latence et validons par rapport aux critères d'acceptation." },
      { title: 'Exploitation de flotte et volant de données', desc: "L'analytique cloud, les mises à jour de modèles et la gestion de flotte continuent d'améliorer les performances après la mise en service." },
    ],
  },
  robots: {
    stats: [
      { label: 'Types de châssis (W4 · T6 · WL4 · Q4)' },
      { label: 'Efficacité énergétique des roues vs pattes' },
      { label: 'Cerveau IA partagé sur toutes les configurations' },
      { label: 'Modules de tâche standardisés' },
    ],
    servicesHeading: {
      eyebrow: 'Le système modulaire',
      title: 'Une plateforme, de nombreux robots',
      desc: "Un cerveau IA partagé, une interface standardisée, des châssis interchangeables et des modules de tâche plug-and-play - déployés pour tout marché, sur commande.",
    },
    services: [
      { name: 'Cerveau IA', tagline: 'La même intelligence sur chaque châssis', desc: "Modèles VLA + YOLO affinés sur les données du client. Inférence en périphérie et entraînement dans le cloud. La même couche d'intelligence s'adapte à chaque châssis et à chaque marché." },
      { name: 'Interface plug-and-play', tagline: "Un point d'intégration unique pour toutes les combinaisons", desc: "Un connecteur mécanique et électrique standardisé. Changez de châssis ou de module de tâche sans repenser la couche d'intelligence - un point d'intégration unique pour toutes les combinaisons." },
      { name: 'Famille de châssis', tagline: 'W4 · T6 · WL4 · Q4', desc: "W4 (à roues), T6 (à chenilles), WL4 (roues-pattes), Q4 (à pattes). Les plateformes à roues sont environ 2,5 fois plus efficaces énergétiquement que celles à pattes sur terrain plat - adaptées au terrain et à la tâche." },
      { name: 'Modules de tâche', tagline: "Le bon outil pour la tâche", desc: "Préhenseur souple, tête de pulvérisation/fertigation, mât de capteurs (RGB-D / multispectral / thermique), transporteur logistique, manipulateur à distance - branchez le bon outil pour la tâche." },
      { name: 'Robots agricoles', tagline: 'Plateformes de champ autonomes', desc: "Plateformes de champ autonomes pour la plantation, l'entretien, la pulvérisation de précision et la récolte sélective. Fusion de capteurs RGB-D + multispectral + thermique pour le suivi de la santé des cultures." },
      { name: 'Robots de chantier', tagline: 'Autonomie du BIM au terrain', desc: "Implantation du BIM au terrain, perçage, terrassement autonome, inspection par rapport à un jumeau numérique. Autonomie supervisée par l'humain de bout en bout." },
      { name: 'Machines IA fixes', tagline: 'Cellules et postes de travail à bras fixe', desc: "Robots à bras fixe et postes de travail intelligents pour l'inspection, le contrôle qualité, l'assemblage répétitif et la manutention sur les lignes de production." },
    ],
    processHeading: {
      eyebrow: 'Comment nous livrons',
      title: 'Configuré et construit sur commande',
      desc: 'Chaque robot est assemblé à partir de la plateforme partagée et adapté à votre processus.',
    },
    process: [
      { title: 'Cadrage et configuration', desc: 'Nous cartographions la tâche et choisissons le châssis, les modules de tâche et les capteurs adaptés au terrain et au travail.' },
      { title: 'Installer le cerveau IA', desc: "La couche d'intelligence partagée est affinée sur vos données et intégrée via l'interface standardisée." },
      { title: 'Construire et valider', desc: 'Assemblage et tests dans nos propres installations, avec un test de recette en usine avant la livraison.' },
      { title: 'Déployer et accompagner', desc: 'Mise en service sur site, formation des opérateurs et service continu - les modules et les châssis peuvent être changés selon l\'évolution des besoins.' },
    ],
    aiBrain: {
      eyebrow: 'Cerveau IA',
      title: 'Chaque configuration fonctionne sur le cerveau IA POLCERO',
      desc: "La plateforme Robots partage la couche d'intelligence POLCERO AI Systems - modèles VLA, vision de classe YOLO, navigation SLAM et gestion de flotte - affinée sur les données de votre processus.",
      ctaLabel: 'En savoir plus sur AI Systems',
    },
  },
  'farma-ai': {
    stats: [
      { label: 'Robot en tant que service, sans investissement' },
      { label: 'Usage de produits chimiques vs pulvérisation totale' },
      { label: 'Précision de placement au semis' },
      { label: 'Étapes du cycle cultural automatisées' },
    ],
    servicesHeading: {
      eyebrow: 'Le cycle cultural',
      title: 'Un cerveau agriculteur-IA, toute la saison',
      desc: "Une flotte de robots de champ autonomes pilotée par le cerveau de supervision « agriculteur-IA » - pour les grandes exploitations maraîchères, livrée en Robot en tant que service.",
    },
    services: [
      { name: 'Plantation', tagline: 'Transplantation et semis direct précis', desc: 'Transplantation rang par rang ou semis direct précis avec navigation RTK/SLAM. Précision de placement sous le centimètre sur le châssis POLCERO-W4.' },
      { name: 'Entretien - désherbage et éclaircissage', tagline: 'Aucun herbicide sur les adventices détectées', desc: "Détection des adventices par vision par ordinateur, complétée d'un désherbage mécanique ou thermique. Aucun herbicide sur les adventices identifiées - uniquement une pulvérisation localisée ciblée." },
      { name: 'Pulvérisation localisée / micro-dosage', tagline: 'La chimie uniquement là où elle est nécessaire', desc: "Application sélective d'engrais ou de produits phytosanitaires uniquement là où l'IA en détecte le besoin. Réduit l'usage de produits chimiques jusqu'à 90 % par rapport à la pulvérisation totale." },
      { name: 'Surveillance', tagline: 'Une carte quotidienne de la santé des cultures', desc: "Scan quotidien des champs avec caméras RGB-D + multispectral + thermique. Carte de santé des cultures, alerte précoce des maladies et prévision de la maturité pour la récolte." },
      { name: 'Récolte sélective', tagline: "Le plus grand défi non résolu de l'automatisation agricole", desc: "Récolte sélective de légumes délicats (à commencer par les pommes de laitue) - le plus grand défi non résolu de l'automatisation agricole. Préhenseur souple et détection de la maturité par IA." },
    ],
    processHeading: {
      eyebrow: 'Comment nous intervenons',
      title: 'Robot en tant que service, le champ d\'abord',
      desc: "Nous prenons en charge la flotte, les opérations et le risque - vous obtenez le résultat par hectare.",
    },
    process: [
      { title: 'Évaluation du champ', desc: "Nous étudions l'exploitation, les cultures et la saison, et convenons des opérations cibles et des indicateurs de réussite." },
      { title: 'Configuration de la flotte et du cerveau', desc: "Nous configurons les robots de champ et réglons le cerveau agriculteur-IA en fonction de la culture, du sol et de la disposition." },
      { title: 'Exploitation supervisée', desc: "Les robots exécutent le cycle cultural en autonomie supervisée par l'humain ; chaque passage alimente la carte de surveillance." },
      { title: 'Bilan de saison et montée en échelle', desc: "Nous examinons le rendement, les économies d'intrants et la disponibilité, puis faisons monter la flotte en échelle pour la saison suivante." },
    ],
    aiBrain: {
      eyebrow: 'Cerveau IA',
      title: 'Animé par le cerveau agriculteur-IA POLCERO',
      desc: "Farma AI fonctionne sur la couche d'intelligence POLCERO AI Systems - vision, perception et gestion de flotte - spécialisée pour l'agriculture et affinée sur vos champs.",
      ctaLabel: 'En savoir plus sur AI Systems',
    },
  },
  'photonic-processors': {
    stats: [
      { label: 'Latence de multiplication matricielle optique' },
      { label: 'Marché 2025-2034' },
      { label: 'TCAC' },
      { label: 'Entreprises de calcul photonique suivies (2026)' },
    ],
    servicesHeading: {
      eyebrow: 'Orientation R&D',
      title: 'Le calcul IA par la lumière',
      desc: "Une orientation de recherche : accélérer l'inférence IA dans nos robots en utilisant la lumière plutôt que la seule électronique - moins de puissance, plus de débit.",
    },
    services: [
      { name: 'Multiplication matricielle optique', tagline: 'Un passage optique vs des milliers de cycles d\'horloge', desc: "L'inférence des réseaux de neurones est dominée par la multiplication matrice-vecteur (GEMM). Les puces photoniques la réalisent avec la lumière traversant des réseaux d'interféromètres de Mach-Zehnder - accomplissant en un seul passage optique ce que l'électronique met des milliers de cycles d'horloge à calculer." },
      { name: 'Architecture hybride photonique-électronique', tagline: 'Calcul optique, activations électroniques', desc: "Les puces photoniques excellent dans les opérations linéaires (calcul matriciel) mais pas dans les opérations non linéaires (fonctions d'activation). L'architecture de consensus associe des cœurs optiques pour le calcul matriciel à des unités électroniques pour les activations - une conception hybride tirant le meilleur des deux." },
      { name: 'De 1,8 Md$ à 14,6 Md$', tagline: "Un marché des accélérateurs en forte croissance", desc: "Le marché mondial des accélérateurs IA photoniques, de 2025 à 2034 (TCAC 26,3 %). En 2026, nous suivons 52 entreprises de calcul photonique dans le monde." },
      { name: "La photonique comme future couche de calcul", tagline: "Changer le substrat, conserver l'intelligence", desc: "À mesure que les accélérateurs photoniques atteignent la maturité (une fenêtre 2027-2031 pour les produits de classe datacenter), l'architecture du cerveau IA POLCERO est conçue pour les absorber - la couche d'abstraction nous permet de changer le substrat de calcul sans réentraîner l'intelligence de la tâche." },
    ],
  },
};
