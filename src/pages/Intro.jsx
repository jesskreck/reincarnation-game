import React, { useState } from "react";
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../recoil/atoms/Atoms';
import { Typewriter } from 'react-simple-typewriter';
import texts from "../assets/gameData/texts.json";
import { PlayerInfo } from "../components/PANELS/Progress/PlayerInfo";
import { examplePlayer } from "../utils/examplePlayer";


export default function Intro() {

  const language = useRecoilValue(languageAtom)
  const [activePlayer, setActivePlayer] = useState(examplePlayer)

  const [showPlayer, setShowPlayer] = useState(false)
  const [showProgress, setShowProgress] = useState(false)
  const [showActions, setShowActions] = useState(false)
  const [showWill, setShowWill] = useState(false)


  //typewriter settings
  const typeSpeed = 50;
  const cursor = true;

  function TypewriterHighlight({ text }) {
    return (<span style={{
      fontWeight: "bolder",
      fontSize: "x-large",
    }}>
      <Typewriter key={step} typeSpeed={100} words={[text]} cursor={cursor} />
    </span>);
  }

  const STEPS = [
    { text: "anim0", highlight: false },
    { text: "anim1", highlight: true },
    { text: "anim2", highlight: true },
    { text: "anim3", highlight: false },
    { text: "anim4", highlight: false },
    { text: "anim5", highlight: false },
    { text: "anim6", highlight: false },
    { text: "anim7", highlight: false },
  ]

  //extracting steps with props from steps array
  const [step, setStep] = useState(0);
  const { text: textKey, highlight } = STEPS[step];
  const text = texts.intro[textKey][language];

  console.log(step);

  const getNextStep = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1)
    } if (step === 5) {
      setShowPlayer(true);
      console.log("here");
    }
  }



  return (
    <div className="dashboard-bg">
      <div className="dashboard-container">

        <div className="grid-container-header">

          <div className="introbox-avatar">
            <h1>👾</h1>
          </div>

          {
            step === 3
              ? <div className="introbox-text-gif">
                <img src="/images/white_diamond.gif" alt="Avatar" />
              </div>
              : <div className="introbox-text">
                {
                  highlight
                    ? <TypewriterHighlight text={text} />
                    : <Typewriter key={step} typeSpeed={typeSpeed} words={[text]} cursor={cursor} />
                }
              </div>
          }
          <button className="btn-story" onClick={getNextStep}>{texts.story.button[language]}</button>

        </div>

        {showPlayer &&
          <div className="grid-container-main">
            <div className="container">
              <PlayerInfo activePlayer={examplePlayer} />
            </div>
          </div>
        }

      </div>
    </div>
  );
}

