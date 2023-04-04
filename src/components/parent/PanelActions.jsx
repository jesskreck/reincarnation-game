import React, { useContext, useEffect, useState } from 'react';
import { ActionButton } from '../child/ActionButton';
import { PlayerContext } from '../../contexts/PlayerContext';
import actionDataEN from "../../assets/gameData/actionDataEN.json"
import actionDataDE from "../../assets/gameData/actionDataDE.json";

import { LanguageContext } from '../../contexts/LanguageContext';


export default function PanelActions() {

    const { activePlayer, setActivePlayer } = useContext(PlayerContext);
    const [actionsOnScreen, setActionsOnScreen] = useState([]);
    const { language } = useContext(LanguageContext)


    // choose language json for 4 random action based on context  
    const getRandomActions = () => {
        let actionData = []

        if (language === "en") {
            actionData = actionDataEN

        } else if (language === "de") {
            actionData = actionDataDE
        }

        // old algorithm
        const shuffledActions = actionData.sort(
        () => Math.random() - 0.5
        );

        // new algorithm for picking random items from array
        // const shuffledActions = actionData.sort(() => {
        //     const now = new Date();
        //     const seed = now.getSeconds() + now.getMilliseconds() / 1000;
        //     return Math.sin(seed) * 10000 - Math.floor(Math.sin(seed) * 10000);
        // });


        return shuffledActions.slice(0, 4);
    }


    // update actionsOnScreen everytime activePlayerState or language changes
    useEffect(() => {
        setActionsOnScreen(getRandomActions())
    }, [activePlayer, language])



    return (

        <div className="game__selection__panel">
            {actionsOnScreen.map((action, index) => (
                <ActionButton key={index} action={action} />
            ))}
        </div>

    )
}
