import React from 'react'
import { Link } from 'react-router-dom'
// import Game from "./Game";


export default function GameIntro() {
    return (
      <div className='page container'>
      
      <h1>Game Start Page</h1>
      <Link to="/PlayerSelection">
              <button>Start</button>
      </Link>
      </div>
  )
}
