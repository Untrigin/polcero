import type { LegalDoc } from '../../legal';

const COMPANY_NL =
  'POLCERO sp. z o.o., met statutaire zetel in Kietrz, Polen, ingeschreven in het register van ondernemers van het Nationale Gerechtelijke Register (KRS) onder nummer 0001178417, NIP 8971955510, REGON 542000919 ("POLCERO", "wij").';
const CONTACT_NL = 'e-mail: biuro@polcero.com, tel. +48 535 777 268.';

export const nl: Record<'privacy' | 'cookies' | 'terms', LegalDoc> = {
  privacy: {
    slug: 'privacy',
    title: 'Privacybeleid',
    updated: '8 augustus 2026',
    intro:
      'Dit Privacybeleid legt uit hoe POLCERO persoonsgegevens verwerkt in verband met deze website (polcero.com) en de daarmee ingediende aanvragen, in overeenstemming met Verordening (EU) 2016/679 (AVG).',
    sections: [
      {
        heading: '1. Verwerkingsverantwoordelijke',
        body: [
          `De verwerkingsverantwoordelijke voor uw persoonsgegevens is ${COMPANY_NL}`,
          `Voor alle zaken met betrekking tot de verwerking van persoonsgegevens kunt u contact met ons opnemen via: ${CONTACT_NL}`,
        ],
      },
      {
        heading: '2. Welke gegevens wij verzamelen',
        body: [
          'Contactformulier: de naam, het e-mailadres, het bedrijf (optioneel), het onderwerp en de inhoud van het bericht die u opgeeft wanneer u ons schrijft.',
          'Technische gegevens: serverlogboeken (IP-adres, browsertype, datum en tijd van het verzoek) die automatisch worden gegenereerd wanneer u de site bezoekt, en informatie die is opgeslagen in of wordt uitgelezen uit cookies en soortgelijke technologieen (zie ons Cookiebeleid).',
          'Wij verzamelen niet bewust gegevens van kinderen en wij voeren geen geautomatiseerde besluitvorming of profilering uit die rechtsgevolgen voor u heeft.',
        ],
      },
      {
        heading: '3. Doeleinden en rechtsgronden',
        body: [
          'Om op uw aanvraag te reageren en op uw verzoek stappen te ondernemen voorafgaand aan het sluiten van een overeenkomst - art. 6, lid 1, onder b, AVG.',
          'Om de website te exploiteren, te beveiligen en te onderhouden en om onze gerechtvaardigde belangen te behartigen, waaronder het beantwoorden van zakelijke correspondentie en het voorkomen van misbruik - art. 6, lid 1, onder f, AVG.',
          'Om analytische en marketingcookies te gebruiken - uitsluitend op basis van uw toestemming, art. 6, lid 1, onder a, AVG, die u te allen tijde kunt intrekken.',
          'Om te voldoen aan wettelijke verplichtingen waaraan wij zijn onderworpen (bijv. boekhouding, reageren op autoriteiten) - art. 6, lid 1, onder c, AVG.',
        ],
      },
      {
        heading: '4. Cookies en analyse',
        body: [
          'Wij gebruiken essentiele cookies die noodzakelijk zijn voor het functioneren van de site en - met uw toestemming - analytische en marketingcookies. U beheert uw keuzes via het cookie-instellingenpaneel dat op de site beschikbaar is. Alle details vindt u in ons Cookiebeleid.',
        ],
      },
      {
        heading: '5. Ontvangers en verwerkers',
        body: [
          'Uw gegevens kunnen worden gedeeld met vertrouwde leveranciers die deze namens ons verwerken op grond van verwerkersovereenkomsten, met name onze hosting- en e-mailprovider en - onder voorbehoud van uw toestemming - analyseproviders.',
          'Wij verkopen uw persoonsgegevens niet.',
        ],
      },
      {
        heading: '6. Bewaartermijn',
        body: [
          'Aanvraaggegevens worden bewaard zolang als nodig is om de zaak af te handelen en daarna gedurende de periode die vereist is om rechtsvorderingen vast te stellen, uit te oefenen of te verdedigen. Op toestemming gebaseerde gegevens worden bewaard totdat u uw toestemming intrekt. Serverlogboeken worden gedurende een beperkte periode bewaard voor beveiliging en diagnostiek.',
        ],
      },
      {
        heading: '7. Doorgifte buiten de EER',
        body: [
          'Wanneer een leverancier gegevens buiten de Europese Economische Ruimte verwerkt, waarborgen wij een passend beschermingsniveau door middel van passende waarborgen, zoals de Standaardcontractbepalingen van de Europese Commissie.',
        ],
      },
      {
        heading: '8. Uw rechten',
        body: [
          'U heeft het recht op inzage in uw gegevens, op rectificatie, wissing of beperking van de verwerking, op gegevensoverdraagbaarheid en om bezwaar te maken tegen verwerking die is gebaseerd op ons gerechtvaardigd belang. Wanneer de verwerking op toestemming is gebaseerd, kunt u deze te allen tijde intrekken zonder dat dit afbreuk doet aan de rechtmatigheid van de eerdere verwerking.',
          'U heeft ook het recht om een klacht in te dienen bij de voorzitter van het Bureau voor de Bescherming van Persoonsgegevens (Prezes Urzędu Ochrony Danych Osobowych), ul. Stawki 2, 00-193 Warschau, Polen.',
        ],
      },
      {
        heading: '9. Contact',
        body: [`Om uw rechten uit te oefenen of vragen te stellen over dit beleid, neemt u contact met ons op via ${CONTACT_NL}`],
      },
    ],
  },
  cookies: {
    slug: 'cookies',
    title: 'Cookiebeleid',
    updated: '8 augustus 2026',
    intro:
      'Dit Cookiebeleid legt uit hoe POLCERO cookies en soortgelijke technologieen (zoals de lokale opslag van de browser) gebruikt op polcero.com.',
    sections: [
      {
        heading: '1. Wat zijn cookies',
        body: [
          'Cookies zijn kleine tekstbestanden die door uw browser op uw apparaat worden opgeslagen. Soortgelijke technologieen, zoals lokale opslag, werken op een vergelijkbare manier. Zij stellen een site in staat om uw handelingen en voorkeuren te onthouden.',
        ],
      },
      {
        heading: '2. Categorieen die wij gebruiken',
        body: [
          'Essentieel - noodzakelijk voor de werking van de site en om uw privacykeuzes te onthouden. Deze zijn altijd actief en vereisen geen toestemming. Voorbeeld: de vermelding in de lokale opslag die uw cookievoorkeuren vastlegt.',
          'Analytisch - helpen ons te begrijpen hoe de site wordt gebruikt, zodat wij deze kunnen verbeteren. Alleen geladen met uw toestemming.',
          'Marketing - gebruikt om campagnes te meten en te personaliseren. Alleen geladen met uw toestemming.',
          'Er worden geen analytische of marketingtechnologieen geladen voordat u toestemming geeft.',
        ],
      },
      {
        heading: '3. Uw toestemming beheren',
        body: [
          'Bij uw eerste bezoek kunt u via een banner alles accepteren, optionele cookies weigeren of categorieen kiezen. U kunt uw beslissing te allen tijde wijzigen door het cookie-instellingenpaneel te openen (de link "Cookie-instellingen" in de voettekst).',
          'U kunt cookies ook blokkeren of verwijderen in de instellingen van uw browser; houd er rekening mee dat het uitschakelen van essentiele cookies invloed kan hebben op de werking van de site.',
        ],
      },
      {
        heading: '4. Wijzigingen',
        body: [
          'Wij kunnen dit Cookiebeleid bijwerken naarmate ons gebruik van cookies verandert. De datum hierboven geeft de laatste herziening aan.',
        ],
      },
      {
        heading: '5. Contact',
        body: [`Vragen over cookies? Neem contact met ons op via ${CONTACT_NL}`],
      },
    ],
  },
  terms: {
    slug: 'terms',
    title: 'Servicevoorwaarden',
    updated: '8 augustus 2026',
    intro:
      'Deze Voorwaarden regelen het gebruik van de website polcero.com. Door de website te gebruiken, aanvaardt u deze Voorwaarden.',
    sections: [
      {
        heading: '1. Exploitant van de website',
        body: [`De website wordt geexploiteerd door ${COMPANY_NL}`, `Contact: ${CONTACT_NL}`],
      },
      {
        heading: '2. Gebruik van de website',
        body: [
          'De website en de inhoud ervan worden aangeboden voor informatieve doeleinden over POLCERO en haar producten en diensten. U mag de site uitsluitend voor rechtmatige doeleinden bekijken en gebruiken.',
          'U stemt ermee in de werking of beveiliging van de site niet te verstoren, geen ongeautoriseerde toegang te proberen te verkrijgen en de site niet te gebruiken op een wijze die inbreuk maakt op de rechten van anderen of op het toepasselijke recht.',
        ],
      },
      {
        heading: '3. Intellectuele eigendom',
        body: [
          'Alle inhoud op de website - tekst, afbeeldingen, logo\'s, beelden, lay-out en software - is eigendom van POLCERO of haar licentiegevers en wordt beschermd door de wet. U mag deze niet kopieren, verspreiden of er afgeleide werken van maken zonder onze voorafgaande schriftelijke toestemming, behoudens voor zover toegestaan door dwingend recht.',
        ],
      },
      {
        heading: '4. Aanvragen - geen commercieel aanbod',
        body: [
          'Op de website gepubliceerde informatie, waaronder productbeschrijvingen en indicatieve prijzen ("op aanvraag"), vormt geen commercieel aanbod in de zin van artikel 66 van het Poolse Burgerlijk Wetboek. Het is een uitnodiging tot het aangaan van onderhandelingen. Een bindende overeenkomst komt uitsluitend tot stand via een afzonderlijk gesloten contract.',
          'Berichten die via het contactformulier worden verzonden, zijn verzoeken om contact en scheppen geen enkele verplichting voor een van beide partijen.',
        ],
      },
      {
        heading: '5. Aansprakelijkheid',
        body: [
          'Wij zorgen ervoor dat de informatie op de website nauwkeurig en actueel blijft, maar wij garanderen niet dat deze volledig, actueel of foutloos is. Voor zover toegestaan door de wet is POLCERO niet aansprakelijk voor beslissingen die uitsluitend op basis van de inhoud van de website worden genomen.',
        ],
      },
      {
        heading: '6. Externe links',
        body: [
          'De website kan links naar websites van derden bevatten. Wij zijn niet verantwoordelijk voor de inhoud of het privacybeleid van die websites.',
        ],
      },
      {
        heading: '7. Persoonsgegevens',
        body: [
          'Persoonsgegevens worden verwerkt in overeenstemming met ons Privacybeleid en Cookiebeleid.',
        ],
      },
      {
        heading: '8. Klachten',
        body: [
          'U kunt klachten over de werking van de website per e-mail indienen bij biuro@polcero.com. Beschrijf het probleem en vermeld uw contactgegevens. Wij zullen de klacht in behandeling nemen en zonder onnodige vertraging reageren, uiterlijk binnen 30 dagen na ontvangst.',
        ],
      },
      {
        heading: '9. Toepasselijk recht en geschillen',
        body: [
          'Op deze Voorwaarden is Pools recht van toepassing. Eventuele geschillen worden beslecht door de Poolse rechtbank die bevoegd is voor de zetel van POLCERO, tenzij dwingende regels ter bescherming van consumenten anders bepalen.',
        ],
      },
      {
        heading: '10. Wijzigingen in deze Voorwaarden',
        body: [
          'Wij kunnen deze Voorwaarden wijzigen. De op de website gepubliceerde versie met de bovenstaande datum is van toepassing op uw huidige gebruik.',
        ],
      },
    ],
  },
};
