import PhotosStatistics from "@/components/page/photos/photos-statistics-wrapper";
import PhotosWrapper from "@/components/page/photos/photos-wrapper";
import { Suspense } from "react";
import Loading from "@/components/page/photos/loading";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Photography Portfolio - Landscape & Architecture Photos",
  description:
    "Explore Emre Turkan's photography portfolio on Unsplash. High-quality landscape, architecture, and creative photography from Istanbul and beyond. Free to download.",
  keywords: [
    "Emre Turkan photography",
    "Unsplash photographer Istanbul",
    "landscape photography Turkey",
    "architecture photography",
    "creative photography portfolio",
    "free stock photos",
    "Istanbul cityscape",
    "urban photography",
    "travel photography",
    "nature photography",
  ],
  openGraph: {
    title: "Photography Portfolio | Emre Turkan",
    description:
      "High-quality landscape, architecture, and creative photography from Istanbul. Available on Unsplash.",
    url: `${siteConfig.url}/photos`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Emre Turkan Photography Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Portfolio | Emre Turkan",
    description: "Explore my photography collection on Unsplash",
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/photos`,
  },
};

const PhotosPage = () => {
  return (
    <section aria-labelledby="photos-heading">
      <h1 id="photos-heading" className="sr-only">
        Photography Portfolio by Emre Turkan
      </h1>
      <PhotosStatistics />
      <Suspense fallback={<Loading />}>
        <PhotosWrapper />
      </Suspense>
    </section>
  );
};

export default PhotosPage;
