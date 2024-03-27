import { getLastCommit } from "@/lib/actions/get-project";
import { GitCommit } from "lucide-react";

async function ProjectTop() {
  const commit = await getLastCommit();
  const pushCommit = commit.filter((c) => c.type === "PushEvent");

  return (
    <>
      <h1 className="text-2xl">Projects</h1>
      <div className="flex items-center gap-2">
        <span className="flex md:h-2 md:w-2  rounded-full bg-green-500" />
        <GitCommit className="w-5 h-5 md:w-6 md:h-6" />
        <div className="text-secondary-foreground text-xs  md:text-base">
          {pushCommit[0]?.payload?.commits[0]?.message.slice(0, 100)}...
        </div>
      </div>
    </>
  );
}

export default ProjectTop;
