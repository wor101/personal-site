import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="flex justify-center min-h-screen text-center before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-mackinaw before:bg-center before:bg-no-repeat before:bg-cover before:bg-fixed before:opacity-40 before:min-h-screen ">
      <div className="relative grow flex flex-col max-w-7xl px-7 place-content-center">
        <h1 className="font-sans font-bold text-5xl text-white uppercase">Will Rossen</h1>
        <h2 className="font-sans text-xl text-white uppercase tracking-widest">Full Stack Software Developer</h2>
        <hr className="my-4 h-px bg-white w-full"></hr>
        <div>
          <a href="#about" className="font-sans text-white uppercase border border-white py-2 px-4 rounded-full hover:bg-white hover:text-black">Read More</a>
        </div>          
      </div>
    </section>
  )
}

export default Hero
