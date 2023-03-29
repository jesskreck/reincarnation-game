import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fbConfig';

export const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const signIn = (e) => {
        // prevents setting input to default when page is reloaded for a small second
        e.preventDefault();
        // signIn function is coming from firebase! check imports in header
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
            });
    };

return (
    <div>
        <form onSubmit={signIn}>
            <h1>Log in to your account</h1>
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
            <button type="submit">Log In</button>

        </form>
    </div>
)
}
