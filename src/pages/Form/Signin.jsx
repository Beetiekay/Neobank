import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from "../../assets/N3.png"
import logo2 from "../../assets/N4.png"
import Faceid from './Pop up/Faceid'
import Touch from './Pop/Touch'

const Signin = () => {
  return (
    <div className='px-2'>
          <form >
            {/* logo */}
            <div className='w-full flex justify-center -mt-5 mb-2'>
                 <div>
                    <img src={logo2} className='w-20 dark:hidden'/>
                    <img src={logo1} className='w-20 hidden dark:flex'/>
                </div>
            </div>
            {/* logo */}
    
            <input type='text' placeholder='Enter Your Mobile No./Email' className='mb-5 p-4 w-full dark:text-Applegreen rounded-xl shadow-md outline-none text-xl hover:border dark:bg-black dark:border dark:border-Applegreen hover:border-Malacite'/>
            <input type='text' placeholder='Enter 6-digit Password' className='mb-2 p-4 w-full rounded-xl dark:text-Applegreen shadow-md outline-none text-xl hover:border dark:bg-black dark:border dark:border-Applegreen hover:border-Malacite'/>
    
            <Link className='flex justify-end mb-5'><p className='font-semibold text-lg text-Applegreen cursor-pointer'>forgot Password?</p></Link>
    
            {/* buttons */}
             <div className='mb-2'>
               <Link to={"/home"}><button className='w-full text-xl outline-none font-bold hover:opacity-30 p-4 dark:bg-Applegreen bg-black text-white rounded-xl mb-2'>Sign In</button></Link>
             </div>
             {/* buttons */}
    
              
        </form>
         <div>
          {/* Face & touch */}
           <div className='grid grid-cols-2 gap-2 mb-5'>
              <Faceid/>
              <Touch/>
           </div>
             {/* Face & touch */}

            <p className='font-semibold dark:text-gray text-lg text-center mb-1'>Don't have a Neobank Account yet?</p>
            <h1 className='text-sm text-center font-bold text-Applegreen'>Click Sign Up To Create A New One.</h1>
        </div>
     </div>
  )
}

export default Signin