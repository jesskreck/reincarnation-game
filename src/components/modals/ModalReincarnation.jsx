import React, { useContext, useState } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';

const q1 = "During your life, how many people did you charm with your irresistible looks?";
const q2 = "How many past lives' worth of therapy did you need?";
const q3 = "How many times were you considered a wise sage in your past lives?";
const q4 = "How many connections did you make in the Spirit World Social Club?";
const q5 = "In how many lives were you filthy rich?";
const q6 = "As a mythical creature, what was your attractiveness level?";
const q7 = "How many lives did you spend meditating on a mountaintop?";
const q8 = "How many ancient civilizations' languages did you master?";
const q9 = "How many legendary parties did you attend across all your lives?";
const q10 = "How many treasure troves did you accumulate throughout your lives?";

const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

const categories = ['attractiveness', 'mental', 'education', 'social', 'wealth'];

export const ModalReincarnation = ({setShowModal}) => {

    const { activePlayer, setActivePlayer, defaultPlayers, setDefaultPlayers, customPlayers, setCustomPlayers } = useContext(PlayerContext)

    const [currentQuestion, setCurrentQuestion] = useState(0);

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
        const scalingFactor = categoryIndex === 3 ? 10 : 1; // Scale the answer of the 4th question (index 3)

        if (isFirstQuestionInCategory) {
            updatedScores[currentCategory] = (answer * scalingFactor);
        } else {
            updatedScores[currentCategory] = Math.round(((updatedScores[currentCategory] + (answer * scalingFactor)) / 2) * 10);
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
        const updatedPlayer = { ...activePlayer, reincarnate: false };
        setActivePlayer(updatedPlayer); 
        if (activePlayer.default) {
            const playerIndex = defaultPlayers.findIndex(player => player.name === activePlayer.name);
            const updatedPlayers = [...defaultPlayers];
            updatedPlayers[playerIndex] = activePlayer;
            setDefaultPlayers(updatedPlayers);
        } else {
            const playerIndex = customPlayers.findIndex(player => player.name === activePlayer.name);
            const updatedPlayers = [...customPlayers];
            updatedPlayers[playerIndex] = activePlayer;
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
                        <h2>Your scores are:</h2>
                        {categories.map((category) => (
                            <p key={category}>
                                {category}: {Math.min(scores[category], 100)}/100
                            </p>
                        ))}
                        <button onClick={handleFinish}>Finish Reincarnation</button>
                    </div>
                )}

        </div>
    )
}
