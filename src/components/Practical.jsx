import React, { useState } from 'react'

const Practical = ({ practicalData, setPracticalData }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(practicalData)
    }

    const addPractical = () => {
        setPracticalData([...practicalData, {
            id: crypto.randomUUID(),
            companyName: '',
            positionTitle: '',
            responsibilities: '',
            startDate: '',
            endDate: ''
        }])
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Practical Experience</h1>
            <button onClick={addPractical}>Add Practical Experience</button>
            {practicalData.map((data) => (
                <div key={data.id}>
                    <label htmlFor="company-name">Company Name</label>
                    <input
                        type="text"
                        name="company-name"
                        id="company-name"
                        value={data.companyName}
                        onChange={(e) => setPracticalData(practicalData.map(prData => { return prData.id === data.id ? {...prData, companyName: e.target.value} : prData }))}
                        required/>

                    <label htmlFor="position-title">Position Title</label>
                    <input
                        type="text"
                        name="position-title"
                        id="position-title"
                        value={data.positionTitle}
                        onChange={(e) => setPracticalData(practicalData.map(prData => { return prData.id === data.id ? {...prData, positionTitle: e.target.value} : prData }))}
                        required/>

                    <label htmlFor="responsibilities">Main Responsibilities</label>
                    <input
                        type="text"
                        name="responsibilities"
                        id="responsibilities"
                        value={data.responsibilities}
                        onChange={(e) => setPracticalData(practicalData.map(prData => { return prData.id === data.id ? {...prData, responsibilities: e.target.value} : prData }))}
                        required/>

                    <label htmlFor="start-date">Start Date</label>
                    <input
                        type="date"
                        name="start-date"
                        id="start-date"
                        value={data.startDate}
                        onChange={(e) => setPracticalData(practicalData.map(prData => { return prData.id === data.id ? {...prData, startDate: e.target.value} : prData }))}
                        required/>

                    <label htmlFor="end-date">End Date</label>
                    <input
                        type="date"
                        name="end-date"
                        id="end-date"
                        value={data.endDate}
                        onChange={(e) => setPracticalData(practicalData.map(prData => { return prData.id === data.id ? {...prData, endDate: e.target.value} : prData }))}
                        required/>
                </div>
            ))}
            

            

            

            

            

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Practical