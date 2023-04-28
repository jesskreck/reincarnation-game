import { ReactNode, createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, User, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { auth } from "../fbConfig";



//Step2b: Declared the interface of what is sent through the provider.
//the interface for UserCredential is being imported from "firebase/auth" 
interface Data{
  user: User | null,
  setUser: (value: User | null) => void,
  signIn: (email: string, password: string) => void,
  signUp: (email: string, password: string) => void,
  handleSignOut: () => void,
}

type SetUser = (user: User | null) => void;

//for comparison, delete later. You could already tell that it would not work because the functions are not green but white!
// interface Data {
//     user: typeof UserCredential | null,
//     setUser: SetUser | null,
//     signIn: SignIn | null,
//     signUp: SignUp | null,
//     handleSignOut: HandleSignOut | null
// }

//NOTE Step2: Declare the interface for the AuthContext and list everything that needs to be sent through it. Declare separate interfaces if needed.
interface AuthContextType {
  data: Data | null
}


//NOTE Step3: Declare the initialAuth. 
const initialAuth: AuthContextType = {
  data: null
}

//NOTE Step 4: Pass initialAuth as argument into createContext(). Export this as AuthContext.
export const AuthContext = createContext<AuthContextType>(initialAuth);

{//NOTE on why its important to specify the createContextType
  //createContext is a generic function in React, which means it can work with different types of values. When you use createContext without specifying a type (i.e., createContext(initialAuth)), TypeScript will try to infer the type based on the initialAuth value you pass in.
  //In the case of createContext<AuthContextType>(initialAuth), you are explicitly telling TypeScript what type of context you're creating. This is known as type assertion. Here, you're saying that the context will be of type AuthContextType.
  //The difference between the two mainly comes into play when TypeScript can't accurately infer the correct type, or you want to enforce a specific type for better type safety.
  //For instance, if your initialAuth is null, TypeScript can't infer what the actual type should be once the context is populated. In that case, createContext<AuthContextType>(null) is useful to explicitly declare the type of context.
  //If TypeScript can correctly infer the type from initialAuth, both versions will essentially work the same. However, explicitly defining the type can make your code more readable and safe, by making it clear what type of values are expected in the context.
}

//NOTE Step 5: Specify type of children. In this case they are ReactNodes, which is a type we can import from React
//REVIEW How did we know that the children are always ReactNodes?
export const AuthContextProvider = ({ children } : {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        //REVIEW "Type 'User' is missing the following properties from type 'UserCredential': user, operationTypets(2345)" - not true! It is in the type, check auth-public.d.ts
        setUser(userCredential.user);
      }
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

    return () => {
      unsubscribe(); // Clean up the listener when the component unmounts
    };
  }, []);

  // how can I tell the data to be of type Data (from the interface above)
  const data: Data = {
    user,
    setUser,
    signIn,
    signUp,
    handleSignOut
  };

  //NOTE Step1: What am I sending through the provider? Declare interface(s) for it
  return <AuthContext.Provider value={ { data } } >{children}</AuthContext.Provider>;
};
