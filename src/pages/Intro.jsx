import React, { useState } from "react";
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../recoil/atoms/Atoms';
import { Typewriter } from 'react-simple-typewriter';
import texts from "../assets/gameData/texts.json";


export default function Intro() {

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
    { gif: "images/space1.gif", text: "anim1", highlight: false },
    { gif: "images/space1.gif", text: "anim2", highlight: false },
    { gif: "images/space1.gif", text: "anim3", highlight: true },
    { gif: "images/city1.gif", text: "anim4", highlight: false },
    { gif: "images/city2.gif", text: "anim5", highlight: false },
    { gif: "images/city2.gif", text: "anim6", highlight: false },
    { gif: "images/city2.gif", text: "anim7", highlight: true },
  ]

  //extracting steps with props from steps array
  const [step, setStep] = useState(0);
  const { gif, text: textKey, radial, highlight } = STEPS[step];
  const [storyEnd, setStoryEnd] = useState(false);

  const language = useRecoilValue(languageAtom);
  const text = texts.intro[textKey][language];

  const getNextStep = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1)
    } else {
      setStoryEnd(true);
    } 
    console.log(step);
  }

  if (storyEnd) {
    return <Navigate to="/dashboard" />
  }


  return (
    <div className="dashboard-bg">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="introbox-grid">
              <div className="introbox-avatar"><h1>👾</h1></div>

              {
              step === 1
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
              <button className="btn-story" onClick={getNextStep}>next</button>
            </div>
        </div>
      </div>
    </div>
  );
}

