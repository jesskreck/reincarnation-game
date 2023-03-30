import React, { useState, useEffect } from 'react';


import { PlayerObject, ActionObject, AlbumObject } from "../types/types";

import PanelProgress from '../components/parent/PanelProgress';
import PanelActions from '../components/parent/PanelActions';
import PhotoBooth from './PhotoBooth';

import { getRandomActions } from '../utils/getRandomActions';

import "../styles/game.css"
import { PanelAlbum } from '../components/parent/PanelAlbum';





const newPlayer: PlayerObject = {
  age: 20,
  reincarnate: false,
  attractiveness: 50,
  mental: 50,
  education: 50,
  wealth: 50,
  social: 50,
};



function Game() {

  // create a state for player object which is an instance of PlayerObject interface. PlayerObject interface = object with 5 properties defined in types.ts
  // for now, player state is a single object - no square brackets
  const [player, setPlayer] = useState<PlayerObject>(newPlayer);

  // create a state for action array which consists of *elements* that are instances of ActionObject interface. ActionObject interface = object with 7 properties defined in types.ts
  // since there will be many actions shown (hence working with array of action objects) - square brackets!
  const [actions, setActions] = useState<ActionObject[]>([]);

  // create a state for album object which consists of photos
  const [album, setAlbum] = useState<AlbumObject[]>([]);



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
        <h2>Time to play</h2>
      </div>

      {showPhotoBooth
        ? (
          <div>
            <PhotoBooth
              player={player}
              selectedAction={selectedAction}
              setShowPhotoBooth={setShowPhotoBooth}
              album={album}
              setAlbum={setAlbum}
            />
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
            
            <PanelAlbum
              album={album}
            />

         
          </>
        )}

    </div>

  );

}

export default Game;