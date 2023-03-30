import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

import { LoginButton } from '../components/child/LoginButton';
import { PlayerCard } from '../components/child/PlayerCard';
import Modal from '../components/modals/Modal';
import { ModalReincarnation } from '../components/modals/ModalReincarnation';

const players = [
  {
    name: "Little young noob",
    reincarnate: false,
    age: 20,
    attractiveness: 10,
    mental: 10,
    education: 10,
    wealth: 10,
    social: 10,
  },
  {
    name: "Old bastard",
    reincarnate: true,
    age: 80,
    attractiveness: 50,
    mental: 50,
    education: 50,
    wealth: 50,
    social: 50,
  }
];

export default function PlayerSelection() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const handleSelection = (player) => {
    setSelectedPlayer(player);
  };

  const handleSelectPlayerClick = () => {
    if (selectedPlayer.reincarnate) {
      console.log("reincarnate");
      setShowModal(true);
    } else {
      console.log("play");
      return <Navigate to="/Game" />
    }
  };

  return (
    <>
      <div>
        <h2>Select a player:</h2>

        <div className="players_container">
          {players.map((player, index) => (
            <PlayerCard
              key={index}
              player={player}
              selected={selectedPlayer === player}
              handleSelection={() => handleSelection(player)}
            />
          ))}
        </div>

        {selectedPlayer && selectedPlayer.reincarnate
          // reincarnate = true opens modal
          ? <button onClick={() => setShowModal(true)}>Select Player</button>
          // reincarnate = false sends user to Game
          : <Link to="/Game"><button>Select Player</button></Link>}

        <LoginButton label={"Login to create own player"} />
      </div>

      <Modal open={showModal} close={() => setShowModal(false)}>
       <ModalReincarnation/>
      </Modal>
    </>
  );
}
