import { defineRouting } from "next-intl/routing";

export const locales = [
  "en", "pl", "de", "fr", "es", "it", "pt", "nl",
  "sv", "cs", "ro", "el", "zh", "hi", "ar", "ru", "ja", "uk",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale = "en" as const;

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
