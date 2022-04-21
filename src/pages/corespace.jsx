import React from 'react'

const CoreSpace = () => {
  return (
    <>
      <div className="flex place-content-center min-h-screen bg-white">
        <div className="flex flex-col max-w-7xl px-7 my-24 space-y-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-black text-4xl">Core Space Game Aid</h1>
          </div>
          <div className="bg-black h-px "></div>
          <h2 className="font-semibold text-2xl">Overview</h2>
          <div className="space-y-2 mx-4">
            <p>Core Space is a miniatures tabletop game designed by <a href="https://battlesystems.co.uk/" className="text-blue-500 hover:text-blue-900" target="_blank" rel="noreferrer">Battle Systems</a>.</p>
            <p>Each player controls a crew made up of traders. These traders are distinguished by skills represented by an icon on their trader board. Due to the number of skills, icons, and associated abilities, it is quite difficult to keep track of what a particular trader is capable of. This simple web app is designed to speed up play by reducing the amount of time needed to look up a traders trained skills.</p>
            <p>Skill and trader class data is stored as a YAML file for easy expansion in the future. Users of the app can create a crew consisting of traders. Each trader can choose a class, skills, and skill levels to be trained in. Once a crew is created, the user can select any trader to quickly see only the skills that trader is trained in and details on what the skill does.</p>
            <p>All data is stored in the users cookie and will be erased upon deletion.</p>
          </div>
          <h3 className="font-semibold text-2xl">Developed and Tested With</h3>
          <ul className="list-disc space-y-2 mx-9">
            <li>Ruby</li>
            <li>Sinatra</li>
            <li>Minitest</li>
          </ul>
          <h3 className="font-semibold text-2xl">Deployed on Heroku</h3>
          <a className="mx-4 text-blue-500 hover:text-blue-900" href="https://wor101-corespace.herokuapp.com/" target="_blank" rel="noreferrer">Core Space Game Aid</a>
          <h3 className="font-semibold text-2xl">Github</h3>
          <a className="mx-4 text-blue-500 hover:text-blue-900" href="https://github.com/wor101/corespace" target="_blank" rel="noreferrer">github.com/wor101/corespace</a>
        </div>
      </div>
    </>
  )
}

export default CoreSpace