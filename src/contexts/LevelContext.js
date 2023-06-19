import { createContext, useState } from "react";


export const LevelContext = createContext();

export const LevelProvider = ({children}) => {

    const [progress, setProgress] = useState({})
    const [wellbeing, setWellbeing] = useState(0)
    const [traumas, setTraumas] = useState([])
    const [manifestBroken, setManifestBroken] = useState(false)
    const [willChain, setWillChain] = useState(["⚪️", "⚪️", "⚪️"])
    const [album, setAlbum] = useState([])

    const data = {
        progress,
        setProgress,
        wellbeing,
        setWellbeing,
        traumas,
        setTraumas,
        manifestBroken,
        setManifestBroken,
        willChain,
        setWillChain,
        album,
        setAlbum
    }

    return (
        <LevelContext.Provider value={data}>{children}</LevelContext.Provider>  
    )
}