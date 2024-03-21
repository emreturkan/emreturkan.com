import React from "react";
import Link from "next/link";
import Image from "next/image";
import sharp from "sharp";
import { getUnsplashPhotos } from "@/lib/actions/get-unsplash";
const PhotosImage = async () => {
  const photos = await getUnsplashPhotos();
  const blurredDataUrls = await Promise.all(
    photos.map(async (photo) => {
      const response = await fetch(photo.urls.regular);
      const blob = await response.blob();
      const buffer = await blob.arrayBuffer();
      const { data: base64 } = await sharp(buffer)
        .resize(100, 100)
        .jpeg({ quality: 10 })
        .toBuffer({ resolveWithObject: true });
      return `data:image/jpeg;base64,${base64.toString("base64")}`;
    })
  );

  return (
    <div className="columns-1 gap-3 mt-4 sm:columns-2 lg:columns-2 rounded">
      {photos.map((photo, index) => (
        <Link
          href={photo.links.html}
          key={photo.id}
          aria-label={photo.alt_description || "Unsplash Emre Turkan Photo"}
          target="_blank"
          className="mb-4 p-0 rounded-lg cursor-pointer"
        >
          <Image
            src={photo.urls.regular}
            alt={photo.alt_description || "Unsplash Emre Turkan Photo"}
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL={blurredDataUrls[index]}
            loading="lazy"
            className="rounded mb-4 "
          />
        </Link>
      ))}
    </div>
  );
};

export default PhotosImage;
