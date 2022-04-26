import React from 'react'
import chimeraLogo from  '../images/Chimera_graphic_color.png'
import chimeraLogoText from '../images/Chimera_logo_on_dark.png'
import chimeraDiagram from '../images/Canary-Full-Diagram.png'

const Chimera = () => {
  return (
    <div id="chimera" className="flex place-content-center min-h-screen bg-white">
      <div className="flex flex-wrap md:flex-nowrap place-content-center items-center max-w-7xl px-7 py-7 overflow-hidden">
        <div className="flex flex-col bg-[#66AC9A] rounded-full shadow-2xl">
          <a href="https://chimera-deploy.dev/">
            <figure>
              <img src={chimeraLogo} alt="chimera logo"></img>
            </figure>
          </a>
        </div>
        <div className="flex flex-col px-6 py-6 space-y-4">
          <h2 className="font-koulen md:text-9xl text-8xl text-center">CHIMERA</h2>
          <p className="text-xl mx-6">An open-source tool for performing automated canary deployments of containerized microservices.</p>
          <p className="text-xl mx-6">It allows software development teams to safely and easily deploy new versions of their microservices by taking advantage of the features provided by their existing service mesh.</p>
          <p className="text-xl mx-6">Developed using JavaScript, Node.JS, Express, React, Redux, Docker, Nginx, AWS: ECS, AppMesh, and Fargate.</p>
          <a href="https://chimera-deploy.dev/">
            <figure className="flex place-content-center">
              <img src={chimeraDiagram} alt="chimera logo" className="max-h-80 shadow-2xl"></img>
            </figure>
          </a>
          <div className="flex place-content-center text-xl">
            <a href="https://chimera-deploy.dev/" target="_blank" rel="noreferrer" className="mt-6 grow max-w-sm py-1 mx-1 border border-black rounded-full uppercase text-center hover:bg-black hover:text-white">Write Up</a>
            <a href="https://chimera-deploy.dev/#eight" target="_blank" rel="noreferrer" className="mt-6 grow max-w-sm py-1 mx-1 border border-black rounded-full uppercase text-center hover:bg-black hover:text-white">Presentation</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Chimera
