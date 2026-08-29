export const getBookmark = async (accessToken) => {
  const collectionId = process.env.RAINDROP_ID;

  if (!accessToken || !collectionId) return { items: [] };

  try {
    const response = await fetch(
      `https://api.raindrop.io/rest/v1/raindrops/${collectionId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        next: {
          revalidate: 10,
        },
      }
    );

    if (!response.ok) return { items: [] };

    const bookmarks = await response.json();
    return Array.isArray(bookmarks?.items) ? bookmarks : { items: [] };
  } catch {
    return { items: [] };
  }
};
