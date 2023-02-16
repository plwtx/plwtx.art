import "./App.css";
import { useEffect } from "react";
import Gallery from "./components/gallery.jsx";
import Home from "./components/home.jsx";
import HomeImages from "./components/homeImages.jsx";

// To do list

function App() {
  useEffect(() => {
    document.title = `こんにちは世界 | 0x706C777478`;
  }, []);
  return (
    <section className="snap-y snap-mandatory scroll-smooth h-screen overflow-scroll overflow-x-hidden">
      <Home />
      <Gallery />
      <HomeImages />
    </section>
  );
}

export default App;
