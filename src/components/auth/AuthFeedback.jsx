import React, { useContext, useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../fbConfig'
import { AuthContext } from '../../contexts/AuthContext'



export const AuthFeedback = () => {
    const { user, setUser } = useContext(AuthContext)

    const handleSignOut = async () => {
        // signOut() is coming from firebase/auth
        try {
            await signOut(auth);
            setUser(null)
        } catch (error) {
            console.log('error :>> ', error);
        }

    }

    return (
        <div>
            {user
                ?
                <div>
                    <p>{user.email}</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
                :
                <p>Signed Out</p>
            }

        </div>
    )
}
