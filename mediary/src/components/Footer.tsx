import React from "react";

function Footer() {
  return (
    <div className="padding-global">
      <div className="container">
        <div className="footer">
          <div className="footer-item-wrapper">
            <a href="/" className="logo-link">
              <img src="../assets/logo.svg" alt="Logo" />
            </a>
            <div className="footer-list">
              <a href="/" className="menu-item">
                Home
              </a>
              <a href="/features" className="menu-item">
                Features
              </a>
              <a href="/diary" className="menu-item">
                Diary
              </a>
              <a href="/blog" className="menu-item">
                Blog
              </a>
            </div>
            <div className="footer-list">
              <a href="/" className="menu-item">
                Instagram
              </a>
              <a href="/" className="menu-item">
                LinkedIn
              </a>
              <a href="/" className="menu-item">
                Mail
              </a>
              <a href="/" className="menu-item">
                Call Us
              </a>
            </div>
            <div className="newsletter-wrapper">
              <form className="newsletter-form" action="/">
                <h3 className="newsletter-heading">
                  Subscribe to our newsletter for weekly news!
                </h3>
                <input
                  className="form-field"
                  type="email"
                  name="emailField"
                  id="emailField"
                  placeholder="email@email.com"
                />
                <button className="cta primary">Subscribe Now</button>
              </form>
            </div>
          </div>
          <div className="footer-img-wrapper">
            <img src="../assets/big-logo-footer.svg" alt="Big Footer Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
