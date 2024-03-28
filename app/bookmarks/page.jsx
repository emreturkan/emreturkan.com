import BookmarksPage from "@/components/page/bookmarks/page";
import { siteConfig } from "@/config/site";

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
  return <BookmarksPage />;
};

export default Bookmarks;
