import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

  const deleteAccount = async () => {
    if (!user) return;

    const { error: dbError } = await supabase
      .from("users")
      .delete()
      .eq("id", user?.id);

    if (dbError) {
      console.error(dbError);
      return;
    }

    await supabase.auth.signOut();

    navigate("/register", { replace: true });
  };

  const deleteOpenModalBtn = document.getElementById("deleteOpenModal");
  const deleteCloseModalBtn = document.getElementById("deleteCloseModal");

  const modalWrapper = document.getElementsByClassName(
    "delete-modal-wrapper"
  )[0];

  deleteOpenModalBtn?.addEventListener("click", () => {
    modalWrapper.classList.remove("is-invisible");
  });

  deleteCloseModalBtn?.addEventListener("click", () => {
    modalWrapper.classList.add("is-invisible");
  });

  return (
    <>
      {" "}
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
                <a className="cta delete-secondary">Delete All Entries</a>
                <a className="cta delete-primary" id="deleteOpenModal">
                  Delete Account
                </a>

                {/* Account delete modal */}
                <div className="delete-modal-wrapper is-invisible">
                  <div className="delete-modal">
                    <h3 className="delete-modal-heading">
                      Are you sure that you want to delete your account?
                    </h3>
                    <div className="delete-modal-btn-wrapper">
                      <a className="cta delete-primary" onClick={deleteAccount}>
                        Yes, Delete
                      </a>

                      <a className="cta primary" id="deleteCloseModal">
                        No, Go Back
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
