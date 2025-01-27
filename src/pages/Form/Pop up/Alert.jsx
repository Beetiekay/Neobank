import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { TbFaceId } from "react-icons/tb"



export default function Alert({Visible, onClose}) {
    if (!Visible) return null;

   
  return(
    <div className='w-full fixed inset-0 z-10 dark:bg-black bg-Antiflashwhite px-3'>
      <div className='flex justify-between items-center min-h-16 mb-4'>
        <h1 className='font-semibold text-3xl dark:text-Applegreen'>Identification</h1>
        <Link onClick={onClose} className='font-bold text-xl dark:text-gray hover:opacity-30'>Skip</Link>
      </div>

      <div className='w-[96%] mb-5'>
        <p className='font-semibold text-lg opacity-80 dark:text-gray'>Do you want to use Face ID on authentication on Neobank.</p>
      </div>

      <div className='w-full h-[65vh] flex justify-center items-center text-Applegreen mb-6 '><TbFaceId className='text-[10rem]'/></div>

      <div><button className='w-[80%] absolute left-8 right-0 bottom-8 p-4 font-semibold text-lg outline-none hover:opacity-40 dark:bg-Applegreen bg-black text-Antiflashwhite rounded-3xl'>Use Face ID</button></div>
    </div>
  )};