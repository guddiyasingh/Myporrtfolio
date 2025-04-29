import React from 'react'
import profile  from '../../assets/profile.jpg';
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile} alt="profile" />
      <h1>I'm Guddiya Singh , frontend devloper based in India.</h1>
      <p>I am a frontend developer from Bangalore, India </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My eesume</div>
      </div>
    </div>
  )
}

export default Hero
