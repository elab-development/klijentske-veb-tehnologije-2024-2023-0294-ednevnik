import React from "react";

function Login() {
  return (
    <div className="container">
      <div className="login-wrapper margin-b-160">
        <div className="login-col ">
          <h1 className="margin-b-32">
            Login to begin your journey to better mental health!
          </h1>

          <form action="/" className="login-form">
            <div className="field-wrapper">
              <label htmlFor="emailField">Email</label>
              <input
                className="form-field"
                placeholder="email@email.com"
                type="email"
                name="emailField"
              />
            </div>

            <div className="field-wrapper margin-b-16">
              <label htmlFor="passwordField">Password</label>
              <input
                className="form-field"
                placeholder="password123"
                type="password"
                name="passwordField"
              />
            </div>

            <button className="cta primary">Login</button>
          </form>
        </div>
        <div className="login-col">
          <img src="../assets/login-image.png" alt="Login Visual" />
        </div>
      </div>
    </div>
  );
}

export default Login;
