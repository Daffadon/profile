import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
interface TechCardProps {
  tech: {
    name: string;
    logo: IconType;
    color: string;
    link: string;
  };
}

const TechCard: FC<TechCardProps> = ({ tech }) => {
  const hoverColorVariants: Record<string, string> = {
    blueDeep: " text-blue-deep hover:bg-blue-deep",
    orangeHtml: "text-orange-html hover:bg-orange-html",
    blueCss: "hover:bg-blue-css text-blue-css",
    yellowJs: "hover:bg-yellow-js text-yellow-js",
    blueTs: "hover:bg-blue-ts text-blue-ts",
    blueReact: "hover:bg-blue-react text-blue-react",
    purpleVite: "hover:bg-purple-vite text-purple-vite",
    blueTailwind: "hover:bg-blue-tailwind text-blue-tailwind",
    blueMui: "hover:bg-blue-mui text-blue-mui",
    purpleAxios: "hover:bg-purple-axios text-purple-axios",
    blueMysql: "hover:bg-blue-mysql text-blue-mysql",
    brownMariaDb: "hover:bg-brown-mariadb text-brown-mariadb",
    orangeGit: "hover:bg-orange-git text-orange-git",
    blueDocker: "hover:bg-blue-docker text-blue-docker",
    black: "hover:bg-black",
    pinkLaravel: "hover:bg-pink-laravel text-pink-laravel",
  };

  return (
    <Link
      href={tech.link}
      target="_blank"
      className={`${
        hoverColorVariants[tech.color]
      } border w-full min-h-32 grid place-items-center py-2 bg-me hover:text-white transition-all duration-200 hover:scale-105 rounded-md border-black hover:border-white`}
    >
      <tech.logo size={40} className="mt-3" />
      <p className="text-sm font-bold">{tech.name}</p>
    </Link>
  );
};

export default TechCard;
