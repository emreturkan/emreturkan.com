import { getBookmark } from "@/lib/actions/get-bookmark";
import BookmarksClient from "./page";

const getAccessToken = async () => {
  const clientId = process.env.RAINDROP_CLIENT_ID;
  const refreshToken = process.env.RAINDROP_REFRESH_TOKEN;
  const clientSecret = process.env.RAINDROP_CLIENT_SECRET;

  if (!clientId || !refreshToken || !clientSecret) return null;

  try {
    const response = await fetch("https://raindrop.io/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        refresh_token: refreshToken,
        client_secret: clientSecret,
        grant_type: "refresh_token",
      }),
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }

    return await response.json();
  } catch {
    return null;
  }
};

export default async function BookmarksWrapper() {
  const accessToken = await getAccessToken();
  const bookmarks = await getBookmark(accessToken?.access_token);

  return <BookmarksClient bookmarks={bookmarks?.items} />;
}
