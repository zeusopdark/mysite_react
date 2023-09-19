import React from 'react'
import { NavLink } from 'react-router-dom'


function Card(props) {
  return (
    <>
   

              <div className='col-md-4 col-10 mx-auto'>
              <div class="card">
                      <img src={`../images/${props.img}.jpg`} class="card-img-top" alt="Loading" />
                      <div className="card-body">
                        <h5 className="card-title"> This is very Important!!!!</h5>
                        <p className="card-text">{props.quote}</p>
                        <NavLink to=" "className="btn btn-primary"> Go Somewhere</NavLink>
                      </div>
                  </div>
              </div>
    </>
  )
}

export default Card