/**
 * POLCERO branch catalog - the 8 business branches of the group.
 *
 * - id         : stable machine identifier (matches i18n key root)
 * - slug       : URL path segment (e.g. /branches/[slug])
 * - icon       : lucide-react icon component name
 * - badge      : short status / category label shown on cards
 * - localeKey  : top-level key in the messages/*.json branches object
 */

export interface Branch {
  id: string;
  slug: string;
  /** lucide-react icon name - import via `import { <icon> } from 'lucide-react'` */
  icon: string;
  badge: string;
  /** Key inside the `branches` namespace of messages/*.json */
  localeKey: string;
}

export const branches: Branch[] = [
  {
    id: 'icb-robots',
    slug: 'icb-robots',
    icon: 'Bot',
    badge: 'LIVE',
    localeKey: 'icb',
  },
  {
    id: 'ai-systems',
    slug: 'ai-systems',
    icon: 'Brain',
    badge: 'TO ORDER',
    localeKey: 'ai_systems',
  },
  {
    id: 'robots',
    slug: 'robots',
    icon: 'Cpu',
    badge: 'TO ORDER',
    localeKey: 'robots',
  },
  {
    id: 'farma-ai',
    slug: 'farma-ai',
    icon: 'Sprout',
    badge: 'TO ORDER',
    localeKey: 'farma_ai',
  },
  {
    id: 'commander',
    slug: 'commander',
    icon: 'Shield',
    badge: 'DUAL-USE',
    localeKey: 'commander',
  },
  {
    id: 'photonic-processors',
    slug: 'photonic-processors',
    icon: 'Zap',
    badge: 'R&D',
    localeKey: 'photonic',
  },
  {
    id: 'energy',
    slug: 'energy',
    icon: 'Sun',
    badge: 'BACKBONE',
    localeKey: 'energy',
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    icon: 'Factory',
    badge: 'BACKBONE',
    localeKey: 'manufacturing',
  },
];

/** Convenience look-up by slug */
export function getBranchBySlug(slug: string): Branch | undefined {
  return branches.find((b) => b.slug === slug);
}

/** Convenience look-up by id */
export function getBranchById(id: string): Branch | undefined {
  return branches.find((b) => b.id === id);
}
