import './App.css';

function App() {
  return (
    <div className="bg-black">
      <div className="absolute top-0 left-0 right-0 bg-mackinaw blur-[.10rem] bg-center bg-no-repeat bg-cover bg-fixed opacity-40 min-h-screen"></div>
      <span className="bg-green h-96">
        <section className="flex flex-col min-h-screen items-strectch justify-between text-center">
          <h1 className="text-xl text-red-900">Will Rossen</h1>
        </section>
      </span>
      <p>stuff</p>
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


*/