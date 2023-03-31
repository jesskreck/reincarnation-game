import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext';


export const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const {signUp} = useContext(AuthContext)
    
return (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            signUp(email, password);
        }}>
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
