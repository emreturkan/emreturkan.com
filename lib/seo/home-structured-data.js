import { siteConfig } from "@/config/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.name,
  alternateName: siteConfig.alternateNames,
  givenName: "Emre",
  familyName: "Turkan",
  url: siteConfig.url,
  image: {
    "@type": "ImageObject",
    url: siteConfig.ogImage,
    width: 1200,
    height: 630,
  },
  email: siteConfig.author.email,
  jobTitle: siteConfig.experience.role,
  worksFor: {
    "@type": "Organization",
    name: siteConfig.experience.company,
    url: "https://entererp.com",
  },
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.twitter,
    siteConfig.links.unsplash,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Istanbul",
    addressRegion: "Istanbul",
    addressCountry: "TR",
  },
  nationality: {
    "@type": "Country",
    name: "Turkey",
  },
  knowsAbout: siteConfig.skills,
  knowsLanguage: ["Turkish", "English"],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Kastamonu University",
    },
    {
      "@type": "EducationalOrganization",
      name: "Burdur Mehmet Akif Ersoy University",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}/#person`,
  },
  inLanguage: "en-US",
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteConfig.url}/#profilepage`,
  url: siteConfig.url,
  name: `${siteConfig.name} - ${siteConfig.experience.role}`,
  mainEntity: { "@id": `${siteConfig.url}/#person` },
};

export const homeJsonLd = [
  personJsonLd,
  websiteJsonLd,
  profilePageJsonLd,
];
