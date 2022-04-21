import React from 'react'
import chimera from '../images/Chimera_logo_on dark.png'
import coreSpace from '../images/space-ship-core-space.jpg'
import npcTracker from '../images/dungeons-and-dragons-npc-tracker.jpg'
import mackinaw from '../images/mackinaw_sunset_1.jpg'

const imageOverflowStyle = "h-max w-max"

const ProjectLink = ({ image, imageStyle, href, title, subtitle }) => {
  return (
    <div className="flex items-stretch h-52 w-64 m-2 text-center bg-black text-white shadow-xl transition-all hover:scale-110">
      <a href={href} className="h-52 w-64">
          <div className="flex justify-center content-center overflow-hidden h-2/5">
            <img src={image} alt="logo" className={imageStyle}></img>
          </div>
          <h3 className="font-bold text-xl uppercase px-4 pt-2">{title}</h3>
          <p className="px-4 pt-2">{subtitle}</p>
      </a>
    </div>
  )
}

const ProjectsList = () => {
  return (
    <div className="flex place-content-center min-h-screen bg-white">
      <div className="grow flex flex-col  max-w-7xl px-7 pt-7 mt-14  space-y-6">
        <h3 className="font-semibold text-2xl uppercase text-center">My Projects</h3>
        <div className="flex flex-row flex-wrap items-stretch justify-center h-1/3" >
          <ProjectLink image={chimera} imageStyle={imageOverflowStyle} href="projects/chimera" title="Chimera" subtitle="Automated canary deployments for containerized microservices" />
          <ProjectLink image={coreSpace} imageStyle={imageOverflowStyle} href="projects/corespace" title="Core Space Game Aid" subtitle="A game aid for the miniatures tabetop game Core Space"/>
          <ProjectLink image={npcTracker} imageStyle={imageOverflowStyle} href="projects/npctracker" title="NPC Tracker" subtitle="Character interaction manager for RPGs"/>
          <ProjectLink image={mackinaw} imageStyle={imageOverflowStyle} href="projects/site" title="This Site" subtitle="Inspired by 'WhatATheme' and built with React and Tailwind"/>
        </div>
      </div>      
    </div>
  )
}

export default ProjectsList


/*
    <div className="flex place-content-center min-h-screen bg-white">
      <div className="grow flex flex-col  max-w-7xl px-7 pt-7 mt-14  space-y-6">
        <h3 className="font-semibold text-2xl uppercase text-center">My Projects</h3>
        <div className="flex flex-col h-4/5 items-stretch space-y-2 md:flex-row md:justify-center md:space-y-0 md:space-x-2 md:h-1/3" >
         <div className="h-1/2 text-center bg-black text-white md:w-1/5 md:h-full">
            <a href="#project1">

            Project 1
            </a>
          </div>
          <div className="h-full text-center bg-black text-white md:w-1/5 md:h-full">
            <a href="#project1">

            Project 2
            </a>
          </div>
          <div className="h-1/2 text-center bg-black text-white md:w-1/5 md:h-full">
            <a href="#project1">

              Project 3
            </a>
          </div>
          <div className="h-1/2 text-center bg-black text-white md:w-1/5 md:h-full">
            <a href="#project1">

              Project 4
            </a>
          </div>
        </div>
      </div>      
    </div>


*/
