import Image from "next/image";
import {
  getUnsplashPhotos,
  getUnsplashPhotosStatistics,
} from "@/lib/actions/get-unsplash";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PhotosPage = async () => {
  const photos = await getUnsplashPhotos();
  const photosStatistics = await getUnsplashPhotosStatistics();

  return (
    <div>
      <div>
        <Card>
          <CardHeader>Downloads</CardHeader>
          <CardContent>{photosStatistics.downloads.total}</CardContent>
        </Card>
        <Card>
          <CardHeader>Views</CardHeader>
          <CardContent>{photosStatistics.views.total}</CardContent>
        </Card>
      </div>
      <div>
        {photos.map((photo) => (
          <Image
            key={photo.id}
            src={photo.urls.regular}
            alt={photo.description}
            width={500}
            height={500}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default PhotosPage;
