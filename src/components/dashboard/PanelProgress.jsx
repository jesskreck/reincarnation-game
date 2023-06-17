import React, { useContext } from 'react'
import { ProgressBar } from './children/ProgressBar.jsx'
import { PlayerContext } from '../../contexts/PlayerContext.js'
import { LanguageContext } from '../../contexts/LanguageContext.js';
import texts from "../../assets/gameData/texts.json"
import { OverallWellBeing } from './children/OverallWellBeing.jsx';



export default function PanelProgress() {

  const { activePlayer } = useContext(PlayerContext);
  const { language } = useContext(LanguageContext)
  
  function calculateWellBeing(progress) {
    const stressThreshold = 20;
    const powerThreshold = 80;

    let sum = 0;
    let count = 0;

    for (const key in progress) {
      const level = progress[key];

      let weight = 1;
      if (level < stressThreshold) {
        weight = 0.5;
      } else if (level > powerThreshold) {
        weight = 2;
      }

      sum += level * weight;
      count += weight;
    }
    
    const wellBeing = Math.round(sum / count);
    return wellBeing;
  }

  const wellBeing = calculateWellBeing(activePlayer.progress);


  return (

    <div className='game__progress__panel'>
      <h2>{activePlayer.name}, {activePlayer.age} {texts.main.age[language]}</h2>
      
      <OverallWellBeing label={"Overall Well-being"} value={wellBeing} />

      {/* note: The Object.entries() function returns an array of arrays, with each inner array containing a key-value pair [key, value] */}
      {Object.entries(activePlayer.progress).map(([key, value]) => (
        <ProgressBar key={key} label={key} value={value} />
      ))}
    </div>
  )
}
