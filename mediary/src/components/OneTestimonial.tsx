import React from "react";
import { Testimonial } from "../models/Testimonial";

interface OneTestimonialProps {
  testimonial: Testimonial;
}

const OneTestimonial: React.FC<OneTestimonialProps> = ({ testimonial }) => {
  const src = `../assets/person-${testimonial.imgCode}.png`;

  return (
    <>
      <div className="testimonial">
        <p className="testimonial-text">
          <span className="hanging-punctuation">"</span>
          {testimonial.desc}
        </p>
        <div className="testimonial-person-wrapper">
          <img src={src} alt="Person" />
          <div className="testimonial-name-wrapper">
            <div className="stars-wrapper">
              <img src="../assets/stars.svg" alt="Star" />
            </div>
            <span className="text-semibold">{testimonial.fullName}</span>
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
};

export default OneTestimonial;
