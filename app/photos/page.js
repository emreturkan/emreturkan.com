import PhotosStatistics from "@/components/page/photos/photos-statistics-wrapper";
import PhotosWrapper from "@/components/page/photos/photos-wrapper";
import { Suspense } from "react";
import Loading from "@/components/page/photos/loading";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Photos",
  description:
    "Photography portfolio by Emre Turkan. High-quality photos from Unsplash featuring landscapes, architecture, and creative shots.",
  keywords: [
    "Emre Turkan photography",
    "Unsplash photographer",
    "Istanbul photographer",
    "landscape photography",
    "creative photography",
  ],
  openGraph: {
    title: "Photos | Emre Turkan",
    description: "Photography portfolio by Emre Turkan on Unsplash.",
    url: `${siteConfig.url}/photos`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/photos`,
  },
};

const PhotosPage = () => {
  return (
    <div>
      <PhotosStatistics />
      <Suspense fallback={<Loading />}>
        <PhotosWrapper />
      </Suspense>
    </div>
  );
};

export default PhotosPage;
