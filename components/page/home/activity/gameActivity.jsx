import {
  getGamesDetails,
  getLastActivity,
  getSteamStats,
} from "@/lib/actions/get-steam";
import Image from "next/image";
import { Clock, Trophy } from "lucide-react";
import { minToHour } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
const GameActivity = async () => {
  const lastActivity = await getLastActivity();
  const gameDetail = await getGamesDetails(
    lastActivity.response.games[0].appid
  );
  const capsule_image = gameDetail?.header_image;
  const gameInfo = await getSteamStats(lastActivity.response.games[0].appid);

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
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="w-5 h-5 text-green-400" />
              <p className="text-xs">
                {minToHour(lastActivity?.response?.games[0]?.playtime_forever)}{" "}
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
        </div>
      </CardContent>
    </Card>
  );
};

export default GameActivity;
