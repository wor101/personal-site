import React from 'react'

const NPCtracker = () => {
  return (
    <>
      <div className="flex place-content-center min-h-screen bg-white">
        <div className="flex flex-col max-w-7xl px-7 my-24 space-y-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-black text-4xl">NPC Tracker</h1>
          </div>
          <div className="bg-black h-px "></div>
          <h2 className="font-semibold text-2xl">Overview</h2>
          <div className="space-y-2 mx-4">
            <p>Sinatra app for managing character interactions in RPGs</p>
            <p>A simple CRUD app using a PostgreSQL database to manage interactions between characters (non-player characters and player characters).</p>
          </div>
          <h3 className="font-semibold text-2xl">Developed and Tested With</h3>
          <ul className="list-disc space-y-2 mx-9">
            <li>Ruby</li>
            <li>Sinatra</li>
            <li>PostgreSQL</li>
            <li>BCrypt</li>
          </ul>
          <h3 className="font-semibold text-2xl">Deployed on Heroku</h3>
          <a className="mx-4 text-blue-500 hover:text-blue-900" href="https://wor101-npc-tracker.herokuapp.com/" target="_blank" rel="noreferrer">NPC Tracker</a>
          <h3 className="font-semibold text-2xl">Github</h3>
          <a className="mx-4 text-blue-500 hover:text-blue-900" href="https://github.com/wor101/npc-tracker" target="_blank" rel="noreferrer">github.com/wor101/npc-tracker</a>
        </div>
      </div>
    </>
  )
}

export default NPCtracker
