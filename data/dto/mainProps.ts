import { StaticImageData } from "next/image";

export interface ExperienceCardProps {
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
