import React from 'react'
import ReactDom from 'react-dom';

import "../../styles/modal.css"


export default function Modal({ open, children, close }) {

    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">{children}
                    <button onClick={close}>close</button>
                </div>
            </div>

        </>, document.getElementById("modal-root")
    )
}
