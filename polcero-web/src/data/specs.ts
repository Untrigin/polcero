import type { Locale } from '../lib/i18n';
import { de } from './i18n/specs/de';
import { fr } from './i18n/specs/fr';
import { es } from './i18n/specs/es';
import { it } from './i18n/specs/it';
import { pt } from './i18n/specs/pt';
import { nl } from './i18n/specs/nl';

export interface SpecGroup {
  title: string;
  rows: { label: string; values: string[] }[]; // one value per column; use ✓ / o / – or a string
}
export interface SpecsContent {
  eyebrow: string;
  title: string;
  lead: string;
  columns: string[];
  legend: string;
  note: string;
  groups: SpecGroup[];
}

const pl: SpecsContent = {
  eyebrow: 'SPECYFIKACJA',
  title: 'Platforma modułowa - specyfikacja',
  lead: 'Jeden moduł korpusu w kilku konfiguracjach. Poniżej porównanie wariantów platformy POLCERO.',
  columns: ['Humanoid', 'Humanoid na platformie', 'Robot specjalistyczny', 'Dron transportowy'],
  legend: '„–" = niedostępne · „o" = opcja · „✓" = standard',
  note: 'Wartości mają charakter założeń projektowych i celów produktu; produkt jest w rozwoju, a konfiguracja i parametry mogą się zmienić. Prosimy potwierdzić szczegóły z działem sprzedaży przed zamówieniem.',
  groups: [
    {
      title: 'Konstrukcja',
      rows: [
        { label: 'Materiał', values: ['Aluminium i kompozyty', 'Aluminium i kompozyty', 'Aluminium i kompozyty', 'Kompozyty węglowe'] },
        { label: 'Budowa modułowa', values: ['✓', '✓', '✓', '✓'] },
        { label: 'Moduł korpusu (sterowanie + AI)', values: ['✓', '✓', '✓', 'o'] },
        { label: 'Szybkozłącze narzędziowe', values: ['✓', '✓', '✓', '–'] },
      ],
    },
    {
      title: 'Manipulacja',
      rows: [
        { label: 'Liczba ramion', values: ['2', '2', 'o (0–2)', '–'] },
        { label: 'Wymienne moduły zadaniowe', values: ['✓', '✓', '✓', '–'] },
        { label: 'Końcówki (chwytak · głowica zbioru · laser)', values: ['✓', '✓', '✓', '–'] },
      ],
    },
    {
      title: 'Mobilność',
      rows: [
        { label: 'Napęd', values: ['Nogi', 'Platforma jezdna', 'Kołowe · gąsienicowe · kroczące · kołowo-nożne', 'Wielowirnikowy'] },
        { label: 'Pokonywanie schodów i przeszkód', values: ['✓', 'o', '✓', '–'] },
        { label: 'Praca w terenie bez utwardzonych dróg', values: ['o', '–', '✓', '✓'] },
      ],
    },
    {
      title: 'Zasilanie',
      rows: [
        { label: 'Baterie hot-swap', values: ['3', '3', '3', 'o'] },
        { label: 'Wymiana baterii bez przestoju', values: ['✓', '✓', '✓', 'o'] },
        { label: 'Praca lokalna (AI na urządzeniu)', values: ['✓', '✓', '✓', '✓'] },
      ],
    },
    {
      title: 'Percepcja',
      rows: [
        { label: 'Kamery RGBD', values: ['✓', '✓', '✓', '✓'] },
        { label: 'LiDAR', values: ['✓', '✓', '✓', 'o'] },
        { label: 'IMU', values: ['✓', '✓', '✓', '✓'] },
      ],
    },
    {
      title: 'Transport',
      rows: [
        { label: 'Udźwig maksymalny', values: ['–', '–', '–', '500 kg'] },
        { label: 'Waga własna', values: ['–', '–', '–', '90 kg'] },
        { label: 'Przewóz robotów i modułów', values: ['–', '–', '–', '✓'] },
      ],
    },
    {
      title: 'AI i oprogramowanie',
      rows: [
        { label: 'POLCERO OS', values: ['✓', '✓', '✓', '✓'] },
        { label: 'Uczenie z pokazu', values: ['✓', '✓', '✓', 'o'] },
        { label: 'Dane i zgodność w UE', values: ['✓', '✓', '✓', '✓'] },
        { label: 'Dostosowanie do procesu klienta', values: ['✓', '✓', '✓', '✓'] },
      ],
    },
  ],
};

