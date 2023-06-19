import React, { useContext } from 'react'
import { LevelContext } from '../../contexts/LevelContext'

export const PanelTrauma = () => {

    const { manifestBroken } = useContext(LevelContext)
    
    console.log(manifestBroken);

  return (
      <div className='game-container-manifest'>
          <h3>Trauma</h3>
          {manifestBroken
              ? <p>Trauma broken!</p>
              : <p>No trauma broken yet</p>
          
          }
      </div>
  )
}
