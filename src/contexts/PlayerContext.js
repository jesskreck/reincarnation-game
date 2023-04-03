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
        setAlbum
    }


    console.log('activePlayer :>> ', activePlayer);
    console.log('customPlayers :>> ', customPlayers);
    console.log('defaultPlayers :>> ', defaultPlayers);


    return (
        <PlayerContext.Provider value={data} >
            {children}
        </PlayerContext.Provider>

    )

}