import React from 'react'

import { Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { PlayerProvider } from './contexts/PlayerContext';



import Navbar from './components/parent/Navbar'

import Homepage from './pages/Homepage'
import ImageGenerator from './pages/ImageGenerator'
import PlayerSelection from './pages/PlayerSelection'
import Error404 from './pages/Error404'



import "../src/styles/app.css"
import { Dashboard } from './pages/Dashboard';


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

              <Route path="Playerselection" element={< PlayerSelection />} />
              <Route path="Dashboard" element={< Dashboard />} />

            </Routes>

          </PlayerProvider>
        </AuthContextProvider>
      </LanguageProvider>
    </>
  );
}

export default App