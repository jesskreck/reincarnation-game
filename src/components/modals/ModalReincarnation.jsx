import React, { useContext, useState } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';

import texts from "../../assets/gameData/texts.json"
import { LanguageContext } from '../../contexts/LanguageContext';








export const ModalReincarnation = ({ setShowModal }) => {


    const { language } = useContext(LanguageContext);

    const { activePlayer, setActivePlayer, defaultPlayers, setDefaultPlayers, customPlayers, setCustomPlayers } = useContext(PlayerContext)

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const categories = [`${texts.dashboard.attractiveness[language]}`, `${texts.dashboard.mental[language]}`, `${texts.dashboard.education[language]}`, `${texts.dashboard.social[language]}`, `${texts.dashboard.wealth[language]}`];

    
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
        social: 0,
        wealth: 0
    });
    const [showResults, setShowResults] = useState(false);


    const handleAnswer = (answer) => {
        const questionIndex = currentQuestion;
        const categoryIndex = questionIndex % categories.length;
        const currentCategory = categories[categoryIndex];

        const updatedScores = { ...scores };
        const isFirstQuestionInCategory = questionIndex % 2 === 0;

        if (isFirstQuestionInCategory) {
            updatedScores[currentCategory] = answer;
        } else {
            updatedScores[currentCategory] = Math.round((updatedScores[currentCategory] + answer) / 2 * 10);
        }
        setScores(updatedScores);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
            setActivePlayer({ ...activePlayer, progress: scores })
        }
    };

    const getQuestion = (index) => {
        return questions[index];
    }


    const handleFinish = () => {
        const updatedPlayer = {
            ...activePlayer,
            reincarnate: false,
            prevReincar: activePlayer.prevReincar + 1
        };
        console.log('activePlayer.prevReincar :>> ', activePlayer.prevReincar);
        setActivePlayer(updatedPlayer);
        if (activePlayer.default) {
            const playerIndex = defaultPlayers.findIndex(player => player.name === activePlayer.name);
            const updatedPlayers = [...defaultPlayers];
            updatedPlayers.splice(playerIndex, 1, updatedPlayer);
            setDefaultPlayers(updatedPlayers);
        } else {
            const playerIndex = customPlayers.findIndex(player => player.name === activePlayer.name);
            const updatedPlayers = [...customPlayers];
            updatedPlayers.splice(playerIndex, 1, updatedPlayer);
            setCustomPlayers(updatedPlayers);
        }
        setShowModal(false);
    }

    return (
        <div className="App">
            {!showResults
                ? (
                    <div>
                        <h2>{getQuestion(currentQuestion)}</h2>
                        <div>
                            {[...Array(currentQuestion === 3 ? 11 : 11).keys()]
                                .slice(1)
                                .map((num) => (
                                    <button key={num} onClick={() => handleAnswer(num)}>
                                        {num}
                                    </button>
                                ))}
                        </div>
                    </div>
                )

                : (
                    <div>
                        <h2>{texts.reincarnation.scores[language]}</h2>
                        {categories.map((category) => (
                            <p key={category}>
                                {category}: {Math.min(scores[category], 100)}/100
                            </p>
                        ))}
                        <button onClick={handleFinish}>{texts.reincarnation.finish[language]}</button>
                    </div>
                )}

        </div>
    )
}
