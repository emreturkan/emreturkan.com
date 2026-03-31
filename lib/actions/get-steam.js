export const getGameActivity = async () => {
  try {
    const res = await fetch(
      `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${process.env.STEAM_API}&steamid=${process.env.STEAM_ID}&format=json`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("getGameActivity failed:", err);
    return null;
  }
};

export const getGameDetails = async (gameId) => {
  if (!gameId) return null;
  try {
    const res = await fetch(
      `http://store.steampowered.com/api/appdetails?appids=${gameId}&l=english`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data?.[gameId]?.data ?? null;
  } catch (err) {
    console.error("getGameDetails failed:", err);
    return null;
  }
};

export const getSteamStats = async (gameId) => {
  if (!gameId) return null;
  try {
    const res = await fetch(
      `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${gameId}&key=${process.env.STEAM_API}&steamid=${process.env.STEAM_ID}&format=json`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("getSteamStats failed:", err);
    return null;
  }
};

export const getSteamAchievement = async (gameId) => {
  if (!gameId) return null;
  try {
    const res = await fetch(
      `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${gameId}&key=${process.env.STEAM_API}&steamid=${process.env.STEAM_ID}&format=json`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("getSteamAchievement failed:", err);
    return null;
  }
};

export const getSteamAchievementDetails = async (gameId) => {
  if (!gameId) return null;
  try {
    const res = await fetch(
      `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${process.env.STEAM_API}&appid=${gameId}&format=json`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("getSteamAchievementDetails failed:", err);
    return null;
  }
};
