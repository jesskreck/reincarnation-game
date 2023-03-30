import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import { LanguageContext } from '../contexts/LanguageContext'
import texts from "../assets/gameData/texts.json"



export default function GameIntro() {
  
  const { language } = useContext(LanguageContext);
  console.log('language :>> ', language);

  return (
    <div className='page container'>
      <h1>{texts.instruction.header[language]}</h1>

            <h2>{texts.instruction.subheader[language]}</h2>
            <p>{texts.instruction.paragraph[language]}</p>
            <Link to="/Game/PlayerSelection">
              <button>{texts.instruction.button[language]}</button>
            </Link>
  
    </div>
  )
}

