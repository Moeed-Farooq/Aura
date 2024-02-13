import React from 'react'
import  profile  from '../images/girlimg.png'
import PayoutHistoryCard from './PayoutHistoryCard'

const UserPayout = () => {
  return (
    <>
     <div className="main-container">
        <div className="container-fluid d-flex m-0 p-0 ">
        <div className="UserPayout-sectoion1">
        <div className="col-md-12 bg-white p-3" style={{borderRadius:"20px"}}>
                <div className="row">
                    <div className="col-md-3">
                        <div className='userreportimg'>
                            <img src={profile} alt="" />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className='userreportData '>
                            <p  className='mb-3 mt-1'>Name: <span>Hazel Finch</span></p>
                            <p className='mb-3'>Gender: <span>Female</span></p>
                            <p className='mb-3'>Category: <span>Food Blogger</span></p>
                            <p className='mb-3'>Email: <span>HazelFinch@gmail.com</span></p>

                        </div>
                    </div>

                </div>
                <div className="reportstatus">
                <p>Bio: <br /> <span>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolores! ipsum dolor sit amet consectetur adipisicing elit. Iste a reiciendis vitae est quis, dolores accusamus beatae odio minima deleniti?</span></p>
                </div>
            </div>
            <div className="row p-3">
              <div className="paymentMethod">
              <p>Payment Method</p>
              <div className="row">
                <div className="col-md-4 paymentData">
                  <p>Transaction Type</p>
                  <p>Paypal</p>
                  </div>
                <div className="col-md-4 paymentData">
                <p>Credit id</p>
                  <p>1234567890</p>
                </div>
                <div className="col-md-4 paymentData">
                <p>Account Type</p>
                  <p>Influincer</p>
                </div>
              </div>
              <p>Recipent</p>
              <div className="row">
                <div className="col-md-4 paymentData">
                  <p>Full Name</p>
                  <p>Hazel Finch</p>
                  </div>
                <div className="col-md-4 paymentData">
                <p>Account Number</p>
                  <p>1234567890</p>
                </div>
                <div className="col-md-4 paymentData">
                <p>Amount</p>
                  <p>$ 400</p>
                </div>
              </div>
              <p>Log</p>
              <div className="row">
                <div className="col-md-4 paymentData">
                  <p>Requested</p>
                  <p>12 Jan,2024 02:00 am</p>
                  </div>
                <div className="col-md-4 paymentData">
                <p>Transfer sent</p>
                <p>12 Jan,2024 02:00 am</p>
                </div>
                
              </div>

              </div>
            </div>
        </div>
            <div className="UserPayout-sectoion2 " >
              <div className="payoutHistory bg-white">
                  <p>Hazel Finch</p>
                  <p>Payout History</p>
                  <PayoutHistoryCard/>
              </div>
            </div>

          </div>
          </div>
    
    </>
  )
}

export default UserPayout