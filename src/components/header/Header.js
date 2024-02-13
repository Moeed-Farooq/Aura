import React from 'react'
import logo from '../images/logo.png'
import adminicon from '../images/adminicon.png'
import search from '../images/search.png'

const Header = () => {
  return (
    <>
    <div className="container-fluid " style={{backgroundColor:"#4F99DD"}}>
        <div className="row header">

            <div className="col-md-4">
                    <a href="" className='logo'>
                    <img src={logo}  alt="" />
                    <p>Aura</p>
                    </a>
            </div>

            <div className="col-md-4">
                <div className="search d-flex">
                    <input type="text" placeholder='Search...' />
                    <img src={search} alt="" />
                </div>
            </div>

            <div className="col-md-4">
            <div className="admin">
                    <img src={adminicon} alt="" />
                    <p>Admin</p>
                </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default Header