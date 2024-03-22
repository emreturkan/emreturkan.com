export const getProject = async () => {
  return await fetch(
    `https://api.github.com/user/repos?per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API}`,
      },
    },
    {
      next: {
        revalidate: 3600,
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};
