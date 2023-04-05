import { AuthContext } from '../contexts/AuthContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ModalReincarnation } from '../components/modals/ModalReincarnation';
import { ModalRescueSoul } from '../components/modals/ModalRescueSoul';
import { PlayerCard } from '../components/child/PlayerCard';
import { PlayerContext } from '../contexts/PlayerContext';
import Modal from '../components/modals/Modal';
import React, { useContext, useEffect, useState } from 'react';
import texts from "../assets/gameData/texts.json";
import { db } from "../fbConfig";
import { collection, getDocs, query } from "firebase/firestore"



export default function PlayerSelection() {

  const { user } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);
  const { defaultPlayers, customPlayers, activePlayer, setActivePlayer } = useContext(PlayerContext);

  const [showModal, setShowModal] = useState(false);
  const [childModal, setChildModal] = useState(null);
  const [firestoreCustomPlayers, setFirestoreCustomPlayers] = useState([]);



  // radio button input on playercard sets activePlayer
  const togglePlayer = (player) => {
    setActivePlayer(player);
  };


  // MODAL select player with reincarnation true
  const handleTakeSoul = () => {
    setShowModal(true);
    setChildModal(<ModalReincarnation setShowModal={setShowModal} />)
  }

  // MODAL create new player
  const handleRescueSoul = () => {
    setShowModal(true);
    setChildModal(<ModalRescueSoul setShowModal={setShowModal} />)
  }

  // get customPlayers array from firestore
  useEffect(() => {
    const fetchCustomPlayers = async () => {
      if (user) {
        try {
          const playerRef = collection(db, "users", user.uid, "customPlayers");
          const q = query(playerRef);
          const querySnapshot = await getDocs(q);
          const players = [];
          querySnapshot.forEach((doc) => {
            players.push({ ...doc.data(), id: doc.id });
          });
          setFirestoreCustomPlayers(players);
        } catch (error) {
          console.log("Error fetching custom players:", error);
        }
      }
    };
    fetchCustomPlayers();
  }, [user]);



  return (
    <>
      <div className="container">
        <h1>{texts.playerselection.header[language]}</h1>

        <div className="players_container">

          {/* DEFAULT PLAYER CARDS */}
          {defaultPlayers.map((player, index) => (
            <PlayerCard
              key={index}
              player={player}
              togglePlayer={() => togglePlayer(player)}
            />
          ))}


          {/* CUSTOM PLAYER CARDS */}
          {user && firestoreCustomPlayers.length === 0
            ? <div className="playercard--note">
              <p>{texts.playerselection.moreplayers[language]}</p>
            </div>
            : user
              ? firestoreCustomPlayers.map((player, index) => (
                <PlayerCard
                  key={index}
                  player={player}
                  togglePlayer={() => togglePlayer(player)}
                />
              ))
              : customPlayers.map((player, index) => (
                <PlayerCard
                  key={index}
                  player={player}
                  togglePlayer={() => togglePlayer(player)}
                />
              ))
          }

        </div>


        {/* BUTTON CONTAINER: SELECT PLAYER */}
        <div className='btn_container'>
          {activePlayer
            ?
            activePlayer.reincarnate
              // scenario 1: player selected, needs reincarnation
              ? <button className='btn--primary' onClick={handleTakeSoul}>{texts.playerselection.button1[language]}</button>
              // scenario 2: player selected, no reincarnation
              : <Link to="/Actions"><button className='btn--primary'>{texts.playerselection.button1[language]}</button></Link>
            // scenario 3: no player selected
            : <><p className='prompt'>{texts.playerselection.prompt1[language]}</p>
              <button className='btn--primary' disabled>{texts.playerselection.button1[language]}</button></>
          }
        </div>

        <hr />

        {/* BUTTON CONTAINER: CREATE NEW PLAYER */}
        <div className='btn_container'>

          {user
            // scenario 1: user logged in, feature activated
            ? <button className='btn--primary' onClick={handleRescueSoul}>{texts.playerselection.button2[language]}</button>
            // scenario 2: no user, feature deactivated + prompt
            : <><p className='prompt'>{texts.playerselection.prompt2[language]}</p>
              <button className='btn--primary' disabled>{texts.playerselection.button2[language]}</button></>
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
