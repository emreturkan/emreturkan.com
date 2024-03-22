import { Card, CardContent } from "@/components/ui/card";
import { getProject } from "@/lib/actions/get-project";
import React from "react";

const Project = async () => {
  const projects = await getProject();

  const topProjects = projects
    .filter((p) => p.stargazers_count)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 2);

  return (
    <div>
      <h1 className="text-2xl">Top 2 Projects</h1>
      <ul>
        {topProjects.map((project) => (
          <Card>
            <CardContent>
              <h1>{project.name}</h1>
              <p className="text-sm text-muted-foreground">
                {project.language}
              </p>
              <p>{project.updated_at}</p>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default Project;
