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
    <section>
    <div className='text-center p-10'>
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400" id="title">Vegas Cruz</h2>
      <h3 className="text-2xl py-2">Full Stack Developer from Michigan State University</h3>
      <p className="text-lg py-5 leading-8 text-gray-500" id="text">
        Just got my Full-Stack developer certificate from MSU. I also am a semester away from achieving my Associate&apos;s Degree in IT: Web & Software Development from Western Technical College.
      </p>
    </div>
    <div className="text-5xl flex justify-center gap-16 py-3 dark:text-gray-300">
      <a href="https://github.com/vegascruz" target="_blank" rel="noopener noreferrer">  
        <AiFillGithub className='text-black  hover:animate-bounce'/> 
      </a>
      {/* instagram link (add after employment)  
      <a href="https://www.instagram.com/vegascruz5/" target="_blank">  
        <AiFillInstagram className='text-pink-600 hover:animate-bounce'/> 
      </a>
      */}
      <a href="https://www.linkedin.com/in/vegas-cruz-7b0a48157" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin className='text-sky-600 hover:animate-bounce'/>
      </a>
      <a href="https://www.ziprecruiter.com/profile/vegas-cruz" target="_blank" rel="noopener noreferrer">
        <GiOfficeChair className='text-green-500 hover:animate-bounce'/>
      </a>
      {/*
      <a href="https://www.facebook.com/vegas.cruz.5" target="_blank">
        <AiFillFacebook className='text-blue-900 hover:animate-bounce'/>
      </a>
      */}
    </div>
    <div className="mx-auto rounded-full">
      <img src={image} alt="pic of me" className="mx-auto h-full w-3/12 rounded-full"/>
    </div>
  <div className='text-center'>
    <h3 className='text-3xl py-1'> Services I offer</h3>
    <p className='text-md py-2 leading-8 text-gray-500'>I am a Full-Stack developer from Michigan State University. I offer front end and back end web development.</p>
  </div>
</section>
  )
}

export default Home