import React from 'react'
import data from "./Data"

const Contents = () => {
  return (
    <div className='mb-2'>
        {data.cardData.map((item, index) =>{
              return(
                    <div className='flex justify-between items-center h-20 bg-white dark:bg-opacity-10 rounded-2xl px-4 shadow-md mb-2'>
                      <div className='w-full flex gap-5'>
                      <div className=' flex items-center'>{item.icon && <item.icon size={27} className='text-gray dark:text-Applegreen'/>}</div>
                      <div>
                        <h1 className='text-lg font-semibold dark:text-white'>{item.title}</h1>
                        <p className='text-sm dark:text-gray'>{item.desc}</p>
                      </div>
                      </div>
                      <div>{item.Switch && <item.Switch/>}</div>
                    </div>
                )
            })}
    </div>
  )
}

export default Contents