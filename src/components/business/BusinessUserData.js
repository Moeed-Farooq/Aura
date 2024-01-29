import React from 'react'
import profile from '../images/profile.png'
import cancel from '../images/cancelOrder.png'
import completed from '../images/CompleteOrder.png'

const BusinessUserData = () => {
  return (
    <>
    <div className='main-container'> 
    <div className="container-fluid m-0 p-0">
        <div className="row pt-4 px-4">
        <div className="col-md-4 " >
           <div className='bg-white d-flex justify-content-around p-2' style={{borderRadius:"30px"}}>
           <div className="img p-0  me-2 mt-2">
            <img src={profile} width={98} height={98} alt="" />
           </div>
           <div className="bio">
            <p className='m-0 p-0'>Hazel Finch</p>
            <p className='m-0 p-0'>Brand Name</p>
            <p className='m-0 p-0'>Brand</p>
            <p>Lorem ipsum dolor sit amet.</p>
           </div>
           <div className="date">October12,2023</div>
           </div>
        </div>
        <div className="col-md-4">
         <div  className='bg-white d-flex justify-content-around align-items-center py-2' style={{borderRadius:"30px"}}>
         <div>
            <h3>Cancelled Orders</h3>
            <h3>27</h3>
            <p>Order this month</p>
           </div>
           <div>
            <div className="orders">
            <img src={cancel} alt="" />
            </div>
           </div>
         </div>
        </div>

        <div className="col-md-4 ">
      <div  className='bg-white d-flex justify-content-around align-items-center py-2' style={{borderRadius:"30px"}}>
      <div>
            <h3>Completed Orders</h3>
            <h3>27</h3>
            <p>Order this month</p>
           </div>
           <div>
            <div className="orders">
            <img src={completed} alt="" />
            </div>
           </div>
      </div>
            </div>    
        </div>
    </div>
    </div>
    </>
  )
}

export default BusinessUserData