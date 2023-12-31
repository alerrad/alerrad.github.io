import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import blogLink from "../assets/img/blogLink.svg";

function BlogCard(props) {
  return (
    <Link to={`/blog/${props.slug}`}>
      <div className="mini-post">
        <div
          className="preview"
          style={{backgroundImage: `url(${props.coverImage})`}}
        ></div>
        <p className="date">{props.date}</p>
        <h3 className="flex-box">
          {props.title}
          <img src={blogLink} alt="blog-link-icon" />
        </h3>
      </div>
    </Link>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.string,
  date: PropTypes.string,
  slug: PropTypes.string,
};

export default BlogCard;
