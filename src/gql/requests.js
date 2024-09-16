import { gql } from "graphql-request";

const postsQuery = gql`
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

const timelineExpsQuery = gql`
  {
    timelineExps {
      id
      title
      subtitle
      timestamp
      desc
    }
  }
`;

const postQuery = (slug) => {
  return gql`
    {
      post(where: {link: "${slug}"}) {
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
};

export { postsQuery, timelineExpsQuery, postQuery };
