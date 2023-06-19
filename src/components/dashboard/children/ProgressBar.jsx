import React, { useContext } from 'react'
import { LanguageContext } from '../../../contexts/LanguageContext'
import switchLabeltext from '../../../utils/switchLabeltext'
import texts from "../../../assets/gameData/texts.json"

export const Progressbar = ({ label, value } ) => {

    const { language } = useContext(LanguageContext)
    
    const adaptWidthStyle = {
        width: `${value}%`,
        
    }
    
    const progressbarClassName =
        `progressbar-fill${value < 20 ?'--alert' : value > 80 ?'--success' :''}`;


    return (
        <div className='container'>
            <h5>{switchLabeltext(label, language, texts)}</h5>
            <div className='progressbar-outline' >
                <div className={progressbarClassName} style={adaptWidthStyle}>
                        {`${value}%`}
                </div>
            </div>
        </div>
    )
}


