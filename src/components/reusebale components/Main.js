import React from 'react'
import UsersCard from './UsersCard';
import profile from '../images/profile.png'
import dropdown from '../images/dropdown.png'
import filter from '../images/filter.png'
import date from '../images/calender.png'

const Main = () => {

    const propsdata={
        name:"Hazel Finch",
        profile:profile,
        brandname:"Name",
        date:"Oct 10,2023",
        type:"Fashion"
    }

  return (
    <>
    <div className="main-container">
        <div className="container-fluid m-0 p-0 ">
            <div className="row pt-4 px-4 d-flex">
                <div className="col-md-6" style={{color:"#8B8B8B"}}><p>Show<button className='mx-2'>8 <span><img src={dropdown} alt="" /></span></button>Entries</p></div>
                <div className="col-md-6 text-end">
                    <button className='me-2 '><span className='me-2'><img src={filter} alt="" /></span>Filter</button>
                    <button className=''><span className='me-2'><img src={date} alt="" /></span>Oct 10,2023 <span><img src={dropdown} alt="" /></span></button>
                    </div>
            </div>
            <hr />
            <div className="row main-labels mx-5">
                <div className="col-md-3 name"><p>Name</p></div>
                <div className="col-md-2">Date</div>
                <div className="col-md-2">Brand Name</div>
                <div className="col-md-2">Type</div>
                <div className="col-md-3 action">Action</div>
            </div>
            {/* users data importing from usercard.js */}
           <UsersCard {...propsdata} />
           <UsersCard {...propsdata} />
           <UsersCard {...propsdata} />
           <UsersCard {...propsdata} />
           <UsersCard {...propsdata} />
           <UsersCard {...propsdata} />
           <UsersCard {...propsdata} />

            {/* main footer */}
            <div className="row px-5 d-flex mt-3" >
                <div className="col-md-6 ps-3"><p>Showing 7 of 15 entries</p></div>
                <div className="col-md-6 d-flex justify-content-end">
             <nav aria-label="Page navigation example">
                 <ul class="pagination">
                  <li class="page-item "><a class="page-link " href="#">Previous</a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                 <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
             </nav>
                </div>
            </div>
            

        </div>
        
    </div>
    </>
  )
}

export default Main