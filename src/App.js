import React from 'react'

import { Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';


import Navbar from './components/parent/Navbar'

import Homepage from './pages/Homepage'
import ImageGenerator from './pages/ImageGenerator'
import Game from './pages/Game.tsx'
import GameIntro from './pages/GameIntro'
import PlayerSelection from './pages/PlayerSelection'
import Error404 from './pages/Error404'



import "../src/styles/app.css"
import { PanelAlbum } from './components/parent/PanelAlbum';


function App() {



  return (
    <>
      <LanguageProvider>
        <AuthContextProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Error404 />} />

            <Route path="ImageGenerator" element={<ImageGenerator />} />

            <Route path='GameIntro' element={<GameIntro />} />
            <Route path='PlayerSelection' element={< PlayerSelection />} />
            <Route path='Game' element={<Game />} />

          </Routes>

        </AuthContextProvider>
      </LanguageProvider>
    </>
  );
}

export default App