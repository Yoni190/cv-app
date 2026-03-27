import React, { useState } from 'react'

const Education = ({ educationData, setEducationData }) => {


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
                startDate: '',
                endDate: ''
            }
        ])
    }

    const removeEducation = (index) => {
        const temp = [...educationData]
        temp.splice(index, 1)
        setEducationData(temp)
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
            <h1>Educational Experience</h1>
            <button onClick={addEducation}>Add Educational Experience</button>
            {educationData.map((data, index) => (
                <div key={data.id} className='form'>
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
                            {educationData.length > 1 && <button type='button' onClick={() => removeEducation(index)}>Remove Education</button>}
                </div>
            ))}
        </form>


    </div>
  )
}

export default Education