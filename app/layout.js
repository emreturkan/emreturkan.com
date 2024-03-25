import "./globals.css";
import { ThemeProvider } from "@/components/provider/nextThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteHeader from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import { brandon } from "@/font/Brandon";
import Script from "next/script";

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
      <body className={brandon.className}>
        <Script
          async
          defer
          src="https://eu.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_API_KEY}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container max-w-3xl py-4 grid items-center gap-8 pb-8 pt-6 md:py-8">
            <SiteHeader />
            <main> {children}</main>
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
