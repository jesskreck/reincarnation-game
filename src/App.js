import React from 'react'
import PlayerSelection from './pages/PlayerSelection'
import Navbar from './components/parent/Navbar'
import ImageGenerator from './pages/ImageGenerator'
import Homepage from './pages/Homepage'
import Error404 from './pages/Error404'
import { Route, Routes } from 'react-router-dom';
import { PlayerProvider } from './contexts/PlayerContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Dashboard } from './pages/Dashboard';
import { AuthContextProvider } from './contexts/AuthContext';

import "../src/styles/main.scss"


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

              <Route path="Players" element={<PlayerSelection/>} />
              <Route path="Actions" element={< Dashboard />} />

              
            </Routes>

          </PlayerProvider>
        </AuthContextProvider>
      </LanguageProvider>
    </>
  );
}

export default App