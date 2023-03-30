import React, { useState } from 'react';

const q1 = "During your life, how many people did you charm with your irresistible looks? (0-10)";
const q2 = "How many past lives' worth of therapy did you need? (0-10)";
const q3 = "How many times were you considered a wise sage in your past lives? (0-10)";
const q4 = "How many connections did you make in the Spirit World Social Club? (0-100)";
const q5 = "In how many lives were you filthy rich? (0-10)";
const q6 = "As a mythical creature, what was your attractiveness level? (0-10)";
const q7 = "How many lives did you spend meditating on a mountaintop? (0-10)";
const q8 = "How many ancient civilizations' languages did you master? (0-10)";
const q9 = "How many legendary parties did you attend across all your lives? (0-10)";
const q10 = "How many treasure troves did you accumulate throughout your lives? (0-10)";

const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

const categories = ['Attractiveness', 'Mental Health', 'Educational Level', 'Social Relationships', 'Wealth'];

export const ModalReincarnation = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({
        Attractiveness: 0,
        MentalHealth: 0,
        EducationalLevel: 0,
        SocialRelationships: 0,
        Wealth: 0
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
        }

    };

    const getQuestion = (index) => {
        return questions[index];
    }

    return (
        <div className="App">
            <h1>Reincarnation Survey</h1>
            {!showResults ? (
                <div>
                    <p>{getQuestion(currentQuestion)}</p>
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
            ) : (
                <div>
                    <h2>Your scores are:</h2>
                    {categories.map((category) => (
                        <p key={category}>
                            {category}: {Math.min(scores[category], 100)}/100
                        </p>
                    ))}
                </div>
            )}
        </div>
    )
}
