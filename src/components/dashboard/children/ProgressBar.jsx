import React, { useContext } from 'react'
import { LanguageContext } from '../../../contexts/LanguageContext'
import switchLabeltext from '../../../utils/switchLabeltext'
import texts from "../../../assets/gameData/texts.json"

export const ProgressBar = ({ label, value } ) => {

    const { language } = useContext(LanguageContext)
    
    const adaptWidthStyle = {
        width: `${value}%`,
        textAlign: 'center',
        transition: 'all .6s cubic-bezier(0.4, 0.0, 0.2, 1)',
    }
    
    const progressBarClassName =
        `progress-fill
        ${value < 20 ?
            'progress-fill--alert'
            : value > 80 ?
                'progress-fill--success'
                : ''}`;


    return (
        <div className='container'>
            <h6 className='progress-label'>{switchLabeltext(label, language, texts)}</h6>
            <div className='progress-bar' >
                <div className={progressBarClassName} style={adaptWidthStyle}>
                    <span>
                        {`${value}%`}
                    </span>
                </div>
            </div>
        </div>
    )
}


