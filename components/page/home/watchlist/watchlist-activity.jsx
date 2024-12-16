import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { Star, ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { getMovieList } from "@/lib/actions/get-movie-list";

const WatchlistActivity = async () => {
  const getList = await getMovieList();
  const filteredList = getList.items.slice(0, 5);

  return (
    <div className="grid gap-2">
      {filteredList.map((movie) => (
        <Link
          href="https://www.themoviedb.org/u/emreturkan/ratings"
          target="_blank"
          className="group"
          key={movie.id}
        >
          <Card className="border flex items-center justify-between rounded shadow-sm">
            <CardContent className="flex items-center gap-2 justify-start  ">
              <Image
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`}
                alt={movie.title}
                width={40}
                height={100}
                className="rounded-lg shadow"
                priority
              />

              <div className="grid gap-1 px-4 py-1">
                <h3 className="text-sm md:text-lg text-primary">
                  {movie.title}
                </h3>

                <div className="flex items-end justify-start gap-4 ">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <p className="text-sm">
                            {movie.vote_average.toFixed(1)}
                          </p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>TMDB Rating</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </CardContent>
            <div className="p-4">
              <ExternalLink className="group-hover:text-blue-600 transition duration-300 ease-in-out w-5 h-5" />
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default WatchlistActivity;
