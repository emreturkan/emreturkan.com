export const getUnsplashPhotos = async () => {
  return await fetch(
    `https://api.unsplash.com//users/emreturkan/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API}&per_page=50`,
    {
      next: {
        revalidate: 3600,
      },
    }
  ).then((res) => res.json());
};

export const getUnsplashPhotosStatistics = async () => {
  return await fetch(
    `https://api.unsplash.com//users/emreturkan/statistics/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  ).then((res) => res.json());
};
