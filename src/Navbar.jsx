import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>

<div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
          <nav className="navbar  navbar-expand-lg">
                <a className="navbar-brand abc" href="#">PR<span id="o">O</span>DUCT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto xyz ">
                        <li className="nav-item">
                            <NavLink className="nav-link nav-link-ltr" to="/">
                                Home
                            </NavLink>
                        </li>
                       
                      
                        <li className="nav-item">
                        <NavLink className="nav-link nav-link-ltr" to="/service">
                                Services
                            </NavLink>
                        </li>

                        <li class="nav-item">
                        <NavLink className="nav-link nav-link-ltr" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link nav-link-ltr" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link nav-link-ltr" to="/register">
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
       </div>
        </div>
      </div>
   
    </>
  )
}

export default Navbar;