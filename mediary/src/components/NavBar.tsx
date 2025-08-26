import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { logoutUser } from "../models/logoutUser";

function NavBar() {
  const { user } = useAuth();

  return (
    <div className="padding-global">
      <div className="container">
        <div className="navbar">
          <a href="/" className="logo-link">
            <img src="../assets/logo.svg" alt="Logo" />
          </a>
          <div className="menu-wrapper">
            <div className="menu-list">
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
              <Link to="/profile" className="menu-item">
                Profile
              </Link>
              {user ? (
                <Link
                  to="/login"
                  onClick={logoutUser}
                  className="cta secondary"
                >
                  Logout
                </Link>
              ) : (
                <>
                  <Link to="/login" className="cta secondary">
                    Login
                  </Link>
                  <Link to="/register" className="cta primary">
                    Register Now
                  </Link>
                </>
              )}
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
