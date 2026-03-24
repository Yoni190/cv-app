import React, { useState } from 'react'

const GeneralInfo = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(firstName, lastName, email, phone)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>General Information</h1>
            <label htmlFor="f_name">First Name</label>
            <input
                type="text"
                name="f_name"
                id="f_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required/>

            <label htmlFor="l_name">Last Name</label>
            <input
                type="text"
                name="l_name"
                id="l_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required/>

            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>

            <label htmlFor="phone">Phone number</label>
            <input
                type="tel"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required/>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default GeneralInfo