import React from 'react'

import { Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { PlayerProvider } from './contexts/PlayerContext';



import Navbar from './components/parent/Navbar'

import Homepage from './pages/Homepage'
import ImageGenerator from './pages/ImageGenerator'
import Game from './pages/Game.tsx'
import GameIntro from './pages/Instructions'
import PlayerSelection from './pages/PlayerSelection'
import Error404 from './pages/Error404'



import "../src/styles/app.css"
import Instructions from './pages/Instructions';
import { Dashboard } from './pages/Dashboard';
import PanelActions from './components/parent/PanelActions';


function App() {



  return (
    <>
      <LanguageProvider>
        <AuthContextProvider>
          <PlayerProvider>
            <Navbar />

            <Routes>

              <Route path="/" element={<Homepage />} />
              <Route path="*" element={<Error404 />} />
              <Route path="ImageGenerator" element={<ImageGenerator />} />

              <Route path='Playerselection' element={< PlayerSelection />} />
              <Route path='PanelActions' element={< PanelActions />} />
              <Route path='Dashboard' element={< Dashboard />} />
              

              <Route path='instructions' element={<Instructions />} />

              <Route path="game" element={<Game />} >

                <Route path='players' element={< PlayerSelection />} />
                <Route path='play' element={<Dashboard />} />
              </Route>

            </Routes>

          </PlayerProvider>
        </AuthContextProvider>
      </LanguageProvider>
    </>
  );
}

export default App