const en: SpecsContent = {
  eyebrow: 'SPECIFICATION',
  title: 'Modular platform - specification',
  lead: 'One core module in several configurations. Below, a comparison of the POLCERO platform variants.',
  columns: ['Humanoid', 'Mobile-platform humanoid', 'Specialized robot', 'Transport drone'],
  legend: '"–" = not available · "o" = optional · "✓" = standard',
  note: 'Values are design assumptions and product targets; the product is under development and configuration and parameters may change. Please confirm details with sales before ordering.',
  groups: [
    {
      title: 'Construction',
      rows: [
        { label: 'Material', values: ['Aluminium & composites', 'Aluminium & composites', 'Aluminium & composites', 'Carbon composites'] },
        { label: 'Modular construction', values: ['✓', '✓', '✓', '✓'] },
        { label: 'Core module (control + AI)', values: ['✓', '✓', '✓', 'o'] },
        { label: 'Quick-release tool connector', values: ['✓', '✓', '✓', '–'] },
      ],
    },
    {
      title: 'Manipulation',
      rows: [
        { label: 'Number of arms', values: ['2', '2', 'o (0–2)', '–'] },
        { label: 'Swappable task modules', values: ['✓', '✓', '✓', '–'] },
        { label: 'End-effectors (gripper · harvest head · laser)', values: ['✓', '✓', '✓', '–'] },
      ],
    },
    {
      title: 'Mobility',
      rows: [
        { label: 'Drive', values: ['Legs', 'Mobile platform', 'Wheeled · tracked · legged · wheel-leg', 'Multirotor'] },
        { label: 'Clears stairs and obstacles', values: ['✓', 'o', '✓', '–'] },
        { label: 'Works off paved roads', values: ['o', '–', '✓', '✓'] },
      ],
    },
    {
      title: 'Power',
      rows: [
        { label: 'Hot-swap batteries', values: ['3', '3', '3', 'o'] },
        { label: 'Battery swap without downtime', values: ['✓', '✓', '✓', 'o'] },
        { label: 'On-device AI (local operation)', values: ['✓', '✓', '✓', '✓'] },
      ],
    },
    {
      title: 'Perception',
      rows: [
        { label: 'RGBD cameras', values: ['✓', '✓', '✓', '✓'] },
        { label: 'LiDAR', values: ['✓', '✓', '✓', 'o'] },
        { label: 'IMU', values: ['✓', '✓', '✓', '✓'] },
      ],
    },
    {
      title: 'Transport',
      rows: [
        { label: 'Maximum payload', values: ['–', '–', '–', '500 kg'] },
        { label: 'Own weight', values: ['–', '–', '–', '90 kg'] },
        { label: 'Carries robots and modules', values: ['–', '–', '–', '✓'] },
      ],
    },
    {
      title: 'AI & software',
      rows: [
        { label: 'POLCERO OS', values: ['✓', '✓', '✓', '✓'] },
        { label: 'Learning by demonstration', values: ['✓', '✓', '✓', 'o'] },
        { label: 'Data & compliance in the EU', values: ['✓', '✓', '✓', '✓'] },
        { label: 'Adapted to the client process', values: ['✓', '✓', '✓', '✓'] },
      ],
    },
  ],
};

const content: Partial<Record<Locale, SpecsContent>> = {
  pl, en, de: de.specs, fr: fr.specs, es: es.specs, it: it.specs, pt: pt.specs, nl: nl.specs,
};
export function getSpecs(locale: Locale): SpecsContent {
  return content[locale] ?? (en as SpecsContent);
}
