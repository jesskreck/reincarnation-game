import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import texts from "../assets/gameData/texts.json";

export default function Homepage() {

  const { language } = useContext(LanguageContext)

  return (
    <div className="home--bg">
      <div className="home--intro">
        <h1>{texts.home.header[language]}</h1>
        {
          //TODO it is recommended NOT to use capital letters in urls , unless there is a specific reason to it (like pointing to a file's name)}
        }
        <Link to="/Players/" className="btn--primary">
          {texts.home.button[language]}
        </Link>
      </div>
    </div>
  );
}
