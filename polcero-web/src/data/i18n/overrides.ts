// Per-locale translation overrides, deep-merged over the English SiteContent by
// getContent(). Any field left out falls back to English, so a language can be
// translated incrementally. Fill a locale here, then add its code to `locales`
// in src/lib/i18n.ts to publish it. Arrays merge element-by-element (by index),
// so you can translate a single product/industry/branch field and inherit the rest.
import type { Locale } from '../../lib/i18n';
import type { SiteContent } from '../content';
import { de } from './de';
import { fr } from './fr';
import { es } from './es';
import { it } from './it';
import { pt } from './pt';
import { nl } from './nl';
import { sv } from './sv';
import { cs } from './cs';
import { ro } from './ro';
import { el } from './el';
import { zh } from './zh';
import { hi } from './hi';
import { ar } from './ar';
import { ru } from './ru';
import { ja } from './ja';
import { uk } from './uk';

type DeepPartial<T> = T extends (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

export type SiteContentOverride = DeepPartial<SiteContent>;

export const overrides: Partial<Record<Locale, SiteContentOverride>> = {
  de, fr, es, it, pt, nl,
  sv, cs, ro, el, zh, hi, ar, ru, ja, uk,
};
