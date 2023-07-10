import { RecoilRoot } from "recoil";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import "./styles/globals.scss";
import Home from "./pages/Home.jsx";
import Story from "./pages/Story.jsx";
import Intro from "./pages/Intro.jsx";


function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/dashboard" element={<Dashboard />} />

        
      </Routes>

      {/* <Dashboard /> */}
    </RecoilRoot>
  );
}

export default App;
