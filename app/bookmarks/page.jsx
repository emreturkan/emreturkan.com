import { Card, CardDescription } from "@/components/ui/card";
import { getBookmark } from "@/lib/actions/get-bookmark";
import ConvertDate from "@/lib/date";
import { LucideYoutube } from "lucide-react";
import React from "react";

const Bookmarks = async () => {
  const accessToken = await getAccessToken();
  const getBookmarks = await getBookmark(accessToken?.access_token);

  console.log(getBookmarks.items[0]);

  return (
    <div className="w-full h-screen grid grid-cols-1 gap-4 ">
      {getBookmarks?.items?.map((bookmark) => (
        <Card key={bookmark._id} className="text-white border-none">
          {bookmark && (
            <div className="grid gap-4">
              <CardDescription>
                <div className="w-9/12 p-4 grid gap-2">
                  <h3 className="text-secondary-foreground text-base font-semibold">
                    {" "}
                    {bookmark.title}
                  </h3>
                  <div className="text-sm">{bookmark.excerpt}</div>
                  <div className="flex text-secondary-foreground items-center gap-2">
                    <LucideYoutube />
                    <span>{bookmark.domain} ·</span>
                    <span>{ConvertDate(bookmark.created)}</span>
                  </div>
                </div>
                <hr className="mt-2" />
              </CardDescription>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Bookmarks;

const getAccessToken = async () => {
  try {
    const response = await fetch("https://website-v2-brown.vercel.app/api", {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }

    const result = await response.json();

    return result;
  } catch (err) {
    console.error("asss", err);
  }
};
