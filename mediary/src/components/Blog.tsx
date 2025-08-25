import { useState, useEffect } from "react";
import OneBlogPost from "./OneBlogPost";
import { fetchBlogPosts } from "../models/BlogPostLoader";
import { JSX } from "react";
import { supabase } from "../models/supabaseClients";

interface BlogPost {
  id: number;
  imgCode: number;
  heading: string;
  cardDesc: string;
  content: string;
  tags: string;
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

  // const showBlogPosts = (): JSX.Element[] => {
  //   return blogPosts
  //     .slice(indexOfFirstCard, indexOfLastCard)
  //     .map((bp) => <OneBlogPost key={bp.id} blogPost={bp} />);
  // };

  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const { data, error } = await supabase.from("blogPosts").select("tags");

      if (error) {
        console.error(error);
        return;
      }

      if (data) {
        let allTags: string[] = [];

        data.forEach((tagString) => {
          let rowTags = tagString.tags.split(" ");
          rowTags.forEach((rowTag: string) => {
            allTags.push(rowTag);
          });
        });

        const uniqueTags = Array.from(new Set(allTags));
        setTags(uniqueTags);
      }
    };

    fetchTags();
  }, []);

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortType, setSortType] = useState<string>("");

  const loadFilteredPosts = (): JSX.Element[] => {
    const filteredPosts =
      !selectedTag || selectedTag === ""
        ? blogPosts
        : blogPosts.filter((bp) => {
            const tags = bp.tags.split(" ");
            return tags.includes(selectedTag);
          });

    let sortedPosts = [...filteredPosts];

    if (sortType === "title_as") {
      sortedPosts.sort((post1, post2) =>
        post1.heading.localeCompare(post2.heading)
      );
    } else if (sortType === "title_des") {
      sortedPosts.sort((post1, post2) =>
        post2.heading.localeCompare(post1.heading)
      );
    }

    const elementRow: JSX.Element[] = sortedPosts
      .slice(indexOfFirstCard, indexOfLastCard)
      .map((bp) => <OneBlogPost key={bp.id} blogPost={bp} />);

    if (elementRow.length < 6) {
      document.getElementById("pagination")?.classList.add("invisible");
    } else {
      document.getElementById("pagination")?.classList.remove("invisible");
    }

    return elementRow;
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
                    onChange={(e) => {
                      setSelectedTag(e.target.value || null);
                    }}
                  >
                    <option value="">(Default) Select tag</option>
                    {tags.map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="blog-filter-wrapper">
                  <p>Order by</p>
                  <select
                    name="blogOrderBy"
                    id="blog-order-by-select"
                    className="blog-select-field"
                    onChange={(e) => setSortType(e.target.value)}
                  >
                    <option value="">(Default) Select option</option>
                    <option value="title_as">Title Ascending</option>
                    <option value="title_des">Title Descending</option>
                  </select>
                </div>
              </div>

              <div className="blog-posts-wrapper">{loadFilteredPosts()}</div>

              <div id="pagination" className="blog-pagination-wrapper">
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
