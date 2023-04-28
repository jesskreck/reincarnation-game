import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

function ImageGenerator() {

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false); // loader state

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setIsLoading(true); // set loading to true when generating image
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    setResult(res.data.data[0].url);
    setIsLoading(false); // set loading to false when image generation is complete
  };

  return (
    <div className="page container">
      <h2>Generate an Image using Open AI API</h2>
      <textarea
        className="app-input"
        placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
        onChange={(e) => setPrompt(e.target.value)}
        rows="10"
        cols="40"
      />
      <button onClick={generateImage}>Generate an Image</button>

      {isLoading ? (
        <p>Generating image...</p>
      ) : result ? (
        <img className="result-image" src={result} alt="result" />
      ) : null}
    </div>
  );
}

export default ImageGenerator;
