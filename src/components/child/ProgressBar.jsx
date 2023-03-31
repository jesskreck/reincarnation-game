import React from 'react'

const ProgressBar = ({ label, value } ) => {


    const progressbarStyle = {
        width: `${value}%`,
        backgroundColor: 'blue',
        borderRadius: '99px',
        textAlign: 'center',
        transition: 'all .6s cubic-bezier(0.4, 0.0, 0.2, 1)'
    }
    
    const LabelText = (label) => {
        switch (label) {
            case "attractiveness":
                return "🤳 Attractiveness";
            case "mental":
                return "🤪 Mental Stability";
            case "education":
                return "🎓 Educational Level";
            case "wealth":
                return "💸 Wealth";
            case "social":
                return "💛 Social Relationships";
            default:
                return "";
        }
    }

    return (
        <div className='progress__container'>
            <p className='progress__label'>{LabelText(label)}</p>
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