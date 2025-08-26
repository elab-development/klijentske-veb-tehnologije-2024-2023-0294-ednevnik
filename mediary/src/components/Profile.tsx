import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import { supabase } from "../models/supabaseClients";

interface UserData {
  id: string;
  email: string;
  name: string;
  created_at: string;
  newsletter: string;
}

function Profile() {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [newsletter, setNewsletter] = useState("No");

  const fetchUser = async () => {
    const { data: userDataSupabase, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", user.id)
      .single();

    if (userError) console.error(userError);

    const dateString = userDataSupabase.created_at;
    const date = new Date(dateString);

    userDataSupabase.created_at = `${String(date.getDate()).padStart(
      2,
      "0"
    )}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(
      date.getFullYear()
    )}.`;

    const { data: newsletterEmails, error: newsletterError } = await supabase
      .from("newsletter")
      .select("*");

    newsletterEmails?.forEach((object) => {
      if (object.email === userDataSupabase?.email) {
        setNewsletter("Yes");
      }
    });

    if (newsletterError) console.error(newsletterError);

    setUserData(userDataSupabase);
  };

  useEffect(() => {
    if (!user) {
      return;
    }

    fetchUser();
  }, [user]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="padding-global">
      <div className="container">
        <div className="margin-b-160">
          <h1 className="margin-b-64">Welcome back, {userData?.name}!</h1>

          <div className="profile-wrapper">
            <div className="profile-block">
              <h2>
                Your <span className="cta-color">Personal Info</span>
              </h2>
              <div className="info-wrapper">
                <div className="info-block-wrapper">
                  <span className="info-label">Email:</span>
                  <span className="info-text">{userData?.email}</span>
                </div>
                <div className="info-block-wrapper">
                  <span className="info-label">First registered:</span>
                  <span className="info-text">{userData?.created_at}</span>
                </div>
                <div className="info-block-wrapper">
                  <span className="info-label">Newsletter:</span>
                  <span className="info-text">{newsletter}</span>
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
