import type { IndustryPower } from '../../industryPower';

export const cs: Record<string, IndustryPower> = {
  industry: {
    eyebrow: 'INFRASTRUKTURA NAPÁJENÍ',
    title: 'Napájení ze sítě ve výrobní hale',
    lead: 'Hala má proud všude, takže většina robotů jej nemusí nosit s sebou. Podél stanovišť instalujeme pevné napájecí lišty a necháváme roboty pracovat přímo ze sítě — akumulátory se stávají zálohou pro ty, kteří se pohybují mezi stroji.',
    modes: [
      { name: 'Pevné lišty u stanovišť', text: 'Roboti připoutaní k pevnému stanovišti nebo je obsluhující čerpají proud z lišty a běží 24/7 bez jediné výměny.' },
      { name: 'Hot-swap pro mobilní', text: 'Humanoid pohybující se mezi stroji veze tři hot-swap pakety a dobíjí je u nabíjecí stanice.' },
      { name: 'Jedna integrace', text: 'Napájení z lišty i z akumulátoru využívá stejný centrální modul — přepněte robota z kabelového na mobilní provoz bez přestavby.' },
    ],
  },
  agriculture: {
    eyebrow: 'INFRASTRUKTURA NAPÁJENÍ',
    title: 'Napájení celé autonomní farmy',
    lead: 'Farma AI napájí celý pěstební ekosystém ze sítě tam, kde to lze. Skleníky dostávají pevné napájecí lišty; otevřená pole dostávají trolejové vedení jako tramvajová trakce podél řad; kolejnicoví roboti čerpají přímo z vyhřívaných trubkových kolejnic — akumulátory doplňují tam, kam vedení nedosáhne.',
    modes: [
      { name: 'Pevné lišty ve sklenících', text: 'Skleníky a tunely napájejí roboty z pevných lišt, takže flotila pracuje nepřetržitě po celou sezonu.' },
      { name: 'Trolejové vedení na polích', text: 'Na otevřených polích natahujeme trolejové vedení podél řad; robot čerpá z vedení a během práce si dobíjí pakety.' },
      { name: 'Akumulátory mimo síť', text: 'Za hranicí vedení udržují hot-swap pakety polní roboty autonomní — vyměňují se u solárně napájené nabíjecí stanice.' },
    ],
  },
  construction: {
    eyebrow: 'INFRASTRUKTURA NAPÁJENÍ',
    title: 'Napájení tam, kde ještě není síť',
    lead: 'Staveniště má v raných fázích zřídka pevné napájení, takže stavební roboti se opírají o akumulátory a transportní dron doručuje nabité pakety do vzdálených koutů. Kde je dostupné staveništní napájení nebo generátor, běží pevná stanoviště kabelem.',
    modes: [
      { name: 'Hot-swap v terénu', text: 'Pásoví a kráčející roboti vezou tři pakety a vyměňují je u mobilní nabíjecí stanice na místě.' },
      { name: 'Pakety doručené dronem', text: 'Transportní dron shazuje nabité pakety a sbírá vybité tam, kam silnice nedosáhne.' },
      { name: 'Kabelem na pevných bodech', text: 'Kde je staveništní napájení nebo generátor, běží inspekční a manipulační stanoviště nepřetržitě z kabelu.' },
    ],
  },
  logistics: {
    eyebrow: 'INFRASTRUKTURA NAPÁJENÍ',
    title: 'Nabíjecí pruhy ve skladu, pakety na dvoře',
    lead: 'Sklad má proud v celém objektu, takže pro roboty pracující uvnitř pokládáme nabíjecí pruhy a pevné lišty; na dvoře a na cestě běží flotila na hot-swap paketech a dron veze nabité pakety ke vzdáleným výsypkám.',
    modes: [
      { name: 'Nabíjecí pruhy uvnitř', text: 'Roboti se dokují podél nabíjecích pruhů mezi úkoly, takže vychystávání a vnitřní přeprava se kvůli proudu nikdy nezastaví.' },
      { name: 'Hot-swap na dvoře', text: 'Mimo budovu si roboti se třemi pakety sami vyměňují akumulátory u dvorové nabíjecí stanice.' },
      { name: 'Pakety ke vzdáleným výsypkám', text: 'Transportní dron doručuje nabité pakety spolu s robotem, takže přistane připraven k práci.' },
    ],
  },
  'public-sector': {
    eyebrow: 'INFRASTRUKTURA NAPÁJENÍ',
    title: 'Napájení na místě, data na místě',
    lead: 'U veřejných instalací zůstávají na místě jak proud, tak data. Pevná infrastruktura běží z místní sítě přes kabel nebo lištu; mobilní inspekční a hlídkoví roboti běží na hot-swap paketech — a stejně jako modely nemusí nic opustit areál.',
    modes: [
      { name: 'Síť pro pevné instalace', text: 'Stacionární stroje a nabíjecí stanice běží ze sítě budovy přes kabel nebo pevnou lištu.' },
      { name: 'Akumulátory pro hlídky', text: 'Inspekční a hlídkoví roboti zůstávají autonomní na třech hot-swap paketech, vyměňovaných u místní stanice.' },
      { name: 'Vše zůstává lokální', text: 'Napájení, nabíjení i inference v zařízení — vše na místě, bez závislosti odesílané ven.' },
    ],
  },
};
