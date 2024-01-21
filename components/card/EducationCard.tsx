import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface EducationCardProps {
  education: {
    name: string;
    logo: StaticImageData;
    title: string;
    gpa: string;
    graduatedYear: string;
    color: string;
  };
}

const EducationCard: FC<EducationCardProps> = ({ education }) => {
  return (
    <div
      className={`grid place-items-center border-[1.5px] border-black px-4 py-6 rounded-lg min-h-72 hover:bg-${education.color} duration-200 hover:scale-[99%] hover:border-white hover:text-white`}
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
