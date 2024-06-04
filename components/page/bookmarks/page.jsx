import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { getBookmark } from "@/lib/actions/get-bookmark";
import ConvertDate from "@/lib/date";
import useTagIcon from "@/lib/useTagIcon";
import { Dot } from "lucide-react";
import cron from "node-cron";

const BookmarksPage = async () => {
  const accessToken = await getAccessToken();

  const getBookmarks = await getBookmark(accessToken?.access_token);

  return (
    <div className="grid grid-cols-1 gap-4">
      {getBookmarks?.items?.map((bookmark) => (
        <Card key={bookmark._id} className="shadow-md border p-4 py-2 rounded">
          {bookmark && (
            <CardContent>
              <div className="py-4 grid gap-2">
                <Link href={bookmark.link} target="_blank">
                  <h3 className="text-primary text-sm md:text-base font-semibold hover:text-blue-600 transition duration-300 ease-in-out">
                    {bookmark.title}
                  </h3>
                </Link>
                <CardDescription className="text-xs">
                  {bookmark.excerpt}
                </CardDescription>
                <div className="flex gap-2 text-secondary-foreground items-center">
                  {useTagIcon(bookmark.tags[0])}
                  <div className="flex flex-wrap items-center">
                    <div className="text-xs md:text-sm">{bookmark.domain}</div>{" "}
                    <Dot />
                    <div className="text-xs md:text-sm">
                      {ConvertDate(bookmark.created)}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};

export default BookmarksPage;

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
