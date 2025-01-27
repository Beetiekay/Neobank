import React from 'react'
import clipart from "../../assets/clipart.png"
import layer from "../../assets/Neolayer.png"
import { FaEye } from 'react-icons/fa'

const Card = () => {
  return (
    <div className='w-[270vw] grid grid-cols-3 mb-2'>
      {/* card 1 */}
      <div className='p-2'>
        <div className='w-full h-[25vh] bg-opacity-85 bg-Applegreen dark:bg-opacity-50 rounded-3xl relative overflow-hidden'>
          <div className='relative z-30 p-2 flex justify-between items-center'>
            <h1 className='text-[40px] text-Antiflashwhite font-bold'>N.</h1>
            <div className='flex'>
                <div className='w-7 h-7 bg-Amaranth rounded-full relative left-4'></div>
                <div className='w-7 h-7 bg-orange rounded-full'></div>
            </div>
          </div>
            
            <div className='w-full p-2 relative z-20 -top-3'><img src={clipart} className='w-12'/></div>

           <div className='w-full absolute  bottom-1 z-30 p-2 flex justify-between items-center'>
             <div>
              <p className='font-semibold text-lg dark:text-Antiflashwhite text-gray'>Debit Card</p>
              <span className='text-2xl dark:text-Antiflashwhite flex items-center gap-1 font-semibold'><p className='text-2xl font-bold -mt-3'>.... </p>4568</span>
             </div>

            <div>
            <button className='flex gap-2 p-2 rounded-2xl bg-Antiflashwhite'>
               <FaEye size={25}/>
               <p>Details</p>
             </button>
            </div> 
           </div>

          {/* layer */}
          <img src={layer} className='absolute top-0 opacity-60'/>
        </div>
      </div>

      {/* card 2 */}
      <div className='p-2'>
        <div className='w-full h-[25vh] dark:borde dark:border-gray  bg-black rounded-3xl relative overflow-hidden'>
          <div className='relative z-30 p-2 flex justify-between items-center'>
            <h1 className='text-[40px] font-bold text-white'>N.</h1>
            <div className='flex'>
                <div className='w-7 h-7 bg-Amaranth rounded-full relative left-4'></div>
                <div className='w-7 h-7 bg-orange rounded-full'></div>
            </div>
          </div>
            
            <div className='w-full p-2 relative z-20 -top-3 '><img src={clipart} className='w-12'/></div>

           <div className='w-full absolute bottom-1 z-30 p-2 flex justify-between items-center'>
             <div>
              <p className='font-semibold text-lg  text-Antiflashwhite'>Debit Card</p>
              <span className='text-2xl flex items-center gap-1 font-semibold text-Antiflashwhite'><p className='text-2xl font-bold -mt-3'>.... </p>4568</span>
             </div>

            <div>
            <button className='flex gap-2 p-2 rounded-2xl bg-Antiflashwhite'>
               <FaEye size={25}/>
               <p>Details</p>
             </button>
            </div> 
           </div>

          {/* layer */}
          <img src={layer} className='absolute top-0 opacity-40'/>
        </div>
      </div>

       {/* card 2 */}
       <div className='p-2'>
        <div className='w-full h-[25vh] dark:borde dark:border-gray dark:bg-opacity-75 bg-Amaranth rounded-3xl relative overflow-hidden'>
          <div className='relative z-30 p-2 flex justify-between items-center'>
            <h1 className='text-[40px] font-bold text-white'>N.</h1>
            <div className='flex'>
                <div className='w-7 h-7 bg-Amaranth rounded-full relative left-4'></div>
                <div className='w-7 h-7 bg-orange rounded-full'></div>
            </div>
          </div>
            
            <div className='w-full p-2 relative z-20 -top-3 '><img src={clipart} className='w-12'/></div>

           <div className='w-full absolute bottom-1 z-30 p-2 flex justify-between items-center'>
             <div>
              <p className='font-semibold text-lg  text-Antiflashwhite'>Debit Card</p>
              <span className='text-2xl flex items-center gap-1 font-semibold text-Antiflashwhite'><p className='text-2xl font-bold -mt-3'>.... </p>4568</span>
             </div>

            <div>
            <button className='flex gap-2 p-2 rounded-2xl bg-Antiflashwhite'>
               <FaEye size={25}/>
               <p>Details</p>
             </button>
            </div> 
           </div>

          {/* layer */}
          <img src={layer} className='absolute top-0 opacity-40'/>
        </div>
      </div>
    </div>
  )
}

export default Card