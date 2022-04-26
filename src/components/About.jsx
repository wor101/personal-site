import React from 'react'
import { Link } from 'react-router-dom'
import profilePic from '../images/profile_pic.jpg'

const About = () => {
  return (
    <div className="flex place-content-center bg-slate-100 min-h-screen">
      <div id="about" className="flex md:flex-nowrap flex-wrap place-content-center items-center max-w-7xl px-7 space-x-6 my-6">
        <figure>
          <img src={profilePic} alt="profile pic" className='rounded-full max-h-80 m-auto border-2 border-black border-dotted'></img>
        </figure>
        <div className="flex flex-col space-y-6">
          <h2 className="font-semibold text-4xl md:ml-6 md:mt-0 mt-6">Hi! I'm Will.</h2>
          <h3 className="font font-semibold text-2xl md:ml-6">Boston, Massachusetts</h3>
          <p className="text-left text-xl md:ml-6">I'm a full-stack Software Engineer currently based in Boston, MA. Experienced in JavaScript/Node.js, React, Ruby, PostgreSQL, Docker, and a variety of AWS services.</p>
          <p className="text-left text-xl md:ml-6">Most recently, I built <a className="font-koulen text-[#66AC9A] text-2xl" href="https://chimera-deploy.dev" target="_blank" rel="noreferrer">Chimera</a>, an open-source tool for automating canary deployments of containerized microservices.</p>
          <div className="flex place-content-center text-xl">
            <a href="#resume" className="grow max-w-sm py-1 mx-1 border border-black rounded-full uppercase text-center hover:bg-black hover:text-white" target="_blank" rel="noreferrer">Resume</a>
            <a href="https://chimera-deploy.dev/" className="grow max-w-sm py-1 mx-1 border border-black rounded-full uppercase text-center hover:bg-black hover:text-white" target="_blank" rel="noreferrer">Read the Writeup</a>
            {/* <Link to="/projects" className="grow max-w-sm mx-1 py-1 border border-black rounded-full uppercase text-center hover:bg-black hover:text-white">Projects</Link> */}
          </div>
        </div>      
      </div>
    </div>
  )
}

export default About
