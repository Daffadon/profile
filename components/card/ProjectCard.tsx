import Link from "next/link";
import { FC } from "react";
import { IoMdLink } from "react-icons/io";

interface ProjectCardProps {
  project: {
    title: string;
    role: string;
    github: string;
    tech: string;
    color: string;
    description: string[];
  };
}
const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const colorVariants: Record<string, string> = {
    blueDeep: "bg-blue-deep",
    orangeHtml: "bg-orange-html",
    blueCss: "bg-blue-css",
    yellowJs: "bg-yellow-js",
    blueTs: "bg-blue-ts",
    blueReact: "bg-blue-react",
    purpleVite: "bg-purple-vite",
    blueTailwind: "bg-blue-tailwind",
    blueMui: "bg-blue-mui",
    purpleAxios: "bg-purple-axios",
    blueMysql: "bg-blue-mysql",
    brownMariaDb: "bg-brown-mariadb",
    orangeGit: "bg-orange-git",
    blueDocker: "bg-blue-docker",
    black: "bg-black",
    pinkLaravel: "bg-pink-laravel",
  };
  return (
    <div className="w-full border border-black rounded-sm px-3 h-full py-2 pt-3 hover:scale-[99%] duration-300 cursor-default">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 ">
          <p className="font-bold">{project.title}</p>
          <p
            className={`${
              colorVariants[project.color]
            } text-white px-2 rounded-full py-[0.5px]`}
          >
            {project.tech}
          </p>
        </div>
        <Link href={project.github} target="_blank" className="mr-3">
          <IoMdLink size={20} />
        </Link>
      </div>
      <p className="font-bold pt-2 pb-1 ">{project.role}</p>
      <p className="text-justify">{project.description}</p>
    </div>
  );
};

export default ProjectCard;