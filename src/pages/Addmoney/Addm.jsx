import React, { useEffect } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Addm = () => {
    useEffect(() => {
    AOS.init({duration:200})
    }) 
  return (
    <div data-aos="zoom-in"  className='w-full h-[100vh] bg-Antiflashwhite dark:bg-black '>
        {/* H */}
        <div className='p-2 flex items-center gap-16 mb-2'>
            <Link to={"/home"}><button className='p-2 border border-gray hover:opacity-30 hover:bg-black  dark:bg-Applegreen dark:border-Applegreen rounded-xl'><FaChevronLeft size={25}/></button></Link>
            <h1 className='font-semibold text-xl dark:text-gray text-center'>Add money</h1>
        </div>
         {/* H */}

        <div className='w-full h-[70vh] p-2'>
          <div className='flex justify-center mt-4 mb-4'>
            <div className='text-4xl font-semibold flex dark:text-Applegreen gap-1 items-center'><p>$</p><CountUp start={0} end={10000} delay={1} className='text-4xl'/></div>
          </div>
          <div className='flex justify-center mb-5'><button className='p-2 font-semibold dark:bg-gray bg-black bg-opacity-15 rounded-2xl'>Balance: $ 3,200.00</button></div>
          
           <h1 className='dark:text-gray font-semibold text-lg text-center mb-10'>
            Money will be added to your account from the following external account
           </h1>
           
           <p className='text-gray font-semibold opacity-80 mb-2'>Bank name</p>
           <h1 className='text-gray font-bold text-lg opacity-80 mb-4'>Bank Of America</h1>

           <p className='text-gray font-semibold opacity-80 mb-2'>Account Number</p>
           <h1 className='text-gray font-bold text-lg opacity-80 mb-4'>**** 4568</h1>
        </div>

        <div className='absolute left-0 right-0 bottom-8 px-5'><Link to={"/direct deposit"}><button className='w-[100%]  p-4 font-semibold text-lg outline-none hover:opacity-40 dark:bg-Applegreen bg-black text-Antiflashwhite rounded-3xl'>Add money</button></Link></div>
    </div>
  )
}

export default Addm