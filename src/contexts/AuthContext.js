import { createContext, useState } from "react";
import { app } from "../fbConfig";


export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {

  console.log('app :>> ', app);

  const [user, setUser] = useState(null);

  const data = {
    user,
    setUser
  }

  return (
    <AuthContext.Provider value={ data }>
      {children}
    </AuthContext.Provider>
  )
}