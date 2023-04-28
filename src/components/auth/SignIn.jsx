import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext';


export const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const {signIn} = useContext(AuthContext)

return (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            signIn(email, password)
        }}>
            <h2>Log in to your account</h2>
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
