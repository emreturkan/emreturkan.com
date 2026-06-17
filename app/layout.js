import "./globals.css";
import { ThemeProvider } from "@/components/provider/next-theme-provider";
import NextAuthSessionProvider from "@/components/provider/session-provider";
import Script from "next/script";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { siteConfig } from "@/config/site";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "dark light",
};

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    alternateLocale: siteConfig.alternateLocale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Full Stack Developer Portfolio`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      process.env.GOOGLE_SITE_VERIFICATION ||
      "tVU1cwNWQ3ZpTW1F8SeLJ5nopPjwfMnH4gg6cO8hMJo",
    yandex: process.env.YANDEX_VERIFICATION || "",
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
      "tr-TR": `${siteConfig.url}/tr`,
    },
  },
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },
  other: {
    "msapplication-TileColor": "#0a0a0a",
    "apple-mobile-web-app-capable": "yes",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.name,
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

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#service`,
  name: `${siteConfig.name} - Full Stack Development`,
  description: siteConfig.description,
  url: siteConfig.url,
  image: siteConfig.ogImage,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Istanbul",
    addressCountry: "Turkey",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.0082,
    longitude: 28.9784,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 41.0082,
      longitude: 28.9784,
    },
    geoRadius: "50000",
  },
  serviceType: [
    "Full Stack Development",
    "React Development",
    "Next.js Development",
    "Node.js Development",
    "Web Application Development",
    "ERP & E-commerce Development",
  ],
  provider: {
    "@id": `${siteConfig.url}/#person`,
  },
};

const jsonLd = [personJsonLd, websiteJsonLd, professionalServiceJsonLd];

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://eu.umami.is" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        <link rel="dns-prefetch" href="https://api.unsplash.com" />
        <link rel="dns-prefetch" href="https://api.themoviedb.org" />

        {/* Favicon (app/favicon.ico) and apple icon (app/apple-icon.js) are
            wired automatically by Next.js — only the manifest is manual. */}
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans dot-pattern antialiased`} suppressHydrationWarning>
        {/* Analytics - load with afterInteractive strategy for better performance */}
        <Script
          src="https://eu.umami.is/script.js"
          data-website-id={process.env.UMAMI_API_KEY}
          strategy="afterInteractive"
        />
        <NextAuthSessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50">
              Skip to main content
            </a>
            <div className="mx-auto max-w-screen-sm px-6 py-16 md:py-24">
              <SiteHeader />
              <main id="main-content" className="mt-12" role="main">
                {children}
              </main>
              <SiteFooter />
            </div>
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
