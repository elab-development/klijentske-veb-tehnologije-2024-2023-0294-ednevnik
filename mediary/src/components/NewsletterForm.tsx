import React from "react";
import { useState } from "react";
import { supabase } from "../models/supabaseClients";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "") {
      console.log("Email ne sme biti prazan.");
      return;
    }

    const { error } = await supabase.from("newsletter").insert([{ email }]);

    if (error) {
    } else {
      setEmail("");
    }
  };

  return (
    <>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          className="form-field"
          type="email"
          name="emailField"
          id="emailField"
          value={email}
          placeholder="email@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="cta primary">
          Subscribe Now
        </button>
      </form>
    </>
  );
};

export default NewsletterForm;
