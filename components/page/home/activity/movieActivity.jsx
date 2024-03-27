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
        <div className="grid gap-4">
          <div className="grid grid-cols-12 md:gap-4 ">
            <div className="relative md:col-span-2 md:w-full md:h-32">
              <Image
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.results[0]?.poster_path}`}
                alt={movie.results[0].title}
                fill
                className="rounded-lg shadow"
                priority
              />
            </div>

            <div className="grid h-full col-span-12 md:col-span-10 gap-4 ">
              <div className="grid">
                <h1>{movie.results[0].title}</h1>
                <p className="text-xs text-muted-foreground w-9/12">
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
                      <p>TMDB Rating</p>
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
                      <p>My Rating</p>
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
