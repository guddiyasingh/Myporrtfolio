import React from 'react'
import './Hero.css'
import profile  from '../../assets/profile1.jpg';
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile} alt="profile" />
      <h1><span>I'm Guddiya Singh</span>frontend devloper based in India.</h1>
      <p>I am a frontend developer from Bangalore, India </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
