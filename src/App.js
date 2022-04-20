import './App.css';

function App() {
  return (
    <div className="bg-black">
      <nav className="fixed top-0 left-0 right-0 z-30 bg-black h-14  font-semibold text-white uppercase">
        <div className="flex justify-between max-w-7xl mx-auto px-7 h-14">
          <a href="" className="flex flex-col justify-center px-3 hover:bg-slate-600">Will Rossen</a>
          <div className="flex justify-end">
            <a href="" className="md:flex hidden flex-col justify-center px-3 hover:bg-slate-600">Home</a>
            <a href="" className="md:flex hidden flex-col justify-center px-3 hover:bg-slate-600">About</a>
            <a href="" className="md:flex hidden flex-col justify-center px-3 hover:bg-slate-600">Contact</a>
            <a href="" className="md:flex hidden flex-col justify-center px-3 hover:bg-slate-600">Projects</a>
            <a href="" className="flex flex-col justify-center md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </a>
          </div>
        </div>


      </nav>
      <section className="flex justify-center min-h-screen text-center before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-mackinaw before:bg-center before:bg-no-repeat before:bg-cover before:bg-fixed before:opacity-40 before:min-h-screen ">
        <div className="relative grow flex flex-col max-w-7xl px-7 place-content-center">
          <h1 className="font-sans font-bold text-5xl text-white uppercase">Will Rossen</h1>
          <h2 className="font-sans text-xl text-white uppercase tracking-widest">Full Stack Software Developer</h2>
          <hr className="my-4 h-px bg-white w-full"></hr>
          <div>
            <a href="" className="font-sans text-white uppercase border border-white py-2 px-4 rounded-full hover:bg-white hover:text-black">Read More</a>
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