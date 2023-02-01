import React from 'react'
import ProjectCard from './ProjectCard';
import { Consumer } from '../context';
import { Link } from 'react-router-dom';
function ProjectSection() {
    
  return (
    <Consumer>
        {(value)=>{
            const{Projects}=value;
            return(
                <div id='call1'>
                <div className="container py-5" style={{textAlign: "center"}}>
                  <h1 className="font-weight-light">
                      <span className="text-info">My</span>Projects
                  </h1>
                  <div className="lead">I build websites like this.</div>
                      <div className="row my-5 pt-3">
                         {
                          Projects.slice(0,3).map((project) => (
                              <div key={project.id} className="col-12 col-md-4 my-2">
                                  <ProjectCard project={project}
                                  />
                              </div>
                          )
                          )
                          }
                      
                      
                      </div>
                  <div className="my-5">
                      <Link to="/all-projects" className="text-dark text-right text-decoration-none">
                          <h5>
                              See More Projects
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

export default ProjectSection;
