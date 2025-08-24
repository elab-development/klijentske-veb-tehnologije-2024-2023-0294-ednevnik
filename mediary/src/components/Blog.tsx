import { useState, useEffect } from "react";
import OneBlogPost from "./OneBlogPost";
import { fetchBlogPosts } from "../models/BlogPostLoader";
import { JSX } from "react";

interface BlogPost {
  id: number;
  imgCode: number;
  heading: string;
  cardDesc: string;
  content: string;
}

function Blog() {
  const [page, setPage] = useState(1);

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  const cardsPerPage = 6;
  const indexOfLastCard = page * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  useEffect(() => {
    const loadBlogPosts = async () => {
      const loadedBlogPosts = await fetchBlogPosts();
      setBlogPosts(loadedBlogPosts);
    };

    loadBlogPosts();
  }, []);

  const showBlogPosts = (): JSX.Element[] => {
    return blogPosts
      .slice(indexOfFirstCard, indexOfLastCard)
      .map((bp) => <OneBlogPost key={bp.id} blogPost={bp} />);
  };

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

            <div className="blog-content-wrapper margin-b-128">
              <div className="blog-filters-wrapper">
                <div className="blog-filter-wrapper">
                  <p>Theme</p>
                  <select
                    name="blogTheme"
                    id="blog-theme-select"
                    className="blog-select-field"
                  ></select>
                </div>
                <div className="blog-filter-wrapper">
                  <p>Order by</p>
                  <select
                    name="blogOrderBy"
                    id="blog-order-by-select"
                    className="blog-select-field"
                  ></select>
                </div>
              </div>

              <div className="blog-posts-wrapper">{showBlogPosts()}</div>

              <div className="blog-pagination-wrapper">
                <button
                  className="blog-pagination-button"
                  onClick={() => {
                    setPage(1);
                  }}
                >
                  <img
                    src="../assets/button-arrow-left.svg"
                    alt="Button Arrow Left"
                  />
                </button>

                <div className="blog-page-wrapper">
                  <span
                    className={`page-text ${page === 1 ? "is-active" : ""}`}
                  >
                    1
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span
                    className={`page-text ${page === 2 ? "is-active" : ""}`}
                  >
                    2
                  </span>
                </div>

                <button
                  className="blog-pagination-button"
                  onClick={() => {
                    setPage(2);
                  }}
                >
                  <img
                    src="../assets/button-arrow-right.svg"
                    alt="Button Arrow Left"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
