import "./App.css";
import { useEffect } from "react";
import Home from "./components/01_home.jsx";
import About from "./components/03_about.jsx";
import Gallery from "./components/02_gallery.jsx";

// To do list

function App() {
  useEffect(() => {
    document.title = `plwtx | 0x706C777478`;
  }, []);
  return (
    <section className="snap-y snap-mandatory scroll-smooth h-screen overflow-scroll overflow-x-hidden">
      <Home />
      <Gallery />
      <About />
    </section>
  );
}

export default App;
