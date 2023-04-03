import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import { LoginButton } from '../components/child/LoginButton';
import { PlayerCard } from '../components/child/PlayerCard';
import Modal from '../components/modals/Modal';
import { ModalReincarnation } from '../components/modals/ModalReincarnation';
import { AuthContext } from '../contexts/AuthContext';
import { PlayerContext } from '../contexts/PlayerContext';
import { ModalRescueSoul } from '../components/modals/ModalRescueSoul';




export default function PlayerSelection() {

  const [showModal, setShowModal] = useState(false);
  const [childModal, setChildModal] = useState(null);
  const { defaultPlayers, activePlayer, setActivePlayer } = useContext(PlayerContext);
  const { user } = useContext(AuthContext);



  const togglePlayer = (player) => {
    setActivePlayer(player);
  };


  const handleTakeSoul = () => {
    setShowModal(true);
    setChildModal(<ModalReincarnation setShowModal={setShowModal} />)
   }

  const handleRescueSoul = () => {
    setShowModal(true);
    setChildModal(<ModalRescueSoul setShowModal={setShowModal} />)
  }

  return (
    <>
      <div>
        <h2>Which soul's consciousness would you like to embody? Das Bewusstsein welcher Seele willst du verköpern?</h2>

        
        {/* PLAYER CARDS */}
        <div className="players_container">
          {defaultPlayers.map((player, index) => (
            <PlayerCard
              key={index}
              player={player}
              togglePlayer={() => togglePlayer(player)}
            />
          ))}
        </div>

        
        {/* BUTTON SELECT PLAYER */}
        <div>
          {activePlayer
            ?
            activePlayer.reincarnate
              ? <button onClick={handleTakeSoul}>Take over Soul / Seele übernehmen</button>
              : <Link to="/Dashboard"><button>Take over Soul / Seele übernehmen</button></Link>
            : <button disabled>Take over soul / Seele übernehmen</button>
          }
        </div>


        {/* BUTTON CREATE NEW PLAYER */}
        <div>
          {user
            ? <button onClick={handleRescueSoul}>Rescue a lost soul</button>
            : <LoginButton label={"Login to rescue lost souls"} />
          }
        </div>

      </div>

      
      {/* MODAL */}
      <Modal open={showModal} close={() => setShowModal(false)}>
        {childModal}
      </Modal>

    </>
  );
}
