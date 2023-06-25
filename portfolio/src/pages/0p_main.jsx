import "../App.css";
import React, { useState, useEffect } from "react";
import Home from "../components/01_home.jsx";
import Gallery from "../components/02_gallery.jsx";
import Map from "../components/03_map.jsx";
import EndLetter from "../components/04_endLetter.jsx";
import Loading from "../components/05_loading.jsx";

function Main() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6666);
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <section className="snap-y snap-mandatory scroll-smooth h-screen overflow-scroll overflow-x-hidden">
          <Home />
          <Gallery />
          <Map />
          <EndLetter />
        </section>
      )}
    </div>
  );
}

export default Main;
