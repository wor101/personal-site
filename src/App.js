import './App.css';
import { Navbar } from './components/Navbar'
import Dropdown from './components/Dropdown';
import { useState, useEffect } from 'react'

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
    console.log('Toggling Dropdown')
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && dropdownVisible === true) {
        setDropdownVisible(false);
        console.log('resized dropdown');
      }
    }

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  }, [dropdownVisible]);

  return (
    <div className="bg-black">
      <Navbar toggleDropdown={toggleDropdown} />
      {dropdownVisible ? <Dropdown toggleDropdown={toggleDropdown} /> : null}
      

      <section className="flex justify-center min-h-screen text-center before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-mackinaw before:bg-center before:bg-no-repeat before:bg-cover before:bg-fixed before:opacity-40 before:min-h-screen ">
        <div className="relative grow flex flex-col max-w-7xl px-7 place-content-center">
          <h1 className="font-sans font-bold text-5xl text-white uppercase">Will Rossen</h1>
          <h2 className="font-sans text-xl text-white uppercase tracking-widest">Full Stack Software Developer</h2>
          <hr className="my-4 h-px bg-white w-full"></hr>
          <div>
            <a href="#about" className="font-sans text-white uppercase border border-white py-2 px-4 rounded-full hover:bg-white hover:text-black">Read More</a>
          </div>          
        </div>
      </section>
      <p className="text-white-700">stuff</p>
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