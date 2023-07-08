import React from 'react'
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../../recoil/atoms/Atoms';
import { Typewriter } from 'react-simple-typewriter';

export default function Animation1() {
    const language = useRecoilValue(languageAtom)

  return (
      <div className='intro-storybox'>
          <div className="intro-typewriter">
              <Typewriter words={['Hello World']} cursor={true}/>
          </div>
      </div>
  )
}
