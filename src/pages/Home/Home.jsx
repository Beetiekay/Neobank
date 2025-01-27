import React, { useEffect } from 'react'
import { FaEye, FaEyeSlash, FaRegBell } from 'react-icons/fa'
import {AiOutlineAmazon, AiOutlineBackward, AiOutlineSlack} from "react-icons/ai"
import { Link } from 'react-router-dom'
import Nav from '../../components/Navlinks/Nav'
import Card from './Card'
import Pageloader from '../../components/pageloader/Pageloader'
import Popup from '../../components/Advert/Popup'


const Home = () => {
   
  

  return (
    <div className='w-full h-full bg-Antiflashwhite dark:bg-black '>
     {/* Header */}
      <div className='w-full  flex justify-between items-center min-h-20 px-2 m-0'>
      <div>
        <h1 className='text-2xl dark:text-Applegreen font-semibold'>Good Morning, Bishir</h1>
        <p className='text-lg text-gray '>Welcome to Neobank</p>
      </div>
      
      <div>
         <Link to={"/notification"}>
         <button className='p-2 border-2 border-gray dark:bg-white dark:bg-opacity-10 dark:border-none rounded-2xl relative outline-none'>
          <FaRegBell size={30} className='dark:text-gray'/>
          <div className='w-4 h-4 bg-Applegreen rounded-full absolute top-3 right-2 border-2 border-Antiflashwhite'></div>
        </button>
         </Link>
      </div>
      </div>
     {/* Header */}

       <div className='w-full h-[85vh] overflow-y-auto'>

         {/* balnace */}
          <div className='w-full px-3'>
           <div className='w-full h-[24vh] bg-white dark:bg-Antiflashwhite dark:bg-opacity-10 shadow-md rounded-2xl p-4'>
             <p className='text-gray font-semibold text-lg mb-2'>Your balance</p>
              <div className='relative'>
                <h1 className='font-semibold text-[30px] dark:text-Antiflashwhite mb-2'>$ 3,200.00</h1>
                {/* hidden and display */}
                <div>
                  <input type='checkbox' className='peer absolute right-5 top-4 w-6 h-6 z-40 opacity-0 cursor-pointer transition-all'/>
                   <div className='absolute right-5 z-30 top-4 peer-checked:hidden dark:text-Antiflashwhite'><FaEye size={25}/></div>
                   <div className='absolute z-30 right-5 top-4 dark:text-Antiflashwhite hidden peer-checked:flex'><FaEyeSlash size={25}/></div>
                   {/* background */}
                   <div className='absolute top-0 w-72 h-12 dark:backdrop-blur-2xl bg-white dark:bg-opacity-0 p-2 hidden peer-checked:flex'>
                     <p className='text-5xl font-semibold dark:text-Antiflashwhite'>* *******</p>
                   </div>
                </div>
                {/* hidden and display */}
                <Link to={"/add money"}><button className='w-full text-xl outline-none font-semibold hover:opacity-30 p-3 dark:bg-Antiflashwhite dark:text-black bg-black text-white rounded-3xl mb-2'>Add money</button></Link>
              </div>
           </div>
          </div>
         {/* balnace */}

            {/* pageloader */}
             <div className='z-30'>
              <Pageloader/>
             </div>
             <div className='z-0'>
               <Popup/>
             </div>
            {/* pageloader */}
                                            
            {/* card section */}
            <div className='w-full px-2 mb-2 relative'>
           <div className='flex justify-between items-center p-1 dark:text-gray'>
            <h1 className='text-xl font-semibold'>Your Cards</h1>
            <Link className='flex items-center'><p className='text-xl font-bold '><span className='text-3xl'>+</span> New card</p></Link>
           </div>
           {/* card scroll */}
           <div className='w-full overflow-x-auto'>
             <Card/>
           </div>
            <div className='w-[96%] h-3 absolute -bottom-1 z-30 dark:bg-black bg-Antiflashwhite'></div>
            </div>
            {/* card section */}

            {/* Spending */}
            <div className='px-2 mb-24'>
            <div className='w-full h-[37vh] bg-white dark:bg-opacity-10 rounded-2xl shadow-md p-5'>
            <div className='flex justify-between mb-4'>
              <h1 className='text-xl font-bold dark:text-white'>Transactions</h1>
              <p className='text-xl font-bold dark:text-white'>See all</p>
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
              <div className='flex justify-between items-center hover:opacity-35 hover:scale-95'>
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

export default Home