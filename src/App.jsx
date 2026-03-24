import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Practical from './components/Practical'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GeneralInfo />
      <Education />
      <Practical />
    </>
  )
}

export default App
