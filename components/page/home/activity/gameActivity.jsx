import {
  getGameActivity,
  getGameDetails,
  getSteamAchievement,
  getSteamAchievementDetails,
  getSteamStats,
} from "@/lib/actions/get-steam";
import Image from "next/image";
import { Clock, Trophy, ArrowUpRight } from "lucide-react";
import { cn, minToHour } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

const GameActivity = async () => {
  const lastActivity = await getGameActivity();
  const gameDetail = await getGameDetails(lastActivity.response.games[0].appid);
  const gameImage = `https://steamcdn-a.akamaihd.net/steam/apps/${lastActivity.response.games[0].appid}/library_600x900_2x.jpg`;
  const gameInfo = await getSteamStats(lastActivity.response.games[0].appid);

  const actived = await getSteamAchievement(
    lastActivity.response.games[0].appid
  );

  const gameAchievements = await getSteamAchievementDetails(
    lastActivity.response.games[0].appid
  );

  const activeAchievements = actived.playerstats.achievements.filter(
    (i) => i.achieved === 1
  );

  const allAchievements = gameAchievements.game.availableGameStats.achievements;

  const filteredAchievements = allAchievements.filter((achievement) =>
    activeAchievements.some((active) => active.apiname === achievement.name)
  );

  return (
    <Link
      href="https://steamcommunity.com/id/trknemre/"
      target="_blank"
      className="group"
    >
      <Card className="border flex items-center justify-between rounded shadow-sm">
        <CardContent className="flex items-center gap-2 justify-start  ">
          <Image
            src={gameImage}
            alt={gameDetail?.name}
            width={40}
            height={100}
            className="rounded-lg shadow"
            priority
          />
          <div className="grid gap-1 px-4 py-1">
            <h3 className="text-sm md:text-lg text-primary">
              {gameDetail?.name}
            </h3>
            <div className="flex items-center gap-5 justify-start">
              <div className="flex flex-col items-start md:items-center md:flex-row gap-1 md:gap-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-green-400" />
                  <p className="text-xs">
                    {minToHour(
                      lastActivity?.response?.games[0]?.playtime_forever
                    )}{" "}
                    hours played
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-sky-500" />
                  <p className="text-xs">
                    {gameInfo?.playerstats.achievements[0].achieved}{" "}
                    achievements
                  </p>
                </div>
              </div>

              <Carousel
                className={cn("hidden md:flex max-w-sm", {
                  "w-12": filteredAchievements.length === 1,
                  "w-24  md:w-72": filteredAchievements.length > 2,
                })}
              >
                <CarouselContent className="-ml-1 ">
                  {filteredAchievements.map((achievement, index) => (
                    <CarouselItem
                      key={achievement.name}
                      className={cn("pl-1 md:basis-1/2 ", {
                        "basis-full lg:basis-full":
                          filteredAchievements.length === 1,
                        "basis-1/3 md:basis-1/6":
                          filteredAchievements.length > 2,
                      })}
                    >
                      <Image
                        key={achievement.name}
                        src={achievement.icon}
                        alt={achievement.name}
                        width={20}
                        height={20}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </CardContent>

        <div className="p-4">
          <ArrowUpRight className="group-hover:text-blue-600 transition duration-300 ease-in-out" />
        </div>
      </Card>
    </Link>
  );
};

export default GameActivity;
