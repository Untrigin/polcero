import type { Locale } from '../lib/i18n';
import { de } from './i18n/industryPower/de';
import { fr } from './i18n/industryPower/fr';
import { es } from './i18n/industryPower/es';
import { it } from './i18n/industryPower/it';
import { pt } from './i18n/industryPower/pt';
import { nl } from './i18n/industryPower/nl';
import { ro } from './i18n/industryPower/ro';
import { uk } from './i18n/industryPower/uk';
import { sv } from './i18n/industryPower/sv';
import { cs } from './i18n/industryPower/cs';
import { el } from './i18n/industryPower/el';
import { zh } from './i18n/industryPower/zh';
import { hi } from './i18n/industryPower/hi';
import { ar } from './i18n/industryPower/ar';
import { ru } from './i18n/industryPower/ru';
import { ja } from './i18n/industryPower/ja';

/**
 * Per-industry "power infrastructure" section: robots run on batteries, or on the
 * grid via cable / fixed rails / overhead lines, adapted to what each industry can
 * install. English is the authored base; PL is provided; other locales fall back to EN.
 */
export interface IndustryPower {
  eyebrow: string;
  title: string;
  lead: string;
  modes: { name: string; text: string }[];
}

const en: Record<string, IndustryPower> = {
  industry: {
    eyebrow: 'POWER INFRASTRUCTURE',
    title: 'Grid power on the factory floor',
    lead: 'A hall has power everywhere, so most robots need not carry it. We install fixed power rails along stations and let robots run straight off the grid — batteries become the backup for the ones that roam between machines.',
    modes: [
      { name: 'Fixed rails at stations', text: 'Robots bolted to or serving a fixed station draw power over a rail and run 24/7 without a single swap.' },
      { name: 'Hot-swap for roamers', text: 'A humanoid that moves between machines carries three hot-swap packs and tops them up at a charging dock.' },
      { name: 'One integration', text: 'Rail power and battery power use the same core module — switch a robot from tethered to mobile without redesign.' },
    ],
  },
  agriculture: {
    eyebrow: 'POWER INFRASTRUCTURE',
    title: 'Powering the whole autonomous farm',
    lead: 'Farma AI powers the whole growing ecosystem from the grid where it can. Greenhouses get fixed power rails; open fields get overhead conductor lines like tram catenary along the rows; rail robots draw straight from the heated-pipe rails — batteries fill in where no line reaches.',
    modes: [
      { name: 'Fixed rails in greenhouses', text: 'Glasshouses and tunnels run robots off fixed rails, so the fleet works around the clock through the season.' },
      { name: 'Overhead lines on fields', text: 'On open fields we string overhead conductor lines along the rows; the robot draws from the line and tops up its packs as it works.' },
      { name: 'Batteries off-grid', text: 'Beyond the lines, hot-swap packs keep field robots autonomous — swapped at a solar-fed charging station.' },
    ],
  },
  construction: {
    eyebrow: 'POWER INFRASTRUCTURE',
    title: 'Power where there is no grid yet',
    lead: 'A site rarely has fixed power in the early phases, so construction robots lean on batteries, with the transport drone delivering charged packs to the far corners. Where site power or a generator is available, fixed stations run tethered.',
    modes: [
      { name: 'Hot-swap in the field', text: 'Tracked and legged robots carry three packs and swap them at a mobile charging station on site.' },
      { name: 'Drone-delivered packs', text: 'The transport drone drops charged packs and picks up spent ones where the road does not reach.' },
      { name: 'Tethered at fixed points', text: 'Where site power or a generator is present, inspection and handling stations run continuously off a cable.' },
    ],
  },
  logistics: {
    eyebrow: 'POWER INFRASTRUCTURE',
    title: 'Charging lanes in the warehouse, packs in the yard',
    lead: 'A warehouse has power throughout, so we lay charging lanes and fixed rails for the robots working inside; in the yard and on the road the fleet runs on hot-swap packs, and the drone carries charged packs to remote drops.',
    modes: [
      { name: 'Charging lanes indoors', text: 'Robots dock along charging lanes between tasks, so picking and internal transport never pause for power.' },
      { name: 'Hot-swap in the yard', text: 'Outside the building, three-pack robots rotate their own batteries at a yard charging station.' },
      { name: 'Packs to remote drops', text: 'The transport drone delivers charged packs with the robot, so it lands ready to work.' },
    ],
  },
  'public-sector': {
    eyebrow: 'POWER INFRASTRUCTURE',
    title: 'On-site power, on-site data',
    lead: 'For public installations, both power and data stay on site. Fixed infrastructure runs off the local grid through cable or rail; mobile inspection and patrol robots run on hot-swap packs — and, like the models, nothing has to leave the premises.',
    modes: [
      { name: 'Grid for fixed installs', text: 'Stationary machines and charging docks run off the building grid via cable or fixed rail.' },
      { name: 'Batteries for patrol', text: 'Inspection and patrol robots stay autonomous on three hot-swap packs, swapped at a local dock.' },
      { name: 'Everything stays local', text: 'Power, charging and on-device inference all live on the premises — no dependency sent outside.' },
    ],
  },
};

