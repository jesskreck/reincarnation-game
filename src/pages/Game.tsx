import React from 'react'

import ProgressBar from '../components/ProgressBar'
import TextSelection from '../components/TextSelection';

import "../styles/game.css"




type progressChange = {
  Attractiveness?: number;
  Mental?: number;
  Education?: number;
  Wealth?: number;
  Social?: number;
}

let testNodes: { prompt: string; progressChange: progressChange }[] = [
  {
    prompt: "Complete a 6-month Ironman training program",
    progressChange: {
      Attractiveness: 20,
      Mental: 10
    }
  },
  {
    prompt: "Graduate with a degree in underwater basket weaving",
    progressChange: {
      Education: 10,
      Wealth: 10
    }
  },
  {
    prompt: "Deliberately sabotage your chances of promotion",
    progressChange: {
      Education: -5,
      Wealth: -15
    }
  },
  {
    prompt: "Join a support group for recovering perfectionists",
    progressChange: {
      Mental: 20,
      Education: 5,
    }
  },
  {
    prompt: "Pursue toxic romantic relationships",
    progressChange: {
      Mental: -20,
      Social: -10
    }
  },
]




function Game() {

  return (
    <div className='container'>
      <h1>Game</h1>

      
    {/* TEXT SELECTION PANEL ON THE LEFT */}
      <div className="game__selection__panel">
        {testNodes.map((item, index) => (
          <TextSelection key={index} prompt={item.prompt} progressChange={item.progressChange} />
        )
        )}
      </div>

      
    {/* PROGRESS BAR ON THE RIGHT */}
      {/* <div className='game__progress__panel'>
        {testData.map((item, index) => (
          <ProgressBar key={index} name={item.name} progress={item.progress} />
        ))}
      </div> */}



    </div>


  );
}

export default Game;