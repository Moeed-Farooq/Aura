import React from 'react'
import profile from '../images/girlimg.png'
import youtube from '../images/youtube.png'
import instagram from '../images/insta.png'
import linkedin from '../images/linkedin.png'
import linkicon from '../images/linkicon.png'


const UserVerification = () => {
  return (
    <>
    <div className="main-container">
        <div className="container-fluid m-0 p-0 d-flex flex-column ">
         <div className="row px-4 mt-3 d-flex justify-content-between">
            <div className="col-md-7 bg-white p-3" style={{borderRadius:"20px"}}>
                <div className="row">
                    <div className="col-md-3">
                        <div className='userverificationtimg'>
                            <img src={profile} alt="" />
                            <p>Identity Verified</p>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className='userVerificationData'>
                            <p className='mt-1'>Name: <span>Hazel Finch</span></p>
                            <p>Gender: <span>Female</span></p>
                            <p>Category: <span>Food Blogger</span></p>
                            <p>Email: <span>HazelFinch@gmail.com</span></p>
                            <p>Phone: <span>+923078334001</span></p>


                        </div>
                    </div>

                </div>
                <div className="reportstatus mt-1">
                <p>Bio: <br /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a reiciendis vitae est quis, dolores accusamus beatae odio minima deleniti?</span></p>
                </div>
            </div>
            <div className="col-md-5  ">
                <div className='bg-white h-100 px-5' style={{borderRadius:"20px"}}>
                    <p className="fw-bolder">Social media Accounts</p>
                    <div className="social-container  d-flex p-3">
                        <div className="img bg-white p-1 d-flex jusitfy-content-center" style={{borderRadius:"14px"}}>
                            <img src={youtube} alt="" />
                        </div>
                        <div className="socialData ms-2">
                        <p className='m-0'>Youtube</p>
                        <p className='my-1'>12k Followers</p>
                        <p className='m-0'><a href=""><span><img src={linkicon} alt="" /></span> www.youtube.com</a></p>
                        </div>
                    </div>
                    <div className="social-container  d-flex p-3 my-2">
                        <div className="img bg-white py-1 px-2 d-flex jusitfy-content-center" style={{borderRadius:"14px"}}>
                            <img src={instagram} alt="" />
                        </div>
                        <div className="socialData ms-2">
                        <p className='m-0'>Youtube</p>
                        <p className='my-1'>12k Followers</p>
                        <p className='m-0'><a href=""><span><img src={linkicon} alt="" /></span> www.youtube.com</a></p>
                        </div>
                    </div>
                    <div className="social-container  d-flex p-3 mb-2">
                        <div className="img bg-white py-1 px-3  d-flex jusitfy-content-center" style={{borderRadius:"14px"}}>
                            <img src={linkedin} alt="" />
                        </div>
                        <div className="socialData ms-2">
                        <p className='m-0'>Youtube</p>
                        <p className='my-1'>12k Followers</p>
                        <p className='m-0'><a href=""><span><img src={linkicon} alt="" /></span> www.youtube.com</a></p>
                        </div>
                    </div>
                  
                    
                </div>
            </div>
         </div>
         <p className='usermsg'>User has passed the user verification successfully</p>
         <div className="row " >
            <div className='userReportBtn'>
                <button className='btn '>Reject</button>
                <button className='btn'>Verify</button>
            </div>
         </div>
          </div>
          </div>
    </>
  )
}

export default UserVerification