import React from 'react'

const ProgressBar = ({ name, progress } ) => {


    const progressStyle = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: 'blue'
    }
    

    return (
        <div className='progress__container'>
            <h3 className='progress__title'>{name}</h3>
            <div style={progressStyle}>
                <span className='progress__label'>{`${progress}%`}</span>
            </div>
        </div>
    )
}

export default ProgressBar