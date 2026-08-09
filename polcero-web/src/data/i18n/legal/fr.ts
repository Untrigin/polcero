import type { LegalDoc } from '../../legal';

const COMPANY_FR =
  'POLCERO sp. z o.o., dont le siège social est situé à Kietrz, en Pologne, inscrite au Registre des entrepreneurs du Registre national judiciaire (KRS) sous le numéro 0001178417, NIP 8971955510, REGON 542000919 (« POLCERO », « nous »).';
const CONTACT_FR = 'e-mail : biuro@polcero.com, tél. +48 535 777 268.';

export const fr: Record<'privacy' | 'cookies' | 'terms', LegalDoc> = {
  privacy: {
    slug: 'privacy',
    title: 'Politique de confidentialité',
    updated: '8 août 2026',
    intro:
      'La présente Politique de confidentialité explique comment POLCERO traite les données à caractère personnel dans le cadre de ce site web (polcero.com) et des demandes effectuées par son intermédiaire, conformément au Règlement (UE) 2016/679 (RGPD).',
    sections: [
      {
        heading: '1. Responsable du traitement',
        body: [
          `Le responsable du traitement de vos données à caractère personnel est ${COMPANY_FR}`,
          `Pour toute question relative au traitement des données à caractère personnel, vous pouvez nous contacter à l'adresse suivante : ${CONTACT_FR}`,
        ],
      },
      {
        heading: '2. Données que nous collectons',
        body: [
          'Formulaire de contact : le nom, l\'adresse e-mail, la société (facultatif), l\'objet et le contenu du message que vous fournissez lorsque vous nous écrivez.',
          'Données techniques : les journaux du serveur (adresse IP, type de navigateur, date et heure de la requête) générés automatiquement lorsque vous visitez le site, ainsi que les informations stockées dans les cookies et technologies similaires ou lues à partir de ceux-ci (voir notre Politique en matière de cookies).',
          'Nous ne collectons pas sciemment de données auprès d\'enfants et nous ne procédons à aucune prise de décision automatisée ni à aucun profilage produisant des effets juridiques à votre égard.',
        ],
      },
      {
        heading: '3. Finalités et bases juridiques',
        body: [
          'Répondre à votre demande et prendre des mesures à votre demande préalablement à la conclusion d\'un contrat - art. 6, par. 1, point b) du RGPD.',
          'Exploiter, sécuriser et maintenir le site web et poursuivre nos intérêts légitimes, notamment répondre à la correspondance commerciale et prévenir les abus - art. 6, par. 1, point f) du RGPD.',
          'Utiliser des cookies d\'analyse et de marketing - uniquement sur la base de votre consentement, art. 6, par. 1, point a) du RGPD, que vous pouvez retirer à tout moment.',
          'Respecter les obligations légales auxquelles nous sommes soumis (par exemple, la comptabilité, la réponse aux autorités) - art. 6, par. 1, point c) du RGPD.',
        ],
      },
      {
        heading: '4. Cookies et analyse',
        body: [
          'Nous utilisons des cookies essentiels nécessaires au fonctionnement du site et - avec votre consentement - des cookies d\'analyse et de marketing. Vous gérez vos choix via le panneau de paramètres des cookies disponible sur le site. Tous les détails figurent dans notre Politique en matière de cookies.',
        ],
      },
      {
        heading: '5. Destinataires et sous-traitants',
        body: [
          'Vos données peuvent être communiquées à des prestataires de confiance qui les traitent pour notre compte dans le cadre d\'accords de traitement des données, en particulier notre prestataire d\'hébergement et de messagerie et - sous réserve de votre consentement - des prestataires d\'analyse.',
          'Nous ne vendons pas vos données à caractère personnel.',
        ],
      },
      {
        heading: '6. Conservation',
        body: [
          'Les données des demandes sont conservées aussi longtemps que nécessaire pour traiter le dossier, puis pendant la durée requise pour constater, exercer ou défendre des droits en justice. Les données fondées sur le consentement sont conservées jusqu\'à ce que vous retiriez votre consentement. Les journaux du serveur sont conservés pendant une durée limitée à des fins de sécurité et de diagnostic.',
        ],
      },
      {
        heading: '7. Transferts hors de l\'EEE',
        body: [
          'Lorsqu\'un prestataire traite des données en dehors de l\'Espace économique européen, nous garantissons un niveau de protection adéquat au moyen de garanties appropriées, telles que les Clauses contractuelles types de la Commission européenne.',
        ],
      },
      {
        heading: '8. Vos droits',
        body: [
          'Vous avez le droit d\'accéder à vos données, de les rectifier, de les effacer ou d\'en limiter le traitement, le droit à la portabilité des données ainsi que le droit de vous opposer au traitement fondé sur notre intérêt légitime. Lorsque le traitement est fondé sur le consentement, vous pouvez le retirer à tout moment sans que cela n\'affecte la licéité du traitement effectué antérieurement.',
          'Vous avez également le droit d\'introduire une réclamation auprès du Président de l\'Office de protection des données à caractère personnel (Prezes Urzędu Ochrony Danych Osobowych), ul. Stawki 2, 00-193 Varsovie, Pologne.',
        ],
      },
      {
        heading: '9. Contact',
        body: [`Pour exercer vos droits ou poser des questions sur la présente politique, contactez-nous à : ${CONTACT_FR}`],
      },
    ],
  },
  cookies: {
    slug: 'cookies',
    title: 'Politique en matière de cookies',
    updated: '8 août 2026',
    intro:
      'La présente Politique en matière de cookies explique comment POLCERO utilise les cookies et technologies similaires (telles que le stockage local du navigateur) sur polcero.com.',
    sections: [
      {
        heading: '1. Que sont les cookies',
        body: [
          'Les cookies sont de petits fichiers texte stockés sur votre appareil par votre navigateur. Des technologies similaires, telles que le stockage local, fonctionnent de manière comparable. Elles permettent à un site de mémoriser vos actions et vos préférences.',
        ],
      },
      {
        heading: '2. Catégories que nous utilisons',
        body: [
          'Essentiels - nécessaires au fonctionnement du site et à la mémorisation de vos choix de confidentialité. Ils sont toujours actifs et ne requièrent pas de consentement. Exemple : l\'entrée du stockage local qui enregistre vos préférences en matière de cookies.',
          'Analyse - nous aident à comprendre comment le site est utilisé afin de l\'améliorer. Chargés uniquement avec votre consentement.',
          'Marketing - utilisés pour mesurer et personnaliser les campagnes. Chargés uniquement avec votre consentement.',
          'Aucune technologie d\'analyse ou de marketing n\'est chargée avant que vous ne donniez votre consentement.',
        ],
      },
      {
        heading: '3. Gérer votre consentement',
        body: [
          'Lors de votre première visite, une bannière vous permet de tout accepter, de refuser les cookies facultatifs ou de choisir les catégories. Vous pouvez modifier votre décision à tout moment en ouvrant le panneau de paramètres des cookies (le lien « Paramètres des cookies » dans le pied de page).',
          'Vous pouvez également bloquer ou supprimer les cookies dans les paramètres de votre navigateur ; notez que la désactivation des cookies essentiels peut affecter le fonctionnement du site.',
        ],
      },
      {
        heading: '4. Modifications',
        body: [
          'Nous pouvons mettre à jour la présente Politique en matière de cookies à mesure que notre utilisation des cookies évolue. La date indiquée ci-dessus correspond à la dernière révision.',
        ],
      },
      {
        heading: '5. Contact',
        body: [`Des questions sur les cookies ? Contactez-nous à : ${CONTACT_FR}`],
      },
    ],
  },
  terms: {
    slug: 'terms',
    title: 'Conditions générales d\'utilisation',
    updated: '8 août 2026',
    intro:
      'Les présentes Conditions régissent l\'utilisation du site web polcero.com. En utilisant le site web, vous acceptez les présentes Conditions.',
    sections: [
      {
        heading: '1. Exploitant du site web',
        body: [`Le site web est exploité par ${COMPANY_FR}`, `Contact : ${CONTACT_FR}`],
      },
      {
        heading: '2. Utilisation du site web',
        body: [
          'Le site web et son contenu sont fournis à titre informatif concernant POLCERO ainsi que ses produits et services. Vous ne pouvez consulter et utiliser le site qu\'à des fins licites.',
          'Vous vous engagez à ne pas perturber le fonctionnement ou la sécurité du site, à ne pas tenter d\'y accéder de manière non autorisée et à ne pas l\'utiliser d\'une manière portant atteinte aux droits d\'autrui ou au droit applicable.',
        ],
      },
      {
        heading: '3. Propriété intellectuelle',
        body: [
          'L\'ensemble du contenu du site web - textes, graphismes, logos, images, mise en page et logiciels - appartient à POLCERO ou à ses concédants de licence et est protégé par la loi. Vous ne pouvez pas le copier, le distribuer ni créer des œuvres dérivées sans notre consentement écrit préalable, sauf dans les cas autorisés par une disposition légale impérative.',
        ],
      },
      {
        heading: '4. Demandes - absence d\'offre commerciale',
        body: [
          'Les informations publiées sur le site web, y compris les descriptions de produits et les prix indicatifs (« sur demande »), ne constituent pas une offre commerciale au sens de l\'article 66 du Code civil polonais. Il s\'agit d\'une invitation à entamer des négociations. Un accord contraignant ne naît que par la conclusion d\'un contrat distinct.',
          'Les messages envoyés via le formulaire de contact sont des demandes de contact et ne créent aucune obligation pour l\'une ou l\'autre des parties.',
        ],
      },
      {
        heading: '5. Responsabilité',
        body: [
          'Nous veillons à maintenir les informations du site web exactes et à jour, mais nous ne garantissons pas qu\'elles sont complètes, actuelles ou exemptes d\'erreurs. Dans la mesure permise par la loi, POLCERO n\'est pas responsable des décisions prises uniquement sur la base du contenu du site web.',
        ],
      },
      {
        heading: '6. Liens externes',
        body: [
          'Le site web peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables du contenu ni des pratiques en matière de confidentialité de ces sites.',
        ],
      },
      {
        heading: '7. Données à caractère personnel',
        body: [
          'Les données à caractère personnel sont traitées conformément à notre Politique de confidentialité et à notre Politique en matière de cookies.',
        ],
      },
      {
        heading: '8. Réclamations',
        body: [
          `Vous pouvez soumettre des réclamations concernant le fonctionnement du site web par e-mail à biuro@polcero.com. Veuillez décrire le problème et indiquer vos coordonnées. Nous examinerons la réclamation et y répondrons sans retard injustifié, au plus tard dans un délai de 30 jours à compter de sa réception.`,
        ],
      },
      {
        heading: '9. Droit applicable et litiges',
        body: [
          'Les présentes Conditions sont régies par le droit polonais. Tout litige sera tranché par le tribunal polonais compétent pour le siège de POLCERO, sauf disposition contraire de règles impératives de protection des consommateurs.',
        ],
      },
      {
        heading: '10. Modifications des présentes Conditions',
        body: [
          'Nous pouvons modifier les présentes Conditions. La version publiée sur le site web portant la date indiquée ci-dessus s\'applique à votre utilisation actuelle.',
        ],
      },
    ],
  },
};
