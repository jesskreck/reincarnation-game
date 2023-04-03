import React, { useContext, useEffect, useState } from 'react'
import ProgressBar from '../child/ProgressBar.jsx'
import { PlayerContext } from '../../contexts/PlayerContext.js'



export default function PanelProgress() {

  const { activePlayer, setActivePlayer } = useContext(PlayerContext);


  return (

    <div className='game__progress__panel'>
      <p>{activePlayer.name}, {activePlayer.age} years</p>

      {/* note: The Object.entries() function returns an array of arrays, with each inner array containing a key-value pair [key, value] */}
      {Object.entries(activePlayer.progress).map(([key, value]) => (
        <ProgressBar key={key} label={key} value={value} />
      ))}
    </div>
  )
}
