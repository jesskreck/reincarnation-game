import texts from "../assets/gameData/texts.json";
import React, { useContext, useEffect, useState } from "react";
import Modal from "../components/modals/Modal";
import { PlayerContext } from "../contexts/PlayerContext";
import { PlayerCard } from "../components/players/children/PlayerCard";
import { ModalRescueSoul } from "../components/players/ModalRescueSoul";
import { ModalReinIntro } from "../components/players/ModalReinIntro";

import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import { db } from "../fbConfig";
import { collection, getDocs, query } from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContext";

export default function PlayerSelection() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);
  const {
    defaultPlayers,
    customPlayers,
    activePlayer,
    setActivePlayer,
    setAlbum,
  } = useContext(PlayerContext);

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
    setChildModal(<ModalReinIntro setChildModal={setChildModal} setShowModal={setShowModal}/>);
  };

  // MODAL create new player
  const handleRescueSoul = () => {
    setShowModal(true);
    setChildModal(<ModalRescueSoul setShowModal={setShowModal} />);
  };

  // go to dashboard
  const handleGoToActions = () => {
    setAlbum([]);
    navigate("/game");
  };

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
    //NOTE one potential quick (and probably dirty) solution having to refresh to see the new created player in the list is adding customplayers to the dependency array. Test it.
    //NOTE worked like charm
  }, [user, customPlayers]);

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
          {user && firestoreCustomPlayers.length === 0 ? (
            <div className="playercard--note">
              <p>{texts.playerselection.moreplayers[language]}</p>
            </div>
          ) : user ? (
            firestoreCustomPlayers.map((player, index) => (
              <PlayerCard
                key={index}
                player={player}
                togglePlayer={() => togglePlayer(player)}
              />
            ))
          ) : (
            customPlayers.map((player, index) => (
              <PlayerCard
                key={index}
                player={player}
                togglePlayer={() => togglePlayer(player)}
              />
            ))
          )}
        </div>

        {/* BUTTON CONTAINER: SELECT PLAYER */}
        <div className="btn_container">
          {activePlayer ? (
            activePlayer.reincarnate ? (
              // scenario 1: player selected, needs reincarnation
              <button className="btn--primary" onClick={handleTakeSoul}>
                {texts.playerselection.button1[language]}
              </button>
            ) : (
              // scenario 2: player selected, no reincarnation
              <button className="btn--primary" onClick={handleGoToActions}>
                {texts.playerselection.button1[language]}
              </button>
            )
          ) : (
            // scenario 3: no player selected
            <>
              <p className="prompt">
                {texts.playerselection.prompt1[language]}
              </p>
              <button className="btn--primary" disabled>
                {texts.playerselection.button1[language]}
              </button>
            </>
          )}
        </div>

        <hr />

        {/* BUTTON CONTAINER: CREATE NEW PLAYER */}
        <div className="btn_container">
          {user ? (
            // scenario 1: user logged in, feature activated
            <button className="btn--primary" onClick={handleRescueSoul}>
              {texts.playerselection.button2[language]}
            </button>
          ) : (
            // scenario 2: no user, feature deactivated + prompt
            <>
              <p className="prompt">
                {texts.playerselection.prompt2[language]}
              </p>
              <button className="btn--primary" disabled>
                {texts.playerselection.button2[language]}
              </button>
            </>
          )}
        </div>
      </div>

      <Modal open={showModal}>{childModal}</Modal>
    </>
  );
}
