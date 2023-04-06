import React, { useContext } from "react";
import { Photo } from "./children/Photo";
import { PlayerContext } from "../../contexts/PlayerContext";

export default function PanelAlbum() {

    const { album } = useContext(PlayerContext)

    
    return (
        <>
            <div className="game__album__panel">
                {/* learning: mapping over an array with object allows to get two parameters (value, index). 
                The value in this case refers to the object(photo) inside the array(album). 
                You can change the name of the parameter as you want to. Then destructure it when passing the props to the component! */}
                {album && album.map((photo, index) => (
                    <Photo key={index} url={photo.url} action={photo.action} />
                ))}
            </div>
        </>
    );
};
