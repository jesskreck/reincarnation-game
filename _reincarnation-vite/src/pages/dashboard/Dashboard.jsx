import { React, useState, useEffect, useMemo } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { statusAtom } from '../../recoil/atoms/levelAtoms'
import { clickedActionAtom } from '../../recoil/atoms/levelAtoms'
import { attracAtom } from '../../recoil/atoms/levelAtoms'
import { mentalAtom } from '../../recoil/atoms/levelAtoms'
import { educAtom } from '../../recoil/atoms/levelAtoms'
import { wealthAtom } from '../../recoil/atoms/levelAtoms'
import { socialAtom } from '../../recoil/atoms/levelAtoms'
import { unhealedTraumasAtom } from '../../recoil/atoms/levelAtoms'
import { willchainAtom } from '../../recoil/atoms/levelAtoms'
import { healedAtom } from '../../recoil/atoms/levelAtoms'
import { albumAtom } from '../../recoil/atoms/levelAtoms'
import { ageAtom } from '../../recoil/atoms/playerAtoms'
import { reincarnationAtom } from '../../recoil/atoms/playerAtoms'
import { progressAtom } from '../../recoil/atoms/playerAtoms'

import { wellbeingSelector } from '../../recoil/selectors/levelSelectors'

import actionDataEN from "../../assets/gameData/actionDataEN.json"
import actionDataDE from "../../assets/gameData/actionDataDE.json"
import switchCategoryLogo from '../../utils/switchCategoryLogo'
import { AIphoto } from '../../components/AIphoto/AIphoto'
import { Typewriter } from 'react-simple-typewriter'

const examplePlayer = {
    name: 'Eve Nebular',
    avatar: "URL goes here",
    age: 20,
    sex: "woman",
    reincarnation: 1,
    progress: {
        attrac: 60,
        mental: 70,
        educ: 20,
        wealth: 20,
        social: 10,
    },
    traumas: {
        attrac: true,
        mental: false,
        educ: false,
        wealth: true,
        social: false,
    }
}