const pl: Record<string, IndustryPower> = {
  industry: {
    eyebrow: 'INFRASTRUKTURA ZASILANIA',
    title: 'Zasilanie z sieci na hali produkcyjnej',
    lead: 'Hala ma prąd wszędzie, więc większość robotów nie musi go nosić. Wzdłuż stanowisk montujemy stałe szyny zasilające i pozwalamy robotom pracować wprost z sieci - baterie zostają zapasem dla tych, które przemieszczają się między maszynami.',
    modes: [
      { name: 'Stałe szyny przy stanowiskach', text: 'Robot przypisany do stanowiska pobiera prąd z szyny i pracuje 24/7 bez ani jednej wymiany.' },
      { name: 'Hot-swap dla mobilnych', text: 'Humanoid krążący między maszynami wozi trzy baterie hot-swap i doładowuje je na stacji.' },
      { name: 'Jedna integracja', text: 'Zasilanie szynowe i bateryjne korzysta z tego samego modułu korpusu - przełączasz robota z kabla na tryb mobilny bez przeprojektowania.' },
    ],
  },
  agriculture: {
    eyebrow: 'INFRASTRUKTURA ZASILANIA',
    title: 'Zasilanie całej autonomicznej farmy',
    lead: 'Farma AI zasila cały ekosystem uprawy z sieci tam, gdzie to możliwe. Szklarnie dostają stałe szyny zasilające; otwarte pola - napowietrzne linie jak trakcja tramwajowa wzdłuż rzędów; roboty na szynach pobierają prąd wprost z rur grzewczych - baterie uzupełniają tam, gdzie nie sięga linia.',
    modes: [
      { name: 'Stałe szyny w szklarniach', text: 'Szklarnie i tunele zasilają roboty ze stałych szyn, więc flota pracuje całą dobę przez sezon.' },
      { name: 'Linie napowietrzne na polach', text: 'Na otwartych polach rozwieszamy napowietrzne linie wzdłuż rzędów; robot pobiera prąd z linii i doładowuje baterie w trakcie pracy.' },
      { name: 'Baterie poza siecią', text: 'Poza liniami baterie hot-swap utrzymują autonomię robotów polowych - wymieniane na stacji zasilanej ze słońca.' },
    ],
  },
  construction: {
    eyebrow: 'INFRASTRUKTURA ZASILANIA',
    title: 'Zasilanie tam, gdzie nie ma jeszcze sieci',
    lead: 'Plac budowy rzadko ma stałe zasilanie na początku, więc roboty budowlane opierają się na bateriach, a dron transportowy dowozi naładowane baterie w najdalsze zakątki. Gdzie jest zasilanie placu lub agregat - stałe stanowiska pracują z kabla.',
    modes: [
      { name: 'Hot-swap w terenie', text: 'Roboty gąsienicowe i kroczące wożą trzy baterie i wymieniają je na mobilnej stacji ładującej na placu.' },
      { name: 'Baterie z drona', text: 'Dron transportowy zrzuca naładowane baterie i zabiera zużyte tam, gdzie nie dojedzie samochód.' },
      { name: 'Kabel na stałych punktach', text: 'Gdzie jest zasilanie placu lub agregat, stanowiska inspekcji i przeładunku pracują ciągle z kabla.' },
    ],
  },
  logistics: {
    eyebrow: 'INFRASTRUKTURA ZASILANIA',
    title: 'Pasy ładowania w magazynie, baterie na placu',
    lead: 'Magazyn ma prąd w całym obiekcie, więc dla robotów pracujących w środku układamy pasy ładowania i stałe szyny; na placu i w drodze flota pracuje na bateriach hot-swap, a dron dowozi naładowane baterie do odległych punktów.',
    modes: [
      { name: 'Pasy ładowania w środku', text: 'Roboty dokują na pasach ładowania między zadaniami, więc kompletacja i transport wewnętrzny nie stają z powodu prądu.' },
      { name: 'Hot-swap na placu', text: 'Poza budynkiem roboty z trzema bateriami same wymieniają je na placowej stacji ładującej.' },
      { name: 'Baterie do odległych punktów', text: 'Dron transportowy dowozi naładowane baterie razem z robotem, więc ląduje gotowy do pracy.' },
    ],
  },
  'public-sector': {
    eyebrow: 'INFRASTRUKTURA ZASILANIA',
    title: 'Zasilanie na miejscu, dane na miejscu',
    lead: 'W instalacjach publicznych zarówno prąd, jak i dane zostają na miejscu. Stała infrastruktura pracuje z lokalnej sieci przez kabel lub szynę; mobilne roboty inspekcyjne i patrolowe działają na bateriach hot-swap - i, jak modele, nic nie musi opuszczać obiektu.',
    modes: [
      { name: 'Sieć dla stałych instalacji', text: 'Maszyny stacjonarne i stacje ładujące pracują z sieci budynku przez kabel lub stałą szynę.' },
      { name: 'Baterie do patroli', text: 'Roboty inspekcyjne i patrolowe zostają autonomiczne na trzech bateriach hot-swap, wymienianych na lokalnej stacji.' },
      { name: 'Wszystko lokalnie', text: 'Zasilanie, ładowanie i wnioskowanie na urządzeniu - wszystko na miejscu, bez zależności na zewnątrz.' },
    ],
  },
};

const byLocale: Partial<Record<Locale, Record<string, IndustryPower>>> = { en, pl, de, fr, es, it, pt, nl, ro, uk, sv, cs, el, zh, hi, ar, ru, ja };

export function getIndustryPower(slug: string, locale: Locale): IndustryPower | undefined {
  const set = byLocale[locale] ?? en;
  return set[slug] ?? en[slug];
}
