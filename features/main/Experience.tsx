"use client";
import ExperienceCard from "@/components/card/ExperienceCard";
import { experiencesData } from "@/data/pages/main";
import { useState } from "react";
const Experience = () => {
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <>
      <h3 className="text-sm font-medium">Experience</h3>
      <div className="w-36 h-[1.5px] bg-black"></div>
      <div
        className={`${
          readMore
            ? "overflow-visible min-h-screen"
            : "overflow-hidden h-screen"
        } relative`}
      >
        {experiencesData.map((experience, index) => {
          return (
            <div key={index}>
              <div className="mt-2"></div>
              <ExperienceCard experience={experience} />
            </div>
          );
        })}
        <div
          className={` ${
            readMore
              ? "-bottom-10 bg-blue-clear mt-2"
              : "absolute bottom-0 bg-blue-clear"
          } w-full text-center z-0 rounded-t-lg cursor-pointer py-2 text-sm hover:bg-black font-bold duration-300`}
        >
          {readMore ? (
            <p
              className="text-white"
              onClick={() => {
                setReadMore(false);
              }}
            >
              See Less
            </p>
          ) : (
            <p
              className="text-white"
              onClick={() => {
                setReadMore(true);
              }}
            >
              See More
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Experience;
