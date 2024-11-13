import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface ExperienceCardProps {
  experience: {
    title: string;
    image: string;
    place: string;
    date: string;
    until: string;
    role: string;
    description: string[];
    favorite?: boolean;
  };
}

export interface EducationCardProps {
  education: {
    name: string;
    logo: StaticImageData;
    title: string;
    gpa: string;
    graduatedYear: string;
    color: string;
  };
}

export interface ProjectCardProps {
  project: {
    title: string;
    role: string;
    link: string;
    tech: string;
    color: string;
    description: string;
  };
}
export interface TechCardProps {
  tech: {
    name: string;
    logo: IconType;
    color: string;
    link: string;
  };
}
