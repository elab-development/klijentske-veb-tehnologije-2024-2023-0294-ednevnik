import React from "react";
import NewsletterForm from "./NewsletterForm";
import { Link } from "react-router-dom";

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
              <Link to="/" className="menu-item">
                Home
              </Link>
              <Link to="/features" className="menu-item">
                Features
              </Link>
              <Link to="/diary" className="menu-item">
                Diary
              </Link>
              <Link to="/blog" className="menu-item">
                Blog
              </Link>
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
              <h3 className="newsletter-heading">
                Subscribe to our newsletter for weekly news!
              </h3>
              <NewsletterForm />
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
