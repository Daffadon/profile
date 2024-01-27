import parse from "rss-to-json";

export const getAllArticle = async () => {
  try {
    const result = await parse("https://medium.com/feed/@daffadon");
    return result;
  } catch (error) {
    console.log(error);
  }
};
