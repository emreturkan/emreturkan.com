import ProjectContent from "./project-content";
import ProjectTop from "./project-top";
import { MotionSection } from "@/components/ui/motion-wrapper";

const Project = () => {
  return (
    <MotionSection className="mt-16">
      <ProjectTop />
      <ProjectContent />
    </MotionSection>
  );
};

export default Project;
