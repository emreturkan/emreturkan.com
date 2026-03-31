export const getMovieList = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/list/8501342?language=en-US&sort_by=created_at.desc`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          Accept: "application/json",
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("getMovieList failed:", err);
    return null;
  }
};
