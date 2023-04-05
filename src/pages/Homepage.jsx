import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="home--bg">
      <div className="home--intro">
        <h1>Welcome, Soul Traveller!</h1>
        <Link to="/Players/" className="btn--primary">
          Give me those souls
        </Link>
      </div>
    </div>
  );
}
