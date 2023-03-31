import React, { useContext, useEffect, useState } from 'react'
import ProgressBar from '../child/ProgressBar.jsx'
import { PlayerContext } from '../../contexts/PlayerContext.js'


const testPlayer = {
    name: "Little young noob",
    reincarnate: false,
    age: 20,
    progress: {
      attractiveness: 10,
      mental: 10,
      education: 10,
      wealth: 10,
      social: 10,
    }
  }


export default function PanelProgress() {

  const { activePlayer, setActivePlayer } = useContext(PlayerContext);

     // TO DO: put function here that prompts user to go back to player selection and choose player before starting (just a modal)
    useEffect(() => {
      setActivePlayer(testPlayer)
    }, [])


  return (

    <div className='game__progress__panel'>

      <p>{activePlayer.age} years</p>

      {/* note: The Object.entries() function returns an array of arrays, with each inner array containing a key-value pair [key, value] */}
      {Object.entries(activePlayer.progress).map(([key, value]) => (
        <ProgressBar key={key} label={key} value={value} />
      ))}
    </div>
  )
}
