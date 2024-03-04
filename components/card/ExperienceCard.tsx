import { ExperienceCardProps } from "@/data/dto/mainProps";
import { FC } from "react";
import { FaStar } from "react-icons/fa";

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="border-[1.5px] py-3 px-4 border-black rounded-lg text-sm hover:scale-[99%] duration-300 z-10 cursor-default relative">
      <div className="flex flex-col md:flex-row justify-between">
        <p className="text-center md:text-left">
          <span className="font-bold">{experience.title}</span> -{" "}
          <span className="text-xs">{experience.place}</span>
        </p>
        <div className="flex justify-center items-center">
          <p className="text-xs bg-blue-ts text-white font-semibold px-2 py-1 rounded-md w-max my-1 md:my-0">
            {experience.date}{" "}
            {`${experience.until ? `- ${experience.until}` : ""}`}
          </p>
        </div>
      </div>
      <p className="text-blue-deep font-bold mb-1 text-center md:text-left">
        {experience.role}
      </p>
      <ul>
        {experience.description.map((desc, index) => {
          return (
            <li key={index} className="list-disc ml-5">
              {desc}
            </li>
          );
        })}
      </ul>
      {experience.favorite && (
        <FaStar className="text-2xl absolute -right-1 -top-1 text-yellow-js" />
      )}
    </div>
  );
};

export default ExperienceCard;
