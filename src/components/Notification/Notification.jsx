import React, { useEffect } from 'react'
import {MdChevronLeft, MdEqualizer} from "react-icons/md"
import { Link } from 'react-router-dom'

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Notification = () => {

        useEffect(() => {
          AOS.init({duration:1200})
       }) 

  return (

    <div data-aos="zoom-up" className='w-full h-[100vh] bg-Antiflashwhite dark:bg-black'>
        <div className='flex justify-between p-1'>
         <div className='flex items-center dark:text-Applegreen cursor-pointer'><Link to={"/home"} ><MdChevronLeft size={40}/></Link></div>
         <div>
            <h1 className='text-2xl font-semibold dark:text-Applegreen mb-2'>Notification</h1>        
        </div>
        <div className='flex items-center'><button className='p-2 outline-none bg-Applegreen rounded-full bg-opacity-35'><MdEqualizer size={20}/></button></div>
        </div> 
        <p className='text-sm text-center font-semibold text-gray'>You have <span className='text-Applegreen'>0 Notifications</span> today.</p>

    </div>
  )
}

export default Notification