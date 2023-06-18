import React, { useContext } from 'react'
import { PlayerContext } from '../../../contexts/PlayerContext'

export default function Manifest({ label, value }) {

    const { activePlayer } = useContext(PlayerContext)

    // const symbol = Object.entries(activePlayer.manifests)
    //     .filter(([key, value]) => value === true)
    //     .map((key) => key);

    console.log(activePlayer.manifests.attractiveness);

    const activeManifests = () => {
        const symbol = [];
        if (activePlayer.manifests.attractiveness) {
            symbol.push("🤳")
        } else {
            symbol.push("/")
        };
        if (activePlayer.manifests.mental) {
            symbol.push("🤪")
        } else {
            symbol.push("/")
        };
        if (activePlayer.manifests.education) {
            symbol.push("🎓")
        } else {
            symbol.push("/")
        };
        if (activePlayer.manifests.wealth) {
            symbol.push("💸")
        } else {
            symbol.push("/")
        };
        if (activePlayer.manifests.social) {
            symbol.push("💛")
        } else {
            symbol.push("/")
        };
        return symbol
    }

    return (
            <div className='container flex space'>
                {activeManifests().map((key) => (
                    <div className='game-info-counter'>{key}</div>
                ))}
            </div>
    )
}
