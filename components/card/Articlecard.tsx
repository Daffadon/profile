import Link from "next/link";
import { FC } from "react";

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    link: string;
    author: string;
    published: number;
    created: number;
    category: string[];
    content: string;
  };
}

const Articlecard: FC<ArticleCardProps> = ({
  article: { id, title, link, author, published, created, category, content },
}) => {
  const date = new Date(published);
  const day = date.toUTCString();
  return (
    <Link href={link} target="_blank">
      <div className="w-full border border-black px-3 py-2 rounded hover:scale-[99%] duration-300 max-h-[20vh] sm:max-h-[20vh] lg:min-h-[20vh] lg:max-h-[25vh]">
        <h2 className="font-bold">{title}</h2>
        <p className="mb-3">{day}</p>
        <div className="flex flex-wrap gap-1">
          {category.map((cat, index) => (
            <p key={index} className="bg-gray-300 px-2 py-1 text-xs rounded">
              {cat}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Articlecard;
