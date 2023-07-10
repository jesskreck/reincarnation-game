import React, { useState } from "react";
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../recoil/atoms/Atoms';
import { Typewriter } from 'react-simple-typewriter';
import texts from "../assets/gameData/texts.json";


export default function Story() {

  //typewriter settings
  const typeSpeed = 50;
  const cursor = true;

  function TypewriterHighlight({ text }) {
    return (<span style={{
      fontWeight: "bolder",
      fontSize: "x-large",
    }}>
      <Typewriter typeSpeed={100} words={[text]} cursor={cursor} />
    </span>);
  }




  const STEPS = [
    { gif: "images/space1.gif", text: "anim1", radial: false, highlight: false },
    { gif: "images/space1.gif", text: "anim2", radial: true, highlight: false },
    { gif: "images/space1.gif", text: "anim3", radial: true, highlight: true },
    { gif: "images/city1.gif", text: "anim4", radial: false, highlight: false },
    { gif: "images/city2.gif", text: "anim5", radial: false, highlight: false },
    { gif: "images/city2.gif", text: "anim6", radial: true, highlight: false },
    { gif: "images/city2.gif", text: "anim7", radial: false, highlight: true },
  ]

  //extracting steps with props from steps array
  const [step, setStep] = useState(0);
  const { gif, text: textKey, radial, highlight } = STEPS[step];

  // const language = useRecoilValue(languageAtom);
  const language = "de";
  const text = texts.story[textKey][language];

  const getNextStep = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1)
    } else {
      console.log("no more steps");
      //send to dashboard
    }
  }


  return (
    <div className="bg-black">
      <div className="bg-image" style={{ backgroundImage: `url(${gif})` }}>
        {
          radial
            ? <div className="bg-radial">
              <div className="storybox-grid">
                <div className="storybox-avatar">?</div>

                <div className="storybox-text">
                  {
                    highlight
                      ? <TypewriterHighlight text={text} />
                      : <Typewriter typeSpeed={typeSpeed} words={[text]} cursor={cursor} />
                  }
                </div>
                <button className="btn-story" onClick={getNextStep}>Next</button>
              </div>
            </div>
            : <div className="storybox-grid">
              <div className="storybox-avatar">?</div>

              <div className="storybox-text">
                {
                  highlight
                    ? <TypewriterHighlight text={text} />
                    : <Typewriter typeSpeed={typeSpeed} words={[text]} cursor={cursor} />
                }
              </div>
              <button className="btn-story" onClick={getNextStep}>Next</button>
            </div>
        }
      </div>
    </div>
  );
}

