import "./App.css";
import { useEffect } from "react";
import Gallery from "./components/gallery.jsx";
import Home from "./components/home.jsx";

// To do list

function App() {
  useEffect(() => {
    document.title = `plwtx | 0x706C777478`;
  }, []);
  return (
    <section className="snap-y snap-mandatory scroll-smooth h-screen overflow-scroll overflow-x-hidden">
      <Home />
      <Gallery />
    </section>
  );
}

export default App;
