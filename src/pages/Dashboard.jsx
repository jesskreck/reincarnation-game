import { Link } from "react-router-dom";
import { PanelAlbum } from "../components/parent/PanelAlbum";
import { PlayerContext } from "../contexts/PlayerContext";
import Modal from "../components/modals/Modal";
import PanelActions from "../components/parent/PanelActions";
import PanelProgress from "../components/parent/PanelProgress";
import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import texts from "../assets/gameData/texts.json";



export const Dashboard = () => {

  const { activePlayer } = useContext(PlayerContext);
  const { language } = useContext(LanguageContext);

  const [showModal, setShowModal] = useState(true);


  return (
    <div className="container">

      {activePlayer
        ? (
          <div className="page game__container">
            <div className="game__header">
              <h2>{texts.dashboard.header[language]}</h2>
            </div>
            <PanelActions />
            <PanelProgress />
            <PanelAlbum />
          </div>
        )

        : (
          <Modal open={showModal} close={() => setShowModal(false)}>
            {texts.dashboard.prompt[language]}
            <Link to="/PlayerSelection">
              <button>{texts.dashboard.button[language]}</button>
            </Link>
          </Modal>
        )}
      
    </div>
  );
};
