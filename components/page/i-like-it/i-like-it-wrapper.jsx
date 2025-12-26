import { getGameBookmark } from "@/lib/actions/get-bookmark";
import ILikeItClient from "./page";

const getAccessToken = async () => {
  try {
    const response = await fetch("https://emreturkan.com/api", {
      method: "POST",
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export default async function ILikeItWrapper() {
  const accessToken = await getAccessToken();
  const bookmarks = await getGameBookmark(accessToken?.access_token);

  return <ILikeItClient bookmarks={bookmarks?.items} />;
}
