import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { client } from "../gql";
import { postsQuery } from "../gql/requests";
import BlogCard from "../components/BlogCard";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useMemo(() => {
    client
      .request(postsQuery)
      .then((data) => {
        setPosts(data.posts);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Could not get posts :( Try again");
      });
  }, []);

  return (
    <section>
      <Helmet>
        <title>Alerrad - blog</title>
        <meta name="description" content="Alerrad's blogs & posts"/>
      </Helmet>
      <div className="container">
        {isLoading ? (
          <h1 className="centered">Loading ...</h1>
        ) : (
          <div className="posts-grid">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                date={post.date}
                coverImage={post.coverImage.url}
                slug={post.link}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
