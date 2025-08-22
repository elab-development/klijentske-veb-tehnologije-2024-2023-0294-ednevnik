import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../models/supabaseClients";
import { BlogPost } from "../models/BlogPost";
import PageNotFound from "./PageNotFound";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

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
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <PageNotFound />;

  return (
    <>
      <div className="padding-global">
        <div className="container">
          <h1 className="margin-b-96">{post.heading}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      </div>
      {/* <div className="padding-global">
        <div className="container">
          <h1 className="margin-b-96">
            5 Simple Mindfulness Exercises to Boost Your Daily Calm
          </h1>

          <div className="bp-text-wrapper">
            <h2>Introduction</h2>
            <p className="bp-p">
              In today's fast-paced world, finding moments of calm can feel
              challenging. Mindfulness exercises offer a simple yet powerful way
              to center yourself, reduce stress, and improve overall mental
              well-being.
            </p>
          </div>

          <div className="bp-bullet-wrapper">
            <div className="bp-text-wrapper is-indented">
              <h3 className="font-size-32">Exercise 1: Deep Breathing</h3>
              <p className="bp-p">
                Start with deep breathing to anchor your thoughts. Inhale slowly
                for four counts, hold for four, and exhale for four. This
                technique activates your body's relaxation response and can be
                done anywhere, making it ideal for quick stress relief during
                busy days.
              </p>
            </div>
            <div className="bp-text-wrapper is-indented">
              <h3 className="font-size-32">Exercise 2: Body Scan</h3>
              <p className="bp-p">
                Perform a body scan by lying down or sitting comfortably. Focus
                on each part of your body from toes to head, noticing tension
                and releasing it. This helps increase body awareness and eases
                physical stress, promoting a deeper sense of relaxation over
                time.
              </p>
            </div>
            <div className="bp-text-wrapper is-indented">
              <h3 className="font-size-32">Exercise 3: Mindful Walking</h3>
              <p className="bp-p">
                Take a short walk while paying attention to your surroundings.
                Notice the sensation of your feet on the ground, the sounds
                around you, and the air on your skin. It's an easy way to
                integrate mindfulness into daily movement, turning routine
                activities into opportunities for presence.
              </p>
            </div>
            <div className="bp-text-wrapper is-indented">
              <h3 className="font-size-32">Exercise 4: Sensory Focus</h3>
              <p className="bp-p">
                Engage your senses by naming five things you see, four you can
                touch, three you hear, two you smell, and one you taste. This
                grounds you in the present moment and interrupts anxious
                thoughts, providing immediate mental clarity.
              </p>
            </div>
            <div className="bp-text-wrapper is-indented">
              <h3 className="font-size-32">
                Exercise 5: Loving-Kindness Meditation
              </h3>
              <p className="bp-p">
                Repeat phrases like "May I be happy, may I be healthy" to
                yourself and others. This fosters compassion and positivity.
                Over time, it enhances emotional resilience and improves
                relationships with yourself and those around you.
              </p>
            </div>
          </div>

          <div className="bp-text-wrapper">
            <h2>Conclusion</h2>
            <p className="bp-p">
              Incorporating these exercises into your routine can lead to
              lasting calm. Start small and build from there for the best
              results.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default BlogPostPage;
