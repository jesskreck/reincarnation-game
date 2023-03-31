import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

import { LoginButton } from '../components/child/LoginButton';
import { PlayerCard } from '../components/child/PlayerCard';
import Modal from '../components/modals/Modal';
import { ModalReincarnation } from '../components/modals/ModalReincarnation';
import { AuthContext } from '../contexts/AuthContext';
import { PlayerContext } from '../contexts/PlayerContext';




export default function PlayerSelection() {
  
  const [showModal, setShowModal] = useState(false);

  const { defaultPlayers, activePlayer, setActivePlayer } = useContext(PlayerContext);
  const {user} = useContext(AuthContext)

  const handleSelection = (player) => {
    setActivePlayer(player);
  };

  console.log('activePlayer :>> ', activePlayer);


  return (
    <>
      <div>
        <h2>Select a player:</h2>

        <div className="players_container">
          {defaultPlayers.map((player, index) => (
            <PlayerCard
              key={index}
              player={player}
              handleSelection={() => handleSelection(player)}
            />
          ))}
        </div>

        {activePlayer && activePlayer.reincarnate
          // reincarnate = true opens modal
          ? <button onClick={() => setShowModal(true)}>Select Player</button>
          // reincarnate = false sends user to Game
          : <Link to="/Game"><button>Select Player</button></Link>}

        {user
          ? <button>Create player</button>
          : <LoginButton label={"Login to create own player"} />

        }
        



      </div>





      <Modal open={showModal} close={() => setShowModal(false)}>
       <ModalReincarnation/>
      </Modal>
    </>
  );
}
