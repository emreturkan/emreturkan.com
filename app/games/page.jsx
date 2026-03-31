import GamesWrapper from "@/components/page/games/games-wrapper";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Games - My Gaming Collection & Reviews",
  description:
    "Games I've played, rated, and reviewed. From RPGs to shooters, explore my gaming journey with personal ratings and reviews.",
  keywords: [
    "gaming collection",
    "game reviews",
    "video games",
    "gaming library",
    "game ratings",
    "PC gaming",
    "PlayStation games",
  ],
  openGraph: {
    title: "Games | Emre Turkan",
    description: "My gaming collection with personal ratings and reviews.",
    url: `${siteConfig.url}/games`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Emre Turkan Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Games | Emre Turkan",
    description: "My gaming collection with ratings and reviews",
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/games`,
  },
};

const GamesPage = async () => {
  return (
    <section aria-labelledby="games-heading">
      <h1 id="games-heading" className="sr-only">
        Gaming Collection and Reviews
      </h1>
      <GamesWrapper />
    </section>
  );
};

export default GamesPage;
