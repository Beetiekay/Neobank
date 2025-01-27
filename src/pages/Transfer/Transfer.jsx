import React from 'react'
import Nav from '../../components/Navlinks/Nav'
import { FaChevronRight, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import {AiFillGithub, AiOutlineAmazon, AiOutlineBackward, AiOutlineSlack} from "react-icons/ai"
import { Link } from 'react-router-dom'
import Buttons from './Buttons'
import Pageloader from '../../components/pageloader/Pageloader'

const Transfer = () => {
  return (
    <div className='w-full bg-Antiflashwhite dark:bg-black'>

     <div className='w-full h-[90vh] overflow-x-auto'>
      
        {/* balnace */}
         <div className='w-full px-3 mt-2'>
          <div className='w-full h-[20vh] bg-white dark:bg-Antiflashwhite dark:bg-opacity-10 shadow-md rounded-2xl p-4'>
            <p className='text-gray font-semibold text-lg mb-6'>Your balance</p>
             <div className='relative'>
               <h1 className='font-semibold text-[30px] dark:text-Antiflashwhite mb-2'>$ 3,200.00</h1>
               {/* hidden and display */}
               <div className='mb-8'>
                          <input type='checkbox' className='peer absolute right-5 top-4 w-6 h-6 z-40 opacity-0 cursor-pointer transition-all'/>
                           <div className='absolute right-5 z-30 top-4 peer-checked:hidden dark:text-Antiflashwhite'><FaEye size={25}/></div>
                           <div className='absolute z-30 right-5 top-4 dark:text-Antiflashwhite hidden peer-checked:flex'><FaEyeSlash size={25}/></div>
                           {/* background */}
                           <div className='absolute top-0 w-72 h-12 dark:backdrop-blur-2xl bg-white dark:bg-opacity-0 p-2 hidden peer-checked:flex'>
                             <p className='text-5xl font-semibold dark:text-Antiflashwhite'>* *******</p>
                           </div>
               </div>
               {/* hidden and display */}

             </div>
          </div>
         </div>
        {/* balnace */}
        
        {/* Transactions buttons */}
        <div><Buttons/></div>
        {/* Transactions buttons */}
        

        {/* pageloader */}
        <div className='z-0'><Pageloader/></div>
        {/* pageloader */}
        
         {/* Spending */}
          <div className='px-2 mb-12'>
            <div className='w-full h-[48vh] bg-white dark:bg-opacity-10 rounded-2xl shadow-md p-5'>
            <div className='flex justify-between mb-4'>
              <h1 className='text-xl font-semibold dark:text-white'>Transactions</h1>
              <p className='text-xl font-semibold dark:text-white'>See all</p>
            </div>
        
          {/* products */}
            <div className='w-full'>
           {/* p1 */}
           <div className='flex justify-between items-center mb-5 hover:opacity-35 hover:scale-95'>
              <div><button className='p-2 rounded-2xl bg-Antiflashwhite border dark:bg-Applegreen'><AiOutlineSlack size={30}/></button></div>
                <div>
                  <h1 className='font-semibold text-xl dark:text-white'>Starbucks Coffee</h1>
                  <p className='text-sm font-semibold text-gray'>October 17, 09:00 PM</p>
                </div>
                
                <div>
                <h1 className='font-semibold text-xl dark:text-white'>-$44.80</h1>
                <p className='text-sm text-center font-semibold bg-Applegreen p-1 rounded-2xl'>+$1.65</p>
                </div>
            </div>
        
           {/* p2 */}
              <div className='flex justify-between items-center mb-5 hover:opacity-35 hover:scale-95'>
                <div><button className='p-2 rounded-2xl bg-Antiflashwhite border dark:bg-Applegreen'><AiOutlineBackward size={30}/></button></div>
                <div>
                  <h1 className='font-semibold text-xl dark:text-white'>Dunkin'Donuts</h1>
                  <p className='text-sm font-semibold text-gray'>October 15, 02:00 PM</p>
                </div>
                
                <div>
                <h1 className='font-semibold text-xl dark:text-white'>-$44.80</h1>
                </div>
              </div>
        
            {/* p3 */}
              <div className='flex justify-between items-center hover:opacity-35 hover:scale-95 mb-5'>
                <div><button className='p-2 rounded-2xl bg-Antiflashwhite border dark:bg-Applegreen'><AiOutlineAmazon size={30}/></button></div>
                <div>
                  <h1 className='font-semibold text-xl dark:text-white'>Amazon</h1>
                  <p className='text-sm font-semibold text-gray'>October 11, 09:00 PM</p>
                </div>
                
                <div>
                <h1 className='font-semibold text-xl dark:text-white'>-$44.80</h1>
                <p className='text-sm text-center font-semibold bg-Applegreen p-1 rounded-2xl'>+$1.65</p>
                </div>
              </div>
              
              {/* p4 */}
              <div className='flex justify-between items-center hover:opacity-35 hover:scale-95'>
                <div><button className='p-2 rounded-2xl bg-Antiflashwhite border dark:bg-Applegreen'><AiFillGithub size={30}/></button></div>
                <div>
                  <h1 className='font-semibold text-xl dark:text-white'>Github Premium</h1>
                  <p className='text-sm font-semibold text-gray'>October 27, 04:00 PM</p>
                </div>
                
                <div>
                <h1 className='font-semibold text-xl dark:text-white'>-$24.80</h1>
                <p className='text-sm text-center font-semibold bg-Applegreen p-1 rounded-2xl'>+$1.95</p>
                </div>
              </div>

            </div>
            </div>
          </div>
          {/* Spending */}

     </div>

     {/* Nav links */}
     <div className='w-full'><Nav/></div>
     {/* Nav links */}
    </div>
  )
}

export default Transfer