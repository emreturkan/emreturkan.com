import { getProject } from "@/lib/actions/get-project";
import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";

const ProjectContent = async () => {
  const projects = await getProject();

  const topProjects = (Array.isArray(projects) ? projects : [])
    .filter((p) => p.stargazers_count)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3);

  return (
    <div className="mt-4 divide-y divide-border/70">
      {topProjects.map((project, index) => (
        <Link
          key={project.id}
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start justify-between py-4 transition-colors duration-200 first:pt-0 last:pb-0"
          style={{ animationDelay: `${0.3 + index * 0.1}s` }}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-foreground transition-colors duration-200 group-hover:text-foreground/80">
                {project.name}
              </h3>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100" />
            </div>
            <p className="text-sm text-muted-foreground line-clamp-1">
              {project.description || "No description"}
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
            <span>{project.stargazers_count}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectContent;
