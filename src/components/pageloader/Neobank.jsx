import React, { useEffect, useState } from 'react'
import layer from "../../assets/Neolayer.png"
import logo from "../../assets/N3.png"
import logo2 from "../../assets/N4.png"
import DarkT from '../DarkTheme/DarkT';


const NeoBank = () => {
const [open, setOpen] = useState(false);
  useEffect(() => {
  setOpen(true)
  setTimeout(() => {
   setOpen(false)
   }, 3000);
  },[])

  return (
    <div>
        <div className='absolute top-2 left-2'><DarkT/></div>
         {
          open &&(
       <div className='w-full h-[100vh] flex justify-center bg-Applegreen dark:bg-black z-40 items-center absolute top-0 right-0 left-0'>

         <div className='relative z-20 p-2 '>
           <div className='flex justify-center mb-5'>
            <img src={logo} className='w-40 hidden dark:flex'/>
            <img src={logo2} className='w-40 dark:hidden'/>
          </div>
           
           <p className='text-2xl font-semibold text-white text-center -mt-5'>Trust But Verify</p>
         </div> <img src={layer} className='absolute object-cover dark:opacity-20 opacity-100 w-full h-full'/>
        </div>
       
       )}
    </div>
  )
}

export default NeoBank