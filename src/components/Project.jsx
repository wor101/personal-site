import React from 'react'

const Project = ({ title, overview }) => {
  return (
    <>
      <div className="flex place-content-center min-h-screen bg-white">
        <div className="flex flex-col max-w-7xl px-7 my-24 space-y-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-black text-4xl">{title}</h1>
          </div>
          <div className="bg-black h-px "></div>
          <h2 className="font-semibold text-2xl">Overview</h2>
          {overview}
          <h3 className="font-semibold text-2xl">Developed and Tested With</h3>
          <ul className="list-disc space-y-2 mx-9">
            <li>Ruby</li>
            <li>Sinatra</li>
            <li>Minitest</li>
          </ul>
          <h3 className="font-semibold text-2xl">Deployed on Heroku</h3>
          <a className="mx-4 text-blue-500 hover:text-blue-900" href="https://wor101-corespace.herokuapp.com/" target="_blank" rel="noopener noreferrer">Core Space Game Aid</a>
          <h3 className="font-semibold text-2xl">Github</h3>
          <a rel="noopener noreferrer" target="_blank" className="mx-4 text-blue-500 hover:text-blue-900" href="https://github.com/wor101/corespace"  >github.com/wor101/corespace</a>
        </div>
      </div>
    </>
  )
}

export default Project
