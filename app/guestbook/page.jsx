import GuestBookPage from "@/components/page/guestbook";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: {
    default: "GuestBook | " + siteConfig.title,
    template: "%s | " + siteConfig.title,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords + ", guestbook",
  url: siteConfig.url + "/guestbook",
  author: {
    name: siteConfig.creator,
    url: siteConfig.url + "/guestbook",
  },
  creator: siteConfig.creator,
};
const GuestBook = () => {
  return <GuestBookPage />;
};

export default GuestBook;
