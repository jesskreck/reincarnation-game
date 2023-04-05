import React, { useContext } from 'react'
import texts from "../../assets/gameData/texts.json"
import { LanguageContext } from '../../contexts/LanguageContext'

import switchLabeltext from '../../utils/switchLabeltext'


const ProgressBar = ({ label, value } ) => {

    const { language } = useContext(LanguageContext)
    
    const adaptWidthStyle = {
        width: `${value}%`,
        textAlign: 'center',
        transition: 'all .6s cubic-bezier(0.4, 0.0, 0.2, 1)'
    }
    

    return (
        <div className='progress__container'>
            <h6 className='progress__label'>{switchLabeltext(label, language, texts)}</h6>
            <div className='progress__bar' >
                <div className="progress__fill" style={adaptWidthStyle}>
                    <span>
                        {`${value}%`}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar

