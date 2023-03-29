import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function GameIntro() {
    return (
      <div className='page container'>
      
      <h1>Game Intro Page</h1>
      <Link to="/Game/PlayerSelection">
              <button>Let's begin</button>
        </Link>
        <Outlet />
      </div>
  )
}
