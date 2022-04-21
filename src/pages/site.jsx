import React from 'react'

const Site = () => {
  return (
    <>
      <div className="flex place-content-center min-h-screen bg-white">
        <div className="flex flex-col max-w-7xl px-7 my-24 space-y-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-black text-4xl">My Peronsal Site (You're looking at it!)</h1>
          </div>
          <div className="bg-black h-px "></div>
          <h2 className="font-semibold text-2xl">Overview</h2>
          <div className="space-y-2 mx-4">
            <p>stuff here</p>
          </div>
          <h3 className="font-semibold text-2xl">Developed With</h3>
          <ul className="list-disc space-y-2 mx-9">
            <li>React</li>
            <li>Tailwind</li>
          </ul>
          <h3 className="font-semibold text-2xl">Deployed on GithubIo</h3>
          <a className="mx-4 text-blue-500 hover:text-blue-900" href="/#home" target="_blank" rel="noreferrer">Home Page</a>
          <h3 className="font-semibold text-2xl">Github</h3>
          <a className="mx-4 text-blue-500 hover:text-blue-900" href="https://github.com/wor101/personal-site" target="_blank" rel="noreferrer">github.com/wor101/personal-site</a>
        </div>
      </div>
    </>
  )
}

export default Site
