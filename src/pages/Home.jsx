import React, { useState } from "react";
import { Link } from "react-router-dom";
import { languageAtom } from "../recoil/atoms/Atoms";
import { useSetRecoilState } from "recoil";

export default function Home() {
  const [start, setStart] = useState(true);
  const setLanguage = useSetRecoilState(languageAtom);

  return (
    <div className="home">
      <h1>Reincarnation Game</h1>
      {start ? (
        <button className="btn-primary" onClick={() => setStart(false)}>
          <h2>Start</h2>
        </button>
      ) : (
        <div className="home-button-container">
          <Link to="story">
            <button className="btn-primary" onClick={() => setLanguage("de")}>
              <h2>Deutsch</h2>
            </button>
          </Link>
          <Link to="story">
            <button className="btn-primary" onClick={() => setLanguage("en")}>
              <h2>English</h2>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
