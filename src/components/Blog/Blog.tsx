import Article from "./components/Article";
import data from "./data";

const Blog = () => {
  return (
    <section className="Blog">
      <section className="section-center container">
        <div className="title">
          <h3>nasz blog</h3>
          <div className="underline"></div>
        </div>
        <h3 className="header_info">
          Oferujemy nowoczesne metody leczenia w oparciu o najnowsze technologie
        </h3>
        <div className="articles">
          {data.map((article) => (
            <Article
              date={article.date}
              headerText={article.headerText}
              articleText={article.articleText}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Blog;
