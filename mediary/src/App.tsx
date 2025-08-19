import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Features from "./components/Features";
// import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <NavBar />
      <Profile />
      <Footer />
    </>
  );
}

export default App;
