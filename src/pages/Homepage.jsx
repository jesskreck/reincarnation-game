import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  //NOTE there is no German translation for the welcome page. Maybe better not to give the option of changing language here, only where it is really available?

  return (
    <div className="home--bg">
      <div className="home--intro">
        <h1>Welcome, Soul Traveller!</h1>
        {
          //NOTE it is recommended NOT to use capital letters in urls , unless there is a specific reason to it (like pointing to a file's name)}
        }
        <Link to="/Players/" className="btn--primary">
          Give me those souls
        </Link>
      </div>
    </div>
  );
}
