import { Configuration, OpenAIApi } from "openai";
import React, { useContext, useState } from "react";
import texts from "../assets/gameData/texts.json";
import { LanguageContext } from "../contexts/LanguageContext";


function ImageGenerator() {

  console.log('texts :>> ', texts);

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false); // loader state

  const { language } = useContext(LanguageContext);

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setIsLoading(true); // set loading to true when generating image
    const res = await openai.createImage({
      prompt: prompt,
      n: 2,
      size: "512x512",
    });

    setResult(res.data.data[0].url);
    setIsLoading(false); // set loading to false when image generation is complete
  };

  return (
    <div className="page container">
      <h2>{texts.generator.header[language]}</h2>
      <textarea
        className="app-input"
        placeholder="Tippe ein, was die künstliche Intelligenz Dall-e für ein Bild erstellen soll"
        onChange={(e) => setPrompt(e.target.value)}
        rows="10"
        cols="10"
      />
      <div>
        <button className="btn--primary" onClick={generateImage}>{texts.generator.button[language]}</button>
        <button className="btn--secondary" onClick={generateImage}>{texts.generator.button[language]}</button>
        <button className="btn--action" onClick={generateImage}>3</button>

      </div>
      

      {isLoading ? (
        <p>{texts.generator.loader[language]}</p>
      ) : result ? (
        <img className="result-image" src={result} alt="result" />
      ) : null}
    </div>
  );
}

export default ImageGenerator;
