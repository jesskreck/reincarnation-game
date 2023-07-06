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

  console.log("willchain", willchain);


  //recoil selectors
  const wellbeing = useRecoilValue(wellbeingSelector)


  //local states
  const [activePlayer, setActivePlayer] = useState(examplePlayer)
  const [remainingActions, setRemainingActions] = useState([])
  const [actionsOnScreen, setActionsOnScreen] = useState([])
  const [healingOnScreen, setHealingOnScreen] = useState(false)

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
    setTimeout(() => {
      console.log(action);
      addToWillchain(action.category);
      setStatus("memory");
      setClickedAction(action);

      // addToHealing(action);
    }, 750);
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


  //SECTION PROGRESS FUNCTION
  const progressbarClassName = (value) => {
    return `progressbar-fill ${value < 20 ? 'warning' : value > 80 ? 'success' : ''}`;
  }

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
    shuffleActionData("de")
    setUnhealedTraumas(getUnhealedTraumas)
    setAge(activePlayer.age)
    setReincarnation(activePlayer.reincarnation)
    setAttrac(activePlayer.progress.attrac)
    setMental(activePlayer.progress.mental)
    setEduc(activePlayer.progress.educ)
    setWealth(activePlayer.progress.wealth)
    setSocial(activePlayer.progress.social)

    const healingActionOnScreen = actionsOnScreen.some(
      (action) => unhealedTraumas.includes(action.category) && action.healing
    );
    setHealingOnScreen(healingActionOnScreen);


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
    <div className="main">
      {/* <div className='grid-game'> */}

      {/* SECTION INSTRUCTIONS */}
      <div className="grid-container-header">
        <div className="instructor"></div>

        <div className="instructions">
          <p>
            <Typewriter
              words={["Hier kommt später der Erklärtext rein"]}
              cursor={true}
            />
          </p>
        </div>
      </div>

      <div className="grid-container-main">
        {/*SECTION ACTION */}
        {status === "action" && (
          <div className="container-actions">
            {actionsOnScreen.map((action, index) => (
              <div
                className={`btn-action eightbit-btn ${unhealedTraumas.includes(action.category) && action.healing ? "healing" : ""}`}

                key={index}
                onClick={() => handleActionButton(action)}
              >
                <h1>{switchCategoryLogo(action.category)}</h1>
                <p>{action.text}</p>
                <div className='center'>
                  {Object.entries(action.progress)
                    .filter(([key, value]) => value !== 0)
                    .map(([key, value]) => (
                      <div key={key}>
                        <span>{switchCategoryLogo(key)}</span>
                        <span
                          className={`action-value ${value > 0 ? "positive" : "negative"
                            } `}
                        >
                          {/* {value > 0 ? `+${value}` : `−${value}`} */}
                          {value > 0 ? `+${value}` : <>&minus;{-value}</>}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {status === "memory" && (
          <AIphoto
            action={clickedAction}
            player={activePlayer}
            traumas={unhealedTraumas}
          />
        )}

        {/*SECTION PROGRESS*/}
        <div>
          <div className="container-playerinfo">
            <img src="images/garnet.gif" alt="" />
            <h2>{activePlayer.name}</h2>
            <div className='existence'>
              <h3>Existence</h3>
              <div className='counter'><p>#{activePlayer.reincarnation}</p>
              </div>
            </div>
            <div className='age'>
              <h3>Age</h3>
              <div className="counter"><p>{activePlayer.age}</p></div>
            </div>
          </div>

          <div className="container-progress">
            <h3>Attractiveness</h3>
            <div className="progressbar-outline">
              <div
                className={progressbarClassName(attrac)}
                style={getWidth(attrac)}
              >
                {`🤳${attrac}`}
              </div>
            </div>
            <h3>Mental Stability</h3>
            <div className="progressbar-outline">
              <div
                className={progressbarClassName(mental)}
                style={getWidth(mental)}
              >
                {`🤪${mental}`}
              </div>
            </div>
            <h3>Educational Level</h3>
            <div className="progressbar-outline">
              <div
                className={progressbarClassName(educ)}
                style={getWidth(educ)}
              >
                {`🎓${educ}`}
              </div>
            </div>
            <h3>Wealth</h3>
            <div className="progressbar-outline">
              <div
                className={progressbarClassName(wealth)}
                style={getWidth(wealth)}
              >
                {`💸${wealth}`}
              </div>
            </div>
            <h3>Social Relationships</h3>
            <div className="progressbar-outline">
              <div
                className={progressbarClassName(social)}
                style={getWidth(social)}
              >
                {`💛${social}`}
              </div>
            </div>

            <h3 className='space'>Unhealed Traumas</h3>
            <div className="container-traumas">
              {unhealedTraumas.map((trauma, index) => (
                <div
                  className={`${healingOnScreen ? "healing" : ""}`}
                  key={index}>{switchCategoryLogo(trauma)}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid-container-level">
        {/*SECTION WILL */}
        <div className="container-leveltask">

          <div className='emoji-container'>
            {willchain.map((emoji, index) => (
              <h2 key={index}>{emoji}</h2>
            ))}
            {[...Array(3 - willchain.length)].map((_, index) => (
              <h2 key={index}>◽️</h2>
            ))}
          </div>
          <h3>{3 - willchain.length} more missing for <span className='highlight'>will chain</span></h3>

        </div>


        {/*SECTION HEALING */}
        <div className="container-leveltask">
          {healed ? (
            <>
              <div className='emoji-container'>
                <h2>💖</h2>
              </div>
              <h3><span className='highlight'>Trauma</span> healed!</h3>
            </>
          ) : (
            <>
              <div className='emoji-container'>
                <h2>💔</h2>
              </div>
              <h3>No <span className='highlight'>trauma</span> healed yet</h3>
            </>
          )}
        </div>

        {/*SECTION WELLBEING */}
        <div className="container-leveltask">
          <div>
            <div className="progressbar-outline">
              <div className={"progressbar-fill"} style={getWidth(wellbeing)}>
                {`${wellbeing}%`}
              </div>
            </div>
          </div>
          {wellbeing < 66 ? (
            <h3><span className='highlight'>Overall wellbeing</span> not high enough</h3>
          ) : (
            <h3><span className='highlight'>Overall wellbeing</span> high enough</h3>
          )}
        </div>
      </div>

      {/*SECTION ALBUM */}
      <div className="grid-container-album">
        <div>
          <h2>Album</h2>
          {album &&
            album.map((photo, index) => (
              <img src={photo} key={index} alt="album" />
            ))}
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
