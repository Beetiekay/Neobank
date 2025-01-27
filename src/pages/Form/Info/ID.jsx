import React from 'react'
import {FaChevronLeft, FaQuestion} from "react-icons/fa"
import { Link } from 'react-router-dom'
import Pageloader from '../../../components/pageloader/Pageloader'

const ID = () => {
  return (
    <div className='w-full h-[100vh] dark:bg-black'>
         {/* header */}
          <div className='flex justify-between min-h-20 items-center px-3 '>
         <Link to={"/step 2"}><button className='p-2 border border-gray hover:opacity-30 hover:bg-black  dark:bg-Applegreen dark:border-Applegreen rounded-xl'><FaChevronLeft size={25}/></button></Link>
         <p className='text-gray font-semibold text-lg'>3 of 4</p>
         <button className='p-2 border border-gray dark:hover:bg-Applegreen hover:text-gray dark:hover:opacity-30 hover:bg-black  dark:bg-Applegreen dark:border-Applegreen rounded-xl'><FaQuestion size={25}/></button>
          </div>
         {/* header */}
         

         {/* pageloader */}
        <div className='z-0'><Pageloader/></div>
        {/* pageloader */}

         <h1 className='text-2xl font-semibold px-2 dark:text-Applegreen mb-2'>Identity Check</h1>

        <p className='text-sm font-semibold opacity-85 dark:text-gray mb-5 px-2'>
            Please provide your social security number
        </p>

         <div className='px-2'><input type='text' placeholder='727-07-4426' className='mb-5 p-4 w-full dark:text-Applegreen rounded-xl shadow-md outline-none text-xl hover:border dark:bg-black dark:border dark:border-Applegreen hover:border-Malacite'/></div>

         <Link to={"/step 4"} className='absolute bottom-5 w-full p-2'><button className='w-full text-xl outline-none font-bold hover:opacity-30 p-4 dark:bg-Applegreen bg-black text-white rounded-xl mb-2'>Continue</button></Link>
    </div>
  )
}

export default ID