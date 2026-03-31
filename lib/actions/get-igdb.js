import { unstable_cache as cache } from "next/cache";

const getAccessToken = async () => {
  const res = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    { method: "POST" }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data.access_token;
};

const igdbFetch = async (endpoint, query) => {
  const token = await getAccessToken();
  if (!token) return null;
  const res = await fetch(`https://api.igdb.com/v4/${endpoint}`, {
    method: "POST",
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID,
      Authorization: `Bearer ${token}`,
      "Content-Type": "text/plain",
    },
    body: query,
  });
  if (!res.ok) return null;
  return res.json();
};

export const getGamesByIds = async (ids) => {
  if (!ids || ids.length === 0) return [];

  try {
    return await cache(
      async () => {
        const idList = ids.join(",");
        const data = await igdbFetch(
          "games",
          `fields name,cover.image_id,summary,genres.name,platforms.name,first_release_date,rating,total_rating;
          where id = (${idList});
          limit ${ids.length};`
        );
        return data ?? [];
      },
      {
        revalidate: 86400,
      }
    )();
  } catch (err) {
    console.error("getGamesByIds failed:", err);
    return [];
  }
};

export const searchGames = async (query) => {
  try {
    return await igdbFetch(
      "games",
      `search "${query}";
      fields name,cover.image_id,summary,genres.name,platforms.name,first_release_date;
      limit 10;`
    );
  } catch (err) {
    console.error("searchGames failed:", err);
    return [];
  }
};
