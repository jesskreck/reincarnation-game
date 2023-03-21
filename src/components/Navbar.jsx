import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";



function Navbar() {
  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/ImageGenerator"}>Image Generator</NavLink>
        <NavLink to={"/Game"}>Game</NavLink>
      </nav>
    </>
  );
}

export default Navbar;
