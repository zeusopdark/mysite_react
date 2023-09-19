import React from 'react'
import { NavLink } from 'react-router-dom';

function Common(props) {
  return (
   <section id="header" >
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto row">
             <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 cscd">
                <h1>
                  {props.name}   <strong className="brand-name"> {props.sm!=null?props.sm:""} .</strong> 
                </h1>
                <h2 className="my-3">We are the team of talented developer websites.</h2>
                <div className="mt-3">
                <NavLink className="btn btn-outline-success" to={props.visit}>
                                {props.btname}
                 </NavLink>
                </div>
             </div>
             <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={`../images/${props.img}`} className="img-fluid animated" alt="home image" />
             </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Common;