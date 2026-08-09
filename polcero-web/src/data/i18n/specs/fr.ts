import type { SpecsContent } from '../../specs';
import type { CookieText } from '../../cookieText';

export const fr = {
  specs: {
    eyebrow: 'SPÉCIFICATION',
    title: 'Plateforme modulaire - spécification',
    lead: "Un seul module central en plusieurs configurations. Ci-dessous, une comparaison des variantes de la plateforme POLCERO.",
    columns: ['Humanoïde', 'Humanoïde sur plateforme mobile', 'Robot spécialisé', 'Drone de transport'],
    legend: '« – » = non disponible · « o » = en option · « ✓ » = standard',
    note: "Les valeurs sont des hypothèses de conception et des objectifs produit ; le produit est en cours de développement et la configuration ainsi que les paramètres peuvent évoluer. Veuillez confirmer les détails auprès du service commercial avant toute commande.",
    groups: [
      {
        title: 'Construction',
        rows: [
          { label: 'Matériau', values: ['Aluminium et composites', 'Aluminium et composites', 'Aluminium et composites', 'Composites carbone'] },
          { label: 'Construction modulaire', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Module central (commande + IA)', values: ['✓', '✓', '✓', 'o'] },
          { label: 'Raccord rapide pour outils', values: ['✓', '✓', '✓', '–'] },
        ],
      },
      {
        title: 'Manipulation',
        rows: [
          { label: 'Nombre de bras', values: ['2', '2', 'o (0–2)', '–'] },
          { label: 'Modules de tâche interchangeables', values: ['✓', '✓', '✓', '–'] },
          { label: 'Effecteurs (préhenseur · tête de récolte · laser)', values: ['✓', '✓', '✓', '–'] },
        ],
      },
      {
        title: 'Mobilité',
        rows: [
          { label: 'Entraînement', values: ['Jambes', 'Plateforme mobile', 'À roues · à chenilles · à pattes · roue-patte', 'Multirotor'] },
          { label: 'Franchit escaliers et obstacles', values: ['✓', 'o', '✓', '–'] },
          { label: 'Fonctionne hors routes revêtues', values: ['o', '–', '✓', '✓'] },
        ],
      },
      {
        title: 'Alimentation',
        rows: [
          { label: 'Batteries à échange à chaud', values: ['3', '3', '3', 'o'] },
          { label: 'Échange de batterie sans arrêt', values: ['✓', '✓', '✓', 'o'] },
          { label: "IA embarquée (fonctionnement local)", values: ['✓', '✓', '✓', '✓'] },
        ],
      },
      {
        title: 'Perception',
        rows: [
          { label: 'Caméras RGBD', values: ['✓', '✓', '✓', '✓'] },
          { label: 'LiDAR', values: ['✓', '✓', '✓', 'o'] },
          { label: 'IMU', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
      {
        title: 'Transport',
        rows: [
          { label: 'Charge utile maximale', values: ['–', '–', '–', '500 kg'] },
          { label: 'Poids propre', values: ['–', '–', '–', '90 kg'] },
          { label: 'Transporte robots et modules', values: ['–', '–', '–', '✓'] },
        ],
      },
      {
        title: 'IA et logiciels',
        rows: [
          { label: 'POLCERO OS', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Apprentissage par démonstration', values: ['✓', '✓', '✓', 'o'] },
          { label: "Données et conformité dans l'UE", values: ['✓', '✓', '✓', '✓'] },
          { label: 'Adapté au processus du client', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
    ],
  } as SpecsContent,

  specLabels: {
    construction: 'Construction', material: 'Matériau', modular: 'Construction modulaire', core: 'Module central (commande + IA)', coupler: 'Raccord rapide pour outils',
    mobility: 'Entraînement et mobilité', drive: 'Entraînement', terrain: 'Terrain',
    manip: 'Manipulation', arms: 'Nombre de bras', tasks: 'Modules de tâche', ends: 'Effecteurs interchangeables',
    power: 'Alimentation', batt: 'Batteries à échange à chaud', swap: 'Échange sans arrêt', local: 'Fonctionnement local (IA embarquée)',
    perc: 'Perception', ai: 'IA et logiciels', os: 'POLCERO OS', demo: 'Apprentissage par démonstration', eu: "Données et conformité dans l'UE",
    transport: 'Transport', payload: 'Charge utile maximale', weight: 'Poids propre', carry: 'Transporte robots et modules', autonomy: 'Autonomie', gear: 'Commande et équipement de tâche',
    platform: 'Plateforme', functions: 'Fonctions', planning: 'Planification et supervision des tâches', fleet: 'Gestion de flotte', compat: 'Compatibilité', chassis: 'Compatible avec les châssis',
    yes: 'Oui', optArms: 'En option (0-2)', opt: 'En option', dev: 'En développement', allTypes: 'Tous types de châssis',
    tasksVal: 'Préhenseur · tête de récolte · laser', percCam: 'Caméras, LiDAR', demoVal: "jusqu'à 10× moins de programmation",
    carbon: 'Composites carbone', aluminium: 'Aluminium et composites', multirotor: 'Multirotor',
  },

  drive: {
    humanoid: ['Jambes (bipède)', 'Escaliers, bordures, espaces conçus pour l’humain'],
    'mobile-humanoid': ['Plateforme mobile', 'Halls et sols industriels'],
    'quadruped-robot': ['Châssis à pattes (4 pattes)', 'Escaliers, obstacles, sol accidenté'],
    'tracked-robot': ['Châssis à chenilles', 'Terrain non revêtu, difficile, chantiers'],
    'wheeled-robot': ['Châssis à roues', 'Sols, entrepôts, terrain plat'],
    'wheel-leg-robot': ['Châssis roue-patte', 'Terrain plat, obstacles et rails'],
    'specialized-robots': ['4 châssis interchangeables', 'À pattes · à chenilles · à roues · roue-patte'],
  } as Record<string, [string, string]>,

  cookie: {
    title: 'Nous respectons votre vie privée',
    desc: "Nous utilisons des cookies essentiels pour faire fonctionner ce site. Avec votre consentement, nous utilisons également des cookies d'analyse et de marketing pour l'améliorer. Vous pouvez modifier votre choix à tout moment.",
    acceptAll: 'Tout accepter',
    rejectOptional: 'Refuser les optionnels',
    moreOptions: 'Plus d’options',
    prefTitle: 'Préférences de cookies',
    prefDesc: 'Choisissez les catégories de cookies que vous autorisez. Les cookies essentiels sont toujours activés.',
    essential: 'Essentiels', essentialDesc: 'Nécessaires au fonctionnement de base et à la sécurité du site. Toujours actifs.',
    alwaysActive: 'Toujours actifs',
    analytics: 'Analyse', analyticsDesc: "Nous aident à comprendre comment le site est utilisé afin de l'améliorer.",
    marketing: 'Marketing', marketingDesc: 'Utilisés pour mesurer et personnaliser les campagnes.',
    save: 'Enregistrer les choix', cancel: 'Annuler',
    footer: 'Consultez notre', privacyLink: 'Politique de confidentialité', cookieLink: 'Politique de cookies', close: 'Fermer',
  } as CookieText,
};
