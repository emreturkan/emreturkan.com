import PhotosStatistics from "@/components/page/photos/photos-statistics";
import PhotosImage from "@/components/page/photos/photos-image";
import { Suspense } from "react";
import Loading from "@/components/page/photos/loading";

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
