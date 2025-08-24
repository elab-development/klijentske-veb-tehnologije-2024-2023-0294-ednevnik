import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../models/supabaseClients";
import { BlogPost } from "../models/BlogPost";
import PageNotFound from "./PageNotFound";
import "../App.css";
import { fetchBlogPosts } from "../models/BlogPostLoader";
import ContinueReadingPost from "./ContinueReadingPost";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      const { data, error } = await supabase
        .from("blogPosts")
        .select("*")
        .eq("imgCode", id)
        .single();

      if (error) {
        console.error("Greška:", error);
      } else {
        setPost(data);
        console.log(data);
      }
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    const loadBlogPosts = async () => {
      const loadedBlogPosts = await fetchBlogPosts();
      setBlogPosts(loadedBlogPosts);
    };

    loadBlogPosts();
  }, []);

  if (!post) return <PageNotFound />;

  return (
    <>
      <div className="padding-global">
        <div className="container">
          <h1 className="margin-b-64">{post.heading}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>

          <h2 className="margin-b-32">Continue Reading</h2>
          <div className="continue-reading-wrapper margin-b-128">
            {blogPosts
              .sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .map((bp) => (
                <ContinueReadingPost key={bp.id} blogPost={bp} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
