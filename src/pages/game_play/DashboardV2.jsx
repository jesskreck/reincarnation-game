import texts from "../../assets/gameData/texts.json";
import React, { useContext, useState } from "react";
import PanelProgress from "../../components/panel/PanelProgress";
import PanelAlbum from "../../components/dashboard/PanelAlbum";
import PanelActions from "../../components/panel/PanelActions";
import Modal from "../../components/modals/Modal";
import { PlayerContext } from "../../contexts/PlayerContext";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ProgressBar } from "../../components/dashboard/children/ProgressBar";
import { PanelWellBeing } from "../../components/panel/PanelWellBeing";

export const DashboardV2 = () => {
  const { activePlayer } = useContext(PlayerContext);
  const { language } = useContext(LanguageContext);
  const [wellbeing, setWellbeing] = useState(0);

  const [showModal, setShowModal] = useState(true);

  return (
    <div className="game-bg-texture">
      <p>test</p>
      <div className="grid-game">
        <div className="game-container-actions game-bg">
            <PanelActions />
        </div>

        <div className="game-container-progress">
            <PanelProgress />
        </div>

        <div className="game-container-will">
          <ProgressBar label={"will"} />
        </div>

        <div className="game-container-manifest">
          <ProgressBar label={"manifest"} />
        </div>

        <div className="game-container-wellbeing">
          <p>Wellbeing</p>
          <PanelWellBeing />
        </div>

      </div>

    
    {/* <div className="container game-bg">
      {activePlayer ? (
        <div className="dashboard__grid">
          <div className="dashboard__header">
            <h1>{texts.dashboard.header[language]}</h1>
          </div>
        
          
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
      </div> */}
      </div>
  );
};
