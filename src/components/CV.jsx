import React from 'react'

const CV = ({ generalData, educationData, practicalData }) => {
  return (
    <div>
        <h1>CV</h1>
        <h1>{generalData.firstName}</h1>
    </div>
  )
}

export default CV