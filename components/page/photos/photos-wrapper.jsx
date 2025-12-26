import { getUnsplashPhotos } from "@/lib/actions/get-unsplash";
import PhotosImageClient from "./photos-image";

export default async function PhotosWrapper() {
  const photos = await getUnsplashPhotos();

  return <PhotosImageClient photos={photos} />;
}
