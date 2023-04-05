import React from 'react'
import ReactDom from 'react-dom';


export default function Modal({ open, children, close }) {

    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">

                    {children}
                    
                </div>
            </div>

        </>, document.getElementById("modal-root")
    )
}
