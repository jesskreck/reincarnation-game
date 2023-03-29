import React from 'react'

export const Photo = ({ url, action }) => {

    return (
        <div className="album-photo">
            <img src={url} alt={action} />
            <p>{action}</p>
        </div>)
}
