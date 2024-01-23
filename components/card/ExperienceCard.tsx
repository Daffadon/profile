import { ExperienceCardProps } from "@/data/dto/mainProps";
import React, { FC } from "react";

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="border-[1.5px] py-3 px-4 border-black rounded-lg text-sm hover:scale-[99%] duration-300 z-10 cursor-default">
      <div className="flex justify-between">
        <p>
          <span className="font-semibold">{experience.title}</span> -{" "}
          <span className="text-xs">{experience.place}</span>
        </p>
        <p className="text-xs bg-blue-smoky text-white font-semibold px-2 py-1 rounded-md">
          {experience.date}{" "}
          {`${experience.until ? `- ${experience.until}` : ""}`}
        </p>
      </div>
      <p className="text-blue-deep font-bold mb-1">{experience.role}</p>
      <ul>
        {experience.description.map((desc, index) => {
          return (
            <li key={index} className="list-disc ml-5">
              {desc}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExperienceCard;
