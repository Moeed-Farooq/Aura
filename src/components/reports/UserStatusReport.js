import React,{useState} from 'react'
import profile from '../images/girlimg.png'
import Chat from '../reusebale components/Chat'
import searchicon from '../images/searchicon.png'
import off from '../images/off.jpg'

const UserStatusReport = () => {
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
        <div className="container-fluid m-0 p-0 d-flex flex-column ">
         <div className="row px-4 mt-3 d-flex justify-content-between" style={{overflow:"hidden"}}>
            <div className="col-md-7 bg-white p-3" style={{borderRadius:"20px"}}>
                <div className="row">
                    <div className="col-md-3">
                        <div className='userreportimg'>
                            <img src={profile} alt="" />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className='userreportData'>
                            <p className='mb-3 mt-1'>Name: <span>Hazel Finch</span></p>
                            <p className='mb-3'>Gender: <span>Female</span></p>
                            <p className='mb-3'>Category: <span>Food Blogger</span></p>
                            <p className='mb-3'>Email: <span>HazelFinch@gmail.com</span></p>

                        </div>
                    </div>

                </div>
                <div className="reportstatus">
                <p>Report Status: <br /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a reiciendis vitae est quis, dolores accusamus beatae odio minima deleniti?</span></p>
                </div>
            </div>
            
           <div className='col-md-5  '>
           <div className="bg-white px-3  align-items-center py-2" style={{ borderRadius: "30px", position: 'relative' }}>
  <div className='d-flex justify-content-between align-items-center py-2'>
    <h4 className='ps-3'>Orders Chats</h4>
    <div style={{ position: 'relative' }}>
      {isSearchOpen ? (
        <button
          className='cancelButton bg-primary p-1 rounded-circle'
          onClick={handleSearchClick}
        >
          <img src={off} width={25} height={25} className='rounded-circle' alt="" />
        </button>
      ) : (
        <img
          src={searchicon}
          className='searchImg bg-primary p-1 rounded-circle'
          width={25}
          height={25}
          alt=""
          onClick={handleSearchClick}
        />
      )}
      {isSearchOpen && (
        <div style={{ position: 'absolute', top: '100%', right: 0, zIndex: 1 }}>
          {/* Your search bar content goes here */}
          <input type="text" autoFocus className='py-2 px-3 rounded-pill' placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
        </div>
      )}
    </div>
  </div>

  <Chat searchTerm={searchTerm} /> {/* Pass the search term to the Chat component */}
</div>
           </div>

            </div>
         </div>
         <div className="row " >
            <div className='userReportBtn'>
                <button className='btn '>Reject</button>
                <button className='btn'>Verify</button>
            </div>
         </div>
          </div>
    </>
  )
}

export default UserStatusReport