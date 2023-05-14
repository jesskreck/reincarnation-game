import React, { useContext, useState } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";

import texts from "../../assets/gameData/texts.json";
import { LanguageContext } from "../../contexts/LanguageContext";

import switchLabeltext from "../../utils/switchLabeltext";
import { db } from "../../fbConfig";

import { addDoc, collection } from "firebase/firestore";
import { AuthContext } from "../../contexts/AuthContext";

export const ModalReincarnation = ({ setShowModal, setChildModal }) => {
  const { language } = useContext(LanguageContext);
  const { user } = useContext(AuthContext);

  const {
    activePlayer,
    setActivePlayer,
    defaultPlayers,
    setDefaultPlayers,
    customPlayers,
    setCustomPlayers,
  } = useContext(PlayerContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const categories = [
    "attractiveness",
    "mental",
    "education",
    "wealth",
    "social",
  ];

  const questions = [
    `${texts.reincarnation.q1[language]}`,
    `${texts.reincarnation.q2[language]}`,
    `${texts.reincarnation.q3[language]}`,
    `${texts.reincarnation.q4[language]}`,
    `${texts.reincarnation.q5[language]}`,
  ];

  const [scores, setScores] = useState({
    attractiveness: 0,
    mental: 0,
    education: 0,
    wealth: 0,
    social: 0,
  });

  const [showResults, setShowResults] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);


  const getQuestion = (index) => {
    return questions[index];
  };


  const updateScores = (category) => {
    const updatedScores = { ...scores };
    updatedScores[category] = sliderValue;
    setScores(updatedScores);
  };

  const handleAnswer = () => {
    const currentCategory = categories[currentQuestion];
    updateScores(currentCategory);
    setSliderValue(50);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      setActivePlayer({ ...activePlayer, progress: scores });
    }
  };


  const savePlayerOnFirestore = async (player) => {
    try {
      const playerRef = collection(db, "users", user.uid, "customPlayers");
      await addDoc(playerRef, player);
      console.log("player saved successsful on uid", user.uid);
    } catch (error) {
      console.log("error saving player", error);
    }
  };


  // to do: outsource! its also used in gameOver component
  const handleFinish = () => {
    const updatedPlayer = {
      ...activePlayer,
      reincarnate: false,
      age: 20,
      prevReincar: activePlayer.prevReincar + 1,
    };
    setActivePlayer(updatedPlayer);
    //NOTE it looks like the reason for the list of custom players not being uodated right after finishing reincarnation is that you are updateing a state and in the following line trying to use that updated value. The new state won't apply until next render. Check the order of that.
    if (activePlayer.default) {
      const playerIndex = defaultPlayers.findIndex(
        (player) => player.name === activePlayer.name
      );
      const updatedPlayers = [...defaultPlayers];
      updatedPlayers.splice(playerIndex, 1, updatedPlayer);
      setDefaultPlayers(updatedPlayers);
    } else {
      const playerIndex = customPlayers.findIndex(
        (player) => player.name === activePlayer.name
      );
      const updatedPlayers = [...customPlayers];
      updatedPlayers.splice(playerIndex, 1, updatedPlayer);
      setCustomPlayers(updatedPlayers);
      savePlayerOnFirestore(updatedPlayer);
    }
    setShowModal(false);
  };

  return (
    <div className="modal--child">
      <h4>{texts.reincarnation.header[language]}</h4>
      <p>{texts.reincarnation.subheader[language]}</p>

      {!showResults ? (
        <div className="container_reincarnation">
          <h2>{getQuestion(currentQuestion)}</h2>
          <div className="container_reincarnation--slider">
            <input
              type="range"
              min="1"
              max="100"
              value={sliderValue}
              className="slider"
              id="reincarnation-slider"
              onChange={(e) => setSliderValue(e.target.value)}
            />
            <button onClick={handleAnswer} className="btn--modal">Submit</button>
          </div>
        </div>
      ) : (
        <div>
          <h3>{texts.reincarnation.scores[language]}</h3>
          {categories.map((category) => (
            <p key={category}>
              {switchLabeltext(category, language, texts)}:{" "}
              {Math.min(scores[category], 100)}/100
            </p>
          ))}
          <button onClick={handleFinish} className="btn--modal">
            {texts.reincarnation.finish[language]}
          </button>
        </div>
      )}
    </div>
  );
};
