import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { getMovie } from "@/lib/actions/get-movie";
import { Star, MessageCircleHeart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const MovieActivity = async () => {
  const movie = await getMovie();

  return (
    <Card className="border-none shadow-none">
      <CardContent>
        <div className="grid gap-2">
          <div className="flex flex-row items-start gap-4 ">
            <div className="relative w-64 h-36 sm:w-40 sm:h-36">
              <Image
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.results[0]?.poster_path}`}
                alt={movie.results[0].title}
                fill
                className="rounded-lg shadow"
                priority
              />
            </div>

            <div className="grid h-full gap-4 ">
              <div>
                <h1>{movie.results[0].title}</h1>
                <p className="text-xs text-muted-foreground">
                  {movie.results[0].overview}
                </p>
              </div>
              <div className="flex items-end justify-start gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <p className="text-sm">
                          {movie.results[0].vote_average.toFixed(1)}
                        </p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>TMDB Puanı</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex items-center gap-1">
                        <MessageCircleHeart className="w-5 h-5 text-red-400" />
                        <p className="text-sm">{movie.results[0].rating} </p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Kendi Puanım</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieActivity;
