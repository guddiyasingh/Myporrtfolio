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
      <div className="about-sections">
        <div className="about-left">
          <img src="" alt="" />
        </div>
        <div className="about-right">
      <div className="about-para">
        <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field .Throughout my career,I have had the privilege of 
          collaborating with prestigious  organizations,contributing to their success and growth.
        </p>
        <p>My passion for frontend development is not only reflected in my extensive experience but  also in the enthusiam and dedication I bring to each project.</p>
      </div>
      <div className="about-skills">
        <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}}/></div>
        <div className="about-skill"><p>React Js</p> <hr style={{width:"70%"}}/></div>
        <div className="about-skill"><p>Javascript</p> <hr style={{width:"60%"}}/></div>
        <div className="about-skill"><p>Next Js</p> <hr style={{width:"50%"}}/></div>
      </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
            
        </div>
    </div>
  )
}

export default About
