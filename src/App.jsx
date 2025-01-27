import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//form
import Form from './pages/Form/Form'
import Agreement from './pages/Form/Info/Agreement'
import ID from './pages/Form/Info/ID'
import Address from './pages/Form/Info/Address'
import Gender from './pages/Form/Info/Gender'

//Home 
import Notification from './components/Notification/Notification'
import Home from './pages/Home/Home'
import Map from './pages/Map/Map'
import Transfer from './pages/Transfer/Transfer'
import Settings from './pages/Settings/Settings'
import Profile from './pages/Profile/Profile'

//add money
import Addm from './pages/Addmoney/Addm'
import Ddeposit from './pages/Addmoney/Ddeposit'
import Finish from './pages/Addmoney/Finish'


export default function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Form/>}/>
          <Route path="/step 1" element={<Gender/>}/>
          <Route path="/step 2" element={<Address/>}/>
          <Route path="/step 3" element={<ID/>}/>
          <Route path="/step 4" element={<Agreement/>}/>
          
            
          {/* Navlinks */}
          <Route path="/home" element={<Home/>}/>
          <Route path="/map" element={<Map/>}/>
          <Route path="/transfer" element={<Transfer/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/profile" element={<Profile/>}/>
          
          {/* Buttons rouets */}
          <Route path="/add money" element={<Addm/>}/>
          <Route path="/direct deposit" element={<Ddeposit/>}/>
          <Route path="/find employer" element={<Finish/>}/>

          {/* notification */}
          <Route path="/notification" element={<Notification/>}/>
       </Routes>
     </BrowserRouter>

    </div>
  )
}
