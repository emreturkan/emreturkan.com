import SafeImage from "@/components/ui/safe-image";
import { getMovie } from "@/lib/actions/get-movie";
import { Star, Heart, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const MovieActivity = async () => {
  const movie = await getMovie();
  const latest = movie?.results?.[0];

  if (!latest) return null;

  const poster = latest.poster_path
    ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${latest.poster_path}`
    : null;

  return (
    <Link
      href="https://www.themoviedb.org/u/emreturkan/ratings"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl bg-muted/40 p-2.5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-muted/60"
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-muted ring-1 ring-black/5 dark:ring-white/10">
        <SafeImage
          src={poster}
          alt={latest.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
          Watched
        </p>
        <h3 className="mt-0.5 truncate text-sm font-medium text-foreground">
          {latest.title}
        </h3>
        <div className="mt-0.5 flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" strokeWidth={1.75} />
            {latest.vote_average?.toFixed(1)}
          </span>
          {latest.rating != null && (
            <span className="flex items-center gap-1">
              <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" strokeWidth={1.75} />
              {latest.rating}
            </span>
          )}
        </div>
      </div>

      <ArrowUpRight className="h-4 w-4 shrink-0 self-start text-muted-foreground/40 transition-colors duration-200 group-hover:text-muted-foreground" />
    </Link>
  );
};

export default MovieActivity;
