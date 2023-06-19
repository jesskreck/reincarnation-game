import React, { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'
import texts from "../../assets/gameData/texts.json"
import { LevelContext } from '../../contexts/LevelContext'
import calculateWellbeing from '../../utils/calculateWellbeing'

export const PanelWellBeing = () => {
    
    const { progress } = useContext(LevelContext)
    
    const wellbeing = calculateWellbeing(progress)
    
    const adaptWidthStyle = {
        width: `${wellbeing}%`,
        textAlign: 'center',
        transition: 'all .6s cubic-bezier(0.4, 0.0, 0.2, 1)'
    }
    

    return (
        <div className='game-container-wellbeing'>
            <h3>Wellbeing</h3>
            <div className='progressbar-outline' >
                <div className="progressbar-fill" style={adaptWidthStyle}>
                    <span>
                        {`${wellbeing}%`}
                    </span>
                </div>
            </div>
        </div>
    )
}


