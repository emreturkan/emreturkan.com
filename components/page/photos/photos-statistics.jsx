import { Card, CardContent } from "@/components/ui/card";
import { getUnsplashPhotosStatistics } from "@/lib/actions/get-unsplash";

const PhotosStatistics = async () => {
  const photosStatistics = await getUnsplashPhotosStatistics();
  return (
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
  );
};

export default PhotosStatistics;
