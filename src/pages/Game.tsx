import React from 'react'

import ProgressBar from '../components/ProgressBar'

import "../styles/game.css"



let testData: { name: string; progress: number }[] = [
    { name: "Attractiveness", progress: 50 },
    { name: "Mental stability", progress: 50 },
    { name: "Education level", progress: 50 },
    { name: "Wealth", progress: 50 },
    { name: "Social relationships", progress: 50 },
  ]

function Game() {

  return (
    <div className='container'>
      <h1>Game</h1>

      <div className='status__panel'>
        {testData.map((item, index) => (
          <ProgressBar key={index} name={item.name} progress={item.progress} />
        ))}


      </div>


    </div>

  );
}

export default Game;