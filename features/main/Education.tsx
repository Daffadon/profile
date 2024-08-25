import EducationCard from "@/components/card/EducationCard";
import { educationData } from "@/data/pages/main/section/education";
const Education = () => {
  return (
    <>
      <h3 className="text-xl font-medium">Education</h3>
      <div className="w-36 h-[2px] bg-black"></div>
      <div className="grid grid-cols-1 place-items-center mt-3">
        {educationData.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </>
  );
};

export default Education;
