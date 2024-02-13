import React from 'react'
import listicon from '../images/listicon.png'

const AdminCard = ({profile,AdminName,email,role}) => {
  return (
    <>
     <div className="row main-items mx-5 mt-2">
                <div className="col-md-3 text-start ps-3 name"><p className='p-0'><span><img className='me-3' src={profile} width={30} height={30} alt="" /></span> {AdminName}</p></div>
                <div className="col-md-3 text-start"><p>{email}</p></div>
                <div className="col-md-3 text-end"><p>{role}</p></div>
                <div className="col-md-3 text-end pe-5 action"><img src={listicon} alt="" /></div>
            </div>
    
    </>
  )
}

export default AdminCard