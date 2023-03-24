import React from 'react'

const ProgressBar = ({ label, value } ) => {


    const progressbarStyle = {
        width: `${value}%`,
        backgroundColor: 'blue',
        borderRadius: '99px',
        textAlign: 'center',
        transition: 'all .6s cubic-bezier(0.4, 0.0, 0.2, 1)'
    }
    

    return (
        <div className='progress__container'>
            <p className='progress__label'>{label}</p>
            <div style={progressbarStyle}>
                <span className='progress__value'>
                    {`${value}
                        ${label === "age" ? "" : "%"}
                    `}
                </span>
            </div>
        </div>
    )
}

export default ProgressBar