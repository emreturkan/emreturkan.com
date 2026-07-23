import BookmarksWrapper from "@/components/page/bookmarks/bookmarks-wrapper";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Developer Bookmarks - Web Development Resources & Articles",
  description:
    "Curated collection of high-quality articles, tutorials, and resources about React, Next.js, JavaScript, TypeScript, and modern web development. Hand-picked by Emre Turkan.",
  keywords: [
    "web development resources",
    "frontend development articles",
    "React tutorials",
    "Next.js guides",
    "JavaScript articles",
    "TypeScript resources",
    "developer bookmarks",
    "tech articles curated",
    "programming resources",
    "frontend best practices",
    "web dev learning resources",
    "coding tutorials",
  ],
  openGraph: {
    title: "Developer Bookmarks | Emre Turkan",
    description:
      "Curated collection of web development articles, tutorials, and resources.",
    url: `${siteConfig.url}/bookmarks`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Emre Turkan Developer Bookmarks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Bookmarks | Emre Turkan",
    description: "Curated web development resources and articles",
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/bookmarks`,
  },
};

const Bookmarks = async () => {
  return (
    <section>
      <BookmarksWrapper />
    </section>
  );
};

export default Bookmarks;
