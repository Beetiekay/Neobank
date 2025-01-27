import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from "../../assets/N3.png"
import logo2 from "../../assets/N4.png"

const Signup = () => {
  return (
    <div className=' px-2'>
        <form action=''>
          {/* logo */}
            <div className='w-full flex justify-center -mt-5 mb-2'>
              <div>
                <img src={logo2} className='w-20 dark:hidden'/>
                <img src={logo1} className='w-20 hidden dark:flex'/>
                </div>
             </div>
             {/* logo */}

            <div className='grid grid-cols-2 gap-2'>
            <input type='text' placeholder='Full Name' className='mb-5 p-4 w-full dark:text-Applegreen rounded-xl shadow-md outline-none text-xl hover:border dark:bg-black dark:border dark:border-Applegreen hover:border-Malacite'/>
            <input type='text' placeholder='Nickname' className='mb-5 p-4 w-full dark:text-Applegreen rounded-xl shadow-md outline-none text-xl hover:border dark:bg-black dark:border dark:border-Applegreen hover:border-Malacite'/>
            </div>
            
            <label htmlFor='date of birth' className='text-lg dark:text-Applegreen'>Date Of Birth:</label>
            <input type='date' className='mb-2 p-4 w-full dark:text-Applegreen rounded-xl shadow-md outline-none text-xl hover:border dark:bg-black dark:border dark:border-Applegreen hover:border-Malacite'/>
            <input type='text' placeholder='Your Email' className='mb-5 p-4 w-full dark:text-Applegreen rounded-xl shadow-md outline-none text-xl hover:border dark:bg-black dark:border dark:border-Applegreen hover:border-Malacite'/>
   
               {/* buttons */}
             <div className='mb-2'>
               <Link to={"/step 1"}><button className='w-full text-xl outline-none font-bold hover:opacity-30 p-4 dark:bg-Applegreen bg-black text-white rounded-xl mb-2'>Sign Up</button></Link>
             </div>
             {/* buttons */}

            <p className='font-semibold text-lg dark:text-gray text-center mb-1'>Already have an Account?</p>
            <h1 className='text-sm text-center font-bold text-Applegreen'>Click Sign In To Enter Your Password.</h1>
        </form>
    </div>
  )
}

export default Signup