import GuestBookPage from "@/components/page/guestbook";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Guestbook",
  description:
    "Leave a message in Emre Turkan's guestbook. Share your thoughts, feedback, or just say hello!",
  keywords: ["guestbook", "leave a message", "visitor comments", "feedback"],
  openGraph: {
    title: "Guestbook | Emre Turkan",
    description: "Leave a message in my guestbook!",
    url: `${siteConfig.url}/guestbook`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/guestbook`,
  },
};

const GuestBook = () => {
  return <GuestBookPage />;
};

export default GuestBook;
