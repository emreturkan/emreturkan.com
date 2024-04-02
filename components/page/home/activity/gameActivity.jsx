import {
  getGameActivity,
  getGameDetails,
  getSteamStats,
} from "@/lib/actions/get-steam";
import Image from "next/image";
import { Clock, Trophy, ExternalLink } from "lucide-react";
import { minToHour } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const GameActivity = async () => {
  const lastActivity = await getGameActivity();
  const gameDetail = await getGameDetails(lastActivity.response.games[0].appid);
  const gameImage = `https://steamcdn-a.akamaihd.net/steam/apps/${lastActivity.response.games[0].appid}/library_600x900_2x.jpg`;
  const gameInfo = await getSteamStats(lastActivity.response.games[0].appid);

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
                    hrs played
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-sky-500" />
                  <p className="text-xs">
                    {gameInfo?.playerstats.achievements[0].achieved}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        <div className="p-4">
          <ExternalLink className="group-hover:text-blue-600 transition duration-300 ease-in-out  w-5 h-5" />
        </div>
      </Card>
    </Link>
  );
};

export default GameActivity;
