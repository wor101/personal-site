import React from 'react'
import chimeraLogo from  '../images/Chimera_graphic_color.png'
import chimeraLogoText from '../images/Chimera_logo_on_dark.png'
import chimeraDiagram from '../images/Canary-Full-Diagram.png'

const Chimera = () => {
  return (
    <div id="chimera" className="flex place-content-center min-h-screen bg-white">
      <div className="flex flex-wrap md:flex-nowrap place-content-center items-center max-w-7xl px-7 py-7">
        <div className="flex flex-col bg-[#66AC9A] rounded-full">
          <a href="https://chimera-deploy.dev/">
            <figure>
              <img src={chimeraLogo} alt="chimera logo"></img>
            </figure>
          </a>
        </div>
        <div className="flex flex-col px-6 py-6 space-y-4">
          <h2 className="font-koulen text-9xl text-center">CHIMERA</h2>
          <p className="text-xl">An open-source tool for performing automated canary deployments of containerized microservices.</p>
          <p className="text-xl">It allows software development teams to safely and easily deploy new versions of their microservices by taking advantage of the features provided by their existing service mesh</p>
          <a href="https://chimera-deploy.dev/">
            <figure className="flex place-content-center">
              <img src={chimeraDiagram} alt="chimera logo" className="max-h-96 max-w-96"></img>
            </figure>
          </a>
          <div className="flex place-content-center text-xl">
            <a href="https://chimera-deploy.dev/" target="_blank" rel="noreferrer" className="mt-6 grow max-w-sm py-1 mx-1 border border-black rounded-full uppercase text-center hover:bg-black hover:text-white">Write Up</a>
            <a href="https://chimera-deploy.dev/presentation" target="_blank" rel="noreferrer" className="mt-6 grow max-w-sm py-1 mx-1 border border-black rounded-full uppercase text-center hover:bg-black hover:text-white">Presentation</a>
          </div>
        </div>

      </div>
      {/* <div id="chimera" className="grow flex flex-col max-w-7xl px-7 place-content-center items-center space-y-2">
        CHIMERA
      </div> */}
    </div>
  )
}

export default Chimera
