import React from "react";
import PlayerSelection from "./pages/PlayerSelection";
import Navbar from "./components/navbar/Navbar";
import ImageGenerator from "./pages/ImageGenerator";
import Error404 from "./pages/Error404";
import { Route, Routes } from "react-router-dom";
import { PlayerProvider } from "./contexts/PlayerContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Dashboard } from "./pages/Dashboard";
import { AuthContextProvider } from "./contexts/AuthContext";

import "../src/styles/main.scss";
import Start from "./pages/game_intro/Start";
import Awake from "./pages/game_intro/Awake";
import { DashboardV2 } from "./pages/game_play/DashboardV2";

function App() {
  return (
    <>
      <LanguageProvider>
        <AuthContextProvider>
          <PlayerProvider>
            <Navbar />

            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="*" element={<Error404 />} />
              <Route path="imageGenerator" element={<ImageGenerator />} />

              <Route path="awake" element={<Awake />} />
              <Route path="game" element={<DashboardV2 />} />

              <Route path="players" element={<PlayerSelection />} />
              <Route path="actions" element={<Dashboard />} />
            </Routes>
          </PlayerProvider>
        </AuthContextProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
