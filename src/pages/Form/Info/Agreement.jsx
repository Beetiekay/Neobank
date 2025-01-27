import React from 'react'
import {FaChevronLeft, FaQuestion} from "react-icons/fa"
import { Link } from 'react-router-dom'
import Pageloader from '../../../components/pageloader/Pageloader'

const Agreement = () => {
  return (
    <div className='w-full h-[100vh] dark:bg-black'>
         {/* header */}
           <div className='flex justify-between items-center min-h-20 px-3 '>
           <Link to={"/step 3"}><button className='p-2 border border-gray hover:opacity-30 hover:bg-black  dark:bg-Applegreen dark:border-Applegreen rounded-xl'><FaChevronLeft size={25}/></button></Link>
            <p className='text-gray font-semibold text-lg'>4 of 4</p>
            <button className='p-2 border border-gray dark:hover:bg-Applegreen hover:text-gray dark:hover:opacity-30 hover:bg-black  dark:bg-Applegreen dark:border-Applegreen rounded-xl'><FaQuestion size={25}/></button>
           </div>
        {/* header */}
         
        {/* pageloader */}
        <div className='z-0'><Pageloader/></div>
        {/* pageloader */}

        <div className='h-[75vh] overflow-y-auto'>
        <h1 className='text-3xl font-semibold p-2 dark:text-Applegreen mb-2'>Agreement</h1>
        <p className='text-lg font-semibold opacity-85 dark:text-gray mb-4 px-2'>
          Please review the following documents.By pressing "I agree" You acknowledge that you are applying for a deposit
          account and charge card eith evolve Bank & Trust, Member FDIC, that funds in your deposit account may used to
          pay your charge  card balance if you fail to make other payments arrangements, and that you agree to the documents
          below, You are also authorizing us to save your personal information with Neobank.
        </p>

        <p className='text-lg font-semibold opacity-85 dark:text-gray mb-1 px-2'>
            Evolve Bank & Trust <span className='font-bold dark:text-Applegreen'>Electronic communication Consent.</span>
        </p>

        <p className='text-lg font-semibold opacity-85 dark:text-gray mb-3 px-2'>
            Evolve Bank & Trust <span className='font-bold dark:text-Applegreen'>Secured</span> and
             <span className='font-bold dark:text-Applegreen'>Charge Card Account Disclosures and Agreement</span>
        </p>
         
        <p className='text-lg font-semibold opacity-85 dark:text-gray mb-1 px-2'>
            Evolve Bank & Trust <span className='font-bold dark:text-Applegreen'>Privacy Policy</span>
        </p>

        <p className='text-lg font-semibold opacity-85 dark:text-gray mb-1 px-2'>
            Neobank Rewards Program <span className='font-bold dark:text-Applegreen'>Terms and conditions</span>
        </p>

        <p className='text-lg font-semibold opacity-85 dark:text-gray p-2 mb-14'>With your consent, we may use your persoanl information to offer additional</p>
        </div>
        <Link to={"/home"} className='absolute bottom-5 w-full p-2'><button className='w-full text-xl outline-none font-bold hover:opacity-30 p-4 dark:bg-Applegreen bg-black text-white rounded-xl mb-2'>I agree</button></Link>
    </div>
  )
}

export default Agreement