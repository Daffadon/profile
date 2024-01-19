"use client";
import ExperienceCard from "@/components/ExperienceCard";
import { experiencesData } from "@/data/experience";
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
              ? "-bottom-10 bg-black py-2 mt-2"
              : "absolute bottom-0 backdrop-blur-md py-2"
          } w-full text-center z-0 rounded-t-lg cursor-pointer text-sm font-bold duration-700`}
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
