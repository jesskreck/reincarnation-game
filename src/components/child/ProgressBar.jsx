import React, { useContext } from 'react'
import texts from "../../assets/gameData/texts.json"
import { LanguageContext } from '../../contexts/LanguageContext'

import switchLabeltext from '../../utils/switchLabeltext'

const ProgressBar = ({ label, value } ) => {

    const { language } = useContext(LanguageContext)
    
    const progressbarStyle = {
        width: `${value}%`,
        backgroundColor: 'blue',
        borderRadius: '99px',
        textAlign: 'center',
        transition: 'all .6s cubic-bezier(0.4, 0.0, 0.2, 1)'
    }
    

    return (
        <div className='progress__container'>
            <p className='progress__label'>{switchLabeltext(label, language, texts)}</p>
            <div style={progressbarStyle}>
                <span className='progress__value'>
                    {`${value}%`}
                </span>
            </div>
        </div>
    )
}

export default ProgressBar



// TO DOS
// create separate progressbar for age. Call them individually in PanelProgress.