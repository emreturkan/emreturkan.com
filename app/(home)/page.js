import Activity from "@/components/page/home/activity";
import Project from "@/components/page/home/project";
import Socials from "@/components/page/home/socials";
import Watchlist from "@/components/page/home/watchlist";
import Welcome from "@/components/page/home/welcome";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Emre Turkan - Frontend Developer | React & Next.js Expert",
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <div>
      <Welcome />
      <Socials />
      <Project />
      <Activity />
      <Watchlist />
    </div>
  );
}
