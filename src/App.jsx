import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Practical from './components/Practical'

function App() {
  const [generalData, setGeneralData] = useState({
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
      })

  return (
    <>
      <GeneralInfo generalData={generalData} setGeneralData={setGeneralData} />
      <Education />
      <Practical />
    </>
  )
}

export default App
