import React from 'react'
import './home.css'
import {
    AiFillGithub, 
    AiFillLinkedin
    /*AiFillFacebook,
    AiFillInstagram*/
  } from "react-icons/ai"

  import {
    GiOfficeChair 
  } from "react-icons/gi"

  import image from './assets/professional_pic.png';

const Home = () => {
  return (
    <div>
      <div class='title'>
        <h2>Vegas Cruz</h2>
        <h3>Full Stack Developer from Michigan State University</h3>
        <p>
          Just got my Full-Stack developer certificate from MSU. I also am a semester away from achieving my Associate&apos;s Degree in IT: Web & Software Development from Western Technical College.
        </p>
      </div>
      <div class='professionalLinks'>
        <a href="https://github.com/vegascruz" style={{color: "black"}} target="_blank" rel="noopener noreferrer">  
          <AiFillGithub/> 
        </a>
        {/* instagram link (add after employment)  
        <a href="https://www.instagram.com/vegascruz5/" target="_blank">  
          <AiFillInstagram/> 
        </a>
        */}
        <a href="https://www.linkedin.com/in/vegas-cruz-7b0a48157" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin/>
        </a>
        <a href="https://www.ziprecruiter.com/profile/vegas-cruz" style={{color: "black"}} target="_blank" rel="noopener noreferrer">
          <GiOfficeChair/>
        </a>
        {/*
        <a href="https://www.facebook.com/vegas.cruz.5" target="_blank">
          <AiFillFacebook/>
        </a>
        */}
      </div>
      <div className='professionalImg'>
        <img src={image} alt="pic of me" className='rounded-circle'/>
      </div>
    <div >
      <h3> Services I offer</h3>
      <p>I am a Full-Stack developer from Michigan State University. I offer front end and back end web development.</p>
    </div>
  </div>
  )
}

export default Home