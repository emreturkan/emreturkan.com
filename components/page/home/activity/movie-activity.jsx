import Image from "next/image";
import { getMovie } from "@/lib/actions/get-movie";
import { Star, Heart } from "lucide-react";
import Link from "next/link";

const MovieActivity = async () => {
  const movie = await getMovie();
  const latest = movie?.results?.[0];

  if (!latest) return null;

  return (
    <Link
      href="https://www.themoviedb.org/u/emreturkan/ratings"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2.5 transition-colors duration-200 hover:bg-muted/80"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${latest.poster_path}`}
        alt={latest.title}
        width={36}
        height={54}
        className="rounded object-cover"
        priority
      />
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-medium uppercase tracking-wider text-red-500">
          Watched
        </p>
        <h3 className="text-sm font-medium text-foreground truncate">
          {latest.title}
        </h3>
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
            {latest.vote_average?.toFixed(1)}
          </span>
          {latest.rating != null && (
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3 fill-red-500 text-red-500" />
              {latest.rating}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MovieActivity;
