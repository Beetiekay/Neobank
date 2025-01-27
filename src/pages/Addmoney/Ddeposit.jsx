import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaEllipsisH } from 'react-icons/fa'
import {MdArrowDropUp} from "react-icons/md"

//images
import logo1 from "../../assets/neo3.png"
import logo2 from "../../assets/neo2.png"
import logo3 from "../../assets/neo1.png"
import logo4 from "../../assets/neo4.png"

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Ddeposit = () => {
 useEffect(() => {
 AOS.init({duration:200})
 })
  return (
    <div data-aos="zoom-in" className='w-full h-[100vh] bg-Antiflashwhite dark:bg-black'>
       {/* H */}
        <div className='p-2 flex items-center gap-8 mb-3'>
           <Link to={"/add money"}><button className='p-2 border border-gray hover:opacity-30 hover:bg-black  dark:bg-Applegreen dark:border-Applegreen rounded-xl'><FaChevronLeft size={25}/></button></Link>
           <h1 className='font-semibold text-xl dark:text-gray text-center'>Set up direct deposit</h1>
       </div>
        {/* H */}

        <div className='w-full h-[70vh] p-2'>
          <h1 className='text-2xl font-semibold dark:text-Applegreen mb-1'>Do it yourself</h1>
          <p className='font-semibold text-gray text-lg mb-4'>Just give this info to your employer</p>

          <div className='relative mb-2'>
            <p className='text-gray text-lg font-semibold'>Routing Number</p>
           <input type='text' placeholder='03110D1279' value="031101D1279" className='mb-2 p-4 w-full rounded-xl dark:text-Applegreen shadow-md outline-none text-xl hover:border dark:bg-black dark:border dark:border-Applegreen hover:border-Malacite'/>
           <div className='absolute top-9 right-2' ><button className='p-2 w-20 font-semibold hover:opacity-35 scale-75 dark:text-Antiflashwhite bg-Antiflashwhite dark:bg-Applegreen outline-none rounded-3xl'>Copy</button></div>
          </div>

          <div className='relative mb-4'>
            <p className='text-gray text-lg font-semibold'>Account Number</p>
           <input type='text' placeholder='03110D1279' value="389158184360" className='mb-2 p-4 w-full rounded-xl dark:text-Applegreen shadow-md outline-none text-xl hover:border dark:bg-black dark:border dark:border-Applegreen hover:border-Malacite'/>
           <div className='absolute top-9 right-2' ><button className='p-2 w-20 hover:opacity-35 scale-75 font-semibold dark:text-Antiflashwhite bg-Antiflashwhite dark:bg-Applegreen outline-none rounded-3xl'>Copy</button></div>
          </div>

          <div>
            <h1 className='text-2xl font-semibold dark:text-Applegreen mb-2'>Have Neobank do it for you</h1>
            <p className='font-semibold text-gray text-lg mb-4'>Start by finding your employer. payroll provided. or unemployment agency</p>

            <div className='relative'>
              <div className='flex justify-around items-center'>
                <button className=' bg-Amaranth hover:opacity-35  shadow-md rounded-lg outline-none'><img src={logo1} className='w-14'/></button>
                <button className='py-2 bg-black bg-opacity-75 dark:border dark:border-gray hover:opacity-35  shadow-md rounded-lg outline-none'><img src={logo2} className='w-14'/></button>
                <button className=' bg-Amaranth hover:opacity-35  shadow-md rounded-lg outline-none'><img src={logo3} className='w-14'/></button>
                <button className='bg-black bg-opacity-45 dark:border dark:border-gray hover:opacity-35  shadow-md rounded-lg outline-none'><img src={logo4} className='w-14'/></button>
                <div>
                 <input type='checkbox' className='peer opacity-0 absolute right-2 outline-none top-2 w-12 h-10 transition-all'/>
                  <button className='p-4 border dark:border dark:border-gray dark:bg-black border-gray bg-white dark:text-Applegreen dark:bg-opacity-40 shadow-md rounded-lg outline-none'><FaEllipsisH size={20}/></button>
                  {/* contents */}
                  <div className='dark:bg-white bg-black p-2 transition-all ease-in-out duration-500 hidden peer-checked:flex rounded-lg mt-2 absolute'>
                    <MdArrowDropUp size={40} className='absolute dark:text-white -top-5'/>
                    <ul className='opacity-85 flex items-center'>
                      <li className='text-xs dark:text-black text-Antiflashwhite font-bold  hover:opacity-20'>View all</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className='absolute left-0 right-0 bottom-8 px-5'>
        <Link to={"/find employer"}><button className='w-[100%]  p-4 font-semibold text-lg outline-none hover:opacity-40 dark:bg-Applegreen bg-black text-Antiflashwhite rounded-3xl'>Find employer</button></Link>
        <div className='flex justify-center'><p className='w-[70%] font-semibold text-gray text-lg text-center'>Neobank app with atomic to switch direct deposit</p></div>
      </div>
        
    </div>
  )
}


export default Ddeposit