import { getLastCommit } from "@/lib/actions/get-project";
import { GitCommit } from "lucide-react";

async function ProjectTop() {
  const commit = await getLastCommit();
  const pushCommit = commit.filter((c) => c.type === "PushEvent");

  return (
    <>
      <h1 className="text-2xl">Projelerim</h1>
      <div className="flex items-center gap-2">
        <span className="flex h-2 w-2  rounded-full bg-green-500" />
        <GitCommit className="w-6 h-6" />
        <div className="text-secondary-foreground">
          {pushCommit[0]?.payload?.commits[0]?.message}
        </div>
      </div>
    </>
  );
}

export default ProjectTop;
