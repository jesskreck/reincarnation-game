import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { LoginButton } from "../child/LoginButton";

import LanguageSwitch from "./LanguageSwitch";
import { AuthFeedback } from "../auth/AuthFeedback";

import "../../styles/navbar.css";

function Navbar() {
  
  const { user } = useContext(AuthContext)



  return (
    <>
      <nav>
        <LanguageSwitch />
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/ImageGenerator"}>Image Generator</NavLink>

        <NavLink to={"/PlayerSelection"}>Player Selection</NavLink>
        <NavLink to={"/Dashboard"}>Dashboard</NavLink>

        <div className="nav__profile">
          {user
            ? <AuthFeedback />
            : <LoginButton label={"Login"} />
          }
        </div>


      </nav>
    </>
  );
}

export default Navbar;
