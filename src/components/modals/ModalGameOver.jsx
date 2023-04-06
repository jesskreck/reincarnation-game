import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import texts from "../../assets/gameData/texts.json";
import { PlayerContext } from "../../contexts/PlayerContext";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../fbConfig";
import { AuthContext } from "../../contexts/AuthContext";

export default function ModalGameOver({ setShowModal } ) {
    const { language } = useContext(LanguageContext);
    const { activePlayer, setActivePlayer, defaultPlayers, setDefaultPlayers, customPlayers, setCustomPlayers } = useContext(PlayerContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const savePlayerOnFirestore = async (player) => {
        try {
            const playerRef = collection(db, "users", user.uid, "customPlayers");
            await addDoc(playerRef, player);
            console.log("player saved successsful on uid", user.uid);
        } catch (error) {
            console.log("error saving player", error);
        }
    }

    const handleFinish = () => {
        const updatedPlayer = {
            ...activePlayer,
            reincarnate: true,
            age: 20,
            prevReincar: activePlayer.prevReincar + 1
        };
        setActivePlayer(updatedPlayer);
        if (activePlayer.default) {
            const playerIndex = defaultPlayers.findIndex(player => player.name === activePlayer.name);
            const updatedPlayers = [...defaultPlayers];
            updatedPlayers.splice(playerIndex, 1, updatedPlayer);
            setDefaultPlayers(updatedPlayers);
        } else {
            const playerIndex = customPlayers.findIndex(player => player.name === activePlayer.name);
            const updatedPlayers = [...customPlayers];
            updatedPlayers.splice(playerIndex, 1, updatedPlayer);
            setCustomPlayers(updatedPlayers);
            savePlayerOnFirestore(updatedPlayer)
        }
        setShowModal(false);
        navigate("/Players");
    }

    return (
        <div>
            <h1>Game Over</h1>
            <p>
                {texts.gameover.text1[language]} {activePlayer.age}{" "}
                {texts.gameover.text2[language]}.
            </p>
                <button onClick={handleFinish}>{texts.dashboard.button[language]}</button>
        </div>
    );
}
