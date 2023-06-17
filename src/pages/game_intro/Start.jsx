import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";
import texts from "../../assets/gameData/texts.json";

export default function Start() {

  const { language } = useContext(LanguageContext)

  return (
    <div className="start-grid">
      <div className="start-flex">
        {/* <h1>{texts.home.header[language]}</h1>
        <Link to="/Players/" className="btn--primary">
          {texts.home.button[language]}
        </Link> */}

        <h1>Reincarnation Game</h1>
        <Link to="/awake/" className="btn--primary">
          Start Game
        </Link>
      </div>
    </div>
  );
}
