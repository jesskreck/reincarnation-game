import { createContext, useState } from "react";
import defaultPlayersData from "../assets/gameData/defaultPlayers";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [defaultPlayers, setDefaultPlayers] = useState(defaultPlayersData);
  const [customPlayers, setCustomPlayers] = useState([]);
  const [activePlayer, setActivePlayer] = useState(null);
  const [album, setAlbum] = useState([]);

  const data = {
    defaultPlayers,
    setDefaultPlayers,

    customPlayers,
    setCustomPlayers,

    activePlayer,
    setActivePlayer,

    album,
    setAlbum,
  };
  //NOTE it is good that you are trying to optimize the way to export your variables. Take a look to the use of useReducer(): https://react.dev/reference/react/useReducer
  //NOTE be also aware that a change in any of the variables, will trigger a rerender of the context, since you are modifying data.So it is not that bad to export them one by one
  console.log("activePlayer :>> ", activePlayer);
  console.log("customPlayers :>> ", customPlayers);
  console.log("defaultPlayers :>> ", defaultPlayers);

  return (
    <PlayerContext.Provider value={data}>{children}</PlayerContext.Provider>
  );
};
