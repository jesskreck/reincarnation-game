import React, { useContext, useState } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';

import texts from "../../assets/gameData/texts.json"
import { LanguageContext } from '../../contexts/LanguageContext';

import switchLabeltext from '../../utils/switchLabeltext';
import { db } from '../../fbConfig';

import { addDoc, collection } from "firebase/firestore"
import { AuthContext } from '../../contexts/AuthContext';

export const ModalReincarnation = ({ setShowModal }) => {


    const { language } = useContext(LanguageContext);
    const { user } = useContext(AuthContext)
    
    const { activePlayer, setActivePlayer, defaultPlayers, setDefaultPlayers, customPlayers, setCustomPlayers } = useContext(PlayerContext)

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const categories = [
        'attractiveness',
        'mental',
        'education',
        'wealth',
        'social'];

    
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
        social: 0
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


    const savePlayerOnFirestore = async (player) => {
        try {
            const playerRef = collection(db, "users", user.uid, "customPlayers");
            await addDoc(playerRef, player);
            console.log("player saved successsful on uid", user.uid);
        } catch (error) {
            console.log("error saving player", error);
        }
    }

    const handleFinish = () => {
        const updatedPlayer = {
            ...activePlayer,
            reincarnate: false,
            age: 20,
            prevReincar: activePlayer.prevReincar + 1
        };
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
            savePlayerOnFirestore(updatedPlayer)
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
                                {switchLabeltext(category, language, texts)}: {Math.min(scores[category], 100)}/100
                            </p>
                        ))}
                        <button onClick={handleFinish}>{texts.reincarnation.finish[language]}</button>
                    </div>
                )}

        </div>
    )
}
