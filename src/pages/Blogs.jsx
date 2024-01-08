import { GraphQLClient, gql } from "graphql-request";
import { useState, useMemo } from "react";
import BlogCard from "../components/BlogCard";

const client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_KEY);
const PostsQuery = gql`
  {
    posts {
      id
      title
      coverImage {
        url
      }
      date
      link
    }
  }
`;

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useMemo(() => {
    client
      .request(PostsQuery)
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
