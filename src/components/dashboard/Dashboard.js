import React from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Business from '../business/Business';
import { Routes, Route} from 'react-router-dom';
import Verification from '../verification/Verification';
import Reports from '../reports/Reports';
import Influincer from '../influincer/Influincer';
import AddAdmin from '../admin/AddAdmin';
import Payout from '../payout/Payout';
import BusinessUserData from '../business/AdminData/BusinessUserData';
import CreateAdmin from '../admin/CreateAdmin';
import EditAdmin from '../admin/EditAdmin';
import UserStatusReport from '../reports/UserStatusReport';
import UserVerification from '../verification/UserVerification';
import UserPayout from '../payout/UserPayout';
import CompleteOrder from '../business/CompleteOrder';
import CancelOrder from '../business/CancelOrder';
import InfluincerUser from '../influincer/InfluincerUser';
import ActiveOrders from '../influincer/ActiveOrders';
import InfuilcerCompletedOrders from '../influincer/InfuilcerCompletedOrders';

const Dashboard = () => {


  return (
    <>
      <div style={{ height: "100vh" }}>
        <Header />
        <div className='main' style={{ height: "calc(100vh - 80px)" }}>
          <div className="sidebar">
            <Sidebar   />
          </div>

          <div className="components">
            <Routes>
              <Route path='/' element={<Business />} />
              <Route path='/BusinessUser' element={<BusinessUserData />} />
              <Route path='/completeOrder' element={<CompleteOrder />} />
              <Route path='/cancelOrder' element={<CancelOrder />} />
              <Route path='/influincer' element={<Influincer />} />
              <Route path='/InfluincerUser' element={<InfluincerUser />} />
              <Route path='/ActiveOrders' element={<ActiveOrders />} />
              <Route path='/InfuilcerCompletedOrders' element={<InfuilcerCompletedOrders />} />
              <Route path='/verification' element={<Verification />} />
              <Route path='/UserVerification' element={<UserVerification />} />
              <Route path='/reports' element={<Reports />} />
              <Route path='/UserStatusReport' element={<UserStatusReport />} />
              <Route path='/addadmin' element={<AddAdmin />} />
              <Route path='/CreateAdmin' element={<CreateAdmin />} />
              <Route path='/EditAdmin' element={<EditAdmin />} />
              <Route path='/payouts' element={<Payout />} />
              <Route path='/UserPayout' element={<UserPayout />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
