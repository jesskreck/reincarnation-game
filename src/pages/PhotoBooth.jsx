import { Configuration, OpenAIApi } from "openai";

import { React, useEffect, useState } from "react";

import "../styles/photobooth.css"



export default function PhotoBooth({ player, selectedAction, setShowPhotoBooth, album, setAlbum }) {

    // everything regarding the fetch....

    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState(null);

    useEffect(() => {
        const newPrompt = `Polaroid of ${player.age} year old woman who likes to ${selectedAction.text}`;

        // setPrompt might be redunant - check if I use the newPrompt from within the state somewhere else 
        setPrompt(newPrompt);

        generateImage(newPrompt);
    }, [selectedAction]) // but I only want it to refresh when this one refreshes??


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
    const addToAlbum = () => {
        const newPhoto = {
            url: result,
            action: `${player.age} year old me as I ${selectedAction.text} `,
        };

        setAlbum([...album, newPhoto]);
        console.log('album :>> ', album);
    };

    // closing the photo booth
    const handleClosePhotoBooth = () => {
        setShowPhotoBooth(false)
    }


    return (
        <>
            <div className="photobooth__header">
                <h2>Photo Booth</h2>
                <p>Look at you! A memory of when you used to be {player.age} years old and liked to {selectedAction.text}.</p>
                <button
                    onClick={ () => {handleClosePhotoBooth(); addToAlbum()} }
                    >Add to memories</button>
            </div>
            <div className="photobooth__polaroid">{
                result && <img src={result} alt={prompt} />}
            </div>
            <div className="photobooth__summary">
                <h3>This phase brought you...</h3>
                <div>
                    {/* mapping over all entries in selectedAction to show effects on progressbars */}
                    {Object.entries(selectedAction).map(([key, value], index) => (
                        <p key={index}>
                            {key}: {value}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}
