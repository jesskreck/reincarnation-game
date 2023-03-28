import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "../../styles/navbar.css";



function Navbar() { 
  const { user, setUser } = useContext(AuthContext)

  const location = useLocation();


  

  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/ImageGenerator"}>Image Generator</NavLink>
        <NavLink to={"/Game"}>Game</NavLink>
        <NavLink to={"/PlayerSelection"}>Player</NavLink>
        <NavLink to={"/Start"}>Start</NavLink>
         {/* { location.pathname.includes("Game") ? 
         
            <>
              - 
              <NavLink to="/Game/PlayerSelection">Player Selection</NavLink>
              <NavLink to="/Game/Start">Start</NavLink>
            </> 
          : null} */}
        
       
        <button >Login</button>

        <button onClick={()=>setUser("Adam")}>Set user to Adam</button>
        
         {user && <NavLink to={"/Profile"}>{user}</NavLink>}

      </nav>
    </>
  );
}

export default Navbar;
