import Activity from "@/components/page/home/activity";
import Project from "@/components/page/home/project";
import Socials from "@/components/page/home/socials";
import Welcome from "@/components/page/home/welcome";

export default function HomePage() {
  return (
    <div className="grid gap-2">
      <Welcome />
      <Socials />
      <Activity />
      <Project />
    </div>
  );
}
