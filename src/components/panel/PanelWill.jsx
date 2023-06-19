import React, { useContext } from 'react'
import { LevelContext } from '../../contexts/LevelContext'

export const PanelWill = () => {

    const { willChain } = useContext(LevelContext)


    return (
        <div className="game-container-will">
            <h3>Will</h3>
            <div className="game-willchain">
                <div className="game-counter">{willChain[0]}</div>
                <div className="game-counter">{willChain[1]}</div>
                <div className="game-counter">{willChain[2]}</div>
            </div>
        </div>
    )
}
