import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <div className="bg-light">
      <nav
        className="navbar navbar-expand-sm fixed-top"
        style={{ background: "black" }}
      >
        <div className="container mt-1">
          <Link
            to="/"
            className="navbar-brand text-light font-weight-bold ml-2"
          >
            Anurag Jangir
          </Link>
          <Link to="/contact" className="ml-auto">
            <button className="btn btn-outline-info mr-2">Contact Me</button>
          </Link>
          <button
            className="navbar-toggler mx-1 btn-outline-info"
            data-toggle="collapse"
            data-target="#collapseNav"
          >
            <i className="bi bi-list btn-outline-info"></i>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="collapseNav"
          >
            <div className="navbar-nav">
              <Link
                to="#call1"
                className="nav-item nav-link text-light font-weight-bold ml-2"
              >
                Projects
              </Link>
            </div>
            <div className="navbar-nav">
              <Link
                to="#call"
                className="nav-item nav-link text-light font-weight-bold ml-2"
              >
                About Me
              </Link>
            </div>
            <div className="navbar-nav">
              <Link
                to="#call2"
                className="nav-item nav-link text-light font-weight-bold ml-2"
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
