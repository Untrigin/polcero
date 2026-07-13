/**
 * POLCERO solution/market catalog - the five market verticals the POLCERO
 * platform serves.
 *
 * - id              : stable machine identifier
 * - slug            : URL path segment (e.g. /solutions/[slug])
 * - icon            : lucide-react icon component name
 * - localeKey       : key inside the `solutions` namespace of messages/*.json
 * - relatedBranches : array of branch slugs (from content/branches.ts) that
 *                     directly serve this market
 */

export interface Solution {
  id: string;
  slug: string;
  /** lucide-react icon name */
  icon: string;
  /** Key inside the `solutions` namespace of messages/*.json */
  localeKey: string;
  /** Branch slugs from content/branches.ts relevant to this market */
  relatedBranches: string[];
}

export const solutions: Solution[] = [
  {
    id: 'agriculture',
    slug: 'agriculture',
    icon: 'Wheat',
    localeKey: 'agriculture',
    relatedBranches: ['farma-ai', 'robots', 'ai-systems'],
  },
  {
    id: 'construction',
    slug: 'construction',
    icon: 'HardHat',
    localeKey: 'construction',
    relatedBranches: ['robots', 'ai-systems', 'commander', 'manufacturing'],
  },
  {
    id: 'warehouse',
    slug: 'warehouse',
    icon: 'Warehouse',
    localeKey: 'warehouse',
    relatedBranches: ['icb-robots', 'robots', 'ai-systems'],
  },
  {
    id: 'services',
    slug: 'services',
    icon: 'ShieldCheck',
    localeKey: 'services',
    relatedBranches: ['commander', 'robots', 'ai-systems'],
  },
  {
    id: 'industry',
    slug: 'industry',
    icon: 'Settings2',
    localeKey: 'industry',
    relatedBranches: ['icb-robots', 'manufacturing', 'robots', 'ai-systems'],
  },
];

/** Convenience look-up by slug */
export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

/** Return all solutions that involve a given branch slug */
export function getSolutionsByBranch(branchSlug: string): Solution[] {
  return solutions.filter((s) => s.relatedBranches.includes(branchSlug));
}
