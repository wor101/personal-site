import React from 'react'

const navLinkFormatting = "flex flex-col justify-center px-3 font-semibold text-white uppercase hover:bg-slate-600"

const NavLink = ({ href, text}) => {
  return (
    <a href={href} className={"hidden md:" + navLinkFormatting}>{text}</a>
  )
}

const MenuIcon = ({ toggleDropdown }) => {
  return (
    <button onClick={toggleDropdown} className="flex flex-col justify-center md:hidden">
      <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
    </button>
  )
}

const Navbar = ({ toggleDropdown }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-black h-14">
      <div className="flex justify-between max-w-7xl mx-auto md:px-7 h-14">
        <a href="#home" className={navLinkFormatting}>Will Rossen</a>
        <div className="flex justify-end">
          <NavLink href="/" text="Home" />
          <NavLink href="#about" text="About" />
          <NavLink href="#contact" text="Contact" />
          <NavLink href="/projects" text="Projects" />
          <MenuIcon toggleDropdown={toggleDropdown} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
