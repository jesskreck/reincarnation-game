import React from 'react'
import ProgressBar from './ProgressBar'

function PanelProgress({ player }) {
    return (
      
    <div className='game__progress__panel'>

        {/* note: The Object.entries() function returns an array of arrays, with each inner array containing a key-value pair [key, value] */}
        {Object.entries(player).map(([key, value]) => (
          <ProgressBar key={key} label={key} value={value} />
        ))}
      </div>  )
}

export default PanelProgress