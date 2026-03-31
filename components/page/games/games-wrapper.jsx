import { getGames } from "@/lib/actions/supabase-games";
import { getGamesByIds } from "@/lib/actions/get-igdb";
import GamesClient from "./page";

export default async function GamesWrapper() {
  const userGames = await getGames();

  if (!userGames || userGames.length === 0) {
    return <GamesClient games={[]} />;
  }

  const igdbIds = userGames.map((g) => g.igdb_id);
  const igdbData = await getGamesByIds(igdbIds);

  const games = userGames.map((userGame) => {
    const igdb = igdbData?.find((g) => g.id === userGame.igdb_id) || {};
    return {
      id: userGame.id,
      igdb_id: userGame.igdb_id,
      title: igdb.name || userGame.title,
      summary: igdb.summary || null,
      cover: igdb.cover?.image_id
        ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${igdb.cover.image_id}.jpg`
        : null,
      genres: igdb.genres?.map((g) => g.name) || [],
      platforms: igdb.platforms?.map((p) => p.name) || [],
      release_date: igdb.first_release_date
        ? new Date(igdb.first_release_date * 1000).getFullYear()
        : null,
      igdb_rating: igdb.total_rating
        ? Math.round(igdb.total_rating)
        : null,
      my_rating: userGame.my_rating,
      review: userGame.review,
      status: userGame.status,
      hours_played: userGame.hours_played,
    };
  });

  return <GamesClient games={games} />;
}
