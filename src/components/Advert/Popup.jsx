import React, { useEffect, useState } from 'react'
import image from "../../assets/bt.png"
import { FaArrowCircleRight } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Popup = () => {
    const [open, setOpen] = useState(true);
      useEffect(() => {
      setOpen(false)

      setTimeout(() => {
       setOpen(true)

       }, 5000);
      },[])


  return (
    <div>   
     {
      open &&(
       <div className='w-full h-[100vh] flex justify-center items-center backdrop-blur-sm px-2 bg-black bg-opacity-20 z-40  absolute top-0 right-0 left-0'>
        <div className='absolute top-5 right-5'><button onClick={() => setOpen(false)} className='p-2 bg-Applegreen rounded-full outline-none'><MdClose size={20}/></button></div>
        <div className='w-full h-[30vh] flex justify-start items-end relative dark:bg-opacity-55 bg-Applegreen rounded-2xl'>
            <img src={image} className='w-32 scale-125 absolute -top-5 right-2 '/>
           <div className='w-[65%]'>
             <h1 className='text-2xl dark:text-Antiflashwhite relative -top-6 px-2 font-bold'>Simple Way Online Banking</h1>
             <p className='text-sm dark:text-Antiflashwhite relative -top-3  px-2 w-[80%]'>Make your busy life easier using our baking service.</p>

             <div className='px-2'><button onClick={() => setOpen(false)} className='text-xl flex items-center gap-2 outline-none font-bold p-4 bg-black text-white rounded-3xl mb-2'>Get Started <FaArrowCircleRight className='text-Antiflashwhite'/></button></div>
           </div>
        </div>
       </div>
     )}
    </div>
  )
}

export default Popup