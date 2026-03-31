"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const statusColors = {
  completed: "bg-emerald-500",
  playing: "bg-blue-500",
  dropped: "bg-red-500",
  backlog: "bg-amber-500",
};

const statusLabels = {
  completed: "Completed",
  playing: "Playing",
  dropped: "Dropped",
  backlog: "Backlog",
};

const filters = ["all", "completed", "playing", "dropped", "backlog"];

function RatingStars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "h-3 w-3",
            star <= rating
              ? "fill-amber-400 text-amber-400"
              : "text-muted-foreground/30"
          )}
        />
      ))}
    </div>
  );
}

export default function GamesClient({ games }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredGames =
    activeFilter === "all"
      ? games
      : games?.filter((game) => game.status === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <h1 className="text-xl font-medium tracking-tight">Games</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Games I&apos;ve played, rated, and reviewed
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium capitalize transition-colors duration-200",
              activeFilter === filter
                ? "bg-foreground text-background"
                : "bg-muted/50 text-muted-foreground hover:text-foreground"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {filteredGames?.length === 0 && (
          <p className="text-sm text-muted-foreground">No games found.</p>
        )}
        {filteredGames?.map((game) => (
          <motion.div
            key={game.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="group flex gap-4 rounded-lg border border-border/50 bg-card/50 p-3 transition-colors duration-200 hover:bg-muted/30"
          >
            {game.cover && (
              <div className="relative h-28 w-20 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={game.cover}
                  alt={game.title}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            )}
            <div className="flex min-w-0 flex-1 flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-medium text-foreground line-clamp-1">
                      {game.title}
                    </h3>
                    <div className="mt-0.5 flex items-center gap-2 text-[10px] text-muted-foreground/70">
                      {game.release_date && <span>{game.release_date}</span>}
                      {game.genres?.length > 0 && (
                        <>
                          <span>·</span>
                          <span className="line-clamp-1">
                            {game.genres.slice(0, 2).join(", ")}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        statusColors[game.status]
                      )}
                    />
                    <span className="text-[10px] text-muted-foreground/70">
                      {statusLabels[game.status]}
                    </span>
                  </div>
                </div>
                {game.review && (
                  <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                    {game.review}
                  </p>
                )}
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <RatingStars rating={game.my_rating} />
                  {game.igdb_rating && (
                    <span className="text-[10px] text-muted-foreground/50">
                      IGDB: {game.igdb_rating}%
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-[10px] text-muted-foreground/70">
                  {game.hours_played > 0 && (
                    <span>{game.hours_played}h played</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
