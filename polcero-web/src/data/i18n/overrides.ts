// Per-locale translation overrides, deep-merged over the English SiteContent by
// getContent(). Any field left out falls back to English, so a language can be
// translated incrementally. Fill a locale here, then add its code to `locales`
// in src/lib/i18n.ts to publish it. Arrays merge element-by-element (by index),
// so you can translate a single product/industry/branch field and inherit the rest.
//
// Batch order (18 total): en, pl live. Next batches: de fr es it pt nl · sv cs ro el · zh hi ar ru ja uk.
import type { Locale } from '../../lib/i18n';
import type { SiteContent } from '../content';

type DeepPartial<T> = T extends (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

export type SiteContentOverride = DeepPartial<SiteContent>;

export const overrides: Partial<Record<Locale, SiteContentOverride>> = {
  // de: { ... }, fr: { ... }, ... — added per translation batch.
};
