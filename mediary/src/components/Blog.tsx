import React from "react";

function Blog() {
  return (
    <>
      <div className="padding-global">
        <div className="container">
          <div className="blog-section">
            <div className="blog-heading-wrapper">
              <h1 className="blog-heading">
                <img
                  src="../assets/blog-heading-img.svg"
                  alt="meDiary"
                  className="blog-heading-visual"
                />
                's Blog
              </h1>
              <p className="blog-section-p">
                Dive into our blog for expert insights and practical tips to
                support your mental health journey. From mindfulness practices
                to strategies for managing stress, our articles are designed to
                inspire and empower you every step of the way.
              </p>
            </div>

            <div className="blog-content-wrapper">
              <div className="blog-filters-wrapper">
                <select name="blogTheme" id="blog-theme-select"></select>
                <select name="blogOrderBy" id="blog-order-by-select"></select>
              </div>

              <div className="blog-posts-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
