import type { ProductRichOverride } from '../../productRich';

// ── Blocs partagés (traduits une fois, réutilisés pour humanoid et mobile-humanoid) ──
const batteryRobot = {
  title: `Batterie et alimentation`,
  lead: `Chaque robot fonctionne avec trois packs de batteries hot-swap logés dans le module central. Un pack est une unité 48 V autonome : la puissance évolue donc avec le nombre de packs, et un pack déchargé se remplace sans outil pendant que le robot continue de travailler sur les autres.`,
  rows: [
    { label: `Tension du pack`, value: '48 V hot-swap' },
    { label: `Énergie du pack`, value: '≈ 864 Wh chacun' },
    { label: `Packs dans le module central`, value: '3 (≈ 2.6 kWh au total)' },
    { label: `Autonomie sur batterie`, value: `≈ 5 h en service courant` },
    { label: `Sur alimentation directe`, value: `24/7 (câble ou réseau)` },
    { label: `Temps de remplacement`, value: '< 60 s par pack, sans outil' },
  ],
};

const swapRobot = {
  title: `Remplacement autonome des batteries — sans temps d'arrêt`,
  lead: `Le robot ne s'éteint jamais complètement pour se recharger. Il fait tourner ses trois packs un par un, fonctionnant sur les deux restants pendant qu'un pack épuisé se recharge — un poste ne s'arrête donc pas pour la batterie.`,
  robot: {
    title: `Le robot le fait lui-même`,
    steps: [
      `Détectant un pack en fin de charge, le robot se rend à la station de recharge et maintient son état sur les deux packs restants.`,
      `Un bras atteint l'arrière du module central, libère le loquet et retire le pack déchargé.`,
      `Il place le pack dans une baie libre de la station à 4 baies et prend à sa place un pack pleinement chargé.`,
      `Le pack neuf s'enclenche ; le robot répète l'opération pour chaque pack à tour de rôle et reprend le travail — jamais éteint, jamais à l'arrêt.`,
    ],
  },
  human: {
    title: `Une personne peut le faire en quelques secondes`,
    steps: [
      `Pas d'extinction ni d'outils : les packs sont hot-swap pendant que le robot reste prêt.`,
      `Appuyez sur le loquet à l'arrière du module central et tirez le pack tout droit.`,
      `Faites glisser un pack chargé jusqu'à l'enclenchement — le robot reprend là où il s'était arrêté.`,
    ],
  },
};

const statusRobot = {
  title: `État des batteries et station de recharge`,
  lead: `Chaque pack rapporte son propre état, de sorte que le robot et ses opérateurs savent toujours quand effectuer un remplacement. Une station de recharge à 4 baies maintient une rotation de packs prêts, et le robot s'y amarre pour remplacer ses propres packs pendant le travail.`,
  points: [
    { title: `État en direct par pack`, text: `État de charge, santé et température de chacun des trois packs, en temps réel.` },
    { title: `Remplacement prédictif`, text: `Le système planifie le prochain remplacement avant qu'un pack ne s'épuise, pour ne jamais interrompre le travail en cours de tâche.` },
    { title: `Station de recharge à 4 baies`, text: `Quatre entrées de charge maintiennent les packs de rechange au maximum et prêts pour la rotation suivante.` },
    { title: `Amarrage autonome`, text: `Le robot fait tourner ses propres packs à la station pendant un poste — sans opérateur ni temps d'arrêt.` },
  ],
};

const visionRobot = {
  title: `Comment le robot voit`,
  lead: `Le robot construit une image unique du monde à partir de plusieurs vues simultanées. Une tête binoculaire à grand champ fournit une image gauche et une image droite ; leur comparaison donne la profondeur ; par-dessus, la couche IA ajoute une vue de perception qui nomme les objets, les surfaces et les personnes.`,
  views: [
    { label: `Gauche`, text: `L'œil gauche de la tête binoculaire — une vue couleur à grand champ de la scène.` },
    { label: `Droite`, text: `L'œil droit — la seconde vue couleur que le robot compare à la gauche.` },
    { label: `Profondeur`, text: `La disparité stéréo entre gauche et droite donne la distance de chaque point de l'image.` },
    { label: `Perception`, text: `La couche IA étiquette les objets, surfaces, obstacles et personnes, et planifie le mouvement suivant sur l'appareil.` },
  ],
  extra: [
    { title: `Caméras de poignet`, text: `Des caméras HD à chaque poignet offrent une vue rapprochée pour une préhension et un assemblage précis.` },
    { title: `LiDAR + ultrasons`, text: `Le LiDAR du châssis et les capteurs à ultrasons cartographient l'espace et détectent les obstacles au-delà des caméras.` },
    { title: `Force et IMU`, text: `Des articulations à retour d'effort et une IMU perçoivent le contact et l'équilibre pour un mouvement sûr et stable.` },
    { title: `Voix et langage`, text: `L'interaction vocale et un modèle de langage permettent à une personne de diriger le robot en langage naturel.` },
  ],
};

