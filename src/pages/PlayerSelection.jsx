import '../styles/game.css'
import { AuthContext } from '../contexts/AuthContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ModalReincarnation } from '../components/modals/ModalReincarnation';
import { ModalRescueSoul } from '../components/modals/ModalRescueSoul';
import { PlayerCard } from '../components/child/PlayerCard';
import { PlayerContext } from '../contexts/PlayerContext';
import Modal from '../components/modals/Modal';
import React, { useContext, useState } from 'react'
import texts from "../assets/gameData/texts.json"


export default function PlayerSelection() {

  const { user } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);
  const { defaultPlayers, customPlayers, activePlayer, setActivePlayer } = useContext(PlayerContext);

  const [showModal, setShowModal] = useState(false);
  const [childModal, setChildModal] = useState(null);
  
  
  // radio button input on playercard sets activePlayer
  const togglePlayer = (player) => {
    setActivePlayer(player);
  };


  // select player with reincarnation true
  const handleTakeSoul = () => {
    setShowModal(true);
    setChildModal(<ModalReincarnation setShowModal={setShowModal} />)
  }

  // create new player
  const handleRescueSoul = () => {
    setShowModal(true);
    setChildModal(<ModalRescueSoul setShowModal={setShowModal} />)
  }


  return (
    <>
      <div className="container">
        <h2>{texts.playerselection.header[language]}</h2>


        {/* DEFAULT PLAYER CARDS */}
        <div className="players_container">
          {defaultPlayers.map((player, index) => (
            <PlayerCard
              key={index}
              player={player}
              togglePlayer={() => togglePlayer(player)}
            />
          ))}


          {/* CUSTOM PLAYER CARDS */}
          {customPlayers && customPlayers.length === 0
            ? <div className="playercard">
              <p>{texts.playerselection.moreplayers[language]}</p>
            </div>
            : customPlayers.map((player, index) => (
              <PlayerCard
                key={index}
                player={player}
                togglePlayer={() => togglePlayer(player)}
              />
            ))
          }
        </div>


        {/* BUTTON SELECT PLAYER */}
        <div>
          {activePlayer
            ?
            activePlayer.reincarnate
              ? <button onClick={handleTakeSoul}>{texts.playerselection.button1[language]}</button>
              : <Link to="/Dashboard"><button>{texts.playerselection.button1[language]}</button></Link>
            : <><p>{texts.playerselection.prompt1[language]}</p>
              <button disabled>{texts.playerselection.button1[language]}</button></>
          }
        </div>


        {/* BUTTON CREATE NEW PLAYER */}
        <div>
          <hr />
          {user
            ? <button onClick={handleRescueSoul}>{texts.playerselection.button2[language]}</button>
            : <><p>{texts.playerselection.prompt2[language]}</p>
              <button disabled>{texts.playerselection.button2[language]}</button></>
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
