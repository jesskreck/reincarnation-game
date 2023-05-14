import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import texts from "../../assets/gameData/texts.json";
import { ModalReincarnation } from "./ModalReincarnation";

export const ModalReinIntro = ({ setChildModal, setShowModal }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="modal--child">
      <h4>{texts.reincarnation.header[language]}</h4>
      <p>{texts.reincarnation.subheader[language]}</p>
      <button className="btn--modal" onClick={() => setChildModal(<ModalReincarnation setShowModal={setShowModal} setChildModal={setChildModal} />)}>Start</button>
    </div>
  );
};
