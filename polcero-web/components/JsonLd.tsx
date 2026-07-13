interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://robotic4u.com/#org",
  name: "POLCERO",
  alternateName: "Polskie Centrum Robotyzacji",
  url: "https://robotic4u.com",
  logo: "https://robotic4u.com/robotic4u_black.svg",
  description:
    "POLCERO designs and manufactures robots, AI systems and components in Poland - make-to-order. One modular platform serving agriculture, construction, logistics, industry and defense.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PL",
    addressRegion: "Silesia",
    addressLocality: "Kietrz",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "biuro@polcero.com",
    telephone: "+48535777268",
    contactType: "sales",
    availableLanguage: ["English", "Polish"],
  },
  foundingLocation: { "@type": "Place", name: "Poland" },
  legalName: "POLCERO sp. z o.o.",
  taxID: "8971955510",
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://robotic4u.com/#website",
  url: "https://robotic4u.com",
  name: "POLCERO",
  inLanguage: ["en", "pl", "de", "fr", "es", "it", "pt", "nl", "sv", "cs", "ro", "el", "zh", "hi", "ar", "ru", "ja", "uk"],
  publisher: { "@id": "https://robotic4u.com/#org" },
};
