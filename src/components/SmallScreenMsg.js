import React from 'react'
import logo from './images/logo.png'
const SmallScreenMsg = () => {
  return (
    <>
    
    <div className="SmallScreenContainer container-fluid  ">
        <div>
        <img src={logo} alt="" />
            <p>
              
                This Aura Admin Dashboard is only for Desktop size screens!!!
            </p>
         </div>

    </div>
    </>
  )
}

export default SmallScreenMsg