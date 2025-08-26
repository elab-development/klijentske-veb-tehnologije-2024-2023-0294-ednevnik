import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Features from "./components/Features";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Blog from "./components/Blog";
import BlogPostPage from "./components/BlogPostPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./components/PageNotFound";
import Diary from "./components/Diary";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogPosts/:id" element={<BlogPostPage />} />

          {/* Catch-all ruta */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
