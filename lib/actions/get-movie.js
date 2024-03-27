export const getMovie = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/account/9850288/rated/movies?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-EN&session_id=${process.env.NEXT_PUBLIC_TMDB_SESSION_ID}&sort_by=created_at.desc`,
    {
      next: {
        revalidate: 3600,
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};
