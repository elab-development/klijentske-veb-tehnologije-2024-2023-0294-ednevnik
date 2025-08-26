import React, { useState } from "react";
import { registerUser } from "../models/registerUser";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const formRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (repeatPassword !== password) {
      console.log("Passwords must be identical.");
      return;
    }

    try {
      const data = await registerUser(email, password, name, surname);

      // console.log(data);

      navigate("/diary", { replace: true });
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="padding-global">
      <div className="container">
        <div className="register-wrapper margin-b-128">
          <h1 className="register-heading">
            Create an account for your personal mental diary!
          </h1>
          <form onSubmit={formRegister} className="register-form">
            <div className="field-wrapper">
              <label htmlFor="nameField">Name</label>
              <input
                type="text"
                value={name}
                className="form-field is-register"
                name="nameField"
                placeholder="John"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="field-wrapper">
              <label htmlFor="surnameField">Surname</label>
              <input
                type="text"
                value={surname}
                className="form-field is-register"
                name="surnameField"
                placeholder="Johnson"
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>

            <div className="field-wrapper">
              <label htmlFor="emailRegisterField">Email</label>
              <input
                type="email"
                value={email}
                className="form-field is-register"
                name="emailRegisterField"
                placeholder="email@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field-wrapper">
              <label htmlFor="passwordField">Password</label>
              <input
                type="password"
                value={password}
                className="form-field is-register"
                name="passwordField"
                placeholder="password123"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="field-wrapper margin-b-8">
              <label htmlFor="repeatPasswordField">Repeat password</label>
              <input
                type="password"
                value={repeatPassword}
                className="form-field is-register"
                name="repeatPasswordField"
                placeholder="password123"
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </div>

            <button className="cta primary">Register Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
