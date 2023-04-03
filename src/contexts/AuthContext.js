import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { app, auth } from "../fbConfig";


export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {


  const [user, setUser] = useState(null);

  // const signIn = (email, password) => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log(userCredential);
  //       setUser(userCredential.user);
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     });
  // };

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user)
    } catch (error) {
      console.log('error :>> ', error);
    }
  }

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
      });
  };



    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set the user state when the authentication state changes
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe(); // Clean up the listener when the component unmounts
    };
  }, []);





  const data = {
    user,
    setUser,
    signIn,
    signUp
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}





// to do: Get the currently signed-in user