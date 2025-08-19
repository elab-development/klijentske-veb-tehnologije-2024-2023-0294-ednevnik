import React from "react";

function Features() {
  return (
    <div className="padding-global">
      <div className="container">
        <h1 className="text-center margin-b-96">
          Meet{" "}
          {
            <img
              className="heading-img"
              src="../assets/meDiaryUnderlined.svg"
              alt=""
            />
          }{" "}
          features
        </h1>

        <div className="features-wrapper margin-b-160">
          <div className="features-item">
            <div className="features-col">
              <h2>Add your feelings</h2>
              <p className="max-width-440">
                Immerse yourself in a safe, intuitive space where capturing your
                emotions feels effortless and empowering. With just a few
                clicks, you can express how you feel, whether it’s joy, stress,
                or anything in between, through a seamless interface designed to
                honor your inner world.
              </p>
            </div>
            <img src="../assets/features-1-img.png" alt="Features Visual" />
            <img
              src="../assets/features-gradient.svg"
              alt="Features Gradient"
              className="features-gradient is-left-gradient"
            />
            <img
              src="../assets/features-badge-1.svg"
              alt="Features Badge"
              className="features-badge features-right-badge"
            />
          </div>

          <div className="features-item">
            <img
              src="../assets/features-2-img.png"
              alt="Features Visual"
              className="features-paddingless-img"
            />

            <div className="features-col">
              <h2>Track mental health</h2>
              <p className="max-width-440">
                Experience the power of visualizing your mental health journey
                through vibrant, easy-to-read charts and calendars. Watching
                your emotional patterns unfold over time offers a profound sense
                of understanding, revealing trends and triggers that shape your
                well-being.{" "}
              </p>
            </div>
            <img
              src="../assets/right-features-gradient.svg"
              alt="Features Gradient"
              className="features-gradient is-right-gradient"
            />
            <img
              src="../assets/features-badge-2.svg"
              alt="Features Badge"
              className="features-badge features-left-badge"
            />
          </div>

          <div className="features-item">
            <div className="features-col">
              <h2>Note mental states</h2>
              <p className="max-width-440">
                Dive into a reflective practice that feels like a conversation
                with your innermost self, as you document your mental states
                with ease and depth. Each note you write becomes a stepping
                stone toward greater self-awareness, allowing you to capture
                fleeting thoughts.
              </p>
            </div>
            <img src="../assets/features-3-img.png" alt="Features Visual" />
            <img
              src="../assets/features-gradient.svg"
              alt="Features Gradient"
              className="features-gradient is-left-gradient"
            />
            <img
              src="../assets/features-badge-3.svg"
              alt="Features Badge"
              className="features-badge features-right-badge"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
