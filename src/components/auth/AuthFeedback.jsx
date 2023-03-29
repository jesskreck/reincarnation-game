import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../fbConfig'


export const AuthFeedback = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        })

        // once component unmounts we need to remove the listener (because if component is not there we don't care if user is signed in or not) 
        return () => {
            listen();
        }
    }, []);

    const handleSignOut = () => {
        // signOut() is coming from firebase/auth
        signOut(auth)
            .then(() => {
                console.log("sign out successful");
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            {authUser
                ?
                <div>
                    <p>{`Signed In as ${authUser.email}`}</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
                :
                <p>Signed Out</p>
            }

        </div>
    )
}
