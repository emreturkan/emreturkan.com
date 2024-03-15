import Image from "next/image";
import {
  getUnsplashPhotos,
  getUnsplashPhotosStatistics,
} from "@/lib/actions/get-unsplash";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const PhotosPage = async () => {
  const photos = await getUnsplashPhotos();
  const photosStatistics = await getUnsplashPhotosStatistics();

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 px-16">
        <Card className="bg-gray-900 p-1">
          <CardContent>
            <h3 className="text-lg text-gray-300">Downloads</h3>
            <p className="text-xl font-semibold">
              {photosStatistics.downloads.total}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900">
          <CardContent>
            <h3 className="text-lg text-gray-300">Views</h3>
            <p className="text-xl font-semibold">
              {photosStatistics.views.total}
            </p>
          </CardContent>
        </Card>
      </div>
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
