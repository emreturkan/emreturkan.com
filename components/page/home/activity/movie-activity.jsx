import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { getMovie } from "@/lib/actions/get-movie";
import { Star, MessageCircleHeart, ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const MovieActivity = async () => {
  const movie = await getMovie();

  return (
    <Link
      href="https://www.themoviedb.org/u/emreturkan/ratings"
      target="_blank"
      className="group"
    >
      <Card className="border flex h-16 items-center justify-between rounded shadow-sm">
        <CardContent className="flex items-center gap-2 justify-start  ">
          <Image
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.results[0]?.poster_path}`}
            alt={movie.results[0].title}
            width={40}
            height={100}
            className="rounded-lg shadow"
            priority
          />

          <div className="grid gap-1 px-4 py-1">
            <h3 className="text-sm md:text-lg text-primary">
              {movie.results[0].title}
            </h3>

            <div className="flex items-end justify-start gap-4 ">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <p className="text-sm">
                        {movie.results[0].vote_average.toFixed(1)}
                      </p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>TMDB Rating</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center gap-1">
                      <MessageCircleHeart className="w-3 h-3 text-red-400" />
                      <p className="text-sm">{movie.results[0].rating} </p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>My Rating</p>
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
  );
};

export default MovieActivity;
