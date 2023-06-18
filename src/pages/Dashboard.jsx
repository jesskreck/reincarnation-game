import texts from "../assets/gameData/texts.json";
import React, { useContext, useState } from "react";
import PanelProgress from "../components/panel/PanelProgress";
import PanelAlbum from "../components/dashboard/PanelAlbum";
import PanelActions from "../components/panel/PanelActions";
import Modal from "../components/modals/Modal";
import { PlayerContext } from "../contexts/PlayerContext";
import { Link } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";

export const Dashboard = () => {
  const { activePlayer } = useContext(PlayerContext);
  const { language } = useContext(LanguageContext);

  const [showModal, setShowModal] = useState(true);

  return (
    <div className="container">
      {activePlayer ? (
        <div className="dashboard__grid">
          <div className="dashboard__header">
            <h1>{texts.dashboard.header[language]}</h1>
          </div>
          <PanelActions />
          <PanelProgress />
          <PanelAlbum />
        </div>
      ) : (
        <Modal open={showModal} close={() => setShowModal(false)}>
          {texts.dashboard.prompt[language]}
          {
            //NOTE  if you want a link to look like a button, better style it like that. Specially for accessibility reasons, screen readers need to know what is what. If you prefer to still use a button element, create a handler funciton that navigagtes onclick
          }
          <Link to="/Players">
            <button>{texts.dashboard.button[language]}</button>
          </Link>
        </Modal>
      )}
    </div>
  );
};
