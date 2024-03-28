export const getProject = async () => {
  return await fetch(
    `https://api.github.com/user/repos?per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_API}`,
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

export const getLastCommit = async () => {
  return await fetch(
    "https://api.github.com/users/emreturkan/events/public",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_API}`,
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
