import React, { useContext, useState } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import { ModalReincarnation } from "./ModalReincarnation";
import { getRandomSoulName } from "../../utils/getRandomSoulName";
import "../../utils/getRandomSoulName"


export const ModalRescueSoul = ({setShowModal}) => {

    const [checkSubmit, setCheckSubmit] = useState(false);

    const { customPlayers, setCustomPlayers, activePlayer, setActivePlayer } = useContext(PlayerContext);

    const [newPlayer, setNewPlayer] = useState({
        name: getRandomSoulName(),
        default: false,
        sex: "",
        reincarnate: false,
        prevReincar: 0,
        age: 20,
        progress: {},
    });


    const handleNameChange = (e) => {
        setNewPlayer({ ...newPlayer, name: e.target.value });
    };

    const handleSexChange = (e) => {
        setNewPlayer({ ...newPlayer, sex: e.target.value })
    }

    const handleSubmit = () => {
        setCustomPlayers([...customPlayers, newPlayer]);
        setCheckSubmit(true);
        setActivePlayer(newPlayer);
        
    }


    return (
        <>
            {!checkSubmit
                
                ? <div className="modal--child">
                    <div className="modal--content">
                        <p>
                            Hey there, Reincarnation Rookie! You're about to save a lost soul and
                            toss it into a ridiculous new life. Pick a name, gender, and answer some
                            nutty questions about its past. Your answers will mess with their mental
                            stability, hotness, cash flow, smarts, and friendships. So, loosen up
                            and prepare for some side-splitting cosmic chaos!
                        </p>
                    </div>

                    <label>
                        <h4>Give that poor soul a name:</h4>
                        <input type="text" value={newPlayer.name} onChange={handleNameChange}/>
                    </label>

                    <div>
                        <h4>Into what sex will it reincarnate?</h4>
                        <label>Man<input type="radio" name="sex" value="man" onChange={handleSexChange} /></label>
                        <label>Woman<input type="radio" name="sex" value="woman" onChange={handleSexChange} /></label>
                    </div>

                    <button onClick={handleSubmit} className="btn--reincarnation-scores">
                        Answer questions about its past
                    </button>
                </div>

                : <ModalReincarnation setShowModal={setShowModal} />
            }

        </>
    );
};
