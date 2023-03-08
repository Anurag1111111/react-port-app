import React from 'react'
import BlogCard from './BlogCard';
import { Consumer } from '../context';
import { Link } from 'react-router-dom';

function BlogsSection() {
    
    return (
      <Consumer>
          {(value)=>{
              const{blogs}=value;
              return(
                  <div id='call2'>
                  <div className="container py-5" style={{textAlign: "center"}}>
                    <h1 className="font-weight-light">
                        <span className="text-info">My</span>Blogs
                    </h1>
                    <div className="lead">About the new concepts.</div>
                        <div className="row my-5 pt-3">
                           {
                            blogs.slice(0,3).map((blog) => (
                                <div key={blog.id} className="col-12 col-md-4 my-2">
                                    <BlogCard blog={blog}
                                    />
                                </div>
                            )
                            )
                            }
                        
                        
                        </div>
                    <div className="my-5">
                        <Link to="/all-blogs" className="text-dark text-right text-decoration-none">
                            <h5>
                                See More Blogs
                                <i className="bi bi-arrow-right"></i>
                                
                            </h5>
                        </Link>
                    </div>
                </div>    
                </div>
              )
          }}
      </Consumer>
      
    )
  }

export default BlogsSection;
