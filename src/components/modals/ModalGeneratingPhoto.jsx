import React, { useContext, useEffect, useState } from 'react'
import { PlayerContext } from '../../contexts/PlayerContext';
import { Configuration, OpenAIApi } from "openai";
import "../../styles/photobooth.css"
import ProgressBar from '../child/ProgressBar';

export const ModalGeneratingPhoto = ({ action, setShowModal }) => {

    
    const { activePlayer } = useContext(PlayerContext)
    const { album, setAlbum } = useContext(PlayerContext);
    console.log('album :>> ', album);

    // everything regarding the fetch....

    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState(null);


    // saving progress of action into new array to map over it for displaying numbers
    const newProgress = {};
    for (let prop in action) {
        if (typeof action[prop] === "number") {
            newProgress[prop] = action[prop]
        }
    }


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
            size: "512x512",
        });

        setResult(res.data.data[0].url);
        console.log('result :>> ', result);
    };


    // saving photo into album
    const handleAddToAlbum = () => {
        const newPhoto = {
            url: result,
            action: `${activePlayer.age} year old me as I ${action.text} `,
        };

        setAlbum(prevAlbum => [...album, newPhoto]);
        console.log('album :>> ', album);
        setShowModal(false);
    };


    return (
        <>
            <div className="photobooth__container">
                <div className="photobooth__header">
                    <h2>Generating Memory</h2>
                    <p>Look at you! A memory of when you used to be {activePlayer.age} years old and liked to {action.text}.</p>
                    <button onClick={handleAddToAlbum}>Add to album</button>
                </div>
                <div className="photobooth__polaroid">{
                    result && <img src={result} alt={prompt} />}
                </div>
                <div className="photobooth__summary">
                    <h3>This phase brought you...</h3>
                    <div>
                        {/* mapping over all entries in selectedAction to show effects on progressbars */}
                        {Object.entries(newProgress).map(([key, value]) => (
                            <ProgressBar key={key} label={key} value={value} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
