import React from 'react'

const ProgressBar = ({ name, progress } ) => {


    const progressbarStyle = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: 'blue',
        borderRadius: '99px',
        textAlign: 'center'
    }
    

    return (
        <div className='progress__container'>
            <h3 className='progress__title'>{name}</h3>
            <div style={progressbarStyle}>
                <span className='progress__label'>{`${progress}%`}</span>
            </div>
        </div>
    )
}

export default ProgressBar