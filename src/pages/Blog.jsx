import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { client } from "../gql";
import { postQuery } from "../gql/requests";

export default function Blog() {
  let params = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    client
      .request(postQuery(params.slug))
      .then((data) => {
        const post = data.post;
        setImageURL(post.coverImage.url);
        setTitle(post.title);
        setContent(post.content.html);
        setDate(post.date);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.slug]);

  return (
    <section style={{ padding: "50px 0"}}>
      <Helmet>
        <title>Alerrad - {title}</title>
        <meta name="description" content={content}/>
      </Helmet>
      <div className="container">
        <div className="post-grid">
          <div
            className="post-cover"
            style={{ backgroundImage: `url(${imageURL})` }}
          ></div>
          <div className="post-content">
            <p>{date}</p>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
