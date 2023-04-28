import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export const AuthFeedback = () => {

  const { user, handleSignOut } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          <p>{user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};
