import React from 'react'
import profilePic from '../images/profile_pic.jpg'

const About = () => {
  return (
    <div className="flex place-content-center bg-slate-100 min-h-screen">
      <div className="flex place-content-center items-center max-w-7xl px-7 space-x-6">
        <figure>
          <img src={profilePic} alt="profile pic" className='rounded-full max-h-80 m-auto border-2 border-black border-dotted'></img>
        </figure>
        <div className="flex flex-col space-y-6">
          <h3 className="text-center text-lg">A <a href="https://launchschool.com/" className="font-semibold">LaunchSchool</a> Core Curriculum graduate and <a href="https://launchschool.com/capstone" className="font-semibold">Capstone Program</a> alumnus, eagerly starting a career as a full stack developer.</h3>
          <div className="flex place-content-center space-x-6 text-xl">
            <a href="#contact" className="grow max-w-sm py-1 border border-black rounded-full uppercase text-center hover:bg-black hover:text-white">Contact Me</a>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default About
