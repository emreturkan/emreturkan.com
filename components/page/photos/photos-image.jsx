import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getUnsplashPhotos } from "@/lib/actions/get-unsplash";

const PhotosImage = async () => {
  const photos = await getUnsplashPhotos();
  return (
    <div className="columns-1  gap-3 mt-4 sm:columns-2 lg:columns-2 rounded">
      {photos.map((photo) => (
        <Link
          href={photo.links.html}
          key={photo.id}
          target="_blank"
          className="mb-4 p-0 rounded-lg cursor-pointer"
        >
          <Image
            src={photo.urls.regular}
            alt={photo.description}
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL={photo.urls.regular}
            loading="lazy"
            className="rounded mb-4"
          />
        </Link>
      ))}
    </div>
  );
};

export default PhotosImage;
