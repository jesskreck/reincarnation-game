import { RecoilRoot } from 'recoil'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import "../../src/styles/main.scss"

function App() {

  return (
    <>
      <RecoilRoot>
        <Dashboard />
      </RecoilRoot>
    </>
  )
}

export default App
