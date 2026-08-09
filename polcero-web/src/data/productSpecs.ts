import type { Locale } from '../lib/i18n';
import type { Product } from './content';

export interface SpecGroup { title: string; rows: { label: string; value: string }[] }

const L = {
  pl: {
    construction: 'Konstrukcja', material: 'Materiał', modular: 'Budowa modułowa', core: 'Moduł korpusu (sterowanie + AI)', coupler: 'Szybkozłącze narzędziowe',
    mobility: 'Napęd i mobilność', drive: 'Napęd', terrain: 'Teren',
    manip: 'Manipulacja', arms: 'Liczba ramion', tasks: 'Moduły zadaniowe', ends: 'Wymienne końcówki',
    power: 'Zasilanie', batt: 'Baterie hot-swap', swap: 'Wymiana bez przestoju', local: 'Praca lokalna (AI na urządzeniu)',
    perc: 'Percepcja', ai: 'AI i oprogramowanie', os: 'POLCERO OS', demo: 'Uczenie z pokazu', eu: 'Dane i zgodność w UE',
    transport: 'Transport', payload: 'Udźwig maksymalny', weight: 'Waga własna', carry: 'Przewóz robotów i modułów', autonomy: 'Autonomia', gear: 'Sterowanie i osprzęt zadaniowy',
    platform: 'Platforma', functions: 'Funkcje', planning: 'Planowanie i nadzór zadań', fleet: 'Zarządzanie flotą', compat: 'Zgodność', chassis: 'Współpraca z podwoziami',
    yes: 'Tak', optArms: 'Opcja (0-2)', opt: 'Opcja', dev: 'W rozwoju', allTypes: 'Wszystkie typy podwozi',
    tasksVal: 'Chwytak · głowica zbioru · laser', percCam: 'Kamery, LiDAR', demoVal: 'do 10× mniej programowania',
  },
  en: {
    construction: 'Construction', material: 'Material', modular: 'Modular construction', core: 'Core module (control + AI)', coupler: 'Quick-release tool connector',
    mobility: 'Drive & mobility', drive: 'Drive', terrain: 'Terrain',
    manip: 'Manipulation', arms: 'Number of arms', tasks: 'Task modules', ends: 'Swappable end-effectors',
    power: 'Power', batt: 'Hot-swap batteries', swap: 'Swap without downtime', local: 'Local operation (on-device AI)',
    perc: 'Perception', ai: 'AI & software', os: 'POLCERO OS', demo: 'Learning by demonstration', eu: 'Data & compliance in the EU',
    transport: 'Transport', payload: 'Maximum payload', weight: 'Own weight', carry: 'Carries robots and modules', autonomy: 'Autonomy', gear: 'Control and task equipment',
    platform: 'Platform', functions: 'Functions', planning: 'Task planning and supervision', fleet: 'Fleet management', compat: 'Compatibility', chassis: 'Works with chassis',
    yes: 'Yes', optArms: 'Optional (0-2)', opt: 'Optional', dev: 'In development', allTypes: 'All chassis types',
    tasksVal: 'Gripper · harvest head · laser', percCam: 'Cameras, LiDAR', demoVal: 'up to 10× less programming',
  },
};

const drive: Record<string, Record<'pl' | 'en', [string, string]>> = {
  humanoid: { pl: ['Nogi (dwunożny)', 'Schody, progi, otoczenie pod człowieka'], en: ['Legs (bipedal)', 'Stairs, curbs, human-designed spaces'] },
  'mobile-humanoid': { pl: ['Platforma jezdna', 'Hale i posadzki przemysłowe'], en: ['Mobile platform', 'Halls and industrial floors'] },
  'quadruped-robot': { pl: ['Podwozie kroczące (4 nogi)', 'Schody, przeszkody, teren nierówny'], en: ['Legged chassis (4 legs)', 'Stairs, obstacles, uneven ground'] },
  'tracked-robot': { pl: ['Podwozie gąsienicowe', 'Nieutwardzony, ciężki teren, place budowy'], en: ['Tracked chassis', 'Unpaved, rough terrain, construction sites'] },
  'wheeled-robot': { pl: ['Podwozie kołowe', 'Posadzki, magazyny, płaski teren'], en: ['Wheeled chassis', 'Floors, warehouses, flat ground'] },
  'wheel-leg-robot': { pl: ['Podwozie kołowo-nożne', 'Płaski teren, przeszkody i szyny'], en: ['Wheel-leg chassis', 'Flat ground, obstacles and rails'] },
  'specialized-robots': { pl: ['4 wymienne podwozia', 'Kroczące · gąsienicowe · kołowe · kołowo-nożne'], en: ['4 interchangeable chassis', 'Legged · tracked · wheeled · wheel-leg'] },
};

export function getProductSpecs(product: Product, locale: Locale): SpecGroup[] {
  const loc: 'pl' | 'en' = locale === 'pl' ? 'pl' : 'en';
  const t = L[loc];
  if (product.kind === 'drone') {
    return [
      { title: t.construction, rows: [{ label: t.material, value: locale === 'pl' ? 'Kompozyty węglowe' : 'Carbon composites' }, { label: t.modular, value: t.yes }] },
      { title: t.transport, rows: [{ label: t.payload, value: '500 kg' }, { label: t.weight, value: '90 kg' }, { label: t.carry, value: t.yes }] },
      { title: t.mobility, rows: [{ label: t.drive, value: locale === 'pl' ? 'Wielowirnikowy' : 'Multirotor' }] },
      { title: t.ai, rows: [{ label: t.autonomy, value: t.yes }, { label: t.gear, value: t.dev }, { label: t.eu, value: t.yes }] },
    ];
  }
  if (product.kind === 'software') {
    return [
      { title: t.platform, rows: [{ label: t.os, value: t.yes }, { label: t.local, value: t.yes }, { label: t.eu, value: t.yes }] },
      { title: t.functions, rows: [{ label: t.perc, value: t.percCam }, { label: t.planning, value: t.yes }, { label: t.fleet, value: t.yes }, { label: t.demo, value: t.demoVal }] },
      { title: t.compat, rows: [{ label: t.chassis, value: t.allTypes }, { label: 'Humanoid', value: t.yes }] },
    ];
  }
  // robots
  const d = drive[product.slug]?.[loc] ?? drive.humanoid[loc];
  const isHumanoid = product.kind === 'humanoid' || product.kind === 'mobile-humanoid';
  return [
    { title: t.construction, rows: [{ label: t.material, value: locale === 'pl' ? 'Aluminium i kompozyty' : 'Aluminium & composites' }, { label: t.modular, value: t.yes }, { label: t.core, value: t.yes }, { label: t.coupler, value: t.yes }] },
    { title: t.mobility, rows: [{ label: t.drive, value: d[0] }, { label: t.terrain, value: d[1] }] },
    { title: t.manip, rows: [{ label: t.arms, value: isHumanoid ? '2' : t.optArms }, { label: t.tasks, value: t.tasksVal }, { label: t.ends, value: isHumanoid ? t.yes : t.opt }] },
    { title: t.power, rows: [{ label: t.batt, value: '3' }, { label: t.swap, value: t.yes }, { label: t.local, value: t.yes }] },
    { title: t.perc, rows: [{ label: 'RGBD', value: t.yes }, { label: 'LiDAR', value: t.yes }, { label: 'IMU', value: t.yes }] },
    { title: t.ai, rows: [{ label: t.os, value: t.yes }, { label: t.demo, value: t.yes }, { label: t.eu, value: t.yes }] },
  ];
}
