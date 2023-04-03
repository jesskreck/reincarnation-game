import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "../../styles/navbar.css";
import { LoginButton } from "../child/LoginButton";

import LanguageSwitch from "./LanguageSwitch";


function Navbar() {
  const { user, setUser } = useContext(AuthContext)

  const location = useLocation();

  



  return (
    <>
      <nav>
        <LanguageSwitch/>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/ImageGenerator"}>Image Generator</NavLink>
        
        <NavLink to={"/PlayerSelection"}>Player Selection</NavLink>
        <NavLink to={"/Dashboard"}>Dashboard</NavLink>

        <LoginButton label={"Check Login Status"}/>

        {/* {location.pathname.includes("Game") ?
          <>
            -
            <NavLink to="/Game/PlayerSelection">Player</NavLink>
            <NavLink to="/Game/Start">Start</NavLink>
          </>
          : null} */}

      </nav>
    </>
  );
}

export default Navbar;
