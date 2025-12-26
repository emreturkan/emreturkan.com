import ILikeItWrapper from "@/components/page/i-like-it/i-like-it-wrapper";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "I Like It",
  description:
    "Games and ideas from developers that inspire Emre Turkan. A curated collection of indie games, game design concepts, and creative inspirations.",
  keywords: [
    "indie games",
    "game design inspiration",
    "game development",
    "creative games",
    "game ideas",
  ],
  openGraph: {
    title: "I Like It | Emre Turkan",
    description: "Games and ideas from developers that inspire me.",
    url: `${siteConfig.url}/i-like-it`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/i-like-it`,
  },
};

const ILikeIt = async () => {
  return <ILikeItWrapper />;
};

export default ILikeIt;