export default function Dashboard() {

    //recoil states
    const [status, setStatus] = useRecoilState(statusAtom)
    const [clickedAction, setClickedAction] = useRecoilState(clickedActionAtom)
    const [attrac, setAttrac] = useRecoilState(attracAtom)
    const [mental, setMental] = useRecoilState(mentalAtom)
    const [educ, setEduc] = useRecoilState(educAtom)
    const [wealth, setWealth] = useRecoilState(wealthAtom)
    const [social, setSocial] = useRecoilState(socialAtom)
    const [unhealedTraumas, setUnhealedTraumas] = useRecoilState(unhealedTraumasAtom)
    const [willchain, setWillchain] = useRecoilState(willchainAtom)
    const [healed, setHealed] = useRecoilState(healedAtom)
    const [album, setAlbum] = useRecoilState(albumAtom)
    const [age, setAge] = useRecoilState(ageAtom)
    const [reincarnation, setReincarnation] = useRecoilState(reincarnationAtom)
    const [progress, setProgress] = useRecoilState(progressAtom)

    //recoil selectors
    const wellbeing = useRecoilValue(wellbeingSelector)


    //local states
    const [activePlayer, setActivePlayer] = useState(examplePlayer)
    const [remainingActions, setRemainingActions] = useState([])
    const [actionsOnScreen, setActionsOnScreen] = useState([])

    //SECTION ACTION FUNCTIONS
    const shuffleActionData = (language) => {
        let actionData = [];
        if (language === "en") {
            actionData = actionDataEN;
        } else if (language === "de") {
            actionData = actionDataDE;
        }
        const shuffled = actionData.sort(() => Math.random() - 0.5);
        setRemainingActions(shuffled);
        setActionsOnScreen(shuffled.slice(0, 4));
    }

    const getActionsToScreen = () => {
        console.log("getActionsToScreen start");
        const nextActions = remainingActions.slice(0, 3);
        setRemainingActions(remainingActions.slice(3));
        setActionsOnScreen(nextActions);
    }

    const handleActionButton = (action) => {
        console.log(action);
        addToWillchain(action.category);
        setStatus("memory");
        setClickedAction(action);

        // addToHealing(action);
    }





    const addToWillchain = (category) => {
        if (willchain.length < 3) {
            const emoji = switchCategoryLogo(category);
            setWillchain((prev) =>
                prev[prev.length - 1] === emoji
                    ? [...prev, emoji]
                    : [emoji]
            )
        }
    };

    console.log('willchain :>> ', willchain);

    //SECTION PROGRESS FUNCTION
    const getWidth = (value) => {
        return { width: `${value}%` }
    }

    const getUnhealedTraumas = useMemo(() => {
        const traumas = [
            activePlayer.traumas.attrac && "attrac",
            activePlayer.traumas.mental && "mental",
            activePlayer.traumas.educ && "educ",
            activePlayer.traumas.wealth && "wealth",
            activePlayer.traumas.social && "social",
        ].filter(Boolean);

        return traumas;
    }, [activePlayer.traumas]);




    //SECTION WILL FUNCTIONS


    //SECTION HEALING FUNCTIONS

    //SECTION WELLBEING FUNCTIONS


    useEffect(() => {
        console.log("fire1 start");
        shuffleActionData("en")
        setUnhealedTraumas(getUnhealedTraumas)
        setAge(activePlayer.age)
        setReincarnation(activePlayer.reincarnation)
        setAttrac(activePlayer.progress.attrac)
        setMental(activePlayer.progress.mental)
        setEduc(activePlayer.progress.educ)
        setWealth(activePlayer.progress.wealth)
        setSocial(activePlayer.progress.social)
        console.log("fire1 end");
    }, [])


    // useEffect(() => {
    //     console.log("fire2 start");
    //     setAttrac(activePlayer.progress.attrac)
    //     setMental(activePlayer.progress.mental)
    //     setEduc(activePlayer.progress.educ)
    //     setWealth(activePlayer.progress.wealth)
    //     setSocial(activePlayer.progress.social)
    //     getActionsToScreen()
    //     console.log("fire2 end");
    //     console.log('actionsOnScreen :>> ', actionsOnScreen);
    // }, [activePlayer.progress])

    return (

        <div className='game-bg-texture'>
            <div className='grid-game'>

                {/*SECTION INSTRUCTIONS */}
                {/* <div className="game-container-instructor instructor-bg">
                </div>

                <div className="game-container-text">
                    <p>
                            <Typewriter words={["Hier kommt später der Erklärtext rein"]} cursor={true} />
                    </p>

                </div> */}


                {/*SECTION ACTION */}
                {status === "action" &&
                    <div className='game-container-actions game-bg'>

                        <h2>10-year Soul Takeover Plan</h2>
                        <div className="box">
                            {actionsOnScreen.map((action, index) => (
                                <div
                                    className={`btn-action ${unhealedTraumas.includes(action.category) && action.healing ? 'healing' : ''}`}
                                    key={index}
                                    onClick={() => handleActionButton(action)}
                                >
                                    <div className='center'>
                                        {switchCategoryLogo(action.category)}
                                    </div>
                                    <p>{action.text}</p>
                                    <div>
                                        {Object.entries(action.progress)
                                            .filter(([key, value]) => value !== 0)
                                            .map(([key, value]) => (
                                                <div className="center" key={key}>
                                                    <span>{switchCategoryLogo(key)}</span>
                                                    <span className={`game-progress-value ${value > 0 ? 'positive' : 'negative'} `}>{value}</span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
                {status === "memory" &&
                    <AIphoto action={clickedAction} player={activePlayer} traumas={unhealedTraumas} />
                }




                {/*SECTION PROGRESS*/}
                <div className="game-container-progress" >
                    <div className="">
                        <div>
                            <h2>{activePlayer.name}</h2>
                            <p>Age: {activePlayer.age} years</p>
                            <p>Reincarnation: {activePlayer.reincarnation}</p>
                        </div>
                        <h5>Attractiveness</h5>
                        <div className="progressbar-outline">
                            <div className="progressbar-fill" style={getWidth(attrac)}>
                                {`${attrac}%`}
                            </div>
                        </div>
                        <h5>Mental Stability</h5>
                        <div className="progressbar-outline">
                            <div className="progressbar-fill" style={getWidth(mental)}>
                                {`${mental}%`}
                            </div>
                        </div>
                        <h5>Educational Level</h5>
                        <div className="progressbar-outline">
                            <div className="progressbar-fill" style={getWidth(educ)}>
                                {`${educ}%`}
                            </div>
                        </div>
                        <h5>Wealth</h5>
                        <div className="progressbar-outline">
                            <div className="progressbar-fill" style={getWidth(wealth)}>
                                {`${wealth}%`}
                            </div>
                        </div>
                        <h5>Social Relationships</h5>
                        <div className="progressbar-outline">
                            <div className="progressbar-fill" style={getWidth(social)}>
                                {`${social}%`}
                            </div>
                        </div>
                    </div>

                    {/* FIXME - change classname */}
                    <div className='flex space' >
                        {
                            unhealedTraumas.map((trauma, index) => (
                                <div className="game-counter" key={index}>
                                    {switchCategoryLogo(trauma)}
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/*SECTION WILL */}
                <div className="game-container-will">
                    <h3>Will Power</h3>
                    {willchain}
                </div>



                {/*SECTION HEALING */}
                {/* FIXME - change classname */}
                <div className="game-container-manifest">
                    <h3>Healing Love</h3>
                    {healed ? <p>💖</p> : <p>💔</p>}
                </div>



                {/*SECTION WELLBEING */}
                <div className="game-container-wellbeing">
                    <h3>Wellbeing</h3>
                    <div className="progressbar-outline">
                        <div className="progressbar-fill" style={getWidth(wellbeing)}>
                            {`${wellbeing}%`}
                        </div>
                    </div>
                </div>

                {/*SECTION ALBUM */}
                <div className="game-container-album">
                    <h3>Album</h3>
                    {album && album.map((photo, index) => (
                        <img src={photo} key={index} alt="album" />
                    ))}
                </div>

            </div>
        </div>

    )
}
