import { Configuration, OpenAIApi } from "openai";

import { useState } from "react";


function ImageGenerator() {
  const [prompt, setPrompt] = useState("");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [result, setResult] = useState("");

  console.log(process.env);
  console.log(process.env.REACT_APP_API_KEY);


  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    setResult(res.data.data[0].url);
    console.log('setResult :>> ', setResult);
    console.log('result :>> ', result);
  };

  return (
    <div className="container">
      <>
        <h2>Generate an Image using Open AI API</h2>

        <textarea
          className="app-input"
          placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
          onChange={(e) => setPrompt(e.target.value)}
          rows="10"
          cols="40"
        />
        <button onClick={generateImage}>Generate an Image</button>

        {result.length > 0
          ? (
          <img className="result-image" src={result} alt="result" />
          )
          : (
          <></>
          )
        }
      </>
    </div>
  );
}

export default ImageGenerator;
