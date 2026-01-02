import Activity from "@/components/page/home/activity";
import Project from "@/components/page/home/project";
import Socials from "@/components/page/home/socials";
import Watchlist from "@/components/page/home/watchlist";
import Welcome from "@/components/page/home/welcome";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Emre Turkan - Senior Frontend Developer | React & Next.js Expert Istanbul",
  description: `${siteConfig.description} View my projects, tech stack, and professional journey in web development.`,
  keywords: [
    ...siteConfig.keywords,
    "portfolio",
    "web developer portfolio",
    "frontend projects",
    "React portfolio",
  ],
  openGraph: {
    title: "Emre Turkan - Senior Frontend Developer",
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
        alt: "Emre Turkan - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emre Turkan - Senior Frontend Developer",
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
    <article itemScope itemType="https://schema.org/ProfilePage">
      <Welcome />
      <Socials />
      <Project />
      <Activity />
      <Watchlist />
    </article>
  );
}
