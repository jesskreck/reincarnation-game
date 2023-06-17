import React from 'react'
import ReactDom from 'react-dom';
import { Typewriter } from 'react-simple-typewriter';


export default function Storybox({ open, children, close, name }) {

    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className="storybox">
                <div className="storybox-flex">
                    <div className="storybox-photo">
                        {name}
                    </div>
                    <div className="storybox-content">

                        <Typewriter words={[children]} cursor={true}/>

                    </div>

                    <button className='btn--secondary' onClick={close}>Close</button>
                </div>

            </div>

        </>, document.getElementById("modal-root")
    )
}
