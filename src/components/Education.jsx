import React, { useState } from 'react'

const Education = () => {
    const currentDate = new Date().toISOString().slice(0,10)

    const [educationData, setEducationData] = useState([{
        id: crypto.randomUUID(),
        schoolName: '',
        studyTitle: '',
        startDate: currentDate,
        endDate: currentDate
    }])


    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(educationData)
    }

    const addEducation = () => {
        setEducationData([...educationData,
            {
                id: crypto.randomUUID(),
                schoolName: '',
                studyTitle: '',
                startDate: currentDate,
                endDate: currentDate
            }
        ])
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Educational Experience</h1>
            <button onClick={addEducation}>Add Educational Experience</button>
            {educationData.map((data) => (
                <div key={data.id}>
                    <label htmlFor="school">School Name</label>
                    <input
                        type="text"
                        name="school"
                        id="school"
                        value={data.schoolName}
                        onChange={(e) => setEducationData(educationData.map(edData => { return edData.id === data.id ? {...edData, schoolName: e.target.value} : edData }))}
                        required />

                    <label htmlFor="study-title">Title of Study</label>
                    <input
                        type="text"
                        name="study-title"
                        id="study-title"
                        value={data.studyTitle}
                        onChange={(e) => setEducationData(educationData.map(edData => { return edData.id === data.id ? {...edData, studyTitle: e.target.value} : edData }))}
                        required />

                        <label htmlFor="start-date">Start Date</label>
                        <input
                            type="date"
                            name="start-date"
                            id="start-date"
                            value={data.startDate}
                            onChange={(e) => setEducationData(educationData.map(edData => { return edData.id === data.id ? {...edData, startDate: e.target.value} : edData }))}
                            required />

                            <label htmlFor="end-date">End Date</label>
                            <input
                                type="date"
                                name="end-date"
                                id="end-date"
                                value={data.endDate}
                                onChange={(e) => setEducationData(educationData.map(edData => { return edData.id === data.id ? {...edData, endDate: e.target.value} : edData }))}
                                required />
                </div>
            ))}
            
            
            

            
            <button type='submit'>Submit</button>
        </form>


    </div>
  )
}

export default Education