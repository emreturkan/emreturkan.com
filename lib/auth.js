import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_NEXT_AUTH,
};
