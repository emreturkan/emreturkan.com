import Image from "next/image";
import { getUnsplashPhotos } from "@/lib/actions/get-unsplash";

import PhotosStatistics from "@/components/page/photos/photos-statistics";

const PhotosPage = async () => {
  const photos = await getUnsplashPhotos();

  return (
    <div>
      <PhotosStatistics />
      {/* <div>
        {photos.map((photo) => (
          <Image
            key={photo.id}
            src={photo.urls.regular}
            alt={photo.description}
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL={photo.urls.regular}
            priority
          />
        ))}
      </div> */}
    </div>
  );
};

export default PhotosPage;
