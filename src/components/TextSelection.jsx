import { React, useState } from "react"



const TextSelection = ({ prompt, progressChange }) => {

    console.log('progressChange :>> ', progressChange);

    const [Mental, setMental] = useState(0)

    return (
        <div className='textselection__container'>
            <p>{prompt}</p>
        </div>
    )
}

export default TextSelection