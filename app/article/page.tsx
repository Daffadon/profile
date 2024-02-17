import Footer from "@/components/appbar/Footer";
import Articlecard from "@/components/card/Articlecard";
import Biography from "@/features/main/Biography";
import { getAllArticle } from "@/service/api/article";

const getArticle = async () => {
  return await getAllArticle();
};

const Article = async () => {
  const res = await getArticle();

  return (
    <div className="grid place-items-center">
      <div className="lg:w-8/12 md:w-10/12 w-11/12 cursor-default">
        <div className="mt-8"></div>
        <Biography />
        <div className="min-h-[60vh] mt-5 mb-3">
          <h3 className="text-sm font-medium text-center">Article</h3>
          <div className="flex justify-center items-center">
            <div className="w-36 h-[2px] bg-black"></div>
          </div>
          <div className="grid place-items-center mt-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
            {res?.items.map((item, index) => {
              return <Articlecard article={item} key={index} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Article;
