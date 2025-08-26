import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const Diary = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <div>Diary</div>;
};

export default Diary;
