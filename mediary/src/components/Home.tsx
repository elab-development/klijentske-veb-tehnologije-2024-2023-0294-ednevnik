import React from "react";

function Home() {
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

              <a href="/" className="cta primary">
                Start Writing
              </a>
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
                {/* Placeholderi */}
                <div className="blog-post">
                  <img
                    src="../assets/blog-post-card.png"
                    alt="Blog Post Card"
                  />
                  <div className="blog-post-content">
                    <div className="blog-post-text-wrapper">
                      <h3>
                        5 Simple Mindfulness Exercises to Boost Your Daily Calm
                      </h3>
                      <p className="blog-post-p">
                        Learn five easy mindfulness techniques to reduce stress
                        and find inner peace in just a few minutes a day. Start
                        your journey to a calmer mind today.
                      </p>
                    </div>

                    <a href="/" className="cta secondary blog-read-btn">
                      Read Article
                    </a>
                  </div>
                </div>

                <div className="blog-post">
                  <img
                    src="../assets/blog-post-card.png"
                    alt="Blog Post Card"
                  />
                  <div className="blog-post-content">
                    <div className="blog-post-text-wrapper">
                      <h3>
                        5 Simple Mindfulness Exercises to Boost Your Daily Calm
                      </h3>
                      <p className="blog-post-p">
                        Learn five easy mindfulness techniques to reduce stress
                        and find inner peace in just a few minutes a day. Start
                        your journey to a calmer mind today.
                      </p>
                    </div>

                    <a href="/" className="cta secondary blog-read-btn">
                      Read Article
                    </a>
                  </div>
                </div>

                <div className="blog-post">
                  <img
                    src="../assets/blog-post-card.png"
                    alt="Blog Post Card"
                  />
                  <div className="blog-post-content">
                    <div className="blog-post-text-wrapper">
                      <h3>
                        5 Simple Mindfulness Exercises to Boost Your Daily Calm
                      </h3>
                      <p className="blog-post-p">
                        Learn five easy mindfulness techniques to reduce stress
                        and find inner peace in just a few minutes a day. Start
                        your journey to a calmer mind today.
                      </p>
                    </div>

                    <a href="/" className="cta secondary blog-read-btn">
                      Read Article
                    </a>
                  </div>
                </div>
              </div>

              <a href="/" className="cta primary blog-cta-btn element-center">
                Visit Blog Page
              </a>
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

                <form action="/" className="newsletter-section-form">
                  <input
                    type="email"
                    className="form-field full-width"
                    placeholder="email@email.com"
                  />

                  <button className="cta primary blog-cta-btn">
                    Subscribe Now
                  </button>
                </form>
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
                <div className="testimonial">
                  <p className="testimonial-text">
                    <span className="hanging-punctuation">"</span>meDiary has
                    been a lifeline for managing my stress. Helps me manage
                    daily stress in business and my work."
                  </p>
                  <div className="testimonial-person-wrapper">
                    <img src="../assets/person-1.png" alt="Person" />
                    <div className="testimonial-name-wrapper">
                      <div className="stars-wrapper">
                        <img src="../assets/stars.svg" alt="Star" />
                      </div>
                      <span className="text-semibold">Max Carter</span>
                    </div>
                  </div>

                  <img
                    src="../assets/testimonial-gradient.svg"
                    alt="Testimonial Gradient"
                    className="testimonial-gradient"
                  />
                </div>

                <div className="testimonial">
                  <p className="testimonial-text">
                    <span className="hanging-punctuation">"</span>meDiary has
                    been a lifeline for managing my stress. Helps me manage
                    daily stress in business and my work."
                  </p>
                  <div className="testimonial-person-wrapper">
                    <img src="../assets/person-1.png" alt="Person" />
                    <div className="testimonial-name-wrapper">
                      <div className="stars-wrapper">
                        <img src="../assets/stars.svg" alt="Star" />
                      </div>
                      <span className="text-semibold">Max Carter</span>
                    </div>
                  </div>

                  <img
                    src="../assets/testimonial-gradient.svg"
                    alt="Testimonial Gradient"
                    className="testimonial-gradient"
                  />
                </div>

                <div className="testimonial">
                  <p className="testimonial-text">
                    <span className="hanging-punctuation">"</span>meDiary has
                    been a lifeline for managing my stress. Helps me manage
                    daily stress in business and my work."
                  </p>
                  <div className="testimonial-person-wrapper">
                    <img src="../assets/person-1.png" alt="Person" />
                    <div className="testimonial-name-wrapper">
                      <div className="stars-wrapper">
                        <img src="../assets/stars.svg" alt="Star" />
                      </div>
                      <span className="text-semibold">Max Carter</span>
                    </div>
                  </div>

                  <img
                    src="../assets/testimonial-gradient.svg"
                    alt="Testimonial Gradient"
                    className="testimonial-gradient"
                  />
                </div>
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

              <a href="/" className="cta primary black-cta">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
