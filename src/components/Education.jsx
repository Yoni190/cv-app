import React, { useState } from 'react'

const Education = () => {
    const currentDate = new Date().toISOString().slice(0,10)

    const [schoolName, setSchoolName] = useState('')
    const [studyTitle, setStudyTitle] = useState('')
    const [startDate, setStartDate] = useState(currentDate)
    const [endDate, setEndDate] = useState(currentDate)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(schoolName, studyTitle, studyDate)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Educational Experience</h1>
            <label htmlFor="school">School Name</label>
            <input
                type="text"
                name="school"
                id="school"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                required />
            <label htmlFor="study-title">Title of Study</label>
            <input
                type="text"
                name="study-title"
                id="study-title"
                value={studyTitle}
                onChange={(e) => setStudyTitle(e.target.value)}
                required />
            <label htmlFor="start-date">Start Date</label>
            <input
                type="date"
                name="start-date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required />

            <label htmlFor="end-date">End Date</label>
            <input
                type="date"
                name="end-date"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required />
            <button type='submit'>Submit</button>
        </form>


    </div>
  )
}

export default Education