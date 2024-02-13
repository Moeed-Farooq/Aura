import React,{useState} from 'react'
import Chat from '../reusebale components/Chat'
import searchicon from '../images/searchicon.png'
import profile from '../images/girlimg.png'
import { Link } from 'react-router-dom'
import cancel from '../images/cancelOrder.png'
import youtube from '../images/youtube.png'
import instagram from '../images/insta.png'
import linkedin from '../images/linkedin.png'
import linkicon from '../images/linkicon.png'
import heart from '../images/heart.png'
import InfluincerChart from './InfluincerChart'


const InfluincerUser = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');  // State to store the search term
  
    const handleSearchClick = () => {
      setIsSearchOpen(!isSearchOpen);
    };
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  return (
   
    <>
    <div className="main-container">
        <div className="container-fluid m-0 p-0 ">
          <div className="row pt-4 px-4 d-flex">
            <div className="col-md-4 ">
               <div className='bg-white p-3' style={{borderRadius:"30px"}}>
               <div className='bg-white d-flex'>
               <div className=''>
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
                <div className="bg-white h-100 p-3" style={{borderRadius:"30px"}}>
                    <p className='Influincersocialheading'>Social media Accounts</p>
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
      <div className='d-flex justify-content-between align-items-center py-2'>
        <h4>Orders Chats</h4>
        <div style={{ position: 'relative' }}>
          <img
            src={searchicon}
            className='bg-primary p-1 rounded-circle'
            width={25}
            height={25}
            alt=""
            onClick={handleSearchClick}
          />
          {isSearchOpen && (
            <div style={{ position: 'absolute', top: '100%', right: 0, zIndex: 1 }}>
              {/* Your search bar content goes here */}
              <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
            </div>
          )}
        </div>
      </div>

      <Chat searchTerm={searchTerm}  /> {/* Pass the search term to the Chat component */}
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
            <p>22.3k</p>
            <p>+23 more</p>
            </div>

            <div className="bg-white influincerLikes mt-2 p-3" style={{borderRadius:"30px"}}>
            <div className=' d-flex justify-content-between align-items-center'>
                <p>Total likes</p>
                <img src={heart} alt="" />
            </div>
            <p>22.3k</p>
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