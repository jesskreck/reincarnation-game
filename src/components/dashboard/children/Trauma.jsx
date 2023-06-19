import React, { useContext } from 'react'
import { PlayerContext } from '../../../contexts/PlayerContext'

export default function Trauma({ label, value }) {

    const { activePlayer } = useContext(PlayerContext)

    const trauma = activePlayer.trauma;

    // const symbol = Object.entries(activePlayer.manifests)
    //     .filter(([key, value]) => value === true)
    //     .map((key) => key);


    const activeManifests = () => {
        const symbol = [];
        if (trauma.attractiveness) {
            symbol.push("🤳")
        } else {
            symbol.push("/")
        };
        if (trauma.mental) {
            symbol.push("🤪")
        } else {
            symbol.push("/")
        };
        if (trauma.education) {
            symbol.push("🎓")
        } else {
            symbol.push("/")
        };
        if (trauma.wealth) {
            symbol.push("💸")
        } else {
            symbol.push("/")
        };
        if (trauma.social) {
            symbol.push("💛")
        } else {
            symbol.push("/")
        };
        return symbol
    }

    return (
            <>
                {activeManifests().map((key) => (
                    <div className='game-counter'>{key}</div>
                ))}
            </>
    )
}
