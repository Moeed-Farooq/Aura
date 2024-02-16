import React from 'react'
import './ordercard.css'

const OrderCard = ({projectImg,projectDescription,ProjectName,status,result}) => {
  return (
    <>
    <div className='orderCard '>
        <img src={projectImg}   alt="" />
        <p className='projectName'>{ProjectName}</p>
         <p className='projectDescription'>{projectDescription}</p>
    <hr className='my-2' />
    <div className='row orderdata'>
        <div className="col-md-6 ps-4"><p>Order ID</p></div>
        <div className="col-md-6 pe-4 text-end"><p>12345678</p></div>
    </div>
    <div className='row orderdata'>
        <div className="col-md-6 ps-4"><p>platform</p></div>
        <div className="col-md-6 pe-4 text-end"><p>youtube</p></div>
    </div>
    <div className='row orderdata'>
        <div className="col-md-6 ps-4 "><p>Type</p></div>
        <div className="col-md-6  pe-4 text-end"><p>Short Videos</p></div>
    </div>
    <div className='row orderdata'>
        <div className="col-md-6 ps-4"><p>{status}</p></div>
        <div className="col-md-6 pe-4 text-end"><p>{result}</p></div>
    </div>
    </div>
    
    </>
  )
}

export default OrderCard