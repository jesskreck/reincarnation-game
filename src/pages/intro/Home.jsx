import React from 'react'

export default function Home() {
  return (
      <div className='home-bg'>
          <h1>Reincarnation Game</h1>
          <Link to="/awake/" className="btn--primary">
              Start Game
            </Link>
    </div>
  )
}
