import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Private = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) navigate("/login");
  }, []);

  return (
    <div className="container mt-5">
      <h2>Private Page</h2>
      <p>This content is only visible to logged-in users.</p>
      <button className="btn btn-danger" onClick={() => {
        sessionStorage.removeItem("token");
        navigate("/login");
      }}>Logout</button>
    </div>
  );
};
