import React from 'react'
import coreSpace from '../images/space-ship-core-space.jpg'
import mello from '../images/mello-screenshot.png'
import requestotron from '../images/requestotron.png'
import npcTracker from '../images/dungeons-and-dragons-npc-tracker.jpg'
import mackinaw from '../images/mackinaw_sunset_1.jpg'

const ProjectSummary = ({ image, name, description, tech }) => {

  return (
    <div className="flex flex-col flex-grow-0 rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0 p-6 flex justify-center bg-black">
        <img className="h-40 drop-shadow-lg filter object-scale-down" src={image} alt=""></img>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-2xl font-bold text-gray-900 mt-2">{name}</p>
          <p className="mt-3 text-base text-gray-500">
            {description}
          </p>
          <p className="mt-3 text-base text-airbytepurple">
            {tech}
          </p>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div id="projects" className="flex place-content-center bg-slate-100 min-h-screen">
      <div className="grow flex flex-col  max-w-7xl px-7 pt-7 my-14  space-y-6">
        <h3 className="font-bold text-2xl uppercase text-center">Other Projects</h3>
        <div class="
            mt-12
            max-w-lg
            mx-auto
            grid
            gap-10
            xl:grid-cols-3
            lg:grid-cols-3
            md:grid-cols-2
            md:max-w-none
          ">
            <ProjectSummary image={requestotron} name="Requestotron" description="RequestBin-like tool for receiving and debugging webhooks." tech="Node.js/Express, MongoDB, Webhooks"/>
            <ProjectSummary image={mello} name="Mello" description="A trello-like app for managing tasks." tech="Node.js/Express, MongoDB, React/Redux"/>
            <ProjectSummary image={coreSpace} name="CoreSpace Game Aid" description="A game aid for the miniatures game Core Space." tech="Ruby, Sinatra, Minitest"/>
            <ProjectSummary image={npcTracker} name="NPC Tracker" description="A Sinatra app leveraging PostgreSQL for managing character interactions in RPGs" tech="Ruby, Sinatra, PostgreSQL, BCrypt"/>
        </div>
      </div>  
    </div>
  )
}

export default Projects
