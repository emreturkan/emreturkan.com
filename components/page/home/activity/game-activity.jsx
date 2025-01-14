import {
    getGameActivity,
    getGameDetails,
    getSteamAchievement,
    getSteamStats
} from '@/lib/actions/get-steam';
import Image from 'next/image';
import {Clock, Trophy, ExternalLink} from 'lucide-react';
import {minToHour} from '@/lib/utils';
import {Card, CardContent} from '@/components/ui/card';
import Link from 'next/link';

const GameActivity = async () => {
    const lastActivity = await getGameActivity();
    const gameDetail = await getGameDetails(
        lastActivity.response.games[0].appid
    );
    const gameImage = `https://steamcdn-a.akamaihd.net/steam/apps/${lastActivity.response.games[0].appid}/library_600x900_2x.jpg`;
    const gameInfo = await getSteamStats(lastActivity.response.games[0].appid);

    const actived = await getSteamAchievement(
        lastActivity.response.games[0].appid
    );


    const activeAchievements = actived.playerstats.achievements?.filter(
        i => i.achieved === 1
    );

    return (
        <Link
            href="https://steamcommunity.com/id/trknemre/"
            target="_blank"
            className="group"
        >
            <Card className="flex items-center h-16 justify-between rounded border shadow-sm">
                <CardContent className="flex items-center justify-start gap-2  ">
                    <Image
                        src={gameImage}
                        alt={gameDetail?.name}
                        width={40}
                        height={100}
                        className="rounded-lg shadow"
                        priority
                    />
                    <div className="grid gap-1 px-4 py-1">
                        <h3 className="text-primary text-sm md:text-lg">
                            {gameDetail?.name.slice(0, 20)}...
                        </h3>
                        <div className="flex items-center justify-start gap-5">
                            <div className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-4">
                                <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3 text-green-400" />
                                    <p className="text-xs">
                                        {minToHour(
                                            lastActivity?.response?.games[0]
                                                ?.playtime_forever
                                        )}{' '}
                                        hrs played
                                    </p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Trophy className="h-3 w-3 text-sky-500" />
                                    <p className="text-xs">
                                        {activeAchievements?.length}{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>

                <div className="p-4">
                    <ExternalLink className="h-5 w-5 transition duration-300  ease-in-out group-hover:text-blue-600" />
                </div>
            </Card>
        </Link>
    );
};

export default GameActivity;
