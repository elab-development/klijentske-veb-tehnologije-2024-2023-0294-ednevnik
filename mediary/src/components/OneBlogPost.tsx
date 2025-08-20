import React from "react";

function OneBlogPost() {
  return (
    <>
      <div className="blog-post">
        <img src="../assets/blog-post-card.png" alt="Blog Post Card" />
        <div className="blog-post-content">
          <div className="blog-post-text-wrapper">
            <h3>5 Simple Mindfulness Exercises to Boost Your Daily Calm</h3>
            <p className="blog-post-p">
              Learn five easy mindfulness techniques to reduce stress and find
              inner peace in just a few minutes a day. Start your journey to a
              calmer mind today.
            </p>
          </div>

          <a href="/" className="cta secondary blog-read-btn">
            Read Article
          </a>
        </div>
      </div>
    </>
  );
}

export default OneBlogPost;
