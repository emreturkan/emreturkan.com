import {
  getGameActivity,
  getGameDetails,
  getSteamAchievement,
} from "@/lib/actions/get-steam";
import SafeImage from "@/components/ui/safe-image";
import { Clock, Trophy } from "lucide-react";
import { minToHour } from "@/lib/utils";
import Link from "next/link";

const GameActivity = async () => {
  const lastActivity = await getGameActivity();
  const recentGame = lastActivity?.response?.games?.[0];

  if (!recentGame) return null;

  const [gameDetail, actived] = await Promise.all([
    getGameDetails(recentGame.appid),
    getSteamAchievement(recentGame.appid),
  ]);

  // Portrait library cover looks best but 404s for many (newer) titles, so we
  // fall back to the real image URLs returned by Steam's appdetails API.
  const gameImage = `https://steamcdn-a.akamaihd.net/steam/apps/${recentGame.appid}/library_600x900_2x.jpg`;
  const gameImageFallback = [
    gameDetail?.header_image,
    gameDetail?.capsule_image,
  ].filter(Boolean);
  const activeAchievements = actived?.playerstats?.achievements?.filter(
    (i) => i.achieved === 1
  );

  return (
    <Link
      href="https://steamcommunity.com/id/trknemre/"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2.5 transition-colors duration-200 hover:bg-muted/80"
    >
      <SafeImage
        src={gameImage}
        fallbackSrc={gameImageFallback}
        alt={gameDetail?.name || "Game cover"}
        width={36}
        height={54}
        className="rounded object-cover"
        priority
      />
      <div className="flex-1 min-w-0">
        <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-green-500">
          Playing
        </p>
        <h3 className="text-sm font-medium text-foreground truncate">
          {gameDetail?.name}
        </h3>
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-blue-500" />
            {minToHour(recentGame.playtime_forever)}h
          </span>
          {activeAchievements && (
            <span className="flex items-center gap-1">
              <Trophy className="h-3 w-3 text-amber-500" />
              {activeAchievements.length}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default GameActivity;
