import { Configuration, OpenAIApi } from "openai";

import { React, useState } from "react";


export default function PhotoBooth({ actions, player } ) {

    const [prompt, setPrompt] = useState("");

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const [result, setResult] = useState("");


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
        <>
            <div>PhotoBooth</div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid molestiae corrupti vel, quibusdam natus rem fugit architecto hic! Nemo ipsum, voluptate modi quis explicabo et magni, velit debitis molestiae ipsa dignissimos eligendi, sunt quam eveniet aperiam nam sapiente nihil sed hic illo. Aliquam voluptatum quasi quos tenetur labore doloremque repellendus, debitis laboriosam quo expedita porro minima veritatis distinctio, quam dolorem aut itaque officiis necessitatibus voluptas. Perferendis veniam necessitatibus laudantium a tempore temporibus, voluptas molestiae magnam consequatur natus quasi quam, nulla obcaecati inventore enim! Reprehenderit, excepturi asperiores? Quis maiores ad unde voluptatem ratione dolorum sed. Natus dolor cumque sunt nisi.</p>
        </>
    )
}