const powerRobot = {
  title: `Deux façons de l'alimenter : batteries ou réseau`,
  lead: `Le robot est autonome sur batteries, mais là où un site peut fournir de l'électricité, il fonctionne directement sur le réseau par câble — aucun pack à faire tourner, aucun temps d'arrêt, un coût d'exploitation moindre.`,
  modes: [
    { name: `Batteries hot-swap`, text: `Entièrement mobile et autonome. Trois packs tournent par la station de recharge, de sorte que le robot se déplace partout sans câble.` },
    { name: `Alimentation directe (câble)`, text: `Pour un poste fixe ou un service 24/7, le robot tire son énergie par câble et fonctionne en continu — les batteries deviennent une réserve de secours.` },
    { name: `Infrastructure réseau`, text: `Dans les halls, usines et serres, nous installons des rails d'alimentation fixes ; en extérieur, sur les champs et les cours, des lignes aériennes de conducteurs comme une caténaire de tramway. Le robot tire de la ligne et recharge ses packs pendant qu'il travaille.` },
  ],
};

const R = { battery: batteryRobot, swap: swapRobot, status: statusRobot, vision: visionRobot, power: powerRobot };

export const fr: Record<string, ProductRichOverride> = {
  humanoid: {
    ...R,
    application: {
      alt: `Trois humanoïdes POLCERO travaillant ensemble dans un entrepôt moderne`,
      title: `Trois humanoïdes, un entrepôt`,
      body: `Voilà à quoi ressemble un poste. Dans une même pièce, un humanoïde emballe un colis à l'établi, un deuxième soulève du sol un bac métallique chargé, et un troisième empile des cartons sur un rayonnage. Même robot, trois tâches — chacun est entré dans un espace conçu pour des humains et a pris en charge un travail pensé pour des mains humaines, sans ligne à reconstruire autour d'eux.`,
    },
  },
  'mobile-humanoid': {
    ...R,
    versions: {
      title: `Deux versions de plateforme`,
      lead: `Le même torse humanoïde repose sur la base mobile dont vous avez besoin — une base légère et repliable pour la préparation au sol, ou une base robuste pour soulever de vraies charges.`,
      items: [
        {
          alt: `Humanoïde à plateforme mobile repliable, version 1`,
          name: `V1 — base repliable`,
          blurb: `Le mât se plie en son milieu, de sorte que le robot se penche pour ramasser des objets au sol avec peu de perte de puissance. Les roues de la base font pivoter tout le robot sur place, le rendant agile dans les allées étroites et aux faibles hauteurs de préparation.`,
          specs: [
            { label: `Idéal pour`, value: `Préparation au sol, allées étroites` },
            { label: `Base`, value: `Mât repliable, rotation sur place` },
            { label: `Portée`, value: `Du sol à la hauteur de travail` },
          ],
        },
        {
          alt: `Humanoïde à plateforme mobile robuste, version 2`,
          name: `V2 — base robuste`,
          blurb: `Une plateforme mobile plus puissante conçue pour soulever de vraies charges. Elle conserve le buste humanoïde à double bras mais repose sur une base rigide à forte charge utile pour la manutention et l'assemblage de pièces industrielles plus lourdes.`,
          specs: [
            { label: `Idéal pour`, value: `Manutention et assemblage lourds` },
            { label: `Base`, value: `Plateforme rigide à forte charge utile` },
            { label: `Charge utile nominale`, value: '≈ 7 kg par bras' },
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
        { title: `Mât de perception`, text: `Sur un châssis spécialisé, le module central porte un mât supplémentaire d'outils et de caméras pour la tâche à accomplir.` },
        { title: `LiDAR + ultrasons`, text: `Le LiDAR du châssis et les capteurs à ultrasons cartographient les terrains accidentés et détectent les obstacles au-delà des caméras.` },
        { title: `Multispectral / thermique`, text: `Imagerie multispectrale et thermique en option pour la santé des cultures, l'inspection et le travail de nuit.` },
        { title: `Calcul sur l'appareil`, text: `La détection et la planification s'exécutent sur l'appareil ; les données et la conformité restent dans l'UE.` },
      ],
    },
    robots: {
      title: `La gamme spécialisée, robot par robot`,
      lead: `Chacun de ces robots est le même module central — commande, IA et batteries hot-swap — sur un châssis différent. Gardez le cerveau et les modules de tâche ; changez la plateforme selon le terrain. Ajoutez ou retirez des bras, une pince, une tête de récolte ou un mât de capteurs au connecteur à démontage rapide.`,
      items: [
        {
          alt: `Robot à pattes POLCERO`,
          name: `Robot à pattes`,
          role: `Escaliers, obstacles, terrain irrégulier`,
          body: `Un châssis à quatre pattes qui franchit escaliers, bordures et sols défoncés qu'aucune roue ne peut prendre. Il parcourt des rondes d'inspection à travers usines, postes électriques et sites conçus pour des personnes, pas pour des machines.`,
          modify: `Ajoutez un ou deux bras avec une pince pour la manipulation, ou un mât de capteurs pour l'inspection. Passez à une base à roues ou à chenilles lorsque le sol devient plat ou meuble.`,
        },
        {
          alt: `Robot à chenilles POLCERO`,
          name: `Robot à chenilles`,
          role: `Non revêtu, terrain lourd, chantiers`,
          body: `Un châssis à chenilles pour la boue, les gravats et les sols raides et non revêtus. Il transporte des charges à travers un chantier ou un champ ouvert où les roues s'enlisent et où les pattes sont trop lentes.`,
          modify: `Montez un porteur logistique pour le transport lourd, un bras pour la manutention, ou un mât de relevé pour l'inspection BIM. Le même corps passe aux pattes ou aux roues quand la tâche change.`,
        },
        {
          alt: `Robot à roues POLCERO`,
          name: `Robot à roues`,
          role: `Sols, entrepôts, terrain plat`,
          body: `Un châssis à roues rapide et silencieux pour les sols industriels et les entrepôts — environ 2.5× plus économe en énergie que des pattes sur terrain plat. Idéal pour la patrouille, la surveillance et le transport interne.`,
          modify: `Ajoutez des bras et une pince pour le pick-and-place, un mât de capteurs pour la surveillance, ou un porteur pour le transport. Déplacez le module central sur une base à chenilles pour quitter le revêtement.`,
        },
        {
          alt: `Robot roue-patte POLCERO`,
          name: `Robot roue-patte`,
          role: `Terrain plat, obstacles et rails`,
          body: `Un châssis hybride roue-patte : il roule vite sur le plat et, lorsqu'il rencontre une marche, une bordure ou un rail, les pattes soulèvent les roues par-dessus. Une seule plateforme pour des environnements mixtes qui nécessiteraient autrement deux robots.`,
          modify: `Bras, pince, tête de récolte ou mât de capteurs se montent tous au connecteur à démontage rapide. Retirez les pattes pour une base purement à roues, ou remettez-les quand le parcours devient accidenté.`,
        },
        {
          alt: `Robot à bras POLCERO fixé sur une plateforme ou une machine`,
          name: `Bras sur une plateforme`,
          role: `Lignes de production, machines mobiles, becs`,
          body: `Le module central fixé en un seul point — sur une ligne de production, ou monté sur une machine ou un bec en mouvement. Sur un bec de récolte de laitue, par exemple, les bras coupent et déposent la culture directement sur le tapis pendant que la machine avance.`,
          modify: `Choisissez un ou deux bras avec une pince, un coupeur ou une tête de récolte. Montez-le fixe sur une ligne, ou sur toute machine hôte qui le porte à travers le champ.`,
        },
        {
          alt: `Robot POLCERO circulant sur rails`,
          name: `Robot sur rails`,
          role: `Serres, rangs, itinéraires fixes`,
          body: `Une version guidée sur rails pour les serres et les serres en verre disposées en rangs fixes. Il circule sur les rails de tuyaux chauffants entre les cultures pour une pulvérisation, une surveillance et une récolte sélective précises et répétables.`,
          modify: `Ajoutez une tête de pulvérisation ou de fertigation, un mât de capteurs ou une pince souple. Le même module central quitte les rails pour une base à roues ou roue-patte en terrain ouvert.`,
        },
      ],
    },
  },
  'transport-drone': {
    battery: {
      alt: `Batterie du drone de transport POLCERO`,
      title: `Batterie et alimentation`,
      lead: `Le drone de transport vole sur son propre pack à haut débit et emporte des packs hot-swap pour les robots qu'il livre. Sa mission est de déplacer les robots afin qu'ils arrivent avec leurs propres batteries pleines et dépensent leur énergie sur le travail, pas sur le trajet.`,
      rows: [
        { label: `Charge utile maximale`, value: '500 kg' },
        { label: `Poids du drone`, value: '90 kg' },
        { label: `Transporte`, value: `robots · modules · packs chargés` },
        { label: `Construction`, value: `modulaire` },
      ],
    },
    drone: {
      images: [
        { alt: `Drone de transport POLCERO` },
        { alt: `Drone POLCERO transportant un robot` },
      ],
      title: `Le drone transporte les robots`,
      body: `Notre objectif est que le drone transporte robots et humanoïdes sur les plus longues distances, afin que les robots gardent leur énergie pour la tâche plutôt que de la dépenser à s'y rendre. Le drone transporte aussi des modules et des châssis interchangeables, de sorte qu'un robot arrive en mesure de choisir le module de tâche et la plateforme qu'exige son environnement.`,
      points: [
        `Les robots arrivent sur site avec des batteries pleines et se posent prêts à travailler.`,
        `Châssis et modules de tâche interchangeables voyagent avec le drone.`,
        `Livraison là où la route s'arrête — montagnes, sites sans routes revêtues, zones isolées après une inondation.`,
        `Le maillon manquant du modèle de location à l'heure : un robot sert plusieurs clients le même jour.`,
      ],
    },
  },
  'polcero-os': {
    vision: visionRobot,
  },
};
