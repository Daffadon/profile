import ProjectCard from "@/components/card/ProjectCard";
import { projectData } from "@/data/pages/main/section/project";

const Project = () => {
  return (
    <>
      <h3 className="text-xl font-medium">Project</h3>
      <div className="w-36 h-[1.5px] bg-black"></div>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 mt-3 gap-2">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default Project;
