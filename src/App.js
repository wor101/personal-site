import './App.css';

function App() {
  return (
    <div className="bg-black">
        <section className="before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-mackinaw before:bg-center before:bg-no-repeat before:bg-cover before:bg-fixed before:opacity-40 before:min-h-screen flex flex-col justify-between min-h-screen items-stretch text-center ">
            <div className="relative grow flex flex-col py-12 px-6 mx-6 place-content-center ">
              <h1 className="relative font-sans font-bold text-5xl text-white uppercase">Will Rossen</h1>
              <h2 className="relative font-sans text-xl text-white uppercase tracking-widest">Full Stack Software Developer</h2>
              <hr className="my-4 h-px bg-white"></hr>
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