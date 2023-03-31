import React from 'react'

export const PlayerCard = ({ player, handleSelection }) => {


    return (

        <div>
            <h3>{player.name}</h3>
            <p>Age: {player.age}</p>
            {player.reincarnate && <p style={{ color: "blue" }}>Reincarnation happening!</p>}
            <input type="radio" name="player" onChange={handleSelection} />
        </div>
    )
}
