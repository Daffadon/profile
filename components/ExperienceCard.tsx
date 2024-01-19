import React, { FC } from "react";
interface ExperienceCardProps {
  experience: {
    title: string;
    image: string;
    place: string;
    date: string;
    until: string;
    role: string;
    description: string[];
  };
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="border-[1.5px] py-3 px-4 border-black rounded-lg text-sm">
      <div className="flex justify-between">
        <p>
          <span className="font-semibold">{experience.title}</span> -{" "}
          <span className="text-xs">{experience.place}</span>
        </p>
        <p className="text-xs">
          {experience.date}{" "}
          {`${experience.until ? `- ${experience.until}` : ""}`}
        </p>
      </div>
      <p className="text-bold-gray font-semibold">{experience.role}</p>
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
