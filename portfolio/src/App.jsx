import "./App.css";
import { useState, useEffect } from "react";
import Gallery from "./components/gallery.jsx";
import End from "./components/end.jsx";
import Profile from "./components/profile.jsx";
import Home from "./components/home.jsx";

// To do list

function App() {
  useEffect(() => {
    document.title = `こんにちは世界 | 0x706C777478`;
  }, []);
  return (
    <section className="snap-y snap-mandatory scroll-smooth h-screen overflow-scroll overflow-x-hidden">
      <Home />
      <Gallery />
    </section>
  );
}

export default App;
