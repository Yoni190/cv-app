import React, { useState } from 'react'

const Practical = () => {
    const [companyName, setCompanyName] = useState('')
    const [positionTitle, setPositionTitle] = useState('')
    const [responsibilities, setResponsibilities] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(companyName, positionTitle, responsibilities, startDate, endDate)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Practical Experience</h1>
            <label htmlFor="company-name">Company Name</label>
            <input
                type="text"
                name="company-name"
                id="company-name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required/>

            <label htmlFor="position-title">Position Title</label>
            <input
                type="text"
                name="position-title"
                id="position-title"
                value={positionTitle}
                onChange={(e) => setPositionTitle(e.target.value)}
                required/>

            <label htmlFor="responsibilities">Main Responsibilities</label>
            <input
                type="text"
                name="responsibilities"
                id="responsibilities"
                value={responsibilities}
                onChange={(e) => setResponsibilities(e.target.value)}
                required/>

            <label htmlFor="start-date">Start Date</label>
            <input
                type="date"
                name="start-date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required/>

            <label htmlFor="end-date">End Date</label>
            <input
                type="date"
                name="end-date"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required/>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Practical