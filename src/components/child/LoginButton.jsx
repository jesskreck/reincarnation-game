import React, { useState } from 'react'
import { AuthFeedback } from "../auth/AuthFeedback";
import { SignIn } from "../auth/SignIn";
import { SignUp } from "../auth/SignUp";
import Modal from "../modals/Modal";


export const LoginButton = ({ label }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button onClick={() => setShowModal(true)}>{label}</button>
            <Modal open={showModal} close={() => setShowModal(false)}>
                <SignIn />
                <SignUp />
                <AuthFeedback />
            </Modal>
        </div>
    )
}
