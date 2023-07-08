import { RecoilRoot } from "recoil";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import "./styles/globals.scss";
import { AIphoto } from "./components/AIphoto/AIphoto.jsx";
import Home from "./pages/Home.jsx";
import Intro from "./pages/intro/Intro.jsx";
import Animation1 from "./pages/intro/Animation1.jsx";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />}>
          <Route path="1" element={<Animation1 />} />
          <Route path="2" element={<p>testing2</p>} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* <Dashboard /> */}
    </RecoilRoot>
  );
}

export default App;
