import {
  getGameActivity,
  getGameDetails,
  getSteamAchievement,
} from "@/lib/actions/get-steam";
import SafeImage from "@/components/ui/safe-image";
import { Timer, Award, ArrowUpRight } from "lucide-react";
import { minToHour } from "@/lib/utils";
import Link from "next/link";

const GameActivity = async () => {
  const recentGame = await getGameActivity();

  if (!recentGame) return null;

  const [gameDetail, actived] = await Promise.all([
    getGameDetails(recentGame.appid),
    getSteamAchievement(recentGame.appid),
  ]);

  // Portrait cover preferred; fall back to Steam's real image URLs. Center-
  // cropped into the fixed thumbnail, so any aspect ratio is safe.
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
      className="group flex items-center gap-3 rounded-xl bg-muted/40 p-2.5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-muted/60"
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-muted ring-1 ring-black/5 dark:ring-white/10">
        <SafeImage
          src={gameImage}
          fallbackSrc={gameImageFallback}
          alt={gameDetail?.name || "Game cover"}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-emerald-500">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Last played
        </p>
        <h3 className="mt-0.5 truncate text-sm font-medium text-foreground">
          {gameDetail?.name}
        </h3>
        <div className="mt-0.5 flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Timer className="h-3.5 w-3.5 fill-blue-500/20 text-blue-500" strokeWidth={1.75} />
            {minToHour(recentGame.playtime_forever)}h
          </span>
          {activeAchievements && (
            <span className="flex items-center gap-1">
              <Award className="h-3.5 w-3.5 fill-emerald-500/20 text-emerald-500" strokeWidth={1.75} />
              {activeAchievements.length}
            </span>
          )}
        </div>
      </div>

      <ArrowUpRight className="h-4 w-4 shrink-0 self-start text-muted-foreground/40 transition-colors duration-200 group-hover:text-muted-foreground" />
    </Link>
  );
};

export default GameActivity;
