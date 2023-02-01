import React from "react";
import {Link} from 'react-router-dom'; 

function Footer(){
    return(
    <footer>
        <div className="container-fluid text-center" style={{backgroundColor: "black"}}>
            <div className="row py-5">
                <div className="col-12">
                    <h2 className="text-light">Interested in working with me?</h2>
                    <Link to='/contact'>
                    <button className="btn btn-outline-light btn-lg" >Let's Talk</button>
                    </Link>
                </div>
            </div>
            <div className="row py-3">
                <div className="col-12 col-md-4 pb-4">
                    <h2 className="text-info">Links</h2>
                    <Link to="/"  className="text-light d-block" style={{textDecoration: "none"}}>Home</Link>
                    <Link  to="/contact" className="text-light d-block" style={{textDecoration: "none"}}>Contact-Me</Link>
                    <Link to="/write" className="text-light d-block" style={{textDecoration: "none"}}>Write a Recommendation
                    <i className="bi bi-heart-fill px-2 text-danger"></i>
                        
                    </Link>
                </div>
                <div className="col-12 col-md-4 text-light text-justify">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="col-12 col-md-4">
                    <h2 className="text-info">Social</h2>
                    <Link to="/"> <i className="bi bi-facebook h2 mx-3 "></i></Link>
                    <Link to="/"><i className="bi bi-linkedin h2 mx-2"></i></Link>
                    {/* <Link to="/"> <i className="bi bi-stack-overflow h2 mx-3"></i></Link>
                    <Link to="/"> <i className="bi bi-github h2 mx-3"></i></Link> */}
                    <Link to="/"><i className="bi bi-twitter h2 mx-3"></i></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-muted">
                    <p>Copyright © Anurag Jangir 2023</p>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;