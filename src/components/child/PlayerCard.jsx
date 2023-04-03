import React from 'react'

export const PlayerCard = ({ player, togglePlayer }) => {


    return (

        <div>
            <h3>{player.name}</h3>
            <p>Age: {player.age}</p>
            {player.reincarnate && <p style={{ color: "blue" }}>Reincarnating!</p>}
            <input type="radio" name="player" onChange={togglePlayer} />
        </div>
    )
}
