// import React from 'react'
// import logo from '../images/logo.png'
// import './login.css'
// const Login = () => {
//   return (
//     <>
    
//     <div className="login-main container-fluid ">
//     <div className="row p-0 m-0">
//         <img className='m-5'  src={logo} alt="" />
//     </div>
//     <div className="row   text-center p-0 m-0">
//         <div className="formCard p-5 mx-auto">
//             <h4>Administraion Login</h4>
//             <form action="">
//                 <input type="email" className='email rounded-pill  px-4 py-2 my-2 mt-5  '  placeholder='Email' /><br />
//                 <input type="password" className='password rounded-pill px-4 py-2 my-2  '  placeholder='Password' /><br />
//                 <button className='btn loginBtn rounded-pill px-5 mt-2 mb-3 '>Log In</button>
//             </form>
//         </div>
//     </div>
//     </div>

   
//     </>
//   )
// }

// export default Login

import React from 'react'
import logo from '../images/logo.png'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="login-main container-fluid ">
    <div className="row ">
         <img src={logo} alt="" />
     </div>
     <div className="row   text-center p-0 m-0">
         <div className="formCard p-5 mx-auto">
             <h4>Administraion Login</h4>
             <form action="">
                 <input type="email" className='email rounded-pill  px-4 py-2 my-2 mt-5  '  placeholder='Email' /><br />
                 <input type="password" className='password rounded-pill px-4 py-2 my-2  '  placeholder='Password' /><br />
                 <Link to="dashboard"><button className='loginBtn rounded-pill px-5 mt-2 mb-3 '>Log In</button></Link>
             </form>
         </div>
     </div>
     </div>

    </>
  )
}

export default Login