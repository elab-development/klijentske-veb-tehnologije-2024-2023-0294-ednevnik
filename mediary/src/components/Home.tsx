import React from "react";
import OneBlogPost from "./OneBlogPost";
import OneTestimonial from "./OneTestimonial";
import NewsletterForm from "./NewsletterForm";
import { Link } from "react-router-dom";
import { fetchTestimonials } from "../models/TestimonialLoader";
import { useEffect, useState } from "react";
import { Testimonial } from "../models/Testimonial";
import { fetchBlogPosts } from "../models/BlogPostLoader";
import { BlogPost } from "../models/BlogPost";

const Home: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadTestimonials = async () => {
      const loadedTestimonials = await fetchTestimonials();
      setTestimonials(loadedTestimonials);
    };

    const loadBlogPosts = async () => {
      const loadedBlogPosts = await fetchBlogPosts();
      setBlogPosts(loadedBlogPosts);
    };

    loadBlogPosts();
    loadTestimonials();
  }, []);

  return (
    <>
      <div className="hero-section margin-b-160">
        <div className="padding-global">
          <div className="container">
            <div className="hero-text-wrapper">
              <h1 className="text-center hero-heading">
                Write your{" "}
                <img
                  src="../assets/hero-heading-visual-1.svg"
                  alt="emotions"
                  className="hero-heading-visual"
                />
                &nbsp;read advices
                <br />
                and find your{" "}
                <img
                  src="../assets/hero-heading-visual-2.svg"
                  alt="internal peace"
                  className="hero-heading-visual"
                />
              </h1>

              <Link to="/register" className="cta primary">
                Start Writing
              </Link>
            </div>

            <img src="../assets/hero-visual.svg" alt="Hero Visual" />
          </div>
        </div>
      </div>

      <div className="margin-b-160">
        <div className="padding-global">
          <div className="container">
            <div className="about-section">
              <div className="about-col">
                <div className="about-text-wrapper">
                  <span className="eyebrow-heading-text">ABOUT US</span>
                  <h2 className="about-heading">
                    We’re a team passionate about mental health, creating a
                    space to help you reflect, grow, and find balance within
                    yourself.
                  </h2>
                </div>

                <div className="infinite-marquee-wrapper">
                  <img
                    src="../assets/infinite-marquee-img.svg"
                    alt="Infinite Marquee"
                    className="infinite-marquee-img"
                  />
                </div>
              </div>
              <div className="about-img-col">
                <img src="../assets/about-visual-1.svg" alt="About Visual" />
                <img src="../assets/about-visual-2.png" alt="About Visual" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-b-160">
        <div className="padding-global">
          <div className="container">
            <div className="blog-section">
              <div className="blog-text-wrapper">
                <h2>Read our blog</h2>
                <p className="blog-p">
                  Discover a wealth of insights and practical tips to nurture
                  your mental well-being in our blog section. From mindfulness
                  techniques to stress management strategies, our articles
                  empower you to take charge of your emotional journey.
                </p>
              </div>

              <div className="blog-posts-wrapper">
                {blogPosts.slice(0, 3).map((bp) => (
                  <OneBlogPost key={bp.id} blogPost={bp} />
                ))}
              </div>

              <Link
                to="/blog"
                className="cta primary blog-cta-btn element-center"
              >
                Visit Blog Page
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-b-160">
        <div className="padding-global">
          <div className="container-small">
            <div className="newsletter-section">
              <div className="newsletter-content-wrapper">
                <h2 className="newsletter-section-heading">
                  Get weekly mental health tips delivered to your inbox!
                </h2>

                <NewsletterForm />
              </div>
              <img
                src="../assets/newsletter-ebook.svg"
                alt="Newsletter Ebook"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="marging-b-160">
        <div className="padding-global">
          <div className="container">
            <div className="testimonials-section margin-b-160">
              <div className="testimonials-text-wrapper margin-b-96">
                <span className="eyebrow-heading-text">TESTIMONIALS</span>
                <h2 className="testimonials-heading">
                  Hear about our mission through stories of our users
                </h2>
              </div>

              <div className="testimonials-wrapper">
                {testimonials.map((t) => (
                  <OneTestimonial key={t.id} testimonial={t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-b-160">
        <div className="padding-global">
          <div className="container-small">
            <div className="big-cta-wrapper">
              <h2 className="h1-style">
                Start managing your mental health the right way, today!
              </h2>

              <Link to="/register" className="cta primary black-cta">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
