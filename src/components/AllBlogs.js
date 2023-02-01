import React from 'react'
import { Consumer } from '../context';
import BlogCard from './BlogCard';

function AllBlogs() {
    return (
      <Consumer>
          {(value)=>{
          const{Blogs}=value;
          return(
              <div className="container py-5 my-5">
                  <div className="py-5">
                     <h1 className='text-center my-5 font-weight-light'>All My  <span className='text-info'> Blogs </span>
                     </h1>
                  </div>
                  <div className="row my-5 pt-3">
                      {
                          Blogs.map((blog) => (
                              <div key={blog.id} className="col-12 col-md-6 my-2">
                                    <BlogCard blog={blog}
                                    />
                              </div>
                      ))}
                  </div>
              </div>
          )
          
      }} 
      </Consumer>
    )
  }

export default AllBlogs;
