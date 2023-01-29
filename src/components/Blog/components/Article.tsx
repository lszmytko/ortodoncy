export default function Article({
  date,
  headerText,
  articleText,
}: {
  date: string;
  headerText: string;
  articleText: string;
}) {
  return (
    <article className="blog_article">
      <div className="blog_article_date">{date}</div>
      <h4 className="blog_article_header">{headerText}</h4>
      <div className="underline"></div>
      <p className="blog_article_text">{articleText}</p>
    </article>
  );
}
