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
        <div>
          <Link to="intro">
            <button className="btn-primary" onClick={() => setLanguage("de")}>
              <h3>Deutsch</h3>
            </button>
          </Link>
          <Link to="intro">
            <button className="btn-primary" onClick={() => setLanguage("en")}>
              <h3>English</h3>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
