"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, memo } from "react";

const PhotoCard = memo(function PhotoCard({ photo, priority = false }) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate simple color placeholder for CLS prevention
  const blurDataURL = photo.color
    ? `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${photo.width} ${photo.height}'%3E%3Crect fill='${encodeURIComponent(photo.color)}' width='100%25' height='100%25'/%3E%3C/svg%3E`
    : undefined;

  return (
    <Link
      href={photo.links.html}
      aria-label={photo.alt_description || `Photo by Emre Turkan - ${photo.description || 'Photography'}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative mb-4 block overflow-hidden rounded-lg will-change-transform"
    >
      {/* Placeholder with aspect ratio to prevent CLS */}
      <div
        className={`absolute inset-0 bg-muted animate-shimmer transition-opacity duration-500 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ aspectRatio: `${photo.width}/${photo.height}` }}
        aria-hidden="true"
      />
      <Image
        src={photo.urls.regular}
        alt={photo.alt_description || `Photo by Emre Turkan`}
        width={photo.width}
        height={photo.height}
        className={`rounded-lg transition-all duration-500 group-hover:scale-[1.02] ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onLoad={() => setIsLoaded(true)}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        placeholder={photo.color ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        quality={85}
      />
    </Link>
  );
});

export default function PhotosImageClient({ photos }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className="mt-8 columns-1 gap-4 sm:columns-2"
      role="list"
      aria-label="Photo gallery"
    >
      {photos.map((photo, index) => (
        <div key={photo.id} role="listitem">
          <PhotoCard
            photo={photo}
            priority={index < 2}
          />
        </div>
      ))}
    </motion.div>
  );
}
