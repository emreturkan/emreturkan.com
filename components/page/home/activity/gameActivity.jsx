import {
  getGameActivity,
  getGameDetails,
  getSteamAchievement,
  getSteamAchievementDetails,
  getSteamStats,
} from "@/lib/actions/get-steam";
import Image from "next/image";
import { Clock, Trophy } from "lucide-react";
import { cn, minToHour } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const GameActivity = async () => {
  const lastActivity = await getGameActivity();
  const gameDetail = await getGameDetails(lastActivity.response.games[0].appid);
  const capsule_image = gameDetail?.header_image;
  const gameInfo = await getSteamStats(lastActivity.response.games[0].appid);

  const actived = await getSteamAchievement(
    lastActivity.response.games[1].appid
  );

  const gameAchievements = await getSteamAchievementDetails(
    lastActivity.response.games[1].appid
  );

  const activeAchievements = actived.playerstats.achievements.filter(
    (i) => i.achieved === 1
  );

  const allAchievements = gameAchievements.game.availableGameStats.achievements;

  const filteredAchievements = allAchievements.filter((achievement) =>
    activeAchievements.some((active) => active.apiname === achievement.name)
  );

  return (
    <Card>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Image
              src={capsule_image}
              alt={gameDetail?.name}
              width={400}
              height={100}
              objectFit="cover"
              className=" w-48 rounded-lg shadow h-24"
              priority
            />
            <p className="text-xs text-muted-foreground">
              {gameDetail?.short_description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="w-5 h-5 text-green-400" />
                <p className="text-xs">
                  {minToHour(
                    lastActivity?.response?.games[0]?.playtime_forever
                  )}{" "}
                  hours played
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Trophy className="w-5 h-5 text-orange-400" />
                <p className="text-xs">
                  {gameInfo?.playerstats.achievements[0].achieved} achievements
                </p>
              </div>
            </div>
            <Carousel
              className={cn("max-w-sm", {
                "w-12": filteredAchievements.length === 1,
                "w-32": filteredAchievements.length > 2,
              })}
            >
              <CarouselContent className="-ml-1 ">
                {filteredAchievements.map((achievement, index) => (
                  <CarouselItem
                    key={achievement.name}
                    className={cn("pl-1 md:basis-1/2 ", {
                      "basis-full lg:basis-full":
                        filteredAchievements.length === 1,
                      "basis-1/3 lg:basis-1/3": filteredAchievements.length > 2,
                    })}
                  >
                    <div className="p-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Image
                              key={achievement.name}
                              src={achievement.icon}
                              alt={achievement.name}
                              width={20}
                              height={20}
                            />
                          </TooltipTrigger>
                          <TooltipContent className="absolute">
                            {achievement.displayName}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameActivity;
