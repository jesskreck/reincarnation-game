import React, { useState } from 'react'
import Storybox from '../../components/modals/Storybox'
import { Link } from 'react-router-dom'


export default function Awake() {

    const [showText, setShowText] = useState(true)

  return (
    <div className='start-grid'>
          <div className="start-flex">
              <h1>TBA animation to show duality principle</h1>
               <Link to="/players/" className="btn--secondary">Go to Players</Link>
          </div>

         

      
          <Storybox name={"TBA"} open={showText} close={() => setShowText(false)}>
              
              Text der sagt dass am Anfang blablabla
          </Storybox>
    </div>
  )
}
