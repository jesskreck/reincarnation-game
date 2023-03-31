import { createContext, useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
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