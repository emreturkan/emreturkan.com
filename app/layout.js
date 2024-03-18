import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/nextThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteHeader from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";

const hanken_grotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: siteConfig.name + siteConfig.lastName,
    template: "%s | " + siteConfig.name + siteConfig.lastName,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  url: siteConfig.url,
  author: {
    name: siteConfig.creator,
    url: siteConfig.url,
  },
  creator: siteConfig.creator,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={hanken_grotesk.className}>
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
