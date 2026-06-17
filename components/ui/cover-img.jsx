"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Native <img> with a graceful fallback, for covers/logos coming from
 * arbitrary external hosts that aren't worth running through next/image
 * (and that the optimizer's host whitelist would otherwise reject).
 */
export default function CoverImg({ src, alt = "", className, fallbackClassName }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-muted text-muted-foreground/40",
          fallbackClassName || className
        )}
      >
        <ImageOff className="h-1/3 w-1/3" aria-hidden="true" />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
