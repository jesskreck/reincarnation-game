import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
      <div className='home-bg'>
          <h1>Reincarnation Game</h1>
          <Link to="/test" className="btn--primary">
              Start Game
      </Link>
      
      <Outlet />
    </div>
  )
}
