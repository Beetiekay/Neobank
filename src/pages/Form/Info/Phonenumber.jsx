import React, { useState } from 'react'
import  PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'

const Phonenumber = () => {

 const [phone, setPhone] = useState("")

 const [displayPhone,setDisplayPhone] = ("")

  return (
    <div className='w-full p-2'>
        <h1 className='text-2xl font-semibold dark:text-Applegreen mb-2'>What's Your Number?</h1>
        <p className='text-sm font-semibold opacity-85 dark:text-gray mb-5'>
            We'll send you a verification code to sign in or create an account at Neobank.
        </p>
        {/* phone number country flag */}
        <PhoneInput
         country="ng"
         value={phone}
         onChange={(value) => setPhone(value)}
         className="px-7 mt-2"
        />
    </div>
  )
}

export default Phonenumber