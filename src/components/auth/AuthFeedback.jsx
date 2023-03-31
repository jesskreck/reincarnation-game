import React, { useContext, useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../fbConfig'
import { AuthContext } from '../../contexts/AuthContext'



export const AuthFeedback = () => {
    const { user, setUser } = useContext(AuthContext)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null);
            }
        })

        // once component unmounts we need to remove the listener (because if component is not there we don't care if user is signed in or not) 
        return () => {
            listen();
        }
    }, []);

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
                    <p>{`Signed In as ${user.email}`}</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
                :
                <p>Signed Out</p>
            }

        </div>
    )
}
