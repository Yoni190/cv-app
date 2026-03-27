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
            responsibilities: [
              {
                id: crypto.randomUUID(),
                res: ''
              }
            ],
            startDate: '',
            endDate: ''
        }])
    }

    const addResponsibility = (id) => {
        setPracticalData(prev =>
            prev.map(prData => {
                if (prData.id === id) {
                    return {
                        ...prData,
                        responsibilities: [
                            ...prData.responsibilities,
                            {
                                id: crypto.randomUUID(),
                                res: ''
                            }
                        ]
                    };
                }
                return prData;
            })
        );
    };

    const removePractical = (index) => {
        const temp = [...practicalData]
        temp.splice(index, 1)
        setPracticalData(temp)
    }

    const removeResponsibility = (index, resIndex) => {
        const temp = [...practicalData]
        temp[index].responsibilities.splice(resIndex, 1)
        setPracticalData(temp)
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
            <div className='practical-header'>
                <h1>Practical Experience</h1>
                <button onClick={addPractical}>Add Practical Experience</button>
            </div>
            {practicalData.map((data, index) => (
                <div key={data.id} className='form'>
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
                    <button onClick={() => addResponsibility(data.id)}>Add Responsibility</button>
                        {data.responsibilities.map((res, resIndex) => (
                        <div key={res.id}>
                            <input
                                type="text"
                                name="responsibilities"
                                id="responsibilities"
                                value={res.res}
                                required
                                onChange={(e) =>
                                    setPracticalData(practicalData.map(prData => {
                                        if (prData.id === data.id) {
                                            return {
                                                ...prData,
                                                responsibilities: prData.responsibilities.map(r =>
                                                    r.id === res.id
                                                        ? { ...r, res: e.target.value }
                                                        : r
                                                )
                                            };
                                        }
                                        return prData;
                                    }))
                                }
                            />
                            {data.responsibilities.length > 1 && <button type='button' onClick={() => removeResponsibility(index, resIndex)}>Remove Responsibility</button>}
                        </div>
                    ))}

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
                    {practicalData.length > 1 && <button type='button' onClick={() => removePractical(index)}>Remove Professional Experience</button>}
                </div>
            ))}
            

            

            

            

            

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Practical