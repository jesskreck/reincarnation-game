import React from "react";
import { Photo } from "../child/Photo";

export const PanelAlbum = ({ album }) => {
    return (
        <div></div>
        // <>
        //     <div className="game__album__panel">
        //         {/* learning: mapping over an array with object allows to get two parameters (value, index). 
        //         The value in this case refers to the object(photo) inside the array(album). 
        //         You can change the name of the parameter as you want to. Then destructure it when passing the props to the component! */}
        //         {album && album.map((photo, index) => (
        //             <Photo key={index} url={photo.url} action={photo.action} />
        //         ))}
        //     </div>
        // </>
    );
};
