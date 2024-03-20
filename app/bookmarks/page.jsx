import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { getBookmark } from "@/lib/actions/get-bookmark";
import ConvertDate from "@/lib/date";
import useTagIcon from "@/lib/useTagIcon";
import React from "react";

const Bookmarks = async () => {
  const accessToken = await getAccessToken();
  const getBookmarks = await getBookmark(accessToken?.access_token);

  return (
    <div className="w-full h-screen grid grid-cols-1 gap-4 ">
      {getBookmarks?.items?.map((bookmark) => (
        <Card key={bookmark._id} className="text-white border-none">
          {bookmark && (
            <div className="grid gap-4">
              <CardContent>
                <div className="w-full md:w-9/12 p-4 grid gap-2">
                  <h3 className="text-secondary-foreground text-base font-semibold">
                    {" "}
                    {bookmark.title}
                  </h3>
                  <CardDescription>{bookmark.excerpt}</CardDescription>
                  <div className="flex text-secondary-foreground items-center gap-2">
                    {useTagIcon(bookmark.tags[0])}
                    <div>{bookmark.domain} ·</div>
                    <div>{ConvertDate(bookmark.created)}</div>
                  </div>
                </div>
                <hr className="mt-2" />
              </CardContent>
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
    const response = await fetch(
      "https://website-v2-brown.vercel.app/api",
      {
        method: "POST",
      },
      {
        next: {
          revalidate: 432000,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};
