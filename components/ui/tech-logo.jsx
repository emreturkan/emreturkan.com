"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTechIcon } from "@/lib/tech-icons";

// Tiny remote SVG/PNG logos don't need next/image; a native <img> with an
// onError fallback chain is simpler and avoids the optimizer/host whitelist.
// Resolves the icon from the tech name first, then any DB-provided image.
export default function TechLogo({ name, dbImg, color, className = "h-4 w-4" }) {
  const sources = [getTechIcon(name, color), dbImg].filter(Boolean);
  const [idx, setIdx] = useState(0);
  const src = sources[idx];

  if (!src) {
    return (
      <ImageOff
        className={cn("text-muted-foreground/40", className)}
        aria-hidden="true"
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      loading="lazy"
      className={cn("object-contain", className)}
      onError={() => setIdx((i) => i + 1)}
    />
  );
}
