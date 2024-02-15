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
            <div className="col-md-8 bg-white p-3" style={{borderRadius:"20px"}}>
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
                <p className='m-0'>Bio: <br /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a reiciendis vitae est quis, dolores accusamus beatae odio minima deleniti?</span></p>
                </div>
            </div>
            <div className="col-md-4  ">
                <div className="bg-white h-100 p-3" style={{borderRadius:"30px"}}>
                    <p className='Influincersocialheading'>Social media Accounts</p>
                    <div className=' mt-3 d-flex InfluinecrSocials'>
                        <div className='InfluinecrSocialsImg'>
                            <img src={youtube} alt="" />
                        </div>
                        <div className='InfluinecrSocialsData'>
                            <p>Youtube</p>
                            <p>12k Followers</p>
                            <p><a href="">www.youtube.com</a></p>
                        </div>
                    </div>

                    <div className='d-flex InfluinecrSocials'>
                        <div className='InfluinecrSocialsImg'>
                            <img src={instagram} alt="" />
                        </div>
                        <div className='InfluinecrSocialsData'>
                            <p>Instagram</p>
                            <p>12k Followers</p>
                            <p><a href="">www.youtube.com</a></p>
                        </div>
                    </div>

                    <div className='d-flex InfluinecrSocials'>
                        <div className='InfluinecrSocialsImg'>
                            <img src={linkedin} alt="" />
                        </div>
                        <div className='InfluinecrSocialsData'>
                            <p>Linkedin</p>
                            <p>12k Followers</p>
                            <p><a href="">www.youtube.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         <p className='usermsg'>User has passed the user verification successfully</p>
         <div className="row " >
            <div className='userReportBtn'>
                <button className=''>Reject</button>
                <button className=''>Verify</button>
            </div>
         </div>
          </div>
          </div>
    </>
  )
}

export default UserVerification