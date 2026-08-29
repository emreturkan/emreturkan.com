export const getUnsplashPhotos = async () => {
  const accessKey = process.env.UNSPLASH_API;

  if (!accessKey) return [];

  try {
    const response = await fetch(
      `https://api.unsplash.com/users/emreturkan/photos?client_id=${accessKey}&per_page=50`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) return [];

    const photos = await response.json();
    return Array.isArray(photos) ? photos : [];
  } catch {
    return [];
  }
};

export const getUnsplashPhotosStatistics = async () => {
  const accessKey = process.env.UNSPLASH_API;

  if (!accessKey) return null;

  try {
    const response = await fetch(
      `https://api.unsplash.com/users/emreturkan/statistics?client_id=${accessKey}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
};
