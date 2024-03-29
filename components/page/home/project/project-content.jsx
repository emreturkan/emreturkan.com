import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { getProject } from "@/lib/actions/get-project";
import Link from "next/link";
import { Code, Clock, Star } from "lucide-react";
import { format } from "date-fns";
import { JavascriptIcon, PythonIcon, TypescriptIcon } from "@/assets/icons";

const ProjectContent = async () => {
  const projects = await getProject();

  const topProjects = projects
    .filter((p) => p.stargazers_count)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 2);

  const LanguageIcon = (language) => {
    switch (language) {
      case "JavaScript":
        return <JavascriptIcon className="w-3 h-3" />;
      case "TypeScript":
        return <TypescriptIcon className="w-3 h-3" />;
      case "Python":
        return <PythonIcon className="w-3 h-3" />;
      default:
        return <Code className="w-3 h-3" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {topProjects.map((project) => (
        <Link key={project.id} href={project.html_url}>
          <Card className="group h-full grid px-4  border shadow-sm rounded py-3">
            <CardContent className="grid gap-1">
              <h1 className="text-lg font-semibold text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-color duration-300 ease-in-out">
                {project.name}
              </h1>
              <p className="text-xs font-light text-muted-foreground">
                {project.description
                  ? `${project?.description?.slice(0, 110)}...`
                  : "no descriptionno descriptionno descriptionno descriptionno descriptionno descriptionno description description..."}
              </p>
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-1">
                  {LanguageIcon(project.language)}
                  <p className="text-xs text-muted-foreground">
                    {project.language}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                  <p className="text-xs font-medium">
                    {project.stargazers_count}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProjectContent;
