import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Homepage from './pages/Homepage'
import ImageGenerator from './pages/ImageGenerator'
import Error404 from './pages/Error404'
import Navbar from './components/Navbar'

import "../src/styles/app.css"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="ImageGenerator" element={<ImageGenerator />} />
        <Route path="*" element={<Error404 />} />

      </Routes>
    </>
  );
}

export default App