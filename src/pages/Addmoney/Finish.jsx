import React, { useEffect, useState } from 'react'
import { GrStatusGood } from 'react-icons/gr';
import { FaChevronLeft } from 'react-icons/fa';
import ClipLoader from "react-spinners/ClipLoader";


//aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Finish = () => {
  
     useEffect(() => {
     AOS.init({duration:2500})
     });

     const [open, setOpen] = useState(false);
       useEffect(() => {
       setOpen(true)
       setTimeout(() => {
        setOpen(false)
        }, 4000);
       },[])

  return (
    <div data-aos="fade-in" className='w-full h-[100vh] bg-Antiflashwhite dark:bg-black'>
       {/* H */}
        <div className='p-2 flex items-center gap-16 mb-5'>
            <Link to={"/direct deposit"}><button className='p-2 border border-gray hover:opacity-30 hover:bg-black  dark:bg-Applegreen dark:border-Applegreen rounded-xl'><FaChevronLeft size={25}/></button></Link>
        </div>
       {/* H */}

       <div className='w-full h-[80vh] ' >
          <div data-aos="flip-left" className='flex justify-center mt-2 mb-3'>
          <GrStatusGood className='text-[10rem] text-Applegreen'/>
          </div>
          <p className='text-gray px-2 text-center font-semibold opacity-80 mb-2'>After copying all details. find and give this info to your employer.</p>

          <div className='absolute left-0 right-0 bottom-20 px-5'>
           <button className='w-[100%] mb-4 p-4 font-semibold text-lg outline-none hover:opacity-40 dark:bg-Applegreen bg-black text-Antiflashwhite rounded-3xl'>Employer research</button>

             <div className='relative'>
              <Link to={"/home"}><button className='w-[100%]  p-4 font-semibold text-lg outline-none hover:opacity-40 dark:bg-Applegreen bg-black text-Antiflashwhite rounded-3xl'>Back to home</button></Link>
              {
               open &&(
               <button className='w-[100%] absolute top-3 left-0 px-4 font-semibold text-lg outline-none hover:opacity-40 dark:bg-Applegreen bg-black text-Antiflashwhite rounded-3xl'><ClipLoader color={'#fefefe'} size={40}
                aria-label="Loading Spinner" data-testid="loader"/></button>
              )}
             </div>

          </div>
       </div>
    </div>
  )
}

export default Finish