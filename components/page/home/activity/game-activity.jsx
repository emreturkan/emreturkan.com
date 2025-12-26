import {
  getGameActivity,
  getGameDetails,
  getSteamAchievement,
} from "@/lib/actions/get-steam";
import Image from "next/image";
import { Clock, Trophy } from "lucide-react";
import { minToHour } from "@/lib/utils";
import Link from "next/link";

const GameActivity = async () => {
  const lastActivity = await getGameActivity();
  const gameDetail = await getGameDetails(
    lastActivity.response.games?.[0].appid
  );
  const gameImage = `https://steamcdn-a.akamaihd.net/steam/apps/${lastActivity.response.games?.[0].appid}/library_600x900_2x.jpg`;

  const actived = await getSteamAchievement(
    lastActivity.response.games?.[0].appid
  );

  const activeAchievements = actived.playerstats.achievements?.filter(
    (i) => i.achieved === 1
  );

  return (
    <Link
      href="https://steamcommunity.com/id/trknemre/"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2.5 transition-colors duration-200 hover:bg-muted/80"
    >
      <Image
        src={gameImage}
        alt={gameDetail?.name || "Game cover"}
        width={36}
        height={54}
        className="rounded object-cover"
        priority
      />
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-medium uppercase tracking-wider text-green-500">
          Playing
        </p>
        <h3 className="text-sm font-medium text-foreground truncate">
          {gameDetail?.name}
        </h3>
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-blue-500" />
            {minToHour(lastActivity?.response?.games?.[0]?.playtime_forever)}h
          </span>
          <span className="flex items-center gap-1">
            <Trophy className="h-3 w-3 text-amber-500" />
            {activeAchievements?.length}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GameActivity;
