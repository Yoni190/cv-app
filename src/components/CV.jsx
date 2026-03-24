import React from 'react'

const CV = ({ generalData, educationData, practicalData }) => {
  return (
    <div>
        <h1>CV</h1>
        <h2>{generalData.firstName} {generalData.lastName}</h2>
        <p>{generalData.email} {generalData.phone && '|'} {generalData.phone}</p>
    </div>
  )
}

export default CV