import React, { useState, useEffect } from 'react';


import { PlayerObject, ActionObject } from "../types/types";

import ProgressBar from '../components/PanelProgress';
import ActionButtons from '../components/PanelActionButtons';


import { getRandomActions } from '../utils/getRandomActions';

import "../styles/game.css"
import { handleActionClick } from '../utils/handleActionClick';


const newPlayer: PlayerObject = {
  age: 20,
  attractiveness: 50,
  mental: 50,
  education: 50,
  wealth: 50,
  social: 50,
};



function Game() {

  // create a state for player object which is an instance of PlayerObject interface. PlayerObject interface = object with 5 properties defined in types.ts
  // since player state is a single object - no square brackets
  const [player, setPlayer] = useState<PlayerObject>(newPlayer);

  // create a state for action array which consists of *elements* that are instances of ActionObject interface. ActionObject interface = object with 7 properties defined in types.ts
  // since there will be many actions shown (hence workng with array of action objects) - square brackets!
  const [actions, setActions] = useState<ActionObject[]>([]);


  // set initial actions when component mounts
  useEffect(() => {
    setActions(getRandomActions());
  }, [])



  return (
    <div className='game__container'>
      <div className="game__header">
        <h1>Game</h1>
      </div>

      
      {/* TEXT SELECTION PANEL ON THE LEFT */}
      <ActionButtons
        actions={actions}
        player={player}
        setPlayer={setPlayer}
        setActions={setActions}
        getRandomActions={getRandomActions}
        handleActionClick={handleActionClick}/>

      
    {/* PROGRESS BAR ON THE RIGHT */}
      <div className='game__progress__panel'>

        {/* note: The Object.entries() function returns an array of arrays, with each inner array containing a key-value pair [key, value] */}
        {Object.entries(player).map(([key, value]) => (
          <ProgressBar key={key} label={key} value={value} />
        ))}
      </div>



    </div>


  );
}

export default Game;