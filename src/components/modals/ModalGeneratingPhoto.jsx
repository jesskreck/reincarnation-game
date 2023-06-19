import React, { useContext, useEffect, useState } from 'react'
import { PlayerContext } from '../../contexts/PlayerContext';
import { Configuration, OpenAIApi } from "openai";
import "../../styles/photobooth.css"

import texts from "../../assets/gameData/texts.json"
import { LanguageContext } from '../../contexts/LanguageContext';
import { Progressbar } from '../dashboard/children/Progressbar';
import { ProgressInfo } from '../dashboard/children/ProgressInfo';
import Spinner from '../dashboard/children/Spinner.jsx';

export default function ModalGeneratingPhoto ({ action, setShowModal }) {

    const { activePlayer } = useContext(PlayerContext)
    const { album, setAlbum } = useContext(PlayerContext);
    const {language} = useContext(LanguageContext)

    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState(null);

    // OPENAI FETCH 
    useEffect(() => {
        const newPrompt = `sharp photo of ${activePlayer.age} year old ${activePlayer.sex} who likes to ${action.text}, shot on Polaroid BigShot`;

        // setPrompt might be redunant - check if I use the newPrompt from within the state somewhere else 
        setPrompt(newPrompt);

        generateImage(newPrompt);
    }, [action]) // but I only want it to refresh when this one refreshes??

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const generateImage = async (imagePrompt) => {
        const res = await openai.createImage({
            prompt: imagePrompt,
            n: 1,
            size: "256x256",
        });
        setResult(res.data.data[0].url);
    };


    // saving progress of clicked action item into new array to map over it in modal, displaying progress change 
    const actionProgress = {};
    for (let prop in action.progress) {
        actionProgress[prop] = action.progress[prop]
    }

    // saving photo into album
    const handleAddToAlbum = () => {
        const newPhoto = {
            url: result,
            action: `${activePlayer.age} year old me as I ${action.text} `,
        };

        setAlbum([...album, newPhoto]);
        setShowModal(false);
    };


    return (
        <>
            <div className="photobooth__container">
                <div className="photobooth__header">
                    <h2>{texts.photobooth.header[language]}</h2>
                    <p>{texts.photobooth.paragraph1[language]} {activePlayer.age} {texts.photobooth.paragraph2[language]} {action.text}.</p>

                </div>
                <div className="photobooth__polaroid">
                    {result ? <img src={result} alt={prompt} /> : <Spinner/> }
                </div>
                <div className="photobooth__summary">
                    <h3>{texts.photobooth.result[language]}</h3>
                    <div>
                        {Object.entries(actionProgress).map(([key, value]) => (
                            <ProgressInfo key={key} label={key} value={value} />
                        ))}
                    </div>
                </div>
                <button onClick={handleAddToAlbum} className='btn--reincarnation-finish'>{texts.photobooth.button[language]}</button>
            </div>
        </>
    )
}
