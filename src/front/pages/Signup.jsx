import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {    // Function that handles info
    e.preventDefault();
    const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/user", { // created object to store results, if the user enters valid information to fit the post
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          email,  // body of the post
          password
        }
      ),
    });

    if (res.ok) {
      navigate("/login"); // If information is valid, navigate to /login page
    } else {
      const err = await res.json();
      alert(err.msg);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}> {/* onSubmit just means when the user submits the form the function will occur */}
        <input className="form-control my-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /> {/* Required to enter a mail and Gets the email */}
        <input className="form-control my-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /> {/* Required to enter a password */}
        <button className="btn btn-primary">Register</button> {/* Once user clicks this the form will be "Submitted" so onSubmit will make the function occur */}
      </form>
    </div>
  );
};
