import React from 'react'
import data from './Data'


const Details = () => {
  return (
    <div>
         {data.profileData.map((item, index) =>{
              return(
                 <div className='flex justify-between items-center h-20  p-4  mb-2'>
                 <div className='w-full flex gap-5'>
                 <div className=' flex items-center'>{item.icon && <item.icon size={27} className='text-gray dark:text-Applegreen'/>}</div>
                 <div>
                   <h1 className='text-lg font-semibold dark:text-white'>{item.name}</h1>
                   <p className='text-sm dark:text-gray'>{item.fullname}</p>
                 </div>
                 </div>
                </div>
                )
            })}
    </div>
  )
}

export default Details