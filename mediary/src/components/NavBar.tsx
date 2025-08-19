import React from "react";

function NavBar() {
  return (
    <div className="padding-global">
      <div className="container">
        <div className="navbar">
          <a href="/" className="logo-link">
            <img src="../assets/logo.svg" alt="Logo" />
          </a>
          <div className="menu-wrapper">
            <div className="menu-list">
              <a href="/" className="menu-item">
                Home
              </a>
              <a href="/diary" className="menu-item">
                Features
              </a>
              <a href="/diary" className="menu-item">
                Diary
              </a>
              <a href="/blog" className="menu-item">
                Blog
              </a>
              <a href="/profile" className="menu-item">
                Profile
              </a>
              <a href="/" className="cta secondary">
                Login
              </a>
              <a href="/" className="cta primary">
                Register Now
              </a>
            </div>
          </div>
          <img
            src="../assets/gradient-rectangle.png"
            alt="Gradient"
            className="navbar-gradient"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
