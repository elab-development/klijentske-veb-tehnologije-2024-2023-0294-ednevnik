import React from "react";

function Register() {
  return (
    <div className="container">
      <div className="register-wrapper margin-b-128">
        <h1 className="register-heading">
          Create an account for your personal mental diary!
        </h1>
        <form action="/" className="register-form">
          <div className="field-wrapper">
            <label htmlFor="nameField">Name</label>
            <input
              type="text"
              className="form-field is-register"
              name="nameField"
              placeholder="John"
            />
          </div>

          <div className="field-wrapper">
            <label htmlFor="surnameField">Surname</label>
            <input
              type="text"
              className="form-field is-register"
              name="surnameField"
              placeholder="Johnson"
            />
          </div>

          <div className="field-wrapper">
            <label htmlFor="emailRegisterField">Email</label>
            <input
              type="email"
              className="form-field is-register"
              name="emailRegisterField"
              placeholder="email@email.com"
            />
          </div>

          <div className="field-wrapper">
            <label htmlFor="passwordField">Password</label>
            <input
              type="password"
              className="form-field is-register"
              name="passwordField"
              placeholder="password123"
            />
          </div>

          <div className="field-wrapper margin-b-8">
            <label htmlFor="repeatPasswordField">Repeat password</label>
            <input
              type="password"
              className="form-field is-register"
              name="repeatPasswordField"
              placeholder="password123"
            />
          </div>

          <button className="cta primary">Register Account</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
