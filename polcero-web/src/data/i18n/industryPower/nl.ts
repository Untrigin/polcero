import type { IndustryPower } from '../../industryPower';

export const nl: Record<string, IndustryPower> = {
  industry: {
    eyebrow: 'ENERGIE-INFRASTRUCTUUR',
    title: 'Netvoeding op de fabrieksvloer',
    lead: 'Een hal heeft overal stroom, dus de meeste robots hoeven die niet mee te dragen. We installeren vaste voedingsrails langs de stations en laten robots rechtstreeks van het net draaien — accu’s worden de back-up voor de robots die tussen machines rondgaan.',
    modes: [
      { name: 'Vaste rails bij stations', text: 'Robots die aan een vast station zijn gekoppeld of het bedienen, trekken voeding over een rail en draaien 24/7 zonder één enkele wissel.' },
      { name: 'Hot-swap voor rondgangers', text: 'Een humanoïde die tussen machines beweegt, draagt drie hot-swap pakketten en laadt ze bij aan een laaddock.' },
      { name: 'Eén integratie', text: 'Railvoeding en accuvoeding gebruiken dezelfde kernmodule — schakel een robot van kabel naar mobiel zonder herontwerp.' },
    ],
  },
  agriculture: {
    eyebrow: 'ENERGIE-INFRASTRUCTUUR',
    title: 'De hele autonome boerderij van stroom voorzien',
    lead: 'Farma AI voedt het hele teeltecosysteem vanaf het net waar dat kan. Kassen krijgen vaste voedingsrails; open velden krijgen bovenleidingen zoals tramtractie langs de rijen; railrobots trekken rechtstreeks uit de verwarmingsbuisrails — accu’s vullen aan waar geen lijn reikt.',
    modes: [
      { name: 'Vaste rails in kassen', text: 'Glastuinbouw en tunnels laten robots op vaste rails draaien, zodat de vloot het hele seizoen rond de klok werkt.' },
      { name: 'Bovenleidingen op velden', text: 'Op open velden spannen we bovenleidingen langs de rijen; de robot trekt uit de lijn en laadt zijn pakketten bij terwijl hij werkt.' },
      { name: 'Accu’s buiten het net', text: 'Voorbij de lijnen houden hot-swap pakketten de veldrobots autonoom — gewisseld aan een laadstation dat op zonne-energie draait.' },
    ],
  },
  construction: {
    eyebrow: 'ENERGIE-INFRASTRUCTUUR',
    title: 'Stroom waar nog geen net is',
    lead: 'Een bouwplaats heeft in de eerste fasen zelden vaste stroom, dus bouwrobots leunen op accu’s, waarbij de transportdrone opgeladen pakketten naar de verste hoeken brengt. Waar plaatsvoeding of een aggregaat beschikbaar is, draaien vaste stations aan de kabel.',
    modes: [
      { name: 'Hot-swap in het veld', text: 'Robots met rupsen en poten dragen drie pakketten en wisselen ze aan een mobiel laadstation op de plaats.' },
      { name: 'Door drone geleverde pakketten', text: 'De transportdrone dropt opgeladen pakketten en haalt lege op waar de weg niet reikt.' },
      { name: 'Aan de kabel op vaste punten', text: 'Waar plaatsvoeding of een aggregaat aanwezig is, draaien inspectie- en hanteerstations continu aan een kabel.' },
    ],
  },
  logistics: {
    eyebrow: 'ENERGIE-INFRASTRUCTUUR',
    title: 'Laadbanen in het magazijn, pakketten op het terrein',
    lead: 'Een magazijn heeft overal stroom, dus we leggen laadbanen en vaste rails voor de robots die binnen werken; op het terrein en op de weg draait de vloot op hot-swap pakketten, en de drone brengt opgeladen pakketten naar afgelegen afleverpunten.',
    modes: [
      { name: 'Laadbanen binnen', text: 'Robots dokken langs laadbanen tussen taken door, zodat picken en intern transport nooit stilstaan voor stroom.' },
      { name: 'Hot-swap op het terrein', text: 'Buiten het gebouw rouleren robots met drie pakketten hun eigen accu’s aan een laadstation op het terrein.' },
      { name: 'Pakketten naar afgelegen punten', text: 'De transportdrone levert opgeladen pakketten samen met de robot, zodat die klaar om te werken landt.' },
    ],
  },
  'public-sector': {
    eyebrow: 'ENERGIE-INFRASTRUCTUUR',
    title: 'Stroom op locatie, data op locatie',
    lead: 'Voor publieke installaties blijven zowel stroom als data op locatie. Vaste infrastructuur draait van het lokale net via kabel of rail; mobiele inspectie- en patrouillerobots draaien op hot-swap pakketten — en, net als de modellen, hoeft niets het terrein te verlaten.',
    modes: [
      { name: 'Net voor vaste installaties', text: 'Stationaire machines en laaddocks draaien van het gebouwnet via kabel of vaste rail.' },
      { name: 'Accu’s voor patrouille', text: 'Inspectie- en patrouillerobots blijven autonoom op drie hot-swap pakketten, gewisseld aan een lokaal dock.' },
      { name: 'Alles blijft lokaal', text: 'Voeding, opladen en inferentie op het apparaat leven allemaal op het terrein — geen afhankelijkheid naar buiten gestuurd.' },
    ],
  },
};
