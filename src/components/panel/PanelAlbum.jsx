import React, { useContext } from 'react'
import { LevelContext } from '../../contexts/LevelContext'
import { Photo } from '../dashboard/children/Photo'

export const PanelAlbum = () => {

    const {album} = useContext(LevelContext)

  return (
      <div className='game-container-album'>
          <h3>Album</h3>
              {album && album.map((photo, index) => (
                    <Photo key={index} url={photo.url} action={photo.action} />
                ))}
      </div>
  )
}
