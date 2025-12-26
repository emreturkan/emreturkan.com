import BookmarksWrapper from "@/components/page/bookmarks/bookmarks-wrapper";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Bookmarks",
  description:
    "Curated collection of articles, resources, and interesting reads about web development, React, JavaScript, and technology by Emre Turkan.",
  keywords: [
    "web development resources",
    "frontend articles",
    "React resources",
    "JavaScript articles",
    "developer bookmarks",
    "tech articles",
  ],
  openGraph: {
    title: "Bookmarks | Emre Turkan",
    description:
      "Curated collection of web development articles and resources.",
    url: `${siteConfig.url}/bookmarks`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bookmarks`,
  },
};

const Bookmarks = async () => {
  return <BookmarksWrapper />;
};

export default Bookmarks;
