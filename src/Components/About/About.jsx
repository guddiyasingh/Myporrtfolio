import React from 'react'
import "./About.css"
import them_Pattern from "../../assets/profile.jpg"
const About = () => {
  return (
    <div className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={them_Pattern} alt="" />
      </div>
    </div>
  )
}

export default About
