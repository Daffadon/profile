import TechCard from "@/components/card/TechCard";
import { techStacks } from "@/data/pages/main/section/techStack";

const TechStack = () => {
  return (
    <>
      <h3 className="text-xl font-medium">Tech Stack</h3>
      <div className="w-36 h-[1.5px] bg-black mb-3"></div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 place-items-center gap-2">
        {techStacks.map((tech, index) => (
          <TechCard tech={tech} key={index} />
        ))}
      </div>
    </>
  );
};

export default TechStack;
