import React, { useContext } from 'react'
import texts from "../../assets/gameData/texts.json"
import { LanguageContext } from '../../contexts/LanguageContext'


export const PlayerCard = ({ player, togglePlayer }) => {

    const { language } = useContext(LanguageContext)

    return (

        // clicking the label will trigger the radio button's input event. div would not work!
        // for the css sibling selector to work, input must be before the  
        <label className="playercard-holder">
            <input type="radio" name="player" onChange={togglePlayer} className="visually-hidden" />
            
            <div className="playercard">
                <h3>{player.name}</h3>
                <p>
                    {texts.playercard.age[language]}: {player.age}
                </p>
                <p>
                    {player.prevReincar} {texts.playercard.prevrein[language]}
                </p>
                {/* notification if reincarnation needed */}
                {player.reincarnate && (
                    <p className='warning'>{texts.playercard.rein[language]}</p>
                )}
            </div>

           
        </label>
    )
}
