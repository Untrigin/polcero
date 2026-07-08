import { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { robots as robotCatalog } from "@/content/robots";

const BASE_URL = "https://robotic4u.com";

const staticRoutes = [
  "",
  "/about",
  "/branches",
  "/robots-icb",
  "/ai-systems",
  "/robots",
  "/farma-ai",
  "/commander",
  "/photonic-processors",
  "/energy",
  "/manufacturing",
  "/solutions",
  "/solutions/agriculture",
  "/solutions/construction",
  "/solutions/warehouse",
  "/solutions/services",
  "/solutions/industry",
  "/investors",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of staticRoutes) {
    const alternates: Record<string, string> = {};
    for (const locale of locales) {
      alternates[locale] = `${BASE_URL}/${locale}${route}`;
    }
    alternates["x-default"] = `${BASE_URL}/en${route}`;

    entries.push({
      url: `${BASE_URL}/en${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1.0 : route.startsWith("/solutions") ? 0.7 : 0.8,
      alternates: { languages: alternates },
    });
  }

  for (const robot of robotCatalog) {
    const alternates: Record<string, string> = {};
    for (const locale of locales) {
      alternates[locale] = `${BASE_URL}/${locale}/robots/${robot.slug}`;
    }
    alternates["x-default"] = `${BASE_URL}/en/robots/${robot.slug}`;

    entries.push({
      url: `${BASE_URL}/en/robots/${robot.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages: alternates },
    });
  }

  return entries;
}
