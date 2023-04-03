import React, { useContext, useEffect, useState } from 'react';
import { ActionButton } from '../child/ActionButton';
import { PlayerContext } from '../../contexts/PlayerContext';
import { getRandomActions } from '../../utils/getRandomActions';



export default function PanelActions() {
    
    const { activePlayer, setActivePlayer } = useContext(PlayerContext);
    const [actionsOnScreen, setActionsOnScreen] = useState([]);


    // update actionsOnScreen everytime activePlayerState changes
    useEffect(() => {
      setActionsOnScreen(getRandomActions())
    }, [activePlayer])
    


    return (

        <div className="game__selection__panel">
            {actionsOnScreen.map((action, index) => (
                <ActionButton key={index} action={action} />
            ))}
        </div>

    )
}