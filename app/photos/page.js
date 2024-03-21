import PhotosStatistics from "@/components/page/photos/photos-statistics";
import PhotosImage from "@/components/page/photos/photos-image";
import { Suspense } from "react";
import Loading from "@/components/page/photos/loading";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: {
    default: "Photos | " + siteConfig.title,
    template: "%s | " + siteConfig.title,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords + ", photos",
  url: siteConfig.url + "/photos",
  author: {
    name: siteConfig.creator,
    url: siteConfig.url + "/photos",
  },
  creator: siteConfig.creator,
};

const PhotosPage = () => {
  return (
    <div>
      <PhotosStatistics />
      <Suspense fallback={<Loading />}>
        <PhotosImage />
      </Suspense>
    </div>
  );
};

export default PhotosPage;
