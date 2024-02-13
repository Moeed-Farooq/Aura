import React from 'react'

const CreateAdmin = () => {
  return (
    <>
    
    <div className="main-container">
        <div className="container-fluid m-0 p-0 ">
        <div className="row pt-4 px-4 d-flex">
            <h3>Create New Admin</h3>
            <div className="row createAdmin mt-3">
                <div className="col-md-2 d-flex align-items-center"><p>Name:</p></div>
                <div className="col-md-4 ">
                    <input type="text" className='w-100 py-2 -1' />
                </div>
            </div>
            <div className="row createAdmin mt-3">
                <div className="col-md-2 d-flex align-items-center"><p>Email:</p></div>
                <div className="col-md-4 ">
                    <input type="text" className='w-100 py-2 -1' />
                </div>
            </div>
            <div className="row createAdmin mt-3">
                <div className="col-md-2 d-flex align-items-center"><p>Password:</p></div>
                <div className="col-md-4 ">
                    <input type="text" className='w-100 py-2 -1' />
                </div>
            </div>
            <div className="row createAdmin mt-3">
                <div className="col-md-2 d-flex align-items-center"><p>Role:</p></div>
                <div className="col-md-4 ">
              <select
                name="show"
                id="show"
                className=' py-2   w-100 '
               
              >
                <option value="3">Super Admin</option>
                <option value="5">Admin</option>
                <option value="7">Owner</option>
              </select>
                </div>
            </div>
            <div className="row createAdmin mt-3">
                <div className="col-md-2 d-flex align-items-center"><p>Image:</p></div>
                <div className="col-md-4 ">
                    <input type="file" className='w-100 py-2 px-2 -1' />
                </div>
            </div>
            <div className='text-end mt-5'>
                <button className='btn Createbtn px-5'>Create</button>
            </div>
            </div>
            </div>
            </div>
    </>
  )
}

export default CreateAdmin