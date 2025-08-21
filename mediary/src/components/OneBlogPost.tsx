import React from "react";
import { BlogPost } from "../models/BlogPost";
import { Link } from "react-router-dom";

interface OneBlogPostProps {
  blogPost: BlogPost;
}
const OneBlogPost: React.FC<OneBlogPostProps> = ({ blogPost }) => {
  const src = `../assets/blog-post-card-${blogPost.imgCode}.png`;
  const blogSrc = `/blogPosts/${blogPost.id}`;

  return (
    <>
      <div className="blog-post">
        <img src={src} alt="Blog Post Card" />
        <div className="blog-post-content">
          <div className="blog-post-text-wrapper">
            <h3>{blogPost.heading}</h3>
            <p className="blog-post-p">{blogPost.cardDesc}</p>
          </div>

          <Link to={blogSrc} className="cta secondary blog-read-btn">
            Read Article
          </Link>
        </div>
      </div>
    </>
  );
};

export default OneBlogPost;
