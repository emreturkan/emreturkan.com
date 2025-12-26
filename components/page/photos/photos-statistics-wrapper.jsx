import { getUnsplashPhotosStatistics } from "@/lib/actions/get-unsplash";
import PhotosStatisticsClient from "./photos-statistics";

export default async function PhotosStatistics() {
  const stats = await getUnsplashPhotosStatistics();

  return <PhotosStatisticsClient stats={stats} />;
}
