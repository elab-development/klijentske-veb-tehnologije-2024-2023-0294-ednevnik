import React from "react";

function OneTestimonial() {
  return (
    <>
      <div className="testimonial">
        <p className="testimonial-text">
          <span className="hanging-punctuation">"</span>meDiary has been a
          lifeline for managing my stress. Helps me manage daily stress in
          business and my work."
        </p>
        <div className="testimonial-person-wrapper">
          <img src="../assets/person-1.png" alt="Person" />
          <div className="testimonial-name-wrapper">
            <div className="stars-wrapper">
              <img src="../assets/stars.svg" alt="Star" />
            </div>
            <span className="text-semibold">Max Carter</span>
          </div>
        </div>

        <img
          src="../assets/testimonial-gradient.svg"
          alt="Testimonial Gradient"
          className="testimonial-gradient"
        />
      </div>
    </>
  );
}

export default OneTestimonial;
