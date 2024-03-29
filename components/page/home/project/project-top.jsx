import { Separator } from "@/components/ui/separator";
import { getLastCommit } from "@/lib/actions/get-project";

async function ProjectTop() {
  const commit = await getLastCommit();

  return (
    <>
      <h1 className="text-lg font-semibold text-primary">
        Featured Repositories
      </h1>
      <Separator />
    </>
  );
}

export default ProjectTop;
