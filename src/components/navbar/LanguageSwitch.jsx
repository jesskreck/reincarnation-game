import React, { useContext } from 'react';
import { LanguageContext } from "../../contexts/LanguageContext"

function LanguageSwitch() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <button onClick={toggleLanguage} className='btn--nav'>
        {language === 'en' ? 'DE' : 'EN'}
      </button>
    </>
  );
}

export default LanguageSwitch;
