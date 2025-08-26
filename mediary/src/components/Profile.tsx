import React from "react";
import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";

function Profile() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="padding-global">
      <div className="container">
        <div className="margin-b-160">
          <h1 className="margin-b-64">Welcome back, User!</h1>

          <div className="profile-wrapper">
            <div className="profile-block">
              <h2>
                Your <span className="cta-color">Personal Info</span>
              </h2>
              <div className="info-wrapper">
                <div className="info-block-wrapper">
                  <span className="info-label">Email:</span>
                  <span className="info-text">email@gmail.com</span>
                </div>
                <div className="info-block-wrapper">
                  <span className="info-label">Password:</span>
                  <span className="info-text">password123</span>
                </div>
                <div className="info-block-wrapper">
                  <span className="info-label">First registered:</span>
                  <span className="info-text">10.08.2025</span>
                </div>
                <div className="info-block-wrapper">
                  <span className="info-label">Newsletter:</span>
                  <span className="info-text">No</span>
                </div>
              </div>
            </div>

            <div className="profile-block">
              <h2>
                Mental Health <span className="cta-color">Statistics</span>
              </h2>
              <div className="info-wrapper">
                <div className="info-block-wrapper">
                  <span className="info-label">Most entered feeling:</span>
                  <span className="info-text">Happy</span>
                </div>
                <div className="info-block-wrapper">
                  <span className="info-label">First entered feeling:</span>
                  <span className="info-text">Excited</span>
                </div>
                <div className="info-block-wrapper">
                  <span className="info-label">Last entered feeling:</span>
                  <span className="info-text">Sad</span>
                </div>
              </div>
            </div>

            <div className="profile-btn-wrapper">
              <a href="/" className="cta delete-secondary">
                Delete All Entries
              </a>
              <a href="/" className="cta delete-primary">
                Delete Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
