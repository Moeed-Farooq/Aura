import React from 'react'
import './header.css'
import logo from '../images/logo.png'
import adminicon from '../images/adminicon.png'
import search from '../images/search.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="container-fluid " style={{backgroundColor:"#4F99DD"}}>
        <div className="row header">

            <div className="col-md-4">
                    <Link to="/" className='logo'>
                    <img src={logo}  alt="" />
                    <p>Aura</p>
                    </Link>
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