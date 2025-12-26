"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

function PhotoCard({ photo }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link
      href={photo.links.html}
      aria-label={photo.alt_description || "Photo by Emre Turkan"}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative mb-4 block overflow-hidden rounded-lg"
    >
      <div
        className={`absolute inset-0 bg-muted animate-pulse transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ aspectRatio: `${photo.width}/${photo.height}` }}
      />
      <Image
        src={photo.urls.regular}
        alt={photo.alt_description || "Photo by Emre Turkan"}
        width={photo.width}
        height={photo.height}
        className={`rounded-lg transition-all duration-700 group-hover:scale-[1.02] ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onLoad={() => setIsLoaded(true)}
        sizes="(max-width: 640px) 100vw, 50vw"
      />
    </Link>
  );
}

export default function PhotosImageClient({ photos }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className="mt-8 columns-1 gap-4 sm:columns-2"
    >
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </motion.div>
  );
}
