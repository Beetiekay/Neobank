import React, { useEffect, useState } from 'react'
import { HiFingerPrint } from "react-icons/hi2"
import Alert from './Alert';


const Touch = () => {
  const [ShowAlert, setShowAlert] = useState(false);

  const handleOnClose = () => setShowAlert(false);

 
 
  return (
    <div>
       <button onClick={() => setShowAlert(true)} className='w-full flex justify-center text-xl outline-none dark:bg-Applegreen font-bold  hover:opacity-30 p-4 bg-black text-white rounded-xl mb-2'>
            <div className='w-32 flex items-center gap-2'> 
            <HiFingerPrint size={25} className='animate-pulse'/><p>Touch Id</p>
            </div>
        </button>
        <Alert onClose={handleOnClose} Visible={ShowAlert}/>
    </div>
   
  )
}

export default Touch;