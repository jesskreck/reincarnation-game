import React from "react";

export function PlayerInfo({ activePlayer }) {
    return <div className="container-playerinfo">
        <img src="images/garnet.gif" alt="" />
        <h2>{activePlayer.name}</h2>
        <div className='existence'>
            <h3>Existence</h3>
            <div className='counter'><p>#{activePlayer.reincarnation}</p>
            </div>
        </div>
        <div className='age'>
            <h3>Age</h3>
            <div className="counter"><p>{activePlayer.age}</p></div>
        </div>
    </div>;
}
