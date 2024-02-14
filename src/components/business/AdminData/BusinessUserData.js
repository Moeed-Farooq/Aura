import React,{ useState} from 'react'
import profile from '../../images/profile.png'
import cancel from '../../images/cancelOrder.png'
import completed from '../../images/CompleteOrder.png'
import Chat from '../../reusebale components/Chat'
import Progress from './Progress'
import Chart from './Chart'
import searchicon from '../../images/search.png'
import { Link } from 'react-router-dom'

const BusinessUserData = () => {
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
    <div className='main-container'> 
    <div className="container-fluid m-0 p-0">
        <div className="row pt-2 px-4">
        <div className="col-md-4  "  >
           <div className='bg-white d-flex justify-content-around p-2' style={{borderRadius:"30px"}}>
           <div className="img p-0  me-2 mt-2">
            <img src={profile} width={75} height={75} alt="" />
           </div>
           <div className="bio">
            <h4 className='m-0 p-0'>Hazel Finch</h4>
            <p className='m-0 p-0' style={{fontSize:"13px"}}>Brand Name</p>
            <p className='m-0 p-0' style={{fontSize:"12px"}}>Brand</p>
            <p style={{fontSize:"12px"}} className='m-0 p-0'>Lorem ipsum dolor sit amet.</p>
           </div>
           <div className="m-0" style={{fontSize:"12px"}}>October12,2023</div>
           </div>
        </div>
        <div className="col-md-4">
         <Link to="/cancelOrder">
         <div  className='bg-white d-flex justify-content-around align-items-center py-2' style={{borderRadius:"30px"}}>
         <div>
            <h4 className='m-0 text-dark'>Cancelled Orders</h4>
            <h4 className='m-1 text-dark'>27</h4>
            <p className='m-0' style={{color:"#8B8B8B"}}>Order this month</p>
           </div>
           <div>
            <div className="orders">
            <img src={cancel} alt="" />
            </div>
           </div>
         </div>
         </Link>
        </div>

        <div className="col-md-4 ">
      <Link to="/completeOrder">
      <div  className='bg-white d-flex justify-content-around align-items-center py-2' style={{borderRadius:"30px"}}>
      <div>
            <h4 className='m-0 text-dark'>Completed Orders</h4>
            <h4 className='m-1 text-dark'>27</h4>
            <p className='m-0' style={{color:"#8B8B8B"}}>Order this month</p>
           </div>
           <div>
            <div className="orders">
            <img src={completed} alt="" />
            </div>
           </div>
      </div>
      </Link>
            </div>    
        </div>


        {/* charts and chat code starts here */}
        <div className="row pt-2 px-4">
        <div className="col-md-8 " >
           <div className='bg-white  p-2 ' style={{borderRadius:"30px"}}>
        <Chart/>
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
       
      </div>
      {/* progress code start here */}
      <div className="row  pt-2 px-4">
        <div className="col-md-12 py-3 bg-white px-3 "  style={{borderRadius:"30px"}}>
        <h4>Orders In Progress</h4>
           <div className='px-3 my-2'>
            <Progress/>
            <Progress/>
            <Progress/>

           </div>
        </div>
       

           
      </div>

           

    </div>
    </div>
    </>
  )
}

export default BusinessUserData