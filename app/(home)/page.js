import Activity from "@/components/page/home/activity";
import Project from "@/components/page/home/project";
import Socials from "@/components/page/home/socials";
import Watchlist from "@/components/page/home/watchlist";
import Welcome from "@/components/page/home/welcome";
import SnowfallItem from "@/components/ui/snow-fall";

export default function HomePage() {
  return (
    <div className="grid gap-2">
      <SnowfallItem />
      <Welcome />
      <Socials />
      <Activity />
      <Project />
      <Watchlist />
    </div>
  );
}
