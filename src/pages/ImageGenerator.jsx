import { Configuration, OpenAIApi } from "openai";
//NOTE openai dependency is not inside your list of dependencies. If that was on purpose please explain it in a readme file for other developers.

import { useState } from "react";

function ImageGenerator() {
  //NOTE since the operation of generating the image takes time, would be nice to have a loader that informs the user about what is going on.

  const [prompt, setPrompt] = useState("");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [result, setResult] = useState("");

  const generateImage = async () => {
    //NOTE if you hide your keys , then better not show them in the console , rigt? 😜
    console.log(
      "process.env.REACT_APP_API_KEY_3 :>> ",
      process.env.REACT_APP_API_KEY_3
    );
    console.log(
      "process.env.REACT_APP_API_KEY :>> ",
      process.env.REACT_APP_API_KEY
    );

    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    setResult(res.data.data[0].url);
    console.log("setResult :>> ", setResult);
    console.log("result :>> ", result);
    console.log(
      "process.env.REACT_APP_API_KEY_3 :>> ",
      process.env.REACT_APP_API_KEY_3
    );
  };

  return (
    <div className="page container">
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

        {
          //NOTE if you want nothing to be displayed when result.length === 0 , then maybe use &&. Better than generating an empty html element
        }
        {result.length > 0 ? (
          <img className="result-image" src={result} alt="result" />
        ) : (
          <></>
        )}
      </>
    </div>
  );
}

export default ImageGenerator;
