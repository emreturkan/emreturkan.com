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

  console.log("====================================");
  console.log(movie.results[0]);
  console.log("====================================");

  return (
    <Card>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.results[0]?.poster_path}`}
              alt={movie.results[0].title}
              width={75}
              height={100}
              objectFit="cover"
              className=" rounded-lg shadow  "
            />

            <div>
              <h1>{movie.results[0].title}</h1>
              <p className="text-xs text-muted-foreground">
                {movie.results[0].overview}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
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
      </CardContent>
    </Card>
  );
};

export default MovieActivity;
