import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { getBookmark } from "@/lib/actions/get-bookmark";
import ConvertDate from "@/lib/date";
import useTagIcon from "@/lib/useTagIcon";
import Link from "next/link";

export const metadata = {
  title: {
    default: "Bookmarks | " + siteConfig.title,
    template: "%s | " + siteConfig.title,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords + ", bookmarks",
  url: siteConfig.url + "/bookmarks",
  author: {
    name: siteConfig.creator,
    url: siteConfig.url + "/bookmarks",
  },
  creator: siteConfig.creator,
};

const Bookmarks = async () => {
  const accessToken = await getAccessToken();
  const getBookmarks = await getBookmark(accessToken?.access_token);

  return (
    <div className="w-full h-screen grid grid-cols-1  ">
      {getBookmarks?.items?.map((bookmark) => (
        <Card key={bookmark._id} className="text-white border-none shadow-none">
          {bookmark && (
            <CardContent>
              <div className="w-full   p-4 pt-0 grid gap-2">
                <Link href={bookmark.link} target="_blank">
                  <h3 className="text-secondary-foreground text-base font-semibold hover:text-blue-600 transition duration-300 ease-in-out ">
                    {bookmark.title}
                  </h3>
                </Link>
                <CardDescription>{bookmark.excerpt}</CardDescription>
                <div className="flex text-secondary-foreground items-center gap-2">
                  {useTagIcon(bookmark.tags[0])}
                  <div>{bookmark.domain} ·</div>
                  <div>{ConvertDate(bookmark.created)}</div>
                </div>
              </div>
              <Separator />
            </CardContent>
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
      "https://emreturkan.com/api",
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
