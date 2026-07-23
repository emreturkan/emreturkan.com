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
      <Welcome />
      <Socials />
      <CopyEmail />
      <Experience />
      <Project />
      <StackSection />
      <Activity />
      <Watchlist />
      <PhotosTeaser />
    </article>
  );
}
