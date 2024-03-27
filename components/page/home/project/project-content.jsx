import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { getProject } from "@/lib/actions/get-project";
import Link from "next/link";
import { Code, Clock, Star } from "lucide-react";
import { format } from "date-fns";
import { JavascriptIcon, PythonIcon, TypescriptIcon } from "@/assets/icons";
import { Separator } from "@/components/ui/separator";

const ProjectContent = async () => {
  const projects = await getProject();

  const topProjects = projects
    .filter((p) => p.stargazers_count)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 2);

  const LanguageIcon = (language) => {
    switch (language) {
      case "JavaScript":
        return <JavascriptIcon className="w-4 h-4" />;
      case "TypeScript":
        return <TypescriptIcon className="w-4 h-4" />;
      case "Python":
        return <PythonIcon className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {topProjects.map((project) => (
        <Link key={project.id} href={project.html_url}>
          <Card className="group">
            <CardContent className="grid gap-1">
              <h1 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-color duration-300 ease-in-out">
                {project.name}
              </h1>
              <p className="text-sm font-normal text-muted-foreground">
                {project.description ||
                  "no descriptionno descriptionno descriptionno descriptionno descriptionno descriptionno description"}
              </p>
              <div className="flex items-center gap-2">
                {LanguageIcon(project.language)}
                <p className="text-sm text-muted-foreground">
                  {project.language}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between gap-1 px-2">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <p className="text-xs">
                  {format(new Date(project.pushed_at), "dd MMM yyyy HH:mm")}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                <p className="text-sm font-medium">
                  {project.stargazers_count}
                </p>
              </div>
            </CardFooter>
          </Card>
          <Separator />
        </Link>
      ))}
    </div>
  );
};

export default ProjectContent;
