import "./App.css";
<link href="/dist/output.css" rel="stylesheet"></link>;

function App() {
  return (
    <div className="">
      <section className=" min-h-screen bg-len-Black flex-col flex justify-center items-center">
        <h1 className="text-len-Green py-36 font-jiro text-[3rem]">plwtx</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-20 animate-bounce text-len-Green"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </section>
      <section className=" min-h-screen bg-len-White flex-col flex justify-center items-center">
        <h4 className="text-len-Black py-36 font-kilo text-xl">
          Welcome to the Len Hera's personal portfolio website.
        </h4>
      </section>
    </div>
  );
}

export default App;
