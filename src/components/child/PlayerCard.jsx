import React, { useContext } from 'react'
import texts from "../../assets/gameData/texts.json"
import { LanguageContext } from '../../contexts/LanguageContext'


export const PlayerCard = ({ player, togglePlayer }) => {

    const { language } = useContext(LanguageContext)
    
    return (

        <div className="playercard">
            <h3>{player.name}</h3>
            <p>{texts.playercard.age[language]}: {player.age}</p>
            <p>{player.prevReincar} {texts.playercard.prevrein[language]}</p>
            {player.reincarnate && <p style={{ color: "blue" }}>{texts.playercard.rein[language]}</p>}
            <input type="radio" name="player" onChange={togglePlayer} />
        </div>
    )
}
