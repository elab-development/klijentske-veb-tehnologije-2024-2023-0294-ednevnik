import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../models/loginUser";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);

      console.log(data);

      navigate("/diary", { replace: true });
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="padding-global">
      <div className="container">
        <div className="login-wrapper margin-b-160">
          <div className="login-col ">
            <h1 className="margin-b-32">
              Login to begin your journey to better mental health!
            </h1>

            <form onSubmit={onSubmit} className="login-form">
              <div className="field-wrapper">
                <label htmlFor="emailField">Email</label>
                <input
                  className="form-field"
                  placeholder="email@email.com"
                  type="email"
                  value={email}
                  name="emailField"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="field-wrapper margin-b-16">
                <label htmlFor="passwordField">Password</label>
                <input
                  className="form-field"
                  placeholder="password123"
                  value={password}
                  type="password"
                  name="passwordField"
                  required
                  onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
}

export default Login;
