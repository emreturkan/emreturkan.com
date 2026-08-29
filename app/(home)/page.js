import Activity from "@/components/page/home/activity";
import CopyEmail from "@/components/page/home/copy-email";
import Experience from "@/components/page/home/experience";
import Project from "@/components/page/home/project";
import Socials from "@/components/page/home/socials";
import StackSection from "@/components/page/home/stack";
import PhotosTeaser from "@/components/page/home/photos-teaser";
import Watchlist from "@/components/page/home/watchlist";
import Welcome from "@/components/page/home/welcome";
import { siteConfig } from "@/config/site";
import { homeJsonLd } from "@/lib/seo/home-structured-data";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: { absolute: siteConfig.homeTitle },
  description: `${siteConfig.description} View my projects, tech stack, and professional journey in web development.`,
  keywords: [
    ...siteConfig.keywords,
    "portfolio",
    "web developer portfolio",
    "full stack projects",
    "React portfolio",
  ],
  openGraph: {
    title: "Emre Turkan - Full Stack Developer",
    description: siteConfig.description,
    url: siteConfig.url,
    type: "profile",
    profile: {
      firstName: "Emre",
      lastName: "Turkan",
      username: "emreturkan",
    },
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Emre Turkan - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emre Turkan - Full Stack Developer",
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Welcome />
      <Socials />
      <CopyEmail />
      <section className="mt-16" aria-labelledby="spendwise-home-title">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between gap-4"><span className="rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-700 dark:text-emerald-300">Product in development</span><ShieldCheck className="h-5 w-5 text-muted-foreground" aria-hidden="true" /></div>
          <h2 id="spendwise-home-title" className="mt-6 text-xl font-semibold">Spendwise</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">A Google Ads intelligence and operations platform for explainable reporting, reviewable recommendations, and explicitly approved account changes.</p>
          <Link href="/spendwise" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium">View product and API use case <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
      <Experience />
      <Project />
      <StackSection />
      <Activity />
      <Watchlist />
      <PhotosTeaser />
    </article>
  );
}
