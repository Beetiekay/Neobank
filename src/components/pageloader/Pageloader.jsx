import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";


const Pageloader = () => {
const [open, setOpen] = useState(false);
  useEffect(() => {
  setOpen(true)
  setTimeout(() => {
   setOpen(false)
   }, 2000);
  },[])

  return (
    <>
         {
          open &&(
       <div className='w-full h-[100vh] flex justify-center backdrop-blur-sm bg-black bg-opacity-35 z-40 items-center absolute top-0 right-0 left-0'>

         <div className='dark:hidden'>
            <ClipLoader
           color={'#fefefe'}
           size={80}
           aria-label="Loading Spinner"
           data-testid="loader"
         />
         </div>

         {/* light & darktheme */}

        <div className=' dark:flex hidden'>
          <ClipLoader
           color={'#98cb09'}
           size={80}
           aria-label="Loading Spinner"
           data-testid="loader"
           
         />
        </div>

        
        </div>
       )}
    </>
  )
}

export default Pageloader