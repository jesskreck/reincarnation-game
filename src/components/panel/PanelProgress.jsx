import React, { useContext } from 'react'
import { ProgressBar } from '../dashboard/children/ProgressBar.jsx'
import { PlayerContext } from '../../contexts/PlayerContext.js'
import { LanguageContext } from '../../contexts/LanguageContext.js';
import texts from "../../assets/gameData/texts.json"
import { OverallWellBeing } from './PanelWellBeing.jsx';
import calculateWellbeing from "../../utils/calculateWellbeing"
import player1 from "../../assets/images/garnet.gif"
import player2 from "../../assets/images/peridot.gif"
import Manifest from '../dashboard/children/Manifest.jsx';


export default function PanelProgress() {

  const { activePlayer } = useContext(PlayerContext);
  const { language } = useContext(LanguageContext)



  const wellBeing = calculateWellbeing(activePlayer.progress);


  return (

    <div className="">
      <div className="container flex">

        <img src={player1} alt="" className='game-avatar' />

        <div className="game-avatar-container">
          <h3>{activePlayer.name}</h3>
          <div className="game-info-container">
            <h6>{texts.main.age[language]}:</h6>
            <div className="game-info-counter">
              {activePlayer.age}
            </div>
          </div>
          <div className="game-info-container">
            <h6>Reincarnation:</h6>
            <div className="game-info-counter">
              {activePlayer.prevReincar}
            </div>
          </div>
        </div>
      </div>


      <div className="">
        {/* note: The Object.entries() function returns an array of arrays, with each inner array containing a key-value pair [key, value] */}
        {Object.entries(activePlayer.progress).map(([key, value]) => (
          <ProgressBar key={key} label={key} value={value} />
        ))}
      </div>


      <div className="game-manifests">
        <Manifest />
      </div>

    </div>
  )
}
