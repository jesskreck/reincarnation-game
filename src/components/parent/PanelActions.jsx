import React from 'react';
import ActionButton from '../child/ActionButton';
import { handleActionClick } from '../../utils/handleActionClick';



export default function PanelActions({ actions, player, setPlayer, setActions, getRandomActions, setShowPhotoBooth, selectedAction, setSelectedAction }) {


    // define onClickHandler here to have more control over the props to send
    const onClickHandler = (action) => {
        handleActionClick(action, player, setPlayer, setActions, getRandomActions, setShowPhotoBooth, selectedAction, setSelectedAction)
    }

    return (

        <div className="game__selection__panel">
            {actions.map((action, index) => (
                <ActionButton key={index} action={action} onClickHandler={onClickHandler}/>
            ))}
        </div>

    )
}