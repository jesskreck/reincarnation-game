import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../fbConfig";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = async () => {
    // signOut() is coming from firebase/auth
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set the user state when the authentication state changes
      } else {
        setUser(null);
      }
    });

    //NOTE very good practise to clean up our effects. Well done.
    return () => {
      unsubscribe(); // Clean up the listener when the component unmounts
    };
  }, []);

  const data = {
    user,
    setUser,
    signIn,
    signUp,
    handleSignOut
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
