import React,{useState} from 'react'
import Chat from '../reusebale components/Chat'
import searchicon from '../images/search.png'
import profile from '../images/girlimg.png'
import { Link } from 'react-router-dom'
import cancel from '../images/cancelOrder.png'
import youtube from '../images/youtube.png'
import instagram from '../images/insta.png'
import linkedin from '../images/linkedin.png'
import linkicon from '../images/linkicon.png'
import heart from '../images/heart.png'
import star from '../images/star.png'
import InfluincerChart from './InfluincerChart'
import off from '../images/off.png'


const InfluincerUser = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchTerm(''); // Clear search term when opening the search input
    }
  };
  return (
   
    <>
    <div className="main-container">
        <div className="container-fluid m-0 p-0 ">
          <div className="row pt-4 px-4 d-flex">
            <div className="col-md-4 ">
               <div className='bg-white p-3' style={{borderRadius:"30px"}}>
               <div className='bg-white d-flex'>
               <div className='ms-2'>
                    <img src={profile} width={75} height={75} alt="" />
                </div>
                <div className='influincerData'> 
                    <p >Hazel Finch</p>
                    <p>Food Blogger</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, eius!</p>
                </div>
               </div>
            <Link to="/InfuilcerCompletedOrders">
            <div className="InfluinerOrder">
                <div className="influincerOrderData">
                    <p>Completed Orders</p>
                    <p>27</p>
                    <p>Order this month</p>
                </div>
                <div className="influincerOrderImg">
                    <img src={cancel} alt="" />
                </div>
               </div>
            </Link>
               <Link to="/ActiveOrders">
               <div className="InfluinerOrder">
                <div className="influincerOrderData">
                    <p>Active Orders</p>
                    <p>27</p>
                    <p>Order this month</p>
                </div>
                <div className="influincerOrderImg">
                    <img src={cancel} alt="" />
                </div>
               </div>
               </Link>
               </div>
            </div>


            <div className="col-md-4  ">
                <div className="bg-white h-100 p-3 " style={{borderRadius:"30px"}}>
                    <p className='Influincersocialheading ms-1'>Social media Accounts</p>
                    <div className='d-flex InfluinecrSocials'>
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

            <div className="col-md-4 bg-white px-3 align-items-center py-2" style={{ borderRadius: "30px", position: 'relative' }}>
      <div className='d-flex  justify-content-between align-items-center py-2'>
        <h4 className='ps-3 m-0'>Orders Chats</h4>
        <div style={{ position: 'relative' }}>
          {isSearchOpen ? (
            <div className='position-relative'>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='searchInput'
                placeholder='Search...'
              />
               <button
                className='position-absolute me-1 bg-white  end-0 translate-middle-y' style={{border:"none",marginTop:"16px"}}
                onClick={handleSearchClick}
              >
                <img src={off} style={{width:"18px",height:"20px"}} className='' alt="" />
              </button>
            </div>
          ) : (
            <img
              src={searchicon}
              className='searchImg bg-primary rounded-circle'
              width={25}
              height={25}
              alt=""
              onClick={handleSearchClick}
            />
          )}
        </div>
      </div>

      <Chat searchTerm={searchTerm} /> {/* Pass the search term to the Chat component */}
    </div>

    <div className="row  m-0 p-0">
    <div className="col-md-8 mt-3 " >
           <div className='bg-white  p-2 ' style={{borderRadius:"30px"}}>
        <InfluincerChart/>
           </div>
        </div>

        <div className="col-md-4 m-0 p-0 ">

            <div className="bg-white influincerLikes mt-3 p-3" style={{borderRadius:"30px"}}>
            <div className=' d-flex justify-content-between align-items-center'>
                <p>Total likes</p>
                <img src={heart} alt="" />
            </div>
            <p className='mb-2'>22.3k</p>
            <p>+23 more</p>
            </div>

            <div className="bg-white influincerLikes mt-2 p-3" style={{borderRadius:"30px"}}>
            <div className=' d-flex justify-content-between align-items-center'>
                <p>Total likes</p>
                <img src={star} alt="" />
            </div>
            <p className='mb-2'>22.3k</p>
            <p>+23 more</p>
            </div>
        </div>

    </div>
          </div>
          </div>
          </div>
    </>
    
  )
}

export default InfluincerUser