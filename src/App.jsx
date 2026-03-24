import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Practical from './components/Practical'
import CV from './components/CV'

function App() {
  const currentDate = new Date().toISOString().slice(0,10)

  const [generalData, setGeneralData] = useState({
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
      })
  
  const [educationData, setEducationData] = useState([{
          id: crypto.randomUUID(),
          schoolName: '',
          studyTitle: '',
          startDate: '',
          endDate: ''
      }])

  const [practicalData, setPracticalData] = useState([
        {
            id: crypto.randomUUID(),
            companyName: '',
            positionTitle: '',
            responsibilities: '',
            startDate: '',
            endDate: ''
        }
    ])

  return (
    <>
      <GeneralInfo generalData={generalData} setGeneralData={setGeneralData} />
      <Education educationData={educationData} setEducationData={setEducationData}/>
      <Practical practicalData={practicalData} setPracticalData={setPracticalData}/>
      <CV generalData={generalData} educationData={educationData} practicalData={practicalData}/>
    </>
  )
}

export default App
