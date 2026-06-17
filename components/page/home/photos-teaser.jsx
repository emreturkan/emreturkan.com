import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getUnsplashPhotos } from "@/lib/actions/get-unsplash";
import { MotionSection } from "@/components/ui/motion-wrapper";
import { cn } from "@/lib/utils";

// Tilt / stacking / overlap per photo — kept as literal classes so Tailwind
// picks them up. Each photo straightens and pops to the front on hover.
const layout = [
  { rotate: "-rotate-6", z: "z-10", ml: "" },
  { rotate: "rotate-3", z: "z-20", ml: "-ml-10 sm:-ml-14" },
  { rotate: "-rotate-3", z: "z-30", ml: "-ml-10 sm:-ml-14" },
  { rotate: "rotate-6", z: "z-40", ml: "-ml-10 sm:-ml-14" },
];

const PhotosTeaser = async () => {
  const photos = await getUnsplashPhotos();
  if (!Array.isArray(photos) || photos.length === 0) return null;

  const top = photos.slice(0, 4);

  return (
    <MotionSection className="mt-16">
      <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Photos
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        A few of my favorite shots
      </p>

      <div className="mt-8 flex items-center justify-center overflow-visible py-2">
        {top.map((photo, i) => (
          <Link
            key={photo.id}
            href="/photos"
            aria-label="View photography portfolio"
            className={cn(
              "group relative block rounded-sm bg-white p-2 shadow-xl shadow-black/40 transition-all duration-300 ease-out hover:z-50 hover:rotate-0 hover:scale-105",
              layout[i % layout.length].rotate,
              layout[i % layout.length].z,
              layout[i % layout.length].ml
            )}
          >
            <div className="relative h-40 w-32 overflow-hidden rounded-[2px] sm:h-52 sm:w-44">
              <Image
                src={photo.urls.small}
                alt={photo.alt_description || "Photo by Emre Turkan"}
                fill
                sizes="(max-width: 640px) 128px, 176px"
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/photos"
          className="group inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          see more
          <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </MotionSection>
  );
};

export default PhotosTeaser;
