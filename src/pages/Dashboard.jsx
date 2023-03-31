import React, { useContext, useState } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'
import PanelActions from '../components/parent/PanelActions'
import PanelProgress from '../components/parent/PanelProgress'
import { PanelAlbum } from '../components/parent/PanelAlbum'

export const Dashboard = () => {

  const { activePlayer, setActivePlayer } = useContext(PlayerContext)

  const [album, setAlbum] = useState([])

  const [selectedAction, setSelectedAction] = useState([])



  return (

    <div className='page game__container'>
      <div className="game__header">
        <h2>Time to play</h2>
      </div>
      <PanelActions />

      <PanelProgress />

      <PanelAlbum
        album={album}
      />
    </div>

  )
}
