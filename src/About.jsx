import React from 'react'
import { NavLink } from 'react-router-dom';
import Common from './Common';
function About() {
  return (
   <Common name="Welcome To About Page" img="register.svg" visit="/contact" btname="Contact Now" />
  )
}

export default About;