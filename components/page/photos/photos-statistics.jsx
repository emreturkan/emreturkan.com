import { Card, CardContent } from "@/components/ui/card";
import { getUnsplashPhotosStatistics } from "@/lib/actions/get-unsplash";
import PhotoNumber from "./photo-number";
const PhotosStatistics = async () => {
  const photosStatistics = await getUnsplashPhotosStatistics();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-16">
      <Card className=" px-4 py-2 shadow-md">
        <CardContent>
          <h3 className="text-lg text-muted-foreground">Downloads</h3>
          <p className="text-2xl text-primary font-bold">
            <PhotoNumber number={photosStatistics?.downloads.total} />
          </p>
        </CardContent>
      </Card>
      <Card className=" px-4 py-2">
        <CardContent>
          <h3 className="text-lg text-muted-foreground">Views</h3>
          <p className="text-2xl text-primary font-semibold">
            <PhotoNumber number={photosStatistics?.views.total} />
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotosStatistics;
