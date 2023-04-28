import React, { useContext, useState } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";

import texts from "../../assets/gameData/texts.json";
import { LanguageContext } from "../../contexts/LanguageContext";

import switchLabeltext from "../../utils/switchLabeltext";
import { db } from "../../fbConfig";

import { addDoc, collection } from "firebase/firestore";
import { AuthContext } from "../../contexts/AuthContext";

export const ModalReincarnation = ({ setShowModal }) => {
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
    `${texts.reincarnation.q6[language]}`,
    `${texts.reincarnation.q7[language]}`,
    `${texts.reincarnation.q8[language]}`,
    `${texts.reincarnation.q9[language]}`,
    `${texts.reincarnation.q10[language]}`,
  ];

  const [scores, setScores] = useState({
    attractiveness: 0,
    mental: 0,
    education: 0,
    wealth: 0,
    social: 0,
  });
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer) => {
    const questionIndex = currentQuestion;
    //NOTE what happes if categories.lenght changed?  You might write a bit more of logic to make sure there is no errors in situations in which you are dividing by 0 , or similar.
    const categoryIndex = questionIndex % categories.length;
    const currentCategory = categories[categoryIndex];

    const updatedScores = { ...scores };
    const isFirstQuestionInCategory = questionIndex % 2 === 0;

    if (isFirstQuestionInCategory) {
      updatedScores[currentCategory] = answer;
    } else {
      updatedScores[currentCategory] = Math.round(
        ((updatedScores[currentCategory] + answer) / 2) * 10
      );
    }
    setScores(updatedScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion => currentQuestion + 1);
    } else {
      setShowResults(true);
      setActivePlayer({ ...activePlayer, progress: scores });
    }
  };

  const getQuestion = (index) => {
    return questions[index];
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
          <div className="container_reincarnation--btn">
            {
              //NOTE it seems like currentQuestion === 3 ? 11 : 11 is always gonna be 11, if that is the case, why not using directly 11?
            }
            {console.log(Array(currentQuestion === 3 ? 11 : 11))}
            {console.log([...Array(currentQuestion === 3 ? 11 : 11).keys()])}
            {
              //NOTE check the console.logs , looks like what you create is an array of numbers. And then you access the keys, but since it is just an array of numbers, the numbers are the keys. If you just want to loop that many times, why not writting a simple loop?
            }
            {[...Array(currentQuestion === 3 ? 11 : 11).keys()]
              .slice(1)
              .map((num) => (
                <button
                  key={num}
                  onClick={() => handleAnswer(num)}
                  className="btn--reincarnation-scores"
                >
                  {num}
                </button>
              ))}
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
          <button onClick={handleFinish} className="btn--reincarnation-finish">
            {texts.reincarnation.finish[language]}
          </button>
        </div>
      )}
    </div>
  );
};
