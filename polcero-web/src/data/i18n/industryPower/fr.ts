import type { IndustryPower } from '../../industryPower';

export const fr: Record<string, IndustryPower> = {
  industry: {
    eyebrow: `INFRASTRUCTURE ÉLECTRIQUE`,
    title: `Alimentation réseau sur le sol de l'usine`,
    lead: `Un hall a du courant partout, la plupart des robots n'ont donc pas besoin de le transporter. Nous installons des rails d'alimentation fixes le long des postes et laissons les robots fonctionner directement sur le réseau — les batteries deviennent la réserve de ceux qui circulent entre les machines.`,
    modes: [
      { name: `Rails fixes aux postes`, text: `Un robot fixé à un poste ou le desservant tire son courant d'un rail et fonctionne 24/7 sans un seul remplacement.` },
      { name: `Hot-swap pour les mobiles`, text: `Un humanoïde qui circule entre les machines emporte trois packs hot-swap et les recharge à une station de recharge.` },
      { name: `Une seule intégration`, text: `L'alimentation par rail et l'alimentation par batterie utilisent le même module central — faites passer un robot du câble au mode mobile sans reconception.` },
    ],
  },
  agriculture: {
    eyebrow: `INFRASTRUCTURE ÉLECTRIQUE`,
    title: `Alimenter toute la ferme autonome`,
    lead: `Farma AI alimente tout l'écosystème de culture depuis le réseau là où c'est possible. Les serres reçoivent des rails d'alimentation fixes ; les champs ouverts reçoivent des lignes aériennes de conducteurs comme une caténaire de tramway le long des rangs ; les robots sur rails tirent directement des rails de tuyaux chauffants — les batteries comblent là où aucune ligne n'arrive.`,
    modes: [
      { name: `Rails fixes dans les serres`, text: `Serres en verre et tunnels alimentent les robots sur des rails fixes, de sorte que la flotte travaille jour et nuit tout au long de la saison.` },
      { name: `Lignes aériennes sur les champs`, text: `Sur les champs ouverts, nous tendons des lignes aériennes de conducteurs le long des rangs ; le robot tire de la ligne et recharge ses packs pendant qu'il travaille.` },
      { name: `Batteries hors réseau`, text: `Au-delà des lignes, les packs hot-swap gardent les robots de plein champ autonomes — remplacés à une station de recharge alimentée par le solaire.` },
    ],
  },
  construction: {
    eyebrow: `INFRASTRUCTURE ÉLECTRIQUE`,
    title: `De l'électricité là où il n'y a pas encore de réseau`,
    lead: `Un chantier a rarement d'alimentation fixe dans les premières phases, les robots de construction s'appuient donc sur les batteries, le drone de transport livrant des packs chargés jusqu'aux recoins les plus éloignés. Là où l'alimentation du site ou un groupe électrogène est disponible, des postes fixes fonctionnent par câble.`,
    modes: [
      { name: `Hot-swap sur le terrain`, text: `Les robots à chenilles et à pattes emportent trois packs et les remplacent à une station de recharge mobile sur le site.` },
      { name: `Packs livrés par drone`, text: `Le drone de transport dépose des packs chargés et récupère ceux qui sont épuisés là où la route n'arrive pas.` },
      { name: `Par câble aux points fixes`, text: `Là où l'alimentation du site ou un groupe électrogène est présent, les postes d'inspection et de manutention fonctionnent en continu par câble.` },
    ],
  },
  logistics: {
    eyebrow: `INFRASTRUCTURE ÉLECTRIQUE`,
    title: `Voies de recharge dans l'entrepôt, packs dans la cour`,
    lead: `Un entrepôt a du courant partout, nous posons donc des voies de recharge et des rails fixes pour les robots travaillant à l'intérieur ; dans la cour et sur la route, la flotte fonctionne sur des packs hot-swap, et le drone transporte des packs chargés vers les points de dépôt éloignés.`,
    modes: [
      { name: `Voies de recharge en intérieur`, text: `Les robots s'amarrent le long de voies de recharge entre les tâches, de sorte que la préparation et le transport interne ne s'arrêtent jamais faute de courant.` },
      { name: `Hot-swap dans la cour`, text: `À l'extérieur du bâtiment, les robots à trois packs font tourner eux-mêmes leurs batteries à une station de recharge de cour.` },
      { name: `Packs vers les dépôts éloignés`, text: `Le drone de transport livre des packs chargés avec le robot, de sorte qu'il se pose prêt à travailler.` },
    ],
  },
  'public-sector': {
    eyebrow: `INFRASTRUCTURE ÉLECTRIQUE`,
    title: `Électricité sur site, données sur site`,
    lead: `Pour les installations publiques, l'électricité comme les données restent sur site. L'infrastructure fixe fonctionne sur le réseau local par câble ou rail ; les robots mobiles d'inspection et de patrouille fonctionnent sur des packs hot-swap — et, comme les modèles, rien n'a besoin de quitter les lieux.`,
    modes: [
      { name: `Réseau pour les installations fixes`, text: `Les machines stationnaires et les stations de recharge fonctionnent sur le réseau du bâtiment par câble ou rail fixe.` },
      { name: `Batteries pour la patrouille`, text: `Les robots d'inspection et de patrouille restent autonomes sur trois packs hot-swap, remplacés à une station locale.` },
      { name: `Tout reste local`, text: `Alimentation, recharge et inférence sur l'appareil vivent tous sur les lieux — aucune dépendance envoyée à l'extérieur.` },
    ],
  },
};
