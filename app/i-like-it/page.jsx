import ILikeItWrapper from "@/components/page/i-like-it/i-like-it-wrapper";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Inspirations - Games & Creative Projects That Inspire Me",
  description:
    "Discover the indie games, game design concepts, and creative projects that inspire Emre Turkan. A curated collection of innovative games and developer ideas.",
  keywords: [
    "indie games inspiration",
    "game design concepts",
    "game development ideas",
    "creative games collection",
    "developer inspirations",
    "innovative game design",
    "indie game recommendations",
    "gaming favorites",
    "creative project ideas",
    "game developer inspiration",
  ],
  openGraph: {
    title: "Inspirations | Emre Turkan",
    description:
      "Games and creative projects that inspire my work as a developer.",
    url: `${siteConfig.url}/i-like-it`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Emre Turkan Inspirations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspirations | Emre Turkan",
    description: "Games and creative projects that inspire me",
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/i-like-it`,
  },
};

const ILikeIt = async () => {
  return (
    <section aria-labelledby="inspirations-heading">
      <h1 id="inspirations-heading" className="sr-only">
        Games and Creative Inspirations
      </h1>
      <ILikeItWrapper />
    </section>
  );
};

export default ILikeIt;
