import "./App.css";
import { useEffect } from "react";
import Home from "./components/01_home.jsx";
import Gallery from "./components/02_gallery.jsx";
import Map from "./components/03_map.jsx";
import EndLetter from "./components/04_endLetter.jsx";
//import Albums from "./components/04_albums.jsx";
// Version 2.11 | New Font
// To do list

function App() {
  useEffect(() => {
    document.title = `plwtx | 0x706C777478`;
  }, []);
  return (
    <section className="snap-y snap-mandatory scroll-smooth h-screen overflow-scroll overflow-x-hidden">
      <Home />
      <Gallery />
      <Map />
      <EndLetter />
      {/* <Albums /> */}
    </section>
  );
}

export default App;
