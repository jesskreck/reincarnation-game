import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function GameIntro() {
  const location = useLocation();

  // show outlet if we're not on Game anymore which at this moment is the path to this component (will for sure change so adapt here as well)
  const showOutlet = location.pathname !== "/Game";

  return (
    <div className='page container'>
      <h1>Game</h1>

      {showOutlet
        ? (
          <Outlet />
        )
        : (
          <>
            <h2>Start Page with instruction</h2>
            <p>Reeeeadddy?!? Instructions will follow in future</p>
            <Link to="/Game/PlayerSelection">
              <button>Let's begin!</button>
            </Link>
          </>

        )}
    </div>
  )
}
