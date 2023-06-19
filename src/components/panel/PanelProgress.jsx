import React, { useContext } from 'react'
import { Progressbar } from '../dashboard/children/Progressbar.jsx'
import { PlayerContext } from '../../contexts/PlayerContext.js'
import { LanguageContext } from '../../contexts/LanguageContext.js';
import texts from "../../assets/gameData/texts.json"
import { OverallWellBeing } from './PanelWellBeing.jsx';
import calculateWellbeing from "../../utils/calculateWellbeing"
import player1 from "../../assets/images/garnet.gif"
import player2 from "../../assets/images/peridot.gif"
import Manifest from '../dashboard/children/Trauma.jsx';
import { LevelContext } from '../../contexts/LevelContext.js';
import Trauma from '../dashboard/children/Trauma.jsx';


export default function PanelProgress() {

  const { activePlayer } = useContext(PlayerContext)
  const { language } = useContext(LanguageContext)
  const { progress } = useContext(LevelContext)



  const wellBeing = calculateWellbeing(activePlayer.progress);


  return (

    <div className="game-container-progress">
      <div className="container flex">

        <img src={player1} alt="" className='game-avatar' />

        <div>
          <h3>{activePlayer.name}</h3>
          <div className="flex">
            <h4>{texts.main.age[language]}:</h4>
            <div className="game-counter">
              {activePlayer.age}
            </div>
          </div>
          <div className="flex">
            <h4>Reincarnation:</h4>
            <div className="game-counter">
              {activePlayer.prevReincar}
            </div>
          </div>
        </div>
      </div>


      <div className='container'>
        {/* note: The Object.entries() function returns an array of arrays, with each inner array containing a key-value pair [key, value] */}
        {Object.entries(progress).map(([key, value]) => (
          <Progressbar key={key} label={key} value={value} />
        ))}
      </div>


      <div className="game-manifests">
        <Trauma />
      </div>

    </div>
  )
}
