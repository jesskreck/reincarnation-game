import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const player1 = {
  name: "Shitty Player",
  age: 20,
  attractiveness: 10,
  mental: 10,
  education: 10,
  wealth: 10,
  social: 10,
};

const player2 = {
  name: "Okay Player",
  age: 20,
  attractiveness: 50,
  mental: 50,
  education: 50,
  wealth: 50,
  social: 50,
};

const player3 = {
  name: "Rockin' Player",
  age: 20,
  attractiveness: 100,
  mental: 100,
  education: 100,
  wealth: 100,
  social: 100,
};

export default function PlayerSelection() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div>
      <h2>Select a player:</h2>

      <div>
        <input
          type="radio"
          name="player"
          value="player1"
          id="player1"
          checked={selectedPlayer === player1}
          onChange={() => handlePlayerSelect(player1)}
        />
        <label htmlFor="player1">{player1.name}</label>
      </div>

      <div>
        <input
          type="radio"
          name="player"
          value="player2"
          id="player2"
          checked={selectedPlayer === player2}
          onChange={() => handlePlayerSelect(player2)}
        />
        <label htmlFor="player2">{player2.name}</label>
      </div>

      <div>
        <input
          type="radio"
          name="player"
          value="player3"
          id="player3"
          checked={selectedPlayer === player3}
          onChange={() => handlePlayerSelect(player3)}
        />
        <label htmlFor="player3">{player3.name}</label>
      </div>
      <NavLink to="/Game/Start">
        <button onClick={() => console.log(selectedPlayer)}>Select Player</button>
      </NavLink>
      
    </div>
  );
}
