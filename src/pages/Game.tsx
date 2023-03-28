import React, { useState, useEffect } from 'react';


import { PlayerObject, ActionObject } from "../types/types";

import PanelProgress from '../components/parent/PanelProgress';
import PanelActions from '../components/parent/PanelActions';
import PhotoBooth from './PhotoBooth';

import { getRandomActions } from '../utils/getRandomActions';

import "../styles/game.css"





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


  // save the selected action
  const [selectedAction, setSelectedAction] = useState([]);



  // manage display of PhotoBooth
  const [showPhotoBooth, setShowPhotoBooth] = useState(false);

  // set initial actions when component mounts
  useEffect(() => {
    setActions(getRandomActions());
  }, [])



  return (
    <div className='page game__container'>
      <div className="game__header">
        <h1>Game</h1>
      </div>

      {showPhotoBooth
        ? (
          <div>
            <PhotoBooth
              player={player} selectedAction={selectedAction} setShowPhotoBooth={setShowPhotoBooth} />
          </div>
        )
        : (
          <>
            <PanelActions
              actions={actions}
              player={player}
              setPlayer={setPlayer}
              setActions={setActions}
              setShowPhotoBooth={setShowPhotoBooth}
              getRandomActions={getRandomActions}
              selectedAction={selectedAction}
              setSelectedAction={setSelectedAction}
          />

            <PanelProgress
              player={player}
            />

         
          </>
        )}

    </div>

  );

}

export default Game;