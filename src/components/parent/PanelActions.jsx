import React, { useContext, useEffect, useState } from 'react';
import { ActionButton } from '../child/ActionButton';
import { PlayerContext } from '../../contexts/PlayerContext';
import { getRandomActions } from '../../utils/getRandomActions';


const testPlayer = {
    name: "Little young noob",
    reincarnate: false,
    age: 20,
    progress: {
      attractiveness: 10,
      mental: 10,
      education: 10,
      wealth: 10,
      social: 10,
    }
  }

export default function PanelActions() {
    
    const { activePlayer, setActivePlayer } = useContext(PlayerContext);
    const [actionsOnScreen, setActionsOnScreen] = useState([]);

    
    // TO DO: put function here that prompts user to go back to player selection and choose player before starting (just a modal)
    useEffect(() => {
      setActivePlayer(testPlayer)
    }, [])
    


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