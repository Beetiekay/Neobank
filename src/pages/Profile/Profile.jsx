import React from 'react'
import Nav from '../../components/Navlinks/Nav'
import user from "../../assets/user.png"
import { FaBirthdayCake, FaEdit, FaUser } from 'react-icons/fa'
import Details from './Details'
import { Link } from 'react-router-dom'
import { CiLogout } from 'react-icons/ci'
import Pageloader from '../../components/pageloader/Pageloader'

const Profile = () => {
  return (
    <div className='w-full h-[100vh] bg-Antiflashwhite dark:bg-black'>
     <h1 className='dark:text-gray text-2xl font-semibold px-2 mb-2 text-center'>Profile</h1>

      <div className='w-full h-[84vh] overflow-y-auto px-4'>
       
       <div className='flex justify-center relative mb-5'>
         <button className='outline-none'><img src={user} className='w-36'/></button>
         <button className='absolute  dark:bg-opacity-30 text-gray dark:text-white bottom-4 right-24 p-2 rounded-2xl bg-white shadow-md outline-none'><FaEdit size={24}/></button>
       </div>
        
       <div className=' bg-white dark:bg-opacity-10 rounded-2xl p-4 shadow-md mb-2'> 
       <div className='w-full flex justify-between items-center'>
        <h1 className='text-2xl font-semibold dark:text-Applegreen mb-4'>Personal info</h1>
        <p className='text-xl font-semibold dark:text-Applegreen mb-4'>Edit</p>
       </div>
         <div><Details/></div>
       </div>

        {/* pageloader */}
        <div className='z-0'><Pageloader/></div>
        {/* pageloader */}

       <div className=' bg-white dark:bg-opacity-10 rounded-2xl p-4 shadow-md'> 
       <h1 className='text-2xl font-semibold dark:text-Applegreen mb-4'>Account info</h1>

        <div className='flex gap-5 items-center h-20 p-4  mb-2'>
          <div><FaUser size={30} className='text-gray dark:text-Applegreen'/></div>
          <div>
            <h1 className='text-lg font-semibold dark:text-white'>Male</h1>
            <p className='text-sm dark:text-gray'>Gender</p>
          </div>
        </div>

        <div className='flex gap-5 items-center h-20 p-4  mb-2'>
          <div><FaBirthdayCake size={30} className='text-gray dark:text-Applegreen'/></div>
          <div>
            <h1 className='text-lg font-semibold dark:text-white'>10 October 1997</h1>
            <p className='text-sm dark:text-gray'>Date of birth</p>
          </div>
        </div>
        
        <div className='flex gap-5 items-center h-20 p-4  mb-2'>
          <div><CiLogout size={30} className='text-gray dark:text-Applegreen'/></div>
          <div>
            <Link to={"/"}><h1 className='text-lg font-semibold dark:text-white'>Log out</h1></Link>
            <p className='text-sm dark:text-gray'>Log out add or create a new account.</p>
          </div>
        </div>

       </div>
       <div className='w-full h-32'></div>

      </div>

     {/* Nav links */}
     <div className='w-full fixed bottom-0'><Nav/></div>
     {/* Nav links */}
    </div>
  )
}

export default Profile