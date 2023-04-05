import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { LoginButton } from "../child/LoginButton";

import LanguageSwitch from "./LanguageSwitch";
import { AuthFeedback } from "../auth/AuthFeedback";


function Navbar() {
  
  const { user } = useContext(AuthContext)



  return (
    <>
      <nav>
        <LanguageSwitch />
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/ImageGenerator"}>Image Generator</NavLink>

        <NavLink to={"/Players"}>Player Selection</NavLink>
        <NavLink to={"/Actions"}>Dashboard</NavLink>

        <div className="nav__profile">
          {user
            ? <div className="btn--nav">
              <AuthFeedback />
            </div>
            : <LoginButton label={"Login"} />
          }
        </div>


      </nav>
    </>
  );
}

export default Navbar;
