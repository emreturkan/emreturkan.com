import ProjectContent from "./project-content";
import ProjectTop from "./project-top";

const Project = () => {
  return (
    <div className="mt-8 grid gap-2">
      <ProjectTop />
      <ProjectContent />
    </div>
  );
};

export default Project;
