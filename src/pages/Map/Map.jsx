import React from 'react'
import Nav from '../../components/Navlinks/Nav'
import { FaChevronDown } from 'react-icons/fa'
import {IoIosCloseCircle} from "react-icons/io"
import Wmap from './Wmap'
import Pageloader from '../../components/pageloader/Pageloader'

const Map = () => {
  return (
    <div className='w-full bg-Antiflashwhite dark:bg-black'>
    <div className='w-full h-[90vh] overflow-y-auto'>

    <div className='w-full h-[89vh] overflow-hidden'>
     {/*map buttons */}
     <div className='w-full px-4 min-h-20 absolute flex justify-between items-center'>
      <button className='flex items-center gap-1 text-gray bg-white hover:bg-black dark:hover:bg-Applegreen p-2 rounded-xl border'>
        <p className='text-sm font-semibold'>Filters</p>
         <FaChevronDown size={16}/>
      </button>

      <button className='flex items-center gap-1 text-gray bg-black dark:hover:bg-Applegreen p-2 rounded-xl border'>
        <IoIosCloseCircle size={25}/>
        <p className='text-sm font-semibold'>Reward&ATM</p> 
      </button>

      <button className='flex items-center gap-1 text-gray bg-black dark:hover:bg-Applegreen p-2 rounded-xl border'>
        <IoIosCloseCircle size={25}/>
        <p className='text-sm font-semibold'>Open now</p>
      </button>
     </div>
     {/*map buttons */}
     <Wmap/>
    </div>
         
         {/* pageloader */}
         <div className='z-0'><Pageloader/></div>
          {/* pageloader */}

    </div>
     {/* Nav links */}
     <div className='w-full'><Nav/></div>
     {/* Nav links */}
    </div>
  )
}

export default Map