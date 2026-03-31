import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { getMovieList } from "@/lib/actions/get-movie-list";

const WatchlistActivity = async () => {
  const getList = await getMovieList();
  if (!getList?.items) return null;
  const filteredList = getList.items.slice(0, 5);

  return (
    <div className="mt-4 space-y-1">
      {filteredList.map((movie) => (
        <Link
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 py-2 transition-opacity duration-200 hover:opacity-70"
          key={movie.id}
        >
          <Image
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`}
            alt={movie.title}
            width={32}
            height={48}
            className="rounded object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-foreground truncate">
              {movie.title}
            </h3>
          </div>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
            {movie.vote_average.toFixed(1)}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default WatchlistActivity;
