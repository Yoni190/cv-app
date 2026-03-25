import React from 'react'

const CV = ({ generalData, educationData, practicalData }) => {
  return (
    <div>
        <h1>CV</h1>
        <h2>{generalData.firstName} {generalData.lastName}</h2>
        <p>{generalData.email} {generalData.phone && '|'} {generalData.phone}</p>


        <h1>{educationData[0].schoolName && 'Education Experience'}</h1>
        {educationData.map((data) => (
            <div key={data.id}>
                <h2>{data.schoolName}</h2>
                <p>{data.studyTitle} {data.startDate} {data.endDate && '-'} {data.endDate}</p>
            </div>
        ))}

        <h1>{practicalData[0].companyName && 'Practical Experience'}</h1>
        {practicalData.map((data) => (
          <div key={data.id}>
            <h2>{data.companyName}</h2>
            <p>{data.positionTitle} {data.startDate} {data.endDate && '-'} {data.endDate}</p>
            
            <ul>
              {data.responsibilities[0].res && data.responsibilities.map((res) => (
                <li key={res.id}>{res.res}</li>
              ))}
            </ul>
          </div>
        ))}
        
    </div>
  )
}

export default CV