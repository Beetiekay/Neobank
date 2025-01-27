import React from 'react'

const Toggle = () => {
  return (
    <div className='relative'>
      <input type="checkbox" className='peer transition-all absolute z-20 opacity-0 right-5 top-1 w-10 h-8'/>
      <div className='w-[15vw] h-8 relative dark:bg-opacity-5 peer-checked:bg-Applegreen peer-checked:justify-end flex items-center rounded-3xl border border-gray shadow-md bg-Antiflashwhite'><div className='w-6 h-6 ml-1 peer-checked:ml-6 bg-Antiflashwhite border-2 shadow-md border-gray rounded-full'></div></div>
    </div>
  )
}

export default Toggle