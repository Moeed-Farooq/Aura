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
                <div className="col-md-4">
                <div class="dropdown ">
  <button class="createAdminBtn w-100  dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span>Select Role</span>
  </button>
  <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Admin</a>
    <a class="dropdown-item" href="#">Super Admin </a>
    <a class="dropdown-item" href="#">Admin</a>
  </div>
</div>
                </div>
         
            </div>
            <div className="row createAdmin mt-3">
                <div className="col-md-2 d-flex align-items-center"><p>Image:</p></div>
                <div className="col-md-4 ">
                    <input type="file" className='w-100 py-2 px-2 -1' />
                </div>
            </div>
            <div className='text-end mt-5'>
                <button className='Createbtn py-2 px-5'>Create</button>
            </div>
            </div>
            </div>
            </div>
    </>
  )
}

export default CreateAdmin