import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fbConfig';

export const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const signUp = (e) => {
        // prevents setting input to default when page is reloaded for a small second
        e.preventDefault();
        // signIn function is coming from firebase! check imports in header
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
            });
    };

return (
    <div>
        <form onSubmit={signUp}>
            <h1>Create an Account</h1>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Sign Up</button>

        </form>
    </div>
)
}
