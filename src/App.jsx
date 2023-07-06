import { RecoilRoot } from 'recoil'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import "./styles/globals.scss"

function App() {

  return (
    <div className='app'>
      <RecoilRoot>
        <Dashboard />
      </RecoilRoot>
    </div>
  )
}

export default App
