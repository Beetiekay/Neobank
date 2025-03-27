import React from 'react'
import Nav from '../../components/Navlinks/Nav'
import DarkT from '../../components/DarkTheme/DarkT'
import Contents from './Contents'
import { CiCircleAlert, CiMinimize1 } from "react-icons/ci"
import Toggle from './Toggle'
import Pageloader from '../../components/pageloader/Pageloader'


const Settings = () => {
  return (
    <div className='w-full min-h-full bg-Antiflashwhite dark:bg-black'>
      {/* header */}
      <div className='w-full flex justify-end'>
      <div className='w-[65%] flex justify-between items-center px-2'>
        <h1 className='dark:text-gray text-2xl font-semibold text-center p-2 mb-2'>Settings</h1>
        <div><DarkT/></div>
      </div>
      </div>
     {/* header */}
     
     
      <div className='w-full h-[85vh] overflow-y-auto px-4'>
      <h1 className='text-2xl font-semibold dark:text-Applegreen mb-4'>Card Settings</h1>
       <div className='w-full'><Contents/></div>
           
        {/* pageloader */}
        <div className='z-0'><Pageloader/></div>
        {/* pageloader */}

       <h1 className='text-2xl font-semibold dark:text-Applegreen mb-4'>Notifications</h1>
       <div className='w-full mb-14'>

        <div className='flex justify-between items-center h-20 bg-white dark:bg-opacity-10 rounded-2xl p-4 shadow-md mb-2'>
          <div><CiCircleAlert size={30} className='text-gray dark:text-Applegreen'/></div>
          <div>
            <h1 className='text-lg font-semibold dark:text-white'>Balance alert</h1>
            <p className='text-sm dark:text-gray'>Switching balance alert</p>
          </div>
          <div><Toggle/></div>
        </div>
         
        <div className='flex justify-between items-center h-20 bg-white dark:bg-opacity-10 rounded-2xl p-4 shadow-md mb-2'>
          <div><CiMinimize1 size={30} className='text-gray dark:text-Applegreen'/></div>
          <div>
            <h1 className='text-lg font-semibold dark:text-white'>Debit alert</h1>
            <p className='text-sm dark:text-gray'>Switch on the debit alert</p>
          </div>
          <div><Toggle/></div>
        </div>
       </div>
      </div>

     {/* Nav links */}
     <div className='w-full fixed bottom-0'><Nav/></div>
     {/* Nav links */}
    </div>
  )
}

export default Settings