import React from 'react'
import PanelActions from '../components/parent/PanelActions'
import PanelProgress from '../components/parent/PanelProgress'
import { PanelAlbum } from '../components/parent/PanelAlbum'

export const Dashboard = () => {

  return (

    <div className='page game__container'>
      <div className="game__header">
        <h2>Time to play</h2>
      </div>
      <PanelActions />

      <PanelProgress />

      <PanelAlbum />
    </div>

  )
}
