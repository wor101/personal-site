import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dropdown from './components/Dropdown'
import Home from './pages/home'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects';

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
    console.log('Toggling Dropdown')
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && dropdownVisible === true) {
        setDropdownVisible(false)
        console.log('resized dropdown')
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  }, [dropdownVisible]);

  return (
    <div className="bg-black">
      <Navbar toggleDropdown={toggleDropdown} />
      {dropdownVisible ? <Dropdown toggleDropdown={toggleDropdown} /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>      
      <Footer />
    </div>
  );
}

export default App;



/*
    <div className="bg-gradient-to-t from-black to-gray-700">
      <div className="bg-mackinaw blur-[.10rem] bg-center bg-no-repeat bg-cover bg-fixed opacity-40 h-96"></div>
      <span className="bg-green h-96">
        <section className="flex flex-col min-h-screen items-strectch justify-between text-center">
          <h1 className="text-xl text-red-900">Will Rossen</h1>
        </section>
      </span>
      <p>stuff</p>
    </div>



    <div className="bg-black">
        <section className="before:bg-mackinaw before:bg-center before:bg-no-repeate before:bg-cover before:bg-fixed before:opacity-40 before:min-h-screen  flex flex-col min-h-screen items-strectch justify-between text-center ">
            <h1 className="text-xl text-black ">Will Rossen</h1>
          </section>
        <p className="text-white">stuff</p>
    </div>


        <div className="bg-black">
      <span className="absolute top-0 left-0 right-0 bg-mackinaw blur-[.10rem] bg-center bg-no-repeat bg-cover bg-fixed opacity-40 min-h-screen"></span>
      <section className="flex flex-col min-h-screen items-strectch justify-between text-center">
        <h1 className="text-8xl text-white">Will Rossen</h1>
      </section>
      <p>stuff</p>
    </div>

*/