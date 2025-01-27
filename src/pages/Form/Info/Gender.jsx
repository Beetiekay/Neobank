import React from 'react'
import {FaCheckCircle, FaChevronLeft, FaQuestion} from "react-icons/fa"
import { Link } from 'react-router-dom'
import Phonenumber from './Phonenumber'
import male from "../../../assets/male.png"
import female from "../../../assets/female.png"
import Pageloader from '../../../components/pageloader/Pageloader'

const Gender = () => {
  return (
    <div className='w-full h-[100vh] overflow-y-auto dark:bg-black'>
        {/* header */}
         <div className='flex min-h-20 justify-between items-center px-3 '>
            <Link to={"/"}><button className='p-2 border border-gray hover:opacity-30 hover:bg-black  dark:bg-Applegreen dark:border-Applegreen rounded-xl'><FaChevronLeft size={25}/></button></Link>
            <p className='text-gray font-semibold text-lg'>1 of 3</p>
            <button className='p-2 border border-gray dark:hover:bg-Applegreen hover:text-gray dark:hover:opacity-30 hover:bg-black  dark:bg-Applegreen dark:border-Applegreen rounded-xl'><FaQuestion size={25}/></button>
         </div>
         {/* header */}

         <div><Phonenumber/></div>

            {/* pageloader */}
            <div className='z-0'><Pageloader/></div>
            {/* pageloader */}

         <h1 className='text-xl font-semibold dark:text-Applegreen mb-2 text-center'>Select Your Gender</h1>

         <div className='grid grid-cols-2 gap-2 px-2 mt-8'>
         {/* number 1 */}
          <div>
            <div className='relative'>
                <div className='w-full rounded-2xl border border-Applegreen'>
                <input type='checkbox' className='peer absolute w-full h-full z-20 transition-transform opacity-0 cursor-pointer'/>
                <div className='hidden peer-checked:flex'><FaCheckCircle size={35} className='text-Applegreen absolute top-3 left-2'/></div>
                 <img src={male} className='w-full'/>
                 <p className='dark:text-Applegreen text-center font-semibold text-lg'>Male</p>
                </div>
            </div>
         </div>
         {/* number 2 */}
          <div>
            <div className='relative'>
                <div className='w-full rounded-2xl border border-Applegreen'>
                <input type='checkbox' className='peer absolute w-full h-full z-20 transition-transform opacity-0 cursor-pointer'/>
                <div className='hidden peer-checked:flex'><FaCheckCircle size={35} className='text-Applegreen absolute top-3 left-2'/></div>
                 <img src={female} className='w-full'/>
                 <p className='dark:text-Applegreen font-semibold text-lg text-center'>Female</p>
                </div>
            </div>
          </div>
         </div>

         <Link to={"/step 2"} className='absolute bottom-5 w-full p-2'><button className='w-full text-xl outline-none font-bold hover:opacity-30 p-4 dark:bg-Applegreen bg-black text-white rounded-xl mb-2'>Continue</button></Link>
    </div>
  )
}

export default Gender