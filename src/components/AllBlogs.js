import React from 'react'
import { Consumer } from '../context';
import BlogCard from './BlogCard';

function AllBlogs() {
    return (
      <Consumer>
          {(value)=>{
          const{blogs}=value;
          return(
              <div className="container py-3 my-5">
                  <div className="py-5">
                     <h1 className='text-center my-3 font-weight-light'>All My  <span className='text-info'> Blogs </span>
                     </h1>
                  </div>
                  <div className="row my-2 pt-1">
                      {
                          blogs.map((blog) => (
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
