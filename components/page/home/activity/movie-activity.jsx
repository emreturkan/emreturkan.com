import Image from "next/image";
import { getMovie } from "@/lib/actions/get-movie";
import { Star, Heart } from "lucide-react";
import Link from "next/link";

const MovieActivity = async () => {
  const movie = await getMovie();

  return (
    <Link
      href="https://www.themoviedb.org/u/emreturkan/ratings"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2.5 transition-colors duration-200 hover:bg-muted/80"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.results[0]?.poster_path}`}
        alt={movie.results[0].title}
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
          {movie.results[0].title}
        </h3>
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
            {movie.results[0].vote_average.toFixed(1)}
          </span>
          <span className="flex items-center gap-1">
            <Heart className="h-3 w-3 fill-red-500 text-red-500" />
            {movie.results[0].rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieActivity;
