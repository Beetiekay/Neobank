import React from 'react'
import { FaCloudDownloadAlt, FaCreditCard, FaIdCard, FaSnowflake } from 'react-icons/fa'

const Buttons = () => {
  return (
    <div className='w-full px-4 mt-3 mb-3 flex justify-between'>
        {/* Top Up */}
        <div className='flex '>
            <div className='hover:opacity-50 hover:scale-90'>
                <div className='flex justify-center'><button className='p-3 rounded-full bg-Applegreen bg-opacity-65 mb-2'><FaCloudDownloadAlt size={30}/></button></div>
                <p className='text-sm text-center font-semibold dark:text-Applegreen'>Top Up</p>
            </div>
        </div>

        {/* Card Details */}
        <div className='flex '>
            <div className='hover:opacity-50 hover:scale-90'>
            <div className='flex justify-center'><button className='p-3 rounded-full bg-Applegreen bg-opacity-65 mb-2'><FaCreditCard size={30}/></button></div>
                <p className='text-sm text-center font-semibold dark:text-Applegreen'>Card Details</p>
            </div>
        </div>

        {/* Add Card */}
        <div className='flex '>
            <div className='hover:opacity-50 hover:scale-90'>
            <div className='flex justify-center'><button className='p-3 rounded-full bg-Applegreen bg-opacity-65 mb-2'><FaIdCard size={30}/></button></div>
                <p className='text-sm text-center font-semibold dark:text-Applegreen'>Add Card</p>
            </div>
        </div>

        {/* Freeze */}
        <div className='flex '>
            <div className='hover:opacity-50 hover:scale-90'>
            <div className='flex justify-center'><button className='p-3 rounded-full bg-Applegreen bg-opacity-65 mb-2'><FaSnowflake size={30}/></button></div>
                <p className='text-sm text-center font-semibold dark:text-Applegreen'>freeze</p>
            </div>
        </div>
    </div>
  )
}

export default Buttons