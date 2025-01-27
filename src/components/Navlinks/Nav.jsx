import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import {SiNetflix} from "react-icons/si"
import {GrSettingsOption, GrTransaction} from "react-icons/gr"
import user from "../../assets/user.png"

const Nav = () => {
   let {pathname} = useLocation()
   let subpage = pathname.split('/')?.[1]

   function Links (type = null){
      let classes = 'p-2 rounded-2xl'
      if(subpage === ''){
        subpage ="home"
      }

      if(type === subpage){
        classes += " dark:text-Applegreen "
      }else{
        classes += " text-gray dark:text-gray"
      }
      return classes
   }

  return (
    <div className='absolute bottom-0 w-full z-50'>
          <ul className='px-2 flex justify-between bg-white dark:bg-black'>
          <Link to={"/home"}>
            <button className={Links('home')}>
                <div className='flex justify-center items-center mb-2'><FaHome size={30}/></div>
                <li className='font-semibold'>Home</li>
            </button>
           </Link>
            
           <Link to={"/map"}>
            <button className={Links('map')}>
                <div className='flex justify-center items-center mb-2'><SiNetflix size={30}/></div>
                <li className='font-semibold'>Map</li>
            </button>
           </Link>

           <Link to={"/transfer"}>
            <button className={Links('transfer')}>
                <div className='flex justify-center items-center mb-2'><GrTransaction size={30}/></div>
                <li className='font-semibold'>Transfer</li>
            </button>
           </Link>

           <Link to={"/settings"}>
            <button className={Links('settings')}>
                <div className='flex justify-center items-center mb-2'><GrSettingsOption size={30}/></div>
                <li className='font-semibold'>Settings</li>
            </button>
           </Link>

           <Link to={"/profile"}>
             <button className={Links('profile')}>
                <div className='flex justify-center items-center mb-2'><img src={user} className='w-8 rounded-full'/></div>
                <li className='font-semibold'>Profile</li>
            </button>
           </Link>
        </ul>
    </div>
  )
}

export default Nav