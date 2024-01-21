import { EducationCardProps } from "@/data/dto/mainProps";
import Image from "next/image";
import { FC } from "react";

const EducationCard: FC<EducationCardProps> = ({ education }) => {
  const hoverColorVariants: Record<string, string> = {
    blueDeep: "hover:bg-blue-deep",
  };

  return (
    <div
      className={`grid place-items-center border-[1.5px] border-black px-4 py-6 rounded-lg min-h-72 duration-200 hover:scale-[99%] hover:text-white hover:border-white 
      ${hoverColorVariants[education.color]}`}
    >
      <h2 className="font-bold">{education.name}</h2>
      <Image src={education.logo} alt="UB" className="h-14 w-14 mt-2" />
      <p className="font-bold text-sm">Title:</p>
      <p className="font-bold -mt-2">{education.title}</p>
      <p className="font-bold">GPA: {education.gpa}</p>
      <p className="font-bold">Graduate: {education.graduatedYear}</p>
    </div>
  );
};

export default EducationCard;
