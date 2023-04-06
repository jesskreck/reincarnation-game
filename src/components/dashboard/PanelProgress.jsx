import React, { useContext } from 'react'
import { ProgressBar } from './children/ProgressBar.jsx'
import { PlayerContext } from '../../contexts/PlayerContext.js'
import { LanguageContext } from '../../contexts/LanguageContext.js';
import texts from "../../assets/gameData/texts.json"



export default function PanelProgress() {

  const { activePlayer } = useContext(PlayerContext);
  const {language} = useContext(LanguageContext)


  return (

    <div className='game__progress__panel'>
      <h2>{activePlayer.name}, {activePlayer.age} {texts.main.age[language]}</h2>

      {/* note: The Object.entries() function returns an array of arrays, with each inner array containing a key-value pair [key, value] */}
      {Object.entries(activePlayer.progress).map(([key, value]) => (
        <ProgressBar key={key} label={key} value={value} />
      ))}
    </div>
  )
}
