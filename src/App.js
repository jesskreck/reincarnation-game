import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'

import Homepage from './pages/Homepage'
import ImageGenerator from './pages/ImageGenerator'
import Game from './pages/Game.tsx'
import Error404 from './pages/Error404'

import "../src/styles/app.css"
import PhotoBooth from './pages/PhotoBooth'

function App() {
  return (
    <>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Error404 />} />

          <Route path="ImageGenerator" element={<ImageGenerator />} />

          
          <Route path="Game" element={<Game />} >

            <Route path="Photobooth" element={<PhotoBooth />} />

          </Route>
          

        </Routes>
      </div>
    </>
  );
}

export default App