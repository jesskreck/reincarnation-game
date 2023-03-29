import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "../../styles/navbar.css";
import { AuthFeedback } from "../auth/AuthFeedback";
import { SignIn } from "../auth/SignIn";
import { SignUp } from "../auth/SignUp";
import Modal from "../modals/Modal";


function Navbar() {
  const { user, setUser } = useContext(AuthContext)

  const location = useLocation();

  const [showModal, setShowModal] = useState(false);



  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/ImageGenerator"}>Image Generator</NavLink>
        <NavLink to={"/Game"}>Game</NavLink>
        <NavLink to={"/PlayerSelection"}>Player</NavLink>
        <NavLink to={"/Start"}>Start</NavLink>

        {/* why are the nested routes not working? */}
        {/* { location.pathname.includes("Game") ? 
            <>
              - 
              <NavLink to="/Game/PlayerSelection">Player Selection</NavLink>
              <NavLink to="/Game/Start">Start</NavLink>
            </> 
          : null} */}


        <button onClick={() => setShowModal(true)}>Login</button>
        <Modal open={showModal} close={() => setShowModal(false)}>
          <SignIn />
          <SignUp />
          <AuthFeedback />
        </Modal>



        <button onClick={() => setUser("Adam")}>Set user to Adam</button>
        {/* profile page not set up yet */}
        {/* {user && <NavLink to={"/Profile"}>{user}</NavLink>} */}

      </nav>
    </>
  );
}

export default Navbar;