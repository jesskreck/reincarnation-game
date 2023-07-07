import { RecoilRoot } from 'recoil'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import "./styles/globals.scss"
import { AIphoto } from './components/AIphoto/AIphoto.jsx'
import Home from './pages/intro/Home.jsx'

function App() {

  return (
    <div className='app'>
      <RecoilRoot>
        <Routes>
          <Route path='/home' element={<Home />} >
            <Route path='test' element={<p>testing</p>} />
            <Route path='test2' element={<p>testing2</p>} />
          </Route>
          <Route path='/dashboard' element={<Dashboard />} />
          
        </Routes>

        {/* <Dashboard /> */}
        
      </RecoilRoot>
    </div>
  )
}

export default App
