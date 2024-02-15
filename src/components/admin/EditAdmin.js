import React from 'react'
import adminicon from '../images/adminicon.png'

const EditAdmin = () => {
  return (
    <>
     <div className="main-container">
        <div className="container-fluid m-0 p-0 ">
          <div className="row pt-4 px-4 d-flex">
            <div className='text-center mt-5 adminImage'>
            <img src={adminicon} alt="" className=''  />
            </div>
            <div className="row mt-5 adminEditData">
            <div className="col-md-6 text-center  "><p >Name: <span>Hazel Finch</span></p></div>
            <div className="col-md-6 text-center  "><p>Email: <span>Email@email.com</span></p></div>
            <div className="col-md-6 text-center mt-4"><p>Role: <span>Super Admin</span></p></div>
            <div className="col-md-6 text-center mt-4"><p>Password: <span>**************</span></p></div>
            </div>
            <div className="editAdminBtn d-flex justify-content-between">
                <button className='border-0'>Edit</button>
                <button className='border-0'>Delete</button>
            </div>
          </div>
          </div>
          </div>
    
    </>
  )
}

export default EditAdmin