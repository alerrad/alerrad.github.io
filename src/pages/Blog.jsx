import { gql, GraphQLClient } from "graphql-request";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const client = new GraphQLClient(import.meta.env.VITE_APP_GRAPHQL_KEY);

export default function Blog() {
  let params = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const postQuery = gql`
    {
      posts(where: {id: "${params.id}"}) {
        title
        content {
          html
        }
        coverImage {
          url
        }
        date
      }
    }`;

    client
      .request(postQuery)
      .then((data) => {
        const post = data.posts[0];
        setImageURL(post.coverImage.url);
        setTitle(post.title);
        setContent(post.content.html);
        setDate(post.date);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return (
    <section style={{ padding: "50px 0"}}>
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
