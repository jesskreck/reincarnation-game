import React from 'react'

import { Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';


import Navbar from './components/parent/Navbar'

import Homepage from './pages/Homepage'
import ImageGenerator from './pages/ImageGenerator'
import Game from './pages/Game.tsx'
import GameIntro from './pages/GameIntro'
import PlayerSelection from './pages/PlayerSelection'
import Error404 from './pages/Error404'



import "../src/styles/app.css"


function App() {



  return (
    <>
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="*" element={ <Error404 /> } />

          <Route path="ImageGenerator" element={ <ImageGenerator /> } />


          <Route path='Game' element={ <GameIntro /> } >
            <Route path='PlayerSelection' element={ < PlayerSelection /> } />
            <Route path='Start' element={ <Game /> } />
          </Route>

            <Route path="PlayerSelection" element={ < PlayerSelection /> } />
            <Route path="Start" element={ <Game /> } />

        </Routes>

      </AuthContextProvider>
    </>
  );
}

export default App