import React from 'react'

export default function ModalContentLogin({ clickClose }) {
    return (
            <div className="modal">
                <div>ModalContentLogin</div>
                <button onClick={clickClose}>Close</button>
            </div>
    )
}
