import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "../models/BlogPost";

interface ContinueReadingPostProps {
  blogPost: BlogPost;
}

const ContinueReadingPost: React.FC<ContinueReadingPostProps> = ({
  blogPost,
}) => {
  return (
    <>
      <div className="continue-reading-post">
        <img
          src={`../assets/cr-post-${blogPost.imgCode}.png`}
          alt="Continue Reading Post Visual"
        />
        <div className="continue-reading-content-wrapper">
          <h3>{blogPost.heading}</h3>

          <Link to={`/blogPost/${blogPost.id}`} className="cta secondary">
            Read Article
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContinueReadingPost;
