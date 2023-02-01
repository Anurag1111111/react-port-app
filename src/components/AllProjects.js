import React from 'react'
import { Consumer } from '../context';
import ProjectCard from './ProjectCard';

function AllProjects() {
  return (
    <Consumer>
        {(value)=>{
        const{Projects}=value;
        return(
            <div className="container py-5 my-5">
                <div className="py-5">
                   <h1 className='text-center my-5 font-weight-light'>All My  <span className='text-info'> Projects </span>
                   </h1>
                </div>
                <div className="row my-5 pt-3">
                    {
                        Projects.map((project) => (
                            <div key={project.id} className="col-12 col-md-6 my-2">
                                  <ProjectCard project={project}
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

export default AllProjects;
