import React from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../../recoil/atoms/Atoms';
import { Typewriter } from 'react-simple-typewriter';

export default function Intro() {
  const language = useRecoilValue(languageAtom)
  return (
    <div className="bg-black">
      <div className="bg-image">
        <div className="bg-radial">
          <div className="storybox-grid">
              <div className="storybox-avatar">?</div>

              <div className="storybox-text">
                <Typewriter typeSpeed={50} words={['Ich erinnere mich an Welten von unermesslichem Glanz. Geboren aus Sternenstaub formierten sie sich zu Galaxien und die Wesen dort waren fähig von Planet zu Planet und innerhalb des ganzen Sonnensystems zu kommunizieren.']} cursor={true} />
              </div>
              <button className="btn-story">Next</button>
            </div>
          {/* <Outlet /> */}

        </div>
      </div>
    </div>
  );
}
