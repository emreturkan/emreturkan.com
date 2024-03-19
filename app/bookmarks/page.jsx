import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { getBookmark } from "@/lib/actions/get-bookmark";
import Image from "next/image";
import React from "react";

const Bookmarks = async () => {
  const accessToken = await getAccessToken();
  const getBookmarks = await getBookmark(accessToken.access_token);

  return (
    <div className="w-full h-screen grid grid-cols-2 gap-4 ">
      {getBookmarks?.items?.map((bookmark) => (
        <Card key={bookmark._id} className="text-white">
          {bookmark && (
            <div className="grid gap-4">
              <CardTitle className="text-secondary-foreground text-lg p-2">
                {bookmark.title}
              </CardTitle>
              <CardDescription>
                <Image
                  src={bookmark.cover}
                  alt={bookmark.excerpt}
                  width={400}
                  height={300}
                />
                <span className="text-sm mt-2 p-4"> {bookmark.excerpt}</span>
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
    const response = await fetch("http://localhost:3000/api", {
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
