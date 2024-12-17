import "./globals.css";
import { ThemeProvider } from "@/components/provider/next-theme-provider";
import NextAuthSessionProvider from "@/components/provider/session-provider";
import Script from "next/script";
import SiteHeader from "@/components/layout/site-header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { siteConfig } from "@/config/site";
import SnowfallItem from "@/components/ui/snow-fall";
export const metadata = {
  title: {
    default: siteConfig.title,
    template: "%s | " + siteConfig.title,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  url: siteConfig.url,
  author: {
    name: siteConfig.creator,
    url: siteConfig.url,
  },
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.creatorUrl),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <Script
          async
          defer
          src="https://eu.umami.is/script.js"
          data-website-id={process.env.UMAMI_API_KEY}
        />
        <NextAuthSessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SnowfallItem />
            <div className="container max-w-3xl py-4 grid items-center gap-8 pb-8 pt-6 md:py-8">
              <SiteHeader />
              <main> {children}</main>
            </div>
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
