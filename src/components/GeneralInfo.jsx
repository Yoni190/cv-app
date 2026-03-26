import React, { useState } from 'react'

const GeneralInfo = ({ generalData, setGeneralData}) => {

   

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(generalData)
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
            <h1>General Information</h1>
            <label htmlFor="f_name">First Name</label>
            <input
                type="text"
                name="f_name"
                id="f_name"
                value={generalData.firstName}
                onChange={(e) => setGeneralData({...generalData, firstName: e.target.value})}
                placeholder='John'
                required/>

            <label htmlFor="l_name">Last Name</label>
            <input
                type="text"
                name="l_name"
                id="l_name"
                value={generalData.lastName}
                onChange={(e) => setGeneralData({...generalData, lastName: e.target.value})}
                placeholder='Doe'
                required/>

            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                value={generalData.email}
                onChange={(e) => setGeneralData({...generalData, email: e.target.value})}
                placeholder='johndoe@gmail.com'
                required/>

            <label htmlFor="phone">Phone number</label>
            <input
                type="tel"
                name="phone"
                id="phone"
                value={generalData.phone}
                onChange={(e) => setGeneralData({...generalData, phone: e.target.value})}
                placeholder='0987654321'
                required/>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default GeneralInfo