"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A drop-in replacement for next/image that never leaves a broken/empty box.
 *
 * - `fallbackSrc` may be a single URL or an ordered list of URLs; each one is
 *   tried in turn as the image fails to load.
 * - Only when `src` is falsy or every source fails does it render a neutral
 *   placeholder with an icon.
 * - Works in both `fill` and fixed width/height modes.
 */
export default function SafeImage({
  src,
  fallbackSrc,
  alt = "",
  className,
  fallbackClassName,
  width,
  height,
  fill,
  ...props
}) {
  // Ordered, de-duplicated chain of sources to try.
  const sources = [src, ...[].concat(fallbackSrc ?? [])].filter(Boolean).filter(
    (v, i, a) => a.indexOf(v) === i
  );
  const [idx, setIdx] = useState(0);
  const imgSrc = sources[idx];
  const failed = idx >= sources.length;

  if (!imgSrc || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-muted text-muted-foreground/40",
          fill && "absolute inset-0 h-full w-full",
          className,
          fallbackClassName
        )}
        style={fill ? undefined : { width, height }}
      >
        <ImageOff className="h-2/5 w-2/5 max-h-5 max-w-5" aria-hidden="true" />
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={className}
      onError={() => setIdx((i) => i + 1)}
    />
  );
}
