import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Signup from './Signup';
import Signin from './Signin';
import NeoBank from '../../components/pageloader/Neobank';


const Form = () => {
  return (
    <div className='w-full h-[100vh] dark:bg-black flex justify-center items-center'>
      <Tabs className="lg:w-[30%] md:w-[80%] w-full h-full bg-Antiflashwhite dark:bg-black">

        {/* Header */}
        <div className='w-full h-24 flex items-center justify-center mt-4 px-4 mb-10'>
        <TabList className="lg:w-[50%] md:w-[45%] w-65] shadow-md dark:bg-black dark:border dark:border-Applegreen bg-white rounded-2xl flex justify-between">
          <Tab className="outline-none "><button className='p-4 outline-none dark:hover:bg-Applegreen dark:text-Antiflashwhite hover:bg-black text-lg font-semibold hover:text-Antiflashwhite rounded-l-2xl'>Sign In</button></Tab>
          <Tab className="outline-none border-l-2 border-l-gray dark:border-l-Applegreen"><button className='p-4 outline-none dark:text-Antiflashwhite dark:hover:bg-Applegreen text-black text-center hover:bg-black text-lg font-semibold hover:text-Antiflashwhite rounded-r-2xl'>Sign Up</button></Tab>
        </TabList>
        </div>
        {/* Header */}
         
         {/* pageloader */}
         <div className='z-0'><NeoBank/></div>
          {/* pageloader */}

        {/* TB */}
         <TabPanel className="w-full">
          <Signin/>
        </TabPanel>
             {/* sign in */}
         <TabPanel className="w-full">
          <Signup/>
        </TabPanel>
        {/* TB */}
      </Tabs>
    </div>
  )
}

export default Form