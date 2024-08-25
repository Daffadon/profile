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
  const day = date.toLocaleString();
  return (
    <Link href={link} target="_blank" className="">
      <div className="w-full border border-black px-3 py-2 rounded hover:scale-[99%] duration-300 min-h-max max-h-[21vh] max-w-[30em] sm:min-h-[25vh] lg:min-h-[30vh] xl:min-h-[24vh] 2xl:min-h-[20vh] sm:max-w-none">
        <h2 className="font-bold">{title}</h2>
        <p className="my-2 text-sm">Published: {day}</p>
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
