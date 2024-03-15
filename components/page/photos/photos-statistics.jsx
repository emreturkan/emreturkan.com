import { Card, CardContent } from "@/components/ui/card";
import { getUnsplashPhotosStatistics } from "@/lib/actions/get-unsplash";

const PhotosStatistics = async () => {
  const photosStatistics = await getUnsplashPhotosStatistics();
  return (
    <div className="grid grid-cols-2 gap-4 md:px-16">
      <Card className=" p-1">
        <CardContent>
          <h3 className="text-lg text-gray-300">Downloads</h3>
          <p className="text-xl font-semibold">
            {photosStatistics.downloads.total}
          </p>
        </CardContent>
      </Card>
      <Card className=" p-1">
        <CardContent>
          <h3 className="text-lg text-gray-300">Views</h3>
          <p className="text-xl font-semibold">
            {photosStatistics.views.total}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotosStatistics;
