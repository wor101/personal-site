import React from 'react'

const navLinkFormatting = "flex flex-col justify-center px-3 h-14 bg-black font-semibold text-white uppercase text-center hover:bg-slate-600"

const NavLink = ({ href, text, toggleDropdown}) => {
  return (
    <a href={href} className={navLinkFormatting} onClick={toggleDropdown}>{text}</a>
  )
}

const Dropdown = ({toggleDropdown}) => {
  return (
    <div className="fixed top-14 left-0 right-0 z-30">
      <NavLink href="/" text="Home" toggleDropdown={toggleDropdown} />
      <NavLink href="#about" text="About" toggleDropdown={toggleDropdown} />
      <NavLink href="#contact" text="Contact" toggleDropdown={toggleDropdown} />
      <NavLink href="/projects" text="Projects" toggleDropdown={toggleDropdown} />
    </div>
  )
}

export default Dropdown
