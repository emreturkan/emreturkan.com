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
