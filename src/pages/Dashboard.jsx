import React, { useContext, useState } from 'react'
import PanelActions from '../components/parent/PanelActions'
import PanelProgress from '../components/parent/PanelProgress'
import { PanelAlbum } from '../components/parent/PanelAlbum'
import Modal from '../components/modals/Modal'
import { Link } from 'react-router-dom'
import { PlayerContext } from '../contexts/PlayerContext'


export const Dashboard = () => {

  const { activePlayer } = useContext(PlayerContext)
  const [showModal, setShowModal] = useState(true)


  return (

    <>
      {activePlayer ? (
      <div className='page game__container'>
        <div className="game__header">
          <h2>Time to play</h2>
        </div>
        <PanelActions />
        <PanelProgress />
        <PanelAlbum />
      </div>
      ) : (
        <Modal open={showModal} close={() => setShowModal(false)}>
          You need to select a player before you can start playing.
          <Link to="/PlayerSelection"><button>Go to player selection</button></Link>
        </Modal>
      )}


      

    </>

  )
}
