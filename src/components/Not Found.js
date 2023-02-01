import React from 'react'

 function NotFound() {
  return (
    <div className="container py-5 my-5">
        <div className="display-4 mt-5 pt-5">
           <span className='text-danger'>Oopps!</span> It's 404 Page Not Found
        </div>
        <div className='lead'>
            Sorry Couldn't find what you are looking for.
        </div>
    </div>
  )
}

export default NotFound;
