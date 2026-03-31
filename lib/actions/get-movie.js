export const getMovie = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/account/9850288/rated/movies?api_key=${process.env.TMDB_API}&language=en-EN&session_id=${process.env.TMDB_SESSION_ID}&sort_by=created_at.desc`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("getMovie failed:", err);
    return null;
  }
};
