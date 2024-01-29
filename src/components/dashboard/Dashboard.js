import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Business from '../business/Business'
import Influincer from '../influincer/Influincer'
import { Routes, Route } from 'react-router-dom';
import Verification from '../verification/Verification'
import Reports from '../reports/Reports'
import AddAdmin from '../admin/AddAdmin'
import Payout from '../payout/Payout'
import BusinessUserData from '../business/BusinessUserData'



const Dashboard = () => {
  return (
    <>
    <Header/>
    <div className='main'>
      <div className="sidebar">
        <Sidebar/>
      </div>

      <div className="components">
        <Routes>
          <Route path='business' element={<Business/>}/>
          <Route path='businessUserData' element={<BusinessUserData/>}/>

          <Route path='influincer' element={ <Influincer/>}/>
          <Route path='verification' element={<Verification/>}/>
          <Route path='reports' element={<Reports/>}/>
          <Route path='addadmin' element={<AddAdmin/>}/>
          <Route path='payouts' element={<Payout/>}/>
        </Routes>
      </div>
    </div>
    
    
    </>
  )
}

export default Dashboard