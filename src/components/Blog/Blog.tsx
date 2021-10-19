import React from "react";

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
          {/* ARTICLE 1 */}
          <article className="blog_article">
            <div className="blog_article_date">19-03-2018</div>
            <h4 className="blog_article_header">O prebarwieniach</h4>
            <div className="underline"></div>
            <p className="blog_article_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non
              optio nihil? Dolorum, unde alias! Sequi nisi commodi odio
              voluptates?
            </p>
          </article>

          {/* ARTICLE 2 */}
          <article className="blog_article">
            <div className="blog_article_date">20-11-2018</div>
            <h4 className="blog_article_header">
              Artykulacja, badanie stawu żuchwowego
            </h4>
            <div className="underline"></div>
            <p className="blog_article_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              provident. Veritatis perspiciatis magnam facere inventore ut magni
              modi reiciendis, aliquid earum, nemo dolorem error! Dolore!
            </p>
          </article>

          {/* ARTICLE 3 */}
          <article className="blog_article">
            <div className="blog_article_date">20-09-2019</div>
            <h4 className="blog_article_header">
              Leczenie ortodontyczne dzieci
            </h4>
            <div className="underline"></div>
            <p className="blog_article_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              a magnam accusantium culpa suscipit dolore. Quod laudantium vero
              ea animi!
            </p>
          </article>

          {/* ARTICLE 4 */}
          <article className="blog_article">
            <div className="blog_article_date">21-10-2020</div>
            <h4 className="blog_article_header">Stomatologia zachowawcza</h4>
            <div className="underline"></div>
            <p className="blog_article_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              perferendis accusamus consequuntur quasi, tempore autem itaque,
              blanditiis, voluptate obcaecati a neque culpa atque impedit
              dolores.
            </p>
          </article>

          {/* ARTICLE 5 */}
          <article className="blog_article">
            <div className="blog_article_date">22-11-2021</div>
            <h4 className="blog_article_header">Ortodoncja</h4>
            <div className="underline"></div>
            <p className="blog_article_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              beatae suscipit eaque fugit. Esse deserunt modi tenetur error in
              mollitia voluptatem, porro id perferendis odit repellat optio
              neque ullam natus!
            </p>
          </article>
        </div>
      </section>
    </section>
  );
};

export default Blog;
